/* js/navigation.js - screens, the path line, the button builder (with the gray "not finished" buttons), difficulty buttons, the same-duration switch
   Provides: breadcrumbParts, refreshBreadcrumb, markTopbarButton, showScreen, showScreenRaw, renderButtons, getQuestionSeconds, setSameDuration,
             renderDifficultyButtons, SCREEN_DEPTH
   Needs: bhNavigate, walkerModalClosed, stopConfetti, clearQuizRun, HISTORY_SCREENS, vocabAccent, CONFIG, el, findById, savePref, state, $, t, getTopics, renderCategoryButtons,
          renderTopicButtons, openUnfinishedConfirm, refreshSettings, startQuiz */
'use strict';
/* =========================================================================
 * NAVIGATION / MENUS
 * ========================================================================= */
const SCREEN_DEPTH = { level: 0, category: 1, topic: 2, type: 3, difficulty: 4, quiz: 5, results: 5 };

function breadcrumbParts() {
  const nav = state.nav;
  return [
    nav.level,
    nav.category ? t(`category.${nav.category}`) : null,
    nav.topic !== null ? getTopics(nav)[nav.topic] : null,
    nav.type ? t(`type.${nav.type}`) : null,
    nav.difficulty ? `${t(`difficulty.${nav.difficulty}`)} (${t('secondsShort', { n: getQuestionSeconds() })})` : null,
  ];
}

// The path line (Level › Category › …) of the screen being shown.
function refreshBreadcrumb() {
  const crumb = $(`#screen-${state.screen} .breadcrumb`);
  if (crumb) crumb.textContent = breadcrumbParts().slice(0, SCREEN_DEPTH[state.screen]).join(' › ');
}

// Shows a screen and makes the browser's history match (bhNavigate, js/browser-history.js): every normal change of screen goes through here.
function showScreen(name) {
  showScreenRaw(name);
  bhNavigate();
}

// A top bar button: always shown. current = the page behind this button is the page you are on: the button is disabled (no click, no hover,
// no ripple), has aria-current="page" and the class is-current (a "pressed" look in layout.css, not the dimmed look of a disabled button).
function markTopbarButton(btn, current) {
  btn.hidden = false;
  btn.disabled = current;
  btn.classList.toggle('is-current', current);
  if (current) btn.setAttribute('aria-current', 'page'); else btn.removeAttribute('aria-current');
}

// Shows a screen only (no history step): used by showScreen and by the browser's Back and Forward (bhShow).
function showScreenRaw(name) {
  const onHistory = HISTORY_SCREENS.includes(name);
  const onVocab = name === 'vocab';   // the Vocabulary screen (js/vocab-list.js): its own path and level accent
  const onSettings = name === 'settings'; // the Settings page (js/settings.js): no path, neutral accent
  const leftSettings = state.screen === 'settings' && !onSettings;
  state.screen = name;
  stopConfetti();
  if (name !== 'quiz') clearQuizRun(); // the quiz is over or left: this tab removes its own note, so a closed tab or a reload is no longer a quit
  if (name !== 'difficulty' && !onHistory) state.nextHint = null; // the History screens keep the "Next" mark for the way back
  document.querySelectorAll('.screen').forEach((s) => { s.hidden = s.id !== `screen-${name}`; });
  // Level accent: neutral on the level screen, the History screens and the Settings page, the chosen level's color everywhere inside a level.
  if (onVocab) vocabAccent();
  else if (name === 'level' || onHistory || onSettings) delete document.body.dataset.level;
  else if (state.nav.level) document.body.dataset.level = state.nav.level;
  // Credits and the theme/mute bar are shown on every page except the game (quiz) page.
  $('#credits-footer').hidden = name === 'quiz';
  $('#topbar').hidden = name === 'quiz';
  // The top bar looks the same on every screen that has it (owner, 2026-11-21): Main menu, Word list, History, the menu tree and Settings, always all five.
  // The button of the page you are on looks "current" (pressed) and does nothing. The menu tree always opens: on the quiz screens it shows the quiz
  // path, on the Word list, the Settings page and the History screens a SHORT path (js/menu-tree.js, treeSteps()).
  markTopbarButton($('#vocab-btn'), onVocab);          // on the Word list
  markTopbarButton($('#home-btn'), name === 'level');  // on the main menu
  markTopbarButton($('#history-btn'), onHistory);      // on the History screens
  markTopbarButton($('#settings-btn'), onSettings);    // on the Settings page
  markTopbarButton($('#tree-btn'), false);             // the tree is never "current": it always opens
  if (leftSettings) walkerModalClosed();    // Trick or Treat turned on in Settings: the walker's few seconds start now
  refreshBreadcrumb();
  // These grids depend on the chosen level / category (the gray "not finished" buttons too): built each time they are shown.
  if (name === 'category') renderCategoryButtons();
  if (name === 'topic') renderTopicButtons();
  if (name === 'difficulty') renderDifficultyButtons();
  window.scrollTo(0, 0);
}

// item.unfinished: the part behind the button has no real questions yet. The button is grayed, carries a small tag, and
// asks "Go back / Go there" before it leads anywhere; it is a normal, clickable button (not disabled).
function renderButtons(container, items, onClick) {
  container.replaceChildren(...items.map((item) => {
    const btn = el('button', { class: 'menu-btn' }, [item.label]);
    if (item.lang) btn.lang = item.lang; // text that is not translated (topic names) says so
    if (item.sub) btn.append(el('small', { text: item.sub }));
    if (item.tag) {
      btn.classList.add('is-next');
      btn.append(el('span', { class: 'next-tag', text: item.tag }));
    }
    if (item.unfinished) {
      btn.classList.add('is-unfinished');
      btn.append(el('span', { class: 'unfinished-tag', lang: state.lang, text: t('unfinishedTag') }));
    }
    btn.addEventListener('click', () => (item.unfinished ? openUnfinishedConfirm(() => onClick(item)) : onClick(item)));
    return btn;
  }));
}

function getQuestionSeconds() {
  if (state.nav.sameDuration) return CONFIG.SAME_DURATION_SECONDS;
  return findById(CONFIG.DIFFICULTIES, state.nav.difficulty).seconds;
}

// The "same duration" switch lives on the Difficulty screen and in Settings; both always show this one value.
function setSameDuration(value, save = true) {
  state.nav.sameDuration = value;
  if (save) savePref('lg-same-duration', value ? '1' : '0');
  $('#same-duration-switch').checked = value;
  renderDifficultyButtons();
  refreshSettings();
}

function renderDifficultyButtons() {
  const items = CONFIG.DIFFICULTIES.map((d) => ({
    ...d,
    label: t(`difficulty.${d.id}`),
    sub: t('secondsShort', { n: state.nav.sameDuration ? CONFIG.SAME_DURATION_SECONDS : d.seconds }),
    tag: state.nextHint && state.nextHint.difficulty === d.id ? t('nextTag') : null,
  }));
  renderButtons($('#difficulty-buttons'), items, (d) => {
    state.nav.difficulty = d.id;
    startQuiz();
  });
}

