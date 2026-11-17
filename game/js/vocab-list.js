/* js/vocab-list.js - the Vocabulary lists: which words a topic (or one quiz) tests, with their meanings (data in, lists out), and the Vocabulary screen
   Provides: vocabularyWords, vocabAccent, vocabCount, vocabSub, vocabRow, vocabTabs, selectVocabTab, vocabKinds, selectVocabKind, toggleVocabKinds, renderVocabList, renderVocabTopics, renderVocab, openVocab, vocabBack, refreshVocab, initVocab
   Needs: CONFIG, QUESTION_BANK, GLOSSARY, ICONS, $, el, t, state, getTopics, hasRealQuizzes, renderLevelGroups, showScreen,
          quizTargetWords, openUnfinishedConfirm */
'use strict';
/* =========================================================================
 * VOCAB LIST  (README.md, Roadmap item 17; decided 2026-11-16. The lists come first, the screen (the Vocabulary button) is below.)
 * vocabularyWords() builds the words that a part of the game tests, from the REAL questions and the glossary, when it is asked.
 * Nothing is written by hand and nothing is stored: a new theme (its question file and its glossary meanings) shows up by itself.
 * It never reads the lorem ipsum questions, so a placeholder word can never be listed.
 * ========================================================================= */

// The words that the real quizzes of one theme test, with their meanings from the glossary:
//   { blocks: [{ difficulty, words: [{ word, senses, missing }] }], total }
// blocks: one for each difficulty that has real quizzes, in the order of CONFIG.DIFFICULTIES. words: alphabetical (the same
// order as the words pop-up). A word is listed once, in the first (easiest) block that tests it, so total = the number of
// different words. senses = [{ type, meaning }], every word type of the word at that level; missing = true (and senses empty)
// when the glossary has no entry for the word, which the question check does not allow, so it is a sign of a broken file.
// only = { type, difficulty } (both optional): keeps only the quizzes of that question type and/or difficulty. With both, the
// result is ONE quiz: the same words as the "Words in this game" pop-up of that quiz.
// The questions are read as they are stored in the bank (no shuffling). A quiz counts only when it is real and uses the same
// questions as getQuestions(): the first CONFIG.QUESTIONS_PER_QUIZ questions, all of them for Matching.
function vocabularyWords(level, category, theme, only = {}, bank = QUESTION_BANK, glossary = GLOSSARY) {
  const seen = new Set();
  const blocks = [];
  CONFIG.DIFFICULTIES.forEach((d) => {
    if (only.difficulty && only.difficulty !== d.id) return;
    const questions = [];
    CONFIG.TYPES.forEach((ty) => {
      if (only.type && only.type !== ty.id) return;
      const quiz = bank[`${level}|${category}|${theme}|${ty.id}|${d.id}`];
      const isMatch = ty.id === 'match';
      if (!quiz || quiz.length < (isMatch ? CONFIG.MATCH_MIN_QUESTIONS : CONFIG.QUESTIONS_PER_QUIZ)) return;
      questions.push(...(isMatch ? quiz : quiz.slice(0, CONFIG.QUESTIONS_PER_QUIZ)));
    });
    if (!questions.length) return;
    const words = quizTargetWords(questions).filter(({ word }) => !seen.has(word)).map(({ word }) => {
      seen.add(word);
      const entry = (glossary[level] || {})[word.toLowerCase()];
      return { word, senses: entry ? [].concat(entry) : [], missing: !entry };
    });
    if (words.length) blocks.push({ difficulty: d.id, words });   // a block whose words were all listed in an easier block is left out
  });
  return { blocks, total: seen.size };
}

/* =========================================================================
 * VOCABULARY SCREEN  (the Word list button on the main menu; one screen with steps; the spiral notebook design the owner chose from mock-ups, 2026-11-17)
 * Its own state, state.vocab (never state.nav), so the quiz path, the menu tree, Next exercise and the History are not touched.
 * Steps: Level -> Topic -> the list. The list shows every word of the topic under one tab for each difficulty. A button at the
 * end of the list, "Separate words by question type", shows four question type buttons above the tabs; a type button keeps
 * only the words of that question type (tap it again, or the button at the end, to see all types again). The level step uses
 * the game's menu buttons (renderLevelGroups); the topic step is a list of rows with the number of words, and a part with no
 * real questions is gray and asks "Go back / Go there" in the same way. Back goes one step back; from the first step to the
 * main menu. All steps sit on a "notebook page" (spiral rings, a ribbon with the level code), so the screen never looks like
 * the main menu.
 * ========================================================================= */

