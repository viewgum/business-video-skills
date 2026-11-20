---
name: beauty-salon-video-plan
description: Use when hair salons, barbers, nail salons, lash studios and day spas want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (hair dye patch tests and drug claims, plus endorsements, reviews and copyright).
---

# Short video plan for beauty businesses

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For hair salons, barbers, nail salons, lash studios and day spas.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: booked appointments, a new service, or chair time on slow weekdays.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read `rules/every-business.yaml` and `rules/beauty.yaml` beside this file, and note the rules that touch this
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
| What the product does | A product's effect on a strand, a nail or the skin's surface, step by step | What bleach does to a strand of hair; What a toner does after bleach |
| How the cut is planned | The plan before the scissors or the clippers | How a layered cut is planned; How a fade is blended |
| Why it fades or breaks | What sun, water or time does, in general | Why color fades in the sun; Why polish chips at the tip |
| The tool | A tool and what it is for | Why stylists use different brushes for a blowout; What a lash adhesive needs to set |
| The service, start to finish | Your own work on a client who agreed to be filmed | A full color appointment, sped up; A gel set, step by step |
| Safety steps | The steps that protect the client | Why a patch test comes before color; How tools are cleaned between clients |
| Care at home | How to keep a style or a set, in general | How to sleep on a fresh blowout; How long to wait before washing new color |
| Meet the chair | Your own team, their specialties and the room | What each stylist books most; The station before the first client |

## Moments in the year

- Wedding, prom and graduation season
- Holidays and the party season
- The change of season, when clients change color
- A new service, product line or team member

## How to make them

Good light and a steady phone are enough. Film only clients who agreed, and ask before showing a face. Animated explainers suit what happens inside a strand or under a nail.

## Rules for beauty

Each rule in bold is the practice for short videos; after it comes what the source says. From `rules/beauty.yaml`:

- **A short about hair color never skips or plays down the patch test.** The FDA's Coal-tar Hair Dye Safety Checklist says to do a patch test on your skin every time before dyeing your hair. Applies in: United States. Source: [Hair Dyes](https://www.fda.gov/cosmetics/cosmetic-products/hair-dyes), read 2026-11-20. Id `hair-dye-patch-test`.
- **Never say a cosmetic product, or a salon service that uses one, grows hair or treats a condition.** The FDA says a product is a drug when it is intended to treat or prevent disease, or, for articles other than food, to affect the structure or any function of the body, gives claims that a product will restore hair growth, reduce cellulite or regenerate cells as examples, and notes that some products, such as antidandruff shampoo, are both cosmetics and drugs. Applies in: United States. Source: [Is It a Cosmetic, a Drug, or Both? (Or Is It Soap?)](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/it-cosmetic-drug-or-both-or-it-soap), read 2026-11-20. Id `cosmetic-or-drug-claims`.

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

- Saying a cosmetic product, or a service that uses one, grows hair, stops hair loss or treats a condition. Under FDA rules that claim makes the product a drug.
- Skipping the patch test in a color video.
- Promising a permanent or guaranteed result.
- Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.
- A call to action on every video. Ask for one specific thing, and only where it fits.
- Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
