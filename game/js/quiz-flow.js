/* js/quiz-flow.js - starting a quiz, the words pop-up, one question, answering, quitting
   Provides: startQuiz, questionTargets, quizTargetWords, glossarySenses, testedSenseIndex, wordRow, openWordPreview, currentQuestion, currentRecord,
             renderQuestion, updateScoreDisplay, submitAnswer, goNext, skipQuestion, requestQuit
   Needs: CONFIG, wordAudioButton, el, fmt, englishText, noteText, hashString, mulberry32, makeLorem, state, $, playSound, t, GLOSSARY,
          quizKey, getQuestions, prepareQuiz, correctAnswerText, showScreen, getQuestionSeconds, openModal,
          closeModal, startTimer, resumeTimer, pauseTimer, stopTimer, renderFillTap, RENDERERS, showResults, sinkWalker, saveQuizRun, newPlayId */
'use strict';
/* =========================================================================
 * QUIZ FLOW
 * ========================================================================= */
function startQuiz() {
  if (sinkWalker(startQuiz)) return; // Trick or Treat: a walker still on screen sinks into the ground first, then the quiz starts
  stopTimer();
  closeModal();
  const seed = Math.floor(Math.random() * 4294967296);   // a new random question order for every play (owner, 2026-11-12)
  const questions = prepareQuiz(getQuestions(state.nav), quizKey(state.nav), seed);
  state.quiz = {
    seed,
    playId: newPlayId(),                        // the game's identity: on its note, its quit row and its finished record (js/history.js)
    questions,
    index: 0,
    score: 0,                                   // raw running score, may go negative
    graded: !CONFIG.UNGRADED_TYPES.includes(state.nav.type),
    records: questions.map(() => ({
      status: 'unanswered',                     // correct | partial | incorrect | skipped | unanswered
      userAnswer: null,
      note: null,                               // { key, params } of a text (spellingWarning / pairsCorrect / alsoCorrect), shown by noteText()
      points: 0,                                // points from answering
      penalty: 0,                               // points lost to the time extension
      extensionUsed: false,
      timedOut: false,                          // true if this question ended the game
    })),
    timer: { totalMs: 0, remainingMs: 0, intervalId: null, lastTs: 0, extension: false, lastTickSecond: null },
    answered: false,                            // current question locked?
    over: false,
    recorded: false,                            // true once recordPlay() has saved this play in the history
    playAt: null,                               // the time of the play recordPlay() saved (the results screen shows a tip only for this play)
    ui: {},                                     // per-question renderer state
  };
  showScreen('quiz');
  // The "Words in this game" pop-up comes first (also on Retry); the timer starts when it closes.
  $('#quiz-question').replaceChildren();
  $('#quiz-feedback').hidden = true;
  $('#quiz-next').hidden = true;
  openWordPreview(() => { closeModal(); renderQuestion(); });
}

// The words ONE question tests: [{ word, type }]. type = the word type the question names (q.targetType / pair.type; needed
// when a word has several types), or undefined. q.target (optional on mc / fill) = the dictionary form when the answer is
// another form ("laughs" -> "laugh"). It works on a prepared question (mc: q.answer is the position of the right option) and
// on a question as stored in the bank (mc: the right option is options[0]), so a list can read the bank without shuffling it.
// This is the ONE rule for "which word does this question test": the words pop-up and the Vocabulary lists both use it.
function questionTargets(q) {
  if (q.type === 'mc') return [{ word: q.target || q.options[q.answer === undefined ? 0 : q.answer], type: q.targetType }];
  if (q.type === 'fill') return [{ word: q.target || q.answer, type: q.targetType }];
  if (q.type === 'tf') return [{ word: q.target, type: q.targetType }];
  if (q.type === 'match') return q.pairs.map((p) => ({ word: p.left, type: p.type }));
  return [];
}

// The words a quiz tests, in alphabetical order (not the order of the questions), without repeats: [{ word, type }].
// type = the word type used in this quiz, or null.
function quizTargetWords(questions) {
  const words = new Map();
  questions.forEach((q) => questionTargets(q).forEach(({ word, type }) => {
    if (word && !words.has(word)) words.set(word, { word, type: type || null });
  }));
  // Alphabetical, English rules, case ignored: the list must not follow the order of the questions (owner, 2026-11-12).
  return [...words.values()].sort((a, b) => a.word.localeCompare(b.word, 'en', { sensitivity: 'base' }));
}

