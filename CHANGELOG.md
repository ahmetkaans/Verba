# Changelog

What changed in Verba, in plain language. The newest change is at the top. Every commit adds one entry here: its date, a short title and two or three sentences about what was added or changed. The code in brackets is the commit's ID on GitHub, so you can open that exact version.

## 2026-11-23

### Design and question-writing guides moved to docs/
Nothing in the game changed. `DESIGN.md` and `ADDING_QUESTIONS.md` moved from the main folder into `docs/`, next to `RULES_FULL.md`; only `AGENTS.md`, `README.md` and `CHANGELOG.md` stay at the top. Every link and mention in README, AGENTS.md, the rules and the private tools now names the new place.

### Tidier private folders (steps 1 to 4 of the folder revision)
Nothing in the game changed. The private working folder `.gitignore/` was sorted: the one-off scripts that split the game into folders and the old handoff note are now in `archive/`, the plans are split into `plans/audio/` and `plans/questions/`, and the 199 loose draft files are sorted into `drafts/themes/`, `proposals/`, `mockups/` and `old/`. Every tool, the README file map, AGENTS.md and ADDING_QUESTIONS.md now name the new places. Claude is also told not to read the audio files and the Piper program (new read-deny rules in `.claude/settings.json`; the joined `_ALL.json` rule now covers the new `themes/` folder). Still to come: moving DESIGN.md and ADDING_QUESTIONS.md into `docs/`, then grouping the tools.

## 2026-11-22

### Pronunciation buttons
Every word in the Word list and in the "Words in this game" pop-up before a game now has a small round speaker button after it. It plays the recording of the word, takes the colour of your level, and keeps its filled colour for exactly as long as the sound lasts; a second tap stops it. It plays even when the sound switch in Settings is off. A word that has no recording yet shows the button muted, with "No audio yet" ("Henüz ses yok") next to it. The recordings of A1 themes 0 to 4 were added. The folder of the recordings is set in one place (`AUDIO_FOLDER` in the settings file), so it can be moved later without touching the code.

### Word recordings and "About voice" in Credits
The game folder now holds short recordings of the words of A1 themes 0 to 4 (222 files made with the free "Amy" voice); the pronunciation buttons (next entry) play them. The Credits window has a new button, "About voice" (in Turkish "Ses hakkında"), that names the voice, the dataset it comes from, their licences and the changes made to the audio, as the licences ask. The folder rule in AGENTS.md now allows these audio files.

### Dialogues: one speaker per line
When two people talk in a question, each person now speaks on a line of their own and the name is bold ("Anna:" or the name before "says"), in Multiple Choice, Fill in the Blanks and True or False, and again on the Results screen and in History. The 28 dialogue questions of the first three A1 themes were changed this way (the words did not change). The question check now gives an error when a new dialogue is written on one line, so later questions will follow the same rule.

### Closer wrong answers in Greetings and Feelings
Six questions in the first A1 theme had wrong options that were too far from the answer, too close to it, or two words that mean almost the same thing together. They now have wrong options that make you think a little, and none of them can also be right.

### Better wrong answers in the A1 vocabulary quizzes
In many Multiple Choice and Fill in the Blank questions, the wrong options were from a different topic and were too easy to cross out. They are now closer to the answer, more at Hard and Very Hard, and none of them can also be a right answer. Wrong options and names that came back too often in one theme were swapped, so the quizzes feel less repeated. No question text, answer or explanation was rewritten.

### Bigger names in the menu tree
On the Word list, Settings and History, "Main menu" and the page name in the menu tree are now the larger main line instead of the small gray caption, in the same style as the game menus' tree.

### The menu tree works the same on every page
The Word list, Settings and History now have the same menu tree as the game menus: "Main menu" (click it to go there) and then the page you are on, marked "You are here". It replaces the different trees of the commit before, so nobody has to learn a new layout for each page.

### The top bar keeps its buttons
The Main menu button (the house) is now the first button of the top bar, in the upper left corner of every screen that has the top bar; the Halloween ghost sits next to it. No button disappears on its own page any more: the button of the page you are on looks pressed and does nothing, and the menu tree is shown dimmed on the History screens. The Settings page and the Word list have a short bar with only Main menu and their own button; on phones the Word list button then stays on the first row.

## 2026-11-21

### Three new themes, and word meanings that follow the quiz
Nature and Animals, Travel and the World, and Jobs and Technology now have all their quizzes (48 new quizzes, 318 new questions, and 122 new words in the word pop-up). When a word means different things in different themes (for example chicken as food or as an animal, or mouse as an animal or a computer mouse), the "Words in this game" pop-up now shows the meaning of that quiz first, marked with a star, with a short note at the bottom in English or Turkish; the Word list shows every meaning. The old underline on the word type is gone.

### The /game/ redirect page is removed
The tiny page `game/game/index.html`, which sent the old `/game/` web address to the main address, is deleted again at the owner's request. The game's only address is `https://ahmetkaans.github.io/Verba/`.

### Buttons lift and ripple on a computer
With a mouse, buttons (menu cards, quiz answers, matching items, pop-up and main buttons, the round top-bar buttons, the Word list pill, History rows) now rise a little with a deeper shadow when the pointer is over them, sink when pressed, and show a soft level-coloured ripple from the click point. Answered or disabled buttons stay still. Phones and tablets are unchanged, and "reduce motion" turns it all off. New file `game/js/ui-effects.js`.

