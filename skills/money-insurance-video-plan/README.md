# Marketing video ideas for accountants, tax preparers, financial advisors and insurance agents

Short video ideas for accountants, bookkeepers, tax preparers, financial planners, insurance agents and mortgage brokers, with a 30-day plan to post them. People put off money questions until a form or a letter forces them. A short can make one form, one word or one choice plain, as general information and never advice.

This folder is a free agent skill for Claude, ChatGPT, Gemini and other assistants. It is part of
[viewgum/business-video-skills](../../README.md), under CC BY 4.0.

## What you get

- 15 short video ideas for your business, each with a hook, what it shows, how to make it and the facts to confirm
- A 30-day posting calendar with a caption starter for each posting day
- A check of every line against 11 sourced ad and claim rules
  (7 for this group from Legal Information Institute, U.S. Securities and Exchange Commission, FINRA, NAIC, and 4 for every business)

A full example, made by running this skill for a made-up business, is in
[examples/money.md](../../examples/money.md).

## Use it

In Claude Code:

```sh
claude plugin marketplace add viewgum/business-video-skills
claude plugin install business-video-skills@viewgum-business
```

Then ask, for example: "Plan a month of short videos for a one-office tax preparation business run by an enrolled agent, which wants more returns booked before the busy weeks." The skill also runs as
`/business-video-skills:money-insurance-video-plan`.

In Codex, Gemini CLI, Cursor and other agents that read skills:

```sh
npx skills add viewgum/business-video-skills --skill money-insurance-video-plan
```

In a chat assistant: paste [SKILL.md](SKILL.md) and the two files in [rules/](rules/), then a few lines about your business. A
chat assistant cannot run the checker, so it checks the lines by reading the rules.

To check a script or a caption you already have (Node 18 or newer, nothing to install), from this folder:

```sh
node check.mjs my-script.txt
```

## Kinds of videos that suit money and insurance businesses

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

## The rules it checks

| Practice | What the source says | Applies in | Source | Read |
|---|---|---|---|---|
| Promise no refund, debt relief or outcome with the IRS. | Treasury Circular 230 (31 CFR 10.30) says a practitioner may not, with respect to any IRS matter, use any public communication or private solicitation containing a false, fraudulent or coercive statement or claim, or a misleading or deceptive statement or claim. | United States (practitioners before the IRS) | [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30) | 2026-11-20 |
| If you are an enrolled agent, enrolled retirement plan agent or registered tax return preparer, describe the designation without the word certified, and never imply you work for the IRS. | Circular 230 (31 CFR 10.30) says enrolled agents, enrolled retirement plan agents and registered tax return preparers, in describing their professional designation, may not use the term certified or imply an employer and employee relationship with the IRS. | United States (enrolled agents, enrolled retirement plan agents and registered tax return preparers) | [31 CFR 10.30, Solicitation (Treasury Circular 230)](https://www.law.cornell.edu/cfr/text/31/10.30) | 2026-11-20 |
| Never use a real client's return, numbers or story; use a made-up example and say it is one. | Federal law (26 U.S.C. 7216) makes it a misdemeanor for a person in the business of preparing, or providing services in connection with preparing, federal income tax returns, or who prepares them for pay, to knowingly or recklessly disclose information furnished for, or in connection with, preparing such a return, or use it for any purpose other than preparing or assisting in preparing such a return, subject to the exceptions in the law. | United States (people who prepare federal income tax returns, or are in the business of providing services connected with preparing them) | [26 U.S. Code 7216, Disclosure or use of information by preparers of returns](https://www.law.cornell.edu/uscode/text/26/7216) | 2026-11-20 |
| A registered investment adviser reads the SEC marketing rule before a short quotes a client or shows performance. | The SEC's investment adviser marketing rule, issued December 22, 2020, is a merged rule that replaced the earlier advertising and cash solicitation rules for registered investment advisers. | United States (SEC-registered investment advisers) | [Investment Adviser Marketing](https://www.sec.gov/rules-regulations/2020/12/investment-adviser-marketing) | 2026-11-20 |
| If you are with a FINRA member firm, promise no return, and give risks alongside any benefit. | FINRA Rule 2210 says a member's communications with the public must be fair and balanced, and that no member may make any false, exaggerated, unwarranted, promissory or misleading statement or claim in any communication. | United States (FINRA member firms) | [Rule 2210, Communications with the Public](https://www.finra.org/rules-guidance/rulebooks/finra-rules/2210) | 2026-11-20 |
| Never promise a premium, a saving or a payout in a short (ViewGum's insurance agent page's practice), and describe coverage only as the policy itself does. | The NAIC's Unfair Trade Practices Act (Model 880), a model for state insurance laws, defines as unfair trade practices statements that misrepresent the benefits, advantages, conditions or terms of a policy, and untrue, deceptive or misleading insurance advertising, internet advertisements and postings included, when committed flagrantly and in conscious disregard of the Act or rules made under it, or often enough to indicate a general business practice. | United States (state insurance law, as each state enacts it) | [Unfair Trade Practices Act, Model 880](https://content.naic.org/sites/default/files/model-law-880.pdf) | 2026-11-20 |
| Leave rates and payment terms out of a short, or include every disclosure Regulation Z requires. ViewGum's mortgage broker page's practice is to name no numbers. | Under Regulation Z (12 CFR 1026.24), an ad for closed-end credit that states a rate of finance charge must state it as an annual percentage rate, using that term, and say if it may increase after consummation; and an ad that states the amount or percentage of a down payment (in a credit sale), the number of payments or period of repayment, the amount of a payment, or the amount of a finance charge must also state, as applicable, the down payment, the terms of repayment over the full term including any balloon payment, and the annual percentage rate, with whether it may increase after consummation. | United States (closed-end consumer credit) | [12 CFR 1026.24, Advertising (Regulation Z)](https://www.law.cornell.edu/cfr/text/12/1026.24) | 2026-11-20 |

Plus the rules every business meets: paid or gifted posts, material connections, fake reviews and copyright
([every-business.yaml](rules/every-business.yaml)). The full dataset, with explanations, is in [rules/](../../rules/README.md).

This is general information, not legal advice. Most rules here are United States rules; each says where it applies. Your state
or country may add more.

If you'd rather not film or edit these yourself, ViewGum can turn ideas like these into finished vertical videos: https://viewgum.com
