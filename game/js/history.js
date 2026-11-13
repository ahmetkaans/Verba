/* js/history.js - the history of plays: one record per finished real quiz, and one per real quiz cut short (a reload, a closed tab or browser); saved in the browser
   Provides: HISTORY_KEY, HISTORY_BACKUP_KEY, HISTORY_VERSION, QUIZ_RUN_KEY, ownQuizRunKey, newPlayId, buildPlayRecord, loadHistory, saveHistory,
             clearHistory, recordPlay, saveQuizRun, clearQuizRun, buildQuitRecord, quizRunKeys, addQuitPlay, recordInterruptedQuiz
   Needs: CONFIG, state, quizIsReal, questionText, correctAnswerText, getTopics, getQuestionSeconds, clampScore, recordStats */
'use strict';
/* =========================================================================
 * HISTORY  (recording only for now; README.md, "History")
 * Saved in localStorage "lg-history" as { v, plays }: plays are newest first, at most CONFIG.HISTORY_MAX.
 * A record keeps the numbers of the results screen, the missed questions (everything not fully correct) and, since 2026-11-12, the correct ones (`correct`, optional: older records do not have it).
 * ========================================================================= */
const HISTORY_KEY = 'lg-history';
const HISTORY_BACKUP_KEY = 'lg-history-backup'; // the old text of a damaged list is kept here (one slot), never thrown away silently
const HISTORY_VERSION = 1;

function newPlayId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
}

// The record of the quiz that just finished (quiz = state.quiz, nav = state.nav). Notes are kept as { key, params }
// (not as a sentence), so they can be shown in either language later; the question, answers and explanation are English.
function buildPlayRecord(quiz, nav) {
  const counts = { correct: 0, partial: 0, incorrect: 0, skipped: 0, unanswered: 0 };
  quiz.records.forEach((r) => { counts[r.status]++; });
  // Every question of the play, in the order it was asked (n = its place in that order): the ones that were not fully correct
  // go in `missed` (the Tips code and the History screens read it), the fully correct ones in `correct` (owner, 2026-11-12: the
  // student can choose to see them too). Both lists have the same shape.
  const missed = [];
  const correct = [];
  quiz.questions.forEach((q, i) => {
    const rec = quiz.records[i];
    (rec.status === 'correct' ? correct : missed).push({
      n: i + 1,
      type: q.type,
      status: rec.status,
      timedOut: rec.timedOut,
      question: questionText(q),
      userAnswer: rec.userAnswer,
      correctAnswer: correctAnswerText(q),
      note: rec.note,
      points: rec.points,
      penalty: rec.penalty,
      extensionUsed: rec.extensionUsed,
      explanation: q.explanation,
    });
  });
  return {
    id: quiz.playId || newPlayId(),               // the identity the game got when it started (js/quiz-flow.js), so a quit row of the same game can be replaced
    at: Date.now(),
    end: 'finished',                              // room for 'quit' later
    level: nav.level,
    category: nav.category,
    topic: nav.topic,
    topicName: getTopics(nav)[nav.topic],
    type: nav.type,
    difficulty: nav.difficulty,
    seconds: getQuestionSeconds(),
    sameDuration: nav.sameDuration,
    graded: quiz.graded,
    score: clampScore(quiz.score),
    max: CONFIG.SCORE_MAX,
    counts,
    total: quiz.questions.length,
    extensions: quiz.records.filter((r) => r.extensionUsed).length,
    over: quiz.over,
    missed,
    correct,
  };
}

// The saved list as { plays }, or null when it must not be written: the storage is blocked, or the list was saved by a
// newer version of the game (left alone, so an update can't wipe it). A damaged list is kept in the backup slot and a fresh one starts.
function loadHistory() {
  let text;
  try { text = localStorage.getItem(HISTORY_KEY); } catch (e) { return null; }
  if (text === null) return { plays: [] };
  try {
    const data = JSON.parse(text);
    if (data && data.v === HISTORY_VERSION && Array.isArray(data.plays)) return { plays: data.plays };
    if (data && typeof data.v === 'number' && data.v > HISTORY_VERSION) return null;
  } catch (e) { /* damaged: handled below */ }
  try { localStorage.setItem(HISTORY_BACKUP_KEY, text); } catch (e) { /* ignore */ }
  return { plays: [] };
}

// Saves the list (newest first). When the storage is full the oldest plays are dropped one by one until it fits.
// Returns false only when nothing could be saved.
function saveHistory(plays) {
  const list = plays.slice(0, CONFIG.HISTORY_MAX);
  while (list.length) {
    try {
      localStorage.setItem(HISTORY_KEY, JSON.stringify({ v: HISTORY_VERSION, plays: list }));
      return true;
    } catch (e) {
      list.pop();
    }
  }
  return false;
}

// "Clear history": removes every play (and the backup of a damaged list). Does not touch the overall result totals. saveHistory([])
// writes nothing for an empty list, so the saved list is removed instead. Returns false when the storage is blocked.
function clearHistory() {
  try {
    localStorage.removeItem(HISTORY_KEY);
    localStorage.removeItem(HISTORY_BACKUP_KEY);
    return true;
  } catch (e) {
    return false;
  }
}