// All senses of a word from GLOSSARY[level]: [{ type, meaning }]. An entry is one sense (object) or several
// (array, one per word type). Lorem quizzes get a lorem placeholder.
function glossarySenses(level, word) {
  const entry = (GLOSSARY[level] || {})[word.toLowerCase()];
  if (entry) return [].concat(entry);
  const L = makeLorem(mulberry32(hashString(`glossary|${word}`)));
  return [{ type: L.words(1)[0], meaning: L.sentence(3, 6, '') }];
}

// The meaning of a word that THIS quiz tests (owner, 2026-11-21; README "Confirmed decisions"): among the senses of the used word type, the one
// whose "for" tag matches the quiz key most exactly. A tag is a key prefix after "<LEVEL>|vocabulary|" ("3" = a theme, "3|tf" = its True or False
// quizzes, "3|tf|easy" = one quiz); a sense without a tag fits every quiz. Returns the index in senses (the first sense of that type when no tag
// matches; the check script reports such a quiz as an error). used = the word type the question names, or null.
function testedSenseIndex(senses, used, key) {
  const parts = key.split('|');
  const rest = parts.slice(2).join('|');
  let best = -1;
  let bestLength = -1;
  senses.forEach((s, i) => {
    if (used && s.type !== used) return;
    const tags = Array.isArray(s.for) ? s.for.filter(Boolean) : [];
    let length = -1;
    if (!tags.length || parts[1] !== 'vocabulary') length = 0;
    else tags.forEach((tag) => { if (rest === tag || rest.startsWith(`${tag}|`)) length = Math.max(length, tag.split('|').length); });
    if (length > bestLength) { bestLength = length; best = i; }
  });
  if (best < 0) best = senses.findIndex((s) => !used || s.type === used);
  return best;
}

// One row of the words pop-up: the word, then ALL its meanings (the Word list screen has its own rows, vocabRow in vocab-list.js).
// senses = [{ type, meaning, for? }]. When the word has more than one meaning, the meaning this quiz tests (testedSenseIndex) comes FIRST and ends with *
// (owner, 2026-11-21); a word with one meaning has no *. used = the word type the question names; key = the quiz key.
function wordRow(word, senses, used, key) {
  const tested = senses.length > 1 ? testedSenseIndex(senses, used, key) : -1;
  const ordered = tested >= 0 ? [senses[tested], ...senses.filter((s, i) => i !== tested)] : senses;
  return el('li', {}, [
    el('div', { class: 'word-line' }, [el('span', { class: 'word', text: word }), wordAudioButton(word)]),
    ...ordered.map((s, i) => el('p', { class: 'word-sense' }, [
      el('span', { class: 'word-type', text: s.type }),
      ` ${s.meaning}${tested >= 0 && i === 0 ? ' *' : ''}`,   // a no-break space: the * never stands alone at the start of a line
    ])),
  ]);
}

function openWordPreview(start) {
  const level = state.nav.level;
  const key = quizKey(state.nav);
  let anyStar = false;
  const list = el('ul', { class: 'word-list', lang: 'en' }, quizTargetWords(state.quiz.questions).map(({ word, type }) => {
    const senses = glossarySenses(level, word);
    if (senses.length > 1) anyStar = true;   // wordRow() puts a * on the tested meaning of such a word
    return wordRow(word, senses, type || senses[0].type, key);
  }));
  // When any word shows a *, the last line of the pop-up says what it means (English or Turkish, by the language setting).
  const body = anyStar ? el('div', {}, [list, el('p', { class: 'word-note', lang: state.lang, text: t('wordsStarNote') })]) : list;
  openModal({
    title: t('wordsTitle'),
    body,
    buttons: [{ label: t('start'), primary: true, onClick: start }],
    // The arrow leaves before the quiz begins: same place as Quit, the Difficulty screen (nothing was answered yet)
    onBack: () => { closeModal(); state.quiz = null; showScreen('difficulty'); },
    // The browser's Back button does the same as the arrow
    onDismiss: () => { closeModal(); state.quiz = null; showScreen('difficulty'); },
  });
}

function currentQuestion() {
  return state.quiz.questions[state.quiz.index];
}

function currentRecord() {
  return state.quiz.records[state.quiz.index];
}

