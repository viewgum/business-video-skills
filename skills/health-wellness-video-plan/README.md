# Short video ideas for dentists, chiropractors, physical therapists and gyms

Short video ideas for dental offices, chiropractors, physical therapists, gyms, trainers and studios, with a 30-day plan to post them. People search for what a symptom means or what happens at a first visit long before they book. A short can explain how the body works, in general and without promises, and this skill flags lines worth a second look against the rules health businesses post under.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 6 sourced ad and claim rules
  (2 for this group from Federal Trade Commission, Legal Information Institute, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/health.md](../../examples/health.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a two-dentist family practice in a suburb that wants more new patients for cleanings." The skill also runs as
`/business-video-skills:health-wellness-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill health-wellness-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit health and wellness businesses

| Type | What it shows | Example titles |
|---|---|---|
| How the body part works | One part of the body and its job, drawn or modeled | What a spinal disc does; How a cavity forms |
| Clear up a mix-up | Two words people confuse, or a name that misleads | Sprain or strain: what is the difference?; Why a slipped disc is not really slipped |
| The first visit | What happens, step by step, so a new patient or member knows what to expect | What a physical therapist checks at a first visit; What happens at a first chiropractic visit |
| What a treatment is | A treatment or a tool, what it is and how it fits | What a crown is and how it fits; What fluoride does to enamel |
| An everyday habit, explained | Why a habit people skip matters, in general | Why flossing reaches what brushing misses; Why a warm-up matters |
| How training works | What the body does during and after exercise | What a muscle does when you lift; Why rest days help build strength |
| Meet the team | Your own staff and the room, with their consent and no patients in view | What each person at the front desk does; A walk through the treatment room before opening |
| How to move | A general movement pattern, explained, never a treatment plan | How the way you lift changes the load on your back; Why balance training helps prevent falls |

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Explain how the body works in general, and promise no cure, relief, recovery time, weight loss, body change or result by a date. | The FTC's Health Products Compliance Guidance says that, as a general rule, claims about the health benefits or safety of health-related products require substantiation in the form of competent and reliable scientific evidence. | United States | [Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance) | 2026-11-20 |
| If your practice is a HIPAA covered entity, keep real patients, and anything that identifies them, out of your shorts unless you have a valid authorization signed by the patient or their personal representative. | HIPAA's privacy rule (45 CFR 164.508) says a covered entity must obtain an authorization for any use or disclosure of protected health information for marketing, except a face-to-face communication made by the covered entity to an individual or a promotional gift of nominal value provided by the covered entity; if a third party pays the covered entity for the marketing, the authorization must say so. | United States (HIPAA covered entities) | [45 CFR 164.508, Uses and disclosures for which an authorization is required](https://www.law.cornell.edu/cfr/text/45/164.508) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
