# TikTok and Reels ideas for hair salons, barbers, nail salons and spas

Short video ideas for hair salons, barbers, nail salons, lash studios and day spas, with a 30-day plan to post them. Clients sit through a service without seeing what the product or the tool is doing. A short that shows it step by step, with no promise of a permanent result, explains the price and the time it takes.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 6 sourced ad and claim rules
  (2 for this group from U.S. Food and Drug Administration, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/beauty.md](../../examples/beauty.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a four-chair hair salon known for color, which wants more weekday appointments." The skill also runs as
`/business-video-skills:beauty-salon-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill beauty-salon-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit beauty businesses

| Type | What it shows | Example titles |
|---|---|---|
| What the product does | A product's effect on a strand, a nail or the skin's surface, step by step | What bleach does to a strand of hair; What a toner does after bleach |
| How the cut is planned | The plan before the scissors or the clippers | How a layered cut is planned; How a fade is blended |
| Why it fades or breaks | What sun, water or time does, in general | Why color fades in the sun; Why polish chips at the tip |
| The tool | A tool and what it is for | Why stylists use different brushes for a blowout; What a lash adhesive needs to set |
| The service, start to finish | Your own work on a client who agreed to be filmed | A full color appointment, sped up; A gel set, step by step |
| Safety steps | The steps that protect the client | Why a patch test comes before color; How tools are cleaned between clients |
| Care at home | How to keep a style or a set, in general | How to sleep on a fresh blowout; How long to wait before washing new color |
| Meet the chair | Your own team, their specialties and the room | What each stylist books most; The station before the first client |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| A short about hair color never skips or plays down the patch test. | The FDA's Coal-tar Hair Dye Safety Checklist says to do a patch test on your skin every time before dyeing your hair. | United States | [Hair Dyes](https://www.fda.gov/cosmetics/cosmetic-products/hair-dyes) | 2026-11-20 |
| Never say a cosmetic product, or a salon service that uses one, grows hair or treats a condition. | The FDA says a product is a drug when it is intended to treat or prevent disease, or, for articles other than food, to affect the structure or any function of the body, gives claims that a product will restore hair growth, reduce cellulite or regenerate cells as examples, and notes that some products, such as antidandruff shampoo, are both cosmetics and drugs. | United States | [Is It a Cosmetic, a Drug, or Both? (Or Is It Soap?)](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/it-cosmetic-drug-or-both-or-it-soap) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
