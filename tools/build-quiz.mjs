#!/usr/bin/env node
// Validate quiz bank JSON, rebalance answer positions, emit quiz-bank.js + answer-key.md.
// Usage: node tools/build-quiz.mjs <level-dir>   e.g. level-1-foundational, level-2-practitioner
// Per-level settings (teaching order, mock size, elective blocks) come from <level-dir>/assessments/level.json.
import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const levelDir = process.argv[2];
if (!levelDir) { console.error("usage: node tools/build-quiz.mjs <level-dir>"); process.exit(2); }
const bankDir = join(levelDir, "assessments", "bank");
const outJs = join(levelDir, "assessments", "quiz-bank.js");
const outKey = join(levelDir, "assessments", "answer-key.md");

const levelCfgPath = join(levelDir, "assessments", "level.json");
const LEVEL = existsSync(levelCfgPath) ? JSON.parse(readFileSync(levelCfgPath, "utf8")) : {};
// Teaching order for display; unknown modules sort after.
const ORDER = LEVEL.order || ["M1.1", "M8.1", "M1.2", "M2.1", "M3.1", "M4.1", "M6.1"];
const MOCK_CORE = LEVEL.mockCore || 25;
// Elective blocks: { "<block>": { code, name, size } }. Items carry "elective": true and "block": "<block>".
const BLOCKS = LEVEL.blocks || null;
const LETTERS = "ABCD";
const errors = [];

