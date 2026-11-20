// Renders skills/<skill>/ (SKILL.md, README.md, check.mjs, rules/) and rules/README.md from scripts/groups.mjs, rules/*.yaml and
// checker/check.mjs.
// Usage: node scripts/build.mjs          (write, and remove outputs that no longer belong)
//        node scripts/build.mjs --check  (exit 1 if any file differs from what it would write)
import { existsSync, mkdirSync, readFileSync, readdirSync, realpathSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseYaml } from "../checker/check.mjs";
import { GROUPS } from "./groups.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
export const SOFT_LINE = "If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com";
const REPO = "viewgum/business-video-skills";
const MARKET = "viewgum-business";
const PLUGIN = "business-video-skills";
const ORDER = ["every-business", "home", "food", "health", "money", "real-estate", "legal", "shops", "auto", "beauty", "learning", "events", "business-services", "pets"];

const read = (p) => readFileSync(join(ROOT, p), "utf8");
const rulesOf = (group) => parseYaml(read(`rules/${group}.yaml`), `${group}.yaml`);
const md = (s) => String(s).replace(/\|/g, "\\|");

function typesTable(g) {
  return [
    "| Type | What it shows | Example titles |",
    "|---|---|---|",
    ...g.types.map((t) => `| ${md(t.type)} | ${md(t.shows)} | ${t.examples.map((e) => md(e)).join("; ")} |`),
  ].join("\n");
}

function ruleLines(doc) {
  return doc.rules.map((r) => `- **${r.do}** ${r.rule} Applies in: ${r.where}. Source: [${r.source.title}](${r.source.url}), read ${r.checked}. Id \`${r.id}\`.`);
}

const TOPICS = {
  home: "contractor license numbers, fair housing, green claims, lead-safe work, silica dust, treated wood, solar credits and savings",
  food: "allergens, gluten-free, tobacco and TikTok's regulated goods",
  health: "health claims and patient privacy",
  money: "Circular 230, client return information, the SEC marketing rule, FINRA, insurance promises and Regulation Z",
  "real-estate": "fair housing and the REALTOR Code of Ethics",
  shops: "lilies and cats",
  auto: "warranties and third-party parts",
  beauty: "hair dye patch tests and drug claims",
  learning: "safe sleep scenes",
  events: "total prices for tickets and stays",
  "business-services": "security claims",
  pets: "diagnosis and dosing",
};

function skillMd(g, doc, every) {
  const description = `Use when ${g.whoLong} want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (${TOPICS[doc.group]}, plus endorsements, reviews and copyright).`;
  if (description.length > 1024) throw new Error(`${g.skill}: description is ${description.length} characters`);
  return `---
name: ${g.skill}
description: ${description}
---

# Short video plan for ${g.who}

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For ${g.whoLong}.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: ${g.goals}.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read \`rules/every-business.yaml\` and \`rules/${doc.group}.yaml\` beside this file, and note the rules that touch this
   business and its place.
2. Pick the mix: at least five of the idea types below, no more than three ideas of one type, and one idea for each moment in
   the next 30 days that fits the business.
3. Write the 15 ideas. For each give a working title; the hook, the first line said or shown, under 12 words, that starts on the
   thing itself (never "in today's video"); what the video shows, in three beats; how to make it; a length from 15 to 60
   seconds; and Confirm: each fact the owner must check before posting.
4. Never invent a price, discount, hour, award, year in business, review, quote, license, certification, result or number about
   the business. Write [owner to add] in its place.
5. Check the lines. With Node 18 or newer, write each video's title, hook, beats and caption to one file, with a line holding
   only \`---\` between videos, and run \`node "<this skill's folder>/check.mjs" posts.txt\` as one command, with the folder's full
   path and no \`cd\`. It reads the rules beside it. Check the words that will be said, shown or posted, not your notes about the
   rules. Without Node, go through the rules by hand.
6. Act on each flag by what the rule asks. If it forbids the wording (a promised result, a cure, a guarantee, a word a
   designation may not use), rewrite the line. If it needs a fact to be true (gluten-free, a rating), evidence (a study, a
   ranking's source), a signed authorization (a patient) or something added (a license number, a total price, a disclosure),
   keep the line only once the owner has that or adds the missing part, and list it under Confirm. A flag on a line that
   already says the careful thing (no guarantee, a patch test first) can stay as it is. \`--allow <rule-id>\` skips a rule
   only after that is done for every line.
7. Build the 30-day calendar: 15 posting days, about every other day (days 1, 3, 5 and so on to 29), or on the weekdays the
   person named. Start with an easy idea, never put two ideas of one type side by side, and place each timely idea a few days
   before its moment. One vertical (9:16) video can go to TikTok, Instagram Reels, YouTube Shorts and Facebook Reels.
8. Write a caption starter for each posting day: one plain sentence on what the video shows, then where the business is. Check
   the captions too.
9. Finish with Before you post: the facts to confirm, and each rule that touched the plan with its source link.

## Idea types

${typesTable(g)}

## Moments in the year

${g.moments.map((m) => `- ${m}`).join("\n")}

## How to make them

${g.film}

## Rules for ${doc.name.toLowerCase()}

Each rule in bold is the practice for short videos; after it comes what the source says. From \`rules/${doc.group}.yaml\`:

${ruleLines(doc).join("\n")}

And from \`rules/every-business.yaml\`, for every business:

${ruleLines(every).join("\n")}

## Output format

\`\`\`markdown
## 15 video ideas for <business>

| # | Title | Hook | What it shows | How to make it | Length | Confirm |
|---|---|---|---|---|---|---|
| 1 | <title> | <first line> | <beat 1; beat 2; beat 3> | <phone, hands only, or animated> | <seconds> | <facts to check, or none> |

## 30-day calendar

| Day | Date | Video | Caption starter |
|---|---|---|---|
| 1 | <date or weekday> | Idea <n>: <title> | <one sentence, then the place> |

## Claim check

<each flag the checker or your reading found, and what changed; or "Nothing flagged">

## Before you post

- Confirm: <fact> (idea <n>)
- Rule: <rule> (<source link>)
\`\`\`

## Common pitfalls

${[
    ...g.pitfalls,
    "Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.",
    "A call to action on every video. Ask for one specific thing, and only where it fits.",
    "Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.",
  ]
    .map((p) => `- ${p}`)
    .join("\n")}

${SOFT_LINE}
`;
}

