# pod-learning — Claude Certification Study Material

This repo turns the internal **Claude AI Certification Program** syllabi (PDFs in the repo root) into
study packs for **technical teams**: structured notes, scenario quizzes, a mock exam, a verification
drill, and a practical lab. Every future session that adds or edits content MUST follow this file.

Source syllabi: `01_Foundational_Claude_Certification.pdf` (Level 1 of 4) → `level-1-foundational/`;
`02_Practitioner_Claude_Certification.pdf` (Level 2 of 4) → `level-2-practitioner/`. Levels 3–4 (Advanced,
Expert) will follow the same structure under `level-N-<name>/`.

---

## 1. Audience and voice

- **Reader:** software engineers, data/ML engineers, SREs, tech leads, solution architects. Assume they
  know HTTP, JSON, Git, CI, and basic security. Do not assume prior LLM knowledge beyond "chat with a bot".
- **Voice:** a Principal AI Engineer / Forward Deployed Engineer briefing peers. Direct, precise, no hype.
  Second person ("you") is fine. No marketing adjectives ("powerful", "seamless", "revolutionary").
- **Depth rule — "engineer depth, no bloat":** every syllabus bullet is covered, then explained one level
  down (the mechanism: *why* it behaves that way). Stop there. If a paragraph does not change what an
  engineer would do or decide, cut it.
- **Production framing:** every module has scenarios drawn from real engineering work (incident comms,
  PR review, on-call, client delivery under NDA, CI pipelines, data handling) — not toy examples.

## 2. Repo layout and naming

```
CLAUDE.md                         ← this standard
README.md                         ← index of all levels + how to study
level-1-foundational/
  README.md                       ← level overview, study path, assessment format
  notes/NN-MX.Y-<slug>.md         ← one file per module, NN = TEACHING order (not module id)
  assessments/
    bank/MX.Y.json, bank/mock.json ← SINGLE SOURCE OF TRUTH for every MCQ (one file per module)
    quiz-bank.js                  ← GENERATED from bank/ — never hand-edit
    quiz.html                     ← interactive quiz; loads quiz-bank.js via <script src> (works on file://)
    answer-key.md                 ← GENERATED from bank/ — never hand-edit
    verification-drill.md         ← seeded-error drill + key
    practical-lab.md              ← 60-min lab brief + rubric
  reference/
    fact-status.md                ← syllabus claim vs current fact vs surface, with sources
tools/
  build-quiz.mjs                  ← node tools/build-quiz.mjs <level-dir>  (validate + build)
```

- Teaching order for Level 1: `01-M1.1 → 02-M8.1 → 03-M1.2 → 04-M2.1 → 05-M3.1 → 06-M4.1 → 07-M6.1`.
  M8.1 (data privacy) is deliberately second — the file numbering must make that visible.
- Teaching order for Level 2 (CORE 01–10, then electives 11–20): `01-M1.3 → 02-M2.2 → 03-M2.3 → 04-M3.2 →
  05-M3.4 → 06-M8.2 → 07-M3.5 → 08-M3.3 → 09-M4.2 → 10-M8.3 → 11-M3.6 → 12-M5.1 → 13-M5.2 → 14-M5.3 →
  15-M5.5 → 16-M6.2 → 17-M6.3 → 18-M6.8 → 19-M7.1 → 20-M7.2`. M8.2 (verification) is deliberately sixth —
  the earliest its "any two D3 modules" prerequisite allows.
- Each level's `assessments/level.json` holds its teaching order, mock size and elective blocks; the build
  script and `quiz.html` read it. Bank files carry `"status": "CORE" | "ELECTIVE"`.
- After any change under `bank/`, run `node tools/build-quiz.mjs <level-dir>`. It validates every
  item, rebalances answer positions deterministically (authors need not), and regenerates
  `quiz-bank.js` + `answer-key.md`.

## 3. Module notes template

Each `notes/*.md` file uses exactly these sections, in this order:

1. **Header** — module id, title, status (CORE/ELECTIVE), hours, prerequisites, one-line objective.
2. **TL;DR** — 5–8 bullets an engineer could recite. This is the revision sheet.
3. **Concepts** — one `###` per syllabus chapter, in syllabus order. Cover every syllabus bullet.
4. **Under the hood** — internals beyond the syllabus (mechanisms, protocols, data flow). Diagrams as
   ASCII or Mermaid. Short code snippets where they clarify (see §5).
5. **In production** — 3–5 realistic engineering scenarios: situation → right move → why → failure mode.
6. **Pitfalls** — table: anti-pattern | why it bites | do instead.
7. **Hands-on exercises** — the syllabus exercises, each with a concrete "done when" criterion.
8. **Next-level preview** — 2–4 forward pointers into the next level's modules this one leads to
   ("Practitioner preview" at Level 1, "Advanced preview" at Level 2).
9. **Check yourself** — link to the module's quiz as `quiz.html#m8-1` (lowercase, dot → hyphen; page
   anchors may only use letters, digits and hyphens).

Target length: 250–450 lines per module. Tables over prose for comparisons.

## 4. Volatile facts policy (critical)

The syllabus is "Verified November 2026" and tags features GA / PLAN / BETA / DEPR. Product facts drift.

- **Tag every product claim** with its status tag and its **surface**: `[app]` (claude.ai / desktop /
  mobile), `[code]` (Claude Code), `[api]` (Claude Developer Platform). Limits differ by surface — e.g.
  PDF page limits differ between the app and the API. Never present an API fact as overruling an app fact.