// Called by showResults(): saves the play that just finished. Only real quizzes, once per quiz (a language switch on the
// results screen does not record it again). It never throws: the results screen must always show.
function recordPlay() {
  try {
    const quiz = state.quiz;
    if (!quiz || quiz.recorded || !quizIsReal(state.nav)) return false;
    quiz.recorded = true;
    const play = buildPlayRecord(quiz, state.nav);
    quiz.playAt = play.at; // the results screen shows a tip only when the last play of the totals is this one
    recordStats(play); // the overall result has its own totals: it does not depend on the history being saved (js/overall.js)
    const history = loadHistory();
    if (!history) return false;
    // A quit play of the same game (made at a start-up while this game was still running in this tab) is replaced by the real result.
    history.plays = history.plays.filter((p) => !(p && p.end === 'quit' && p.id === play.id));
    history.plays.unshift(play);
    return saveHistory(history.plays);
  } catch (e) {
    return false;
  }
}

// ---- A quiz cut short: a reload, or a closed tab or browser ----
// While a real quiz is running, every game has its own small note ("this game is in progress, at question n") in localStorage, named
// with the game's identity (state.quiz.playId; owner's decision, 2026-11-13: a closed tab or browser is noticed too, not only a
// reload). The note is written once per question and removed by the tab that owns it when the quiz screen is left (finished, quit).
// At every start-up the game looks for notes that are left over: each one is a game that was cut short, and a "quit" play is added to
// the history. A tab never has a running game when it starts, so a leftover note is a dead game (or a game in another open tab, which
// cannot be told apart: that quit row corrects itself when the game finishes, see recordPlay()). Quit plays have no score and are
// never part of any calculation.
const QUIZ_RUN_KEY = 'lg-quiz-run';   // the notes are saved as QUIZ_RUN_KEY + ':' + the game's identity
let ownQuizRunKey = null;             // the name of the note this tab wrote last: the only one this tab ever removes

// Called by renderQuestion(): the player is now at this question of a real quiz.
function saveQuizRun() {
  try {
    const quiz = state.quiz;
    const nav = state.nav;
    if (!quiz || !quizIsReal(nav)) return;
    if (!quiz.playId) quiz.playId = newPlayId();
    ownQuizRunKey = `${QUIZ_RUN_KEY}:${quiz.playId}`;
    localStorage.setItem(ownQuizRunKey, JSON.stringify({
      id: quiz.playId, at: Date.now(), level: nav.level, category: nav.category, topic: nav.topic, topicName: getTopics(nav)[nav.topic], type: nav.type,
      difficulty: nav.difficulty, seconds: getQuestionSeconds(), sameDuration: nav.sameDuration, total: quiz.questions.length, question: quiz.index + 1,
    }));
  } catch (e) { /* storage blocked or full: nothing is noted */ }
}

// Removes this tab's own note, never another tab's.
function clearQuizRun() {
  if (ownQuizRunKey === null) return;
  const key = ownQuizRunKey;
  ownQuizRunKey = null;
  try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
}

function buildQuitRecord(note) {
  return {
    id: typeof note.id === 'string' && note.id ? note.id : newPlayId(), at: note.at, end: 'quit',
    level: note.level, category: note.category, topic: note.topic, topicName: note.topicName, type: note.type, difficulty: note.difficulty,
    seconds: note.seconds, sameDuration: note.sameDuration, total: note.total, quitIn: note.question,
  };
}

// The names of the notes in the storage (this tab's own included).
function quizRunKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith(`${QUIZ_RUN_KEY}:`)) keys.push(key);
  }
  return keys;
}

// Puts a quit play in the list by its time (newest first), or updates the quit play of the same game. A game that is already in the
// history as a finished play is left alone. Returns true when the list changed.
function addQuitPlay(plays, quit) {
  const same = plays.findIndex((p) => p && p.id === quit.id);
  if (same !== -1) {
    if (plays[same].end !== 'quit') return false;
    plays.splice(same, 1);
  }
  let at = plays.findIndex((p) => p && Number(p.at) < quit.at);
  if (at === -1) at = plays.length;
  plays.splice(at, 0, quit);
  return true;
}

// Called once at start-up. Every leftover note of a real quiz becomes a quit play (not only after a reload); the notes are removed
// once they are dealt with (a note that cannot be saved stays for the next start-up). Never throws.
function recordInterruptedQuiz() {
  try {
    const keys = quizRunKeys();
    if (!keys.length) return false;
    const shape = { id: 'string', level: 'string', category: 'string', topicName: 'string', type: 'string', difficulty: 'string', at: 'number', topic: 'number', total: 'number', question: 'number' };
    const notes = [];
    keys.forEach((key) => {
      let note = null;
      try { note = JSON.parse(localStorage.getItem(key)); } catch (e) { note = null; }
      const valid = note && Object.keys(shape).every((field) => typeof note[field] === shape[field]) && quizIsReal(note);
      if (valid) notes.push({ key, note });
      else localStorage.removeItem(key);          // damaged, wrong shape, or a quiz that is gone: nothing to record
    });
    if (!notes.length) return false;
    const history = loadHistory();
    if (!history) return false;                   // the saved history cannot be written now: the notes stay
    notes.sort((a, b) => a.note.at - b.note.at);
    let changed = false;
    notes.forEach(({ note }) => { if (addQuitPlay(history.plays, buildQuitRecord(note))) changed = true; });
    if (changed && !saveHistory(history.plays)) return false;
    notes.forEach(({ key }) => localStorage.removeItem(key));
    return changed;
  } catch (e) {
    return false;
  }
}
