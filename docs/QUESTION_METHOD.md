# Question method for every level (A1 to C1)

Written 2026-11-23 with the owner; linked from AGENTS.md, RULES_FULL.md (rule 9), ADDING_QUESTIONS.md (step 7) and the README map. Tools (private, built 2026-11-23): `check_questions.ps1` checks 21, 29, 36, 37 for A2; `questions/blueprint_check.ps1`; `questions/make_draft_kit.ps1` (made `draft_kit_A2.md`); `review_sheet.ps1` knows the level. A2 rows of `option_settings.txt` exist since 2026-11-23, and `plans/questions/level_share_exceptions.txt` holds the owner's exceptions to the level rule (an answer whose word type has too few words in the theme, for example *fresh*: up to 2 lower-level wrong options).

This is the method for **new** question work at any level: A2 vocabulary first (pilot: Food and Cooking), later B1 to C1, and new A1 work such as the A1 grammar topics. A1 vocabulary is finished and keeps its recipe in `docs/ADDING_QUESTIONS.md`. The rules of AGENTS.md (ask first, draft, check, review, go-ahead, then write) and the README sections "Never ambiguous", "Target words and difficulty", "How similar the wrong options are", "Writing the questions", "Review checklist" and "Question repetition" all stay true; this file does not copy them, it only says the order and what changes. Where this file and the README disagree, stop and ask (rule 10).

## The level rule (owner, 2026-11-23)
1. **Target words first.** Every new word of the level, in the theme's list, is tested, as at A1.
2. **Lower-level words are allowed around them** (sentences, explanations, wrong options, bank words), never forced, and **never the tested word** (an A1 word already had its quizzes at A1). For B1 the lower levels are A1 and A2, for B2 A1 to B1, for C1 A1 to B2. A1 has no lower level.
3. **Wrong options: the current level is the majority.** At least 2 of the 3 wrong options of a question are words of the current level (the bank words of a Fill question: the same share). At A1 this rule does not apply.
4. Every wrong option still passes the second-answer check, whatever its level.
5. **One word type per level (owner, 2026-11-24).** When a word is listed in `ORG_<LEVEL>_WORDS.md` ("word types (full list)") with a word type that is new at this level, only the type(s) listed THERE may be tested, never a type already taught at a lower level. This holds for the whole tested part: the answer, the wrong options, the Fill bank words and the Matching words. Example: *free* is an A1 adjective and an A2 adverb, so at A2 it is tested, and offered as an option, only as the adverb (*Children enter free*). When the level lists several types for one word (*taste*: noun, verb), every question names one of them (the plan line "Tested types"). The rest of a sentence, the explanations and the pop-up meanings keep Rule 2 below (any type of an A1 or A2 word).

## The two word rules (owner, 2026-11-23)
**Rule 1, the tested part.** The tested part (the correct answer, the wrong options, the Fill bank words, the Matching words) of a vocabulary-theme question comes from the theme's own words of the level plus its "Goes well with" words. Lower-level words may be added when the theme has too few close words; most wrong options (at least 2 of 3) still come from the theme. Words of other themes are not used: when a theme runs short, the writer tells the owner and asks. (A grammar topic keeps its own rule: the topic's words or Both.)
**Rule 2, everything else.** The rest of a sentence, the explanations and the pop-up meanings may use words of this level and of the lower levels, never a higher level.
The same text is in `ORG_A2_WORDS.md`, "Rules for A2 questions". Check 38 of `check_questions.ps1` and check B10 of `blueprint_check.ps1` (the blueprint file starts with a line `theme: <theme name>`) report a wrong option from another theme as a warning; the writer then changes the option or asks the owner when the theme runs short.

## Level settings
| Setting | A1 | A2 | B1 to C1 |
|---|---|---|---|
| Sentence length | about 12 words | about 15 words | owner decides when the level starts |
| Weak wrong options at Hard and Very Hard | allowed when a closer word could also be right | not allowed | not allowed |
| Grammar words in explanations | none | rare: *noun, verb, adjective*, only when needed | owner decides |
| Grammar in sentences | A1 limits (Review checklist, section 2) | see below | owner decides |
| Option closeness numbers (min family / max group / min group) | A1: Easy 0/1/0, Medium 0/2/0, Hard 2/3/0, Very Hard 3/3/1 | A2 (owner, 2026-11-23): Easy 1/1/0, Medium 2/2/0, Hard 3/3/1, Very Hard 3/3/2 | owner decides when the level starts |

