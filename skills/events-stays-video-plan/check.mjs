#!/usr/bin/env node
// Flags lines in a video script, caption or plan that a sourced ad or claim rule says to check. Node 18+, no dependencies.
import { existsSync, readFileSync, readdirSync, realpathSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const EVERY = "every-business";

const HELP = `Usage: node check.mjs [options] [file ...]

Reads each file (or standard input) and flags every line that a rule's checks match,
with the rule, what to do and its source. A flag means "read this line again",
not "this is illegal": many flagged lines are fine once the fact is confirmed.
To check several posts in one file, put a line with only --- between them.

Options:
  --group <id>     rules for one industry group, plus the ones every business meets
                   (home, food, health, money, real-estate, legal, shops, auto, beauty,
                   learning, events, business-services, pets, or all)
  --allow <id>     skip a rule you have already handled, e.g. --group food --allow gluten-free-definition
                   (repeat it, or separate ids with commas)
  --rules <dir>    read the YAML rule files from another folder
  --text <words>   check these words instead of a file (or --text=<words>)
  --json           print the result as JSON
  --list           list the rules that would be used, then stop
  --help, -h       show this
  --               end of options: every later argument is a file

Exit code: 0 nothing flagged, 1 something flagged, 2 a usage, file or rules error.`;

/** Reads the YAML this repo writes: maps, lists, plain, quoted and folded (>-) scalars. Anything else is an error. */
export function parseYaml(text, name = "yaml") {
  const raw = text.split(/\r\n|\r|\n/);
  let at = 0;
  const fail = (n, why) => {
    throw new Error(`${name}:${n ?? "end"}: ${why}`);
  };
  const isSkip = (s) => /^\s*(?:#.*)?$/.test(s);
  const indentOf = (s, n) => {
    const m = s.match(/^[ \t]*/)[0];
    if (m.includes("\t")) fail(n, "tabs are not allowed");
    return m.length;
  };
  const next = () => {
    while (at < raw.length && isSkip(raw[at])) at++;
    if (at >= raw.length) return null;
    const s = raw[at].replace(/\s+$/, "");
    const indent = indentOf(s, at + 1);
    return { n: at + 1, indent, text: s.slice(indent) };
  };
  const TYPED = /^(?:true|false|yes|no|on|off|y|n|null|~|[-+]?(?:\d[\d_]*(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?|0x[0-9a-f]+|0o[0-7]+|0b[01]+|[-+]?\.(?:inf|nan)|\d{4}-\d\d-\d\d.*)$/i;
  const scalar = (value, n) => {
    if (value.startsWith('"')) {
      try {
        return JSON.parse(value);
      } catch {
        fail(n, "a double-quoted value must be a JSON string");
      }
    }
    if (value.startsWith("'")) {
      if (!/^'(?:[^']|'')*'$/.test(value)) fail(n, "an unclosed single-quoted value");
      return value.slice(1, -1).replace(/''/g, "'");
    }
    if (/^[[{&*!|>%@`#]/.test(value) || /: |\s#|:$/.test(value) || TYPED.test(value)) fail(n, `quote this value: ${value}`);
    return value;
  };
  const folded = (keyIndent, n) => {
    const parts = [];
    let blockIndent = null;
    while (at < raw.length) {
      if (/\S\s+$/.test(raw[at])) fail(at + 1, "trailing spaces inside a folded value are not supported");
      const s = raw[at].replace(/\s+$/, "");
      if (s === "") {
        const ahead = raw.slice(at + 1).find((x) => x.trim() !== "");
        if (ahead !== undefined && indentOf(ahead, at + 2) > keyIndent) fail(at + 1, "a blank line inside a folded value is not supported");
        break;
      }
      const indent = indentOf(s, at + 1);
      if (indent <= keyIndent) break;
      if (blockIndent === null) blockIndent = indent;
      if (indent !== blockIndent) fail(at + 1, "a more-indented line inside a folded value is not supported");
      parts.push(s.slice(indent));
      at++;
    }
    if (!parts.length) fail(n, "an empty folded value");
    return parts.join(" ");
  };
  const value = (rest, line, indent) => {
    if (rest === ">-") {
      at++;
      return folded(indent, line.n);
    }
    at++;
    if (rest !== "") return scalar(rest, line.n);
    const head = next();
    if (!head || head.indent <= indent) fail(line.n, "a key with no value");
    return block(head.indent);
  };
  const mapEntries = (target, indent, firstText, firstN) => {
    let text = firstText;
    let n = firstN;
    for (;;) {
      const m = text.match(/^([a-z][a-z0-9_]*):(?: (.*)|$)/);
      if (!m) fail(n, `expected "key: value", got: ${text}`);
      if (Object.prototype.hasOwnProperty.call(target, m[1])) fail(n, `duplicate key ${m[1]}`);
      target[m[1]] = value((m[2] ?? "").trim(), { n }, indent);
      const line = next();
      if (!line || line.indent !== indent || line.text.startsWith("- ") || line.text === "-") {
        if (line && line.indent > indent) fail(line.n, "unexpected indentation");
        return target;
      }
      text = line.text;
      n = line.n;
    }
  };
  const block = (indent) => {
    const head = next();
    if (head.text.startsWith("- ") || head.text === "-") {
      const list = [];
      for (let line = next(); line && line.indent === indent && line.text.startsWith("- "); line = next()) {
        const rest = line.text.slice(2);
        if (/^[a-z][a-z0-9_]*:(?: |$)/.test(rest)) list.push(mapEntries({}, indent + 2, rest, line.n));
        else {
          at++;
          list.push(scalar(rest, line.n));
        }
      }
      return list;
    }
    return mapEntries({}, indent, head.text, head.n);
  };
  const first = next();
  if (!first) return {};
  if (first.indent !== 0) fail(first.n, "the first key must not be indented");
  const doc = block(0);
  const rest = next();
  if (rest) fail(rest.n, "unexpected indentation");
  return doc;
}

function rulesDirOf(option) {
  if (option) return resolve(option);
  const beside = join(HERE, "rules");
  return existsSync(beside) ? beside : join(HERE, "..", "rules");
}

/** Checks one rule file's shape; throws with the file and the rule id. */
function validate(doc, path) {
  const bad = (why) => {
    throw new Error(`${path}: ${why}`);
  };
  if (typeof doc.group !== "string" || !Array.isArray(doc.rules) || !doc.rules.length) bad("needs a group and at least one rule");
  const KEYS = new Set(["id", "rule", "do", "explanation", "where", "source", "checked", "pages", "checks"]);
  const CHECK_KEYS = new Set(["match", "if_present", "when_missing", "note"]);
  for (const r of doc.rules) {
    if (!r || typeof r.id !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(r.id)) bad("a rule needs a kebab-case id");
    for (const k of Object.keys(r)) if (!KEYS.has(k)) bad(`${r.id} has an unknown field ${k}`);
    for (const k of ["rule", "do", "where", "checked"]) if (typeof r[k] !== "string" || !r[k]) bad(`${r.id} needs ${k}`);
    const url = (() => {
      try {
        return new URL(r.source?.url);
      } catch {
        return null;
      }
    })();
    const filled = (v) => typeof v === "string" && v.trim() !== "";
    if (!r.source || !filled(r.source.title) || !filled(r.source.publisher) || !url || url.protocol !== "https:" || !url.hostname.includes(".")) bad(`${r.id} needs a source title, publisher and url`);
    if (!Array.isArray(r.checks) || !r.checks.length) bad(`${r.id}: checks must be a list with at least one check`);
    for (const c of r.checks) {
      if (!c || typeof c !== "object" || Array.isArray(c)) bad(`${r.id}: a check must be a map`);
      for (const k of Object.keys(c)) if (!CHECK_KEYS.has(k)) bad(`${r.id}: a check has an unknown field ${k}`);
      for (const k of CHECK_KEYS) if (c[k] !== undefined && !filled(c[k])) bad(`${r.id}: a check's ${k} must be text`);
      if (typeof c.note !== "string" || !c.note) bad(`${r.id}: every check needs a note`);
      if (Boolean(c.match) === Boolean(c.when_missing)) bad(`${r.id}: a check has exactly one of match or when_missing`);
      if (c.if_present && !c.when_missing) bad(`${r.id}: if_present goes with when_missing`);
      for (const p of [c.match, c.if_present, c.when_missing].filter(Boolean)) {
        try {
          new RegExp(p, "giu");
        } catch (error) {
          bad(`${r.id}: ${error.message}`);
        }
      }
    }
  }
}

/** Loads the rule files for a group: every-business.yaml, then <group>.yaml (or every file for "all"). */
export function loadRules({ dir, group } = {}) {
  const folder = rulesDirOf(dir);
  if (!existsSync(folder)) throw new Error(`no rules folder at ${folder}`);
  const files = readdirSync(folder).filter((f) => f.endsWith(".yaml")).sort();
  if (!files.includes(`${EVERY}.yaml`)) throw new Error(`no ${EVERY}.yaml in ${folder}`);
  const groups = files.map((f) => f.replace(/\.yaml$/, "")).filter((g) => g !== EVERY);
  let picked = group;
  let hint = "";
  const besideScript = !dir && folder === join(HERE, "rules");
  if (besideScript && groups.length !== 1) throw new Error(`the rules folder beside this checker should hold every-business.yaml and one industry file; it holds ${files.join(", ")}`);
  if (!picked) {
    if (groups.length === 1) picked = groups[0];
    else hint = `Only the rules every business meets were used. Add --group <id> for your industry: ${groups.join(", ")}.`;
  }
  if (picked && picked !== "all" && !groups.includes(picked)) throw new Error(`unknown group "${picked}"; pick one of: ${groups.join(", ")}, all`);
  const wanted = picked === "all" ? [EVERY, ...groups] : [EVERY, ...(picked ? [picked] : [])];
  const rules = [];
  const seen = new Map();
  for (const g of wanted) {
    const path = join(folder, `${g}.yaml`);
    const text = readFileSync(path, "utf8");
    const doc = parseYaml(text, path);
    validate(doc, path);
    if (doc.group !== g) throw new Error(`${path}: says group ${doc.group}`);
    for (const rule of doc.rules) {
      const same = JSON.stringify(rule);
      if (seen.has(rule.id)) {
        if (seen.get(rule.id) !== same) throw new Error(`${path}: rule ${rule.id} differs from an earlier file`);
        continue;
      }
      seen.set(rule.id, same);
      rules.push({ ...rule, group: doc.group, compiled: compileChecks(rule) });
    }
  }
  return { rules, group: picked ?? EVERY, hint };
}

function compileChecks(rule) {
  return (rule.checks ?? []).map((check) => ({
    ...check,
    re: check.match ? new RegExp(check.match, "giu") : null,
    when: check.if_present ? new RegExp(check.if_present, "iu") : null,
    missing: check.when_missing ? new RegExp(check.when_missing, "iu") : null,
  }));
}

/** Straight quotes and plain hyphens, so curly apostrophes and non-breaking hyphens match the patterns. */
const normalize = (text) => text.replace(/[\u2018\u2019\u02bc]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2010-\u2013\u2212]/g, "-");

/** Every flag for one text: a line flag per matching pattern, and a flag per post (posts split by a "---" line) missing a required line. */
export function checkText(text, rules, { allow = [] } = {}) {
  const flags = [];
  const original = text.split(/\r\n|\r|\n|\u2028|\u2029/);
  const lines = original.map(normalize);
  const posts = [];
  let start = 0;
  original.forEach((line, i) => {
    if (line.trim() === "---") {
      posts.push([start, i]);
      start = i + 1;
    }
  });
  posts.push([start, lines.length]);
  for (const rule of rules) {
    if (allow.includes(rule.id)) continue;
    for (const check of rule.compiled) {
      if (check.missing) {
        posts.forEach(([from, to], p) => {
          const body = lines.slice(from, to).join("\n");
          if (!body.trim()) return;
          if ((!check.when || check.when.test(body)) && !check.missing.test(body)) {
            flags.push(flagOf(rule, check, { line: 0, post: posts.length > 1 ? p + 1 : 0, from: from + 1, text: "", found: "" }));
          }
        });
        continue;
      }
      lines.forEach((line, i) => {
        check.re.lastIndex = 0;
        const hit = check.re.exec(line);
        const post = posts.length > 1 ? posts.findIndex(([from, to]) => i >= from && i < to) + 1 : 0;
        if (hit) flags.push(flagOf(rule, check, { line: i + 1, post, text: original[i].trim(), found: hit[0] }));
      });
    }
  }
  return flags.sort((a, b) => (a.line || a.from) - (b.line || b.from));
}

const flagOf = (rule, check, at) => ({
  ...at,
  rule: rule.id,
  says: rule.rule,
  do: rule.do,
  note: check.note,
  where: rule.where,
  source: rule.source.url,
  checked: rule.checked,
});

function report(name, flags) {
  if (!flags.length) return `${name}: nothing flagged\n`;
  const out = [];
  for (const f of flags) {
    out.push(f.line ? `${name}:${f.line}  "${f.text}"` : `${name}  (${f.post ? `post ${f.post}, from line ${f.from}` : "whole text"})`);
    out.push(`  ${f.found ? `Found "${f.found}". ` : ""}${f.note}`);
    out.push(`  Practice (${f.rule}): ${f.do}`);
    out.push(`  The source says: ${f.says}`);
    out.push(`  Applies in: ${f.where}. Source, read ${f.checked}: ${f.source}`);
    out.push("");
  }
  const lineFlags = flags.filter((f) => f.line);
  const lines = new Set(lineFlags.map((f) => f.line)).size;
  const missing = flags.length - lineFlags.length;
  const parts = [];
  if (lineFlags.length) parts.push(`${lineFlags.length} flag${lineFlags.length === 1 ? "" : "s"} on ${lines} line${lines === 1 ? "" : "s"}`);
  if (missing) parts.push(`${missing} missing line${missing === 1 ? "" : "s"}`);
  out.push(`${name}: ${parts.join(" and ")} to check`);
  return `${out.join("\n")}\n`;
}

function parseArgs(argv) {
  const args = { files: [], allow: [], json: false, list: false };
  let options = true;
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (options && a === "-h") {
      args.help = true;
      continue;
    }
    if (!options || !a.startsWith("--")) {
      args.files.push(a);
      continue;
    }
    const eq = a.indexOf("=");
    const flag = eq > 0 ? a.slice(0, eq) : a;
    const next = () => {
      const v = eq > 0 ? a.slice(eq + 1) : argv[i + 1];
      if (eq <= 0 && (v === undefined || v.startsWith("--"))) throw new Error(`${flag} needs a value (use ${flag}=<value> for a value that starts with --)`);
      if (!v.trim() && flag !== "--text") throw new Error(`${flag} needs a value`);
      if (eq <= 0) i++;
      return v;
    };
    const bare = () => {
      if (eq > 0) throw new Error(`${flag} takes no value`);
      return true;
    };
    if (a === "--") options = false;
    else if (flag === "--help") args.help = bare();
    else if (flag === "--group") args.group = next();
    else if (flag === "--allow") args.allow.push(...next().split(",").filter(Boolean));
    else if (flag === "--rules") args.dir = next();
    else if (flag === "--text") args.text = next();
    else if (flag === "--json") args.json = bare();
    else if (flag === "--list") args.list = bare();
    else throw new Error(`unknown option ${a}`);
  }
  return args;
}

async function main() {
  let args;
  try {
    args = parseArgs(process.argv.slice(2));
  } catch (error) {
    process.stderr.write(`${error.message}\n\n${HELP}\n`);
    return 2;
  }
  if (args.help) {
    process.stdout.write(`${HELP}\n`);
    return 0;
  }
  let loaded;
  try {
    loaded = loadRules({ dir: args.dir, group: args.group });
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }
  const { rules, hint } = loaded;
  const unknown = args.allow.filter((id) => !rules.some((r) => r.id === id));
  if (unknown.length) {
    process.stderr.write(`--allow names no loaded rule: ${unknown.join(", ")}\n`);
    return 2;
  }
  const active = rules.filter((r) => !args.allow.includes(r.id));
  if (args.list) {
    const rows = active.map((r) => ({ id: r.id, group: r.group, where: r.where, rule: r.rule, do: r.do, source: r.source.url }));
    process.stdout.write(args.json ? `${JSON.stringify(rows, null, 2)}\n` : rows.map((r) => `${r.id} [${r.group}, ${r.where}]\n  Practice: ${r.do}\n  The source says: ${r.rule}\n  ${r.source}\n`).join(""));
    return 0;
  }
  const inputs = [];
  try {
    if (args.text !== undefined) inputs.push({ name: "text", text: args.text });
    for (const file of args.files) inputs.push({ name: file, text: readFileSync(file, "utf8") });
    if (!inputs.length) {
      if (process.stdin.isTTY) {
        process.stderr.write(`${HELP}\n`);
        return 2;
      }
      process.stdin.setEncoding("utf8");
      let text = "";
      for await (const chunk of process.stdin) text += chunk;
      inputs.push({ name: "stdin", text });
    }
  } catch (error) {
    process.stderr.write(`${error.message}\n`);
    return 2;
  }
  const results = inputs.map(({ name, text }) => ({ name, flags: checkText(text, active) }));
  if (args.json) process.stdout.write(`${JSON.stringify({ group: loaded.group, rules: active.length, results }, null, 2)}\n`);
  else {
    if (hint) process.stderr.write(`${hint}\n`);
    process.stdout.write(results.map((r) => report(r.name, r.flags)).join("\n"));
  }
  return results.some((r) => r.flags.length) ? 1 : 0;
}

const realOf = (p) => {
  try {
    return realpathSync(p);
  } catch {
    return resolve(p);
  }
};
if (process.argv[1] && realOf(process.argv[1]) === realOf(fileURLToPath(import.meta.url))) {
  main().then((code) => {
    process.exitCode = code;
  });
}