function renderQuestion() {
  const quiz = state.quiz;
  const q = currentQuestion();
  quiz.answered = false;
  quiz.ui = {};
  $('#quiz-progress').textContent = t('questionOf', { n: quiz.index + 1, total: quiz.questions.length });
  updateScoreDisplay();
  $('#quiz-feedback').hidden = true;
  $('#quiz-next').hidden = true;
  const area = $('#quiz-question');
  area.replaceChildren();
  (q.type === 'fill' && state.smartBoard ? renderFillTap : RENDERERS[q.type])(q, area);
  startTimer(getQuestionSeconds(), false);
  saveQuizRun(); // a reload from here on is recorded as a quit in the history
}

function updateScoreDisplay() {
  const quiz = state.quiz;
  $('#quiz-score').textContent = quiz.graded ? `${t('score')}: ${fmt(quiz.score)}` : t('scoreNotGraded');
}

/*
 * outcome: 'correct' | 'partial' | 'incorrect'. points: what the answer earns (renderers compute it,
 * see questionPoints()). note: { key, params } of a text (spelling warning and pairs count for partial answers;
 * "Also correct" for a correct Fill answer typed in an accepted form).
 */
function submitAnswer(outcome, userAnswer, points, note = null) {
  const quiz = state.quiz;
  if (!quiz || quiz.answered) return;
  quiz.answered = true;
  stopTimer();

  const q = currentQuestion();
  const rec = currentRecord();
  rec.status = outcome;
  rec.userAnswer = userAnswer;
  rec.note = note;
  if (quiz.graded) {
    rec.points = points;
    quiz.score += rec.points;
  }
  updateScoreDisplay();
  playSound({ correct: 'correct', partial: 'partial', incorrect: 'wrong' }[outcome]);

  const area = $('#quiz-question');
  area.querySelectorAll('button, input').forEach((b) => { b.disabled = true; });
  // Renderers mark the right element(s) with .is-correct before calling submitAnswer.
  if (outcome === 'correct') area.querySelectorAll('.is-correct').forEach((node) => node.classList.add('pop'));

  const fb = $('#quiz-feedback');
  fb.className = `feedback ${{ correct: 'ok', partial: 'partial', incorrect: 'bad' }[outcome]}`;
  const heading = t({ correct: 'feedback.correct', partial: q.type === 'fill' ? 'feedback.almost' : 'feedback.partial', incorrect: 'feedback.incorrect' }[outcome]);
  const lines = [el('p', {}, [el('strong', { text: heading })])];
  if (note) lines.push(el('p', { text: noteText(note) }));
  // The answer and the explanation are English content: they carry lang="en" inside the (maybe Turkish) line.
  const labelled = (key, value) => el('p', {}, [`${t(key)}: `, englishText(value)]);
  if (outcome === 'correct') {
    // Say each fact once (README "Confirmed decisions", owner 2026-11-11): the note "Also correct: ..." already names
    // the answer, so a correct answer with that note has no "Answer" line.
    if (!(note && note.key === 'alsoCorrect')) lines.push(labelled('answer', correctAnswerText(q)));
  } else {
    lines.push(labelled('correctAnswer', correctAnswerText(q)));
    lines.push(labelled('explanation', q.explanation));
  }
  if (quiz.graded) lines.push(el('p', { class: 'points', text: `${t('points')}: ${points > 0 ? '+' : ''}${fmt(points)}` }));
  fb.replaceChildren(...lines);
  fb.hidden = false;

  const next = $('#quiz-next');
  next.textContent = t(quiz.index === quiz.questions.length - 1 ? 'seeResults' : 'next');
  next.hidden = false;
  next.focus();
}

function goNext() {
  const quiz = state.quiz;
  if (quiz.index < quiz.questions.length - 1) {
    quiz.index++;
    renderQuestion();
  } else {
    showResults();
  }
}

function skipQuestion() {
  const quiz = state.quiz;
  quiz.answered = true;
  currentRecord().status = 'skipped';
  goNext();
}

function requestQuit() {
  const quiz = state.quiz;
  const wasRunning = quiz.timer.intervalId !== null;
  pauseTimer();
  openModal({
    title: t('quitTitle'),
    body: t('quitBody'),
    buttons: [
      { label: t('cancel'), primary: true, onClick: () => { closeModal(); if (wasRunning) resumeTimer(); } },
      { label: t('quit'), onClick: () => { closeModal(); stopTimer(); state.quiz = null; showScreen('difficulty'); } },
    ],
    // The browser's Back button does the same as Cancel (the timer goes on)
    onDismiss: () => { closeModal(); if (wasRunning) resumeTimer(); },
  });
}