**A2 grammar in sentences.** The 24 topics of `ORG_A2_WORDS.md` (section 2) may be used. *Normal use:* simple tenses, *can / could*, *going to*, *will*, *have to*, *should*, comparatives and superlatives, countable and uncountable nouns, *like + -ing*, *want to*. *Light use* (a few questions per quiz, never in the tested part of a vocabulary question): past continuous, simple present perfect (*have / has + past participle*), first conditional, common phrasal verbs. *Not at A2:* passive, second and third conditionals, past perfect, reported speech, *so ... that*.

## Steps (one theme per fresh window; the owner opens it)
1. **Read once.** The level's kit `draft_kit_<LEVEL>.md`, the plan of the theme, the README sections above (`show_section.ps1`).
2. **Plan** (owner approves): the theme's words split into four difficulties (at least 8 each), the multi-meaning report, Matching sizes, the closeness numbers for the level if the owner has not set them.
3. **Blueprint** (new). Before any sentence, one table per difficulty: answer word, three wrong options, question type, the word's meaning. Wrong options come from a close group in the same theme and word type (`word_groups.txt`). Make the first table with `python .gitignore/tools/questions/blueprint_solve.py --level A2 --theme "<theme name>"` (private; added 2026-11-23): it proposes the wrong options of every Multiple Choice and Fill row from the approved plan under the same rules as the checker, and marks a row `POOL TIGHT` or `NO CANDIDATE` when the theme runs short (then stop and ask the owner; the theme's words must be in `word_groups.txt` first). Run `blueprint_check.ps1` on the result (closeness, level share, repeated wrong options). The script stops after 15 seconds at the most; a row marked `## FILLER` has an unrelated option (allowed at Easy and Medium) and needs your eye first; rows you fixed by hand can be kept with `--pin <file>` while the rest is solved again. **Quick semantic scan (about 1 minute):** the script does not judge meaning, so read every row and ask whether a natural clue can rule out each close option; swap a doubtful option now, while it is only a table row (free-slot options at Easy and Medium are often unrelated lower-level words, and words with a second meaning, like *present* or *light*, need a look). Fix the table, not the sentences.
4. **Sentences**, one question type at a time, with a new scene for each word in each type. **Distinct contexts across modes (owner, 2026-11-24):** when the same target word is tested in both Multiple Choice and Fill in the Blanks, the two items use different settings, actors and sentence frames: never the same opening clause or the same scenario for one word in two modes (for example "The shop has a large ___ of ..." in both). Before the self-audit, list every word with its items of all types side by side and compare their openings. Run the check script after every file (`check_brief.ps1`), small Edit calls only.
5. **Self-audit**, one full pass: for every wrong option the best argument that it could also be right (a quoted option, not "looks fine"); every sentence read twice, once for a bad reading. Then a second pass **only** over the questions that changed or that a script flagged. The audit is a table the owner can read.
6. **Repetition and closeness checks** on the finished files, `make_readable.ps1`.
7. **Helper review**, once per theme (docs/ADDING_QUESTIONS.md, "Helper review"); verify every finding; report kept and rejected.
8. **Owner's review.** Write into `game/` only after the owner's go-ahead; then the whole-bank check, `set_versions.ps1 -Check`, the browser load.

## What each step prevents (A1 mistakes)
| Mistake | Step |
|---|---|
| Second possible answer, "0 warnings" | 3 (closeness), 5 (argument per wrong option) |
| Repeated wrong options, names, scenes | 3, 4 (new scene), 6 |
| Weak unrelated wrong options at A2+ | 3, level settings |
| Words above the level, wrong word type | 1 (kit), check script |
| Bad second reading | 5 |
| Many-meaning words (chicken, light) | 2 (multi-meaning report) |
| Token cost: whole reports, whole rewrites, three themes in one chat | one theme per window, `check_brief`, Edit calls, step 5 second pass only on changes |
