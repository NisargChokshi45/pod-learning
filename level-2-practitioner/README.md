# Level 2 — Practitioner

**Source:** `02_Practitioner_Claude_Certification.pdf` (Claude AI Certification Program, syllabus 2 of 4).
**Scope:** 20 modules, 35 hours, plus one role track (D9). **10 CORE** modules (14 hours) are mandatory for
everyone. **10 ELECTIVES** (21 hours) are gated by cluster.
**Pass outcome:** you rely on Claude unsupervised for your own real work, and you catch its failure modes
in your domain without being told to look.

> **What "Practitioner" means:** at Foundational, your output was reviewed. At Practitioner, *you* are the
> reviewer. Every module here has a verification habit built in. M8.2 (verification) and M8.3
> (accountability) can't be exempted.

## Study path (teaching order)

Files are numbered by **teaching order**, not module id. **M8.2 is sixth on purpose.** Its prerequisite is
"any two D3 modules", so it follows M3.2 and M3.4. It comes before M3.5 (data), M3.3 (Projects) and every
elective, because "recompute it, check the quote, name the owner" is the habit every later module assumes.
M8.3 closes the CORE block, so accountability is in place before agentic coding and automation.

### CORE: everyone (14 h)

| # | Module | Hrs | Notes | Quiz |
|---|---|---|---|---|
| 1 | M1.3 Interaction patterns, settings and personalisation | 1 | [notes](notes/01-M1.3-interaction-settings-personalisation.md) | [#m1-3](assessments/quiz.html#m1-3) |
| 2 | M2.2 Reasoning guidance and advanced prompting | 1.5 | [notes](notes/02-M2.2-reasoning-advanced-prompting.md) | [#m2-2](assessments/quiz.html#m2-2) |
| 3 | M2.3 Context engineering and instruction hierarchy | 1.5 | [notes](notes/03-M2.3-context-engineering-instruction-hierarchy.md) | [#m2-3](assessments/quiz.html#m2-3) |
| 4 | M3.2 Documents, files, images and Artifacts | 1.5 | [notes](notes/04-M3.2-documents-files-images-artifacts.md) | [#m3-2](assessments/quiz.html#m3-2) |
| 5 | M3.4 Research and decision support | 1.5 | [notes](notes/05-M3.4-research-decision-support.md) | [#m3-4](assessments/quiz.html#m3-4) |
| 6 | **M8.2 Verification: hallucination detection, output validation, code verification** · no exemptions | 1.5 | [notes](notes/06-M8.2-verification.md) | [#m8-2](assessments/quiz.html#m8-2) |
| 7 | M3.5 Spreadsheet and data analysis | 1.5 | [notes](notes/07-M3.5-spreadsheet-data-analysis.md) | [#m3-5](assessments/quiz.html#m3-5) |
| 8 | M3.3 Meetings, requirements and knowledge management with Projects | 1.5 | [notes](notes/08-M3.3-projects-meetings-knowledge.md) | [#m3-3](assessments/quiz.html#m3-3) |
| 9 | M4.2 Skills and reusable workflows | 1.5 | [notes](notes/09-M4.2-skills-reusable-workflows.md) | [#m4-2](assessments/quiz.html#m4-2) |
| 10 | **M8.3 Intellectual property, licensing, policy and accountability** · no exemptions | 1 | [notes](notes/10-M8.3-ip-licensing-policy-accountability.md) | [#m8-3](assessments/quiz.html#m8-3) |

### ELECTIVES: by cluster (21 h)

| # | Module | Audience (clusters) | Hrs | Notes | Quiz |
|---|---|---|---|---|---|
| 11 | M3.6 Design, prototyping and handoff with Claude Design | G; A (frontend, mobile); F | 1.5 | [notes](notes/11-M3.6-claude-design-prototyping-handoff.md) | [#m3-6](assessments/quiz.html#m3-6) |
| 12 | M5.1 From requirements to design | A, B, C, D, E; G (BA) | 2 | [notes](notes/12-M5.1-requirements-to-design.md) | [#m5-1](assessments/quiz.html#m5-1) |
| 13 | M5.2 Code generation, explanation and conversion | A, B, C, D; E (arch) | 2 | [notes](notes/13-M5.2-code-generation-explanation-conversion.md) | [#m5-2](assessments/quiz.html#m5-2) |
| 14 | M5.3 Debugging, refactoring and optimisation | A, C, D; E (arch) | 2 | [notes](notes/14-M5.3-debugging-refactoring-optimisation.md) | [#m5-3](assessments/quiz.html#m5-3) |
| 15 | M5.5 Testing with Claude | A, B, D | 2 | [notes](notes/15-M5.5-testing-with-claude.md) | [#m5-5](assessments/quiz.html#m5-5) |
| 16 | M6.2 The agentic coding workflow | A, B, C, D, E | 2 | [notes](notes/16-M6.2-agentic-coding-workflow.md) | [#m6-2](assessments/quiz.html#m6-2) |
| 17 | M6.3 Multi-file changes, worktrees, testing, debugging and Git | A, C, D | 2 | [notes](notes/17-M6.3-multi-file-worktrees-git.md) | [#m6-3](assessments/quiz.html#m6-3) |
| 18 | M6.8 What Claude writes down in the repo | A, C, D, E | 1.5 | [notes](notes/18-M6.8-repo-artefacts.md) | [#m6-8](assessments/quiz.html#m6-8) |
| 19 | M7.1 Claude API fundamentals | C, D; E (arch) | 3 | [notes](notes/19-M7.1-api-fundamentals.md) | [#m7-1](assessments/quiz.html#m7-1) |
| 20 | M7.2 Tool use, structured outputs and server-side tools | D | 3 | [notes](notes/20-M7.2-tool-use-structured-outputs.md) | [#m7-2](assessments/quiz.html#m7-2) |

Suggested elective order for engineers: M5.1 → M5.2 → M5.3 → M5.5 → M6.2 → M6.3 → M6.8 → M7.1 → M7.2.
This order follows the prerequisites. M6.2 needs M6.1 from Level 1. M7.2 needs M7.1.

## Assessment (mirrors the real level assessment)

The syllabus defines four parts. This pack has a practice version of each one, plus a knowledge quiz underneath them.

| Real assessment | Practice here | Pass line |
|---|---|---|
| Prompt-and-output review against a rubric | [prompt-output-review.md](assessments/prompt-output-review.md): review three prompt+output pairs | 32/40, with no zero on any verification criterion |
| 90-minute practical lab | [practical-lab.md](assessments/practical-lab.md), "Vendor Switch" | 75/100, with no zero on verification or data handling |
| Graded deliverable with a verification note | [graded-deliverable.md](assessments/graded-deliverable.md): brief, note template and rubric | 16/20, and the verification note is complete |
| Verification drill at **80%** (up from 70%) | [verification-drill.md](assessments/verification-drill.md) | 16/20 |
| *(knowledge check)* | [Mock exam](assessments/quiz.html#mock): 25 CORE items + four 5-item elective blocks | 20/25 · 4/5 per block |

Per-module checks have 10 items each (8 core, 2 stretch). Use **Practice** mode while learning and **Exam**
mode before the mock. Take only the elective blocks for the electives your cluster takes. The full key, with
a reason for every option, is in [answer-key.md](assessments/answer-key.md).

## Live quiz

There are two ways to open it:
- **Published (private) page:** https://claude.ai/artifact/CwauW3j6dCLUZLFozo77hn. Share it from the page's
  Share menu. CLAUDE.md §8 has the republish procedure.
- **Offline:** open `assessments/quiz.html` in a browser. It loads `quiz-bank.js` from the same folder.

## Keep current

The syllabus says "Verified November 2026". Several of its claims changed within weeks.
[reference/fact-status.md](reference/fact-status.md) records each volatile claim three ways: what the
syllabus says, what is current, and the source. **For the exam, learn the syllabus version. At work, use the current one.**
Re-verify before each cohort.

## Undefined or forward references in the source

The syllabus refers to these but doesn't define them here. Settle them for your organisation before you deliver:

- **Clusters A–G.** Every elective is "gated by cluster", but this syllabus never defines the cluster table.
  It's **undefined in source**. From the audience notes you can infer that A includes frontend and mobile
  developers, E includes architects and G includes business analysts and designers. Treat that as inference,
  not definition.
- **Forward prerequisites.** M4.2 lists "M2.4 concepts", M7.1 lists M2.4, M5.5 lists "M5.4 concepts" and M6.3
  lists M5.4. **M2.4 and M5.4 are Advanced-level modules.** The notes give the minimum concepts you need
  inline and mark each one.
- **M6.4, M6.5, M7.3, M4.3 and M8.4/M8.5** are pointed to as "the full treatment" in several modules. They're Advanced
  (Level 3) modules and are only previewed here.
- **D9 role tracks** (M9.1–M9.10). Each is "one per employee, after CORE and cluster electives", and each ends in a
  capstone. The syllabus lists them but holds their material elsewhere ("role-track material itself").
  This pack covers the tracks only as the capstone list in the syllabus. The [graded deliverable](assessments/graded-deliverable.md)
  is a good rehearsal for any of them.
- **Your organisation's own artefacts:** approved licence list (M8.3), approved plugin list (M4.2), AI
  policy and disclosure rules (M8.3), and design-system owner (M3.6).

## Where this leads (Advanced)

| Finished | Next, at Advanced |
|---|---|
| M2.2, M2.3 | M2.4 prompt templates and evaluation (CORE, nobody skips it) |
| M3.2–M3.6, M4.2 | M4.3 no-code automation |
| M5.1, M5.2, M5.3, M5.5 | M5.4 review and secure coding · M5.6 data and system design · M5.7 LLM security |
| M6.2, M6.3, M6.8 | M6.4 the .claude folder and hooks · M6.5 MCP and plugins · M6.6 automation at scale |
| M7.1, M7.2 | M7.3 MCP server development · M7.4 the Agent SDK |
| M8.2, M8.3 | M8.5 AI regulation and client compliance |
