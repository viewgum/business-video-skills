---
name: food-drink-video-plan
description: Use when restaurants, cafes, bakeries, pizzerias, food trucks, caterers, bars, breweries, wineries, distilleries, liquor stores and convenience stores want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (allergens, gluten-free, tobacco and TikTok's regulated goods, plus endorsements, reviews and copyright).
---

# Short video plan for food and drink businesses

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For restaurants, cafes, bakeries, pizzerias, food trucks, caterers, bars, breweries, wineries, distilleries, liquor stores and convenience stores.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: walk-ins on slow days, preorders, catering inquiries, or more orders of one item.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read `rules/every-business.yaml` and `rules/food.yaml` beside this file, and note the rules that touch this
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
| How it is made | One item built from start to finish | How a croissant gets its layers; How a latte is built |
| Why the kitchen does it | A step guests notice or never see, and the reason for it | Why bagels are boiled before baking; Why bakers weigh flour instead of using cups |
| The science on the plate | What heat, time or fat does to the food | What makes a pie crust flaky; How a wood fired oven cooks so fast |
| Where it comes from | The ingredient's origin, or the true story of a dish | Where a coffee bean comes from; The true story of a dish on your menu |
| Answer a guest's question | One question guests ask, answered with one pot, one cup or one plate | Why pasta water gets salted; Espresso, pour over or drip? |
| How the machine works | The equipment behind the counter | How a fountain soda machine mixes a drink; How a roller grill works |
| New this week | A new item, a returning special, the day a batch is ready | The day the sourdough is ready, and why only that day; What goes into this season's special |
| Behind the counter | Your own team opening up, prepping or closing, with their permission | The first hour before the doors open; How the line gets ready for a rush |

## Moments in the year

- A menu change or a seasonal special
- The first cold week (soup, hot drinks) and the first warm one
- Holiday preorders and catering season
- A local event or game day that brings people near you
- The day of the week your best item is made

## How to make them

A phone over the counter or the pan is enough: hands, steam, the cut through the crumb. Keep the frame on the food and the hands. Animated or drawn explainers suit the parts a camera cannot show, like what happens inside the dough.

## Rules for food and drink

Each rule in bold is the practice for short videos; after it comes what the source says. From `rules/food.yaml`:

- **Never say a dish, drink or baked good is free of a major allergen unless you checked its ingredients, your suppliers and the chance of cross-contact in your kitchen.** The FDA names nine major food allergens: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame. Applies in: United States. Source: [Food Allergies](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies), read 2026-11-20. Id `allergen-free-claims`.
- **Call a dish gluten-free only when it meets the FDA's gluten-free definition.** Under the FDA's gluten-free labeling rule (21 CFR 101.91), a food labeled gluten-free is inherently gluten free, or contains no ingredient that is a gluten-containing grain, no ingredient made from one that was not processed to remove gluten, and no processed ingredient that brings the food to 20 parts per million of gluten or more; any unavoidable gluten must be less than 20 parts per million. Applies in: United States (FDA-regulated packaged foods; the FDA recommends restaurant menus follow it). Source: [Questions and Answers on the Gluten-Free Food Labeling Final Rule](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/questions-and-answers-gluten-free-food-labeling-final-rule), read 2026-11-20. Id `gluten-free-definition`.
- **Leave tobacco and vapes out of your shorts (ViewGum's convenience store page's practice).** The FDA says it is illegal for a retailer to sell any tobacco product, e-cigarettes included, to anyone under 21, and that the federal minimum age of sale applies to all retail establishments and persons with no exceptions. Applies in: United States. Source: [Tobacco 21](https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21), read 2026-11-20. Id `tobacco-21`.
- **Before a TikTok post shows or promotes alcohol, tobacco, vapes or lottery, check TikTok's rules for that item and whether your account is approved, post by post. ViewGum's convenience store page advises leaving them out.** TikTok's Community Guidelines say it doesn't allow trade, marketing or providing access to regulated, prohibited or high-risk goods and services, and that verified business accounts and verified TikTok Shop sellers may be allowed to sell or market some regulated items if they meet strict requirements. Applies in: TikTok. Source: [Community Guidelines: Policies & engagement](https://www.tiktok.com/safety/en/policies-and-engagement/overview?cgversion=2026H2update), read 2026-11-20. Id `tiktok-regulated-goods`.

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

- Calling an item allergen-free, nut-free or gluten-free from the recipe alone. Shared equipment and suppliers matter; confirm first.
- Bars, breweries, wineries and liquor stores: before each TikTok post that shows alcohol, check TikTok's rules for that item and whether your account is approved.
- Showing guests' faces without asking them.
- Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.
- A call to action on every video. Ask for one specific thing, and only where it fits.
- Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
