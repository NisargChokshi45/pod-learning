# Level 2 Graded Deliverable — with Verification Note

**Mirrors:** "a graded deliverable with a verification note" in the Level 2 assessment.
**Time:** take-home, up to one working week. **Pass line:** **16/20**, *and* a complete verification note. An
incomplete note caps the score at 10. "Complete" means every heading in the template below is filled in, each
checked row names who checked it, and the note says what was *not* checked.

> **The point.** At Practitioner level the deliverable is real work, made with Claude, shipped under your
> name. The verification note is how a reviewer, a client or an auditor can trust it without redoing it
> (M8.2 §6). The named human is how they know who answers for it (M8.3 §4).

## 1. Choose one real deliverable

Pick something you would produce anyway in the next two weeks. Choose it from your cluster's work, and make sure it
will go to someone other than you.

| Cluster type | Examples |
|---|---|
| Engineering | A design doc or ADR (M5.1). A PR with a multi-file change (M6.3). A test plan with a traceability matrix (M5.5). A technical-debt register (M5.3) |
| Data | A variance report or utilisation analysis, recomputable (M3.5) |
| Delivery and management | Weekly client status plus a scope-change analysis (M3.3). An RFP section (M2.2) |
| Research and pre-sales | A vendor or technology evaluation with a weighted comparison (M3.4) |
| Design | A prototype plus a handoff note (M3.6) |

Constraints: use only org-approved Claude surfaces and connectors. Follow the client's terms (M8.3 §5). Handle data per M8.1.
If the real artefact can't leave the client, submit a sanitised copy and say so in the note.

## 2. Submit

1. The deliverable, in the form its next reader needs (M3.2: "who edits it next decides").
2. The **verification note** (template below), attached to the deliverable or placed at its end.
3. A **process log** of up to one page: the surfaces, models and effort levels used, the Project or Skill involved,
   and the key prompts (summarised, not pasted).

## 3. Verification note template

```markdown
## Verification note

**Deliverable:** <title, version, date>
**Accountable owner:** <named human> · **Reviewer:** <named human, if different>
**AI assistance:** <surfaces and models used; what Claude drafted vs what a human wrote>
**Disclosure:** <how AI use was disclosed to the recipient, per policy and contract, or "not required because …">

### What was checked
| Item / claim type | Risk | How it was checked | Against what | Checked by | Result |
|---|---|---|---|---|---|
| All figures in §3 | High | Recomputed in Sheets from the raw export | usage-export.csv (rows 2–5201) | <name> | 1 discrepancy fixed (FX) |
| Vendor SLA claims | High | Opened every cited source | vendor sites, retrieved 2026-11-20 | <name> | 2 claims removed (unsourced) |
| Background prose | Low | 20% sample read against sources | — | <name> | No issues |
| Code | High | Tests run, diff read, dependency licences checked | CI run #482, approved licence list | <name> | Pass |

### What was NOT checked, and why
- <e.g. "Vendor B roadmap claims: no primary source available; marked as unverified in §4">

### Known limitations and open questions
- <assumptions that would change the conclusion>

**Sign-off:** <name>, <date>
```

## 4. Rubric (20 points)

| Criterion | 0 | 2 | 4 |
|---|---|---|---|
| **Fitness for purpose.** The right form for the reader. The reader can act on it | Wrong form or unusable | Usable after significant edits | Ready to send |
| **Correctness.** A reviewer spot-checks 5 high-risk items | ≥2 wrong | 1 wrong | All correct |
| **Verification is proportional.** High-risk content is fully checked, low-risk content sampled | Unverified, or everything treated alike | High-risk items mostly checked | Risk-tiered and justified |
| **Verification note is honest.** It lists what *wasn't* checked, and the limits | Missing, or claims everything was checked | Present but vague | Specific, with sources and dates |
| **Accountability and policy.** Named owner, disclosure, data handling, licences | Any breach | Minor gaps | Complete |

**Reviewer instructions.** Choose the 5 spot-checks from the highest-risk content: numbers, citations,
legal or regulatory statements, versions, names and code behaviour (M8.2 §2). Pick them *before* you read the
verification note, so the note can't steer which items you check.
