/* js/vocab-list.js - the Vocabulary lists: which words a topic (or one quiz) tests, with their meanings (data in, lists out), and the Vocabulary screen
   Provides: vocabularyWords, vocabAccent, vocabCount, vocabSub, vocabRow, vocabTabs, selectVocabTab, renderVocabList, vocabLevelTabs, selectVocabLevel, renderVocabTopics, renderVocab, openVocab, vocabBack, refreshVocab, initVocab
   Needs: bhNavigate, CONFIG, QUESTION_BANK, GLOSSARY, ICONS, $, el, t, state, getTopics, hasRealQuizzes, showScreen,
          quizTargetWords, openUnfinishedConfirm, wordAudioButton, stopWordAudio, isLevelLocked, openLockedLevel */
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
 * Steps: Topic -> the list. The topic step shows five level tabs on the right edge of the notebook page (vocabLevelTabs; the
 * Word list button opens it on A1) and the topics of the chosen level as rows with the number of words; a topic with no real
 * questions is gray and asks "Go back / Go there", and a level with no real vocabulary quizzes (its tab is softly grayed) shows
 * "There are no words here yet." with the "Not finished" tag. The list shows every word of the topic under one tab for each
 * difficulty. Back goes one step back; from the topic step to the main menu. Both steps sit on a "notebook page" (spiral rings;
 * the list also has a ribbon with the level code), so the screen never looks like the main menu.
 * (Until 2026-11-19 there was a separate Level step with the main menu's level buttons; the owner replaced it with the tabs.
 * Until 2026-11-24 a button at the end of the list, "Separate words by question type", filtered the list by question type; the owner removed it.)
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
  if (v.step === 'theme') return `${v.level} · ${t(`levelName.${v.level}`)}`;
  const count = result.total ? ` · ${vocabCount(result.total)}` : '';
  return t('vocabButton') + count;
}

// One word of the list: the word, then one line for each word type: the type in italics (accent color), a dot, the meaning.
// No word type is underlined: the list shows every type of the word, not the one a game uses.
function vocabRow(w) {
  return el('li', {}, [
    el('div', { class: 'word-line' }, [el('span', { class: 'word', text: w.word }), wordAudioButton(w.word)]),
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

// The list: the tabs and the words of the open tab, or one muted line when there are none.
function renderVocabList(result) {
  const v = state.vocab;
  const box = $('#vocab-list');
  stopWordAudio();   // the list is built again (a tab or the language): a sound that is playing stops
  box.replaceChildren();
  if (!result.total) {
    box.append(el('p', { class: 'vocab-empty', text: t('vocabEmpty') }));
  } else {
    const block = result.blocks.find((b) => b.difficulty === v.tab) || result.blocks[0];
    v.tab = block.difficulty;
    box.append(vocabTabs(result, block), el('ul', { class: 'vocab-words has-tabs', lang: 'en', role: 'tabpanel' }, block.words.map(vocabRow)));
  }
}

// The level tabs on the right edge of the notebook page (owner's design from mock-ups, 2026-11-19): one tab for each level, the
// chosen one solid in its level color; a level with no real vocabulary quizzes is softly grayed. A tab only switches the level
// (no "Go back / Go there" question: nothing is lost). Up / Down arrows, Home and End move between the tabs.
function vocabLevelTabs(box) {
  const v = state.vocab;
  const levels = CONFIG.LEVELS;
  box.replaceChildren(...levels.map((l, i) => {
    const on = l === v.level;
    const finished = hasRealQuizzes(l, 'vocabulary');
    const btn = el('button', {
      type: 'button',
      class: `vocab-level-tab${on ? ' is-on' : ''}${finished ? '' : ' is-unfinished'}${isLevelLocked(l) ? ' is-locked' : ''}`,
      role: 'tab',
      'aria-selected': String(on),
      'aria-label': `${l}, ${t(`levelName.${l}`)}${isLevelLocked(l) ? `, ${t('lockedTag')}` : ''}`,
      tabindex: on ? '0' : '-1',
      'data-level': l,
      text: l,
    });
    btn.addEventListener('click', () => selectVocabLevel(l));
    btn.addEventListener('keydown', (e) => {
      const to = { ArrowUp: i - 1, ArrowDown: i + 1, Home: 0, End: levels.length - 1 }[e.key];
      if (to === undefined || !levels[to]) return;
      e.preventDefault();
      selectVocabLevel(levels[to]);
    });
    return btn;
  }));
}

// A level tab: shows the topics of that level; the reading position stays, the focus stays on the (new) chosen tab.
function selectVocabLevel(level) {
  if (isLevelLocked(level)) {   // a locked level (js/dev-lock.js): the developer password first
    openLockedLevel(level, () => selectVocabLevel(level));
    return;
  }
  Object.assign(state.vocab, { level, theme: null, tab: null });
  renderVocab(false);
  $('#vocab-levels .vocab-level-tab.is-on').focus({ preventScroll: true });
  bhNavigate();   // only keeps the current step up to date (a tab is not a step)
}

// The topic step: one row for each topic with the number of its words; a topic with no real quiz is gray, with the "Not finished" tag.
// A level with no real vocabulary quizzes shows one muted line and the tag instead of its placeholder topics.
function renderVocabTopics(box) {
  const v = state.vocab;
  const levelFinished = hasRealQuizzes(v.level, 'vocabulary');
  if (!levelFinished) {
    box.replaceChildren(
      el('p', { class: 'vocab-empty', text: t('vocabEmpty') }),
      el('span', { class: 'unfinished-tag vocab-level-tag', lang: state.lang, text: t('unfinishedTag') }),
    );
    return;
  }
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
      Object.assign(v, { theme: i, tab: null, step: 'list' });
      renderVocab();
      bhNavigate();   // the list is a step of the browser's history
    };
    row.addEventListener('click', () => (unfinished ? openUnfinishedConfirm(go) : go()));
    return row;
  }));
}

