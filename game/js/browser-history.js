/* js/browser-history.js - the browser's Back and Forward buttons: every screen (and every open pop-up or the menu tree) is a step in the browser's history
   Provides: BH, bhView, bhSame, bhFail, bhPush, bhReplace, bhGo, bhBack, bhDo, bhFlush, bhNavigate, bhNavNow, bhOverlayOpened, bhOverlayClosed, bhCloseOverlayByBack,
             bhShow, bhApply, bhPop, initBrowserHistory
   Needs: state, historyView, modalState, $, closeModal, closeTree, requestQuit, showScreenRaw, renderVocab, renderHistoryList, renderHistoryDetail,
          renderResultsContent */
'use strict';
/* =========================================================================
 * BROWSER HISTORY  (README.md, Roadmap item 15; the owner's answers, 2026-11-21)
 * The game is one page, so the browser's Back button used to leave it. Now each view is a step in the browser's history, added with
 * history.pushState and the SAME web address (no # in it). A view is a screen, plus an open pop-up or the menu tree (an "overlay").
 *   - showScreen() ends with bhNavigate(): a new screen adds a step, EXCEPT that going to the screen of the PREVIOUS step is a
 *     history.back() (so the game's own Back buttons walk back through the history instead of piling up steps), and the quiz step is
 *     replaced by the next view (results, or the difficulty screen after Quit).
 *   - openModal / openTree call bhOverlayOpened (a step); closeModal / closeTree call bhOverlayClosed (back one step).
 *   - history.back() and history.go() are asynchronous: until their popstate arrives (BH.pending), the next history change waits in a queue.
 *   - The browser's Back / Forward (popstate) show the view of that step (bhApply): Back closes a pop-up first (a pop-up that must be
 *     answered, Time out and Game over, stays); Back during a quiz asks "Quit quiz?"; a quiz step, or a results step whose play is gone,
 *     is stepped over, so Forward there stays where it is.
 *   - Steps of an earlier page load (after a reload) are walls: Back keeps going until it leaves the game.
 * Everything is inside try/catch: if the browser refuses (Safari on a file), BH.on becomes false and the game works as before.
 * ========================================================================= */
const BH = {
  on: false,        // the feature works (false before init and after any error)
  session: '',      // a random id of this page load; every step carries it
  idx: 0,           // the step being shown
  views: [],        // views[i] = what step i shows (see bhView)
  pending: 0,       // our own history.back / history.go calls whose popstate has not arrived yet
  queue: [],        // history changes that wait for those popstates
  timer: null,      // safety: clears a pending call whose popstate never came
  byBack: false,    // true while a pop-up is being closed by the browser's Back (its step is already gone)
  walls: 0,         // how many steps of an earlier page load Back has gone through
};

// What a step shows: the screen, an open overlay ('modal' or 'tree'), the Word list step, the History play.
function bhView(overlay = null) {
  const v = state.vocab;
  return {
    screen: state.screen,
    overlay,
    vocab: state.screen === 'vocab' ? { step: v.step, level: v.level, theme: v.theme } : null,
    openId: state.screen === 'history-detail' ? historyView.openId : null,
  };
}

// The same view? On the Word list topic step the level tab is not a difference (a tab only changes the step in place).
function bhSame(a, b) {
  if (!a || !b || a.screen !== b.screen || a.overlay !== b.overlay || a.openId !== b.openId) return false;
  if (!a.vocab || !b.vocab) return !a.vocab && !b.vocab;
  return a.vocab.step === b.vocab.step && (a.vocab.step === 'theme' || (a.vocab.level === b.vocab.level && a.vocab.theme === b.vocab.theme));
}

function bhFail() {
  BH.on = false;
  BH.queue = [];
}

function bhPush(view) {
  const i = BH.idx + 1;
  try {
    history.pushState({ bh: BH.session, i }, '');
  } catch (err) {
    bhFail();
    return;
  }
  BH.views.length = i;
  BH.views.push(view);
  BH.idx = i;
}

function bhReplace(view) {
  BH.views[BH.idx] = view;
  try {
    history.replaceState({ bh: BH.session, i: BH.idx }, '');
  } catch (err) {
    bhFail();
  }
}

// Our own move in the history: its popstate must not be treated as a press of the browser's button.
function bhGo(delta) {
  BH.pending += 1;
  clearTimeout(BH.timer);
  BH.timer = setTimeout(() => { BH.pending = 0; bhFlush(); }, 600);
  try {
    history.go(delta);
  } catch (err) {
    BH.pending -= 1;
    bhFail();
  }
}

function bhBack() {
  bhGo(-1);
}

// A history change now, or after the pending popstate.
function bhDo(fn) {
  if (BH.pending > 0) BH.queue.push(fn);
  else fn();
}

function bhFlush() {
  while (BH.queue.length && BH.pending === 0) {
    const fn = BH.queue.shift();
    try {
      fn();
    } catch (err) {
      bhFail();
    }
  }
}

