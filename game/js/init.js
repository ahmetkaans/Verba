/* js/init.js - start-up: the order in which the parts are started
   Provides: (none)
   Needs: initLanguage, recordInterruptedQuiz, wasReloaded, openReloadNotice, applyStaticTexts, initSound, initTheme, showScreen, initMenus, initTree,
          initHistory, initVocab, initViewPills, initModal, initBrowserHistory */
'use strict';
/* =========================================================================
 * INIT
 * ========================================================================= */
initLanguage();
recordInterruptedQuiz(); // every leftover "quiz in progress" note (a reload, a closed tab or browser) becomes a quit play in the history
if (wasReloaded()) openReloadNotice(); // before initTheme: the Halloween walker sees the open pop-up and waits for it
initTheme();
initSound();
initMenus();
initModal();
initTree();
initHistory();
initVocab();
initViewPills();
applyStaticTexts();
showScreen('level');
initBrowserHistory(); // the browser's Back and Forward buttons (js/browser-history.js); after the first screen is shown
