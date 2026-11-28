# Level 2 Prompt-and-Output Review

**Time:** 40 minutes · **Mirrors:** "prompt-and-output review against a rubric" in the Level 2 assessment.
**Pass line:** **32/40**, *and* at least **2 on criterion R4 (verification)** for every pair, which means every
high-risk (✱) defect in that pair was found. Missing a ✱ defect caps R4 at 1 for that pair and fails the review.

> **What you're being tested on.** At Practitioner level you judge Claude's work, not just produce it. For
> each pair below, score the **prompt** and the **output** against the rubric. Name every defect with a
> line reference. Then write the one-paragraph **improved prompt** you'd actually send. You may use your
> notes. Don't ask Claude to grade the pairs for you.

## The rubric (applies to every pair)

| # | Criterion | 0 | 1 | 2 | 3 |
|---|---|---|---|---|---|
| R1 | **Technique fits the task** (M2.2) | Wrong technique for the task's complexity | Works, but over- or under-engineered | Fits, with minor gaps | Decomposition, effort and chaining all match the task |
| R2 | **Context and grounding** (M2.3) | Ungrounded: the material is missing or buried | Material present, but no grounding instruction | Grounded, but quotes or sources are never checked | Material first, question last, quote-backed, priorities stated |
| R3 | **Output fitness** (M3.x) | Wrong form for the reader | Right form, wrong level of detail | Usable after edits | Ready to send, in the right container |
| R4 | **Verification** (M8.2): *you* find the defects | No defects found | Some found, the high-risk ones missed | Most found, including the high-risk ones | All found, with a proportional fix plan |

Each pair scores 12 for R1–R4, plus **1 point for an improved prompt that fixes the root cause**. Pair 3 adds 2
points for the policy call. Total = 13 + 13 + 14 = **40**.

---

## Pair 1 — RFP section (business and technical)

**Prompt (as sent, one message, no files attached):**

> ¹You are an expert bid writer. ²Write our response to section 4.2 of the Contoso RFP (security and
> compliance) and make it compelling. ³We are ISO 27001 certified and SOC 2 compliant. ⁴Also add an
> estimate of the implementation effort and a risk section. ⁵Keep it short but cover everything in detail.

**Output (excerpt):**

> **4.2 Security and Compliance.** ⁶Our platform is ISO 27001:2022 certified, SOC 2 Type II attested and
> fully GDPR and HIPAA compliant. ⁷All data is encrypted with AES-256 at rest and TLS 1.3 in transit, and
> we have maintained 99.99% availability for the past five years. ⁸Implementation takes 6–8 weeks for an
> organisation of Contoso's size. ⁹Risks are minimal given our mature processes…

## Pair 2 — Support-ticket analysis (data)

**Prompt:** *(CSV of 4,812 tickets attached)*

> ¹¹What's our average resolution time by priority, and is P1 getting worse? ¹²Give me a chart for the
> ops review.

**Output (excerpt):**

> ¹³Looking at the data, average resolution times are roughly: P1 ≈ 3.1 h, P2 ≈ 9 h, P3 ≈ 26 h. ¹⁴P1 is
> clearly getting worse, up about 40% this quarter. ¹⁵[Bar chart: y-axis starts at 2.5 h; Q3 bar visibly
> double the height of Q2.] ¹⁶Note: some tickets had no resolution timestamp; I excluded them.

## Pair 3 — Refactor plan in Claude Code (technical clusters; non-technical clusters take the variant in the trainer key)

**Prompt (typed in Claude Code, default mode, on a client repository):**

> ¹⁷Refactor the billing module to use the new PaymentGateway interface. Make all the changes and
> push to main when tests pass. Use whatever libraries you need.

**Output (excerpt of the session summary):**

> ¹⁸Done! I refactored 14 files, added `stripe-unofficial-sdk@0.4.1` (GPL-3.0) for the gateway adapter,
> updated the tests and pushed to main. ¹⁹All tests pass. ²⁰I also deleted `legacy/invoice_v1/` since it
> looked unused.