### The old /game/ web address sends visitors to the game
The game is published at `https://ahmetkaans.github.io/Verba/`. The older address with `/game/` at the end stopped working (it showed "not found") after the site started publishing the game folder directly. A tiny page (`game/game/index.html`) now sends anyone who opens the old address, for example from a bookmark, to the main address.

### The touch scroll bar is a plain 10 px bar
The stripes did not show on the owner's phone, so the scroll bar on touch screens is now a plain rounded bar in the level color, 10 px wide: between the 16 px striped bar and the thin standard bar. It stays visible so a new player can see that a page or a pop-up goes on. iPhones still show their own thin bar.

### Settings is a page of its own, with the stripes in the scroll bar
The Settings pop-up, which was long and boxed on a phone, is now a page of its own with three cards under small headings: Language, Look (theme and Trick or Treat) and Play (sound, same duration and SmartBoard mode). Back returns to the screen you came from, the browser's Back and Forward buttons work on it, and every setting is remembered as before. The Trick or Treat figure starts a few seconds after you leave the Settings page. On Android phones the scroll bar now has still diagonal stripes in the level color, wide and always visible (iPhones keep their own thin bar). The new headings are Language / Dil, Look / Görünüm and Play / Oyun.

### Smaller pop-ups and a visible scroll bar on phones
On phones the pop-ups (Settings, Credits, the questions and the menu tree) have about 10% smaller text and tighter spacing, so they match the smaller menus; the buttons keep their size. On touch screens the scroll bar is now wider, darker and always visible, so a new player can see that a page or a pop-up goes on. This works on Android browsers such as Chrome and Brave; iPhone browsers always hide the bar and ignore it. Computers are not changed.

### On a phone the game starts a bit smaller
The menus looked a little zoomed in on a real phone, so the page now starts at 90% on phones, which gives the layout more room. Computers are not changed, and players can still pinch-zoom. It is one number in the page header (`initial-scale`), so it can be changed to 95% or 85% in one place.

### The browser's Back and Forward buttons work
Every screen, pop-up and the menu tree is now a step in the browser's history, so Back goes to the previous screen instead of leaving the game, and Forward goes on again. Back closes an open pop-up first; during a quiz it asks "Quit quiz?" and Cancel keeps the timer going; the Time out and Game over pop-ups stay until the player chooses. The History's list and plays and the Word list's topics and word list are steps too. The web address does not change, and a reload still returns to the main menu. Back on the main menu leaves the game, as on any website.

## 2026-11-19

### A workflow to publish the game on GitHub Pages
A small GitHub Actions file (`.github/workflows/pages.yml`) publishes the `game/` folder as a website after every push, at `https://ahmetkaans.github.io/Verba/`. It uses only GitHub's own actions and needs no build or secret. Nothing goes online until the owner switches Pages on once in the repository settings (Source: GitHub Actions).

### The Credits have a tagline for each person
The Credits pop-up now lists Ahmet Kaan Sarılarlı ("The creator of Verba"), Claude ("Coding and design") and Enes Miraç Ateş ("A friend of mine who shared many ideas for the game"), each name with its tagline underneath, in English and Turkish. The names are not translated.

### The Word list button moved to the top bar
The Word list is now a long pill with the book icon and its name in the top bar, next to the round buttons. On computers it sits left of them, and on phones it is alone on a second row under them. It shows on every screen with the top bar except the quiz and the Word list itself, and the old card at the bottom of the main menu is gone.

### The test buttons are hidden, not deleted
The small "TEST ONLY" box is no longer shown. Its code stays in the game on purpose, because the owner will open it from a hidden place later and wants to use it after publishing. The README says so, so nobody deletes it before publishing. The README also now uses the new repository name, Verba.

### The Word list uses level tabs instead of a level step
The Word list no longer starts with the same level cards as the main menu. It opens on the topics of A1, and five tabs on the right edge of the notebook page (A1 to C1) switch the level. The chosen tab is solid in its level color, and levels without questions yet are softly grayed and show "There are no words here yet." with the "Not finished" tag. A tab does not ask "Go back / Go there", because it only changes what you look at. The word list and everything after the topic step stay as they were.

### The level now shows as a colored stripe, and difficulty has dots
Each level card and each History row has a colored stripe on its left edge, in the color of its level, so the level is easy to see at a glance. The History rows needed one small code change to know their level. The category, topic and question type cards are plain, because a marker should only ever mean the level, and the difficulty cards show one to four small dots from Easy to Very Hard. Only the look changed, no texts or rules.

### Fill in the Blanks and Matching got their own pass
After Check, the typed blank shows a check, a cross or a dot at its right end (right, wrong, partly right), also in SmartBoard mode. In Matching, a right pair has a solid border and a green number badge, and a wrong pair has a dashed border and a red badge, so color is never the only sign. The word bank is quieter, and a disabled main button such as Check before an answer is now a flat gray instead of a faded green. Only the look changed, no texts, questions or rules.

### History and the Word list match the new look
On the History screen the overall result number is bigger and bolder, its card has a thin colored line on top like the results page, and each play's score is bolder. In a play's row and in the results summary, the "Correct" pill is lightly green and the "Incorrect" pill lightly red, with the words kept. On a play's detail page the cross was removed because each card already has its "Incorrect" or "Correct" tag. In the Word list each word is bolder. Only the look changed, no texts or behavior.

