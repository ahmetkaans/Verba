/* js/init.js - start-up: the order in which the parts are started
   Provides: (none)
   Needs: initLanguage, recordInterruptedQuiz, wasReloaded, openReloadNotice, welcomeNeeded, openWelcome, refreshWelcome, initWhatsNew, applyStaticTexts, initSound, initTheme, showScreen, initMenus, initTree,
          initHistory, initVocab, initSettings, initViewPills, initModal, initBrowserHistory, initButtonRipple */
'use strict';
/* =========================================================================
 * INIT
 * ========================================================================= */
initLanguage();
recordInterruptedQuiz(); // every leftover "quiz in progress" note (a reload, a closed tab or browser) becomes a quit play in the history
// The welcome pop-up (first visit, or not finished yet) comes before the reload notice and instead of it. Both open before initTheme:
// the Halloween walker sees the open pop-up and waits for it.
if (welcomeNeeded()) openWelcome();
else if (wasReloaded()) openReloadNotice();
initTheme();
initSound();
initMenus();
initModal();
initTree();
initHistory();
initVocab();
initSettings(); // the Settings page is built once
refreshWelcome(); // the saved theme and SmartBoard choice are loaded now: the open welcome pop-up shows them
initViewPills();
initWhatsNew(); // the "What's new?" button next to Credits (js/versions.js)
applyStaticTexts();
showScreen('level');
initButtonRipple(); // the ripple on buttons for mouse users (js/ui-effects.js)
initBrowserHistory(); // the browser's Back and Forward buttons (js/browser-history.js); after the first screen is shown