// showScreen() has shown a screen (or a Word list / History step changed): make the history match.
function bhNavigate() {
  if (!BH.on) return;
  const view = bhView();
  bhDo(() => bhNavNow(view));
}

function bhNavNow(view) {
  const cur = BH.views[BH.idx];
  if (!cur) return;
  if (cur.overlay) {                      // a pop-up step is still on top: take it away first
    bhBack();
    bhDo(() => bhNavNow(view));
    return;
  }
  if (bhSame(cur, view)) {                // the same view again: only keep the step up to date
    bhReplace(view);
    return;
  }
  const prev = BH.views[BH.idx - 1];
  if (prev && !prev.overlay && bhSame(prev, view)) {   // the screen of the previous step: that is Back
    bhBack();
    return;
  }
  if (cur.screen === 'quiz') {            // the quiz step is replaced (results, or the difficulty screen after Quit)
    bhReplace(view);
    return;
  }
  bhPush(view);
}

function bhOverlayOpened(kind) {
  if (!BH.on) return;
  const view = bhView(kind);
  bhDo(() => {
    const cur = BH.views[BH.idx];
    if (cur && cur.overlay) return;       // another pop-up replaced the open one: still one step
    bhPush(view);
  });
}

function bhOverlayClosed() {
  if (!BH.on || BH.byBack) return;
  bhDo(() => {
    const cur = BH.views[BH.idx];
    if (cur && cur.overlay) bhBack();
  });
}

// The browser's Back pressed while a pop-up or the tree is open: close it the way the pop-up's own "no" does.
// Returns false when it must stay (Time out, Game over: the player has to choose).
function bhCloseOverlayByBack(overlay) {
  BH.byBack = true;
  try {
    if (overlay === 'tree') {
      closeTree();
    } else if (!$('#modal-overlay').hidden) {
      const dismiss = modalState.onDismiss || (modalState.dismissible ? closeModal : null);
      if (!dismiss) return false;
      dismiss();
    }
    return true;
  } finally {
    BH.byBack = false;
  }
}

// Shows a restorable view (without adding a step).
function bhShow(view) {
  try {
    if (view.vocab) Object.assign(state.vocab, view.vocab, { tab: null });
    if (view.screen === 'history' || view.screen === 'history-detail') historyView.openId = view.openId;
    showScreenRaw(view.screen);
    if (view.screen === 'vocab') renderVocab();
    else if (view.screen === 'history') renderHistoryList();
    else if (view.screen === 'history-detail') renderHistoryDetail();
    else if (view.screen === 'results') renderResultsContent();
  } catch (err) {
    showScreenRaw('level');
  }
}

// The browser moved to step i (from step fromIdx).
function bhApply(i, fromIdx) {
  const from = BH.views[fromIdx];
  const target = BH.views[i];
  const back = i < fromIdx;
  if (target.overlay) {                   // Forward onto a pop-up step: it cannot be opened again, so step back
    history.back();
    return;
  }
  if (from && from.overlay) {             // Back out of a pop-up or the tree: close it
    if (!bhCloseOverlayByBack(from.overlay)) bhGo(1);   // it must be answered: its step is put back
    return;
  }
  if (back && state.screen === 'quiz' && state.quiz && target.screen !== 'quiz') {
    bhGo(1);                              // stay on the quiz and ask "Quit quiz?" (its step is added when the move has finished)
    requestQuit();
    return;
  }
  if (target.screen === 'quiz' || (target.screen === 'results' && !state.quiz)) {   // gone: step over it
    if (state.screen === 'quiz' && target.screen === 'quiz') return;
    if (i > 0) history.back();
    return;
  }
  bhShow(target);
}

function bhPop(e) {
  if (!BH.on) return;
  try {
    const st = e.state;
    const mine = st && st.bh === BH.session && BH.views[st.i];
    if (BH.pending > 0) {                 // the end of one of our own moves
      BH.pending -= 1;
      if (mine) BH.idx = st.i;
      if (BH.pending === 0) {
        clearTimeout(BH.timer);
        bhFlush();
      }
      return;
    }
    if (!mine) {                          // a step of an earlier page load: keep going, so Back leaves the game
      if (BH.walls < 200) {
        BH.walls += 1;
        history.back();
      }
      return;
    }
    BH.walls = 0;
    const fromIdx = BH.idx;
    BH.idx = st.i;
    bhApply(st.i, fromIdx);
  } catch (err) {
    bhFail();
  }
}

function initBrowserHistory() {
  if (!(window.history && typeof history.pushState === 'function')) return;
  try {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  } catch (err) { /* not important */ }
  BH.session = `${Date.now().toString(36)}${Math.random().toString(36).slice(2)}`;
  try {
    history.replaceState({ bh: BH.session, i: 0 }, '');   // this page load's first step: the main menu
  } catch (err) {
    return;                               // the browser refuses: the game works as before
  }
  BH.views = [bhView()];
  BH.idx = 0;
  BH.on = true;
  window.addEventListener('popstate', bhPop);
  if (!$('#modal-overlay').hidden) bhOverlayOpened('modal');   // the reload notice is already open
}
