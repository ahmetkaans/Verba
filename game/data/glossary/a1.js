/* Glossary for the "Words in this game" pop-up and the Word list: the meanings of every tested word, written once per level.
   A word type may have SEVERAL meanings (2026-11-21), each with "for": [quiz-key prefixes after "A1|vocabulary|"]; the pop-up shows the
   meaning of the quiz first, with a *, and the Word list shows every meaning (README "Confirmed decisions"). Shape: { "A1": { "banana": [ { "type": "noun", "meaning": "a long yellow fruit" } ] } }.
   Keys are lower case. The part between "Object.assign(GAME_DATA.glossary, " and the closing ");" must stay valid
   JSON: it is read by .gitignore/tools/check_questions.ps1. One file per level. */
Object.assign(GAME_DATA.glossary, {
  "A1": {
    "hello": [
      { "type": "exclamation", "meaning": "you say it when you meet someone" },
      { "type": "noun", "meaning": "the word people say when they meet" }
    ],
    "hi": { "type": "exclamation", "meaning": "you say it when you meet a friend" },
    "hey": { "type": "exclamation", "meaning": "you say it to a friend when you meet them or want them to listen" },
    "bye": { "type": "exclamation", "meaning": "you say it to a friend when you leave" },
    "goodbye": [
      { "type": "exclamation", "meaning": "you say it when you leave someone" },
      { "type": "noun", "meaning": "the word people say when they leave" }
    ],
    "thanks": [
      { "type": "exclamation", "meaning": "you say it when someone gives you something or helps you" },
      { "type": "noun", "meaning": "words that tell someone you are happy about their help" }
    ],
    "please": { "type": "exclamation", "meaning": "you say it when you ask for something in a nice way" },
    "sorry": [
      { "type": "adjective", "meaning": "sad about something you did" },
      { "type": "exclamation", "meaning": "you say it when you do something wrong" }
    ],
    "fine": { "type": "adjective", "meaning": "well or OK; not sick and not sad" },
    "ok": [
      { "type": "exclamation", "meaning": "you say it when you agree" },
      { "type": "adjective", "meaning": "good enough, not bad" },
      { "type": "adverb", "meaning": "in a way that is good enough" }
    ],
    "yeah": { "type": "exclamation", "meaning": "yes (you say it to friends)" },
    "oh": { "type": "exclamation", "meaning": "you say it when you hear something new, good or bad" },
    "welcome": [
      { "type": "exclamation", "meaning": "you say it to someone when they arrive" },
      { "type": "verb", "meaning": "to be nice to someone who comes to your home or a new place" },
      { "type": "adjective", "meaning": "people are happy to see you or have you with them" }
    ],
    "hungry": { "type": "adjective", "meaning": "you want to eat" },
    "thirsty": { "type": "adjective", "meaning": "you want to drink" },
    "tired": { "type": "adjective", "meaning": "you want to sleep or sit down" },
    "sad": { "type": "adjective", "meaning": "not happy" },
    "angry": { "type": "adjective", "meaning": "not happy with someone because of something bad they did" },
    "afraid": { "type": "adjective", "meaning": "you think something bad can happen to you" },
    "bored": { "type": "adjective", "meaning": "not interested, because there is nothing to do" },
    "excited": { "type": "adjective", "meaning": "very happy because something good is going to happen" },
    "interested": { "type": "adjective", "meaning": "you want to know more about something" },
    "sure": { "type": "adjective", "meaning": "you know something is true" },
    "thank": { "type": "verb", "meaning": "to tell someone you are happy about their help or about something they gave you" },
    "dear": { "type": "adjective", "meaning": "a word before a name at the start of a letter or email" },
    "laugh": [
      { "type": "verb", "meaning": "to make a happy sound when something is funny" },
      { "type": "noun", "meaning": "the happy sound people make when something is funny" }
    ],
    "boring": { "type": "adjective", "meaning": "not interesting at all" },
    "exciting": { "type": "adjective", "meaning": "it makes you feel very happy and interested" },
    "interesting": { "type": "adjective", "meaning": "it makes you want to know more" },
    "believe": { "type": "verb", "meaning": "to think that something is true" },
    "hope": { "type": "verb", "meaning": "to want something good to happen" },
    "happen": { "type": "verb", "meaning": "to take place, like an event or a problem" },
    "one": [
      { "type": "number", "meaning": "the number 1" },
      { "type": "determiner", "meaning": "only this person or thing, not two or more" },
      { "type": "pronoun", "meaning": "a person or thing from a group of them" }
    ],
    "two": { "type": "number", "meaning": "the number 2" },
    "three": { "type": "number", "meaning": "the number 3" },
    "four": { "type": "number", "meaning": "the number 4" },
    "five": { "type": "number", "meaning": "the number 5" },
    "six": { "type": "number", "meaning": "the number 6" },
    "seven": { "type": "number", "meaning": "the number 7" },
    "eight": { "type": "number", "meaning": "the number 8" },
    "first": [
      { "type": "determiner", "meaning": "that comes before all the others" },
      { "type": "number", "meaning": "the one in place number 1, like 1st" },
      { "type": "adverb", "meaning": "before anyone or anything else" }
    ],
    "second": [
      { "type": "number", "meaning": "the one in place number 2, like 2nd" },
      { "type": "determiner", "meaning": "that comes after the first one" },
      { "type": "noun", "meaning": "a very short time: 60 of them make a minute" }
    ],
    "third": { "type": "number", "meaning": "the one in place number 3, like 3rd" },
    "fourth": { "type": "number", "meaning": "the one in place number 4, like 4th" },
    "number": { "type": "noun", "meaning": "something like 7 or 15 that tells how many" },
    "half": [
      { "type": "noun", "meaning": "one of two parts that look the same" },
      { "type": "determiner", "meaning": "one of two parts that look the same, said before a word like class or cake" },
      { "type": "pronoun", "meaning": "one of two parts that look the same, said without a word after it" }
    ],
    "pair": { "type": "noun", "meaning": "two things that go together, like two shoes" },
    "mile": { "type": "noun", "meaning": "a long way, much longer than a meter" },
    "eleven": { "type": "number", "meaning": "the number 11" },
    "twelve": { "type": "number", "meaning": "the number 12" },
    "thirteen": { "type": "number", "meaning": "the number 13" },
    "fourteen": { "type": "number", "meaning": "the number 14" },
    "fifteen": { "type": "number", "meaning": "the number 15" },
    "sixteen": { "type": "number", "meaning": "the number 16" },
    "eighteen": { "type": "number", "meaning": "the number 18" },
    "twenty": { "type": "number", "meaning": "the number 20" },
    "thirty": { "type": "number", "meaning": "the number 30" },
    "forty": { "type": "number", "meaning": "the number 40" },
    "fifty": { "type": "number", "meaning": "the number 50" },
    "sixty": { "type": "number", "meaning": "the number 60" },
    "seventy": { "type": "number", "meaning": "the number 70" },
    "eighty": { "type": "number", "meaning": "the number 80" },
    "ninety": { "type": "number", "meaning": "the number 90" },
    "thousand": { "type": "number", "meaning": "the number 1,000" },
    "nine": { "type": "number", "meaning": "the number 9" },
    "ten": { "type": "number", "meaning": "the number 10" },
    "fifth": { "type": "number", "meaning": "the one in place number 5, like 5th" },
    "quarter": { "type": "noun", "meaning": "one of four parts that look the same" },
    "meter": { "type": "noun", "meaning": "a way to say how long or tall something is; a door is about 2 of them tall" },
    "seventeen": { "type": "number", "meaning": "the number 17" },
    "nineteen": { "type": "number", "meaning": "the number 19" },
    "hundred": { "type": "number", "meaning": "the number 100" },
    "million": { "type": "number", "meaning": "the number 1,000,000" },
    "miss": [
      { "type": "verb", "meaning": "to feel sad because someone is not with you", "for": ["0|mc", "0|tf", "0|match"] },
      { "type": "verb", "meaning": "to be too late for a bus, a train or a plane", "for": ["0|fill", "12"] }
    ],
    "feeling": { "type": "noun", "meaning": "something you feel, like happy or sad" },
    "mother": { "type": "noun", "meaning": "a woman who has a child" },
    "father": { "type": "noun", "meaning": "a man who has a child" },
    "brother": { "type": "noun", "meaning": "a boy or man with the same mother and father as you" },
    "sister": { "type": "noun", "meaning": "a girl or woman with the same mother and father as you" },
    "baby": { "type": "noun", "meaning": "a very young child" },
    "family": [
      { "type": "noun", "meaning": "people like mothers, fathers, children, uncles and aunts" },
      { "type": "adjective", "meaning": "for parents and children together" }
    ],
    "son": { "type": "noun", "meaning": "a boy or man who is someone's child" },
    "phone": [
      { "type": "noun", "meaning": "something you use to call and talk to a person" },
      { "type": "verb", "meaning": "to call a person to talk to them" }
    ],
    "uncle": { "type": "noun", "meaning": "the brother of your mother or father, or the husband of your aunt" },
    "aunt": { "type": "noun", "meaning": "the sister of your mother or father, or the wife of your uncle" },
    "grandfather": { "type": "noun", "meaning": "the father of your mother or father" },
    "married": { "type": "adjective", "meaning": "with a husband or a wife" },
    "funny": { "type": "adjective", "meaning": "it makes you laugh" },
    "pretty": [
      { "type": "adjective", "meaning": "nice to look at" },
      { "type": "adverb", "meaning": "more than a little, but not very" }
    ],
    "hair": { "type": "noun", "meaning": "it is on your head and can be long or short" },
    "born": { "type": "verb", "meaning": "to come into the world as a baby" },
    "poor": { "type": "adjective", "meaning": "with very little money" },
    "rich": { "type": "adjective", "meaning": "with a lot of money" },
    "smart": { "type": "adjective", "meaning": "learning fast and knowing a lot" },
    "girlfriend": { "type": "noun", "meaning": "a woman or girl that a person loves and goes out with" },
    "cousin": { "type": "noun", "meaning": "the child of your aunt or uncle" },
    "address": { "type": "noun", "meaning": "the number and name of the street where a person lives" },
    "famous": { "type": "adjective", "meaning": "known by many people" },
    "introduce": { "type": "verb", "meaning": "to tell people who someone is when they meet" },
    "life": { "type": "noun", "meaning": "all your years, from the day you are born" },
    "parent": { "type": "noun", "meaning": "your mother or your father" },
    "grandparent": { "type": "noun", "meaning": "the mother or father of your mother or father" },
    "member": { "type": "noun", "meaning": "a person who is in a family or a group" },
    "neighbor": { "type": "noun", "meaning": "a person who lives near you" },
    "adult": { "type": "noun", "meaning": "a person who is not a child or a teenager" },
    "friendly": { "type": "adjective", "meaning": "nice to other people" },
    "email": [
      { "type": "noun", "meaning": "a message you send and read on a computer" },
      { "type": "verb", "meaning": "to send a message on a computer" }
    ],
    "strong": { "type": "adjective", "meaning": "a person who can move big, hard things" },
    "daughter": { "type": "noun", "meaning": "a girl or woman who is someone's child" },
    "husband": { "type": "noun", "meaning": "the man a woman is married to" },
    "dad": { "type": "noun", "meaning": "what you call your father when you talk to him" },
    "mom": { "type": "noun", "meaning": "what you call your mother when you talk to her" },
    "grandmother": { "type": "noun", "meaning": "the mother of your mother or father" },
    "tall": { "type": "adjective", "meaning": "high, not short" },
    "age": { "type": "noun", "meaning": "how many years old you are" },
    "birthday": { "type": "noun", "meaning": "the day each year when you were born" },
    "boyfriend": { "type": "noun", "meaning": "a man or boy that a person loves and goes out with" },
    "personal": { "type": "adjective", "meaning": "for one person only, not for other people" },
    "share": { "type": "verb", "meaning": "to use or have something with another person" },
    "partner": { "type": "noun", "meaning": "the person you live with and love, like a husband or wife" },
    "teenager": { "type": "noun", "meaning": "a young person between 13 and 19 years old" },
    "blond": { "type": "adjective", "meaning": "light yellow, like the hair of some people" },
    "form": [
      { "type": "noun", "meaning": "a paper with questions that you fill in with your name and other facts" },
      { "type": "verb", "meaning": "to make or start something" }
    ],
    "wife": { "type": "noun", "meaning": "the woman a man is married to" },
    "fat": { "type": "adjective", "meaning": "big around the body" },
    "teacher": { "type": "noun", "meaning": "a person who helps students learn at a school" },
    "student": { "type": "noun", "meaning": "a person who goes to a school to learn" },
    "class": [
      { "type": "noun", "meaning": "a group of students who learn together", "for": ["3|mc|easy", "3|match|easy"] },
      { "type": "noun", "meaning": "the time when students learn", "for": ["3|tf|easy"] }
    ],
    "classroom": { "type": "noun", "meaning": "a room in a school where students have lessons" },
    "desk": { "type": "noun", "meaning": "a table where you sit to read and write" },
    "pen": { "type": "noun", "meaning": "something you write with; it is often blue or black" },
    "pencil": { "type": "noun", "meaning": "something you write or draw with" },
    "page": { "type": "noun", "meaning": "one of the many papers in a book, with words on it" },
    "word": { "type": "noun", "meaning": "a group of letters that has a meaning" },
    "lesson": { "type": "noun", "meaning": "a time when students learn something with a teacher" },
    "homework": { "type": "noun", "meaning": "work from school that you do at home" },
    "test": [
      { "type": "noun", "meaning": "a group of questions that shows what you know" },
      { "type": "verb", "meaning": "to check what someone knows or what something can do" }
    ],
    "teach": { "type": "verb", "meaning": "to help someone learn something" },
    "paper": { "type": "noun", "meaning": "something that you write or draw on" },
    "list": [
      { "type": "noun", "meaning": "words or things written one under the other" },
      { "type": "verb", "meaning": "to write things one under the other" }
    ],
    "letter": [
      { "type": "noun", "meaning": "a small part of a word that you write, like the first part of \"cat\"", "for": ["3"] },
      { "type": "noun", "meaning": "a paper message that you send in the post", "for": ["13"] }
    ],
    "note": { "type": "noun", "meaning": "a short text that you write to tell someone something" },
    "reading": { "type": "noun", "meaning": "looking at words and understanding them" },
    "writing": { "type": "noun", "meaning": "putting words on paper" },
    "science": { "type": "noun", "meaning": "the study of plants, animals and the weather" },
    "history": { "type": "noun", "meaning": "the study of what happened a long time ago" },
    "geography": { "type": "noun", "meaning": "the study of countries, cities, rivers and mountains" },
    "language": { "type": "noun", "meaning": "the words that people in a country use to talk and write" },
    "exam": { "type": "noun", "meaning": "a big test at the end of a course" },
    "college": { "type": "noun", "meaning": "a school for people who finish high school" },
    "university": { "type": "noun", "meaning": "a big school where adults study for many years" },
    "course": { "type": "noun", "meaning": "a group of lessons about one subject" },
    "subject": { "type": "noun", "meaning": "something that you study at school, like science or music" },
    "project": { "type": "noun", "meaning": "a big piece of work about one subject" },
    "group": { "type": "noun", "meaning": "people or things that are together" },
    "report": { "type": "noun", "meaning": "a text that gives information about something" },
    "important": { "type": "adjective", "meaning": "something you need to think about and not forget" },
    "hard": [
      { "type": "adjective", "meaning": "difficult, not easy" },
      { "type": "adverb", "meaning": "doing something a lot and trying very much" }
    ],
    "rule": { "type": "noun", "meaning": "something that says what you can and cannot do" },
    "text": [
      { "type": "noun", "meaning": "the words on a page", "for": ["3"] },
      { "type": "noun", "meaning": "a short message that you send from a phone", "for": ["13"] }
    ],
    "sentence": { "type": "noun", "meaning": "a group of words that says one thing" },
    "paragraph": { "type": "noun", "meaning": "a part of a text with a few sentences about one idea" },
    "phrase": { "type": "noun", "meaning": "a few words that go together" },
    "dialogue": { "type": "noun", "meaning": "a talk between two people in a book, a play or a movie" },
    "dictionary": { "type": "noun", "meaning": "a book that tells you what words mean" },
    "spelling": { "type": "noun", "meaning": "the right letters in a word" },
    "chart": { "type": "noun", "meaning": "a picture with numbers that shows facts" },
    "section": { "type": "noun", "meaning": "one part of a book, a text or a newspaper" },
    "article": { "type": "noun", "meaning": "a text in a newspaper or a magazine" },
    "title": { "type": "noun", "meaning": "the name of a book, a movie or a text" },
    "today": [
      { "type": "adverb", "meaning": "on this day, the day that is now" },
      { "type": "noun", "meaning": "this day, the day that is now" }
    ],
    "tomorrow": [
      { "type": "adverb", "meaning": "on the day after today" },
      { "type": "noun", "meaning": "the day after today" }
    ],
    "yesterday": [
      { "type": "adverb", "meaning": "on the day before today" },
      { "type": "noun", "meaning": "the day before today" }
    ],
    "morning": { "type": "noun", "meaning": "the first part of the day, after you get up" },
    "afternoon": { "type": "noun", "meaning": "the part of the day after the morning and before the evening" },
    "evening": { "type": "noun", "meaning": "the part of the day after the afternoon and before the night" },
    "night": { "type": "noun", "meaning": "the dark part of the day, when many people sleep" },
    "tonight": [
      { "type": "adverb", "meaning": "on this evening or this night" },
      { "type": "noun", "meaning": "this evening or this night" }
    ],
    "weekend": { "type": "noun", "meaning": "the days at the end of the week when many people do not work or go to school" },
    "hour": { "type": "noun", "meaning": "a time of 60 minutes" },
    "minute": { "type": "noun", "meaning": "a short time: 60 of them make one hour" },
    "clock": { "type": "noun", "meaning": "a thing that shows what time it is" },
    "soon": { "type": "adverb", "meaning": "in a short time from now" },
    "monday": { "type": "noun", "meaning": "the day after Sunday" },
    "tuesday": { "type": "noun", "meaning": "the day after Monday" },
    "wednesday": { "type": "noun", "meaning": "the day after Tuesday" },
    "thursday": { "type": "noun", "meaning": "the day after Wednesday" },
    "friday": { "type": "noun", "meaning": "the day after Thursday" },
    "saturday": { "type": "noun", "meaning": "the day after Friday" },
    "sunday": { "type": "noun", "meaning": "the day after Saturday" },
    "spring": { "type": "noun", "meaning": "the time of the year after winter and before summer" },
    "summer": { "type": "noun", "meaning": "the hot time of the year, after spring" },
    "fall": [
      { "type": "verb", "meaning": "to go down, for example to the floor" },
      { "type": "noun", "meaning": "the time of the year between summer and winter" }
    ],
    "winter": { "type": "noun", "meaning": "the cold time of the year, when there can be snow" },
    "early": [
      { "type": "adjective", "meaning": "before the time you need to be there" },
      { "type": "adverb", "meaning": "before the time you need to be there" }
    ],
    "late": [
      { "type": "adjective", "meaning": "after the time you need to be there" },
      { "type": "adverb", "meaning": "after the time you need to be there" }
    ],
    "next": [
      { "type": "adjective", "meaning": "coming after this one" },
      { "type": "adverb", "meaning": "after this one, as the thing that comes after" }
    ],
    "january": { "type": "noun", "meaning": "the first month of the year" },
    "february": { "type": "noun", "meaning": "the second month of the year; it is the shortest month" },
    "march": { "type": "noun", "meaning": "the third month of the year" },
    "april": { "type": "noun", "meaning": "the fourth month of the year" },
    "may": { "type": "noun", "meaning": "the fifth month of the year" },
    "june": { "type": "noun", "meaning": "the month after May" },
    "july": { "type": "noun", "meaning": "the month after June" },
    "august": { "type": "noun", "meaning": "the month after July" },
    "september": { "type": "noun", "meaning": "the month after August" },
    "october": { "type": "noun", "meaning": "the month after September" },
    "november": { "type": "noun", "meaning": "the month after October" },
    "december": { "type": "noun", "meaning": "the last month of the year" },
    "month": { "type": "noun", "meaning": "one of the twelve parts of a year, like May or June" },
    "date": { "type": "noun", "meaning": "the day of the month, like May 5" },
    "later": { "type": "adverb", "meaning": "after now, at a time that is not now" },
    "end": [
      { "type": "noun", "meaning": "the last part, where something stops" },
      { "type": "verb", "meaning": "to stop, or to come to the last part" }
    ],
    "begin": { "type": "verb", "meaning": "to start" },
    "beginning": { "type": "noun", "meaning": "the first part of something" },
    "midnight": { "type": "noun", "meaning": "twelve o'clock at night, when one day ends and a new day begins" },
    "o'clock": { "type": "adverb", "meaning": "used after a number to say the hour, with no extra minutes" },
    "period": { "type": "noun", "meaning": "a time that goes on for days, weeks or months" },
    "present": [
      { "type": "adjective", "meaning": "at this time, now" },
      { "type": "noun", "meaning": "the time that is now" }
    ],
    "future": { "type": "noun", "meaning": "the time that comes after now" },
    "moment": { "type": "noun", "meaning": "a very short time" },
    "special": { "type": "adjective", "meaning": "different from other things in a good way" },
    "apartment": { "type": "noun", "meaning": "a home in a big building, with its own door" },
    "bath": { "type": "noun", "meaning": "something you sit in with water to wash your body" },
    "bathroom": { "type": "noun", "meaning": "a room with a bath or a shower" },
    "bed": { "type": "noun", "meaning": "something you sleep on" },
    "bedroom": { "type": "noun", "meaning": "a room where you sleep" },
    "box": { "type": "noun", "meaning": "something you put things in and keep them in" },
    "break": [
      { "type": "verb", "meaning": "to go into pieces, or to make something go into pieces" },
      { "type": "noun", "meaning": "a short time when you do not work" }
    ],
    "breakfast": { "type": "noun", "meaning": "the first meal of the day" },
    "bring": { "type": "verb", "meaning": "to take something with you when you come" },
    "busy": { "type": "adjective", "meaning": "with a lot to do" },
    "chair": { "type": "noun", "meaning": "something you sit on" },
    "clean": [
      { "type": "adjective", "meaning": "not dirty" },
      { "type": "verb", "meaning": "to make something not dirty" }
    ],
    "cook": { "type": "verb", "meaning": "to make food hot so you can eat it" },
    "dinner": { "type": "noun", "meaning": "the main meal of the day, often in the evening" },
    "dirty": { "type": "adjective", "meaning": "not clean" },
    "door": { "type": "noun", "meaning": "a thing you open to go into or out of a room or a house" },
    "downstairs": { "type": "adverb", "meaning": "on the floor below you in a house" },
    "finish": { "type": "verb", "meaning": "to come to the end of something" },
    "floor": { "type": "noun", "meaning": "the part of a room that you walk on" },
    "garden": { "type": "noun", "meaning": "a place near a house with flowers and plants" },
    "keep": { "type": "verb", "meaning": "to have something and not lose it or give it away" },
    "key": [
      { "type": "noun", "meaning": "a small thing that opens a door" },
      { "type": "adjective", "meaning": "very important" }
    ],
    "kitchen": { "type": "noun", "meaning": "a room where you cook" },
    "lie": { "type": "verb", "meaning": "to put your body down on a bed or on the floor" },
    "light": [
      { "type": "noun", "meaning": "what lets you see, from the sun or from a thing in a room" },
      { "type": "adjective", "meaning": "not dark" }
    ],
    "lunch": { "type": "noun", "meaning": "the meal between breakfast and dinner" },
    "move": { "type": "verb", "meaning": "to go or to take something to another place or home" },
    "quiet": { "type": "adjective", "meaning": "with very little sound" },
    "ready": { "type": "adjective", "meaning": "when you have everything you need and can start" },
    "relax": { "type": "verb", "meaning": "to feel good and not work" },
    "room": { "type": "noun", "meaning": "a space in a house or a building, with walls and a door" },
    "routine": { "type": "noun", "meaning": "the things you do every day at the same time" },
    "shower": { "type": "noun", "meaning": "a way to wash with water that falls on you" },
    "table": { "type": "noun", "meaning": "a thing with legs, where you eat or work" },
    "toilet": { "type": "noun", "meaning": "something in a bathroom that people sit on and use" },
    "upstairs": { "type": "adverb", "meaning": "on the floor above you in a house" },
    "wake": { "type": "verb", "meaning": "to stop sleeping" },
    "wall": { "type": "noun", "meaning": "one of the parts that stand around a room" },
    "wash": { "type": "verb", "meaning": "to clean with water" },
    "window": { "type": "noun", "meaning": "a place in a wall with glass, where you can look out" },
    "yard": { "type": "noun", "meaning": "the open place behind or in front of a house" },
    "add": { "type": "verb", "meaning": "to put one thing into another thing" },
    "apple": { "type": "noun", "meaning": "a fruit that is red, green or yellow" },
    "banana": { "type": "noun", "meaning": "a long yellow fruit" },
    "beer": { "type": "noun", "meaning": "a yellow drink for adults" },
    "bottle": { "type": "noun", "meaning": "a tall thing for water, milk or other drinks" },
    "bread": { "type": "noun", "meaning": "a food that people cut and eat with butter or cheese" },
    "butter": { "type": "noun", "meaning": "a yellow food that you put on bread" },
    "cake": { "type": "noun", "meaning": "a food that people eat on a birthday" },
    "carrot": { "type": "noun", "meaning": "a long orange vegetable" },
    "cheese": { "type": "noun", "meaning": "a food made from milk, often yellow or white" },
    "chicken": [
      { "type": "noun", "meaning": "the meat of a bird that people eat", "for": ["6"] },
      { "type": "noun", "meaning": "a farm bird that gives us eggs", "for": ["11"] }
    ],
    "chocolate": { "type": "noun", "meaning": "a brown food or drink that many people like" },
    "coffee": { "type": "noun", "meaning": "a hot brown drink" },
    "cooking": { "type": "noun", "meaning": "making food ready to eat" },
    "cream": { "type": "noun", "meaning": "a white food from milk, often put on cake or in coffee" },
    "cup": { "type": "noun", "meaning": "something you drink hot drinks from" },
    "cut": { "type": "verb", "meaning": "to make something into pieces" },
    "delicious": { "type": "adjective", "meaning": "very good to eat" },
    "diet": { "type": "noun", "meaning": "the food and drink that a person usually has" },
    "dish": { "type": "noun", "meaning": "food that is made in a special way" },
    "egg": { "type": "noun", "meaning": "a food that comes from a chicken" },
    "fish": { "type": "noun", "meaning": "an animal that lives in water, or its meat as food" },
    "food": { "type": "noun", "meaning": "what people and animals eat" },
    "fruit": { "type": "noun", "meaning": "food that grows on plants and trees, like an apple" },
    "full": { "type": "adjective", "meaning": "when you cannot eat or drink any more" },
    "glass": { "type": "noun", "meaning": "something you drink water from" },
    "healthy": { "type": "adjective", "meaning": "good for your body, or not sick" },
    "ice cream": { "type": "noun", "meaning": "a cold food that people eat on a hot day" },
    "juice": { "type": "noun", "meaning": "a drink from fruit" },
    "meal": { "type": "noun", "meaning": "food that you eat at one time, like breakfast or dinner" },
    "meat": { "type": "noun", "meaning": "the part of an animal that people eat" },
    "menu": { "type": "noun", "meaning": "a list of the food and drinks at a restaurant" },
    "milk": { "type": "noun", "meaning": "a white drink from a cow" },
    "onion": { "type": "noun", "meaning": "a vegetable that people put in many dishes" },
    "orange": [
      { "type": "noun", "meaning": "a fruit that gives juice, or the color of this fruit" },
      { "type": "adjective", "meaning": "with the color between red and yellow" }
    ],
    "order": [
      { "type": "noun", "meaning": "the food, the drink or the things that a person asks for" },
      { "type": "verb", "meaning": "to ask a restaurant or a store to bring you food, a drink or something else" }
    ],
    "pepper": { "type": "noun", "meaning": "something we put on food, like salt" },
    "piece": { "type": "noun", "meaning": "one part of something, like cake or bread" },
    "pizza": { "type": "noun", "meaning": "a food with cheese on it" },
    "potato": { "type": "noun", "meaning": "a brown vegetable that people cook and eat" },
    "prepare": { "type": "verb", "meaning": "to make something ready" },
    "restaurant": { "type": "noun", "meaning": "a place where you buy and eat a meal" },
    "rice": { "type": "noun", "meaning": "small white food from a plant, that people cook" },
    "salad": { "type": "noun", "meaning": "a cold food made with vegetables" },
    "salt": { "type": "noun", "meaning": "something white that we put on food, like pepper" },
    "sandwich": { "type": "noun", "meaning": "two pieces of bread with food between them" },
    "soup": { "type": "noun", "meaning": "a hot food that is like a drink" },
    "sugar": { "type": "noun", "meaning": "something white that we put in coffee or tea" },
    "tea": { "type": "noun", "meaning": "a hot drink that people often have with milk" },
    "tomato": { "type": "noun", "meaning": "a red vegetable" },
    "vegetable": { "type": "noun", "meaning": "a plant that people eat, like a carrot" },
    "waiter": { "type": "noun", "meaning": "a person who brings food to the table in a restaurant" },
    "water": { "type": "noun", "meaning": "a drink with no color that we need to live" },
    "wine": { "type": "noun", "meaning": "a drink for adults, often red or white" },
    "bag": { "type": "noun", "meaning": "something you carry things in" },
    "black": [
      { "type": "adjective", "meaning": "with the color of the letters in most books" },
      { "type": "noun", "meaning": "the color of the letters in most books" }
    ],
    "blue": [
      { "type": "adjective", "meaning": "with the color of the ocean on a sunny day" },
      { "type": "noun", "meaning": "the color of the ocean on a sunny day" }
    ],
    "boot": { "type": "noun", "meaning": "a strong shoe for rain or snow" },
    "brown": [
      { "type": "adjective", "meaning": "with the color of chocolate" },
      { "type": "noun", "meaning": "the color of chocolate" }
    ],
    "clothes": { "type": "noun", "meaning": "what people wear, like shirts and pants" },
    "coat": { "type": "noun", "meaning": "a long warm thing you wear outside in cold weather" },
    "color": { "type": "noun", "meaning": "red, blue and green are examples" },
    "dark": { "type": "adjective", "meaning": "with no light, or with very little light" },
    "design": [
      { "type": "noun", "meaning": "a plan or a picture of how something will look" },
      { "type": "verb", "meaning": "to plan how something will look" }
    ],
    "dress": [
      { "type": "noun", "meaning": "something you wear on your body, with a skirt part" },
      { "type": "verb", "meaning": "to put clothes on yourself or on another person" }
    ],
    "gray": [
      { "type": "adjective", "meaning": "with the color of an elephant" },
      { "type": "noun", "meaning": "the color of an elephant" }
    ],
    "green": [
      { "type": "adjective", "meaning": "with the color of many plants and trees" },
      { "type": "noun", "meaning": "the color of many plants and trees" }
    ],
    "hat": { "type": "noun", "meaning": "something you wear on your head" },
    "jacket": { "type": "noun", "meaning": "something short and warm that you wear outside" },
    "jeans": { "type": "noun", "meaning": "strong pants, often blue" },
    "large": { "type": "adjective", "meaning": "big" },
    "pants": { "type": "noun", "meaning": "clothes for your legs" },
    "pink": [
      { "type": "adjective", "meaning": "with the color of a pig" },
      { "type": "noun", "meaning": "the color of a pig" }
    ],
    "purple": [
      { "type": "adjective", "meaning": "with a color between red and blue, like some flowers" },
      { "type": "noun", "meaning": "a color between red and blue, like some flowers" }
    ],
    "red": [
      { "type": "adjective", "meaning": "with the color of a tomato" },
      { "type": "noun", "meaning": "the color of a tomato" }
    ],
    "shirt": { "type": "noun", "meaning": "something you wear on your body, with arms" },
    "shoe": { "type": "noun", "meaning": "something you wear on your foot" },
    "skirt": { "type": "noun", "meaning": "something you wear around your body below a shirt, with no legs" },
    "style": { "type": "noun", "meaning": "the way something looks" },
    "sweater": { "type": "noun", "meaning": "a warm shirt for cold weather" },
    "t-shirt": { "type": "noun", "meaning": "a shirt with short arms, for hot weather" },
    "umbrella": { "type": "noun", "meaning": "something you carry when it rains" },
    "wear": { "type": "verb", "meaning": "to have clothes on your body" },
    "white": [
      { "type": "adjective", "meaning": "with the color of snow" },
      { "type": "noun", "meaning": "the color of snow" }
    ],
    "yellow": [
      { "type": "adjective", "meaning": "with the color of a banana" },
      { "type": "noun", "meaning": "the color of a banana" }
    ],
    "area": { "type": "noun", "meaning": "a part of a town, a city or a country" },
    "bank": { "type": "noun", "meaning": "a place where people keep their money" },
    "bar": { "type": "noun", "meaning": "a place where adults have a drink and talk with friends" },
    "bill": { "type": "noun", "meaning": "a paper that shows how much money you must pay" },
    "build": { "type": "verb", "meaning": "to make a house, a school or a road" },
    "building": { "type": "noun", "meaning": "a place with walls, windows and doors, like a house or a school" },
    "cafe": { "type": "noun", "meaning": "a small place where you can drink coffee and eat a little" },
    "card": { "type": "noun", "meaning": "a small thing that you can use to pay" },
    "cent": { "type": "noun", "meaning": "very little money; 100 of them make one dollar" },
    "center": { "type": "noun", "meaning": "the busy part of a city or a town, with many stores" },
    "change": [
      { "type": "verb", "meaning": "to make something different, or to put on other clothes" },
      { "type": "noun", "meaning": "the money that a store gives back when you pay too much" }
    ],
    "cheap": { "type": "adjective", "meaning": "costing only a little money" },
    "city": { "type": "noun", "meaning": "a very big town with many people and tall buildings" },
    "club": { "type": "noun", "meaning": "a group of people who meet to do a sport or something else together, or the place where they meet" },
    "cost": [
      { "type": "noun", "meaning": "how much money you must pay for something" },
      { "type": "verb", "meaning": "to have a price" }
    ],
    "customer": { "type": "noun", "meaning": "a person who buys things in a store" },
    "dollar": { "type": "noun", "meaning": "the money that people use in New York" },
    "euro": { "type": "noun", "meaning": "the money that people use in Paris, Berlin and many other cities" },
    "expensive": { "type": "adjective", "meaning": "with a high price; you need a lot of money to buy it" },
    "extra": { "type": "adjective", "meaning": "more than you need, or one more" },
    "free": { "type": "adjective", "meaning": "with no price; you do not pay for it" },
    "gym": { "type": "noun", "meaning": "a big room or building where people play sports or do exercise" },
    "hospital": { "type": "noun", "meaning": "a building where doctors and nurses help sick people" },
    "hotel": { "type": "noun", "meaning": "a building where people sleep when they travel" },
    "include": { "type": "verb", "meaning": "to have something in it" },
    "library": { "type": "noun", "meaning": "a place where you can read books and take them home" },
    "local": { "type": "adjective", "meaning": "from the area near you" },
    "main": { "type": "adjective", "meaning": "the biggest or most important" },
    "mall": { "type": "noun", "meaning": "a big building with many stores" },
    "market": { "type": "noun", "meaning": "a place where people sell food and other things" },
    "modern": { "type": "adjective", "meaning": "new, not old" },
    "money": { "type": "noun", "meaning": "what you use to pay for things" },
    "museum": { "type": "noun", "meaning": "a building where people look at old and special things" },
    "neighborhood": { "type": "noun", "meaning": "a part of a town where people live near each other" },
    "office": { "type": "noun", "meaning": "a place where people work at desks" },
    "park": [
      { "type": "noun", "meaning": "a green place in a town, where people walk and play" },
      { "type": "verb", "meaning": "to put a car in a place and leave it" }
    ],
    "pay": { "type": "verb", "meaning": "to give money when you buy something" },
    "police": { "type": "noun", "meaning": "people who help you and stop bad things in the street" },
    "pool": { "type": "noun", "meaning": "a place with water where people swim" },
    "pound": { "type": "noun", "meaning": "the money that people use in London" },
    "price": { "type": "noun", "meaning": "the money you must pay for something" },
    "product": { "type": "noun", "meaning": "something that people make or grow and then sell" },
    "road": { "type": "noun", "meaning": "a long way for cars and buses" },
    "sell": { "type": "verb", "meaning": "to give something to a person who pays for it" },
    "shop": [
      { "type": "noun", "meaning": "a place where people sell things like hats, shoes or books" },
      { "type": "verb", "meaning": "to buy things in stores" }
    ],
    "shopping": { "type": "noun", "meaning": "buying things in stores" },
    "spend": { "type": "verb", "meaning": "to use your money to buy things" },
    "station": { "type": "noun", "meaning": "a place where trains and buses stop" },
    "store": { "type": "noun", "meaning": "a place where you buy things" },
    "street": { "type": "noun", "meaning": "a road in a town, with houses or shops next to it" },
    "supermarket": { "type": "noun", "meaning": "a very big store with food and many other things" },
    "theater": { "type": "noun", "meaning": "a place where you watch a play or a movie" },
    "town": { "type": "noun", "meaning": "a place with houses, stores and schools; it is smaller than a city" },
    "action": { "type": "noun", "meaning": "something that you do, or exciting things that happen quickly in a movie" },
    "activity": { "type": "noun", "meaning": "something that you do, like a game, a sport or a class" },
    "amazing": { "type": "adjective", "meaning": "very, very good, more than you thought" },
    "art": { "type": "noun", "meaning": "pictures and other beautiful things that people make with colors" },
    "awesome": { "type": "adjective", "meaning": "very, very good; you love it" },
    "ball": { "type": "noun", "meaning": "a thing that you use in sports like tennis and basketball" },
    "band": { "type": "noun", "meaning": "a group of people who play music together" },
    "baseball": { "type": "noun", "meaning": "a sport with a small ball and two teams" },
    "basketball": { "type": "noun", "meaning": "a sport where two teams play with a big ball" },
    "camera": { "type": "noun", "meaning": "a thing that you use to take photos" },
    "climb": { "type": "verb", "meaning": "to go up something, like a mountain or a tree" },
    "concert": { "type": "noun", "meaning": "a time when singers or a band play music for many people" },
    "cool": { "type": "adjective", "meaning": "nice in a way that people like" },
    "dance": [
      { "type": "verb", "meaning": "to move your body to music" },
      { "type": "noun", "meaning": "a party where people move to music, for example at school" }
    ],
    "dancing": { "type": "noun", "meaning": "moving your body to music" },
    "draw": { "type": "verb", "meaning": "to make a picture with a pencil" },
    "event": { "type": "noun", "meaning": "a time when many people come together" },
    "exercise": [
      { "type": "noun", "meaning": "moving your body to stay strong" },
      { "type": "verb", "meaning": "to run, swim or play sports to be strong" }
    ],
    "fantastic": { "type": "adjective", "meaning": "much better than good" },
    "favorite": [
      { "type": "adjective", "meaning": "the one that you like the most" },
      { "type": "noun", "meaning": "the thing that you like more than all the others" }
    ],
    "festival": { "type": "noun", "meaning": "a big event with music, food or other fun things, for many people" },
    "final": { "type": "adjective", "meaning": "last; coming at the end" },
    "football": { "type": "noun", "meaning": "a sport with two teams and a ball" },
    "fun": { "type": "noun", "meaning": "a good time; when you laugh and enjoy things" },
    "game": { "type": "noun", "meaning": "something that you play, with rules, like cards or basketball" },
    "guitar": { "type": "noun", "meaning": "a music thing that people play in a band" },
    "hobby": { "type": "noun", "meaning": "something that you like to do in your free time" },
    "interest": [
      { "type": "noun", "meaning": "when you want to learn or do more of something" },
      { "type": "verb", "meaning": "to make you want to learn more about something" }
    ],
    "join": { "type": "verb", "meaning": "to become a part of a team or a club" },
    "lose": [
      { "type": "verb", "meaning": "to not win a game", "for": ["9|mc|medium", "9|match|medium"] },
      { "type": "verb", "meaning": "to not know where something is", "for": ["9|fill|medium"] }
    ],
    "magazine": { "type": "noun", "meaning": "a book with pictures and stories that comes out every week or month" },
    "match": [
      { "type": "noun", "meaning": "a game between two teams or two players" },
      { "type": "verb", "meaning": "to look good with something else, like two colors" }
    ],
    "movie": { "type": "noun", "meaning": "a story with pictures and sound, that you watch" },
    "music": { "type": "noun", "meaning": "nice sounds that people make by singing or by playing things like a piano" },
    "paint": [
      { "type": "verb", "meaning": "to put color on a wall or on paper" },
      { "type": "noun", "meaning": "something with color that you put on a wall or on paper" }
    ],
    "painting": { "type": "noun", "meaning": "a picture that a person makes with colors" },
    "party": { "type": "noun", "meaning": "a time with food, music and friends" },
    "photo": { "type": "noun", "meaning": "a picture that you take with a camera" },
    "photograph": { "type": "noun", "meaning": "a picture that a camera makes, often kept for many years" },
    "piano": { "type": "noun", "meaning": "a big music thing with black and white keys, played with the hands" },
    "picture": { "type": "noun", "meaning": "something that you look at, like a drawing or a photo" },
    "player": { "type": "noun", "meaning": "a person who plays a game or a sport" },
    "point": { "type": "noun", "meaning": "what a team or a player gets when they do well in a game" },
    "popular": { "type": "adjective", "meaning": "known and liked by a lot of people" },
    "practice": [
      { "type": "noun", "meaning": "time that you use to get better at something, like the piano" },
      { "type": "verb", "meaning": "to play or do something many times to be good at it" }
    ],
    "real": { "type": "adjective", "meaning": "true, and not only in a story" },
    "show": [
      { "type": "verb", "meaning": "to let a person see something" },
      { "type": "noun", "meaning": "something that you watch on TV or at a theater" }
    ],
    "sing": { "type": "verb", "meaning": "to make music with your mouth" },
    "singer": { "type": "noun", "meaning": "a person who sings, for example at a concert" },
    "song": { "type": "noun", "meaning": "words and music that people sing" },
    "sound": [
      { "type": "noun", "meaning": "something that you hear" },
      { "type": "verb", "meaning": "to be nice or bad when you hear it" }
    ],
    "sport": { "type": "noun", "meaning": "a game like tennis, that people play to be strong" },
    "story": { "type": "noun", "meaning": "words that tell about people and what happens to them" },
    "swim": { "type": "verb", "meaning": "to move in water with your arms and legs" },
    "swimming": { "type": "noun", "meaning": "moving in water with your arms and legs, as a sport" },
    "team": { "type": "noun", "meaning": "a group of people who play a game together" },
    "tennis": { "type": "noun", "meaning": "a sport with a small ball and two or four players" },
    "terrible": { "type": "adjective", "meaning": "so bad that you do not like it at all" },
    "win": { "type": "verb", "meaning": "to be the best in a game" },
    "wonderful": { "type": "adjective", "meaning": "so nice that you are very happy about it" },
    "advice": { "type": "noun", "meaning": "a good idea that a person tells you to help you" },
    "arm": { "type": "noun", "meaning": "the long part of your body that has your hand at the end" },
    "back": [
      { "type": "noun", "meaning": "the part of your body behind you" },
      { "type": "adverb", "meaning": "to the place that you came from" }
    ],
    "body": { "type": "noun", "meaning": "all of a person, from the head to the feet" },
    "doctor": { "type": "noun", "meaning": "a person who helps sick people to get well" },
    "ear": { "type": "noun", "meaning": "the part of your head that you hear with" },
    "eye": { "type": "noun", "meaning": "the part of your face that you see with" },
    "face": { "type": "noun", "meaning": "the front part of your head, with your eyes, nose and mouth" },
    "foot": { "type": "noun", "meaning": "the part at the end of your leg" },
    "hand": { "type": "noun", "meaning": "the part at the end of your arm" },
    "head": { "type": "noun", "meaning": "the part of your body with your face and hair" },
    "health": { "type": "noun", "meaning": "how well your body is" },
    "hear": { "type": "verb", "meaning": "to know about a sound with your ears" },
    "leg": { "type": "noun", "meaning": "the long part of your body that you walk with" },
    "mouth": { "type": "noun", "meaning": "the part of your face that you eat and talk with" },
    "nose": { "type": "noun", "meaning": "the part of your face above your mouth" },
    "nurse": { "type": "noun", "meaning": "a person who helps sick people and works with doctors" },
    "sick": { "type": "adjective", "meaning": "not well" },
    "tooth": { "type": "noun", "meaning": "one of the small hard white things in your mouth" },
    "air": { "type": "noun", "meaning": "what is all around us; we cannot see it, but we need it to live" },
    "animal": { "type": "noun", "meaning": "a living thing that is not a plant, like a dog or a bird" },
    "beach": { "type": "noun", "meaning": "land next to the water, where people play and sit in the sun" },
    "bird": { "type": "noun", "meaning": "an animal with two legs, and most of them can fly" },
    "cat": { "type": "noun", "meaning": "a small animal with four legs that many people have at home" },
    "cow": { "type": "noun", "meaning": "a big farm animal that gives us milk" },
    "dangerous": { "type": "adjective", "meaning": "when something very bad can happen to you" },
    "die": { "type": "verb", "meaning": "to stop living" },
    "dog": { "type": "noun", "meaning": "an animal that many people have at home and walk with" },
    "elephant": { "type": "noun", "meaning": "a very big gray animal with a very long nose" },
    "farm": { "type": "noun", "meaning": "a place in the country with animals, where a farmer works" },
    "farmer": { "type": "noun", "meaning": "a person who works on a farm" },
    "fire": { "type": "noun", "meaning": "something very hot that gives light" },
    "flower": { "type": "noun", "meaning": "the pretty red, yellow or white part of a plant" },
    "grow": { "type": "verb", "meaning": "to get bigger" },
    "high": { "type": "adjective", "meaning": "far up, above other things" },
    "horse": { "type": "noun", "meaning": "a big, strong animal that runs fast, and people can ride it" },
    "ice": { "type": "noun", "meaning": "water that is very cold and hard" },
    "island": { "type": "noun", "meaning": "land with water all around it" },
    "land": { "type": "noun", "meaning": "the part of the world that is not water" },
    "lion": { "type": "noun", "meaning": "a very big yellow cat that lives in Africa" },
    "mountain": { "type": "noun", "meaning": "a very, very high place on the land" },
    "mouse": [
      { "type": "noun", "meaning": "a very small animal that likes cheese", "for": ["11"] },
      { "type": "noun", "meaning": "a small thing that you move with your hand to use a computer", "for": ["13"] }
    ],
    "natural": { "type": "adjective", "meaning": "like a tree or a river, and not from people" },
    "ocean": { "type": "noun", "meaning": "a very big water between countries" },
    "pig": { "type": "noun", "meaning": "a pink farm animal with a small nose" },
    "plant": { "type": "noun", "meaning": "a living thing, like a flower or a tree, that needs water" },
    "rain": [
      { "type": "noun", "meaning": "water that comes down from above" },
      { "type": "verb", "meaning": "when water comes down from above" }
    ],
    "river": { "type": "noun", "meaning": "water that goes across the land in a long line" },
    "sheep": { "type": "noun", "meaning": "a farm animal with a lot of white hair, which people use for warm clothes" },
    "snake": { "type": "noun", "meaning": "a long animal with no legs" },
    "snow": [
      { "type": "noun", "meaning": "white and cold; it comes down in winter" },
      { "type": "verb", "meaning": "when white, cold things come down in winter" }
    ],
    "space": { "type": "noun", "meaning": "the very big place with the sun and the stars in it" },
    "star": { "type": "noun", "meaning": "a small light that you see at night, far above us" },
    "sun": { "type": "noun", "meaning": "the big light far above us in the day that makes us warm" },
    "sunny": { "type": "adjective", "meaning": "with a lot of sun" },
    "tree": { "type": "noun", "meaning": "a very tall plant" },
    "warm": { "type": "adjective", "meaning": "not cold and not hot" },
    "weather": { "type": "noun", "meaning": "the sun, the rain, the snow and the wind of the day" },
    "airport": { "type": "noun", "meaning": "a place where planes go up and come down" },
    "arrive": { "type": "verb", "meaning": "to get to a place" },
    "bicycle": { "type": "noun", "meaning": "something that you sit on and ride; you move it with your feet" },
    "bike": { "type": "noun", "meaning": "a short word for bicycle" },
    "boat": { "type": "noun", "meaning": "something that carries people on the water" },
    "bus": { "type": "noun", "meaning": "a big car for many people that stops at many places in a town" },
    "capital": [
      { "type": "noun", "meaning": "the most important city in a country" },
      { "type": "adjective", "meaning": "big, like the first letter of a name" }
    ],
    "car": { "type": "noun", "meaning": "a thing that people drive on the road, for a few people" },
    "carry": { "type": "verb", "meaning": "to take something with you in your hands" },
    "country": { "type": "noun", "meaning": "a land with its own name and people, like France or Japan" },
    "culture": { "type": "noun", "meaning": "the food, the music and the way of life of a country" },
    "drive": { "type": "verb", "meaning": "to make a car or a bus go" },
    "driver": { "type": "noun", "meaning": "a person who drives a car, a bus or a taxi" },
    "east": [
      { "type": "noun", "meaning": "the way where the sun comes up" },
      { "type": "adjective", "meaning": "in the place where the sun comes up, or from there" },
      { "type": "adverb", "meaning": "toward the place where the sun comes up" }
    ],
    "flight": { "type": "noun", "meaning": "a trip by plane" },
    "fly": { "type": "verb", "meaning": "to go in the air, like a bird or a plane" },
    "follow": { "type": "verb", "meaning": "to go behind someone" },
    "left": [
      { "type": "adjective", "meaning": "the opposite of right" },
      { "type": "adverb", "meaning": "toward the hand that most people do not write with" },
      { "type": "noun", "meaning": "the place where that hand is" }
    ],
    "map": { "type": "noun", "meaning": "a drawing of streets, cities or countries" },
    "north": [
      { "type": "noun", "meaning": "the way that is up on a map" },
      { "type": "adjective", "meaning": "in the place that is up on a map, or from there" },
      { "type": "adverb", "meaning": "toward the place that is up on a map" }
    ],
    "passport": { "type": "noun", "meaning": "a small book with your photo that you show when you go to another country" },
    "plan": [
      { "type": "noun", "meaning": "an idea of what you will do" },
      { "type": "verb", "meaning": "to think about what you will do and then decide" }
    ],
    "plane": { "type": "noun", "meaning": "a big thing that flies in the air with many people in it" },
    "quick": { "type": "adjective", "meaning": "taking a short time" },
    "quickly": { "type": "adverb", "meaning": "in a way that takes a short time" },
    "return": [
      { "type": "verb", "meaning": "to go back to a place" },
      { "type": "noun", "meaning": "the trip back to a place" }
    ],
    "ride": { "type": "verb", "meaning": "to sit on a bike or a horse and go" },
    "right": [
      { "type": "adjective", "meaning": "the opposite of left" },
      { "type": "adverb", "meaning": "toward the hand that most people write with" },
      { "type": "noun", "meaning": "the place where that hand is" }
    ],
    "slow": { "type": "adjective", "meaning": "not fast" },
    "south": [
      { "type": "noun", "meaning": "the way that is down on a map" },
      { "type": "adjective", "meaning": "in the place that is down on a map, or from there" },
      { "type": "adverb", "meaning": "toward the place that is down on a map" }
    ],
    "stay": { "type": "verb", "meaning": "to sleep or live in a place for some time, for example in a hotel" },
    "taxi": { "type": "noun", "meaning": "a car with a driver that you pay for a trip" },
    "ticket": { "type": "noun", "meaning": "a small paper that you buy to get on a bus, a train or a plane" },
    "tourist": { "type": "noun", "meaning": "a person who visits a place on vacation" },
    "traffic": { "type": "noun", "meaning": "all the cars and buses on a road" },
    "train": { "type": "noun", "meaning": "a long thing that carries many people from town to town" },
    "travel": [
      { "type": "verb", "meaning": "to go from one place to another, often far" },
      { "type": "noun", "meaning": "going from one place to another, often far" }
    ],
    "trip": { "type": "noun", "meaning": "a time when you go to a place and come back" },
    "truck": { "type": "noun", "meaning": "a very big car that carries things" },
    "turn": [
      { "type": "verb", "meaning": "to go in a new way" },
      { "type": "noun", "meaning": "the time when you do something after another person" }
    ],
    "vacation": { "type": "noun", "meaning": "days when you do not work or go to school, often in a new place" },
    "visit": [
      { "type": "verb", "meaning": "to go to see a person or a place" },
      { "type": "noun", "meaning": "a time when you go to see a person or a place" }
    ],
    "visitor": { "type": "noun", "meaning": "a person who comes to see you or a place" },
    "west": [
      { "type": "noun", "meaning": "the way where the sun goes down" },
      { "type": "adjective", "meaning": "in the place where the sun goes down, or from there" },
      { "type": "adverb", "meaning": "toward the place where the sun goes down" }
    ],
    "world": { "type": "noun", "meaning": "all the countries and all the people" },
    "actor": { "type": "noun", "meaning": "a person who plays someone in a movie" },
    "actress": { "type": "noun", "meaning": "a woman who plays someone in a movie" },
    "artist": { "type": "noun", "meaning": "a person who makes pictures" },
    "become": { "type": "verb", "meaning": "to start to be something new" },
    "blog": { "type": "noun", "meaning": "a place on the internet where a person writes about his or her life" },
    "business": { "type": "noun", "meaning": "the work of buying and selling things" },
    "career": { "type": "noun", "meaning": "all the jobs that a person has in his or her life" },
    "company": { "type": "noun", "meaning": "a group of people who work together to make or sell things" },
    "computer": { "type": "noun", "meaning": "a machine that you use to write, play and look for things" },
    "create": { "type": "verb", "meaning": "to make something new" },
    "dancer": { "type": "noun", "meaning": "a person who moves to music so that people can watch" },
    "information": { "type": "noun", "meaning": "facts that you learn about something" },
    "internet": { "type": "noun", "meaning": "all the computers in the world that work together, where you look for things and send messages" },
    "interview": [
      { "type": "noun", "meaning": "a meeting where someone asks you questions, for example for a new job" },
      { "type": "verb", "meaning": "to ask someone questions, for example for a job" }
    ],
    "job": { "type": "noun", "meaning": "the work that a person does to get money" },
    "machine": { "type": "noun", "meaning": "a thing that does work for you" },
    "meeting": { "type": "noun", "meaning": "a time when people come together to talk" },
    "message": { "type": "noun", "meaning": "words that you send to a person" },
    "model": { "type": "noun", "meaning": "a type of a thing that a company makes, like a phone or a car" },
    "news": { "type": "noun", "meaning": "what is happening in the world, on TV or in a newspaper" },
    "newspaper": { "type": "noun", "meaning": "a big paper with the news that comes out every day" },
    "online": [
      { "type": "adjective", "meaning": "on the internet" },
      { "type": "adverb", "meaning": "on the internet, with a computer or a phone" }
    ],
    "post": [
      { "type": "noun", "meaning": "the letters and small boxes that come to your house" },
      { "type": "verb", "meaning": "to send a letter by putting it in a box" }
    ],
    "program": { "type": "noun", "meaning": "a thing that you use on a computer" },
    "radio": { "type": "noun", "meaning": "a thing that you listen to music and the news on" },
    "reader": { "type": "noun", "meaning": "a person who reads" },
    "scientist": { "type": "noun", "meaning": "a person who works to learn new things about animals, plants and the world" },
    "send": { "type": "verb", "meaning": "to make something go to a person" },
    "skill": { "type": "noun", "meaning": "something that you can do well because you learned it" },
    "success": { "type": "noun", "meaning": "when something goes very well" },
    "telephone": [
      { "type": "noun", "meaning": "a thing that you use to call and talk to a person far away" },
      { "type": "verb", "meaning": "to call someone" }
    ],
    "television": { "type": "noun", "meaning": "a thing with pictures and sound that shows movies and the news at home" },
    "tv": { "type": "noun", "meaning": "a short word for television" },
    "useful": { "type": "adjective", "meaning": "good to use, because it helps you" },
    "video": { "type": "noun", "meaning": "a short movie that you watch" },
    "website": { "type": "noun", "meaning": "a place on the internet with pages about a hotel, a company or a person" },
    "worker": { "type": "noun", "meaning": "a person who has a job" },
    "writer": { "type": "noun", "meaning": "a person who writes books or stories" }
  }
});
