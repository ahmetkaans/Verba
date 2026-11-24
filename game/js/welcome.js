/* js/welcome.js - the welcome pop-up: five pages shown once, on the first visit (and to a player of an earlier version who has not seen it)
   Provides: WELCOME, WELCOME_PAGES, WELCOME_SEEN_KEY, WELCOME_PAGE_KEY, WELCOME_BUILDERS, welcomeStorageWorks, welcomeNeeded, wel, welcomeIcon,
             welcomeLanguagePage, welcomeThemePage, welcomeSmartBoardPage, welcomeLevelChips, welcomeTourPage, welcomeGoodPage, welcomeGoToPage,
             renderWelcome, openWelcome, refreshWelcome, finishWelcome
   Needs: CONFIG, ICONS, THEMES, $, el, t, state, loadPref, savePref, openModal, closeModal, setLanguage, setTheme, setSmartBoard,
          currentTheme, halloweenOn, LANGS, LANG_NAMES */
'use strict';
/* =========================================================================
 * WELCOME POP-UP  (README.md "Welcome pop-up"; owner's idea 2026-11-23, mock-ups and decisions 2026-11-24)
 * Five pages in one pop-up: 1 Welcome + Language, 2 Theme, 3 SmartBoard mode, 4 What you can do, 5 Before you start.
 * The Language, Theme and SmartBoard controls change the real settings at once (saved like the Settings page). No Skip button, and it
 * can't be closed with Escape, a click outside or the browser's Back button: the only way out is the "Let's go" button of the last page.
 * Remembered in localStorage: "lg-welcome-seen" = "1" once the player has pressed "Let's go" (never shown again), and "lg-welcome-page" = the
 * page reached (a player who left halfway continues there). A player of an earlier version has neither, so sees it once.
 * Built on the pop-up engine (openModal) but with its own title row, step counter, progress bar and buttons.
 * ========================================================================= */
const WELCOME = { open: false, page: 0, demoWord: null, root: null };
const WELCOME_PAGES = 5;
const WELCOME_SEEN_KEY = 'lg-welcome-seen';
const WELCOME_PAGE_KEY = 'lg-welcome-page';

// A browser that cannot save anything (private mode, blocked storage) would show the pop-up on every visit, so it is not shown there.
function welcomeStorageWorks() {
  try {
    localStorage.setItem('lg-probe', '1');
    localStorage.removeItem('lg-probe');
    return true;
  } catch (e) {
    return false;
  }
}

function welcomeNeeded() {
  return welcomeStorageWorks() && loadPref(WELCOME_SEEN_KEY, '0') !== '1';
}

// A small helper: an element with a class and (optionally) children.
function wel(tag, cls, children = [], attrs = {}) {
  return el(tag, { class: cls, ...attrs }, children);
}

function welcomeIcon(name) {
  const span = wel('span', 'welcome-icon');
  span.innerHTML = ICONS[name];
  return span;
}

// Page 1: the greeting and the Language choice (a sliding pill like the one in Settings; both names always shown).
function welcomeLanguagePage(fromTurkish) {
  const toggle = el('div', {
    class: 'lang-toggle welcome-lang', id: 'welcome-language', role: 'switch', tabindex: '0',
    'aria-checked': String(fromTurkish === undefined ? state.lang === 'tr' : fromTurkish),
    'aria-label': `${t('languageName')}: ${LANG_NAMES[state.lang]}`, 'aria-describedby': 'welcome-language-help',
  }, [
    el('span', { class: 'lang-thumb' }),
    ...LANGS.map((lang) => el('span', { class: `lang-lbl${lang === state.lang ? ' is-on' : ''}`, lang, text: LANG_NAMES[lang] })),
  ]);
  const choose = (lang) => {
    if (lang === state.lang) return;
    const wasTurkish = state.lang === 'tr';
    setLanguage(lang);
    renderWelcome('#welcome-language', wasTurkish);   // every text of the pop-up changes; the pill slides from the old side
  };
  toggle.addEventListener('click', (e) => {
    const box = toggle.getBoundingClientRect();
    choose(e.clientX - box.left > box.width / 2 ? 'tr' : 'en');
  });
  toggle.addEventListener('keydown', (e) => {
    if (e.key === ' ' || e.key === 'Enter') choose(state.lang === 'en' ? 'tr' : 'en');
    else if (e.key === 'ArrowLeft') choose('en');
    else if (e.key === 'ArrowRight') choose('tr');
    else return;
    e.preventDefault();
  });
  if (fromTurkish !== undefined) {
    // the pill was built on the old side; two frames later it is set to the new one, so the slide plays
    requestAnimationFrame(() => requestAnimationFrame(() => toggle.setAttribute('aria-checked', String(state.lang === 'tr'))));
  }
  return [
    wel('h2', 'welcome-title', [wel('span', 'welcome-dot'), t('welcomeTitle')], { id: 'welcome-heading', tabindex: '-1' }),
    wel('p', 'welcome-lead', [t('welcomeIntro')]),
    wel('div', 'welcome-bubbles', [
      wel('span', 'welcome-bubble', ['Hello!'], { lang: 'en' }),
      wel('span', 'welcome-bubble is-second', ['Merhaba!'], { lang: 'tr' }),
    ]),
    wel('div', 'welcome-label', [t('languageName')]),
    toggle,
    wel('p', 'welcome-help', [t('languageHelp')], { id: 'welcome-language-help' }),
  ];
}

