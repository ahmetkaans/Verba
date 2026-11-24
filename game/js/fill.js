/* js/fill.js - the question screens, part 2: Fill in the Blanks, typed and tapped (SmartBoard)
   Provides: fillBefore, fillAfter, renderFill, keepBlankAboveKeyboard, renderFillTap
   Needs: CONFIG, el, questionNodes, state, t, normalizeAnswer, alsoCorrectForms, judgeFill, submitAnswer */
'use strict';
// Typed fill: the word bank is shown above the sentence; the student types one word into the blank.
// Spaces around the blank like normal print: none after an opening quote ("___) and none before
// punctuation or a closing quote (___. / ___!" / ___,).
function fillBefore(text) { return !text || text.endsWith('"') ? text || '' : `${text} `; }
function fillAfter(text) { return !text || /^[.,!?;:"']/.test(text) ? text || '' : ` ${text}`; }

function renderFill(q, area) {
  const bank = el('div', { class: 'word-bank' }, q.bank.map((word) => el('span', { class: 'chip', text: word })));
  const input = el('input', {
    class: 'blank-input',
    type: 'text',
    autocomplete: 'off',
    autocorrect: 'off',
    autocapitalize: 'off',
    spellcheck: 'false',
    enterkeyhint: 'done',
    'aria-label': t('yourAnswer'),
  });
  const check = el('button', { class: 'primary check-btn', text: t('check'), disabled: true });
  const submit = () => {
    const typed = input.value.trim();
    if (!typed || state.quiz.answered) return;
    const result = judgeFill(typed, q);
    if (result === 'correct') {
      input.classList.add('is-correct');
      // Typed an accepted form (not the main answer): full points, plus the note "Also correct: ..." with the other form(s).
      const others = alsoCorrectForms(typed, q);
      submitAnswer('correct', typed, CONFIG.POINTS_CORRECT, others.length ? { key: 'alsoCorrect', params: { answer: others.join(', ') } } : null);
    } else if (result === 'misspelled') {
      input.classList.add('is-partial');
      submitAnswer('partial', typed, CONFIG.POINTS_CORRECT * CONFIG.FILL_MISSPELLED_SHARE,
        { key: 'spellingWarning', params: { answer: q.answer, typed } });
    } else {
      input.classList.add('is-wrong');
      submitAnswer('incorrect', typed, -CONFIG.POINTS_INCORRECT);
    }
  };
  input.addEventListener('input', () => { check.disabled = !input.value.trim(); });
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
  check.addEventListener('click', submit);
  area.append(
    el('p', { class: 'instructions', text: t('typeInstruction') }),
    bank,
    el('p', { class: 'prompt fill-sentence' }, [...questionNodes(fillBefore(q.before)), input, ...questionNodes(fillAfter(q.after))]),
    check,
  );
  state.quiz.ui = { input, check };
  input.focus({ preventScroll: true });
  keepBlankAboveKeyboard(input);
}

// Phones: when the on-screen keyboard opens it covers the sentence. Give the page room for the keyboard
// (the CSS variable --kb-height) and scroll the sentence into the visible part above it.
// Listeners are set up once and only act while a typed blank is focused.
function keepBlankAboveKeyboard(input) {
  const vv = window.visualViewport;
  if (!vv) return;
  const reveal = () => {
    const active = document.activeElement;
    const kb = Math.max(0, Math.round(window.innerHeight - vv.height - vv.offsetTop));
    const typing = active && active.classList && active.classList.contains('blank-input');
    document.documentElement.style.setProperty('--kb-height', typing && kb > 80 ? `${kb}px` : '0px');
    if (!typing || kb <= 80) return;
    const room = vv.height - 12;                      // visible height above the keyboard
    // Keep the whole sentence in view when it fits. A dialogue (one line per speaker, the blank in the last line) can be taller than the
    // space above the keyboard: then keep the blank's own line in view and let the first lines scroll off the top.
    let box = (active.closest('.fill-sentence') || active).getBoundingClientRect();
    if (box.height > room - 16) box = active.getBoundingClientRect();
    if (box.bottom > room) window.scrollBy({ top: box.bottom - room + 12, behavior: 'auto' });
  };
  if (!keepBlankAboveKeyboard.watching) {
    keepBlankAboveKeyboard.watching = true;
    vv.addEventListener('resize', reveal);
    document.addEventListener('focusin', () => setTimeout(reveal, 250)); // after the keyboard has slid up
    document.addEventListener('focusout', () => setTimeout(reveal, 100));
  }
  input.addEventListener('focus', () => setTimeout(reveal, 250));
}

// SmartBoard mode: the same question, answered with taps. Tap a bank word and it goes into the blank;
// tap the placed word (or the blank) to take it back. No "misspelled" case: the word is right or wrong.
function renderFillTap(q, area) {
  const ui = { placed: null }; // index into q.bank of the word in the blank
  const chips = q.bank.map((word, i) => {
    const chip = el('button', { class: 'chip', type: 'button', text: word });
    chip.addEventListener('click', () => {
      if (state.quiz.answered) return;
      ui.placed = ui.placed === i ? null : i;         // tapping a word puts it in the blank (replacing another); tapping the placed one takes it back
      refresh();
    });
    return chip;
  });
  const slot = el('button', { class: 'blank-slot', type: 'button', 'aria-label': t('theBlank') });
  slot.addEventListener('click', () => {
    if (state.quiz.answered) return;
    ui.placed = null;                                 // tapping the word in the blank takes it out
    refresh();
  });
  const check = el('button', { class: 'primary check-btn', text: t('check'), disabled: true });
  const refresh = () => {
    chips.forEach((chip, i) => chip.classList.toggle('is-used', ui.placed === i));
    slot.textContent = ui.placed === null ? '' : q.bank[ui.placed];
    slot.classList.toggle('is-filled', ui.placed !== null);
    check.disabled = ui.placed === null;
  };
  check.addEventListener('click', () => {
    if (ui.placed === null || state.quiz.answered) return;
    const word = q.bank[ui.placed];
    if (normalizeAnswer(word) === normalizeAnswer(q.answer)) {
      slot.classList.add('is-correct');
      submitAnswer('correct', word, CONFIG.POINTS_CORRECT);
    } else {
      slot.classList.add('is-wrong');
      submitAnswer('incorrect', word, -CONFIG.POINTS_INCORRECT);
    }
  });
  area.append(
    el('p', { class: 'instructions', text: t('tapInstruction') }),
    el('div', { class: 'word-bank' }, chips),
    el('p', { class: 'prompt fill-sentence' }, [...questionNodes(fillBefore(q.before)), slot, ...questionNodes(fillAfter(q.after))]),
    check,
  );
  state.quiz.ui = ui;
  refresh();
}

