# TikTok and Reels ideas for real estate agents and property managers

Short video ideas for real estate agents and property managers, with a 30-day plan to post them. Buyers, sellers and renters meet words like escrow, contingency and wear and tear at the worst time. A short can make one step or one word plain, and follow the fair housing rule: describe the home and the place, never who it suits.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 6 sourced ad and claim rules
  (2 for this group from Legal Information Institute, National Association of REALTORS, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/real-estate.md](../../examples/real-estate.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a two-agent team in a small city that wants more seller consultations this spring." The skill also runs as
`/business-video-skills:real-estate-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill real-estate-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit real estate agents and property managers

| Type | What it shows | Example titles |
|---|---|---|
| A word in the papers | One term from a contract or a lease | What escrow is, in 30 seconds; What normal wear and tear means in a rental |
| A step in the sale | What happens at one stage, and who does what | How a contingency protects a buyer; What a home inspection checks |
| Where the money goes | A cost line, item by item | What closing costs cover; What is inside a monthly mortgage payment |
| What the owner gets | The work a manager or an agent does that the client never sees | What a property manager does for an owner; How a move-out inspection works |
| Disclosures and safety | A required notice or a safety habit, in general | What a lead paint disclosure tells a renter; How often smoke alarms should be tested |
| The home itself | A listing's rooms, light and features, described plainly | A walk through a listing, room by room; What sets this kitchen apart |
| The place | The town's streets, parks and landmarks, never who lives there | A drive past the parks and the library; What is a ten-minute walk from this street |
| Your process | How you work with a buyer, a seller or an owner, step by step | The first week after a listing goes live; How a showing is set up |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Describe the home and the place, never who it suits or who should live there. | The Fair Housing Act's advertising rule (24 CFR 100.75) makes it unlawful to make, print or publish any notice, statement or advertisement for the sale or rental of a dwelling that indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status or national origin. | United States | [24 CFR 100.75, Discriminatory advertisements, statements and notices](https://www.law.cornell.edu/cfr/text/24/100.75) | 2026-11-20 |
| Show homes, results and services as they are, and promise no sale price, sale time or offer you cannot back up. | Article 12 of the National Association of REALTORS Code of Ethics says REALTORS shall be honest and truthful in their real estate communications and shall present a true picture in their advertising, marketing and other representations. | Members of the National Association of REALTORS | [2026 Code of Ethics and Standards of Practice](https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