### Pop-ups, Settings and the menu tree got the Warm paper look
The Settings pop-up is now one clean list with thin lines instead of six boxes, pop-ups have rounder corners and bolder titles, and the menu tree title matches. On screens where no level is chosen, the heavy blue-gray accent was replaced by a warm dark brown in light mode and a warm cream in dark mode, so selected buttons and switches fit the paper colors. Only the look changed, no texts or behavior.

### A new "Warm paper" look for the menus, the quiz and the results
The game now has a calm cream look in light mode and a graphite look in dark mode, with softer shadows, rounder cards and a bolder title type (weight 600). The level, category, topic, type and difficulty screens show the level color as a short bar (longer for harder difficulties), Multiple Choice options have the letters A to D, and right and wrong answers carry a check or a cross so color is never the only cue. The results page has a bigger score and a mark on each question card. Only the look changed, no texts, questions or rules. The C1 gold was darkened a little so its text stays easy to read.

### The weak wrong options of themes 6, 7, 8 and 10 were replaced
In the Hard and Very Hard multiple-choice and fill-in quizzes of Food and Drink, Clothes and Colors, Town and Shopping, and Body and Health, 75 questions had wrong options that were easy to rule out (desk, door, key). They now use words from the same theme or other clearly wrong words, and every change was checked so that no wrong option can also be right. About 25 questions stayed as they were because every close word could also be correct. One explanation in Town and Shopping was rewritten, and "play ball" became "play football".

### The game is now called Verba
The owner chose the name Verba (always written with a capital V, no tagline). It replaces "My Game Project" in the browser tab and the title on the level screen, and in DESIGN.md (the list of names the owner has fixed) and the README. The name is not translated, so the Turkish texts did not change.

### Every written theme was read again, and the weak wrong options of one theme were replaced
A helper read all 11 written themes once, and about 50 small fixes were made in nine of them: wrong or too narrow meanings, unclear explanations, a few sentences that had a second possible answer, and some grammar above beginner level. In Free Time and Sports, the weak wrong options (like shoe and door) in the Hard and Very Hard quizzes now use words from the same theme. The notes also gained a helper-review step for new themes, new warning checks and some wording rules; nothing in how the game works changed.

### The notes for writing questions now point to the new questions guide
The two places in the README where a helper reads how to write questions now say to start with ADDING_QUESTIONS.md, so an old, longer reading list cannot be followed by mistake. Only notes changed; nothing in the game changed.

### The working rules are shorter, so a helper uses less of its memory
The helper's working rules are now a short index in AGENTS.md, and the full text of all 13 rules moved, unchanged, to docs/RULES_FULL.md. A new ADDING_QUESTIONS.md lists the few parts of the notes needed to write questions, and the notes explain why each of these changes was made. Nothing in the game changed: the question check gives the same report as before and the play-through test passes as before.

### Every file link of the game now has a version number
After an update, a browser could keep an old copy of one game file and use a new copy of another, and that can cause odd bugs. Each file link in the page now carries a short number that changes only when that file changes, so visitors always get matching files. Nothing looks different when you play.

### The notes hold a website checklist and a new rule for questions
The README now has a checklist of what to do before the game goes online (removing the test buttons, choosing the final web address, the font, a description and an icon for shared links, and more). It also holds the notes on signing in with Google, results for teachers, a scoreboard and a History kept on a server, all still ideas. A new rule for writing questions says that no sentence, option or meaning may be read as rude or sexual, and every sentence is read twice for it.

## 2026-11-17

### A Word list button shows every word the game tests (`8226218`)
The main menu has a new button, Word list (Kelime Listesi in Turkish). Pick a level and a topic, and the list opens at once with every word of that topic, in four tabs: Easy, Medium, Hard and Very Hard. Each word shows its type in italics, a dot and its meaning (the meanings stay in English). A button at the end of the list, "Separate words by question type", shows four type buttons above the tabs, so you can see only the words of Multiple Choice, Fill in the Blanks, True or False or Matching. The page looks like a spiral-bound notebook, with a ribbon that shows your level, so it never looks like the main menu.

### The notes hold new ideas for later (`8226218`)
The README now lists ideas that are not built yet: a "words I don't know" list, sharing a game or a list of games with a code or a link, a teacher mode with a test maker, results that go to the teacher, and a History kept on a server. Each one has its open questions, so we decide them before building.

## 2026-11-16

### Three more themes to play: Town and Shopping, Free Time and Sports, and Body and Health (`8226218`)
A1 Vocabulary has three new themes with all their quizzes (16 quizzes each, four question types at four difficulties).

## 2026-11-15

### Three more themes to play: Home and Daily Routine, Food and Drink, and Clothes and Colors (`8226218`)
A1 Vocabulary has three new themes with all their quizzes (16 quizzes each, four question types at four difficulties). A1 Vocabulary now has eleven themes to play.

## 2026-11-13

### A new theme to play: Time and Dates (`d0b7130`)
A1 Vocabulary has a new theme with all its quizzes: Time and Dates (the parts of the day, the days of the week, the seasons, the months and the words about time). It has 16 quizzes (four question types at four difficulties) and 108 questions, and the "Words in this game" pop-up now tells the meaning of 52 more words. The months and days use one-step clues, and the holiday names (Halloween, April Fools' Day, New Year's Day) appear only where they help. The word "weekend" is explained without naming a country or its days.

### A typed "o'clock" works without the apostrophe (`d0b7130`)
In Fill in the Blanks, "oclock" and "o’clock" now count as fully correct for "o'clock". Only this word has the rule, so "dont" is still not "don't".

