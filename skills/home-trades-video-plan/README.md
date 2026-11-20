# Video ideas for contractors and home trades: TikTok, Reels and Shorts

Short video ideas for roofers, plumbers, electricians, HVAC companies, remodelers, landscapers, painters and other home trades, with a 30-day plan to post them. Homeowners rarely see the parts of a job that matter most, like the flashing under the shingles or the rough-in behind the drywall. A short can show that hidden part.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 12 sourced ad and claim rules
  (8 for this group from Contractors State License Board (California), Legal Information Institute, U.S. Environmental Protection Agency, Occupational Safety and Health Administration, IRS, Federal Trade Commission, Consumer Advice, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/home.md](../../examples/home.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a family-run roofing company with two crews in a snowy town, which wants more inspection calls before winter." The skill also runs as
`/business-video-skills:home-trades-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill home-trades-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit contractors and home trades

| Type | What it shows | Example titles |
|---|---|---|
| How the job is done | The work in order, part by part, from the ground up | How a paver patio is built; How a house is framed |
| The hidden part | What sits inside the wall, under the floor or under the roof once the job is finished | How a shower is waterproofed before tile; Why underlayment goes on before shingles |
| The failure and its fix | What goes wrong, why, and what the repair changes | Why frozen pipes can burst; What an ice dam does to a roof |
| A line on the quote | One item a customer questions on an estimate, made plain | What rough-in means for plumbing and wiring; What a heat pump install includes |
| What the homeowner notices | Something people see at home and wonder about, and when it matters | When AC drain water is normal, and when it is not; What the cut lines in a new slab are for |
| Ahead of the season | The job that matters before the weather turns | What a sump pump does in a heavy rain; Why dirty coils make an air conditioner work harder |
| What a pro checks | The questions a trained eye asks before the work starts | What a pro checks before a load-bearing wall comes out; What an electrician checks before adding an EV charger |
| On the job | Your own crew at work, with their permission and the customer's | A day on a roof tear-off, start to finish; Setting forms before a driveway pour |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| If you are a licensed California contractor, put your license number in every post advertising your contracting work, a short's caption included, and offer only work in a classification you hold. Elsewhere, ask your state's licensing board what an ad must show. | California's contractors board says Business and Professions Code section 7030.5 requires a license number in all forms of advertising for construction that requires a contractor's license, electronic transmissions included, and that a licensed contractor who advertises and contracts outside its classification can be disciplined. | California (other states set their own rules) | [Fast Facts: California License and Contracting Requirements for Online Home Improvement Marketplace Companies](https://www.cslb.ca.gov/Resources/IndustryBulletins/Online_Marketplace_Fast_Facts.pdf) | 2026-11-20 |
| Describe the home and the place, never who it suits or who should live there. | The Fair Housing Act's advertising rule (24 CFR 100.75) makes it unlawful to make, print or publish any notice, statement or advertisement for the sale or rental of a dwelling that indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status or national origin. | United States | [24 CFR 100.75, Discriminatory advertisements, statements and notices](https://www.law.cornell.edu/cfr/text/24/100.75) | 2026-11-20 |
| Never a bare eco-friendly. Name the specific benefit or benefits you mean, such as recycled content or less water, clearly and prominently, and be able to back them up. | The FTC's Green Guides (16 CFR 260.4) say unqualified general environmental benefit claims are difficult to interpret and likely convey a wide range of meanings, and that marketers should not make them. | United States | [16 CFR 260.4, General environmental benefit claims (FTC Green Guides)](https://www.law.cornell.edu/cfr/text/16/260.4) | 2026-11-20 |
| Claim lead-safe or RRP certification for your firm only if the firm holds it; a renovator's own certificate is a separate thing. | Under EPA's Renovation, Repair and Painting Rule, firms performing renovation, repair and painting projects that disturb lead-based paint in homes, child care facilities and kindergartens built before 1978 must be EPA- or state-certified and must use certified renovators who follow specific work practices. | United States | [Lead Renovation, Repair and Painting Program Rules](https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules) | 2026-11-20 |
| When a short shows a concrete cut, show it done wet (ViewGum's concrete page's practice); the same practice suits brick, block and stone. | OSHA's respirable crystalline silica standard for construction requires employers to limit worker exposures to respirable crystalline silica, and OSHA notes that applying water to a saw blade when cutting stone, rock, concrete, brick or block substantially reduces the dust it creates. | United States | [Silica, Crystalline: Construction](https://www.osha.gov/silica-crystalline/construction) | 2026-11-20 |
| In a short about an older deck whose wood you have not identified, say the wood may be treated rather than calling it plain lumber. | The EPA says that before 2004, wood treated with chromated arsenicals, which include chromated copper arsenate (CCA), was used in residential structures such as decks and playsets; makers stopped producing it for homeowner uses in December 2003, and the EPA does not require existing structures made with it to be removed. | United States | [Chromated Arsenicals (CCA)](https://www.epa.gov/ingredients-used-pesticide-products/chromated-arsenicals-cca) | 2026-11-20 |
| Never promise the federal Residential Clean Energy Credit to a new customer. | The IRS says the federal Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025. | United States | [Residential Clean Energy Credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit) | 2026-11-20 |
| Leave savings figures out, and never tie a tax credit or incentive to a lease or a power purchase agreement. | The FTC tells homeowners that it's hard to predict future utility rates, and that with a lease or a power purchase agreement they don't own the system, so they can't claim renewable energy certificates and aren't eligible for tax credits or financial incentives, which go to the system's owner. | United States | [Solar Power for Your Home](https://consumer.ftc.gov/articles/solar-power-your-home) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