// The level accent of the Vocabulary screen: the chosen level's color, neutral before a level is chosen (showScreen calls it too).
function vocabAccent() {
  if (state.vocab.level) document.body.dataset.level = state.vocab.level;
  else delete document.body.dataset.level;
}

// "55 words" / "1 word".
function vocabCount(n) {
  return t(n === 1 ? 'vocabWordsOne' : 'vocabWords', { n });
}

// The small line under the title: what to choose, or (on the list) what is shown and how many words it has.
// result: the list (vocabularyWords) when the step is the list, else null.
function vocabSub(result) {
  const v = state.vocab;
  if (v.step === 'level') return t('vocabLevelTitle');
  if (v.step === 'theme') return t('topicTitle');
  const count = result.total ? ` · ${vocabCount(result.total)}` : '';
  return (v.type ? t(`type.${v.type}`) : t('vocabButton')) + count;
}

// One word of the list: the word, then one line for each word type: the type in italics (accent color), a dot, the meaning.
// No word type is underlined: the list shows every type of the word, not the one a game uses.
function vocabRow(w) {
  return el('li', {}, [
    el('span', { class: 'word', text: w.word }),
    ...w.senses.map((s) => el('p', { class: 'vocab-sense' }, [el('i', { class: 'vocab-type', text: s.type }), ` · ${s.meaning}`])),
  ]);
}

// The tabs of the list: one for each difficulty that has words. Arrow keys, Home and End move between them.
function vocabTabs(result, current) {
  const tabs = el('div', { class: 'vocab-tabs', role: 'tablist' });
  result.blocks.forEach((block, i) => {
    const name = t(`difficulty.${block.difficulty}`);
    const on = block === current;
    const btn = el('button', {
      type: 'button',
      class: `vocab-tab${on ? ' is-on' : ''}`,
      role: 'tab',
      'aria-selected': String(on),
      'aria-label': `${name}, ${vocabCount(block.words.length)}`,
      tabindex: on ? '0' : '-1',
      text: name,
    });
    btn.addEventListener('click', () => selectVocabTab(block.difficulty, false));
    btn.addEventListener('keydown', (e) => {
      const to = { ArrowLeft: i - 1, ArrowRight: i + 1, Home: 0, End: result.blocks.length - 1 }[e.key];
      if (to === undefined || !result.blocks[to]) return;
      e.preventDefault();
      selectVocabTab(result.blocks[to].difficulty, true);
    });
    tabs.append(btn);
  });
  return tabs;
}

function selectVocabTab(difficulty, focus) {
  state.vocab.tab = difficulty;
  renderVocab(false);
  if (focus) $('#vocab-list .vocab-tab.is-on').focus();
}

// The four question type buttons (shown above the tabs after "Separate words by question type"): one pressed at most.
function vocabKinds() {
  const box = el('div', { class: 'vocab-kinds' });
  CONFIG.TYPES.forEach((ty) => {
    const btn = el('button', {
      type: 'button',
      class: 'vocab-kind',
      'aria-pressed': String(state.vocab.type === ty.id),
      'data-type': ty.id,
      text: t(`type.${ty.id}`),
    });
    btn.addEventListener('click', () => selectVocabKind(ty.id));
    box.append(btn);
  });
  return box;
}

// A type button keeps only that question type's words; the pressed one again shows all types. The focus stays on the button.
function selectVocabKind(id) {
  const v = state.vocab;
  v.type = v.type === id ? null : id;
  renderVocab(false);
  $(`#vocab-list .vocab-kind[data-type="${id}"]`).focus({ preventScroll: true });
}

// The button at the end of the list: shows the type buttons (the page goes back to the top, where they are) or hides them (all types again).
function toggleVocabKinds() {
  const v = state.vocab;
  v.showTypes = !v.showTypes;
  if (!v.showTypes) v.type = null;
  renderVocab();
  if (v.showTypes) $('#vocab-list .vocab-kind').focus({ preventScroll: true });
}

