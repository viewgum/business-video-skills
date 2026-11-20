# Ad and claim rules for small-business videos

What a short video for a small business may and may not say, by industry: what the source says, the practice for short videos,
where it applies, the source and the day it was read. 13 industry groups plus the rules every business meets;
35 rules in all.

Every rule comes from ViewGum's industry pages (https://viewgum.com/for), where each one sits beside its source, and was read
again against that source on 2026-11-20. This is general information, not legal advice. Most rules are United States rules;
each one says where it applies. States and other countries add their own, so check yours.

## Files

- [`every-business.yaml`](every-business.yaml): Every business. Rules every small business meets when it posts videos about itself, whatever it sells.
- [`home.yaml`](home.yaml): Home and trades. Contractors and home trades: roofing, plumbing, electrical, HVAC, remodeling, concrete, decks, landscaping, painting, solar and home building.
- [`food.yaml`](food.yaml): Food and drink. Restaurants, cafes, bakeries, food trucks, pizzerias, caterers, bars, breweries, wineries, distilleries, liquor stores and convenience stores.
- [`health.yaml`](health.yaml): Health and wellness. Dentists, chiropractors, physical therapists, gyms, personal trainers, med spas, eye care and yoga studios.
- [`money.yaml`](money.yaml): Money and insurance. Accountants, bookkeepers, tax preparers, financial planners, insurance agents and mortgage brokers.
- [`real-estate.yaml`](real-estate.yaml): Real estate. Real estate agents and property managers.
- [`legal.yaml`](legal.yaml): Legal. Law firms and lawyers.
- [`shops.yaml`](shops.yaml): Shops. Florists, boutiques, hardware stores, bike shops, jewelers, furniture stores, bookstores and pet stores.
- [`auto.yaml`](auto.yaml): Auto. Auto repair shops, detailers, tire shops and body shops.
- [`beauty.yaml`](beauty.yaml): Beauty. Hair salons, barbers, nail salons, lash studios and day spas.
- [`learning.yaml`](learning.yaml): Learning and care. Daycares, tutors, music schools, martial arts studios and driving schools.
- [`events.yaml`](events.yaml): Events and stays. Photographers, wedding venues, event planners, inns and hotels, and DJs.
- [`business-services.yaml`](business-services.yaml): Business services. IT services, commercial cleaning, staffing, printing, logistics and manufacturing.
- [`pets.yaml`](pets.yaml): Pets. Veterinarians, pet groomers and dog trainers.

The claim checker reads these files: `node checker/check.mjs --group food script.txt`.

## Fields

| Field | What it holds |
|---|---|
| `id` | A stable name for the rule, used by the checker's `--allow` |
| `rule` | What the source says, close to its own words |
| `do` | The practice for short videos, as ViewGum's industry pages apply the rule; where it goes beyond the source, it says so |
| `explanation` | Qualifiers, exceptions and how the industry pages use the rule |
| `where` | Where, or for whom, the rule applies |
| `source` | The publisher, title and address of the source, and `dated`: the date the source shows, with its own label (updated, reviewed, effective, issued), when it shows one |
| `checked` | The day we last read the source and confirmed the rule against it |
| `pages` | ViewGum's industry pages that state the rule |
| `checks` | Patterns the checker uses to flag lines worth a second look (`match`), or a line each post should have and does not (`when_missing`, only when `if_present` matches if it is given). Patterns are JavaScript regular expressions, matched without regard to case. They are this repository's own heuristics, not part of any source |

## Every rule