### A quiz you leave by closing the tab or the browser is saved as Quit (`d0b7130`)
If you close the tab or the browser in the middle of a quiz, the game now notices the next time you open it and saves that game in History as Quit. Reloading the page does the same. Each game is remembered on its own, so two open tabs never mix up their games, and a game is never saved twice. The History panel says this in one sentence, in English and in Turkish.

### The notes know the holiday names (`d0b7130`)
The private question checker now allows Halloween, Valentine's Day and April Fools' Day as known words, like the language names (never forced, no religious holidays). The notes explain it.

## 2026-11-12

### See the questions you got right, with one button (`456cd33`)
On the results page and on each game in History, a button now switches between "Show all questions" and "Show only my mistakes". At first you see only the questions you missed, in the order you played them. Tap the button and the ones you got right appear between them. The button remembers your choice on both pages, even after you close the game. A game with no right answers shows the line "No right answers yet." Games with everything right can now be opened in History too.

### History keeps the questions you got right (`456cd33`)
Every finished game now saves its right answers as well as its mistakes, so History can show the whole game later. Games saved before today only have their mistakes, and the page says so.

### Tidier notes (`456cd33`)
The README is a little shorter. Its finished plans were trimmed and some out-of-date lines were fixed. It also has a short warning on how to edit files safely.

### Every play asks its questions in a new random order (`65bae8d`)
Each time you start a quiz, the questions come in a new order, so the answers can never follow a pattern like one, two, three, and Retry gives the same quiz in a different order. The true and false answers are mixed too, with never three of the same answer in a row, and the pairs in Matching are shuffled. The "Words in this game" list before a quiz is now in alphabetical order, so it no longer shows the order of the questions.

### The review tip no longer has a "See the list" link (`65bae8d`)
The History tip that says looking again at the questions to review is the quickest way to improve is now only a sentence. Its link used to scroll down the same page, which did not help. The notes also hold the plan for showing the questions you got right, with a button on the results and History pages, and the ideas of word lists and a "not reviewed yet" switch.

### Two more themes to play: People and Family, and School and Classroom (`5d1e19a`)
A1 Vocabulary has two new themes with all their quizzes: People and Family, and School and Classroom. Each has 16 quizzes (four question types at four difficulties) and 104 questions, and the "Words in this game" pop-up now tells the meaning of 95 more words. The typed question for "dialogue" also accepts "dialog", with the "Also correct" note.

### The Numbers and Amounts questions come in a mixed order (`5d1e19a`)
The answers of the Numbers and Amounts quizzes used to come in counting order (one, two, three ...), so a student could guess the next one without reading. The questions are the same, only their order changed, and the pairs in Matching are mixed too. The notes now say to write questions in a mixed order.

## 2026-11-11

### Fill in the Blanks can accept a second spelling, like "blond" and "blonde" (`939aee1`)
A typed Fill in the Blanks question can now list another spelling that counts as fully correct. If a student types "blonde" for "blond", they get full points, and the feedback says "Also correct: "blond"." (in Turkish: "Şu da doğru: "blond"."), without repeating the answer on another line. A small typo of either spelling still gets the "Almost!" half points, and questions without a second spelling work exactly as before. No question uses it yet. The notes also gained a short how-to for adding this kind of optional part to a question, a self-audit step for writing questions, and fixes to the file counts in the docs.

## 2026-11-08

### The Roadmap now holds the achievements idea (notes only) (`74c6d18`)
The README's Roadmap has a new item for the achievements you described: a menu with earned and not-yet-earned achievements, and a pop-up on the results screen when one is earned. It records every decision so far (one-time events, separate from the reset buttons, a link on the History screen, old plays earn them silently) and the order of work, and says to ask before building anything. The game itself is the same.

### No more "try harder quizzes" after a single play (`74c6d18`)
The comment under the overall result (for example "Very good. Try the harder quizzes.") now appears only from the third play on. With one or two plays the number, the difficulty pills and the line "Play a few more quizzes for a fairer picture" still show, but no advice, because one play can't say whether a student is ready for harder quizzes. It works the same in "All plays" and "Recent plays".

### The tips now show on screen: a "Tips for you" card and a tip on the results screen (`d3cf43c`)
The History screen has a new card, "Tips for you", under the overall result, with at most two tips. Each has a round icon (green for praise, blue for a suggestion, gray for the review pointer, never red) and one sentence in English or Turkish. The review tip has a link that moves to the list, and the retry tip has a button that starts the same quiz again. The results screen shows one tip about the play you just finished: a new best, or a retry sentence. After "Reset calculation" the review tip now stays, because your History still has plays to review. A retry tip for a quiz that no longer exists is never shown. Six new small icons were added.

### More test buttons, to try out the tips (temporary) (`d3cf43c`)
The "TEST ONLY" box has a new "More" button. It opens a scenario list (one for each tip and one with everything at once) that builds a clean set of plays so that tip applies, a way to add one play with the difficulty, question type and score you choose, a way to make the newest play a few days old, and a text panel that shows the saved numbers, which tips apply and the exact sentence of each in English or Turkish. A scenario saves your real History first, and "Remove all test data" puts it back. The game also gained a small helper, `currentTips()`, that the card will use. Like the other test buttons, all of this is deleted before the game is published.

### The sentences of the tips are in the game (nothing new on screen yet) (`d3cf43c`)
All the tip sentences you reviewed are now in the game in English and Turkish, three versions for each kind of tip. The game picks the version from the number of plays, so the tip changes after each new play and stays the same when you open the History again. A new test checks that every tip has all its versions in both languages, that both languages use the same blanks, and that no sentence is ever left with a hole. The card that shows them comes next.

