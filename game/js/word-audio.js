/* js/word-audio.js - the pronunciation button: plays the recording of a word, shows "No audio yet" when the word has no recording
   Provides: wordAudioFile, wordAudioUrl, probeWordAudio, stopWordAudio, wordAudioEnded, wordAudioButton, audioHas, audioMissing, audioProbes, audioNow
   Needs: CONFIG, ICONS, el, t, state */
'use strict';
/* =========================================================================
 * WORD AUDIO  (owner, 2026-11-22; README "Word audio")
 * One small round speaker button after a word, in the Word list and in the "Words in this game" pop-up.
 * - Where the recordings are: CONFIG.AUDIO_FOLDER + wordAudioFile(word). Nothing else in the game knows the folder, so moving the
 *   recordings (another folder, a web address) means changing that one CONFIG line.
 * - The button always shows. A word with no recording gets a muted, inactive button and the note "No audio yet" next to it. The page
 *   cannot read a folder (double-click offline, no server), so it asks the browser to load the start of the file: an error means no recording.
 *   Some phones do not load before a tap; then the first tap finds out (and shows the note).
 * - Only one word plays at a time. The button keeps its "playing" colour exactly as long as the sound lasts (the audio's own "ended"
 *   event). A second tap on it stops it; another word, a new screen, a closed pop-up or a new list stops it too.
 * - It plays when the Settings sound switch is off (owner: a direct tap on a pronunciation button always plays).
 * ========================================================================= */

// The file name of a word (the same rule as the private tool .gitignore/audio/make_audio.ps1): lower case, apostrophes removed,
// every other character that is not a letter or a digit becomes "-" (o'clock -> oclock.mp3, t-shirt -> t-shirt.mp3).
function wordAudioFile(word) {
  return word.toLowerCase().replace(/['’]/g, '').replace(/[^a-z0-9]/g, '-') + CONFIG.AUDIO_EXTENSION;
}

function wordAudioUrl(word) {
  return CONFIG.AUDIO_FOLDER.replace(/\/?$/, '/') + wordAudioFile(word);
}

const audioHas = new Set();      // addresses found to exist
const audioMissing = new Set();  // addresses found not to exist (no recording yet)
const audioProbes = new Map();   // address -> a promise that answers true / false (one request for each address)
let audioNow = null;             // the word that is playing: { audio, btn }

// Asks the browser to load the start of the file. Never answers on a browser that waits for a tap before it loads anything.
function probeWordAudio(url) {
  if (!audioProbes.has(url)) {
    audioProbes.set(url, new Promise((resolve) => {
      const probe = new Audio();
      probe.preload = 'metadata';
      probe.addEventListener('loadedmetadata', () => resolve(true), { once: true });
      probe.addEventListener('error', () => resolve(false), { once: true });
      probe.src = url;
    }));
  }
  return audioProbes.get(url);
}

// Ends the sound that is playing (if any) and puts its button back.
function stopWordAudio() {
  if (!audioNow) return;
  const { audio, btn } = audioNow;
  audioNow = null;
  audio.pause();
  btn.classList.remove('is-playing');
}

// The sound ended or failed by itself: only the button goes back (the sound that is playing now may be another one).
function wordAudioEnded(audio) {
  if (!audioNow || audioNow.audio !== audio) return;
  audioNow.btn.classList.remove('is-playing');
  audioNow = null;
}

// One word: the button and, after it, the note that shows only when there is no recording. Returns the pair as one element.
function wordAudioButton(word) {
  const url = wordAudioUrl(word);
  const btn = el('button', { type: 'button', class: 'audio-btn', 'aria-label': t('audioListen', { word }) });
  btn.innerHTML = ICONS.volume + ICONS.volume2;
  const note = el('span', { class: 'audio-note', lang: state.lang, hidden: '' });
  const markMissing = () => {
    audioMissing.add(url);
    btn.classList.add('is-missing');
    btn.setAttribute('aria-disabled', 'true');
    btn.setAttribute('aria-label', `${word}, ${t('audioMissing')}`);
    note.textContent = t('audioMissing');
    note.hidden = false;
  };
  btn.addEventListener('click', () => {
    if (audioMissing.has(url)) return;
    if (audioNow && audioNow.btn === btn) { stopWordAudio(); return; }   // a second tap stops it
    stopWordAudio();
    const audio = new Audio(url);
    audioNow = { audio, btn };
    btn.classList.add('is-playing');
    audio.addEventListener('ended', () => wordAudioEnded(audio));
    audio.addEventListener('error', () => { wordAudioEnded(audio); markMissing(); });
    audio.play().catch(() => wordAudioEnded(audio));
  });
  if (audioMissing.has(url)) markMissing();
  else if (!audioHas.has(url)) {
    probeWordAudio(url).then((found) => {
      if (found) audioHas.add(url);
      else markMissing();
    });
  }
  return el('span', { class: 'audio-wrap' }, [btn, note]);
}
