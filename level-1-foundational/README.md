# Level 1 — Foundational

**Source:** `01_Foundational_Claude_Certification.pdf` (Claude AI Certification Program, syllabus 1 of 4).
**Scope:** 7 modules, 7.5 hours. Six are CORE and mandatory. M6.1 (Claude Code) is an elective for technical clusters.
**Pass outcome:** you can use Claude safely and competently for routine work, unsupervised on the basics.

> **What "Foundational" means:** you do the work on routine tasks, following a process someone else set,
> and your output is reviewed. You aren't yet expected to design how others work, or to handle novel cases alone.

## Study path (teaching order)

| # | Module | Status | Hrs | Notes | Quiz |
|---|---|---|---|---|---|
| 1 | M1.1 The Claude ecosystem: surfaces, plans, where work happens | CORE | 1 | [notes](notes/01-M1.1-claude-ecosystem.md) | [#m1-1](assessments/quiz.html#m1-1) |
| 2 | **M8.1 Data privacy, confidentiality, secure prompting** | CORE · no exemptions | 1 | [notes](notes/02-M8.1-data-privacy-secure-prompting.md) | [#m8-1](assessments/quiz.html#m8-1) |
| 3 | M1.2 Models, context windows, tokens and limits | CORE | 1 | [notes](notes/03-M1.2-models-context-tokens-limits.md) | [#m1-2](assessments/quiz.html#m1-2) |
| 4 | M2.1 Prompting fundamentals | CORE | 1.5 | [notes](notes/04-M2.1-prompting-fundamentals.md) | [#m2-1](assessments/quiz.html#m2-1) |
| 5 | M3.1 Communication and writing | CORE | 1.5 | [notes](notes/05-M3.1-communication-writing.md) | [#m3-1](assessments/quiz.html#m3-1) |
| 6 | M4.1 Connectors, integrations and MCP | CORE | 1 | [notes](notes/06-M4.1-connectors-integrations-mcp.md) | [#m4-1](assessments/quiz.html#m4-1) |
| 7 | M6.1 Getting started with Claude Code | ELECTIVE (technical) | 1.5 | [notes](notes/07-M6.1-getting-started-claude-code.md) | [#m6-1](assessments/quiz.html#m6-1) |

M8.1 comes second on purpose. People paste real work into Claude on day one, so the data rules have to
land before the capability does.

## Assessment (mirrors the real level assessment)

| Real assessment | Practice here | Pass line |
|---|---|---|
| 25-item scenario quiz | [Mock exam](assessments/quiz.html#mock) (25 core) + [elective block](assessments/quiz.html#mock-elective) (5 × M6.1) | 20/25 · 4/5 |
| 60-minute practical lab | [practical-lab.md](assessments/practical-lab.md), "Incident Week" | 70/100, with no zero on data handling |
| Verification drill: find ≥70% of seeded errors | [verification-drill.md](assessments/verification-drill.md) | 11/15 |

Per-module checks have 10 items each (8 core, 2 stretch). Use **Practice** mode while learning and
**Exam** mode before the mock. The full key with reasons for every option is in
[answer-key.md](assessments/answer-key.md).

## Live quiz

There are two ways to open the quiz:
- **Published (private) page:** https://claude.ai/artifact/KcVBhGjJVcnpYHudRhKvid. Share it from the page's
  Share menu.
- **Offline:** open `assessments/quiz.html` in a browser.

After you edit the bank, follow CLAUDE.md §8 to rebuild and republish.

## Keep current

The syllabus was verified in November 2026, and products move. [reference/fact-status.md](reference/fact-status.md)
lists every volatile claim with three things: what the syllabus says, what's current, and the source.
**Learn the syllabus version for the exam, and use the current one at work.** Re-verify before each cohort.

## Undefined in the source

The syllabus mentions these without defining them. Fill them in for your organisation before delivery:
- **"D1 complete"**, the prerequisite for M2.1 and M6.1.
- **The cluster table in the master index**, and the cluster letters **A–E**.
- The **trainer notes**: your org's seat types and who holds them (M1.1), your Claude Code auth route
  (M6.1), and your contract terms (M8.1).

## What comes next (Practitioner)

| Finished | Next |
|---|---|
| M1.1, M1.2 | M1.3 settings, memory and personalisation |
| M2.1 | M2.2 reasoning guidance · M2.3 context engineering |
| M3.1 | M3.2 files & Artifacts · M3.3 Projects · M3.4 research · M3.5 data · M3.6 design |
| M4.1 | M4.2 Skills and reusable workflows |
| M8.1 | M8.2 verification · M8.3 IP, policy and accountability |
| M6.1 | M6.2 the agentic loop · M6.3 multi-file work and Git · M6.8 repo artefacts |