### The rules for the tips are in (nothing new on screen yet) (`ebfffcf`)
The game now knows which tips would fit a student, using the numbers you approved: a new personal best, welcome back after 3 days, trying the same quiz again after a weak play, reviewing mistakes, moving up a difficulty, trying another question type, and a good-news trend that never says "worse". It picks at most two, the most useful first, and the same plays always give the same tips. There are no sentences and no card yet: the texts (for your review in English and Turkish) and the card on the History screen come next. The notes have a new "Tips" section with all of this.

### The saved totals now keep the numbers the tips will need (nothing new on screen) (`ebfffcf`)
The overall result's saved totals moved to a second version. They now also remember the best score of each difficulty, how many plays were of each question type, and the most recent finished play (where it was played, its score, and whether it was a new best). The game builds them again from your History the first time, oldest to newest. "Clear history" leaves these numbers alone, and "Reset calculation" empties them. Nothing changes on screen; the tips that use these numbers come next.

### Two buttons to clear the History and to reset the overall result (`90c7003`)
At the very bottom of the History screen there are now two quiet red text buttons. "Clear history" removes all saved plays (quit plays too) and keeps the overall result. "Reset calculation" starts the overall result again from zero and keeps the plays. Each one asks first in a pop-up that says what goes, what stays and that it can't be undone; Cancel is the main button, and Escape or a click outside also cancels. A button shows only when there is something to remove. English and Turkish texts as approved.

## 2026-11-07

### The website will be on GitHub Pages, not Cloudflare Pages (`90c7003`)
Cloudflare Pages is blocked in Turkey, so the notes now say the game will be published with GitHub Pages instead, using a small automatic upload (a GitHub Actions workflow) that publishes the `game/` folder on every push, with no build step. The workflow will be added only after the temporary test buttons are deleted. This is a change to the notes only; the game is the same.

### The History now shows your overall result, with an All plays / Recent plays switch (`5186b64`)
At the top of the History screen, a new block shows one number out of 100 for all your finished plays, a short comment that fits the score (five comments, English and Turkish), and a small pill for each difficulty (Easy, Medium, Hard, Very Hard). Harder quizzes count more (Easy 1, Medium 2, Hard 3, Very Hard 4) and the block says so. A switch changes between all plays and your recent plays (the last 10, or fewer if you have played less) and the game remembers your choice. With only a few plays it adds "Play a few more quizzes for a fairer picture." A brand-new History shows no block. A new note says quit plays are not counted. The two reset buttons (Clear history, Reset calculation) are still to come. The notes also had some broken Turkish letters repaired.

### Temporary test buttons for the History (to be deleted before publishing) (`38ab2d5`)
A small box marked "TEST ONLY" in the bottom right corner has two buttons: "Add 15 random plays" fills the History with fake plays (real quizzes, random scores, questions to review, some quit plays, dates in the last 30 days), and "Remove all test data" takes out only the fake ones. It is one file (`js/demo-data.js`) and is listed in the notes with the steps to delete it before the game is published.

### The game now keeps the totals for an overall result (not shown yet) (`38ab2d5`)
The first step of the overall result: every finished real quiz now also adds its score to a small set of totals, one per difficulty (Easy, Medium, Hard, Very Hard). A harder quiz counts more: weights 1, 2, 3 and 4, set in `CONFIG` (for example Easy 100, Medium 70 and Hard 40 give 60, not 70). The totals are saved on their own, so clearing the history later will not change them. They also keep the last 10 plays, ready for a "Recent plays" view next to "All plays". The first time, they are built once from the plays already in the History. Quit plays never count. Nothing is shown on screen yet: the overall result block, its comment and the two buttons (Clear history, Reset calculation) come in the next steps. The Roadmap point about antialiasing was removed, because the 2px outlines fixed the only case.

### A quiz cut short by a reload now shows up in the History as a quit (`5ac3c63`)
When a quiz has started (Start pressed) and the page is reloaded, the History gets a new entry: a "Quit" tag, "Quit in question 3 of 8", and a Play again button that starts the same quiz again. Under the subtitle a small "Quit: n" counts them. Quit entries are never counted in any calculation. Play again starts the quiz from the beginning, not where it was left. Only reloads are tracked: a closed tab, a closed browser or a crash leave nothing, which is an accepted limit. The History screen says both things plainly in a new block at the bottom, "How your history works", always visible, with three short notes (together with the 500-play note, which moved in there). English and Turkish, light, dark and Trick or Treat.

### A History screen with every finished play (`5d85bba`)
A new History button (a clock with a back arrow) in the top bar, and a quiet "See your history" link on the results screen, open the History: a list of finished plays, newest first, each with its date, path, score out of 100 and the same counts as the results page. It shows 10 plays and a More button adds 10 more each time. Pressing a play opens its details: the summary and every question to review, each with a small tag (Incorrect, Partly correct, Skipped, Not answered, Time ran out), your answer, the correct answer and the explanation. A perfect play says "All answers correct". Back returns to the same list at the same place on the page. English and Turkish, light, dark and Trick or Treat. Quit plays and the overall calculation come later.

### The game now remembers finished plays (not shown yet) (`7d451a6`)
Every time a real quiz finishes, the game saves one record in the browser: where it was played, the score and the counts from the results page, and every question that was not fully correct with its answers and explanation. It keeps the last 500 plays, drops the oldest first, copes with a full or blocked storage, and never stops the results screen. Quit quizzes and placeholder quizzes are not recorded. There is no History screen yet: that is the next step. A new small function, `quizIsReal`, tells exactly which quizzes have real questions. README has a new History section with the decisions for the next steps.