function readmeMd(g, doc, every) {
  const sources = [...new Set(doc.rules.map((r) => r.source.publisher))].join(", ");
  return `# ${g.title}

${g.intro}

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[${REPO}](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against ${doc.rules.length + every.rules.length} sourced ad and claim rules
  (${doc.rules.length} for this group from ${sources}, and ${every.rules.length} for every business)

A full example, made by running this skill for a made-up business, is in
[examples/${doc.group}.md](../../examples/${doc.group}.md).

## Use it

In Claude Code:

\`\`\`sh
claude plugin marketplace add ${REPO}
claude plugin install ${PLUGIN}@${MARKET}
\`\`\`

Then ask, for example: "Plan a month of short videos for ${g.exampleBusiness}." The skill also runs as
\`/${PLUGIN}:${g.skill}\`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

\`\`\`sh
npx skills add ${REPO} --skill ${g.skill}
\`\`\`

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

\`\`\`sh
node check.mjs my-script.txt
\`\`\`

## Kinds of videos that suit ${g.who}

${typesTable(g)}

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
${doc.rules.map((r) => `| ${md(r.do)} | ${md(r.rule)} | ${md(r.where)} | [${md(r.source.title)}](${r.source.url}) | ${r.checked} |`).join("\n")}

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

${SOFT_LINE}
`;
}