// The list: the type buttons (when shown), the tabs and the words of the open tab, or one muted line when there are none; then the button at the end.
function renderVocabList(result) {
  const v = state.vocab;
  const box = $('#vocab-list');
  box.replaceChildren();
  if (v.showTypes) box.append(vocabKinds());
  if (!result.total) {
    box.append(el('p', { class: 'vocab-empty', text: t('vocabEmpty') }));
  } else {
    const block = result.blocks.find((b) => b.difficulty === v.tab) || result.blocks[0];
    v.tab = block.difficulty;
    box.append(vocabTabs(result, block), el('ul', { class: 'vocab-words has-tabs', lang: 'en', role: 'tabpanel' }, block.words.map(vocabRow)));
  }
  if (result.total || v.showTypes) {
    const more = el('button', { type: 'button', class: 'vocab-separate', text: t(v.showTypes ? 'vocabShowAll' : 'vocabSeparate') });
    more.addEventListener('click', toggleVocabKinds);
    box.append(more);
  }
}

// The topic step: one row for each topic with the number of its words; a topic with no real quiz is gray, with the "Not finished" tag.
function renderVocabTopics(box) {
  const v = state.vocab;
  const levelFinished = hasRealQuizzes(v.level, 'vocabulary');
  box.replaceChildren(...getTopics({ level: v.level, category: 'vocabulary' }).map((name, i) => {
    const unfinished = levelFinished && !hasRealQuizzes(v.level, 'vocabulary', i);
    const total = vocabularyWords(v.level, 'vocabulary', i).total;
    const row = el('button', { type: 'button', class: `vocab-topic${unfinished ? ' is-unfinished' : ''}` }, [
      el('span', { class: 'vocab-topic-name', lang: 'en', text: name }),
      unfinished
        ? el('span', { class: 'unfinished-tag', lang: state.lang, text: t('unfinishedTag') })
        : el('span', { class: 'vocab-topic-count', text: total ? String(total) : '' }),
    ]);
    if (total && !unfinished) row.setAttribute('aria-label', `${name}, ${vocabCount(total)}`);
    const go = () => {
      Object.assign(v, { theme: i, tab: null, type: null, showTypes: false, step: 'list' });
      renderVocab();
    };
    row.addEventListener('click', () => (unfinished ? openUnfinishedConfirm(go) : go()));
    return row;
  }));
}

// Shows the step in state.vocab.step. focus: move the reading position to the title (not when only the language, a tab or a type button changed).
function renderVocab(focus = true) {
  const v = state.vocab;
  vocabAccent();
  const topic = v.theme === null ? '' : getTopics({ level: v.level, category: 'vocabulary' })[v.theme];
  const onList = v.step === 'list';
  const title = $('#vocab-title');
  title.textContent = onList ? topic : t('vocabButton');
  title.lang = onList ? 'en' : state.lang;   // topic names are not translated
  const result = onList ? vocabularyWords(v.level, 'vocabulary', v.theme, v.type ? { type: v.type } : {}) : null;
  $('#vocab-sub').textContent = vocabSub(result);
  const ribbon = $('#vocab-ribbon');
  ribbon.hidden = !v.level;
  ribbon.textContent = v.level || '';
  const box = $('#vocab-buttons');
  box.hidden = onList;
  $('#vocab-list').hidden = !onList;
  box.className = v.step === 'theme' ? 'vocab-topics' : '';
  if (v.step === 'level') {
    renderLevelGroups(box, (item) => {
      Object.assign(v, { level: item.id, theme: null, type: null, tab: null, showTypes: false, step: 'theme' });
      renderVocab();
    });
  } else if (v.step === 'theme') {
    renderVocabTopics(box);
  } else {
    renderVocabList(result);
  }
  if (focus) {
    window.scrollTo(0, 0);
    title.focus({ preventScroll: true });
  }
}

// The Word list button: always starts at the first step.
function openVocab() {
  Object.assign(state.vocab, { step: 'level', level: null, theme: null, type: null, tab: null, showTypes: false });
  showScreen('vocab');
  renderVocab();
}

// Back: one step back (the list: to the topics); from the first step to the main menu.
function vocabBack() {
  const v = state.vocab;
  if (v.step === 'level') {
    showScreen('level');
    return;
  }
  v.step = { list: 'theme', theme: 'level' }[v.step];
  renderVocab();
}

// The language changed while the screen was showing: its texts change in place.
function refreshVocab() {
  renderVocab(false);
}

function initVocab() {
  $('#vocab-btn-icon').innerHTML = ICONS.book;
  $('#vocab-btn').addEventListener('click', openVocab);
  $('#vocab-back').addEventListener('click', vocabBack);
}