## 2026-11-03

### Smoother orange outlines in the Halloween theme (`bf1b1c1`)
The thin 1px orange rings looked rough around the round Tree and Settings buttons. All the orange outlines in Trick or Treat (cards, menu and level buttons, pop-ups, the menu tree panel, the round buttons and the dashed "not finished" ones) are now 2px, set in one place (`--line` in `halloween.css`), so everything stays consistent. Only the Halloween theme changes. The notes say so. This was the only antialiasing case the owner saw, so the Roadmap point for it was removed.

### A small notice after the page is reloaded (`e579d40`)
When the page is reloaded, the game starts again on the main menu, as before, but now a small pop-up says so: "Oops, you reloaded the page. When you reload the page, you go back to the main menu." (Turkish too, with an OK / Tamam button). It has no title, and Escape or a click outside closes it. With Trick or Treat on, the walker waits until it is closed. The pop-up engine can now show a pop-up without a title. The notes say that the browser's back and forward buttons are still not used, and the Roadmap has the idea for later.

### A black and orange Halloween theme, "Trick or Treat", with a walking scene (`25df911`)
Settings has a new switch, Trick or Treat (Şeker mi şaka mı in Turkish), that turns the whole game into a Halloween look: pure black, one pumpkin orange, thin orange lines and a small ghost in the top corner. While it is on, Auto, Light and Dark are grayed out with a note, and the choice is remembered. A few seconds after the game opens (after Settings closes, when the switch was turned on there), a hooded figure with a lantern walks across the bottom once, dragging a skeleton on a rope, stops to look back, tugs the rope now and then and leaves. It lives behind everything, so changing menus never cuts it, and if a quiz starts while it is still on screen it sinks into a glowing hole in the ground and the quiz starts after it. It only runs once per visit and not with "reduce motion". Everything is drawn in code, so the game still opens by double-click from the folder and works the same on a website.

### The notes now cover the walking scene fully (`bcef30a`)
The README and DESIGN notes now say that the Halloween walker is the one long animation (everything else is short), that it does not run with "reduce motion", and that a quiz waits a little while the walker sinks into the ground. This is only a change to the notes; the game itself is the same.
### Clearer working notes
The README now explains the private tools and the git leftovers (the `split` branch and the `before-split` tag), has a Website check list so every change works both from the folder and on a website, and describes the idea of a compact single-file lesson maker. The rules for the helper assistant now say that a question or a "yes" to one item is never a go-ahead for the other items, and that every change must work both on a website and from the folder.

## 2026-11-02

### Menu buttons that lead to unfinished parts are grayed out and ask first (`0eb20f1`)
A button whose part has no real questions yet (A2 to C1, A1 Grammar and the A1 vocabulary themes that are still placeholders) is now softer and carries a small "Not finished" tag, but keeps its level color and still works. Clicking it asks "The part you want to go to is not finished yet. Do you still want to go there?" with Go back or Go there, in English and Turkish. Only the first such button on a path is gray, Next exercise asks too when it leads from a finished theme into an unfinished one, and the gray disappears by itself as soon as a part gets real questions.

### The game is now split into several tidy files, and a folder for what players need (`e8121f8`)
The split is finished and joined into the main version. A player opens `game/index.html`: the page only holds the screens, the look is in 5 files, the code in 22 small files that each start with a note of what they give and need, and the questions and word meanings in files of their own (one per theme). The old single-file game is kept safely in a private archive folder. The notes were tidied too (a plain "what is in this folder" paragraph, the new rules for the private folder), and the final tests passed: the whole-game test, phone width in light, dark and Turkish, and saved settings.

### All the game code now lives in its own files (`796723f`)
The last cutting step of the split, made on the separate working copy. The rest of the code (questions, menus, pop-ups, settings, the quiz, the timer, the question screens, the results and the start-up) moved into fourteen more small files in `game/js/`, so the page itself only holds the screens and a list of the files to load. Nothing changed for a player: the joined files are exactly the old code text, the whole-game test still passes, and the screens look the same in light, dark and Turkish.

### The first part of the game code moves into its own files (`4cddfd1`)
The third step of the split, made on the separate working copy. The numbers, the English and Turkish texts, the topic names, the helper tools, the language switch, the theme, the sounds and the confetti now live in eight small files in `game/js/`, each starting with a short note that says what it provides and what it needs from the other files. Nothing changed for a player: the joined files are exactly the old code text, the whole-game test still passes, and the screens look the same in light, dark and Turkish.

### The questions and word meanings move out of the page into their own files (`4c8d9b5`)
The second step of the split, made on the separate working copy. The real questions now live in one small file per theme (`game/data/questions/`), and the word meanings in one file per level (`game/data/glossary/`), instead of two huge blocks inside the page, which is now about 500 lines shorter. Nothing changed for a player: the files read back give exactly the old questions and meanings, the whole-game test still passes, and the question checker gives the same report as before.

### The game page moves into a game folder and its look gets its own files (`c69e036`)
This is the first real step of the split, made on a separate working copy. The page now lives in `game/index.html`, and all of its look is in five small files in `game/css/` (colors, layout, quiz, results, dialogs). Nothing changed for a player: the page looks and plays exactly the same, which was checked by comparing the text of the style files, the computed look of the screens in light and dark, and a test that plays the whole game by itself. The working rule about "one single file" was reworded, and "How to play" now says to download the ZIP and open `game/index.html`.

