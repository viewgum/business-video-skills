---
name: money-insurance-video-plan
description: Use when accountants, bookkeepers, tax preparers, financial planners, insurance agents and mortgage brokers want short video ideas or a posting plan for TikTok, Instagram Reels, YouTube Shorts or Facebook Reels. Turns a few lines about the business into 15 specific video ideas and a 30-day posting calendar, then checks every hook and caption against sourced ad and claim rules (Circular 230, client return information, the SEC marketing rule, FINRA, insurance promises and Regulation Z, plus endorsements, reviews and copyright).
---

# Short video plan for money and insurance businesses

Give this skill a few lines about a business and it returns 15 short video ideas made for that business, a 30-day calendar to
post them on, and a check of every line against the ad and claim rules in its rules folder. Each rule names its source and the
day it was read, so the owner can read the rule itself.

For accountants, bookkeepers, tax preparers, financial planners, insurance agents and mortgage brokers.

Not for: writing the full script of one video, or legal advice. The checks flag lines worth a second look; they do not replace a
lawyer, a compliance officer or a licensing board, and they cannot see pictures, so read and watch each video too.

## Ask first

Use what the person already said. Ask only for what is missing, in one message, with no more than four questions:

1. What the business does and where it is (town or region, and country). Where matters: some rules are state rules.
2. What it wants more of in the next month: consultations booked, returns filed early in the season, or quote requests.
3. What is true and specific about it: the services or items, how the work is done, the people, the history. Use only what the
   person tells you.
4. How the videos will be made: filmed on a phone (hands, the work, the place), or with no filming (text on screen, photos the
   business owns, an animated explainer).

If the person says to go ahead without answers, use what you have and put each guess in [brackets].

## Steps

1. Read `rules/every-business.yaml` and `rules/money.yaml` beside this file, and note the rules that touch this
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
| What a form says | One form, box by box | What a W-2 actually tells you; What is inside a monthly mortgage payment |
| Which one | Two choices side by side, and what sets them apart | Tax credit or deduction: which one saves more?; Pre-qualified or pre-approved? |
| How it works | One idea built step by step on screen | How quarterly estimated taxes work; How compound growth works |
| What a word means | One term from a policy, a loan or a return | What a deductible is; What mortgage points are |
| What to do when | The steps after something arrives or a date passes | What to do when a letter from the tax office arrives; How a filing extension works, and what it does not extend |
| Why it happens | A surprise people run into, explained | Why a profitable business can still run out of cash; Why some refunds take longer to arrive |
| What is left out | What a policy or a plan does not cover | How to check whether a policy covers flood; How an umbrella policy sits on top |
| The first meeting | What to bring and what happens, so the first call is easy | What to bring to a first tax appointment; What an insurance review covers |

## Moments in the year

- The start of tax season, and the weeks before the filing deadline
- The extension deadline in the fall
- Year-end planning in November and December
- Home-buying season in spring
- Storm or flood season where you are

## How to make them

Talking to camera works if the person is comfortable. Otherwise a drawn form, a chart that builds or an animated explainer carries these topics well, with no client in sight.

## Rules for money and insurance

Each rule in bold is the practice for short videos; after it comes what the source says. From `rules/money.yaml`:

- **Promise no refund, debt relief or outcome with the IRS.** Treasury Circular 230 (31 CFR 10.30) says a practitioner may not, with respect to any IRS matter, use any public communication or private solicitation containing a false, fraudulent or coercive statement or claim, or a misleading or deceptive statement or claim. Applies in: United States (practitioners before the IRS). Source: [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30), read 2026-11-20. Id `circular-230-claims`.
- **If you are an enrolled agent, enrolled retirement plan agent or registered tax return preparer, describe the designation without the word certified, and never imply you work for the IRS.** Circular 230 (31 CFR 10.30) says enrolled agents, enrolled retirement plan agents and registered tax return preparers, in describing their professional designation, may not use the term certified or imply an employer and employee relationship with the IRS. Applies in: United States (enrolled agents, enrolled retirement plan agents and registered tax return preparers). Source: [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30), read 2026-11-20. Id `circular-230-certified`.
- **Never use a real client's return, numbers or story; use a made-up example and say it is one.** Federal law (26 U.S.C. 7216) makes it a misdemeanor for a person in the business of preparing, or providing services in connection with preparing, federal income tax returns, or who prepares them for pay, to knowingly or recklessly disclose information furnished for, or in connection with, preparing such a return, or use it for any purpose other than preparing or assisting in preparing such a return, subject to the exceptions in the law. Applies in: United States (people who prepare federal income tax returns, or are in the business of providing services connected with preparing them). Source: [26 U.S. Code 7216, Disclosure or use of information by preparers of returns](https://www.law.cornell.edu/uscode/text/26/7216), read 2026-11-20. Id `preparer-client-information`.
- **A registered investment adviser reads the SEC marketing rule before a short quotes a client or shows performance.** The SEC's investment adviser marketing rule, issued December 22, 2020, is a merged rule that replaced the earlier advertising and cash solicitation rules for registered investment advisers. Applies in: United States (SEC-registered investment advisers). Source: [Investment Adviser Marketing](https://www.sec.gov/rules-regulations/2020/12/investment-adviser-marketing), read 2026-11-20. Id `adviser-marketing-rule`.
- **If you are with a FINRA member firm, promise no return, and give risks alongside any benefit.** FINRA Rule 2210 says a member's communications with the public must be fair and balanced, and that no member may make any false, exaggerated, unwarranted, promissory or misleading statement or claim in any communication. Applies in: United States (FINRA member firms). Source: [Rule 2210, Communications with the Public](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210), read 2026-11-20. Id `finra-fair-and-balanced`.
- **Never promise a premium, a saving or a payout in a short (ViewGum's insurance agent page's practice), and describe coverage only as the policy itself does.** The NAIC's Unfair Trade Practices Act (Model 880), a model for state insurance laws, defines as unfair trade practices statements that misrepresent the benefits, advantages, conditions or terms of a policy, and untrue, deceptive or misleading insurance advertising, internet advertisements and postings included, when committed flagrantly and in conscious disregard of the Act or rules made under it, or often enough to indicate a general business practice. Applies in: United States (state insurance law, as each state enacts it). Source: [Unfair Trade Practices Act, Model 880](https://content.naic.org/sites/default/files/model-law-880.pdf), read 2026-11-20. Id `insurance-no-promises`.
- **Leave rates and payment terms out of a short, or include every disclosure Regulation Z requires. ViewGum's mortgage broker page's practice is to name no numbers.** Under Regulation Z (12 CFR 1026.24), an ad for closed-end credit that states a rate of finance charge must state it as an annual percentage rate, using that term, and say if it may increase after consummation; and an ad that states the amount or percentage of a down payment (in a credit sale), the number of payments or period of repayment, the amount of a payment, or the amount of a finance charge must also state, as applicable, the down payment, the terms of repayment over the full term including any balloon payment, and the annual percentage rate, with whether it may increase after consummation. Applies in: United States (closed-end consumer credit). Source: [12 CFR 1026.24, Advertising (Regulation Z)](https://www.law.cornell.edu/cfr/text/12/1026.24), read 2026-11-20. Id `credit-ad-terms`.

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

- Giving advice for one person's situation. Keep every video general information, and say so.
- A real client's numbers or story, even with the name changed.
- Mortgage shorts with numbers in them. A rate must be given as an APR, and a payment amount, number of payments or finance charge (or, in a credit sale, a down payment) brings in more Regulation Z disclosures; leave the numbers out.
- An enrolled agent or registered preparer calling the designation certified, or anyone implying they work for the IRS.
- Ideas that could belong to any business. Each idea names something this kind of business knows, does or sells.
- A call to action on every video. Ask for one specific thing, and only where it fits.
- Hype words (amazing, game-changer, the best) in hooks and captions. Say the fact that makes it worth watching.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