// Shows the step in state.vocab.step. focus: move the reading position to the title (not when only the language or a tab changed).
function renderVocab(focus = true) {
  const v = state.vocab;
  vocabAccent();
  const topic = v.theme === null ? '' : getTopics({ level: v.level, category: 'vocabulary' })[v.theme];
  const onList = v.step === 'list';
  const title = $('#vocab-title');
  title.textContent = onList ? topic : t('vocabButton');
  title.lang = onList ? 'en' : state.lang;   // topic names are not translated
  const result = onList ? vocabularyWords(v.level, 'vocabulary', v.theme) : null;
  $('#vocab-sub').textContent = vocabSub(result);
  const ribbon = $('#vocab-ribbon');
  ribbon.hidden = !onList;   // on the topic step the level tabs already show the level
  ribbon.textContent = v.level || '';
  $('#screen-vocab').dataset.step = v.step;
  const box = $('#vocab-buttons');
  box.hidden = onList;
  $('#vocab-list').hidden = !onList;
  box.className = 'vocab-topics';
  const tabs = $('#vocab-levels');
  tabs.hidden = onList;
  if (onList) {
    renderVocabList(result);
  } else {
    vocabLevelTabs(tabs);
    renderVocabTopics(box);
  }
  if (focus) {
    window.scrollTo(0, 0);
    title.focus({ preventScroll: true });
  }
}

// The Word list button: always starts at the topic step of the first level (A1); the level tabs change the level.
function openVocab() {
  Object.assign(state.vocab, { step: 'theme', level: CONFIG.LEVELS[0], theme: null, tab: null });
  showScreen('vocab');
  renderVocab();
}

// Back: one step back (the list: to the topics); from the first step to the main menu.
function vocabBack() {
  const v = state.vocab;
  if (v.step === 'theme') {
    showScreen('level');
    return;
  }
  v.step = 'theme';
  renderVocab();
  bhNavigate();   // back to the topics: the previous step of the browser's history
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
