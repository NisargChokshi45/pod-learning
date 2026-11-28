# Fact status — Level 1 syllabus vs current reality

**Last verified:** 2026-11-28 (rows touched in the 2026-11-28 review; others 2026-11-14), against official sources (support.claude.com, claude.com/docs,
code.claude.com/docs, platform.claude.com/docs, anthropic.com).
**Syllabus baseline:** "Claude Feature Status — Verified November 2026".

**How to use this file:**
- **For the exam,** know what the syllabus says. **For the job,** use the "Current" column.
- **Before each delivery cycle,** re-verify every row and update the date. CLAUDE.md §4 requires it.
- **Verdicts:**
  - **✅ Confirmed** — the syllabus matches the current docs.
  - **🔄 Changed** — the syllabus is out of date; use the "Current" column.
  - **◐ Partial** — some of the claim matches, some doesn't.
  - **❓ Unverifiable** — no official source confirms or denies it.

## Apps and plans

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 1 | Desktop app | macOS & Windows GA, Linux BETA | macOS, Windows, Linux (beta). Only Linux is labelled beta | ✅ | support.claude.com/en/articles/10065433 |
| 2 | Claude in Chrome | Pro+; Enterprise when an admin enables it | **All paid plans** (Pro, Max, Ultra, Team, Enterprise). On by default for Team and Enterprise unless an Owner disables it; off under HIPAA | 🔄 | support.claude.com/en/articles/13065128 |
| 3 | Microsoft 365 add-ins | Excel & PowerPoint Pro+; Word & Outlook BETA | Excel, PowerPoint, **Word GA** (Pro/Max/Team/Enterprise); Outlook beta | 🔄 | claude.com/docs/office-agents/{excel,powerpoint,word,outlook} |
| 4 | Claude Tag in Slack | BETA, Team & Enterprise; replaced Claude in Slack in **August 2026** | Public beta, Team & Enterprise. Replaces the earlier app **in place** (same @Claude app; no data migrates). The legacy app stopped answering in paired workspaces on **5 Oct 2026**. No August date in the docs | 🔄 (date) | claude.com/docs/claude-tag/overview |
| 5 | Cowork (agentic sessions) | Paid plans; desktop GA, web & mobile BETA | Paid plans ✅. On desktop, only Linux is beta. Web and mobile are not labelled beta on Pro/Max/Ultra. Team is in beta. Enterprise when an owner enables it | 🔄 | support.claude.com/en/articles/13345190 |
| 6 | Cowork connector modes | Manual · Auto · Skip | Session approval modes: *Manually approve / Automatically approve / Skip all approvals*. Per-connector tools: *Always allow / Needs approval / Blocked*. The new Claude experience offers only Auto and Manual | 🔄 (labels) | support.claude.com/en/articles/13345190 |
| 7 | Plans | Free, Pro, Max, Ultra; Team (Standard/Premium), Enterprise | Confirmed. Ultra has no 5-hour limit for verified accounts. Usage credits on Pro, Max, Ultra, Team (**not** Free or Enterprise) | ✅ + notes | claude.com/pricing |
| 8 | Gated examples | Claude Code not on Free; Research Pro+ | Confirmed | ✅ | claude.com/pricing |
| 9 | Ask Your Org | Team & Enterprise; owner-configured; live calls, no index | Confirmed. "No data from connected services are indexed." Not on mobile | ✅ | support.claude.com/en/articles/12489464 |
| 10 | Custom connectors | Free 1; Pro/Max self-service; Team = Owners & Primary Owners; Enterprise = Owners or custom role | Confirmed, except that the Team docs say "Owner" and don't mention Primary Owner | ◐ | claude.com/docs/connectors/custom/add-unlisted |
| 11 | Local MCP | Desktop-config local MCP is not available in agentic sessions or claude.ai | The docs describe desktop extensions but don't state this restriction | ❓ | — |
| 12 | Training use | Commercial not trained on by default; consumer opt-in | Commercial exclusion confirmed. The consumer **default** is not stated officially (it is described as a user choice) | ◐ | anthropic.com/news/updates-to-our-consumer-terms |
| 13 | File limits [app] | Images ≤8000×8000; 500 MB/file; 20/chat; PDFs ≤1000 pages, visual ≤100 pages | Confirmed. PDFs of 101–1000 pages are analysed as text only | ✅ | support.claude.com/en/articles/8241126 |
| 14 | Google Workspace approvals | Write actions need approval by default | True for the claude.ai connectors (send/reply/forward, share/move/trash). Team/Enterprise owners decide whether members can skip it | ✅ (scoped) | support.claude.com/en/articles/10166901 |
| 15 | Out-of-scope products | Claude Science (BETA), Claude Security (BETA, Ent), Dispatch, Duet | Science, Security and Dispatch confirmed. Duet is now **"Claude Duet"**, a research preview (waitlist, US, Pro/Max/Ultra) | 🔄 (Duet) | claude.com/resources/articles/claude-duet |

