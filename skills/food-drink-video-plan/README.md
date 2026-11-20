# TikTok and Reels ideas for restaurants, cafes, bakeries and food trucks

Short video ideas for restaurants, cafes, bakeries, food trucks, pizzerias, caterers and bars, with a 30-day plan to post them. Guests order the same dishes every day without seeing how they come together. A short can show how the kitchen makes one thing.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 8 sourced ad and claim rules
  (4 for this group from U.S. Food and Drug Administration, TikTok, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/food.md](../../examples/food.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a small bakery in a college town that sells sourdough, bagels and coffee, and wants more weekend preorders." The skill also runs as
`/business-video-skills:food-drink-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill food-drink-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit food and drink businesses

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

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Never say a dish, drink or baked good is free of a major allergen unless you checked its ingredients, your suppliers and the chance of cross-contact in your kitchen. | The FDA names nine major food allergens: milk, eggs, fish, crustacean shellfish, tree nuts, peanuts, wheat, soybeans and sesame. | United States | [Food Allergies](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies) | 2026-11-20 |
| Call a dish gluten-free only when it meets the FDA's gluten-free definition. | Under the FDA's gluten-free labeling rule (21 CFR 101.91), a food labeled gluten-free is inherently gluten free, or contains no ingredient that is a gluten-containing grain, no ingredient made from one that was not processed to remove gluten, and no processed ingredient that brings the food to 20 parts per million of gluten or more; any unavoidable gluten must be less than 20 parts per million. | United States (FDA-regulated packaged foods; the FDA recommends restaurant menus follow it) | [Questions and Answers on the Gluten-Free Food Labeling Final Rule](https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/questions-and-answers-gluten-free-food-labeling-final-rule) | 2026-11-20 |
| Leave tobacco and vapes out of your shorts (ViewGum's convenience store page's practice). | The FDA says it is illegal for a retailer to sell any tobacco product, e-cigarettes included, to anyone under 21, and that the federal minimum age of sale applies to all retail establishments and persons with no exceptions. | United States | [Tobacco 21](https://www.fda.gov/tobacco-products/retail-sales-tobacco-products/tobacco-21) | 2026-11-20 |
| Before a TikTok post shows or promotes alcohol, tobacco, vapes or lottery, check TikTok's rules for that item and whether your account is approved, post by post. ViewGum's convenience store page advises leaving them out. | TikTok's Community Guidelines say it doesn't allow trade, marketing or providing access to regulated, prohibited or high-risk goods and services, and that verified business accounts and verified TikTok Shop sellers may be allowed to sell or market some regulated items if they meet strict requirements. | TikTok | [Community Guidelines: Policies & engagement](https://www.tiktok.com/safety/en/policies-and-engagement/overview?cgversion=2026H2update) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
