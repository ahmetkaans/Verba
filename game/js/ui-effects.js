/* js/ui-effects.js - small effects for mouse users: the soft ripple that spreads from the click point of a button
   Provides: RIPPLE_TARGETS, initButtonRipple
   Needs: prefersReducedMotion */
'use strict';
/* =========================================================================
 * UI EFFECTS  (owner's choice from mock-ups, 2026-11-21: "lift + ripple"; the lift is css, see css/layout.css "Buttons on a computer")
 * One click listener on the page. It does nothing on touch screens (no hover, no fine pointer), when the player turned on "reduce motion",
 * for a click made with the keyboard, or for a disabled button. The circle lives in a clipped layer inside the button and is removed again
 * after 650 ms; it never changes the button's text or the game's state.
 * ========================================================================= */
// The buttons that get the lift and the ripple: the same list as in css/layout.css ("Buttons on a computer").
const RIPPLE_TARGETS = '.menu-btn, .option, .match-item, button.chip, .modal-actions button, button.primary, .icon-btn, .pill-btn, button.history-row, .view-pill, .vocab-kind, .vocab-separate';

function initButtonRipple() {
  document.addEventListener('click', (e) => {
    if (e.detail === 0) return; // a click made with the keyboard (Enter or Space) has no pointer position
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches || prefersReducedMotion()) return;
    const button = e.target.closest(RIPPLE_TARGETS);
    if (!button || button.disabled) return;
    const box = button.getBoundingClientRect();
    const size = Math.max(box.width, box.height) * 2.2;
    const circle = document.createElement('span');
    circle.className = 'ripple';
    circle.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - box.left - size / 2}px;top:${e.clientY - box.top - size / 2}px`;
    const layer = document.createElement('span');
    layer.className = 'ripple-box';
    layer.setAttribute('aria-hidden', 'true');
    layer.append(circle);
    button.append(layer);
    setTimeout(() => layer.remove(), 650);
  }, true); // in the capture phase: before the button's own handler (an answered quiz option is disabled at once)
}