// Page 2: the theme as three preview tiles (Auto is half and half). Grayed out while Trick or Treat is on, as in Settings.
function welcomeThemePage() {
  const minis = { auto: 'is-auto', light: 'is-light', dark: 'is-dark' };
  const tiles = THEMES.map((theme) => {
    const on = theme === currentTheme;
    const tile = el('button', { type: 'button', class: 'welcome-tile', 'aria-pressed': String(on), 'data-theme-id': theme, disabled: halloweenOn }, [
      wel('span', 'welcome-check', []),
      wel('span', `welcome-mini ${minis[theme]}`),
      wel('span', 'welcome-tile-name', [t(`theme.${theme}`)]),
    ]);
    tile.querySelector('.welcome-check').innerHTML = ICONS.check;
    tile.addEventListener('click', () => {
      setTheme(theme);
      renderWelcome(`.welcome-tile[data-theme-id="${theme}"]`);
    });
    return tile;
  });
  return [
    wel('h2', 'welcome-title', [t('themeName')], { id: 'welcome-heading', tabindex: '-1' }),
    wel('p', 'welcome-help welcome-help-top', [t(halloweenOn ? 'halloweenThemeNote' : 'themeHelp')], { id: 'welcome-theme-help' }),
    wel('div', 'welcome-tiles', tiles, { role: 'group', 'aria-describedby': 'welcome-theme-help', 'aria-label': t('themeName') }),
  ];
}

// Page 3: the SmartBoard switch with a small working demo (type the word, or tap a word).
function welcomeSmartBoardPage() {
  const input = el('input', { type: 'checkbox', id: 'welcome-smartboard', 'aria-describedby': 'welcome-smartboard-help' });
  input.checked = state.smartBoard;
  input.addEventListener('change', () => {
    WELCOME.demoWord = null;
    setSmartBoard(input.checked);
    renderWelcome('#welcome-smartboard');
  });
  const tap = state.smartBoard;
  const blank = tap
    ? wel('span', 'welcome-blank', [WELCOME.demoWord || ' '])
    : wel('span', 'welcome-blank', [wel('span', 'welcome-caret')]);
  const demo = [
    wel('p', 'welcome-help', [t(tap ? 'tapInstruction' : 'typeInstruction')]),
    wel('p', 'welcome-sentence', ['The ', blank, ' sits on the mat.'], { lang: 'en' }),
  ];
  if (tap) {
    demo.push(wel('div', 'welcome-chips', ['cat', 'dog', 'sun'].map((word) => {
      const chip = el('button', { type: 'button', class: `welcome-chip${WELCOME.demoWord === word ? ' is-used' : ''}`, lang: 'en', text: word });
      chip.addEventListener('click', () => {
        WELCOME.demoWord = WELCOME.demoWord === word ? null : word;
        renderWelcome(`.welcome-chip:nth-child(${['cat', 'dog', 'sun'].indexOf(word) + 1})`);
      });
      return chip;
    })));
  }
  return [
    wel('h2', 'welcome-title', [t('smartBoardName')], { id: 'welcome-heading', tabindex: '-1' }),
    wel('div', 'welcome-card', [
      wel('label', 'setting-head', [
        wel('span', 'setting-name', [t('smartBoardName')]),
        wel('span', 'switch', [input, wel('span', 'slider')]),
      ]),
      wel('p', 'welcome-help', [t('welcomeSmartBoardHelp')], { id: 'welcome-smartboard-help' }),
    ]),
    wel('div', 'welcome-demo', demo),
  ];
}

// The small level labels (A1 ... C1) in the level colors; `finished` = the codes shown at full strength, the others pale (all full when undefined).
function welcomeLevelChips(finished) {
  return CONFIG.LEVELS.map((level) => wel('span', `welcome-lv${finished && !finished.includes(level) ? ' is-pale' : ''}`, [level],
    { style: `--c: var(--lvl-${level})` }));
}

// Page 4: what the game offers, each line with a small sample (levels, question types, difficulties, a word with its sound button).
function welcomeTourPage() {
  const item = (n, key, sample) => wel('div', 'welcome-item', [
    wel('span', 'welcome-num', [String(n)]),
    wel('div', 'welcome-item-body', [wel('p', '', [t(key)]), sample]),
  ]);
  const word = wel('div', 'welcome-word', [
    wel('b', '', ['apple'], { lang: 'en' }),
    wel('span', 'welcome-spk', [], { 'aria-hidden': 'true' }),
    wel('em', '', [wel('i', '', ['noun']), ' · a round fruit'], { lang: 'en' }),
  ]);
  word.querySelector('.welcome-spk').innerHTML = ICONS.volume;
  return [
    wel('h2', 'welcome-title', [t('welcomeTourTitle')], { id: 'welcome-heading', tabindex: '-1' }),
    item(1, 'welcomeTour1', wel('div', 'welcome-sample', welcomeLevelChips())),
    item(2, 'welcomeTour2', wel('div', 'welcome-sample', CONFIG.TYPES.map((ty) => wel('span', 'welcome-tag', [t(`type.${ty.id}`)])))),
    item(3, 'welcomeTour3', wel('div', 'welcome-sample', CONFIG.DIFFICULTIES.map((d, i) => wel('span', 'welcome-tag welcome-diff', [
      wel('span', 'welcome-dots', CONFIG.DIFFICULTIES.map((_, k) => wel('s', k <= i ? 'is-on' : ''))),
      t(`difficulty.${d.id}`),
    ])))),
    item(4, 'welcomeTour4', word),
  ];
}