function rulesReadme(docs) {
  const total = new Set(docs.flatMap((d) => d.rules.map((r) => r.id))).size;
  const checked = [...new Set(docs.flatMap((d) => d.rules.map((r) => r.checked)))].sort().join(", ");
  const rows = docs.flatMap((d) => d.rules.map((r) => `| ${md(d.name)} | \`${r.id}\` | ${md(r.do)} | ${md(r.where)} | [${md(r.source.title)}](${r.source.url}) | ${r.checked} |`));
  const files = docs.map((d) => `- [\`${d.group}.yaml\`](${d.group}.yaml): ${d.name}. ${d.about}`);
  return `# Ad and claim rules for small-business videos

What a short video for a small business may and may not say, by industry: what the source says, the practice for short videos,
where it applies, the source and the day it was read. ${docs.length - 1} industry groups plus the rules every business meets;
${total} rules in all.

Every rule comes from ViewGum's industry pages (https://viewgum.com/for), where each one sits beside its source, and was read
again against that source on ${checked}. This is general information, not legal advice. Most rules are United States rules;
each one says where it applies. States and other countries add their own, so check yours.

## Files

${files.join("\n")}

The claim checker reads these files: \`node checker/check.mjs --group food script.txt\`.

## Fields

| Field | What it holds |
|---|---|
| \`id\` | A stable name for the rule, used by the checker's \`--allow\` |
| \`rule\` | What the source says, close to its own words |
| \`do\` | The practice for short videos, as ViewGum's industry pages apply the rule; where it goes beyond the source, it says so |
| \`explanation\` | Qualifiers, exceptions and how the industry pages use the rule |
| \`where\` | Where, or for whom, the rule applies |
| \`source\` | The publisher, title and address of the source, and \`dated\`: the date the source shows, with its own label (updated, reviewed, effective, issued), when it shows one |
| \`checked\` | The day we last read the source and confirmed the rule against it |
| \`pages\` | ViewGum's industry pages that state the rule |
| \`checks\` | Patterns the checker uses to flag lines worth a second look (\`match\`), or a line each post should have and does not (\`when_missing\`, only when \`if_present\` matches if it is given). Patterns are JavaScript regular expressions, matched without regard to case. They are this repository's own heuristics, not part of any source |

## Every rule

| Group | Id | Practice | Where | Source | Checked |
|---|---|---|---|---|---|
${rows.join("\n")}

## Citing

Please cite as: ViewGum, Business Video Skills, ad and claim rules (${checked}), CC BY 4.0, at
https://github.com/viewgum/business-video-skills

Cite each rule's own source for the law itself.
`;
}

function outputs() {
  const files = new Map();
  const checker = read("checker/check.mjs");
  const docs = ORDER.map(rulesOf);
  const every = docs[0];
  files.set("rules/README.md", rulesReadme(docs));
  for (const g of GROUPS) {
    const doc = docs.find((d) => d.group === g.group);
    const dir = `skills/${g.skill}`;
    files.set(`${dir}/SKILL.md`, skillMd(g, doc, every));
    files.set(`${dir}/README.md`, readmeMd(g, doc, every));
    files.set(`${dir}/check.mjs`, checker);
    files.set(`${dir}/rules/every-business.yaml`, read("rules/every-business.yaml"));
    files.set(`${dir}/rules/${g.group}.yaml`, read(`rules/${g.group}.yaml`));
  }
  return files;
}

const OWNED = /^skills\/[a-z0-9-]+\/(?:SKILL\.md|README\.md|check\.mjs|rules\/[a-z0-9-]+\.yaml)$/;

/** Files under skills/ that the build does not write: `owned` ones (leftovers in the build's own skill folders) it may delete, `other` ones it only reports. */
function extras(files) {
  const known = new Set(GROUPS.map((g) => g.skill));
  const owned = [];
  const other = [];
  const walk = (rel) => {
    for (const e of readdirSync(join(ROOT, rel), { withFileTypes: true })) {
      const p = `${rel}/${e.name}`;
      if (e.isDirectory()) walk(p);
      else if (!files.has(p)) (OWNED.test(p) && known.has(p.split("/")[1]) ? owned : other).push(p);
    }
  };
  if (existsSync(join(ROOT, "skills"))) walk("skills");
  return { owned, other };
}

export function stale() {
  const files = outputs();
  const out = [];
  for (const [path, body] of files) {
    const full = join(ROOT, path);
    if (!existsSync(full) || readFileSync(full, "utf8") !== body) out.push(path);
  }
  const { owned, other } = extras(files);
  return [...out, ...owned.map((p) => `${p} (left over; the build removes it)`), ...other.map((p) => `${p} (not the build's; move it out of skills/)`)];
}

if (process.argv[1] && realpathSync(process.argv[1]) === realpathSync(fileURLToPath(import.meta.url))) {
  const opts = process.argv.slice(2);
  const unknown = opts.filter((o) => o !== "--check");
  if (unknown.length) {
    console.error(`unknown option ${unknown.join(" ")}; use --check or nothing`);
    process.exit(2);
  }
  if (opts.includes("--check")) {
    const bad = stale();
    if (bad.length) {
      console.error(`out of date, run node scripts/build.mjs:\n${bad.join("\n")}`);
      process.exit(1);
    }
    console.log("skills are up to date");
  } else {
    const files = outputs();
    const { owned, other } = extras(files);
    for (const p of owned) rmSync(join(ROOT, p));
    for (const p of other) console.warn(`left alone, not the build's: ${p}`);
    for (const [path, body] of files) {
      mkdirSync(dirname(join(ROOT, path)), { recursive: true });
      writeFileSync(join(ROOT, path), body);
    }
    console.log(`built ${GROUPS.length} skills and rules/README.md`);
  }
}