### First safe steps toward splitting the game into several files (`aa371ca`)
Nothing in the game itself changed. A test that plays the whole game by itself was added (about 300 checks, covering every question type, the timer, pop-ups, language and settings), and a practice run of the split showed that cutting the page into 27 smaller files loses nothing: the joined files are exactly the old text. The private notes folder was also tidied into four drawers (tools, drafts, word lists, plans).

### Helper agents dropped from the plan, and a small saving in the notes (`3b03dc8`)
The notes no longer suggest using helper agents or a second AI reviewer, because they used too much of the owner's working space. Questions are reviewed in the main conversation by reading, with a quote for every hard item. The file map also now says to read only the first 12 lines of this changelog when adding an entry.

### New tools to write and review questions more safely (`9536b30`)
The question checker can now check a draft together with the questions that already exist, so repeated sentences and names are caught before you see the draft. Its report is much shorter, and it always ends by saying that a person must still read and review the questions. It can also print "review pages" for a reader (every option in the sentence, every Matching meaning against all four words) and has its own set of 26 self-tests. The working rules and the guide in the README were updated to match, and drafts now live in a private folder.

### Added a file map so the notes are quicker and cheaper to use (`6dc0b7a`)
The README now starts with a map that says where everything is and what to read for each kind of task, so a helper no longer has to read the whole file first. A new working rule keeps the map up to date, and a private checker also looks for out-of-date names in the notes. In a test with six helpers, the answers were just as correct and used about 40% fewer tokens. A few old lines in the notes were corrected, and the testing rule now lists all five saved settings.

## 2026-11-01

### Turkish now covers the quiz, the feedback and the results (`ea4d67c`)
With the Turkish switch on, the quiz screen (question number, score, timer, buttons), the answer feedback and the whole results screen are in Turkish too. Scores use a comma in Turkish (12,5 instead of 12.5). If you change the language while looking at the results, the page switches at once. Questions, answer options and the True / False buttons stay in English.

### Added a Turkish language switch for the menus (first half) (`8f4af6c`)
Settings now has a Language switch, English by default, with a sliding English / Türkçe pill. In Turkish, the menus, buttons, level names, the menu tree, Settings and the pop-ups (like Quit and Time out) are shown in Turkish, and the choice is remembered. Questions and their answer options always stay in English, and the quiz screen and results will follow in the next step.

### Finished "Numbers and Amounts": True or False and Matching (`12b7eb1`)
The second theme is now complete: all 16 quizzes have real questions (104 in total). The True or False and Matching questions mix real-life situations, number order, word endings (like "-teen" and "-ty") and a few sums for the biggest numbers. Matching meanings use new situations, such as letters of the alphabet, half a day and the days in April.

### Wrote the Multiple Choice and Fill in the Blanks questions for "Numbers and Amounts" (`5783251`)
The second theme now has real questions: all four difficulties of Multiple Choice and Fill in the Blanks (64 questions), with short meanings in the word pop-up for all 41 words. Many questions use real-life numbers, such as bus numbers, prices, times and ages, and some are written as small dialogues. The notes now also hold two new rules for writing questions: every word should be tested about equally often, and no wrong answer should appear too often in one quiz.

### Made very short answers stricter in Fill in the Blanks (`5783251`)
Answers of one to three letters, like "hi", "one" or "six", must now be typed exactly. Before, one wrong letter earned half points, which could reward a different real word, like "he" for "hey". Longer answers keep the old, forgiving rule.

### Made SmartBoard Fill in the Blanks one tap (`5783251`)
In SmartBoard mode, tapping a word now puts it straight into the blank. Tapping the word in the blank takes it out. Before, you had to tap the word first and then tap the only blank.

### Fixed keyboard focus behind pop-ups (`d43415c`)
While a pop-up or the menu tree is open, the keyboard can no longer reach the page behind it. Before, someone using the Tab key could answer a question behind the "Time out" pop-up and be charged the extra-time penalty for it. Focus now also returns to the button that opened the pop-up.

### Made SmartBoard mode work (`c5db62d`)
The SmartBoard switch in Settings now does something and is remembered: with it on, Fill in the Blanks lets you tap a word and then tap the blank instead of typing. Scoring is the same as typed Fill, and the switch is locked while a quiz is on screen.

### Added a main menu button (`13eebdf`)
A house button next to the menu tree takes you back to the level screen after a "Go to the main menu?" question with Yes and No buttons. It is hidden on the level screen itself.

### Grouped the levels and added their names (`13eebdf`)
The main menu now splits the levels into three groups with headings (A - Basic user, B - Independent user, C - Proficient user), and each level button shows its name under the code: Beginner, Elementary, Intermediate, Upper Intermediate and Advanced.

### Filled gaps in the project notes (`a45a14d`)
Wrote down details that were only in our conversation: how to test saved settings on a real web address, how the Settings pop-up keeps its controls in sync, two internal fields of the menu, and the idea of splitting the game file later. Also added a small private test-server tool and the color of the dim background behind pop-ups, and updated the testing rule in the working rules to list all three remembered settings (theme, sound and same duration).

### Added a SmartBoard mode switch (preview only) (`9935304`)
The Settings menu now has a "SmartBoard mode" switch with an explanation: it is meant to let students tap a word instead of typing it on a smart board. For now it is only there to show how it will look, and its explanation ends with "Its code hasn't been written yet", because the feature itself is not built.