| Group | Id | Practice | Where | Source | Checked |
|---|---|---|---|---|---|
| Every business | `ftc-paid-or-gifted-posts` | Paid or gifted posts about your business say so, plainly, in the post itself. | United States | [FTC's Endorsement Guides: What People Are Asking](https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking) | 2026-11-20 |
| Every business | `ftc-material-connections` | When you recommend or feature a vendor or brand that pays you, gives you something or has a business, family or personal tie to you, say so in the post. | United States | [16 CFR 255.5, Disclosure of material connections (FTC Endorsement Guides)](https://www.law.cornell.edu/cfr/text/16/255.5) | 2026-11-20 |
| Every business | `ftc-fake-reviews` | Never invent a review, a reviewer or a customer's words, and never change a real review in a way that changes what the person experienced. | United States | [16 CFR 465.2, Fake or false consumer reviews, consumer testimonials, or celebrity testimonials](https://www.law.cornell.edu/cfr/text/16/465.2) | 2026-11-20 |
| Every business | `copyright-ownership` | Use only photos, clips and music you have the right to use: your own work whose rights you kept, or work you have permission or a license for. | United States | [Circular 1, Copyright Basics](https://www.copyright.gov/circs/circ01.pdf) | 2026-11-20 |
| Home and trades | `contractor-license-number` | If you are a licensed California contractor, put your license number in every post advertising your contracting work, a short's caption included, and offer only work in a classification you hold. Elsewhere, ask your state's licensing board what an ad must show. | California (other states set their own rules) | [Fast Facts: California License and Contracting Requirements for Online Home Improvement Marketplace Companies](https://www.cslb.ca.gov/Resources/IndustryBulletins/Online_Marketplace_Fast_Facts.pdf) | 2026-11-20 |
| Home and trades | `fair-housing-ads` | Describe the home and the place, never who it suits or who should live there. | United States | [24 CFR 100.75, Discriminatory advertisements, statements and notices](https://www.law.cornell.edu/cfr/text/24/100.75) | 2026-11-20 |
| Home and trades | `green-claims-specific` | Never a bare eco-friendly. Name the specific benefit or benefits you mean, such as recycled content or less water, clearly and prominently, and be able to back them up. | United States | [16 CFR 260.4, General environmental benefit claims (FTC Green Guides)](https://www.law.cornell.edu/cfr/text/16/260.4) | 2026-11-20 |
| Home and trades | `lead-safe-certification` | Claim lead-safe or RRP certification for your firm only if the firm holds it; a renovator's own certificate is a separate thing. | United States | [Lead Renovation, Repair and Painting Program Rules](https://www.epa.gov/lead/lead-renovation-repair-and-painting-program-rules) | 2026-11-20 |
| Home and trades | `silica-wet-cutting` | When a short shows a concrete cut, show it done wet (ViewGum's concrete page's practice); the same practice suits brick, block and stone. | United States | [Silica, Crystalline: Construction](https://www.osha.gov/silica-crystalline/construction) | 2026-11-20 |
| Home and trades | `older-deck-treated-wood` | In a short about an older deck whose wood you have not identified, say the wood may be treated rather than calling it plain lumber. | United States | [Chromated Arsenicals (CCA)](https://www.epa.gov/ingredients-used-pesticide-products/chromated-arsenicals-cca) | 2026-11-20 |
| Home and trades | `solar-credit-ended` | Never promise the federal Residential Clean Energy Credit to a new customer. | United States | [Residential Clean Energy Credit](https://www.irs.gov/credits-deductions/residential-clean-energy-credit) | 2026-11-20 |
| Home and trades | `solar-savings-and-leases` | Leave savings figures out, and never tie a tax credit or incentive to a lease or a power purchase agreement. | United States | [Solar Power for Your Home](https://consumer.ftc.gov/articles/solar-power-your-home) | 2026-11-20 |
| Food and drink | `allergen-free-claims` | Never say a dish, drink or baked good is free of a major allergen unless you checked its ingredients, your suppliers and the chance of cross-contact in your kitchen. | United States | [Food Allergies](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies) | 2026-11-20 |
| Food and drink | `gluten-free-definition` | Call a dish gluten-free only when it meets the FDA's gluten-free definition. | United States (FDA-regulated packaged foods; the FDA recommends restaurant menus follow it) | [Questions and Answers on the Gluten-Free Food Labeling Final Rule](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/questions-and-answers-gluten-free-food-labeling-final-rule) | 2026-11-20 |
| Food and drink | `tobacco-21` | Leave tobacco and vapes out of your shorts (ViewGum's convenience store page's practice). | United States | [Tobacco 21](https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21) | 2026-11-20 |
| Food and drink | `tiktok-regulated-goods` | Before a TikTok post shows or promotes alcohol, tobacco, vapes or lottery, check TikTok's rules for that item and whether your account is approved, post by post. ViewGum's convenience store page advises leaving them out. | TikTok | [Community Guidelines: Policies & engagement](https://www.tiktok.com/safety/en/policies-and-engagement/overview?cgversion=2026H2update) | 2026-11-20 |
| Health and wellness | `health-claims-evidence` | Explain how the body works in general, and promise no cure, relief, recovery time, weight loss, body change or result by a date. | United States | [Health Products Compliance Guidance](https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance) | 2026-11-20 |
| Health and wellness | `patient-authorization` | If your practice is a HIPAA covered entity, keep real patients, and anything that identifies them, out of your shorts unless you have a valid authorization signed by the patient or their personal representative. | United States (HIPAA covered entities) | [45 CFR 164.508, Uses and disclosures for which an authorization is required](https://www.law.cornell.edu/cfr/text/45/164.508) | 2026-11-20 |
| Money and insurance | `circular-230-claims` | Promise no refund, debt relief or outcome with the IRS. | United States (practitioners before the IRS) | [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30) | 2026-11-20 |
| Money and insurance | `circular-230-certified` | If you are an enrolled agent, enrolled retirement plan agent or registered tax return preparer, describe the designation without the word certified, and never imply you work for the IRS. | United States (enrolled agents, enrolled retirement plan agents and registered tax return preparers) | [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30) | 2026-11-20 |
| Money and insurance | `preparer-client-information` | Never use a real client's return, numbers or story; use a made-up example and say it is one. | United States (people who prepare federal income tax returns, or are in the business of providing services connected with preparing them) | [26 U.S. Code 7216, Disclosure or use of information by preparers of returns](https://www.law.cornell.edu/uscode/text/26/7216) | 2026-11-20 |
| Money and insurance | `adviser-marketing-rule` | A registered investment adviser reads the SEC marketing rule before a short quotes a client or shows performance. | United States (SEC-registered investment advisers) | [Investment Adviser Marketing](https://www.sec.gov/rules-regulations/2020/12/investment-adviser-marketing) | 2026-11-20 |
| Money and insurance | `finra-fair-and-balanced` | If you are with a FINRA member firm, promise no return, and give risks alongside any benefit. | United States (FINRA member firms) | [Rule 2210, Communications with the Public](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210) | 2026-11-20 |
| Money and insurance | `insurance-no-promises` | Never promise a premium, a saving or a payout in a short (ViewGum's insurance agent page's practice), and describe coverage only as the policy itself does. | United States (state insurance law, as each state enacts it) | [Unfair Trade Practices Act, Model 880](https://content.naic.org/sites/default/files/model-law-880.pdf) | 2026-11-20 |
| Money and insurance | `credit-ad-terms` | Leave rates and payment terms out of a short, or include every disclosure Regulation Z requires. ViewGum's mortgage broker page's practice is to name no numbers. | United States (closed-end consumer credit) | [12 CFR 1026.24, Advertising (Regulation Z)](https://www.law.cornell.edu/cfr/text/12/1026.24) | 2026-11-20 |
| Real estate | `fair-housing-ads` | Describe the home and the place, never who it suits or who should live there. | United States | [24 CFR 100.75, Discriminatory advertisements, statements and notices](https://www.law.cornell.edu/cfr/text/24/100.75) | 2026-11-20 |
| Real estate | `realtor-true-picture` | Show homes, results and services as they are, and promise no sale price, sale time or offer you cannot back up. | Members of the National Association of REALTORS | [2026 Code of Ethics and Standards of Practice](https://www.nar.realtor/about-nar/governing-documents/code-of-ethics/2026-code-of-ethics-standards-of-practice) | 2026-11-20 |
| Legal | `lawyer-ads-not-misleading` | Promise no result, and read your own state's lawyer advertising rules before you post. | California (each state has its own lawyer advertising rules) | [Chapter 7. Information About Legal Services (Rule 7.1)](https://www.calbar.ca.gov/legal-professionals/rules/rules-professional-conduct/current-rules-professional-conduct/chapter-7-information-about-legal-services) | 2026-11-20 |
| Shops | `lilies-and-cats` | Never call an arrangement with lilies safe for a home with cats. | United States | [Lovely Lilies and Curious Cats: A Dangerous Combination](https://www.fda.gov/animal-veterinary/animal-health-literacy/lovely-lilies-and-curious-cats-dangerous-combination) | 2026-11-20 |
| Auto | `warranty-third-party-parts` | State the general rule, and point to the warranty itself. | United States | [FTC says companies' warranty restrictions were illegal](https://consumer.ftc.gov/consumer-alerts/2022/07/ftc-says-companies-warranty-restrictions-were-illegal) | 2026-11-20 |
| Beauty | `hair-dye-patch-test` | A short about hair color never skips or plays down the patch test. | United States | [Hair Dyes](https://www.fda.gov/cosmetics/cosmetic-products/hair-dyes) | 2026-11-20 |
| Beauty | `cosmetic-or-drug-claims` | Never say a cosmetic product, or a salon service that uses one, grows hair or treats a condition. | United States | [Is It a Cosmetic, a Drug, or Both? (Or Is It Soap?)](https://www.fda.gov/cosmetics/cosmetics-laws-regulations/it-cosmetic-drug-or-both-or-it-soap) | 2026-11-20 |
| Learning and care | `safe-sleep-scenes` | Any nap scene shows a baby on their back with nothing but a fitted sheet. | United States | [Safe Sleep: Cribs and Infant Products](https://www.cpsc.gov/SafeSleep) | 2026-11-20 |
| Events and stays | `total-price-tickets-and-stays` | When a short gives a ticket or room price, give the total price with every mandatory fee, more prominently than other price details (if you show a final amount of payment, make it at least as prominent as the total); in a video with sound, show it and say it at the same time. | United States (live-event tickets and short-term lodging) | [16 CFR Part 464, Rule on Unfair or Deceptive Fees (live-event tickets and short-term lodging)](https://www.law.cornell.edu/cfr/text/16/part-464) | 2026-11-20 |
| Business services | `security-claims` | Never call a setup unhackable or breach-proof; show what a safeguard does. | United States | [15 U.S. Code 45, Unfair methods of competition unlawful; prevention by Commission (FTC Act, section 5)](https://www.law.cornell.edu/uscode/text/15/45) | 2026-11-20 |
| Pets | `no-diagnosis-in-shorts` | Explain in general, and never diagnose a viewer's pet or prescribe or dose a treatment in a short (ViewGum's veterinarian page's practice). | United States (federal rules on extralabel drug use) | [21 CFR 530.3, Definitions (the veterinarian-client-patient relationship)](https://www.law.cornell.edu/cfr/text/21/530.3) | 2026-11-20 |

## Citing

Please cite as: ViewGum, Business Video Skills, ad and claim rules (2026-11-20), CC BY 4.0, at
https://github.com/viewgum/business-video-skills

Cite each rule's own source for the law itself.
