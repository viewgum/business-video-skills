# Short video ideas for IT services, cleaning companies, staffing agencies and printers

Short video ideas for IT services, commercial cleaning, staffing, printing, logistics and manufacturing companies, with a 30-day plan to post them. The people who hire you rarely see how the work behind an office runs. A short that explains one part of it in plain words, with no guarantee it cannot fail, shows what you do and how.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from Legal Information Institute, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/business-services.md](../../examples/business-services.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a five-person managed IT company that supports dental and law offices, and wants more discovery calls." The skill also runs as
`/business-video-skills:business-services-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill business-services-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit business services companies

| Type | What it shows | Example titles |
|---|---|---|
| How the threat works | One risk, step by step, in general | How a phishing email tricks you; How ransomware locks your files |
| What the safeguard does | What one protection stops, and what it does not | What two-factor login protects against; Why a backup needs a copy offsite |
| Why it matters | A habit offices skip, and its reason | Why software updates matter; Why high-touch surfaces get cleaned first |
| How the job runs | Your process from the first call to the finished work | How a print job goes from file to press; How an order moves through a warehouse |
| How it is made | A product or part from raw material to finished | How a part is cut on a CNC machine; How a label is printed and cut |
| What the quote covers | One line customers ask about, made plain | What a managed IT plan covers; What a staffing agency's fee includes |
| On the floor | Your own team at work, with their permission | A night clean of an office, sped up; The first shift on the line |
| Terms explained | A word from the trade, made plain | What uptime means; What a bill of lading is |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Never call a setup unhackable or breach-proof; show what a safeguard does. | Section 5 of the FTC Act declares unfair or deceptive acts or practices in or affecting commerce unlawful. | United States | [15 U.S. Code 45, Unfair methods of competition unlawful; prevention by Commission (FTC Act, section 5)](https://www.law.cornell.edu/uscode/text/15/45) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
