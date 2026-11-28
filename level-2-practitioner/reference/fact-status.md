# Fact status — Level 2 syllabus vs current reality

**Last verified:** 2026-11-28, against official sources only: support.claude.com, claude.com/docs,
code.claude.com/docs (changelog up to **2.1.332, 25 Nov 2026**), platform.claude.com/docs, privacy.claude.com.
**Syllabus baseline:** "Claude Feature Status — Verified November 2026".

**How to use this file:**
- **For the exam,** know what the syllabus says. **At work,** use the "Current" column. The notes show both
  as `Syllabus says · Current` callouts.
- **Re-verify before each cohort.** Rows marked *(snippet)* came from a search-result snippet of an official
  page that couldn't be fetched directly. Re-check them first.
- **Verdicts:** ✅ Confirmed · 🔄 Changed (syllabus is out of date) · ◐ Partial · ❓ Unverifiable.
- **Quiz rule (CLAUDE.md §4):** no quiz item depends on any row in this file.

## Apps: settings, memory, Artifacts, files (M1.3, M3.2, M3.5)

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 1 | Personal instructions | Settings → Your Claude → "Instructions for Claude" | Settings → **Your Claude → "Instructions"** in the new layout (older layout: Account → "Instructions for Claude"). Team/Enterprise also have org instructions (max 3,000 characters), which win on direct conflict *(snippet)* | ◐ label | support.claude.com/en/articles/10185728 |
| 2 | Styles | Normal, Concise, Formal, Explanatory, plus custom from samples | **"Styles are moving to skills."** Concise, Formal and Explanatory are being removed. Learning becomes a skill. Custom styles migrate to `/…-style` skills, and the styles menu goes away. No end date is given *(snippet)* | 🔄 | support.claude.com/en/articles/10181068 |
| 3 | "Create and edit files" | Enables file creation and Skills | Confirmed. The same toggle is labelled **"Code execution and file creation"** in the older layout. Artifacts and Skills both require it. On by default for Free, Pro, Max, Ultra and Team, and for new Enterprise orgs | ✅ | support.claude.com/en/articles/12111783 |
| 4 | Web search | Owner-enabled on Team/Enterprise; automatic in new experience | Confirmed. The new experience has no toggle: "Claude searches the web when it helps" | ✅ | support.claude.com/en/articles/10684626 |
| 5 | Memory | Topics, past-chat search, pause/reset, sensitive opt-in, project memory, import/export (experimental), org control, not under HIPAA | All confirmed. Owners can't switch memory on for individual users, and the sensitive-topics opt-in is per user. On by default only for orgs created on or after 31 Oct 2026. **HIPAA:** memory doesn't start on, and the *new* memory experience is unavailable. It is not described as a blanket ban | ✅ (HIPAA nuance) | support.claude.com/en/articles/11817273 |
| 6 | Incognito | Not saved or trained on; still in org exports | Confirmed. Retained for **30 days** by default (Enterprise custom retention may be longer). **Not available inside Projects** | ✅ | support.claude.com/en/articles/12260368 |
| 7 | Voice and dictation | Voice BETA on all plans, not for Fable; camera on mobile; no dictation on Linux | Voice and Linux confirmed. Camera input in voice mode appears only in an older article version *(snippet)* | ◐ | support.claude.com/en/articles/11101966 · code.claude.com/docs/en/desktop-linux |
| 8 | Thumbs feedback | Sends the chat for review, and it's retained; owners can disable "Rate chats" | Confirmed. The whole conversation is stored for **up to 5 years** and may be used for training once de-linked | ✅ | privacy.claude.com/en/articles/7996868 |
| 9 | Artifact types | Docs, Slides, Design GA; **Dashboards** BETA Pro+; Motion BETA Team/Ent | Docs, Slides and Design are GA, all plans. **Dashboards renamed "Claude Data"**, GA on Pro and above (certified queries and live sharing still beta). Motion BETA on Team/Ent. **New:** Sheets and Whiteboards (BETA, Pro and above). Legacy cutoff: artifacts made before **16 Sep 2026** | 🔄 | support.claude.com/en/articles/17153992 · /17454700 |
| 10 | Artifact storage | 20 MB text storage per artifact | **100 MB and 25,000 documents per new artifact.** The 20 MB text-only limit applies to legacy artifacts | 🔄 | support.claude.com/en/articles/17153992 |
| 11 | Claude Docs | Co-editing, comments, @Claude; export DOCX/PDF/MD/Google Docs | Confirmed. All plans. No GA/beta label shown | ✅ | support.claude.com/en/articles/16923645 |
| 12 | File creation | XLSX, DOCX, PPTX, PDF "through the Anthropic Skills" | It creates those formats plus CSV, MD, HTML and PNG charts (files ≤30 MB). The file-creation page says "common code packages", while the Skills page lists Anthropic skills for the same formats | ◐ | support.claude.com/en/articles/12111783 · /12512180 |
| 13 | Office add-ins | Excel and PowerPoint PLAN Pro+; **Word BETA** | Excel, PowerPoint and **Word GA** (Pro, Max, Team, Enterprise). See the Level 1 fact-status, row 3 | 🔄 | claude.com/docs/office-agents |
| 14 | M365 and Google | M365 cross-app context owner-enabled; Google live editing with write approvals | Cross-app context is an **add-in feature** (the add-ins share context). The M365 *connector* is owner-enabled plus Entra admin consent. Google live editing is confirmed. Approval follows the general rule (every action needs approval unless you're in Auto mode). There's no Docs/Sheets/Slides-specific rule | ◐ | support.claude.com/en/articles/15183774 · /10166901 |
| 15 | File limits [app] | 500 MB per file, 20 per chat, PDFs ≤1000 pages (visual ≤100), images ≤8000×8000 | Confirmed in the Level 1 check (2026-11-14). **[api] differs:** 600 pages / 32 MB per request. Never let an API fact overrule an app fact | ✅ | support.claude.com/en/articles/8241126 |

## Apps: Projects, research, Skills, Design (M3.3, M3.4, M4.2, M3.6)

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 16 | Projects | 30 MB files; retrieval auto on paid; Free 5 projects; view/edit sharing; admins can disable | All confirmed. A "new version" of Projects is in beta, rolling out first in Claude Code | ✅ | support.claude.com/en/articles/9517075 |
| 17 | Outlook meeting prep | BETA | claude.com/docs says **Claude for Outlook is GA** (Pro, Max, Team, Enterprise), with "Prep for meetings" included. A support-article snippet still says beta. **The official sources disagree, so treat this as unsettled.** The Level 1 check (11-14) recorded beta | 🔄 / ❓ | claude.com/docs/office-agents/outlook |
| 18 | Ask Your Org | Team/Enterprise, owner-configured, live calls, no index | Confirmed in the Level 1 check. Not on mobile | ✅ | support.claude.com/en/articles/12489464 |
| 19 | Research | Pro and above; Opus 5.5; needs web search; connectors skipped on mobile | Confirmed. It runs on Opus 5.5 **and falls back to Opus 4.8**, whatever model is selected. On mobile it skips connectors without telling you | ✅ | support.claude.com/en/articles/11088861 |
| 20 | Skills | GA all plans; ZIP upload; share with people or groups; org library with review and scan; "Plugins and skills" | Confirmed. Admin path: **Organization settings → "Plugins & skills"**. **Sharing with groups is Enterprise only**; shared skills are view-only. No GA label in the app; Skills are GA on the API | ✅ (details) | support.claude.com/en/articles/12512180 |
| 21 | Account Skills → Claude Code | Sync into Claude Code | Confirmed: one-way into `~/.claude/skills/synced/` (v2.1.273+), only when signed in with a claude.ai account (not with an API key). Opt out with `syncClaudeAiSkills: false` | ✅ | code.claude.com/docs/en/skills |
| 22 | Plugins | Bundles of Skills, connectors, settings, installed into agentic sessions | Plugins bundle **skills, MCP connectors, commands and agents**. They work in **chat, Cowork and Claude Code**; agents only in Cowork and Code. Org states: Installed by default / Available to install / Required / Not available | ◐ | claude.com/docs/plugins/overview · support.claude.com/en/articles/13837433 |
| 23 | Claude Design availability | GA, all plans, on by default; Enterprise default-on 15 Oct 2026 | All plans, on by default, Enterprise from 15 Oct 2026. **No GA/beta label shown** | ◐ | support.claude.com/en/articles/14604416 |
| 24 | claude.ai/design closure | Closes 14 Dec 2026; migrate design systems | Confirmed. **Time-bound: after 14 Dec 2026, `/design-sync` (which uploads to that site) changes or goes away.** Re-check then | ✅ (expiring) | support.claude.com/en/articles/14604416 · code.claude.com/docs/en/commands |
| 25 | Design exports | .zip, PDF, PPTX, Google Slides, HTML | Confirmed | ✅ | support.claude.com/en/articles/14604416 |
| 26 | Design send-to targets | Canva, **Figma**, Vercel, Netlify, Wix, Adobe, Miro, v0 | **Figma isn't a target.** Current list: Adobe Experience Manager, Adobe for Creativity, Adobe Journey Optimizer, Base44, Canva, Gamma, HubSpot, Hyperframes, Lovable, Miro, Netlify, Replit, v0, Vercel, Wix | 🔄 | support.claude.com/en/articles/14604416 |
| 27 | `/design` in Claude Code | Imports a design, exports a live prototype, or builds it | Confirmed. Needs v2.1.265+ and the Design template enabled. **Works on the Anthropic API only** (not Bedrock, Agent Platform, Foundry, or Claude Platform on AWS) | ✅ | code.claude.com/docs/en/commands |

## Claude Code (M6.2, M6.3, M6.8)

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 28 | Plan mode | `/plan`, `--permission-mode plan`, read-only Plan subagent | Confirmed, and `Shift+Tab` also enters it. Plan mode itself **can run shell commands to explore** but doesn't edit source. The Plan *subagent* is read-only. `Ctrl+G` edits the plan | ✅ | code.claude.com/docs/en/permission-modes |
| 29 | CLAUDE.md hierarchy | managed → user → project → local; nested on demand; rules; `@path`; AGENTS.md native; `/init` | Confirmed. Files are **concatenated, not overridden**. The more specific file is read last. `@path` imports go at most **4 hops** deep. **AGENTS.md is read natively only when there's no CLAUDE.md** (a setting can change that) | ◐ | code.claude.com/docs/en/memory |
| 30 | Auto memory | Path, on by default, `/memory`, `autoMemoryEnabled`, `CLAUDE_CODE_DISABLE_AUTO_MEMORY=1` | Confirmed. On by default **in local sessions**. Loads the first 200 lines or 25 KB of MEMORY.md. Worktrees of a repo share it. Machine-local | ✅ | code.claude.com/docs/en/memory |
| 31 | Context and compaction | `/context`, `/compact`, `autoCompactWindow`, ~967K on 1M models | Confirmed. Also `/autocompact <n|auto>`, `--autocompact` and `CLAUDE_CODE_AUTO_COMPACT_WINDOW`. Minimum 100K | ✅ | code.claude.com/docs/en/context-window |
| 32 | Checkpoints | 100 kept; Esc twice; code/conversation/both; Bash and subagent edits not tracked | Confirmed, plus **Summarize from here / up to here**. Nuances: Bash changes to a file Claude already edited **are** undone, and only Bash-only files are untracked. A foreground forked skill's edits are restored; other subagents' edits are not | ◐ | code.claude.com/docs/en/checkpointing |
| 33 | Models and effort | Aliases incl. `best`, `opusplan`; `/effort …|auto`; ultrathink = xhigh; Alt+T | Aliases confirmed (`fable` → Fable 5.2). **`auto` isn't a level**: it clears your saved effort. `max` lasts one session only. Default effort is **medium** on 5.5 models. **ultrathink** requests deeper reasoning; it raises the turn to `xhigh` only in the terminal, VS Code or a desktop local session. Alt+T has no effect on 5.5-generation or Fable models | ◐ | code.claude.com/docs/en/model-config |
| 34 | Paste and output styles | Ctrl+V / Cmd+V (iTerm2) / Alt+V; Default, Proactive, Concise, Explanatory, Learning | Confirmed | ✅ | code.claude.com/docs/en/interactive-mode · /output-styles |
| 35 | `/diff` live panel | In the **desktop app** | The live, updating `/diff` panel is a **terminal (CLI) feature**. The desktop app has its own diff view on the Changes card | ◐ (surface) | code.claude.com/docs/en/interactive-mode · /desktop |
| 36 | Parallel work | `/branch`, `/fork`, worktrees, Ctrl+B, `/tasks`, `/background`, `claude agents` | Confirmed. `claude --worktree <name>` creates `.claude/worktrees/<name>/`. `/fork` copies the conversation into a **new background session**. `claude agents` (agent view) is a **research preview** | ✅ | code.claude.com/docs/en/worktrees · /agent-view |
| 37 | Bundled skills | debug, verify, code-review | Confirmed | ✅ | code.claude.com/docs/en/commands |
| 38 | `/review`; Code Review | `/review`; Code Review PLAN Team/Ent | **`/review` is now an alias of `/code-review`** (bundled skill, any plan, levels `low…max|ultra`, plus `--fix` and `--comment`). The **Code Review** service is Team and Enterprise only, and not available under ZDR, HIPAA or CMEK | 🔄 | code.claude.com/docs/en/code-review |
| 39 | GitHub Actions | `anthropics/claude-code-action@v1`; `/install-github-app` | Confirmed. Auth by `ANTHROPIC_API_KEY`, `CLAUDE_CODE_OAUTH_TOKEN`, or OIDC (Bedrock, Agent Platform, Foundry). GitLab CI is beta and maintained by GitLab (Level 1 row 31) | ✅ | code.claude.com/docs/en/github-actions |
| 40 | iOS Simulator pane | In the desktop app | Confirmed, **macOS only** | ✅ | code.claude.com/docs/en/desktop |
| 41 | Commit vs ignore | Commit CLAUDE.md, rules, skills, agents, settings.json, .mcp.json; ignore settings.local.json | Confirmed for settings.json, .mcp.json and CLAUDE.md. Claude Code adds `.claude/settings.local.json` to your **global** git excludes the first time it writes the file. **CLAUDE.local.md isn't auto-ignored**, so add it to `.gitignore` yourself | ◐ | code.claude.com/docs/en/settings · /memory |
| 42 | Version | (verified 2.1.312 at Level 1) | **2.1.332 (25 Nov 2026)** | 🔄 | code.claude.com/docs/en/changelog |

## Claude Developer Platform (M7.1, M7.2)

| # | Topic | Syllabus says | Current | Verdict | Source |
|---|---|---|---|---|---|
| 43 | Workbench | Retired Aug 2026; Playground has no saved prompts or evals | Confirmed: access ended **17 Aug 2026**. The playground is stateless and exports requests to code | ✅ | platform.claude.com release notes |
| 44 | Rate-limit tiers | Advance with usage history | The principle holds. Tiers are now **Evaluation → Start → Build → Scale → Custom**. New **ramp limits** can return 429 (`ramp_limit_exceeded`) | ◐ | platform.claude.com/docs/en/api/rate-limits |
| 45 | Cloud routes | Bedrock, Agent Platform (ex-Vertex), Foundry | **Five platforms:** Claude Platform on AWS, Claude Models on Google Cloud (Anthropic-managed), Microsoft Foundry, Amazon Bedrock, and Google-managed (Agent Platform; SDK client still `AnthropicVertex`). Feature gaps are documented per platform | ◐ | platform.claude.com/docs/en/api/overview |
| 46 | SDKs | Python, TS, C#, Go, Java, PHP, Ruby, `ant` | Confirmed. Majors that send `2026-10-21`: Python 2.0.0, TS 1.0.0, Go 2.0.0, Java 3.0.0, C# 13.0.0, PHP 1.0.0, Ruby 2.0.0, `ant` 2.0.0 | ✅ | platform.claude.com/docs/en/cli-sdks-libraries/overview |
| 47 | Authentication | Bearer token | **`Authorization: Bearer` is now the primary header.** `x-api-key` is a "legacy fallback, still supported". The new SDK majors send Bearer, so check proxies that read `X-Api-Key` | 🔄 | platform.claude.com/docs/en/api/overview |
| 48 | OpenAI compatibility | Testing only | Confirmed: "not considered a long-term or production-ready solution" | ✅ | …/libraries/openai-sdk |
| 49 | Sampling params | Removed in 2026-10-21 | Confirmed: **400** on every model, even at default values, including inside batches | ✅ | platform.claude.com/docs/en/api/migration-2026-10-21 |
| 50 | Model IDs | opus-5-5, sonnet-5-5, haiku-5-5, **fable-5-1** | All valid. **`claude-fable-5-2` (9 Nov 2026) is the current Fable** | 🔄 | model-deprecations, release notes |
| 51 | Deprecations | Sonnet 4.5 retires 30 Nov 2026 | Tentative 30 Nov 2026 (Level 1 row 18). At least **60 days' notice**. Retired models return 404. **New:** Opus 4.5 deprecated, retiring **2027-01-22** | ✅ + new | platform.claude.com/docs/en/about-claude/model-deprecations |
| 52 | Thinking | Adaptive + `output_config.effort`; display options; `budget_tokens` deprecated on 4.6, rejected on 4.7+ | Confirmed. Default effort is `medium` on Opus 5.5 and Haiku 5.5, `high` elsewhere. Display: `summarized`, `omitted` (**default on 5.x**), and **`updates` (BETA)** | ◐ | platform.claude.com/docs/en/build-with-claude/thinking |
| 53 | Files API | GA, 500 MB | Confirmed (GA 19 Aug 2026). 1 TB per org. Workspace-scoped. Not on Bedrock or Google-managed | ✅ | …/build-with-claude/files |
| 54 | Prompt caching | 5 min / 1 h; min 512 tokens on 5.x | Confirmed, except **Sonnet 5 needs 1,024**. Up to 4 breakpoints. Writes cost 1.25× (5 min) or 2× (1 h). **Reads cost 0.1× on most models, but 0.05× on Opus 5.5 and Sonnet 5.5** | ◐ | …/build-with-claude/prompt-caching · pricing |
| 55 | Batches | Half price | Confirmed. Up to 100,000 requests or 256 MB per batch. Expires after 24 h. Results kept 29 days | ✅ | …/batch-processing |
| 56 | Request cap | 128 MB | First-party Messages and token counting: **128 MB**. Batches 256 MB, Files 500 MB. **32 MB** on Claude Platform on AWS, Anthropic-managed Google Cloud and Foundry. Bedrock 20 MB, Google-managed 30 MB | 🔄 (per platform) | platform.claude.com/docs/en/api/overview |
| 57 | Citations | Incompatible with `output_config.format` | Confirmed (400) | ✅ | …/structured-outputs |
| 58 | Forced tool choice | `any`/`tool` → 400 on Opus 5.5, Sonnet 5.5, Fable 5.1 | Also on **Fable 5.2 and Mythos 5.1/5.2**. **Fable 5.0 and Opus 5 still accept it** | ◐ | …/tool-use/define-tools |
| 59 | Structured outputs | `output_config.format`; `output_format` deprecated | Confirmed. Python: `client.messages.parse(..., output_format=Model)` → `.parsed_output` | ✅ | …/structured-outputs |
| 60 | Server tools | Web search, fetch, code execution + PTC, memory, text editor, bash, computer use GA Aug 2026, browser | Confirmed. Computer and browser toolsets **GA since 19 Aug 2026**. Memory tool is stable, so it can be assessed. Text editor and bash are client-executed. Web search costs **$10 per 1,000 searches**. Code execution is free alongside web tools, otherwise 1,550 free hours a month | ✅ | pricing, tool-use docs |
| 61 | Skills API | Up to 20 per container | Confirmed. `/v1/skills` is GA (no beta header). Requires code execution | ✅ | …/skills-guide |
| 62 | Compaction and context editing | Both BETA | Both still BETA. Compaction now comes in two kinds: **on-demand** (recommended default) and **threshold** (original) | ◐ | …/compaction · /context-editing |
| 63 | Prefill | (never show) | 400 on all current 5.x models. Still works on Haiku 4.5 | ✅ | `claude-api` skill |

## Undefined in source (not facts, so not verifiable)

- **Clusters A–G** (elective gating). See the level README.
- **"M2.4 concepts" and "M5.4 concepts"** as prerequisites. Both are Advanced-level modules.
- The org's **approved licence list, approved plugin list, AI policy and disclosure rules**, and its **design-system owners**.