- **When the syllabus and current reality differ**, show both in a callout:
  `> **Syllabus says:** … · **Current (verified YYYY-MM-DD, source):** …`
  and record it in `reference/fact-status.md`. The exam grades against the syllabus; the job needs reality.
- **Quiz answers must never hinge on a volatile fact** (a version number, a date, a price, a plan gate
  that changed). Test the stable principle instead ("check the deprecation page before standardising").
- BETA features: explain and demonstrate, never assess. DEPR features: mention only to say "don't use".
- Do not invent facts. If something cannot be verified, say "unverified" — do not fill the gap.
- Things the syllabus references but never defines (e.g. "D1 complete", "cluster table in the master
  index", cluster letters A–E) are marked **undefined in source** rather than guessed.

## 5. Code snippets

- Python (`anthropic` SDK) as primary, `curl` where raw HTTP clarifies. Never guess SDK signatures — check
  the `claude-api` skill or official docs first.
- Default model `claude-opus-5-5`. Use `thinking={"type": "adaptive"}` (or omit) and `output_config={"effort": ...}`.
- Never show: `budget_tokens`, `temperature`/`top_p`/`top_k` (400 since API version 2026-10-21),
  assistant prefill, forced `tool_choice` `any`/`tool`, `tiktoken` for token counts (use `count_tokens`).
- Never put a real-looking secret in a snippet. Use `ANTHROPIC_API_KEY` from the environment.

## 6. Quiz item standard

Items live in `bank/<module>.json` under `"items": [...]` as (JSON, shown JS-style):

```js
{ id: "M8.1-03", module: "M8.1", difficulty: "core" | "stretch",
  scenario: "One–three sentence real-world engineering situation.",
  question: "What should you do / which is correct?",
  options: ["A …", "B …", "C …", "D …"],          // exactly 4, plausible, similar length
  answer: 2,                                      // 0-based index
  explanation: "Why the right answer is right (the principle).",
  distractors: ["why A is wrong", "why B is wrong", null, "why D is wrong"] }  // null at answer index
```

- **Scenario-first.** ≥80% of items open with a production situation, not a definition recall.
- 10 items per module (≈8 core + 2 stretch). Mock exam (`bank/mock.json`, ids `MOCK-NN`, each item also
  carries `"module"`): exactly **25 core** items across the six CORE modules weighted by hours, pass =
  **20/25 (80%)**, plus a **5-item elective block** for M6.1 (`"elective": true`) scored separately (pass 4/5).
  Mock items are new — never copies of per-module items.
- Level 2 mock: **25 core** items across the ten CORE modules weighted by hours (M2.2, M2.3, M3.2, M3.4,
  M8.2 ×3; M3.3, M3.5, M4.2, M1.3, M8.3 ×2), pass 20/25, plus **four 5-item elective blocks**
  (`"elective": true, "block": "DESIGN" | "D5" | "D6" | "D7"`, defined in `level.json`), each scored
  separately (pass 4/5). Candidates take only the blocks their cluster's electives cover.
- Answer-letter spread is enforced by the build script. Never write options that reference other
  options by letter, and no "all/none of the above".
- Every option gets a reason. Distractors must be mistakes real people make.

## 7. Assessments mirror the real level assessment

- Scenario quiz → per-module checks + 25-item mock (80% pass).
- Verification drill → realistic Claude output with ≥10 seeded errors spanning: stale model/fact,
  wrong limit, invented reference, arithmetic slip, privacy leak, unsafe permission advice, missed
  prompt injection, wrong surface routing. Pass = find ≥70% (state as a count).
- Practical lab → 60 minutes, timed run sheet, rubric with point values and a pass line.
- Level 2 adds, per its syllabus: a **prompt-and-output review** against a rubric, a **90-minute** lab, a
  **graded deliverable with a verification note**, and the verification drill at **≥80%** (not 70%).

## 8. Published quiz artifacts

Each level's quiz is published as a private claude.ai artifact:

| Level | URL | `<level-dir>` |
|---|---|---|
| 1 | **https://claude.ai/artifact/KcVBhGjJVcnpYHudRhKvid** | `level-1-foundational` |
| 2 | **https://claude.ai/artifact/CwauW3j6dCLUZLFozo77hn** | `level-2-practitioner` |

To update one, never publish without its URL, because that creates a duplicate artifact:
1. Edit `assessments/bank/*.json` (or `quiz.html`).
2. Run `node tools/build-quiz.mjs <level-dir>`.
3. Republish with the Artifact tool, passing `url` = the level's link, `file_path` = `<level-dir>/assessments/quiz.html`,
   and `files: {"quiz-bank.js": "<level-dir>/assessments/quiz-bank.js"}`. The published `quiz-bank.js` is a
   copy made at publish time, so **republish after every rebuild**, or the live quiz goes stale.

Sharing is controlled by the owner from the page's Share menu. Other people can't open it until it's shared.

## 9. Quality gate before calling anything done

- Every syllabus bullet in the module appears in the notes (grep the PDF bullets).
- Every quiz item has an explanation and distractor reasons; answer distribution checked.
- `node tools/build-quiz.mjs` passes; `quiz.html` opened and a quiz scored end to end.
- `reference/fact-status.md` updated for any volatile claim touched.
- Do not commit unless the user asks.
