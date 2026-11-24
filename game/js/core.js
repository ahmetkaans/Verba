/* js/core.js - the state object and the small helper tools (element builder, number format, saved settings, seeded random)
   Provides: el, fmt, englishText, questionNodes, questionSpan, noteText, clampScore, findById, loadPref, savePref, prefersReducedMotion,
             hashString, mulberry32, makeLorem, state, $
   Needs: CONFIG, t, LOREM_WORDS */
'use strict';
/* =========================================================================
 * STATE
 * ========================================================================= */
const state = {
  nav: { level: null, category: null, topic: null, type: null, difficulty: null, sameDuration: false },
  quiz: null, // created by startQuiz()
  smartBoard: false, // SmartBoard mode (Settings): Fill in the Blanks uses taps instead of typing; remembered ('lg-smartboard')
  lang: 'en', // language of menus, buttons and pop-ups (Settings): 'en' or 'tr'; remembered ('lg-lang'); set by initLanguage()
  screen: 'level', // the screen being shown (set by showScreen)
  nextHint: null, // { difficulty }: the quiz "Next exercise" suggests; marked on the Difficulty screen, cleared on any other screen
  vocab: { step: 'theme', level: null, theme: null, tab: null }, // the Word list screen (js/vocab-list.js): its own path, never state.nav; step = theme (with the level tabs) or list; level = the chosen level tab (the Word list button sets the first level); tab = the open difficulty tab of the list
};

/* =========================================================================
 * HELPERS
 * ========================================================================= */
const $ = (sel) => document.querySelector(sel);

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === 'text') node.textContent = value;
    else if (key === 'class') node.className = value;
    else if (key === 'disabled') node.disabled = value;
    else node.setAttribute(key, value);
  }
  for (const child of [].concat(children)) {
    node.append(child);
  }
  return node;
}

// Scores are kept exact (e.g. 3 × 33.33…); round away float noise, show at most 2 decimals (6.25, 33.33).
// Display only: in Turkish the decimal sign is a comma (6,25). Stored numbers always keep the dot.
function fmt(n) {
  const r = Math.round(n * 1e6) / 1e6;
  const text = String(Number(r.toFixed(2)));
  return state.lang === 'tr' ? text.replace('.', ',') : text;
}

// English content (a question, an answer, an explanation) inside a Turkish line says so with lang="en".
function englishText(text) {
  return el('span', { lang: 'en', text });
}

// A question text with a line break ("\n") is a DIALOGUE: each speaker is on a line of their own and the speaker's name is bold
// ("Anna:" at the start of a line, or the name before "says," / "asks," / "answers,"). A text without a line break is shown as it is.
// Returns a list of nodes (strings, <strong class="speaker">, <br>) so that Fill in the Blanks can put the blank in the last line.
// A narration sentence followed by "<who> says ..." with a quote ("Emma gives Ben a pen. Ben says, "..." / "Ken sees Anna. He says "...")
// also puts the speech on a line of its own (owner, 2026-11-24). The text is not changed in the data; this is only how it is shown.
// Speech that comes first ("Thanks!" Ben says.) stays one sentence. Pronouns (He, She, ...) are not made bold.
function questionNodes(text) {
  const speechSplit = /([.!?]["'”]?) +(?=(?:[A-Z][A-Za-z']*|The [a-z]+) (?:says|asks|answers|replies|shouts|said|asked|answered|replied|shouted)\b[^"“.!?\n]{0,25}["“])/g;
  const lines = String(text).replace(speechSplit, '$1\n').split('\n');
  const nodes = [];
  lines.forEach((line, i) => {
    if (i > 0) nodes.push(el('br'));
    const label = lines.length > 1 ? line.match(/^([A-Z][A-Za-z']*:|(?:The )?(?!(?:He|She|They|I|We|It|You)\b)[A-Za-z']+(?= (?:says|asks|answers),))/) : null;
    if (label) nodes.push(el('strong', { class: 'speaker', text: label[1] }), line.slice(label[1].length));
    else if (line) nodes.push(line);
  });
  return nodes;
}

// A whole question text as one English span (Results, History): englishText() with the dialogue lines.
function questionSpan(text) {
  return el('span', { lang: 'en' }, questionNodes(text));
}

// A record's note is stored as { key, params } (not as a sentence), so it can be shown in either language later.
function noteText(note) {
  return t(note.key, note.params);
}

function clampScore(n) {
  return Math.min(CONFIG.SCORE_MAX, Math.max(CONFIG.SCORE_MIN, Math.round(n * 1e6) / 1e6));
}

function findById(list, id) {
  return list.find((item) => item.id === id);
}

// localStorage can throw (private mode, blocked storage): always fall back silently.
function loadPref(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : value;
  } catch (e) {
    return fallback;
  }
}

function savePref(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Seeded RNG so the same quiz (level/category/topic/type) always yields the same questions.
function hashString(str) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function mulberry32(seed) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function makeLorem(rng) {
  const int = (min, max) => min + Math.floor(rng() * (max - min + 1));
  const shuffle = (arr) => {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };
  const words = (n) => shuffle(LOREM_WORDS).slice(0, n);
  const capitalize = (w) => w.charAt(0).toUpperCase() + w.slice(1);
  const sentence = (min, max, end = '.') => {
    const w = words(int(min, max));
    w[0] = capitalize(w[0]);
    return w.join(' ') + end;
  };
  return { int, shuffle, words, capitalize, sentence, bool: () => rng() < 0.5 };
}

