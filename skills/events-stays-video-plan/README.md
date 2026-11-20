# TikTok and Reels ideas for photographers, wedding venues, event planners and inns

Short video ideas for photographers, wedding venues, event planners, inns, hotels and DJs, with a 30-day plan to post them. Couples and guests are booking something they have never planned before. A short that shows how the day runs, how a room changes or how a photo is made answers their first questions and shows how you work.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from Legal Information Institute, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/events.md](../../examples/events.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a countryside wedding venue with a barn and six guest rooms, which wants more tours for next year's dates." The skill also runs as
`/business-video-skills:events-stays-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill events-stays-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit events and stays businesses

| Type | What it shows | Example titles |
|---|---|---|
| How the day runs | A timeline built back from the date | How an event planner builds a timeline back from the date; How a wedding day timeline is planned |
| Behind the scenes | What happens out of sight while guests are busy | How a room changes from ceremony to reception; How a hotel room is cleaned between guests |
| The plan B | How bad weather or a late vendor is handled | How a backup plan covers bad weather at an event; How a rain plan works for an outdoor ceremony |
| Why we ask | A request customers question, and its reason | Why caterers need a final headcount; Why a hotel asks for a card at check-in |
| How the craft works | Light, sound or planning, explained | How a photographer uses light at golden hour; What editing does to a photo after the shoot |
| What the price includes | The total price and what each fee covers | What a resort fee is and where it shows in the price; How a cancellation policy works for a hotel stay |
| Who owns what | Rights and terms customers ask about | Who owns the copyright in a photo; What a run of show is and who follows it |
| Getting ready | What a client or guest can do beforehand | What to wear for a photo session; How a seating chart comes together |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| When a short gives a ticket or room price, give the total price with every mandatory fee, more prominently than other price details (if you show a final amount of payment, make it at least as prominent as the total); in a video with sound, show it and say it at the same time. | The FTC's Rule on Unfair or Deceptive Fees (16 CFR Part 464) says any ad that states a price for live-event tickets or short-term lodging, on screen or out loud, must disclose the total price clearly and conspicuously and more prominently than other pricing information, except that a final amount of payment, where shown, must be at least as prominent as the total price; in a communication with both pictures and sound, the disclosure must appear in both at the same time. | United States (live-event tickets and short-term lodging) | [16 CFR Part 464, Rule on Unfair or Deceptive Fees (live-event tickets and short-term lodging)](https://www.law.cornell.edu/cfr/text/16/part-464) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
