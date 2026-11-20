# Business Video Skills

Free short video plans for small businesses, and the ad and claim rules they post under. For TikTok, Instagram Reels,
YouTube Shorts and Facebook Reels.

- **12 agent skills**, one for each of 12 industry groups. Give one a few lines about a business and it writes 15 video
  ideas made for that business, a 30-day posting calendar and a caption starter for each posting day.
- **35 ad and claim rules** by industry, in YAML: what each source says, the practice for short videos, where it applies, the
  source and the day we read it. See [rules/](rules/README.md).
- **A claim checker** that flags the lines worth a second look, such as "gluten-free", "perfect for young families" or
  "guaranteed refund", with the rule and the source behind each flag. Node 18 or newer, nothing to install.

They work in Claude Code, Codex, Gemini CLI, Cursor and other agents that read skills, and in any chat assistant you paste
a skill into.

## Find your business

| Your business | Skill | What the claim check covers |
|---|---|---|
| Roofers, plumbers, electricians, HVAC, general contractors, remodelers, concrete, decks, landscapers, painters, solar, home builders | [home-trades-video-plan](skills/home-trades-video-plan/README.md) | License numbers in ads, fair housing, green claims, lead-safe work, silica dust, treated wood, solar credits and savings |
| Restaurants, cafes, bakeries, pizzerias, food trucks, caterers, bars, breweries, wineries, distilleries, liquor and convenience stores | [food-drink-video-plan](skills/food-drink-video-plan/README.md) | Allergen-free and gluten-free claims, tobacco, TikTok's regulated goods |
| Dentists, chiropractors, physical therapists, gyms, personal trainers, med spas, eye care, yoga studios | [health-wellness-video-plan](skills/health-wellness-video-plan/README.md) | Health claims, patient privacy |
| Accountants, bookkeepers, tax preparers, financial planners, insurance agents, mortgage brokers | [money-insurance-video-plan](skills/money-insurance-video-plan/README.md) | Circular 230, client return information, the SEC marketing rule, FINRA, insurance promises, Regulation Z |
| Real estate agents, property managers | [real-estate-video-plan](skills/real-estate-video-plan/README.md) | Fair housing, the REALTOR Code of Ethics |
| Florists, boutiques, hardware stores, bike shops, jewelers, furniture stores, bookstores, pet stores | [retail-shop-video-plan](skills/retail-shop-video-plan/README.md) | Lilies and cats |
| Auto repair, detailing, tire shops, body shops | [auto-shop-video-plan](skills/auto-shop-video-plan/README.md) | Warranties and third-party parts |
| Hair salons, barbers, nail salons, lash studios, day spas | [beauty-salon-video-plan](skills/beauty-salon-video-plan/README.md) | Hair dye patch tests, drug claims |
| Daycares, tutors, music schools, martial arts, driving schools | [learning-care-video-plan](skills/learning-care-video-plan/README.md) | Safe sleep scenes |
| Photographers, wedding venues, event planners, inns and hotels, DJs | [events-stays-video-plan](skills/events-stays-video-plan/README.md) | Total prices for tickets and stays |
| IT services, commercial cleaning, staffing, printing, logistics, manufacturing | [business-services-video-plan](skills/business-services-video-plan/README.md) | Security claims |
| Veterinarians, pet groomers, dog trainers | [pet-business-video-plan](skills/pet-business-video-plan/README.md) | Diagnosis and prescribing |
| Law firms | No skill yet; the checker covers it with `--group legal` | Lawyer advertising |

Every skill also checks the four rules every business meets: paid or gifted posts, material connections, fake reviews and
copyright.

