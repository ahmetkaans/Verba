/* js/results.js - the results screen
   Provides: statusLabel, renderResultsContent, renderResultsList, renderResultsTip, SHOW_ALL_KEY, showAllQuestions, updateViewPill, allCorrectCard,
             toggleViewPill, initViewPills, showResults
   Needs: launchConfetti, CONFIG, el, fmt, englishText, questionSpan, noteText, clampScore, state, $, t, questionText, loadPref, savePref, ICONS, renderHistoryDetail,
          correctAnswerText, showScreen, getNextExercise, stopTimer, recordPlay, resultsTips, tipElement */
'use strict';
/* =========================================================================
 * RESULTS
 * ========================================================================= */
function statusLabel(rec, graded, type) {
  const pts = (n) => (graded ? ` (${n > 0 ? '+' : ''}${fmt(n)})` : ` (${t('notGraded')})`);
  if (rec.status === 'correct') return `${t('status.correct')}${pts(rec.points)}`;
  if (rec.status === 'partial') return `${t(type === 'fill' ? 'status.misspelled' : 'status.partial')}${pts(rec.points)}`;
  if (rec.status === 'incorrect') return `${t('status.incorrect')}${pts(rec.points)}`;
  if (rec.status === 'skipped') return t('status.skipped');
  return t(rec.timedOut ? 'status.timedOut' : 'status.unanswered');
}

// Builds everything on the results screen from state.quiz. Runs again when the language changes on this screen
// (no timer, screen change or confetti involved).
function renderResultsContent() {
  const quiz = state.quiz;
  const counts = { correct: 0, partial: 0, incorrect: 0, skipped: 0, unanswered: 0 };
  quiz.records.forEach((r) => { counts[r.status]++; });
  const finalScore = clampScore(quiz.score);
  const type = state.nav.type;

  $('#results-score').replaceChildren(...(quiz.graded
    ? [el('span', { class: 'score-num', text: fmt(finalScore) }), el('span', { class: 'score-max', text: ` / ${CONFIG.SCORE_MAX}` })]
    : [el('span', { class: 'score-na', text: t('scoreNotGraded') })]));
  $('#results-summary').replaceChildren(
    el('li', { text: `${t('count.correct')}: ${counts.correct}` }),
    ...(counts.partial ? [el('li', { text: `${t(type === 'fill' ? 'count.misspelled' : 'count.partial')}: ${counts.partial}` })] : []),
    el('li', { text: `${t('count.incorrect')}: ${counts.incorrect}` }),
    el('li', { text: `${t('count.skipped')}: ${counts.skipped}` }),
    el('li', { text: `${t('count.unanswered')}: ${counts.unanswered}` }),
  );

  renderResultsList();

  $('#results-next').hidden = !getNextExercise(state.nav);   // hidden after the very last quiz
  renderResultsTip();
}

// ---- Which questions the cards show (owner, 2026-11-12) ----
// The results page and the History detail page show only the questions that were not fully correct, until the student switches
// the pill to all questions. One remembered choice for both pages (a setting like the language), so a change made on either page
// is the same everywhere.
const SHOW_ALL_KEY = 'lg-show-all'; // '1' = every question; anything else = only the questions that were not fully correct

function showAllQuestions() {
  return loadPref(SHOW_ALL_KEY, '0') === '1';
}

// Puts a view pill in its state. It is a plain button whose label says what a tap will show; the round number is how many cards
// that view has. It is always shown (owner, 2026-11-12), also when the play has no fully correct question, so the pages look the same.
// The button is updated in place, so it keeps the keyboard focus. `bar` = the .view-bar around it; `total` = all cards;
// `missed` = the cards that were not fully correct.
function updateViewPill(bar, { total, missed }) {
  const all = showAllQuestions();
  bar.hidden = false;
  const pill = bar.querySelector('.view-pill');
  pill.querySelector('.view-pill-icon').innerHTML = ICONS[all ? 'eyeOff' : 'eye'];
  pill.querySelector('.view-pill-label').textContent = t(all ? 'viewMistakesOnly' : 'viewAllQuestions');
  pill.querySelector('.view-pill-count').textContent = String(all ? missed : total);
  pill.classList.toggle('is-on', all);
}

// A card that says every answer was correct: what the list shows (in the mistakes-only view) when there is no mistake.
function allCorrectCard() {
  return el('li', { class: 'st-correct' }, [el('p', {}, [el('strong', { text: t('historyPerfect') })])]);
}

// The cards of the play that was just finished, in the order the questions were asked.
function renderResultsList() {
  const quiz = state.quiz;
  const all = showAllQuestions();
  const total = quiz.questions.length;
  const correct = quiz.records.filter((r) => r.status === 'correct').length;
  updateViewPill($('#results-view'), { total, missed: total - correct });
  $('#results-view-note').hidden = !(all && correct === 0);
  $('#results-view-note').textContent = t('noRightYet');
  const cards = quiz.questions.map((q, i) => ({ q, i, rec: quiz.records[i] })).filter(({ rec }) => all || rec.status !== 'correct').map(({ q, i, rec }) => {
    const row = (label, value) => el('p', {}, [el('span', { class: 'label', text: `${label}: ` }), value]);
    const children = [
      el('p', {}, [el('strong', {}, [`${t('questionNumber', { n: i + 1 })} `, questionSpan(questionText(q))])]),
      row(t('yourAnswer'), englishText(rec.userAnswer ?? '—')),
      row(t('correctAnswer'), englishText(correctAnswerText(q))),
      row(t('result'), statusLabel(rec, quiz.graded, q.type)),
    ];
    if (rec.note) children.push(row(t('note'), noteText(rec.note)));
    if (rec.extensionUsed) {
      children.push(row(t('extraTime'), quiz.graded ? `${t('used')} (${fmt(rec.penalty)})` : t('used')));
    }
    children.push(row(t('explanation'), englishText(q.explanation)));
    return el('li', { class: `st-${rec.status}` }, children);
  });
  $('#results-list').replaceChildren(...(cards.length ? cards : [allCorrectCard()]));
}

// A tap on a view pill: the choice is saved and both pages follow it; the page stays where it is.
function toggleViewPill(render) {
  savePref(SHOW_ALL_KEY, showAllQuestions() ? '0' : '1');
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
}

function initViewPills() {
  $('#results-view-pill').addEventListener('click', () => toggleViewPill(renderResultsList));
  $('#history-view-pill').addEventListener('click', () => toggleViewPill(renderHistoryDetail));
}
// The one tip about the play just finished (a new best, or a retry tip as a sentence only: the Retry button is right above it).
// Nothing for a quiz that was not recorded.
function renderResultsTip() {
  const tips = state.quiz && state.quiz.recorded ? resultsTips(state.quiz.playAt) : [];
  $('#results-tip').hidden = tips.length === 0;
  $('#results-tip-list').replaceChildren(...tips.map(tipElement));
}

function showResults() {
  stopTimer();
  const quiz = state.quiz;
  recordPlay();
  renderResultsContent();
  showScreen('results');
  const finalScore = clampScore(quiz.score);
  const minScore = state.nav.type === 'match' ? CONFIG.CONFETTI_MIN_MATCH_SCORE : CONFIG.CONFETTI_MIN_SCORE;
  if (quiz.graded && finalScore >= minScore) launchConfetti();
}