---

## Answer sheet (fill in per pair)

| Pair | R1 | R2 | R3 | R4 | Improved prompt (1 pt) | Policy (pair 3 only, 2 pts) | Total |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | — | /13 |
| 2 | | | | | | — | /13 |
| 3 | | | | | | | /14 |

---

## Trainer key — don't distribute

**Scoring R4 from the defect lists below:** 0 = none found · 1 = some found, or any ✱ missed · 2 = the
threshold stated for the pair, with every ✱ found · 3 = every defect found, plus a proportional fix plan.

**Pair 1. Defects to find (R4 needs ≥4 of 6, including both ✱):**
1. ✱ ¶6 **invented claims**: "Type II", "ISO 27001:2022", "GDPR and HIPAA compliant". The prompt says only
   "SOC 2 compliant" and "ISO 27001". The output upgrades both and adds two regimes from nowhere.
2. ✱ ¶7 **invented specifics**: AES-256, TLS 1.3 and the 99.99% five-year figure all have no source.
3. ¶8 **estimate without a basis or an owner**: no assumptions, and no named human (M5.1, M8.3).
4. ¶9 **sycophantic or over-confident risk section** (M2.2 failure mode).
5. ¶5 **conflicting constraints with no priority** ("short" versus "in detail").
6. ¶2–4 **three tasks in one prompt** (response, estimate, risks) with no decomposition, and no RFP text attached.
**Improved prompt:** attach the RFP section and the certificate scope statements. Chain the work:
requirements → response → estimate. State "only claims supported by the attached evidence; mark gaps
as [NEEDS EVIDENCE]", set a word limit for each subsection, and log assumptions.

**Pair 2. Defects to find (R4 needs ≥3 of 5, including ✱):**
1. ✱ ¶13 **estimated in prose ("roughly", "≈")**, not computed with code. Nothing can be recomputed (M3.5).
2. ✱ ¶14 **"up about 40%"** has no stated baseline and no definition of "this quarter". Check it by recomputing.
3. ¶15 **dishonest chart**: the truncated y-axis exaggerates the change (M3.5 chart honesty).
4. ¶16 **silent exclusion**: how many tickets were dropped, and does it bias P1? This should be a data-quality caveat with a count.
5. ¶11 **no profiling first**: types, missing values and outliers were never examined.
**Improved prompt:** "Profile the CSV first (columns, types, missing values, outliers). Then compute with code
the mean *and median* resolution time by priority, by quarter. Show the code. State exclusions with counts.
Make a bar chart with a zero baseline and units in the axis title."

**Pair 3. Defects to find (R4 needs ≥4 of 6, including all ✱):**
1. ✱ ¶17 **push to main with no review**: a production change without human review (M8.3, M6.3 hard rules).
2. ✱ ¶18 **GPL-3.0 dependency** in client code: copyleft risk against the approved licence list (M8.3). Also an
   unofficial, pre-1.0 package (supply-chain risk).
3. ✱ ¶20 **destructive deletion without approval**. Also "looked unused" is an inference, not evidence.
4. ¶19 **"All tests pass" is unverified**: review what the agent actually changed and ran, not what it
   reported (M8.3 §6). Check whether the tests were modified to pass.
5. ¶17 **no plan step**, on a 14-file change (M6.2 loop).
6. ¶17 "Use whatever libraries you need" is an **unbounded scope** instruction.
**Policy (2 pts):** names a human approval point before merge, and before any new dependency or deletion. Notes
the client-contract check on AI tools and disclosure.
**Improved prompt:** "In plan mode: explore the billing module and propose a plan to adopt PaymentGateway.
Only approved-licence dependencies, and ask before adding any. Don't delete files. Work on a branch, commit
in steps, and open a PR. Don't push to main."

**Non-technical variant of pair 3:** Claude was asked to "send the renewal notices to all customers in the
sheet". It reports "Sent 1,204 emails, and removed 37 duplicate customers from the CRM". The same defects apply:
no approval point, a destructive action, and an unverified report.
