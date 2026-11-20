# TikTok and Reels ideas for veterinarians, pet groomers and dog trainers

Short video ideas for veterinary clinics, pet groomers and dog trainers, with a 30-day plan to post them. Pet owners want to understand what their animal is doing and why. A short that explains how animals work, in general and with no diagnosis, answers that and shows how you care for them.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 5 sourced ad and claim rules
  (1 for this group from Legal Information Institute, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/pets.md](../../examples/pets.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a mobile dog groomer who serves one county and wants more repeat bookings." The skill also runs as
`/business-video-skills:pet-business-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill pet-business-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit pet businesses

| Type | What it shows | Example titles |
|---|---|---|
| How animals work | One sense, organ or behavior, drawn or modeled | How a dog's nose works; Why cats hide pain |
| How it spreads | How a common problem reaches a pet, in general | How heartworm spreads; How fleas get into a house |
| What the visit checks | A checkup or a groom, step by step | What a yearly pet checkup looks at; What happens in a full groom |
| Why we do it | A step of care and its reason | Why groomers trim nails before the bath; Why trainers reward the moment it happens |
| How training works | One cue taught in steps, with your own dog or a client's who agreed | How a dog learns to sit; What a training session looks like |
| Season ready | What heat, cold or holidays mean for pets, in general | Why hot pavement matters for paws; Holiday foods to keep away from pets |
| Meet the team | Your own staff and the room | What each person in the clinic does; The grooming table before the first appointment |
| First visit | What to bring and what happens, so the first visit is easy | What to bring to a puppy's first visit; How a first training class runs |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Explain in general, and never diagnose a viewer's pet or prescribe or dose a treatment in a short (ViewGum's veterinarian page's practice). | FDA's rules on extralabel drug use in animals (21 CFR 530.3) define a valid veterinarian-client-patient relationship: the vet has assumed responsibility for medical judgments and the client has agreed to follow instructions; the vet knows the animal well enough for at least a general or preliminary diagnosis, which requires having recently seen it and being personally acquainted with its keeping and care through examination or medically appropriate and timely visits to where it is kept; and the vet is readily available for follow-up in case of adverse reactions or failure of the therapy. | United States (federal rules on extralabel drug use) | [21 CFR 530.3, Definitions (the veterinarian-client-patient relationship)](https://www.law.cornell.edu/cfr/text/21/530.3) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
