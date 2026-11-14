# pod-learning — Claude AI Certification study packs

Study material for the internal **Claude AI Certification Program**, written for technical teams:
engineer-depth notes, scenario quizzes, a mock exam, a verification drill and a practical lab per level.

| Level | Source syllabus | Pack | Status |
|---|---|---|---|
| 1 — Foundational | `01_Foundational_Claude_Certification.pdf` | [`level-1-foundational/`](level-1-foundational/README.md) | Ready |
| 2 — Practitioner | — | — | Not started |
| 3 — Advanced | — | — | Not started |
| 4 — Expert | — | — | Not started |

## How to study (any level)

1. Read the module notes **in teaching order**. Files are numbered by teaching order, not module ID.
2. After each module, take its check in `assessments/quiz.html` in **Practice** mode.
3. Do the hands-on exercises at the end of each module on a real seat. The notes say when each one is done.
4. When every module check is at 8/10 or better, sit the **mock exam**. The pass line is 20/25.
5. Do the **verification drill** and the **practical lab** under time pressure.

## Open the quiz

Open `level-1-foundational/assessments/quiz.html` directly in a browser. It loads `quiz-bank.js` from the
same folder, so it works offline from `file://`.

## Contributing

Read [`CLAUDE.md`](CLAUDE.md) first. It is the content standard: voice, template, volatile-fact policy,
quiz schema and quality gate. Quiz items live in `assessments/bank/*.json`. After you edit them, run:

```bash
node tools/build-quiz.mjs level-1-foundational
```
