# Short video ideas for daycares, tutors, music schools and martial arts studios

Short video ideas for daycares, tutors, music schools, martial arts studios and driving schools, with a 30-day plan to post them. Parents and students want to know how a skill is learned and what a day looks like before they sign up. A short that explains one step of that, with no real child shown and no promise of results, answers it.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from U.S. Consumer Product Safety Commission, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/learning.md](../../examples/learning.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a home-based daycare for toddlers that wants more tours booked for the next term." The skill also runs as
`/business-video-skills:learning-care-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill learning-care-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit learning and care businesses

| Type | What it shows | Example titles |
|---|---|---|
| How a skill is learned | One step of learning, in order | How toddlers learn new words; How a beginner learns to read music |
| Why children do that | A behavior parents see, explained in general | Why toddlers have trouble sharing; Why a goodbye routine makes drop-off easier |
| A day here | The rooms, the schedule and the routines, with no child identifiable | What a morning looks like, hour by hour; How a first lesson runs |
| Safety and rules | The rules a program follows, in general | What a child care license checks; Why babies sleep on their backs in a bare crib |
| How to practice | A practice habit, explained | How to practice scales without getting bored; How to fit practice into a busy week |
| The technique | One move or one rule, drawn or demonstrated by an adult | How a front kick builds balance; How a three-point turn works |
| Meet the teachers | Your own staff and how they teach | How a teacher greets children at drop-off; What a driving instructor watches on a first drive |
| What to bring | What a first day or first lesson needs | What to pack for the first day; What to bring to a first lesson |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Any nap scene shows a baby on their back with nothing but a fitted sheet. | CPSC's safe sleep guidance is Bare is Best, nothing but a fitted sheet in a crib, bassinet or play yard, with a baby always placed on their back; it names bumpers, blankets and pillows as soft objects that can pose a suffocation risk, and CPSC warns about products that violate the federal ban on crib bumpers. | United States | [Safe Sleep: Cribs and Infant Products](https://www.cpsc.gov/SafeSleep) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
