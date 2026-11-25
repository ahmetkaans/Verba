/* js/dev-lock.js - the locked levels: A2 to C1 ask for a developer password until the tab is closed
   Provides: devUnlockedInMemory, DEV_LOCK_KEY, cyrb53, devHash, devUnlocked, isLevelLocked, isPartLocked, openLockedLevel
   Needs: CONFIG, ICONS, el, t, openModal, closeModal, renderMenus */
'use strict';
/* =========================================================================
 * DEV LOCK  (owner's request and mock-up, 2026-11-24; README "Locked levels")
 * The levels in CONFIG.LOCKED_LEVELS (A2, B1, B2, C1) are not ready for players. A level button, a Word list level tab and "Next exercise"
 * that leads into one of them open the "Not ready yet" pop-up instead: "Go back" (the main button) or the developer password.
 * A right password unlocks every locked level until the tab is closed (sessionStorage "lg-dev"; if the browser can't save, a variable in memory).
 * This is a curtain against casual players, NOT security: the game is plain files, so the scrambled password (CONFIG.DEV_PASSWORD_HASH) and
 * this code can be read by anyone who opens the browser's developer tools. It replaces the "Not finished yet / Go there" question for these levels.
 * ========================================================================= */
const DEV_LOCK_KEY = 'lg-dev';
let devUnlockedInMemory = false; // used when sessionStorage is blocked

// A small, fast text scrambler (cyrb53, public domain). Not a secure hash; it only keeps the password out of plain sight.
function cyrb53(str, seed = 0) {
  let h1 = 0xdeadbeef ^ seed;
  let h2 = 0x41c6ce57 ^ seed;
  for (let i = 0; i < str.length; i++) {
    const ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

// The scrambled form of a password, as it is stored in CONFIG.DEV_PASSWORD_HASH. To change the password: run devHash('new password') in the
// browser's console and put the result in CONFIG.
function devHash(text) {
  return cyrb53(`verba-dev|${String(text).trim()}`).toString(36);
}

function devUnlocked() {
  if (devUnlockedInMemory) return true;
  try {
    return sessionStorage.getItem(DEV_LOCK_KEY) === '1';
  } catch (e) {
    return false;
  }
}

function isLevelLocked(level) {
  return CONFIG.LOCKED_LEVELS.includes(level) && !devUnlocked();
}

// A single part of a level (CONFIG.LOCKED_PARTS, e.g. A1 Grammar): locked like a level, and opened by the same password.
function isPartLocked(level, category) {
  return CONFIG.LOCKED_PARTS.some((p) => p.level === level && p.category === category) && !devUnlocked();
}

// The "Not ready yet" pop-up. onUnlock runs after a right password (the pop-up is closed and the level buttons are built again).
// Escape, a click outside and the browser's Back button all mean "Go back".
function openLockedLevel(level, onUnlock) {
  const input = el('input', {
    type: 'password', class: 'lock-input', id: 'lock-input', autocomplete: 'off', autocapitalize: 'off', spellcheck: 'false',
    'aria-describedby': 'lock-error',
  });
  const eye = el('button', { type: 'button', class: 'lock-eye', 'aria-label': t('lockedShow'), title: t('lockedShow') });
  eye.innerHTML = ICONS.eye;
  eye.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    eye.innerHTML = show ? ICONS.eyeOff : ICONS.eye;
    eye.setAttribute('aria-label', show ? t('lockedHide') : t('lockedShow'));
    eye.title = eye.getAttribute('aria-label');
    input.focus();
  });
  const error = el('p', { class: 'lock-error', id: 'lock-error', role: 'alert' });
  const field = el('div', { class: 'lock-field' }, [input, eye]);
  const tryPassword = () => {
    if (CONFIG.DEV_PASSWORD_HASH && devHash(input.value) === CONFIG.DEV_PASSWORD_HASH) {
      devUnlockedInMemory = true;
      try { sessionStorage.setItem(DEV_LOCK_KEY, '1'); } catch (e) { /* the memory flag is enough */ }
      closeModal();
      renderMenus();   // the lock tags go
      onUnlock();
      return;
    }
    field.classList.add('is-wrong');
    input.setAttribute('aria-invalid', 'true');
    error.replaceChildren(el('span', { class: 'lock-error-text', text: t('lockedWrong') }));
    input.focus();
    input.select();
  };
  input.addEventListener('input', () => {
    field.classList.remove('is-wrong');
    input.removeAttribute('aria-invalid');
    error.replaceChildren();
  });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); tryPassword(); } });
  const icon = el('div', { class: 'lock-icon' });
  icon.innerHTML = ICONS.lock;
  openModal({
    title: t('lockedTitle'),
    body: el('div', { class: 'lock-body' }, [
      icon,
      el('p', {}, [el('span', { class: 'lock-level', style: `--c: var(--lvl-${level})`, text: level }), ` ${t('lockedBody')}`]),
      el('label', { class: 'lock-label', for: 'lock-input', text: t('lockedLabel') }),
      field,
      error,
    ]),
    dismissible: true,
    buttons: [
      { label: t('goBack'), primary: true, class: 'pill', onClick: closeModal },
      { label: t('lockedContinue'), class: 'pill firm', onClick: tryPassword },
    ],
  });
  input.focus({ preventScroll: true });
}
