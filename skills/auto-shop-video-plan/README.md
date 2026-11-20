# Short video ideas for auto repair shops, detailers, tire shops and body shops

Short video ideas for auto repair shops, detailers, tire shops and body shops, with a 30-day plan to post them. Drivers use their brakes, tires and oil every day without seeing how any of it works. A short that shows one part doing its job explains why the service on the invoice matters.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from Federal Trade Commission, Consumer Advice, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/auto.md](../../examples/auto.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for an independent repair shop with four bays that wants more brake and tire appointments before winter." The skill also runs as
`/business-video-skills:auto-shop-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill auto-shop-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit auto shops

| Type | What it shows | Example titles |
|---|---|---|
| How the part works | One system, from the pedal or the key to the wheel | How brakes stop your car; What an oil change actually does |
| What the warning means | A light, a sound or a smell, and what it can point to | What the check engine light means; Why brakes squeal |
| Why the service matters | What wears out and what the service changes | What tire rotation does; Why coolant gets changed |
| On the lift | Your own technician at work on a real job, with the owner's permission | A brake job, start to finish; What we look at in a pre-trip check |
| Before and after the detail | Your own work, filmed on the day | One seat, cleaned in steps; How paint correction works |
| Season ready | What the weather does to a car, and what to check | What cold does to a battery; Why tire pressure drops in winter |
| A word on the invoice | One line customers question, made plain | What a diagnostic fee pays for; What an alignment adjusts |
| Warranty basics | The general rule on parts and service, pointing to the warranty itself | Can I get my car serviced outside the dealer?; What a parts warranty covers |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| State the general rule, and point to the warranty itself. | The FTC says companies can't void a warranty or deny warranty coverage solely because a customer used a part made by another company, or had repairs or services done by someone not associated with the company; they can refuse coverage for defects or damage caused by third-party parts or services. | United States | [FTC says companies' warranty restrictions were illegal](https://consumer.ftc.gov/consumer-alerts/2022/07/ftc-says-companies-warranty-restrictions-were-illegal) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