### Added the changelog rule to the working rules (`d70fbd8`)
The working rules for the helper assistant now say that every commit must add an entry to the changelog. This way the list stays complete even when someone only edits the documents and never opens the README./

### Added this changelog (`d144895`)
A list of every change, written in simple language, so friends and visitors can follow what was built and when. From now on, each commit adds a new entry to it.

### Fixed the word list pop-up and added a back arrow (`002e159`)
The "Words in this game" pop-up used to open already scrolled to the bottom, so the first words were hidden. It now always opens at the top. A round arrow button next to its title also lets players go back to the difficulty screen before the quiz starts.

### Added a menu tree and made pop-ups smoother (`8f8bf35`)
A small pine-tree button next to Settings opens a panel that shows where you are in the menu: level, category, topic, question type and difficulty. Every step you have already chosen is clickable, so you can jump back and change it. The panel slides in from the right on computers and up from the bottom on phones, and the blur behind pop-ups was removed so their animations run more smoothly.

### Added a "Next exercise" button (`1a57cc1`)
Every results page now has a "Next exercise" button. It opens the difficulty screen of the next quiz and marks it with a small "Next" tag: first the next difficulty, then the next question type, then the next topic. At the end of a category, a pop-up lets you choose where to go next.

### Added Claude to the Credits page (`db450c4`)
Claude is now listed on the Credits page, in first place, together with the two creators of the game.

### Added a Settings menu (`322f7e4`)
One gear button at the top now opens a Settings pop-up that replaces the old theme and sound buttons. It has the light/dark/auto theme choice, a sound switch and the "same duration" switch, each with a short explanation. The "same duration" switch is remembered, and it always matches the one on the difficulty screen.

### Moved two question checks to the written review (`b47c84f`)
Two checks (a Matching meaning that contains one of its own words, and repeated sentence patterns) are now done by the reviewer with the review checklist, instead of by the automatic checking tool. The tool's other checks stay as they were, because counting and word-list lookups are better done by a program.

### Wrote the rules for numbers and for new levels (`cdb6cb3`)
Added the rules for using numbers such as 12, 3rd or 10:30 in questions: they may appear in sentences, but the answer itself is always a word. Added notes for the future "Numbers and Amounts" theme, new items in the review checklist, and step-by-step instructions for preparing the word lists of other levels.

### Rewrote the list of planned features (`7dba5b0`)
The Roadmap now lists the plans: a history of plays, overall performance with comments, two separate reset buttons, a "Next exercise" button, a Settings menu, a maker for small lesson files, and a website. Each item has its open questions, so we decide them before building.

### Added two working rules and a "How to play" section (`aa7e6c3`)
Two new rules for the helper assistant: check that nothing contradicts before starting a task, and change every place at once when a rule changes. A new "How to play" section tells people to download only the `index.html` file and open it in a browser.

### Added a review checklist (`4dc2b37`)
A long checklist for reviewing questions the way an experienced teacher would, built from real mistakes found while writing the first theme. Also added the rule "draft first, review, then write" and a step-by-step guide for writing the next theme. The Roadmap gained a history, an overall performance score and a "Next exercise" button.

## 2026-10-31

### Finished the first theme and gave the game its name (`78e5424`)
All 16 quizzes of the first theme, "Greetings and Feelings", now have real questions, after adding True or False and Matching. Matching looks better on phones, with the pair number on the corner of each box. The game also got its name, "My Game Project", its credits, and final English texts for the menus and pop-ups.

### Added the first real questions (`e2f6e31`)
The first real questions (Multiple Choice and Fill in the Blanks) for "Greetings and Feelings", each with an explanation, and short meanings for the 34 words of the theme. The blank in Fill in the Blanks now has natural spacing around it, and the word pop-up has a single Start button.

### Prepared the game for real English vocabulary (`af6e5ee`)
Added the 15 A1 vocabulary themes, one separate quiz for each difficulty, and a "Words in this game" pop-up that shows the meanings before every quiz. Fill in the Blanks now needs typing and forgives small spelling mistakes (half points), Matching gives points for each correct pair, and the right answers are spread fairly across the positions. A long set of notes explains how questions should be planned and written.

### Added a rule to keep private files off GitHub (`d6b6424`)
A rule that the private folder with working files (word lists and plans) must never be uploaded to GitHub.

### Added 21 named grammar topics (`4b6ead0`)
A1 Grammar now shows 21 named topics, such as "To be", "Present simple" and "Comparatives and superlatives", instead of placeholder names. Other levels still use placeholders. The topic buttons now update whenever you choose a category.

### Added the first working rules (`41a1be8`)
Rules for the helper assistant: ask before building, keep everything in one file, keep placeholder text until it is named, keep all numbers in one settings block, test before handing over, and commit only when asked.

### Gave the game its look (`42c202e`)
Each level has its own color, there is a light and a dark mode, and the text uses the Inter font. Small effects were added: a gentle pop for correct answers, confetti for high scores, simple generated sounds and a mute button. All motion turns off for people who ask their device to reduce motion.

### Added the Roadmap (`d60c899`)
A list of planned work in the README: the design, deciding the menu items, filling the menus with real content, and a separate Academic Word List section.

### The first working version (`ec29752`)
A complete game in a single file: five levels, two categories, topics, four question types, four difficulties with timers, a results screen and a Credits pop-up. The questions were still placeholder text. The first documents describing how the game works and how it looks were added too.

### Project started (`ebaf01d`)
The repository was created.
