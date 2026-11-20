// Tests for the rules dataset, the claim checker and the skills. Run: node test.mjs (Node 18+, no dependencies).
import { test } from "node:test";
import assert from "node:assert/strict";
import { execFileSync, spawn, spawnSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { checkText, loadRules, parseYaml } from "./checker/check.mjs";
import { SOFT_LINE, stale } from "./scripts/build.mjs";
import { GROUPS } from "./scripts/groups.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const RULE_FILES = readdirSync(join(ROOT, "rules")).filter((f) => f.endsWith(".yaml")).sort();
const docs = RULE_FILES.map((f) => ({ file: f, doc: parseYaml(readFileSync(join(ROOT, "rules", f), "utf8"), f) }));
const allRules = docs.flatMap(({ doc }) => doc.rules);
const ruleIds = [...new Set(allRules.map((r) => r.id))];
const ALL = loadRules({ group: "all" }).rules;
const only = (id) => ALL.filter((r) => r.id === id);

// Each rule's source, as reviewed on 2026-11-20. A rule that moves to another source must change here too.
const SOURCES = {
  "ftc-paid-or-gifted-posts": "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking",
  "ftc-material-connections": "https://www.law.cornell.edu/cfr/text/16/255.5",
  "ftc-fake-reviews": "https://www.law.cornell.edu/cfr/text/16/465.2",
  "copyright-ownership": "https://www.copyright.gov/circs/circ01.pdf",
  "contractor-license-number": "https://www.cslb.ca.gov/Resources/IndustryBulletins/Online_Marketplace_Fast_Facts.pdf",
  "fair-housing-ads": "https://www.law.cornell.edu/cfr/text/24/100.75",
  "green-claims-specific": "https://www.law.cornell.edu/cfr/text/16/260.4",
  "lead-safe-certification": "https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules",
  "silica-wet-cutting": "https://www.osha.gov/silica-crystalline/construction",
  "older-deck-treated-wood": "https://www.epa.gov/ingredients-used-pesticide-products/chromated-arsenicals-cca",
  "solar-credit-ended": "https://www.irs.gov/credits-deductions/residential-clean-energy-credit",
  "solar-savings-and-leases": "https://consumer.ftc.gov/articles/solar-power-your-home",
  "allergen-free-claims": "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies",
  "gluten-free-definition": "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/questions-and-answers-gluten-free-food-labeling-final-rule",
  "tobacco-21": "https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21",
  "tiktok-regulated-goods": "https://www.tiktok.com/safety/en/policies-and-engagement/overview?cgversion=2026H2update",
  "health-claims-evidence": "https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance",
  "patient-authorization": "https://www.law.cornell.edu/cfr/text/45/164.508",
  "circular-230-claims": "https://www.law.cornell.edu/cfr/text/31/10.30",
  "circular-230-certified": "https://www.law.cornell.edu/cfr/text/31/10.30",
  "preparer-client-information": "https://www.law.cornell.edu/uscode/text/26/7216",
  "adviser-marketing-rule": "https://www.sec.gov/rules-regulations/2020/12/investment-adviser-marketing",
  "finra-fair-and-balanced": "https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210",
  "insurance-no-promises": "https://content.naic.org/sites/default/files/model-law-880.pdf",
  "credit-ad-terms": "https://www.law.cornell.edu/cfr/text/12/1026.24",
  "realtor-true-picture": "https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice",
  "lawyer-ads-not-misleading": "https://www.calbar.ca.gov/legal-professionals/rules/rules-professional-conduct/current-rules-professional-conduct/chapter-7-information-about-legal-services",
  "lilies-and-cats": "https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination",
  "warranty-third-party-parts": "https://consumer.ftc.gov/consumer-alerts/2022/07/ftc-says-companies-warranty-restrictions-were-illegal",
  "hair-dye-patch-test": "https://www.fda.gov/cosmetics/cosmetic-products/hair-dyes",
  "cosmetic-or-drug-claims": "https://www.fda.gov/cosmetics/cosmetics-laws-regulations/it-cosmetic-drug-or-both-or-it-soap",
  "safe-sleep-scenes": "https://www.cpsc.gov/SafeSleep",
  "total-price-tickets-and-stays": "https://www.law.cornell.edu/cfr/text/16/part-464",
  "security-claims": "https://www.law.cornell.edu/uscode/text/15/45",
  "no-diagnosis-in-shorts": "https://www.law.cornell.edu/cfr/text/21/530.3",
};

// Every ViewGum industry page, as of 2026-11-20.
const ALL_PAGES = ["accountants","auto-repair","bakeries","cafes","chiropractors","concrete","convenience-stores","daycares","decks","dentists","electricians","event-planners","financial-planners","florists","general-contractors","gyms","hair-salons","home-builders","hvac","inns-and-hotels","insurance-agents","it-services","landscapers","law-firms","mortgage-brokers","painters","photographers","physical-therapists","plumbers","property-managers","realtors","remodelers","restaurants","roofers","solar","tax-preparers","veterinarians","wedding-venues"];

// The industry pages that state each rule, as reviewed on 2026-11-20 ("ALL": every page).
const PAGES = {"warranty-third-party-parts": ["auto-repair"], "hair-dye-patch-test": ["hair-salons"], "cosmetic-or-drug-claims": ["hair-salons"], "security-claims": ["it-services"], "total-price-tickets-and-stays": ["event-planners", "inns-and-hotels", "wedding-venues"], "ftc-paid-or-gifted-posts": "ALL", "ftc-material-connections": ["event-planners", "photographers"], "ftc-fake-reviews": ["event-planners", "inns-and-hotels", "photographers", "wedding-venues"], "copyright-ownership": ["photographers"], "allergen-free-claims": ["restaurants", "cafes", "bakeries"], "gluten-free-definition": ["restaurants", "cafes", "bakeries"], "tobacco-21": ["convenience-stores"], "tiktok-regulated-goods": ["convenience-stores"], "health-claims-evidence": ["chiropractors", "dentists", "gyms", "physical-therapists"], "patient-authorization": ["chiropractors", "dentists", "physical-therapists"], "contractor-license-number": ["concrete", "decks", "electricians", "general-contractors", "home-builders", "hvac", "landscapers", "painters", "plumbers", "remodelers", "roofers", "solar"], "fair-housing-ads": ["home-builders", "realtors", "property-managers"], "green-claims-specific": ["decks", "landscapers"], "lead-safe-certification": ["painters"], "silica-wet-cutting": ["concrete"], "older-deck-treated-wood": ["decks"], "solar-credit-ended": ["solar"], "solar-savings-and-leases": ["solar"], "safe-sleep-scenes": ["daycares"], "lawyer-ads-not-misleading": ["law-firms"], "circular-230-claims": ["accountants"], "circular-230-certified": ["tax-preparers"], "preparer-client-information": ["tax-preparers"], "adviser-marketing-rule": ["financial-planners"], "finra-fair-and-balanced": ["financial-planners"], "insurance-no-promises": ["insurance-agents"], "credit-ad-terms": ["mortgage-brokers"], "no-diagnosis-in-shorts": ["veterinarians"], "realtor-true-picture": ["realtors"], "lilies-and-cats": ["florists"]};

// Lines each rule must flag (every pattern must catch at least one; [line, n] also names the check, from 1, that must fire)
// and ordinary lines it must leave alone.
const CASES = {
  "ftc-paid-or-gifted-posts": { flag: ["This dinner was gifted to us.", "We were comped a meal to feature it.", "They sent us some free samples.", "They paid me to post this.", "Sponsored by the farm down the road."], pass: ["We bake every loaf on site.", "A gifted musician plays on Fridays."] },
  "ftc-material-connections": { flag: ["Our preferred vendors for flowers and cake.", "I earn a commission on every sale."], pass: ["We work with the vendors you pick.", "Use my code at my bakery.", "There is no referral fee."] },
  "ftc-fake-reviews": { flag: ["Customers say it is the best croissant around.", "Rated five stars.", "Rated 4.9 out of 5 by our guests.", "Read our reviews.", "A testimonial from a happy client."], pass: ["We fold the butter in twelve times.", "A final review of your return before we file.", "What an insurance review covers.", "Review the menu before you order.", "Both parts are rated 5 amps."] },
  "copyright-ownership": { flag: ["We found these photos online.", "We downloaded the photos online.", "Set to a trending song.", "Pictures we found online."], pass: ["Every photo here is from our own shoots.", "I found it online: our phone number is on the site."] },
  "contractor-license-number": { flag: ["New roof in two days. Call for a free inspection."], pass: ["New roof in two days. CSLB Lic. #1234567", "License number 765432 on every truck."] },
  "fair-housing-ads": { flag: ["This home is perfect for young families.", "Adults only building.", "No kids allowed in this rental.", "No wheelchairs in these rentals.", "A quiet Christian neighborhood."], pass: ["No kids on the job site.", "Three bedrooms, a fenced yard, near the park.", "A family room with a fireplace.", "A black area rug in the den.", "This picnic basket is perfect for families."] },
  "green-claims-specific": { flag: ["Our eco-friendly decking.", "Good for the planet."], pass: ["Boards made with recycled plastic content.", "The green building on Main Street."] },
  "lead-safe-certification": { flag: ["We are lead-safe certified.", "EPA certified painters."], pass: ["We scrape and sand before we prime."] },
  "silica-wet-cutting": { flag: ["We dry cut the slab.", "Cutting the pavers dry is faster."], pass: ["Water on the blade keeps the dust down.", "Dry-cut the wooden trim to length."] },
  "older-deck-treated-wood": { flag: ["Tearing out an old deck today.", "Ripping out an older deck today.", "That older deck is plain lumber."], pass: ["Setting the new footings.", "New plain lumber for the shed shelves."] },
  "solar-credit-ended": { flag: ["Claim the federal tax credit.", "Solar panels qualify for a tax credit.", "Get 30% back on your new solar panels."], pass: ["How an inverter changes DC to AC.", "Take 30% off doors this week.", "Ask about our state solar tax credit."] },
  "solar-savings-and-leases": { flag: ["Free solar for your home.", "$0 solar installation.", "Slash your electric bill.", "Save $1,000 a year with our solar panels.", "These panels pay for themselves.", "Lease now and keep the tax credit."], pass: ["How panels are mounted on a roof."] },
  "allergen-free-claims": { flag: ["Our nut-free brownies.", "Free of peanuts.", "Free of crustacean shellfish.", "Made without soybeans.", "No milk in this one.", "Allergy-friendly menu."], pass: ["Peanut butter cookies, fresh today.", "We pour lactose-free milk on request."] },
  "gluten-free-definition": { flag: ["Gluten-free bread every Friday.", "Made without gluten.", "Celiac-safe pizza."], pass: ["Rye bread every Friday."] },
  "tobacco-21": { flag: ["New vapes in stock.", "Cigars at the counter.", "Vaping supplies on sale."], pass: ["Fresh coffee at the counter.", "No vaping indoors."] },
  "tiktok-regulated-goods": { flag: ["Bourbon and champagne on sale.", "Distilled spirits for sale.", "Scratch-offs at the register."], pass: ["Fresh lemonade on tap.", "Our team is in good spirits.", "An alcohol-free mocktail."] },
  "health-claims-evidence": { flag: ["We cure back pain.", "This product cures cancer.", "This will cure your back pain.", "Instant relief after one visit.", "No more back pain.", "Lose 1 pound a day.", "Get six-pack abs in seven days.", "Clinically proven care."], pass: ["How a spinal disc cushions the spine.", "We cure the resin with a blue light.", "We reopen in 2 weeks.", "Our lab results arrive within two days."] },
  "patient-authorization": { flag: ["Patient story: back to running.", "Before and after whitening.", "A patient's x-ray on the screen."], pass: ["What a crown is and how it fits.", "Our gym's client spotlight."] },
  "circular-230-claims": { flag: ["Guaranteed refund.", "We make your tax debt disappear.", "We stop IRS levies."], pass: ["What a W-2 tells you."] },
  "circular-230-certified": { flag: ["Your certified enrolled agent.", "A certified registered tax return preparer.", "IRS-approved preparer.", "We work for the IRS on your case."], pass: ["Your enrolled agent, licensed to represent taxpayers before the IRS."] },
  "preparer-client-information": { flag: ["See the tax return our client shared.", "A client's refund came back in a week."], pass: ["Here is a made-up example: a freelancer who earns 40,000.", "One of our clients is a new shop.", "A customer can return their order."] },
  "adviser-marketing-rule": { flag: ["8% returns a year.", "Our client says she trusts us.", "We beat the market."], pass: ["How compound growth works."] },
  "finra-fair-and-balanced": { flag: ["A risk-free way to grow.", "You cannot lose your principal.", "Your returns are guaranteed.", "Guaranteed returns every year."], pass: ["Every investment carries risk.", "We cannot guarantee returns."] },
  "insurance-no-promises": { flag: ["Save $500 today.", "The lowest rates in the state.", "You're fully covered."], pass: ["What a deductible is."] },
  "credit-ad-terms": { flag: [["Only 3% down.", 1], ["As low as $5,000 down.", 1], ["$900 monthly payment.", 2], ["Your mortgage payment is $900.", 2], ["A 30-year fixed.", 3], ["Repay in 36 months.", 3], ["Rates as low as 5.9.", 4], ["$300 in finance charges.", 5], ["The finance charge is $50.", 5]], pass: ["What escrow is, in general.", "What is a finance charge?", "A low down payment may be possible.", "No money down.", "0% down options.", "$0 down for some buyers."] },
  "realtor-true-picture": { flag: ["Guaranteed sale or we buy it."], pass: ["What closing costs cover."] },
  "lawyer-ads-not-misleading": { flag: ["We guarantee you will win.", "We recovered $2 million for a client.", "The #1 attorney in town.", "No fee unless we win."], pass: ["What a statute of limitations is.", "We do not guarantee you will win."] },
  "lilies-and-cats": { flag: ["Easter lilies are safe for your cat.", "Safe for cats: Easter lilies.", "A cat-safe bouquet."], pass: ["Lilies are not safe for cats; keep them out of reach.", "A pet-safe bouquet with no lilies.", "The cat-safe bouquet is lily-free."] },
  "warranty-third-party-parts": { flag: ["Your warranty is void unless you come to the dealer.", "Dealer-only service keeps it valid.", "We protect your warranty."], pass: ["Read your warranty for what it covers.", "Pick up a dealer-only trim tool.", "You need to come to the dealer to pick up your free mug."] },
  "hair-dye-patch-test": { flag: ["No patch test needed for this dye.", "A skin test is unnecessary with this box dye."], pass: ["Never skip the patch test.", "Never color your hair without a patch test.", "Box dye at home: do a patch test first.", "How a layered cut is planned."] },
  "cosmetic-or-drug-claims": { flag: ["This serum regrows hair.", "Stops hair loss fast."], pass: ["What a toner does after bleach."] },
  "safe-sleep-scenes": { flag: ["A cozy crib bumper.", "A blanket in the crib.", "Babies nap face down here."], pass: ["Every baby sleeps on their back in a bare crib.", "Rear bumper repair.", "Bumper pads for parking practice."] },
  "total-price-tickets-and-stays": { flag: ["Rooms from $149 a night.", "$25 tickets for the concert.", "Book a hotel for $175.", "Plus resort fee.", "Concert tickets plus fees."], pass: ["How a room changes from ceremony to reception.", "Catering is $40 per guest.", "Our booking fee for portrait sessions is $25.", "Portrait session $800 + fees."] },
  "security-claims": { flag: ["Our network is unhackable.", "Totally secure setup.", "Hackers cannot breach our network.", ["We offer guaranteed security.", 3], ["Our network gives you zero risk.", 3], ["Guaranteed uptime for every client.", 4]], pass: ["What two-factor login protects against.", "Nothing is unhackable.", "No system is completely secure.", "No system is 100% secure.", "We cannot guarantee security."] },
  "no-diagnosis-in-shorts": { flag: ["Your dog probably has an ear infection.", "Your cat has diabetes.", "Give your cat aspirin.", "Give your dog 25 mg.", "Try a home remedy first."], pass: ["How heartworm spreads, in general.", "Give your dog a treat.", "Give your dog some water.", "Avoid home remedies and consult a vet."] },
};

test("every rule file parses and carries the required fields", () => {
  const groups = new Set();
  for (const { file, doc } of docs) {
    assert.equal(`${doc.group}.yaml`, file, `${file}: group matches the file name`);
    groups.add(doc.group);
    assert.ok(doc.name && doc.about, `${file}: name and about`);
    assert.ok(Array.isArray(doc.rules) && doc.rules.length, `${file}: rules`);
    for (const r of doc.rules) {
      assert.match(r.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/, `${r.id}: kebab id`);
      for (const k of ["rule", "do", "explanation", "where", "checked"]) assert.ok(typeof r[k] === "string" && r[k].length > 2, `${r.id}: ${k}`);
      assert.match(r.checked, /^\d{4}-\d{2}-\d{2}$/, `${r.id}: checked is a date`);
      assert.ok(r.source && r.source.title && r.source.publisher, `${r.id}: source title and publisher`);
      assert.equal(r.source.url, SOURCES[r.id], `${r.id}: source url as reviewed`);
      assert.ok(Array.isArray(r.pages) && r.pages.length, `${r.id}: pages`);
      for (const p of r.pages) assert.match(p, /^https:\/\/viewgum\.com\/for\/[a-z-]+$/, `${r.id}: page ${p}`);
      const slugs = r.pages.map((p) => p.replace("https://viewgum.com/for/", ""));
      if (PAGES[r.id] === "ALL") assert.deepEqual(slugs, ALL_PAGES, `${r.id}: every page, once each`);
      else assert.deepEqual(slugs, PAGES[r.id], `${r.id}: pages as reviewed`);
    }
  }
  assert.ok(groups.has("every-business"));
  assert.equal(groups.size, 14);
  assert.deepEqual(ruleIds.sort(), Object.keys(SOURCES).sort());
});

test("a rule id that appears in two files is the same rule", () => {
  const seen = new Map();
  for (const r of allRules) {
    if (seen.has(r.id)) assert.deepEqual(r, seen.get(r.id), `${r.id} differs between files`);
    seen.set(r.id, r);
  }
});

test("the YAML reader agrees with a full YAML parser", (t) => {
  const parsers = [
    ["ruby", ["-ryaml", "-rjson", "-e", "puts JSON.generate(YAML.safe_load(File.read(ARGV[0])))"], ["-ryaml", "-e", "1"]],
    ["python3", ["-c", "import sys,json,yaml;print(json.dumps(yaml.safe_load(open(sys.argv[1]))))"], ["-c", "import yaml"]],
  ].filter(([bin, , probe]) => spawnSync(bin, probe, { stdio: "ignore" }).status === 0);
  if (!parsers.length) {
    if (process.env.REQUIRE_YAML_CROSSCHECK) assert.fail("no YAML parser (ruby or python3 with PyYAML) to cross-check with");
    t.skip("no ruby or python3 YAML parser here");
    return;
  }
  const dir = mkdtempSync(join(tmpdir(), "bvs-yaml-"));
  const fixture = join(dir, "fixture.yaml");
  writeFileSync(fixture, "# c\na: >-\n  one\n  #two\nb:\n  - x\n  - k: 'it''s'\n    n: \"q\"\n");
  try {
    for (const [bin, args] of parsers) {
      t.diagnostic(`cross-checked with ${bin}`);
      for (const { file, doc } of docs) {
        const theirs = JSON.parse(execFileSync(bin, [...args, join(ROOT, "rules", file)], { encoding: "utf8" }));
        assert.deepEqual(doc, theirs, `${bin} reads ${file} differently`);
      }
      const theirs = JSON.parse(execFileSync(bin, [...args, fixture], { encoding: "utf8" }));
      assert.deepEqual(parseYaml(readFileSync(fixture, "utf8")), theirs, `${bin} reads the fixture differently`);
    }
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("the YAML reader refuses what it does not understand", () => {
  assert.throws(() => parseYaml("a: [1, 2]\n"), /quote this value/);
  assert.throws(() => parseYaml("a: b: c\n"), /quote this value/);
  assert.throws(() => parseYaml("a: true\n"), /quote this value/);
  assert.throws(() => parseYaml("a: 12\n"), /quote this value/);
  assert.throws(() => parseYaml("a: 2026-11-20\n"), /quote this value/);
  assert.throws(() => parseYaml("a:   true\n"), /quote this value/);
  assert.throws(() => parseYaml("a: 0b101\n"), /quote this value/);
  assert.throws(() => parseYaml("a: >-\n  one  \n  two\n"), /trailing spaces/);
  assert.throws(() => parseYaml("a:\n\tb: c\n"), /tabs/);
  assert.throws(() => parseYaml("a: 1x\na: 2x\n"), /duplicate key/);
  assert.throws(() => parseYaml("a: 'open\n"), /unclosed/);
  assert.throws(() => parseYaml("a: >-\n  one\n\n  two\n"), /blank line/);
  assert.throws(() => parseYaml("a: >-\n  one\n    two\n"), /more-indented/);
  assert.deepEqual(parseYaml("a: >-\n  one\n  #two\n"), { a: "one #two" });
});

test("every check pattern catches at least one case, and ordinary lines pass", () => {
  for (const id of ruleIds) {
    const rule = allRules.find((r) => r.id === id);
    assert.ok(CASES[id], `${id}: add test cases`);
    const flagLines = CASES[id].flag.map((c) => (Array.isArray(c) ? c[0] : c));
    for (const c of CASES[id].flag) {
      const [line, n] = Array.isArray(c) ? c : [c, 0];
      const flags = checkText(line, only(id));
      assert.ok(flags.length, `${id} should flag: ${line}`);
      if (n) assert.ok(flags.some((f) => f.note === rule.checks[n - 1].note), `${id}: check ${n} should fire on: ${line}`);
    }
    for (const line of CASES[id].pass) assert.equal(checkText(line, only(id)).length, 0, `${id} should pass: ${line}`);
    rule.checks.forEach((check, i) => {
      if (!check.match) return;
      const re = new RegExp(check.match, "iu");
      assert.ok(flagLines.some((line) => re.test(line)), `${id}: check ${i + 1} is not exercised by any flag case`);
    });
  }
});

test("curly quotes and odd hyphens still match, and reports quote the original line", () => {
  const flags = checkText("You can\u2019t lose with this fund.", only("finra-fair-and-balanced"));
  assert.equal(flags.length, 1);
  assert.equal(flags[0].text, "You can\u2019t lose with this fund.");
  assert.ok(checkText("Gluten\u2011free rolls", only("gluten-free-definition")).length);
  const lone = checkText("first line\rWe cure back pain.", only("health-claims-evidence"));
  assert.equal(lone[0].line, 2);
});

test("a whole-text check runs per post, and only when its line is missing", () => {
  const rules = only("contractor-license-number");
  const one = checkText("Line one.\nLine two.", rules);
  assert.equal(one.length, 1);
  assert.equal(one[0].line, 0);
  const two = checkText("Roof one.\n---\nRoof two. CSLB Lic. 1234567", rules);
  assert.equal(two.length, 1, "the post without a number is flagged although the other has one");
  assert.equal(two[0].post, 1);
  const typographic = checkText("Roof one.\n\u2013\u2013\u2013\nRoof two. CSLB Lic. 1234567", rules);
  assert.equal(typographic.length, 0, "a typographic divider is not a post break");
  const gluten = checkText("Rolls.\n---\nGluten-free rolls.", only("gluten-free-definition"));
  assert.equal(gluten[0].post, 2);
  const dye = only("hair-dye-patch-test");
  assert.equal(checkText("How a layered cut is planned.", dye).length, 0, "if_present: no dye, no flag");
  assert.equal(checkText("Box dye at home, step by step.\n---\nA patch test first, then color your hair.", dye).length, 1);
});

const run = (args, input, cwd = ROOT) => spawnSync(process.execPath, args, { cwd, input, encoding: "utf8" });

test("the command line: exit codes, JSON, allow, list, option values and standard input", () => {
  assert.equal(run(["checker/check.mjs", "--group", "food", "--text", "How a latte is built"]).status, 0);
  const flagged = run(["checker/check.mjs", "--group", "food", "--text", "Our gluten-free buns"]);
  assert.equal(flagged.status, 1);
  assert.match(flagged.stdout, /gluten-free-definition/);
  assert.match(flagged.stdout, /https:\/\/www\.fda\.gov\//);
  assert.equal(run(["checker/check.mjs", "--group", "food", "--allow", "gluten-free-definition", "--text", "Our gluten-free buns"]).status, 0);
  const json = JSON.parse(run(["checker/check.mjs", "--group", "food", "--json", "--text=Nut-free cookies"]).stdout);
  assert.equal(json.group, "food");
  assert.equal(json.results[0].flags[0].rule, "allergen-free-claims");
  assert.equal(json.results[0].flags[0].line, 1);
  const stdin = run(["checker/check.mjs", "--group", "health"], "line one\nWe cure headaches\n");
  assert.equal(stdin.status, 1);
  assert.match(stdin.stdout, /stdin:2/);
  const list = JSON.parse(run(["checker/check.mjs", "--group", "pets", "--list", "--json", "--allow", "ftc-fake-reviews"]).stdout);
  assert.ok(list.some((r) => r.id === "no-diagnosis-in-shorts"));
  assert.ok(!list.some((r) => r.id === "ftc-fake-reviews"), "--list shows only active rules");
  assert.equal(run(["checker/check.mjs", "--group", "nope", "--text", "x"]).status, 2);
  assert.equal(run(["checker/check.mjs", "--allow", "not-a-rule", "--text", "x"]).status, 2);
  assert.equal(run(["checker/check.mjs", "missing-file.txt"]).status, 2);
  assert.equal(run(["checker/check.mjs", "--text", "--json"]).status, 2, "an option is not a value");
  assert.equal(run(["checker/check.mjs", "--bogus"]).status, 2);
  assert.equal(run(["checker/check.mjs", "--group=", "--text", "We cure back pain."]).status, 2, "an empty group");
  assert.equal(run(["checker/check.mjs", "--list=false"]).status, 2, "a switch takes no value");
  assert.equal(run(["checker/check.mjs", "--group", "", "--text", "We cure back pain."]).status, 2, "an empty group value");
  assert.equal(run(["checker/check.mjs", "--rules", "", "--text", "x"]).status, 2, "an empty rules value");
  assert.match(run(["checker/check.mjs", "-h"]).stdout, /Usage/);
  const shown = run(["checker/check.mjs", "--group", "health", "--text", "We cure back pain."]).stdout;
  assert.match(shown, /Practice \(health-claims-evidence\)/);
  assert.match(shown, /The source says: The FTC/);
  assert.match(run(["checker/check.mjs", "--text", "hello"]).stderr, /--group/);
});

test("standard input split inside a character still decodes", async () => {
  const child = spawn(process.execPath, ["checker/check.mjs", "--group", "food", "--json"], { cwd: ROOT });
  let out = "";
  child.stdout.on("data", (d) => (out += d));
  const bytes = Buffer.from("Our gluten\u2011free rolls\n", "utf8");
  const cut = bytes.indexOf(0xe2) + 1;
  child.stdin.write(bytes.subarray(0, cut));
  await new Promise((r) => setTimeout(r, 50));
  child.stdin.end(bytes.subarray(cut));
  const code = await new Promise((r) => child.on("close", r));
  assert.equal(code, 1);
  assert.equal(JSON.parse(out).results[0].flags[0].rule, "gluten-free-definition");
});

test("bad or missing rule files are an error, not a clean result", () => {
  const dir = mkdtempSync(join(tmpdir(), "bvs-rules-"));
  try {
    assert.equal(run(["checker/check.mjs", "--rules", dir, "--text", "We cure back pain."]).status, 2, "no rule files");
    writeFileSync(join(dir, "every-business.yaml"), "group: every-business\nrules:\n  - id: x\n    rule: \"r\"\n");
    const res = run(["checker/check.mjs", "--rules", dir, "--text", "x"]);
    assert.equal(res.status, 2);
    assert.match(res.stderr, /needs do/);
    const good = readFileSync(join(ROOT, "rules", "every-business.yaml"), "utf8");
    writeFileSync(join(dir, "every-business.yaml"), good.replace("    checks:\n", "    check:\n"));
    assert.match(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).stderr, /unknown field check/);
    writeFileSync(join(dir, "every-business.yaml"), good.replace(/url: https:\/\/www\.ftc\.gov\S*/, "url: https://"));
    assert.match(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).stderr, /source title, publisher and url/);
    writeFileSync(join(dir, "every-business.yaml"), good.replace(/url: https:\/\/www\.ftc\.gov\S*/, "url: https://x.y:bad"));
    assert.equal(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).status, 2, "a url that does not parse");
    writeFileSync(join(dir, "every-business.yaml"), good.replace(/title: [^\n]+/, 'title: ""'));
    assert.equal(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).status, 2, "an empty title");
    writeFileSync(join(dir, "every-business.yaml"), good.replace(/(  - id: ftc-paid-or-gifted-posts[\s\S]*?)    checks:\n(?:      [^\n]*\n|        [^\n]*\n)+/, "$1"));
    assert.match(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).stderr, /checks must be a list/);
    writeFileSync(join(dir, "every-business.yaml"), good.replace(/      - match: '[^\n]*'\n/, "      - match:\n          a: b\n"));
    assert.equal(run(["checker/check.mjs", "--rules", dir, "--text", "x"]).status, 2, "a match that is not text");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("each skill's copy of the checker finds its own group's rules", () => {
  for (const g of GROUPS) {
    const res = run(["check.mjs", "--list", "--json"], "", join(ROOT, "skills", g.skill));
    assert.equal(res.status, 0, `${g.skill}: ${res.stderr}`);
    const groups = new Set(JSON.parse(res.stdout).map((r) => r.group));
    assert.deepEqual([...groups].sort(), ["every-business", g.group].sort(), g.skill);
  }
});

test("a copied skill folder works from anywhere, with no options", () => {
  const dir = mkdtempSync(join(tmpdir(), "bvs-copy-"));
  const other = mkdtempSync(join(tmpdir(), "bvs-cwd-"));
  try {
    const g = GROUPS.find((x) => x.group === "real-estate");
    cpSync(join(ROOT, "skills", g.skill), join(dir, g.skill), { recursive: true });
    mkdirSync(join(other, "x"), { recursive: true });
    const res = run([join(dir, g.skill, "check.mjs"), "--text", "This home is perfect for young families."], "", join(other, "x"));
    assert.equal(res.status, 1, res.stderr);
    assert.match(res.stdout, /fair-housing-ads/);
    rmSync(join(dir, g.skill, "rules", "real-estate.yaml"));
    assert.equal(run([join(dir, g.skill, "check.mjs"), "--text", "x"], "", join(other, "x")).status, 2, "a skill missing its industry rules is an error");
    assert.equal(run([join(dir, g.skill, "check.mjs"), "--group", "all", "--text", "x"], "", join(other, "x")).status, 2, "also with --group all");
  } finally {
    rmSync(dir, { recursive: true, force: true });
    rmSync(other, { recursive: true, force: true });
  }
});

test("the built skills and rules README match their sources", () => {
  assert.deepEqual(stale(), []);
  assert.equal(run(["scripts/build.mjs", "--chek"]).status, 2, "a mistyped option never writes");
});

test("a build leaves files it does not own alone", () => {
  const dir = mkdtempSync(join(tmpdir(), "bvs-build-"));
  try {
    for (const part of ["checker", "rules", "scripts", "skills"]) cpSync(join(ROOT, part), join(dir, part), { recursive: true });
    mkdirSync(join(dir, "skills", "my-own-skill"), { recursive: true });
    writeFileSync(join(dir, "skills", "my-own-skill", "SKILL.md"), "mine\n");
    writeFileSync(join(dir, "skills", GROUPS[0].skill, "posts.txt"), "draft\n");
    writeFileSync(join(dir, "skills", GROUPS[0].skill, "rules", "old.yaml"), "group: old\n");
    const res = run(["scripts/build.mjs"], "", dir);
    assert.equal(res.status, 0, res.stderr);
    assert.ok(existsSync(join(dir, "skills", "my-own-skill", "SKILL.md")), "a hand-written skill stays");
    assert.ok(existsSync(join(dir, "skills", GROUPS[0].skill, "posts.txt")), "a draft stays");
    assert.ok(!existsSync(join(dir, "skills", GROUPS[0].skill, "rules", "old.yaml")), "a leftover rules file in a built skill goes");
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

test("twelve skills, each a valid agent skill that ends on the one soft line", () => {
  const folders = readdirSync(join(ROOT, "skills")).sort();
  assert.equal(folders.length, 12);
  assert.deepEqual(folders, GROUPS.map((g) => g.skill).sort());
  for (const g of GROUPS) {
    const text = readFileSync(join(ROOT, "skills", g.skill, "SKILL.md"), "utf8");
    const m = text.match(/^---\nname: ([^\n]+)\ndescription: ([^\n]+)\n---\n/);
    assert.ok(m, `${g.skill}: frontmatter with name and description`);
    assert.equal(m[1], g.skill);
    assert.match(m[1], /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(m[1].length <= 64);
    assert.ok(m[2].length <= 1024, `${g.skill}: description length ${m[2].length}`);
    assert.doesNotMatch(m[2], /[<>]/, `${g.skill}: no angle brackets in the description`);
    for (const heading of ["## Ask first", "## Steps", "## Idea types", "## Output format"]) assert.ok(text.includes(heading), `${g.skill}: ${heading}`);
    assert.ok(text.trimEnd().endsWith(SOFT_LINE), `${g.skill}: ends on the soft line`);
    assert.equal(text.split("viewgum.com").length - 1, 1, `${g.skill}: one ViewGum link only`);
    assert.equal(g.types.length, 8, `${g.skill}: eight idea types`);
  }
});

const textFiles = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    if ([".git", "node_modules"].includes(e.name)) return [];
    const p = join(dir, e.name);
    return e.isDirectory() ? textFiles(p) : /\.(md|yaml|mjs|json|yml)$/.test(e.name) ? [p] : [];
  });

test("plain text: no long dashes, no exclamation marks in prose, no punctuation glued to a bare link", () => {
  for (const file of textFiles(ROOT)) {
    const text = readFileSync(file, "utf8");
    assert.doesNotMatch(text, /[\u2013\u2014]/, `${file}: a long dash`);
    if (/\.(md|yaml)$/.test(file)) {
      const prose = text.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "").replace(/'[^'\n]*'/g, "");
      assert.doesNotMatch(prose, /[A-Za-z)]!(?:\s|$)/, `${file}: an exclamation mark`);
      assert.doesNotMatch(prose, /(?<![(<])https:\/\/[^\s)>\]]+[.,;:](?:\s|$)/, `${file}: punctuation right after a link`);
    }
  }
});

test("every relative link in the Markdown files resolves", () => {
  for (const file of textFiles(ROOT).filter((f) => f.endsWith(".md"))) {
    const text = readFileSync(file, "utf8").replace(/```[\s\S]*?```/g, "");
    for (const [, target] of text.matchAll(/\]\(((?!https?:|#|mailto:)[^)\s]+)\)/g)) {
      assert.ok(existsSync(join(dirname(file), target.split("#")[0])), `${file}: broken link ${target}`);
    }
  }
});

test("the top README lists every skill, and the plugin files agree", () => {
  const readme = readFileSync(join(ROOT, "README.md"), "utf8");
  for (const g of GROUPS) assert.ok(readme.includes(`skills/${g.skill}`), `README links ${g.skill}`);
  assert.ok(readme.includes(`${ruleIds.length} ad and claim rules`), "README states the rule count");
  const plugin = JSON.parse(readFileSync(join(ROOT, ".claude-plugin", "plugin.json"), "utf8"));
  const market = JSON.parse(readFileSync(join(ROOT, ".claude-plugin", "marketplace.json"), "utf8"));
  assert.equal(plugin.name, "business-video-skills");
  assert.equal(market.plugins[0].name, plugin.name);
  assert.equal(market.plugins[0].source, "./");
});
