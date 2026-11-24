/* js/versions.js - the version list ("What's new?") and its pop-up, opened by the button next to Credits
   Provides: VERSIONS, WHATS_NEW_MONTHS, versionDate, versionNode, openWhatsNew, initWhatsNew
   Needs: ICONS, el, t, state, $, openModal, closeModal */
'use strict';
/* =========================================================================
 * VERSIONS  (README.md Roadmap item 29; owner's request and mock-up, 2026-11-24)
 * A hand-written list of versions in very plain words for players, newest first: a version number, a date, a tagline and the list of what
 * the game offers or what changed. It is NOT the developer's CHANGELOG.md. A new entry is written only when the owner says "release vX.Y":
 * add it at the TOP of VERSIONS, in both languages (the owner reviews every Turkish word). Say only what a player can see: no unfinished
 * parts, no developer features (Grammar, the locked levels, the welcome pop-up).
 * ========================================================================= */
const VERSIONS = [
  {
    id: 'v1.0',
    date: '2026-11-24',
    tagline: { en: 'The first version of Verba', tr: 'Verba\'nın ilk sürümü' },
    features: {
      en: [
        'Choose your level, from A1 to C1. Only A1 is ready now. More is coming.',
        'Learn words in 15 themes, like Greetings and Feelings or Food and Drink.',
        'Try four kinds of questions: Multiple Choice, Fill in the Blanks, True or False and Matching.',
        'Pick how hard it is: Easy, Medium, Hard or Very Hard. Harder quizzes give you less time.',
        'Watch the timer. Time is up? Take 10 more seconds or skip the question.',
        'See your score after every quiz, with all your mistakes and a short explanation.',
        'Press "Next exercise" to go straight to the next quiz.',
        'Open the Word list to read the meaning of every word.',
        'Press the pronunciation button to hear how a word sounds.',
        'See the words of a quiz before you start it.',
        'Look at your History, your overall result and tips made for you.',
        'Choose light, dark or automatic colors. There is also a Halloween look.',
        'Use the menus in English or in Turkish. Questions always stay in English.',
        'Turn on SmartBoard mode to tap a word instead of typing it.',
        'Turn the sounds on or off, and give every question the same time if you like.',
      ],
      tr: [
        'Seviyeni seç, A1\'den C1\'e kadar. Şimdilik yalnızca A1 hazır, diğer seviyeler yolda.',
        '15 farklı temayla kelime öğren. Örneğin Greetings and Feelings ya da Food and Drink.',
        'Dört tür soruyu dene: Çoktan Seçmeli, Boşluk Doldurma, Doğru veya Yanlış ve Eşleştirme.',
        'Zorluğu seç: Kolay, Orta, Zor ya da Çok Zor. Zorluk arttıkça süre kısalır.',
        'Süreyi izle. Süre doldu mu? 10 saniye daha al ya da soruyu atla.',
        'Her alıştırmadan sonra puanını, hatalarını ve kısa açıklamaları gör.',
        '"Sonraki alıştırma" düğmesine basıp hemen devam et.',
        'Kelime Listesi\'nde her kelimenin anlamını oku.',
        'Telaffuz düğmesine basıp kelimenin nasıl okunduğunu dinle.',
        'Bir alıştırmaya başlamadan önce o alıştırmanın kelimelerini gör.',
        'Geçmişine, genel sonucuna ve sana özel ipuçlarına göz at.',
        'Açık, koyu ya da otomatik renkleri seç. Bir de Cadılar Bayramı görünümü var.',
        'Menüleri İngilizce ya da Türkçe kullan. Sorular her zaman İngilizce kalır.',
        'İstersen akıllı tahta modunu aç: yazmak yerine bir kelimeye dokunursun.',
        'Sesleri aç ya da kapat; istersen her soruya aynı süreyi ver.',
      ],
    },
  },
];

const WHATS_NEW_MONTHS = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
};

// "2026-11-24" -> "24 November 2026" / "24 Kasım 2026".
function versionDate(iso) {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d} ${WHATS_NEW_MONTHS[state.lang][m - 1]} ${y}`;
}

// One version: the number, the date, the tagline and the list. The newest is an open card with the "Latest" tag; older ones are
// folded rows (<details>) that open when pressed.
function versionNode(v, isLatest) {
  const lang = state.lang;
  const list = el('ul', { class: 'wn-list' }, v.features[lang].map((text) => {
    const mark = el('span', { class: 'wn-mark', 'aria-hidden': 'true' });
    mark.innerHTML = ICONS.check;
    return el('li', {}, [mark, el('span', { text })]);
  }));
  if (isLatest) {
    return el('section', { class: 'wn-ver is-latest' }, [
      el('div', { class: 'wn-head' }, [
        el('span', { class: 'wn-badge', text: v.id }),
        el('span', { class: 'wn-new', text: t('whatsNewLatest') }),
        el('span', { class: 'wn-date', text: versionDate(v.date) }),
      ]),
      el('h3', { class: 'wn-tagline', text: v.tagline[lang] }),
      list,
    ]);
  }
  return el('details', { class: 'wn-ver' }, [
    el('summary', {}, [
      el('span', { class: 'wn-badge', text: v.id }),
      el('span', { class: 'wn-sum', text: v.tagline[lang] }),
      el('span', { class: 'wn-date', text: versionDate(v.date) }),
    ]),
    list,
  ]);
}

function openWhatsNew() {
  openModal({
    title: t('whatsNew'),
    body: el('div', { class: 'wn' }, VERSIONS.map((v, i) => versionNode(v, i === 0))),
    dismissible: true,
    buttons: [{ label: t('close'), primary: true, class: 'pill', onClick: closeModal }],
  });
}

// The "What's new?" button in the footer, next to Credits (its text is a static text: data-i18n="whatsNew").
function initWhatsNew() {
  $('#whatsnew-icon').innerHTML = ICONS.sparkles;
  $('#whatsnew-btn').addEventListener('click', openWhatsNew);
}