// Page 5: two notes (what is finished, and where the History is kept). The pale/solid level codes come from CONFIG.WELCOME_FINISHED_LEVELS.
function welcomeGoodPage() {
  const note = (icon, key, extra) => {
    const card = wel('div', 'welcome-card', [wel('div', 'welcome-note', [
      wel('span', 'welcome-note-icon', []),
      wel('p', '', [t(key)]),
    ])]);
    card.querySelector('.welcome-note-icon').innerHTML = ICONS[icon];
    if (extra) card.append(extra);
    return card;
  };
  return [
    wel('h2', 'welcome-title', [t('welcomeGoodTitle')], { id: 'welcome-heading', tabindex: '-1' }),
    note('checkCircle', 'welcomeNoteFinished', wel('div', 'welcome-levels', welcomeLevelChips(CONFIG.WELCOME_FINISHED_LEVELS))),
    note('save', 'welcomeNoteHistory'),
  ];
}

const WELCOME_BUILDERS = [welcomeLanguagePage, welcomeThemePage, welcomeSmartBoardPage, welcomeTourPage, welcomeGoodPage];

function welcomeGoToPage(n) {
  WELCOME.page = Math.max(0, Math.min(WELCOME_PAGES - 1, n));
  savePref(WELCOME_PAGE_KEY, String(WELCOME.page));
  renderWelcome(null, undefined, true);
}

// Shows the current page. focusSel: the control to keep the keyboard on (default: the Next button). fromTurkish: the language page's pill slides.
// entering: the page fades in (only when the page changed, not after a tap on a control of the same page).
function renderWelcome(focusSel, fromTurkish, entering = false) {
  if (!WELCOME.open) return;
  const last = WELCOME.page === WELCOME_PAGES - 1;
  const bar = wel('div', 'welcome-bar', Array.from({ length: WELCOME_PAGES }, (_, i) => wel('i', i <= WELCOME.page ? 'is-on' : '')), { 'aria-hidden': 'true' });
  const page = wel('div', `welcome-page${entering ? ' is-entering' : ''}`, WELCOME_BUILDERS[WELCOME.page](fromTurkish));
  WELCOME.root.replaceChildren(wel('p', 'welcome-step', [t('welcomeStep', { n: WELCOME.page + 1, total: WELCOME_PAGES })]), bar, page);
  $('#modal-overlay .modal').setAttribute('aria-labelledby', 'welcome-heading');

  const next = el('button', { type: 'button', class: 'primary welcome-next' }, [t(last ? 'welcomeGo' : 'next'), welcomeIcon('arrowRight')]);
  next.addEventListener('click', () => (last ? finishWelcome() : welcomeGoToPage(WELCOME.page + 1)));
  const buttons = [next];
  if (WELCOME.page > 0) {
    const back = el('button', { type: 'button', class: 'welcome-back', title: t('back'), 'aria-label': t('back') }, [welcomeIcon('back')]);
    back.addEventListener('click', () => welcomeGoToPage(WELCOME.page - 1));
    buttons.unshift(back);
  }
  $('#modal-actions').replaceChildren(...buttons);
  const target = (focusSel && $(`#modal-overlay ${focusSel}`)) || next;
  target.focus({ preventScroll: true });
}

// Opens it on the page the player reached last time (page 1 for a new player).
function openWelcome() {
  const saved = parseInt(loadPref(WELCOME_PAGE_KEY, '0'), 10);
  WELCOME.page = Number.isInteger(saved) ? Math.max(0, Math.min(WELCOME_PAGES - 1, saved)) : 0;
  WELCOME.demoWord = null;
  WELCOME.root = wel('div', 'welcome');
  openModal({ body: WELCOME.root, buttons: [], dismissible: false });   // dismissible: false and no onDismiss: Escape, a click outside and Back do nothing
  WELCOME.open = true;
  $('#modal-actions').classList.add('welcome-actions');
  renderWelcome();
}

// Called once the saved settings are loaded (the pop-up opens first, so the Halloween walker waits for it): shows the real theme and SmartBoard state.
function refreshWelcome() {
  if (WELCOME.open) renderWelcome();
}

// "Let's go": the pop-up is done for good.
function finishWelcome() {
  savePref(WELCOME_SEEN_KEY, '1');
  savePref(WELCOME_PAGE_KEY, '0');
  WELCOME.open = false;
  $('#modal-actions').classList.remove('welcome-actions');
  closeModal();
}
