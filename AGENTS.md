# AGENTS.md

A short index of the owner's working rules. The **full text of every rule** is in `docs/RULES_FULL.md` (the old AGENTS.md, unchanged); read the rule there when you apply it or are unsure. Don't change AGENTS.md or `docs/RULES_FULL.md` unless asked, and when a rule changes, change both.

## Why it looks like this (2026-11-19)
This file was shortened **only to save context**: the owner's context window drained fast, and the old "always read the whole File map" rule cost about 10k tokens per session. **No quality rule changed** (only the reading rule was shortened); the full wording is in `docs/RULES_FULL.md`. The reading lists below, `ADDING_QUESTIONS.md`, the two tools and `.claude/settings.json` belong to the same change. Reasons and measurements: README Roadmap item 14, d, and "Confirmed decisions".

## What to read (and what not)
- **Writing, checking or reviewing questions or glossary meanings:** read `ADDING_QUESTIONS.md` and nothing else first. It lists the few README sections you need.
- **Changing the game (code, css, data, a text, a number):** README "File map", **section A only**, to find your task's row; then read the README / DESIGN sections it points to. To print one section without opening the whole file: `powershell -ExecutionPolicy Bypass -File .gitignore/tools/show_section.ps1 "<heading>"` (`-File DESIGN.md` for DESIGN; `-List` lists the headings). Before a change, also read README "Confirmed decisions" and the matching "Change together" row of the map (rows B to E, same tool).
- **A plain question about how things work:** you may skip "Confirmed decisions" and "Change together". When unsure, read more, not less.
- **Never read** (large, generated or old): a whole theme file or `game/data/glossary/a1.js` (search them: `.gitignore/tools/bank_index.ps1 -Word <word>`), `.gitignore/archive/`, `.gitignore/drafts/*_ALL.json`, `.gitignore/tools/playthrough.js`. `CHANGELOG.md`: only its first 12 lines, when you add an entry.
- Edit README.md and DESIGN.md when it is needed and logical: README holds the algorithms and details a future change needs, DESIGN the design process and language.

## Rules (full text: `docs/RULES_FULL.md`, same numbers)
1. **Ask first.** Before changing any file, ask the owner about every important decision and wait. An answer covers only its own item; a question, an explain request or one "yes" is not a go-ahead for the rest.
2. **Plain files, no build step.** `game/` = `index.html`, `css/`, `js/`, `data/`; opens by double-click, offline; no audio or image files; only the Inter font is external; lowercase file names; private material only in `.gitignore/`.
3. **Placeholder content.** Text the owner has not named stays lorem ipsum (names fixed by the owner: DESIGN.md).
4. **Don't decide open questions.** Follow README "Open questions" and the Roadmap's, and ask.
5. **Numbers live in `CONFIG`.** Change them only there, and update the README Configuration table.
6. **Test before handing over:** no console errors; phone width; light and dark; "reduce motion"; remembered settings (in a normal browser, not a `data:` preview); website and double-click offline (README "Testing", "Website check"); after any change in `game/` run `powershell -ExecutionPolicy Bypass -File .gitignore/tools/set_versions.ps1`, and with `-Check` it must say OK before you commit.
7. **Git.** Commit only when asked, with a meaningful message; don't push unless asked; **every commit adds a `CHANGELOG.md` entry** (README "Changelog").
8. **Private `.gitignore/` folder.** Never `git add`, commit or push it (it is excluded through `.git/info/exclude`). Drawers: `tools/`, `drafts/`, `words/`, `plans/`, `archive/` (never changed, never needed). For A1 read `words/ORG_A1_WORDS.md`; `words/A1_WORDS.md` only to build a file in the same format or when asked.
9. **Draft, validate, review, then write** (README "Workflow: draft → review → write"): drafts only in `.gitignore/drafts/`, run the check script, show a readable draft, review item by item with a quote as evidence (a script result is evidence, never approval), change the files only after the owner's go-ahead.
10. **Check for inconsistencies first.** Check only the files you have read. If two of them disagree (rules that contradict, docs vs code vs `CONFIG`, a plan vs its questions), quote both lines, tell the owner, suggest a fix, and wait.
11. **Change a rule everywhere.** Search (grep) for every place a rule, name, number or fact appears: AGENTS.md, `docs/RULES_FULL.md`, `ADDING_QUESTIONS.md`, README (including its file map), DESIGN.md, the game files, the check scripts, the private files (never `A1_WORDS.md` or another original word list) and memory notes. Tell the owner which places changed.
12. **Keep the file map true.** Update README "File map" in the same change when anything it lists is added, removed, renamed or moved, then run `powershell -ExecutionPolicy Bypass -File .gitignore/tools/check_filemap.ps1`; it must say OK.
13. **Keep the question check script and its guide true.** When a check, option, number or file format changes, update the script's header, the README "Check script" guide, the `-Checks` list, the self-tests and every quoted result; compare the real bank's report before and after; never weaken a check to make a question pass.

## Commands
- Question check: `powershell -ExecutionPolicy Bypass -File .gitignore/tools/check_questions.ps1 -Only 'A1|vocabulary|4|'` (about 6 seconds; no option checks the whole bank, about 1 minute; options: README "Check script").
- Bank index (counts, line of each quiz, where a word is used): `.gitignore/tools/bank_index.ps1`.
- File map: `.gitignore/tools/check_filemap.ps1`. Versions: `.gitignore/tools/set_versions.ps1 -Check`.
