---
name: home-trades-video-plan
description: Use when roofers, plumbers, electricians, HVAC companies, general contractors, remodelers, concrete and deck builders, landscapers, painters, solar installers and home builders want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (contractor license numbers, fair housing, green claims, lead-safe work, silica dust, treated wood, solar credits and savings, plus endorsements, reviews and copyright).
---

# Short video plan for contractors and home trades

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For roofers, plumbers, electricians, HVAC companies, general contractors, remodelers, concrete and deck builders, landscapers, painters, solar installers and home builders.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: calls for quotes, booked jobs for the coming season, or one service it wants to sell more of.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read `rules/every-business.yaml` and `rules/home.yaml` beside this file, and note the rules that touch this
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
| How the job is done | The work in order, part by part, from the ground up | How a paver patio is built; How a house is framed |
| The hidden part | What sits inside the wall, under the floor or under the roof once the job is finished | How a shower is waterproofed before tile; Why underlayment goes on before shingles |
| The failure and its fix | What goes wrong, why, and what the repair changes | Why frozen pipes can burst; What an ice dam does to a roof |
| A line on the quote | One item a customer questions on an estimate, made plain | What rough-in means for plumbing and wiring; What a heat pump install includes |
| What the homeowner notices | Something people see at home and wonder about, and when it matters | When AC drain water is normal, and when it is not; What the cut lines in a new slab are for |
| Ahead of the season | The job that matters before the weather turns | What a sump pump does in a heavy rain; Why dirty coils make an air conditioner work harder |
| What a pro checks | The questions a trained eye asks before the work starts | What a pro checks before a load-bearing wall comes out; What an electrician checks before adding an EV charger |
| On the job | Your own crew at work, with their permission and the customer's | A day on a roof tear-off, start to finish; Setting forms before a driveway pour |

## Moments in the year

- Before the first hard freeze: pipes, gutters, furnaces
- Before the cooling season: AC tune-ups, coils, drains
- Spring: patios, decks, planting, exterior paint
- Storm season: roofs, sump pumps, drainage
- Before the holidays: kitchens and baths people want done in time

## How to make them

Most trades can film with a phone on the job: hands at work, the part being installed, a slow pass over the finished detail. Cutaway or animated explainers suit the parts nobody can film once the wall is closed.

## Rules for home and trades

Each rule in bold is the practice for short videos; after it comes what the source says. From `rules/home.yaml`:

- **If you are a licensed California contractor, put your license number in every post advertising your contracting work, a short's caption included, and offer only work in a classification you hold. Elsewhere, ask your state's licensing board what an ad must show.** California's contractors board says Business and Professions Code section 7030.5 requires a license number in all forms of advertising for construction that requires a contractor's license, electronic transmissions included, and that a licensed contractor who advertises and contracts outside its classification can be disciplined. Applies in: California (other states set their own rules). Source: [Fast Facts: California License and Contracting Requirements for Online Home Improvement Marketplace Companies](https://www.cslb.ca.gov/Resources/IndustryBulletins/Online_Marketplace_Fast_Facts.pdf), read 2026-11-20. Id `contractor-license-number`.
- **Describe the home and the place, never who it suits or who should live there.** The Fair Housing Act's advertising rule (24 CFR 100.75) makes it unlawful to make, print or publish any notice, statement or advertisement for the sale or rental of a dwelling that indicates any preference, limitation or discrimination because of race, color, religion, sex, handicap, familial status or national origin. Applies in: United States. Source: [24 CFR 100.75, Discriminatory advertisements, statements and notices](https://www.law.cornell.edu/cfr/text/24/100.75), read 2026-11-20. Id `fair-housing-ads`.
- **Never a bare eco-friendly. Name the specific benefit or benefits you mean, such as recycled content or less water, clearly and prominently, and be able to back them up.** The FTC's Green Guides (16 CFR 260.4) say unqualified general environmental benefit claims are difficult to interpret and likely convey a wide range of meanings, and that marketers should not make them. Applies in: United States. Source: [16 CFR 260.4, General environmental benefit claims (FTC Green Guides)](https://www.law.cornell.edu/cfr/text/16/260.4), read 2026-11-20. Id `green-claims-specific`.
- **Claim lead-safe or RRP certification for your firm only if the firm holds it; a renovator's own certificate is a separate thing.** Under EPA's Renovation, Repair and Painting Rule, firms performing renovation, repair and painting projects that disturb lead-based paint in homes, child care facilities and kindergartens built before 1978 must be EPA- or state-certified and must use certified renovators who follow specific work practices. Applies in: United States. Source: [Lead Renovation, Repair and Painting Program Rules](https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules), read 2026-11-20. Id `lead-safe-certification`.
- **When a short shows a concrete cut, show it done wet (ViewGum's concrete page's practice); the same practice suits brick, block and stone.** OSHA's respirable crystalline silica standard for construction requires employers to limit worker exposures to respirable crystalline silica, and OSHA notes that applying water to a saw blade when cutting stone, rock, concrete, brick or block substantially reduces the dust it creates. Applies in: United States. Source: [Silica, Crystalline: Construction](https://www.osha.gov/silica-crystalline/construction), read 2026-11-20. Id `silica-wet-cutting`.
- **In a short about an older deck whose wood you have not identified, say the wood may be treated rather than calling it plain lumber.** The EPA says that before 2004, wood treated with chromated arsenicals, which include chromated copper arsenate (CCA), was used in residential structures such as decks and playsets; makers stopped producing it for homeowner uses in December 2003, and the EPA does not require existing structures made with it to be removed. Applies in: United States. Source: [Chromated Arsenicals (CCA)](https://www.epa.gov/ingredients-used-pesticide-products/chromated-arsenicals-cca), read 2026-11-20. Id `older-deck-treated-wood`.
- **Never promise the federal Residential Clean Energy Credit to a new customer.** The IRS says the federal Residential Clean Energy Credit is not available for any property placed in service after December 31, 2025. Applies in: United States. Source: [Residential Clean Energy Credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit), read 2026-11-20. Id `solar-credit-ended`.
- **Leave savings figures out, and never tie a tax credit or incentive to a lease or a power purchase agreement.** The FTC tells homeowners that it's hard to predict future utility rates, and that with a lease or a power purchase agreement they don't own the system, so they can't claim renewable energy certificates and aren't eligible for tax credits or financial incentives, which go to the system's owner. Applies in: United States. Source: [Solar Power for Your Home](https://consumer.ftc.gov/articles/solar-power-your-home), read 2026-11-20. Id `solar-savings-and-leases`.

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

- Telling viewers to do gas, electrical panel or structural work themselves. Show what a pro does and why.
- Stating one town's code or permit rule as the rule everywhere. Codes vary by place; say so.
- Showing a customer's house number, street or face without asking them.
- Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.
- A call to action on every video. Ask for one specific thing, and only where it fits.
- Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
