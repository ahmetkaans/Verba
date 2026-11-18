# Adding questions (read this, not the whole README)

The recipe for writing questions and glossary meanings. The rules are the owner's (AGENTS.md rules 1, 3, 4, 9, 10): ask first, lorem ipsum for names the owner has not fixed, never decide open questions, and **draft → check → self-audit → review → owner's go-ahead → write**. This file only says what to read and what to run.

## Read only this
Run every command from the project folder. `show_section` prints one section by its heading (add `-File` for another file).

1. `powershell -ExecutionPolicy Bypass -File .gitignore/tools/show_section.ps1 "Confirmed decisions"`
2. Once, before drafting, these sections only (same command, the heading in quotes, about 9k tokens in all): `"Never ambiguous"`, `"Target words and difficulty"`, `"How similar the wrong options are"`, `"Writing the questions"`, `"Workflow: draft"` and `"Review checklist"`. For Matching also `"Matching quizzes have a variable length"`. **Not** `"Question content method"` itself: it contains all of these plus the rest (about 12.6k tokens). The shapes of the questions are written below, so `"Question types"` is not needed.
3. This theme's part of the plan and of the word list (private files): `... show_section.ps1 "Time and Dates" -File .gitignore/plans/PLAN_A1_VOCABULARY.md` and the same with `-File .gitignore/words/ORG_A1_WORDS.md`. Once per word list also `"Rules for A1 questions"`.
4. What already exists in the theme: `powershell -ExecutionPolicy Bypass -File .gitignore/tools/bank_index.ps1 -Only 'A1|vocabulary|4|'`. Where one word is used (questions and glossary): `... bank_index.ps1 -Word banana`.

**Do not read:** a whole theme file, `game/data/glossary/a1.js`, the whole README or DESIGN, `.gitignore/drafts/*_ALL.json`, `.gitignore/archive/`, `.gitignore/tools/playthrough.js`. `CHANGELOG.md`: only its first 12 lines, at commit time. To see a glossary entry, use `bank_index.ps1 -Word <word>` (it gives the line), then Read that line range only.

## Shapes (the correct answer is always FIRST; the game shuffles)
- `mc`: `{ "type": "mc", "prompt": "… ___ …", "options": [correct, w1, w2, w3], "explanation": "…" }`
- `tf`: `{ "type": "tf", "prompt": "…", "answer": true, "target": "word", "explanation": "…" }` (4 true and 4 false in a quiz)
- `fill`: `{ "type": "fill", "before": "…", "after": "…", "answer": "x", "bank": ["x", "w1", "w2"], "explanation": "…" }` (bank of 3 or 4, the answer first)
- `match`: `{ "type": "match", "prompt": "Match each word with its meaning.", "pairs": [ { "left": "…", "right": "…" } ×4 ], "explanation": "…" }`
- Optional: `target` (the dictionary form when the answer is inflected: "laughs" → "laugh"), `targetType` (the answer has several word types), fill `accept: [...]`. The full table is README "Question types".
- Key: `"A1|vocabulary|<N>|<mc|tf|fill|match>|<easy|medium|hard|veryhard>"`, with N as in the topics list (no leading zero: `|4|`, not `|04|`). A theme has 16 quizzes; mc, fill and tf quizzes have 8 questions; matching quizzes have a variable length (README "Matching quizzes have a variable length").
- Each question is **one line** (a matching question has its pairs on extra lines). The file part between `Object.assign(GAME_DATA.questions, ` and `);` must stay valid JSON.

## Steps
1. **Draft** in `.gitignore/drafts/A1_vocabulary_<N>_<type>.json` (same shape as the bank: `{ "<key>": [ ...8 questions... ] }`); new glossary meanings in `A1_vocabulary_<N>_glossary.json` (`{ "A1": { "word": ... } }`). Nothing goes into `game/` yet.
2. **Check the draft:** `powershell -ExecutionPolicy Bypass -File .gitignore/tools/check_questions.ps1 -Draft <file> -DraftGlossary <file>`. Fix every error, read every warning.
3. **Self-audit twice** (the eight points in the Workflow section), write `<Prefix>_audit.md`, make the readable file with `.gitignore/tools/make_readable.ps1 -Prefix A1_vocabulary_<N>`, show it to the owner and remind them to ask for the review. Never open the readable file again yourself; you wrote it.
4. **Review** only when the owner asks: `... check_questions.ps1 -Worksheet -Draft <file>` and the Review checklist, with a quote as evidence for every hard item.
5. **Write** only after the owner's go-ahead: small, exact Edit calls (one question per line, inside the array of its key; glossary meanings next to their alphabetical neighbour in `a1.js`). Use the Edit tool, never PowerShell strings.
6. **Verify the theme:** `powershell -ExecutionPolicy Bypass -File .gitignore/tools/check_questions.ps1 -Only 'A1|vocabulary|<N>|'; $LASTEXITCODE` (the number must be 0; end the theme number with `|`). Then the whole bank once, with no options (about 1 minute). Compare `bank_index.ps1` before and after: only the intended counts change.
7. `powershell -ExecutionPolicy Bypass -File .gitignore/tools/set_versions.ps1`, then the same with `-Check` (must say OK). Play the new quizzes in a normal browser (AGENTS.md rule 6).
8. **A new theme only** also needs: `TOPICS_BY_SECTION` (`js/topics.js`), the script tag in `game/index.html`, the README Data file table, the plan, the DESIGN names list (README map, row "A vocabulary theme"), then `powershell -ExecutionPolicy Bypass -File .gitignore/tools/check_filemap.ps1` (must say OK).
9. **Commit** only when asked, with a `CHANGELOG.md` entry (AGENTS.md rule 7).

## Why this file and its "do not read" list exist (2026-11-19)
- A question task used to read about 75k tokens before writing (the File map 10k, the whole "Content" and "Question content method" parts 22k, whole plan and word files, a whole theme file 8k, the glossary 13k). This recipe needs about 25k. The owner's quality rules (Review checklist, self-audit) are **kept in full**; only the reading around them was cut.
- **Do not split `glossary/a1.js` into several files.** The data files are joined with `Object.assign`, which is shallow: a second file with the key `"A1"` would replace the first. Use `bank_index.ps1 -Word` and read only the line range.
- **Do not trust a plain `^## ` search of the README.** `## Food and Drink` is an example inside a code fence (in "Target-word plans"), not a section; `show_section.ps1` skips code fences.
- `.claude/settings.json` (JSON has no comments, so the reason is here) denies Read for `.gitignore/archive/**`, `.gitignore/drafts/*_ALL.json` and `.gitignore/tools/playthrough.js`: they are 40k to 140k tokens each and nothing in a question task needs them. The Edit tool cannot change a file it may not read; lift the line for a moment if `playthrough.js` must change, then put it back.
- Full reasons and measurements: README Roadmap item 14, d.

## Risks the checks do not catch
A second possible right answer, an unnatural sentence, a sentence that can be read rudely, a word above the level. Only reading catches them (Review checklist).
