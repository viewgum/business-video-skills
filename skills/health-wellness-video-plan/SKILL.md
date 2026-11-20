---
name: health-wellness-video-plan
description: Use when dental offices, chiropractors, physical therapists, gyms, personal trainers, med spas, eye care practices and yoga studios want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (health claims and patient privacy, plus endorsements, reviews and copyright).
---

# Short video plan for health and wellness businesses

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For dental offices, chiropractors, physical therapists, gyms, personal trainers, med spas, eye care practices and yoga studios.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: new patient or member bookings, first visits, or class sign-ups.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read `rules/every-business.yaml` and `rules/health.yaml` beside this file, and note the rules that touch this
   business and its place.
2. Pick the mix: at least five of the idea types below, no more than three ideas of one type, and one idea for each moment in
   the next 30 days that fits the business.
3. Write the 15 ideas. For each give a working title; the hook, the first line said or shown, under 12 words, that starts on the
   thing itself (never "in today's video"); what the video shows, in three beats; how to make it; a length from 15 to 60
   seconds; and Confirm: each fact the owner must check before posting.
4. Never invent a price, discount, hour, award, year in business, review, quote, license, certification, result or number about
   the business. Write [owner to add] in its place.
5. Check the lines. With Node 18 or newer, write each video's title, hook, beats and caption to one file, with a line holding
   only `---` between videos, and run `node "<this skill's folder>/check.mjs" posts.txt` as one command, with the folder's full
   path and no `cd`. It reads the rules beside it. Check the words that will be said, shown or posted, not your notes about the
   rules. Without Node, go through the rules by hand.
6. Act on each flag by what the rule asks. If it forbids the wording (a promised result, a cure, a guarantee, a word a
   designation may not use), rewrite the line. If it needs a fact to be true (gluten-free, a rating), evidence (a study, a
   ranking's source), a signed authorization (a patient) or something added (a license number, a total price, a disclosure),
   keep the line only once the owner has that or adds the missing part, and list it under Confirm. A flag on a line that
   already says the careful thing (no guarantee, a patch test first) can stay as it is. `--allow <rule-id>` skips a rule
   only after that is done for every line.
7. Build the 30-day calendar: 15 posting days, about every other day (days 1, 3, 5 and so on to 29), or on the weekdays the
   person named. Start with an easy idea, never put two ideas of one type side by side, and place each timely idea a few days
   before its moment. One vertical (9:16) video can go to TikTok, Instagram Reels, YouTube Shorts and Facebook Reels.
8. Write a caption starter for each posting day: one plain sentence on what the video shows, then where the business is. Check
   the captions too.
9. Finish with Before you post: the facts to confirm, and each rule that touched the plan with its source link.

## Idea types

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

## Moments in the year

- The new year, when people start plans
- Back to school and the start of sports seasons
- The end of the year, when people use benefits they have left
- A new class, service or opening hours

## How to make them

Film the room, the tools and your own staff, never a patient. For anything inside the body, an animated or 3D explainer is clearer than a camera, and it keeps every real person out of the frame.

## Rules for health and wellness

Each rule in bold is the practice for short videos; after it comes what the source says. From `rules/health.yaml`:

- **Explain how the body works in general, and promise no cure, relief, recovery time, weight loss, body change or result by a date.** The FTC's Health Products Compliance Guidance says that, as a general rule, claims about the health benefits or safety of health-related products require substantiation in the form of competent and reliable scientific evidence. Applies in: United States. Source: [Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance), read 2026-11-20. Id `health-claims-evidence`.
- **If your practice is a HIPAA covered entity, keep real patients, and anything that identifies them, out of your shorts unless you have a valid authorization signed by the patient or their personal representative.** HIPAA's privacy rule (45 CFR 164.508) says a covered entity must obtain an authorization for any use or disclosure of protected health information for marketing, except a face-to-face communication made by the covered entity to an individual or a promotional gift of nominal value provided by the covered entity; if a third party pays the covered entity for the marketing, the authorization must say so. Applies in: United States (HIPAA covered entities). Source: [45 CFR 164.508, Uses and disclosures for which an authorization is required](https://www.law.cornell.edu/cfr/text/45/164.508), read 2026-11-20. Id `patient-authorization`.

And from `rules/every-business.yaml`, for every business:

- **Paid or gifted posts about your business say so, plainly, in the post itself.** When someone endorsing a business has been paid or given something of value for it, and the audience would not expect that, the FTC says the connection should be disclosed clearly and conspicuously. Applies in: United States. Source: [FTC's Endorsement Guides: What People Are Asking](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking), read 2026-11-20. Id `ftc-paid-or-gifted-posts`.
- **When you recommend or feature a vendor or brand that pays you, gives you something or has a business, family or personal tie to you, say so in the post.** Under the FTC's Endorsement Guides (16 CFR 255.5), a connection between an endorser and a seller that might materially affect the weight or credibility of the endorsement, and that the audience does not reasonably expect, must be disclosed clearly and conspicuously; a material connection needs disclosing when a significant minority of the audience does not understand or expect it. Applies in: United States. Source: [16 CFR 255.5, Disclosure of material connections (FTC Endorsement Guides)](https://www.law.cornell.edu/cfr/text/16/255.5), read 2026-11-20. Id `ftc-material-connections`.
- **Never invent a review, a reviewer or a customer's words, and never change a real review in a way that changes what the person experienced.** The FTC's rule on consumer reviews (16 CFR 465.2) bars a business from writing, creating or selling a review or testimonial that materially misrepresents that the reviewer exists, that they used or otherwise experienced the product, service or business, or what that experience was, and from buying such a review, or spreading such a testimonial about the business or the products or services it sells, when it knew or should have known of the misrepresentation. Applies in: United States. Source: [16 CFR 465.2, Fake or false consumer reviews, consumer testimonials, or celebrity testimonials](https://www.law.cornell.edu/cfr/text/16/465.2), read 2026-11-20. Id `ftc-fake-reviews`.
- **Use only photos, clips and music you have the right to use: your own work whose rights you kept, or work you have permission or a license for.** The U.S. Copyright Office says the copyright in a work initially belongs to the author or authors who created it; for a work made for hire, the party that hired the creator is the author. Applies in: United States. Source: [Circular 1, Copyright Basics](https://www.copyright.gov/circs/circ01.pdf), read 2026-11-20. Id `copyright-ownership`.

## Output format

```markdown
## 15 video ideas for <business>

| # | Title | Hook | What it shows | How to make it | Length | Confirm |
|---|---|---|---|---|---|---|
| 1 | <title> | <first line> | <beat 1; beat 2; beat 3> | <phone, hands only, or animated> | <seconds> | <facts to check, or none> |

## 30-day calendar

| Day | Date | Video | Caption starter |
|---|---|---|---|
| 1 | <date or weekday> | Idea <n>: <title> | <one sentence, then the place> |

## Claim check

<each flag the checker or your reading found, and what changed; or "Nothing flagged">

## Before you post

- Confirm: <fact> (idea <n>)
- Rule: <rule> (<source link>)
```

## Common pitfalls

- Promising relief, a cure, a recovery time or weight lost by a date.
- Showing or describing a real patient, even without a name, unless they signed a HIPAA authorization.
- Answering a viewer's own symptoms in a video. Point them to a visit instead.
- Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.
- A call to action on every video. Ask for one specific thing, and only where it fits.
- Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
