# TikTok and Reels ideas for retail shops: florists, boutiques, hardware stores and more

Short video ideas for florists, boutiques, hardware stores, bike shops, jewelers, furniture stores, bookstores and pet stores, with a 30-day plan to post them. A shop's staff know things about what it sells that customers never hear. A short can show what one product is made of, or how it works.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from U.S. Food and Drug Administration, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/shops.md](../../examples/shops.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a neighborhood florist that does weddings and walk-in bouquets, and wants more orders ahead of a holiday." The skill also runs as
`/business-video-skills:retail-shop-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill retail-shop-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit retail shops

| Type | What it shows | Example titles |
|---|---|---|
| How it is put together | One product or order built step by step | How a bouquet is built; How a wedding bouquet is planned |
| Why we do it this way | A habit of the trade and its reason | Why florists cut stems at an angle; What flower food does in the vase |
| What it is made of | The material, the parts, the craft | What sets a solid wood table apart from veneer; How a ring is sized |
| How it works | The mechanism inside a product | How bike gears change the effort; How a watch keeps time |
| Care and keep | How to make a thing last, in general | Why cut flowers droop; How to store a bike for winter |
| New in the shop | What just arrived and what is special about it | This week's delivery, unboxed; Three books the staff are reading |
| Behind the counter | The workbench, the back room, your own team at work | A repair on the bench, start to finish; How the window display changes |
| Help me choose | How to pick between two kinds of a thing, in general | Two kinds of hammer and what each is for; Which bike fits which ride |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Never call an arrangement with lilies safe for a home with cats. | The FDA says lilies in the true lily and daylily families are very dangerous for cats: the entire plant is toxic, the stem, leaves, flowers and pollen, and even the water in a vase. | United States | [Lovely Lilies and Curious Cats: A Dangerous Combination](https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