## Install

Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Codex, Gemini CLI, Cursor and other agents that read skills, through the [skills CLI](https://github.com/vercel-labs/skills):

```sh
npx skills add viewgum/business-video-skills
```

Add `--skill food-drink-video-plan` (or any skill name above) for one skill only.

Any chat assistant: paste the skill's `SKILL.md` and the two files in its `rules/` folder, then a few lines about the
business. A chat assistant cannot run the checker, so it checks the lines by reading the rules.

## Try it

> Plan a month of short videos for a small bakery in a college town. We sell sourdough, bagels and coffee, we want more
> weekend preorders, and we film on a phone.

The skill asks for anything it is missing (where the business is, what it wants more of, what is true about it, how the
videos will be made), then returns:

1. 15 ideas, each with a title, a hook, what the video shows, how to make it, a length and the facts to confirm
2. A 30-day calendar, about every other day, with a caption starter for each posting day
3. A claim check of every hook and caption, and a Before you post list with the rule and source behind each item

The skills tell the assistant never to invent a price, a review, a license, an award or a result, and to write
[owner to add] where a fact is needed. Read the plan before you use it.

## Examples

Each skill was run once in Claude Code for a made-up business on 2026-11-20. The plans are unedited.

| Business | Plan |
|---|---|
| A family-run roofing company with two crews in a snowy town in Minnesota | [examples/home.md](examples/home.md) |
| A small bakery in a college town in Ohio | [examples/food.md](examples/food.md) |
| A two-dentist family practice in a suburb of Denver, Colorado | [examples/health.md](examples/health.md) |
| A one-office tax preparation business in Arizona, run by an enrolled agent | [examples/money.md](examples/money.md) |
| A two-agent real estate team in a small city in North Carolina | [examples/real-estate.md](examples/real-estate.md) |
| A neighborhood florist in Portland, Oregon that does weddings and walk-in bouquets | [examples/shops.md](examples/shops.md) |
| An independent auto repair shop with four bays in Michigan | [examples/auto.md](examples/auto.md) |
| A four-chair hair salon in Austin, Texas, known for color | [examples/beauty.md](examples/beauty.md) |
| A home-based daycare for toddlers in New Jersey | [examples/learning.md](examples/learning.md) |
| A countryside wedding venue in Virginia with a barn and six guest rooms that wedding guests can book for the night | [examples/events.md](examples/events.md) |
| A five-person managed IT company in Pennsylvania that supports dental and law offices | [examples/business-services.md](examples/business-services.md) |
| A mobile dog groomer serving one county in Florida | [examples/pets.md](examples/pets.md) |

## Check a script or a caption

```sh
node checker/check.mjs --group food caption.txt
```

```text
caption.txt:1  "Fresh bagels every morning, and our gluten-free rolls are back."
  Found "gluten-free". A gluten-free claim. Keep it only if the item meets the FDA definition: no gluten grain or unprocessed gluten ingredient, and under 20 parts per million.
  Practice (gluten-free-definition): Call a dish gluten-free only when it meets the FDA's gluten-free definition.
  The source says: Under the FDA's gluten-free labeling rule (21 CFR 101.91), a food labeled gluten-free is inherently gluten free, or contains no ingredient that is a gluten-containing grain, no ingredient made from one that was not processed to remove gluten, and no processed ingredient that brings the food to 20 parts per million of gluten or more; any unavoidable gluten must be less than 20 parts per million.
  Applies in: United States (FDA-regulated packaged foods; the FDA recommends restaurant menus follow it). Source, read 2026-11-20: https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/questions-and-answers-gluten-free-food-labeling-final-rule

caption.txt:2  "Customers say they are the best in town."
  Found "Customers say". Speaks for customers. Use only real words from real customers, with their meaning unchanged.
  Practice (ftc-fake-reviews): Never invent a review, a reviewer or a customer's words, and never change a real review in a way that changes what the person experienced.
  The source says: The FTC's rule on consumer reviews (16 CFR 465.2) bars a business from writing, creating or selling a review or testimonial that materially misrepresents that the reviewer exists, that they used or otherwise experienced the product, service or business, or what that experience was, and from buying such a review, or spreading such a testimonial about the business or the products or services it sells, when it knew or should have known of the misrepresentation.
  Applies in: United States. Source, read 2026-11-20: https://www.law.cornell.edu/cfr/text/16/465.2

caption.txt: 2 flags on 2 lines to check
```

A flag means "read this line again", not "this is illegal": "gluten-free" is fine for a roll that meets the FDA definition.
The checker reads words only, so watch each video too. Options: `--group <id>` (home, food, health, money, real-estate,
legal, shops, auto, beauty, learning, events, business-services, pets or all), `--allow <rule-id>` for a rule you have
handled, `--json`, `--list` and `--text "..."`. It reads files or standard input; put a line with only `---` between posts to
check each post on its own. Exit code 0 means nothing flagged, 1 something to check, 2 a usage, file or rules error.

## Known limits

- The checks are patterns, not judgment. They flag common phrasings and miss others, and they cannot see pictures, hear
  sound or know where a business is. A clean result means no listed phrasing was found, not that a video is compliant.
- Rules that depend on place (a California license number, a state's lawyer advertising rule) are flagged for every post;
  the note says where the rule applies.
- The rules are a starting set from ViewGum's industry pages, mostly United States rules. They are not every rule an industry
  meets.

## Where the rules come from

Each rule comes from ViewGum's industry pages (https://viewgum.com/for), where it sits beside its source, and was read again
against that source on 2026-11-20: federal regulations, agency guidance (FTC, FDA, EPA, IRS, CFPB, CPSC, OSHA, SEC), FINRA,
the NAIC, a state licensing board and a state bar, and TikTok's Community Guidelines. Each entry names where it applies; most
are United States rules, and your state or country may add more.

This is general information, not legal advice. A flag points to a line worth checking; it does not replace a lawyer, a
compliance officer or a licensing board. If a rule here is out of date or wrong, please open an issue with the source.

## More free tools for short video

- [viewgum/skills](https://github.com/viewgum/skills): skills to deslop a script, check a hook, write post copy and check
  AI labels
- [viewgum/short-form-video-specs](https://github.com/viewgum/short-form-video-specs): safe zones, lengths and caption limits
  for each app, with sources
- [viewgum/shortform-preflight](https://github.com/viewgum/shortform-preflight): check a rendered file against each app's
  upload rules

## Contributing

The skill folders are built from [scripts/groups.mjs](scripts/groups.mjs) and the [rules](rules/README.md) by
[scripts/build.mjs](scripts/build.mjs). Edit those, then run `node scripts/build.mjs` and `npm test`.

## License

[CC BY 4.0](LICENSE). Credit "ViewGum, viewgum.com" and link to this repository.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