// Deterministic PRNG (mulberry32) seeded from a string, so rebuilds are stable.
function seedFrom(str) { let h = 2166136261; for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619); return h >>> 0; }
function rng(seed) { return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function shuffle(arr, r) { const a = [...arr]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

function validate(item, where) {
  const req = ["id", "difficulty", "scenario", "question", "options", "answer", "explanation", "distractors"];
  for (const k of req) if (item[k] === undefined) errors.push(`${where}: missing "${k}"`);
  if (!Array.isArray(item.options) || item.options.length !== 4) errors.push(`${where}: needs exactly 4 options`);
  if (!Number.isInteger(item.answer) || item.answer < 0 || item.answer > 3) errors.push(`${where}: answer must be 0-3`);
  if (!Array.isArray(item.distractors) || item.distractors.length !== 4) errors.push(`${where}: needs 4 distractor slots`);
  else item.distractors.forEach((d, i) => {
    if (i === item.answer && d !== null) errors.push(`${where}: distractors[${i}] must be null (answer index)`);
    if (i !== item.answer && (typeof d !== "string" || d.length < 10)) errors.push(`${where}: distractors[${i}] needs a reason`);
  });
  if (!["core", "stretch"].includes(item.difficulty)) errors.push(`${where}: difficulty must be core|stretch`);
  if (item.elective && BLOCKS && !BLOCKS[item.block]) errors.push(`${where}: elective item needs "block" from level.json (${Object.keys(BLOCKS).join(", ")})`);
  if (/\b(all|none) of the above\b/i.test((item.options || []).join(" "))) errors.push(`${where}: no all/none of the above`);
}

// Move the correct option to `target`, keeping distractors' relative order.
function placeAnswer(item, target) {
  const pairs = item.options.map((o, i) => ({ o, d: item.distractors[i], correct: i === item.answer }));
  const right = pairs.find(p => p.correct);
  const wrong = pairs.filter(p => !p.correct);
  wrong.splice(target, 0, right);
  return { ...item, options: wrong.map(p => p.o), distractors: wrong.map(p => p.d), answer: target };
}

function rebalance(items, seedKey) {
  const r = rng(seedFrom(seedKey));
  // Round-robin targets 0..3 shuffled in blocks of 4 -> each letter gets ~25%.
  let targets = [];
  while (targets.length < items.length) targets.push(...shuffle([0, 1, 2, 3], r));
  return items.map((it, i) => placeAnswer(it, targets[i]));
}

const files = existsSync(bankDir) ? readdirSync(bankDir).filter(f => f.endsWith(".json")) : [];
const modules = [];
let mock = null;
const ids = new Set();

for (const f of files) {
  let data;
  try { data = JSON.parse(readFileSync(join(bankDir, f), "utf8")); }
  catch (e) { errors.push(`${f}: invalid JSON — ${e.message}`); continue; }
  data.items.forEach((it, i) => {
    validate(it, `${f}#${i} (${it.id})`);
    if (ids.has(it.id)) errors.push(`${f}: duplicate id ${it.id}`);
    ids.add(it.id);
  });
  if (f === "mock.json") mock = data; else modules.push(data);
}
if (errors.length) { console.error("Validation failed:\n  " + errors.join("\n  ")); process.exit(1); }

// Length tell: test-takers learn that "the longest (or shortest) option is right". Warn per set when the
// answer is the longest or the shortest option in more than 40% of items, or is >25% longer than every distractor.
function lengthTells(items, label) {
  let longest = 0, shortest = 0; const blatant = [];
  for (const it of items) {
    const L = it.options.map(o => o.length);
    const maxOther = Math.max(...L.filter((_, i) => i !== it.answer));
    if (L[it.answer] >= maxOther) longest++;
    if (L[it.answer] <= Math.min(...L.filter((_, i) => i !== it.answer))) shortest++;
    if (L[it.answer] > 1.25 * maxOther) blatant.push(it.id);
  }
  const cap = Math.ceil(items.length * 0.4);
  if (longest > cap || shortest > cap || blatant.length)
    console.warn(`WARN length tell in ${label}: answer longest in ${longest}/${items.length}, shortest in ${shortest}/${items.length}` + (blatant.length ? `; >25% longer: ${blatant.join(", ")}` : ""));
}
for (const m of modules) lengthTells(m.items, m.module);
if (mock) lengthTells(mock.items, "mock");

modules.sort((a, b) => (ORDER.indexOf(a.module) + 1 || 99) - (ORDER.indexOf(b.module) + 1 || 99));
for (const m of modules) m.items = rebalance(m.items, m.module);
if (mock) {
  mock.items = rebalance(mock.items, "mock");
  const core = mock.items.filter(i => !i.elective).length;
  if (core !== MOCK_CORE) console.warn(`WARN: mock has ${core} core items (expected ${MOCK_CORE})`);
  if (BLOCKS) for (const [b, cfg] of Object.entries(BLOCKS)) {
    const n = mock.items.filter(i => i.elective && i.block === b).length;
    if (cfg.size && n !== cfg.size) console.warn(`WARN: elective block ${b} has ${n} items (expected ${cfg.size})`);
  }
  console.log(`mock: ${mock.items.length} items (${core} core, ${mock.items.length - core} elective)`);
}

const bank = { generated: new Date().toISOString().slice(0, 10), modules, mock };
if (BLOCKS) bank.blocks = BLOCKS;
writeFileSync(outJs, "// GENERATED by tools/build-quiz.mjs from assessments/bank/*.json — do not edit.\nwindow.QUIZ_BANK = " + JSON.stringify(bank, null, 1) + ";\n");

// Answer key markdown
const dist = (items) => { const c = [0, 0, 0, 0]; items.forEach(i => c[i.answer]++); return LETTERS.split("").map((l, i) => `${l}:${c[i]}`).join(" "); };
let md = `# Answer key — ${levelDir}\n\n> GENERATED by \`tools/build-quiz.mjs\` from \`assessments/bank/*.json\`. Do not edit by hand.\n> Option letters match \`quiz.html\`.\n\n`;
const section = (title, items) => {
  md += `## ${title}\n\nAnswer distribution: ${dist(items)}\n\n`;
  for (const it of items) {
    md += `### ${it.id}${it.elective ? " (elective)" : ""} — ${it.difficulty}\n\n**Scenario:** ${it.scenario}\n\n**Q:** ${it.question}\n\n`;
    it.options.forEach((o, i) => { md += `- **${LETTERS[i]}.** ${o}${i === it.answer ? " ✅" : ""}\n`; });
    md += `\n**Answer: ${LETTERS[it.answer]}** — ${it.explanation}\n\n`;
    it.distractors.forEach((d, i) => { if (d) md += `- *${LETTERS[i]} is wrong:* ${d}\n`; });
    md += "\n";
  }
};
for (const m of modules) section(`${m.module} — ${m.title}`, m.items);
if (mock && BLOCKS) {
  section(`Mock exam (${MOCK_CORE} core items)`, mock.items.filter(i => !i.elective));
  for (const [b, cfg] of Object.entries(BLOCKS)) section(`Mock elective block ${b} — ${cfg.name}`, mock.items.filter(i => i.elective && i.block === b));
} else if (mock) section("Mock exam (25 items)", mock.items);
writeFileSync(outKey, md);

for (const m of modules) console.log(`${m.module}: ${m.items.length} items  ${dist(m.items)}`);
console.log(`wrote ${outJs} and ${outKey}`);