## Models

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 16 | Top model | **Fable 5.1** | **Fable 5.2** (launched 9 Nov 2026; API $8/$40 per MTok). The app also lists 5.1 | 🔄 | platform.claude.com release notes |
| 17 | Line-up | Haiku 5.5, Sonnet 5.5, Opus 5.5 (default) | Confirmed for Claude Code and the API. The app's default model is unverified | ✅ / ❓ | code.claude.com/docs/en/model-config |
| 18 | Retirements | Opus 4.1 retired Aug 2026; Sonnet 4.5 retires 30 Nov 2026 | Opus 4.1 retired 5 Aug 2026. Sonnet 4.5 is deprecated, with a **tentative** retirement on 30 Nov 2026. Bedrock and Google set their own schedules. **Re-verify after 30 Nov 2026** and move any pins to `claude-sonnet-5-5`. Deprecation-start date unverified | ✅ | platform.claude.com/docs/en/about-claude/model-deprecations |
| 19 | Effort labels | Low, Medium, High, xhigh, Max | The app shows "**Extra high**". `xhigh` is the API value | ◐ (label) | support.claude.com/en/articles/8664678 |
| 20 | Thinking toggle | Can't be disabled on 5.5-gen or Fable | True in the **app**. On the **API**: `disabled` returns 400 on Opus 5.5, Sonnet 5.5 and Fable; Sonnet 5.5's thinking-off mode is `between_tools` (effort ≤ high); Haiku 5.5 accepts `disabled` at effort ≤ high. Default effort: `medium` on Opus 5.5 and Haiku 5.5, `high` on Sonnet 5.5 (re-checked 2026-11-28) | ✅ [app] / differs [api] | claude-api reference |
| 20a | Prompt caching price [api] | — (not in syllabus) | Cache reads are about 5% of base input on current models (Opus 5.5 $0.20 vs $4/MTok; Sonnet 5.5 $0.10 vs $2), not the older "0.1×". Price is volatile; no quiz item depends on it | n/a (notes only) | claude-api reference (pricing cached 2026-11-03) |
| 21 | Fable billing | Usage credits or share of weekly limit; not on Free | Pro: usage credits. Max/Ultra: a separate Fable weekly limit. Premium seats count Fable at 50% of the weekly limit. Free access isn't stated | ◐ | claude.com/pricing |
| 22 | Context window | 1M on current generation | Confirmed (Haiku 4.5 is 200K). Max output is 128K on current models [api] | ✅ | claude-api reference |
| 23 | PDF limits | ≤1000 pages | That's the **app**. The **API** allows 600 pages per request (32 MB) | surface diff | claude-api reference |

## Claude Code

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 24 | Version | Verified against 2.1.312 (27 Oct 2026) | Latest is **2.1.325** (13 Nov 2026) | 🔄 | code.claude.com/docs/en/changelog |
| 25 | Default model | Opus 5.5 | Confirmed, except Microsoft Foundry, which defaults to Sonnet 4.5 | ✅ | code.claude.com/docs/en/model-config |
| 26 | Install & OS minimums | as listed | Confirmed (Windows Server 2019+ also supported) | ✅ | code.claude.com/docs/en/setup |
| 27 | Auth routes | Pro/Max/Team/Ent; Console key or keyless; Bedrock/Agent Platform/Foundry; gateway | Confirmed, plus Ultra and a self-hosted apps gateway. Keyless sign-in needs ≥2.1.242 | ✅ | code.claude.com/docs/en/authentication |
| 28 | Permission modes | default/acceptEdits/plan/auto/dontAsk/bypassPermissions; auto default since 2.1.283 | Confirmed. `-p`, the SDK and HIPAA orgs start in default. If auto is unavailable, sessions start in Manual (2.1.323). `dontAsk` is set only via flag or settings | ✅ | code.claude.com/docs/en/permission-modes |
| 29 | Commands | /help … /rewind; /cost & /stats are aliases | Confirmed. `/doctor` is now a bundled skill. `/rewind` aliases: `/checkpoint`, `/undo` | ✅ | code.claude.com/docs/en/commands |
| 30 | GitHub Actions | GA | The page has no GA label but shows "upgrade from beta" (`@beta` → `@v1`) | ❓ | code.claude.com/docs/en/github-actions |
| 31 | GitLab CI | BETA | Beta, maintained by GitLab | ✅ | code.claude.com/docs/en/gitlab-ci-cd |
| 32 | JetBrains | Beta | Confirmed ("Claude Code [Beta]") | ✅ | code.claude.com/docs/en/jetbrains |
| 28a | Permission modes (detail) | plan proposes; bypass skips checks | `plan` reads and runs exploratory commands, no source edits. Deny rules block in every mode incl. `bypassPermissions`; explicit ask rules still prompt. Shift+Tab: default→acceptEdits→plan, then bypass/auto if available; never `dontAsk` | ✅ (detail) | code.claude.com/docs/en/permission-modes |
| 33 | Checkpoints | preview; /rewind | A checkpoint per prompt; `Esc Esc` opens rewind; files changed only by Bash aren't tracked; snapshots kept ~30 days | ✅ | code.claude.com/docs/en/checkpointing |
| 34 | MCP in Claude Code | — | SSE transport deprecated (use HTTP); project `.mcp.json` servers need approval in interactive sessions; `/mcp` handles OAuth | DEPR (SSE) | code.claude.com/docs/en/mcp |
| 35 | /doctor | health check | Also `claude doctor` in the shell, without starting a session | ✅ | code.claude.com/docs/en/setup |

## New since the syllabus (worth a mention, not assessed)

- **Claude Code 2.1.319–2.1.325:** `/usage` shows spend for today, the week and the month. `/schedule` is now
  called "cloud scheduled tasks" (formerly routines).
- **Fable 5.2 and Mythos 5.2** (9 Nov 2026). Mythos is for verified organisations only.
- **Self-hosted Claude Managed Agents** (12 Nov 2026), via account teams.
- **Claude Tag API** (beta, Enterprise, 23 Oct 2026).
- **Claude Models on Google Cloud (Anthropic-managed),** and Opus 5.5 fast mode there (22 Oct 2026).
- **Cowork renames:** "Delete Cowork VM Sessions and Restart" is now "Delete Cowork Data and Restart".
  Custom groups are now "sections".
