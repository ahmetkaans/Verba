/* js/menu-tree.js - the menu tree panel; also the pop-up listeners (initModal)
   Provides: treeScreenLabel, treeSteps, renderTree, openTree, closeTree, initTree, initModal, TREE_STEPS, treeCloseTimer
   Needs: CONFIG, el, state, $, t, ICONS, getTopics, breadcrumbParts, showScreen, SCREEN_DEPTH, HISTORY_SCREENS, backToHistoryList, settingsFrom,
          closeSettings, vocabShowStep, openHomeConfirm, updateInert, closeModal, modalState, bhOverlayOpened, bhOverlayClosed */
'use strict';
/* =========================================================================
 * MENU TREE  (the student's path through the menu; a chosen step opens that menu screen)
 * ========================================================================= */
const TREE_STEPS = [
  { screen: 'level' },
  { screen: 'category' },
  { screen: 'topic' },
  { screen: 'type' },
  { screen: 'difficulty' },
];
let treeCloseTimer = null;

// The name of a screen for the "Opened from" step of the Settings tree: the path of a quiz screen, or the name of the page.
function treeScreenLabel(name) {
  if (!name || name === 'level') return t('mainMenu');
  if (name === 'results') return t('resultsTitle');
  if (name === 'vocab') return t('vocabButton');
  if (HISTORY_SCREENS.includes(name)) return t('historyTitle');
  return breadcrumbParts().slice(0, SCREEN_DEPTH[name]).join(' › ') || t('mainMenu');
}

// The steps of the tree for the screen being shown (owner, 2026-11-21: the tree opens on EVERY screen with the top bar, a SHORT one where there is no quiz path):
// [{ cap, value, chosen, current, onClick }]. The quiz screens show Level, Category, Topic, Question type and Difficulty; the Word list shows Level and Topic;
// the Settings page shows "Opened from" and Settings; the History screens show History and "A play". A chosen step opens that place; the current one only closes the tree.
function treeSteps() {
  const screen = state.screen;
  if (screen === 'vocab') {
    const v = state.vocab;
    const topic = v.theme === null ? null : getTopics({ level: v.level, category: 'vocabulary' })[v.theme];
    return [
      { cap: t('step.level'), value: v.level, chosen: true, current: false, onClick: () => vocabShowStep('theme') },
      { cap: t('step.topic'), value: topic, chosen: topic !== null, current: true, onClick: () => vocabShowStep('list') },
    ];
  }
  if (screen === 'settings') {
    return [
      { cap: t('treeOpenedFrom'), value: treeScreenLabel(settingsFrom), chosen: true, current: false, onClick: closeSettings },
      { cap: t('settings'), value: '', chosen: true, current: true, onClick: null },
    ];
  }
  if (HISTORY_SCREENS.includes(screen)) {
    const onPlay = screen === 'history-detail';
    return [
      { cap: t('historyTitle'), value: '', chosen: true, current: !onPlay, onClick: onPlay ? backToHistoryList : null },
      { cap: t('treePlay'), value: '', chosen: onPlay, current: onPlay, onClick: null },
    ];
  }
  const values = breadcrumbParts();
  const depth = Math.min(SCREEN_DEPTH[screen], TREE_STEPS.length); // how many steps are chosen on this screen
  const current = Math.min(depth, TREE_STEPS.length - 1);          // the step being chosen (the last one on results)
  return TREE_STEPS.map((step, i) => ({
    cap: t(`step.${step.screen}`),
    value: values[i],
    chosen: i < depth,
    current: i === current,
    onClick: () => { if (step.screen !== state.screen) showScreen(step.screen); },
  }));
}

function renderTree() {
  $('#tree-list').replaceChildren(...treeSteps().map((s, i) => {
    const value = el('span', { class: 'val', text: s.chosen ? (s.value || '') : t('notChosen') });
    if (s.current) value.append(el('span', { class: 'tree-here', text: t('youAreHere') }));
    const btn = el('button', { type: 'button', class: 'tree-step' }, [el('span', { class: 'cap', text: s.cap }), value]);
    if (s.current) btn.setAttribute('aria-current', 'step');
    if (s.chosen) {
      btn.addEventListener('click', () => {
        closeTree();
        if (s.onClick) s.onClick();
      });
    } else {
      btn.disabled = true;
    }
    const cls = [s.current ? 'is-current' : '', s.chosen ? '' : 'is-pending'].join(' ').trim();
    return el('li', { class: cls, style: `--depth:${i};--i:${i}` }, [btn]);
  }));
}

function openTree() {
  clearTimeout(treeCloseTimer);
  renderTree();
  const overlay = $('#tree-overlay');
  overlay.hidden = false;
  void overlay.offsetWidth; // let the browser draw the closed position first, so the slide-in plays
  overlay.classList.add('is-open');
  updateInert();
  bhOverlayOpened('tree'); // the browser's Back button closes the tree first (js/browser-history.js)
  $('#tree-close').focus();
}

function closeTree() {
  const overlay = $('#tree-overlay');
  if (overlay.hidden) return;
  overlay.classList.remove('is-open');
  updateInert();
  bhOverlayClosed();
  clearTimeout(treeCloseTimer);
  treeCloseTimer = setTimeout(() => { overlay.hidden = true; }, CONFIG.TREE_CLOSE_MS); // a timer, so it also hides with reduced motion
  $('#tree-btn').focus(); // back to the button that opened it (a click doesn't focus buttons in every browser)
}

function initTree() {
  const home = $('#home-btn');
  home.innerHTML = ICONS.home;
  home.addEventListener('click', openHomeConfirm);
  const btn = $('#tree-btn');
  btn.innerHTML = ICONS.tree;
  btn.addEventListener('click', openTree);
  $('#tree-close').addEventListener('click', closeTree);
  $('#tree-overlay').addEventListener('click', (e) => { if (e.target === e.currentTarget) closeTree(); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#tree-overlay').hidden) closeTree();
  });
}

function initModal() {
  $('#modal-back').innerHTML = ICONS.back;
  $('#modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget && modalState.dismissible) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !$('#modal-overlay').hidden && modalState.dismissible) closeModal();
  });
}

