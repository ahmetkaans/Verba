/* Questions: A2 Vocabulary, theme 7 School and Learning (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|7|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|7|mc|easy": [
    {"type": "mc", "prompt": "That building near the river is ___. It is more than a thousand years old.", "options": ["ancient", "modern", "good", "light"], "targetType": "adjective", "explanation": "Ancient means very, very old. A building that is a thousand years old is ancient."},
    {"type": "mc", "prompt": "Here's my ___: let's study together after school and share our notes.", "options": ["thought", "attention", "education", "level"], "targetType": "noun", "explanation": "A thought is an idea in your head. People say \"Here's my thought\" when they have a new idea."},
    {"type": "mc", "prompt": "Mia's quick ___ saved the game for our team.", "options": ["thinking", "knowledge", "research", "instruction"], "targetType": "noun", "explanation": "Thinking is the work your mind does when you try to find an answer. Quick thinking can save a game."},
    {"type": "mc", "prompt": "Study hard, and you will ___ the test on Friday.", "options": ["pass", "realize", "solve", "pronounce"], "targetType": "verb", "explanation": "To pass a test is to do well enough to move on. Hard work helps you pass."},
    {"type": "mc", "prompt": "Ben got a good ___ on his math test: 95 out of 100.", "options": ["mark", "thinking", "teaching", "copy"], "targetType": "noun", "explanation": "A mark is the number or letter a teacher gives for your work. Ninety-five is a good mark."},
    {"type": "mc", "prompt": "Dr. Lee is a ___ at the university, and she teaches history.", "options": ["professor", "campus", "board", "speaker"], "explanation": "A professor is a teacher at a university. Dr. Lee teaches history there."},
    {"type": "mc", "prompt": "The teacher wrote the date on the ___ with a white pen.", "options": ["board", "professor", "speech", "column"], "targetType": "noun", "explanation": "A board is the big thing on the wall of a classroom where the teacher writes."},
    {"type": "mc", "prompt": "Please wear glasses and a white coat when you work in the science ___.", "options": ["lab", "research", "term", "board"], "targetType": "noun", "explanation": "A lab is a room where people do science work. People often wear glasses and a coat there."}
  ],
  "A2|vocabulary|7|mc|medium": [
    {"type": "mc", "prompt": "I did not ___ it was so late until I looked at my watch.", "options": ["realize", "pronounce", "count", "achieve"], "targetType": "verb", "explanation": "To realize something is to understand it suddenly. I understood that it was late when I looked at my watch."},
    {"type": "mc", "prompt": "Do you ___ that girl? She was in my class last year.", "options": ["recognize", "fail", "number", "predict"], "targetType": "verb", "explanation": "To recognize someone is to know who they are when you see them again."},
    {"type": "mc", "prompt": "This book is too easy for me. I need one at a higher ___.", "options": ["level", "method", "structure", "instruction"], "targetType": "noun", "explanation": "A level is a step in how easy or hard something is. A higher level is harder."},
    {"type": "mc", "prompt": "Before you write your report, do some ___ on the internet to find facts.", "options": ["research", "math", "lecture", "experiment"], "targetType": "noun", "explanation": "Research is the work of looking for facts about a subject. You can do it on the internet."},
    {"type": "mc", "prompt": "Each ___ in our book has a new topic and a short test.", "options": ["unit", "teaching", "explanation", "lab"], "targetType": "noun", "explanation": "A unit is one part of a book or a course. A book can have many units."},
    {"type": "mc", "prompt": "Ask Julia about birds. She has a lot of ___ about them.", "options": ["knowledge", "memory", "thought", "symbol"], "targetType": "noun", "explanation": "Knowledge is what you know about a subject. Julia knows a lot about birds."},
    {"type": "mc", "prompt": "Our teacher asks us to write the ___ of every fact in our report.", "options": ["source", "mark", "method", "error"], "targetType": "noun", "explanation": "A source is the book or place where you found a fact."},
    {"type": "mc", "prompt": "Dan's plan was the best ___ to our problem with the heater.", "options": ["solution", "attention", "context", "source"], "targetType": "noun", "explanation": "A solution is an answer to a problem. Dan's plan fixes the problem with the heater."}
  ],
  "A2|vocabulary|7|mc|hard": [
    {"type": "mc", "prompt": "In the first ___ of the school year, we learn about plants.", "options": ["term", "structure", "symbol", "instruction"], "targetType": "noun", "explanation": "A term is one part of the school year. A school year often has three terms."},
    {"type": "mc", "prompt": "The class did the ___ with water and salt in the lab to see what happens.", "options": ["experiment", "survey", "speech", "essay"], "targetType": "noun", "explanation": "An experiment is a test that you do to learn something new. Water and salt can show you what happens."},
    {"type": "mc", "prompt": "Do you ___ a school near your house, or do you take the bus?", "options": ["attend", "present", "number", "pass"], "targetType": "verb", "explanation": "To attend a school is to go there as a student."},
    {"type": "mc", "prompt": "She has a ___ in chemistry from a big university.", "options": ["degree", "mark", "column", "term"], "targetType": "noun", "explanation": "A degree is a paper from a university that shows you finished your studies."},
    {"type": "mc", "prompt": "Can you ___ the man in this photo? He is my uncle.", "options": ["identify", "predict", "analyze", "achieve"], "targetType": "verb", "explanation": "To identify someone is to say who they are. You look at a photo and say the name."},
    {"type": "mc", "prompt": "On cards, the heart is the ___ for love.", "options": ["symbol", "level", "explanation", "progress"], "explanation": "A symbol is a picture or a sign that stands for an idea. A heart stands for love on cards."},
    {"type": "mc", "prompt": "The ___ of this essay is clear: an introduction, three parts and an end.", "options": ["structure", "degree", "unit", "copy"], "targetType": "noun", "explanation": "Structure is the way the parts of something are put together."},
    {"type": "mc", "prompt": "If you work hard, you can ___ your dream of becoming a doctor.", "options": ["achieve", "solve", "identify", "attend"], "explanation": "To achieve something is to do it after trying hard. You achieve a dream with work."}
  ],
  "A2|vocabulary|7|mc|veryhard": [
    {"type": "mc", "prompt": "In ___ class, we put two things together and watch them change color.", "options": ["chemistry", "math", "biology", "physics"], "explanation": "Chemistry is the subject about water, air and other things, and how they change when you put them together."},
    {"type": "mc", "prompt": "In your essay, you can ___ to a book, but you must name the author.", "options": ["refer", "identify", "question", "analyze"], "targetType": "verb", "explanation": "To refer to something is to mention it. In an essay, you can refer to a book."},
    {"type": "mc", "prompt": "Nobody can ___ the weather exactly a month before.", "options": ["predict", "refer", "attend", "solve"], "targetType": "verb", "explanation": "To predict something is to say what will happen in the future before it happens."},
    {"type": "mc", "prompt": "Our swimming ___ showed us how to move our arms.", "options": ["instructor", "author", "researcher", "speaker"], "explanation": "An instructor is a person who teaches a skill, such as swimming."},
    {"type": "mc", "prompt": "It is hard to ___ this long name. Can you say it slowly?", "options": ["pronounce", "number", "fail", "count"], "targetType": "verb", "explanation": "To pronounce a word is to say it with the right sounds."},
    {"type": "mc", "prompt": "In ___ we learn about plants, animals and the cells of the body.", "options": ["biology", "mathematics", "chemistry", "lecture"], "explanation": "Biology is the subject about living things, such as plants and animals."},
    {"type": "mc", "prompt": "Our ___ asked fifty students about their favorite sport.", "options": ["survey", "speech", "essay", "experiment"], "targetType": "noun", "explanation": "A survey is a list of questions that you ask many people to learn what they think."},
    {"type": "mc", "prompt": "You cannot know the meaning of a new word without the ___ of the sentence.", "options": ["context", "evidence", "method", "error"], "explanation": "Context is the words around a word. It helps you understand the meaning."}
  ],
  "A2|vocabulary|7|fill|easy": [
    {"type": "fill", "before": "The stone walls near our town are very", "after": ". People built them long ago, before cars.", "answer": "ancient", "bank": ["ancient", "young", "light"], "targetType": "adjective", "explanation": "Ancient means very, very old. Walls from a time before cars are ancient."},
    {"type": "fill", "before": "We add, take away and count numbers in", "after": "class every morning.", "answer": "math", "bank": ["math", "physics", "research"], "explanation": "Math is the school subject about numbers and shapes. In math class we add and count."},
    {"type": "fill", "before": "I forgot his name again. I have a bad", "after": "for names.", "answer": "memory", "bank": ["memory", "knowledge", "method"], "explanation": "Memory is the power to remember things. A bad memory forgets names."},
    {"type": "fill", "before": "Please make one", "after": "of this page for each student.", "answer": "copy", "bank": ["copy", "education", "progress"], "targetType": "noun", "explanation": "A copy is a page that looks exactly like another one. You can make a copy of a page for each student."},
    {"type": "fill", "before": "If you do not study, you may", "after": "the test next week.", "answer": "fail", "bank": ["fail", "recognize", "present"], "targetType": "verb", "explanation": "To fail a test is to not do well enough to pass it. Without study, you may fail."},
    {"type": "fill", "before": "Can you help me", "after": "this problem? I cannot find the answer.", "answer": "solve", "bank": ["solve", "analyze", "realize"], "targetType": "verb", "explanation": "To solve a problem is to find the answer to it."},
    {"type": "fill", "before": "Our teacher gave a short", "after": "to welcome everyone to the new school year.", "answer": "speech", "bank": ["speech", "mathematics", "survey"], "explanation": "A speech is a talk that a person gives to a group. A teacher can give one on the first day."},
    {"type": "fill", "before": "Please pay", "after": "to the teacher when she talks.", "answer": "attention", "bank": ["attention", "explanation", "thinking"], "explanation": "Attention is the act of watching or listening with care. You pay attention to a teacher."}
  ],
  "A2|vocabulary|7|fill|medium": [
    {"type": "fill", "before": "Anna is making good", "after": "in English. She can read long books now.", "answer": "progress", "bank": ["progress", "term", "symbol"], "targetType": "noun", "explanation": "Progress is the change to a better skill over time. Anna reads better now, so she makes progress."},
    {"type": "fill", "before": "Children enjoy", "after": "through games and songs.", "answer": "learning", "bank": ["learning", "knowledge", "memory"], "explanation": "Learning is the work of getting a new skill. Games and songs make it fun."},
    {"type": "fill", "before": "Tom has a good", "after": "of how a bike works.", "answer": "understanding", "bank": ["understanding", "education", "attention"], "explanation": "Understanding is knowing how something works. Tom knows how a bike works."},
    {"type": "fill", "before": "In many countries, children get free", "after": "until they are sixteen.", "answer": "education", "bank": ["education", "thought", "understanding"], "explanation": "Education is the learning and teaching that happens at school."},
    {"type": "fill", "before": "Ms. Kim loves her", "after": "job at the school.", "answer": "teaching", "bank": ["teaching", "thinking", "understanding"], "explanation": "Teaching is the work of a teacher: helping people learn."},
    {"type": "fill", "before": "Your", "after": "of the rule was clear, so now I understand it.", "answer": "explanation", "bank": ["explanation", "mark", "degree"], "explanation": "An explanation is a group of words that makes something easy to understand."},
    {"type": "fill", "before": "The police need more", "after": "before they can say who took the bike.", "answer": "evidence", "bank": ["evidence", "solution", "source"], "explanation": "Evidence is facts or signs that show that something is true."},
    {"type": "fill", "before": "Tomorrow, each student must", "after": "a short talk to the class.", "answer": "present", "bank": ["present", "pass", "refer"], "targetType": "verb", "explanation": "To present a talk is to show or tell something to a group of people."}
  ],
  "A2|vocabulary|7|fill|hard": [
    {"type": "fill", "before": "Writing words on cards is my favorite", "after": "for learning them.", "answer": "method", "bank": ["method", "context", "evidence", "error"], "explanation": "A method is a way of doing something. Writing on cards is a way of learning words."},
    {"type": "fill", "before": "Students sat quietly and listened to the professor's", "after": "for an hour.", "answer": "lecture", "bank": ["lecture", "survey", "essay", "experiment"], "targetType": "noun", "explanation": "A lecture is a long talk to a class about a subject."},
    {"type": "fill", "before": "There is one", "after": "in your answer: you wrote 7 instead of 8.", "answer": "error", "bank": ["error", "solution", "context", "evidence"], "explanation": "An error is a mistake. Writing 7 instead of 8 is an error."},
    {"type": "fill", "before": "Anna is a good public", "after": ", so people like to listen to her.", "answer": "speaker", "bank": ["speaker", "professor", "researcher", "author"], "explanation": "A speaker is a person who gives a talk to a group of people."},
    {"type": "fill", "before": "The university has a big green", "after": "with a library, a cafe and old trees.", "answer": "campus", "bank": ["campus", "lab", "board", "column"], "explanation": "A campus is the land and the buildings of a university."},
    {"type": "fill", "before": "In", "after": ", students learn about light, sound and how things move.", "answer": "physics", "bank": ["physics", "mathematics", "biology", "chemistry"], "explanation": "Physics is the subject about things such as light, sound and how things move."},
    {"type": "fill", "before": "The", "after": "of this book also wrote three stories for children.", "answer": "author", "bank": ["author", "instructor", "speaker", "researcher"], "explanation": "An author is a person who writes a book or a story."},
    {"type": "fill", "before": "Read the words in the first", "after": "on the page, on the left.", "answer": "column", "bank": ["column", "campus", "level", "progress"], "targetType": "noun", "explanation": "A column is one of the long parts of a page, with a line of words going down it."}
  ],
  "A2|vocabulary|7|fill|veryhard": [
    {"type": "fill", "before": "The word \"bank\" changes meaning with the", "after": ": a river bank, a bank for money.", "answer": "context", "bank": ["context", "solution", "source", "evidence"], "explanation": "Context is the words around a word. A new context can give a word a new meaning."},
    {"type": "fill", "before": "For homework, write a short", "after": "about your summer, one page long.", "answer": "essay", "bank": ["essay", "research", "experiment", "lecture"], "explanation": "An essay is a short piece of writing about one subject, written for school."},
    {"type": "fill", "before": "In", "after": "we learn about numbers and shapes.", "answer": "mathematics", "bank": ["mathematics", "chemistry", "biology", "physics"], "explanation": "Mathematics is the subject about numbers, shapes and how to count them."},
    {"type": "fill", "before": "Scientists", "after": "the water from the river to see what is in it.", "answer": "analyze", "bank": ["analyze", "predict", "achieve", "refer"], "targetType": "verb", "explanation": "To analyze something is to look at it very carefully to understand it."},
    {"type": "fill", "before": "Look at the first", "after": "on the paper: it says \"Open the box.\"", "answer": "instruction", "bank": ["instruction", "degree", "unit", "copy"], "explanation": "An instruction is a group of words that tells you how to do something."},
    {"type": "fill", "before": "Dr. Ruiz is the", "after": "who ran the study of sleep in our city.", "answer": "researcher", "bank": ["researcher", "instructor", "author", "speaker"], "explanation": "A researcher is a person whose job is to find new facts about a subject."},
    {"type": "fill", "before": "Please", "after": "the pages of your report from one to ten.", "answer": "number", "bank": ["number", "question", "fail", "attend"], "targetType": "verb", "explanation": "To number things is to put a number on each one of them."},
    {"type": "fill", "before": "The police will", "after": "the man about the missing bike.", "answer": "question", "bank": ["question", "pass", "present", "pronounce"], "targetType": "verb", "explanation": "To question a person is to ask them many things to find facts."}
  ],
  "A2|vocabulary|7|tf|easy": [
    {"type": "tf", "prompt": "A good mark on a test means that your work was good.", "answer": true, "target": "mark", "targetType": "noun", "explanation": "True. A mark is the number or letter a teacher gives for your work. A good mark means good work."},
    {"type": "tf", "prompt": "A professor sells fruit and vegetables at a market.", "answer": false, "target": "professor", "explanation": "False. A professor is a teacher at a university. A person who sells fruit works at a market."},
    {"type": "tf", "prompt": "The teacher writes the lesson on the board, and the students copy it.", "answer": true, "target": "board", "targetType": "noun", "explanation": "True. A board is the big thing on the wall of a classroom where the teacher writes."},
    {"type": "tf", "prompt": "Students sleep in the lab during the lesson.", "answer": false, "target": "lab", "explanation": "False. A lab is a room where people do science work. Students do not sleep there."},
    {"type": "tf", "prompt": "In math class, we learn about numbers, and we add and take away.", "answer": true, "target": "math", "explanation": "True. Math is the school subject about numbers and shapes."},
    {"type": "tf", "prompt": "A good memory helps you forget the words you learned yesterday.", "answer": false, "target": "memory", "explanation": "False. Memory is the power to remember things. A good memory helps you remember words."},
    {"type": "tf", "prompt": "You make a copy of a page, so now two pages look the same.", "answer": true, "target": "copy", "targetType": "noun", "explanation": "True. A copy looks exactly like the first page."},
    {"type": "tf", "prompt": "When you count to five, you say one, three, two, five, four.", "answer": false, "target": "count", "targetType": "verb", "explanation": "False. To count is to say numbers in order. In order, it is one, two, three, four, five."}
  ],
  "A2|vocabulary|7|tf|medium": [
    {"type": "tf", "prompt": "Our English book has a unit about food, and the next unit is about travel.", "answer": true, "target": "unit", "targetType": "noun", "explanation": "True. A unit is one part of a book or a course. Each unit has its own topic."},
    {"type": "tf", "prompt": "Knowledge is something you can buy in a shop for five dollars.", "answer": false, "target": "knowledge", "explanation": "False. Knowledge is what you know about a subject. Knowledge is in your head, not in a shop."},
    {"type": "tf", "prompt": "A good report says where each fact comes from, so it names its sources.", "answer": true, "target": "source", "targetType": "noun", "explanation": "True. A source is the book or place where you found a fact."},
    {"type": "tf", "prompt": "A solution is another word for a problem.", "answer": false, "target": "solution", "explanation": "False. A solution is an answer to a problem."},
    {"type": "tf", "prompt": "If your reading is better this month than last month, you made progress.", "answer": true, "target": "progress", "targetType": "noun", "explanation": "True. Progress is the change to a better skill over time."},
    {"type": "tf", "prompt": "Learning is what a person does when they already know everything about a subject.", "answer": false, "target": "learning", "explanation": "False. Learning is the work of getting a new skill, and a person who knows everything has nothing new to learn."},
    {"type": "tf", "prompt": "After the teacher showed a picture, Anna's understanding of the rule was better.", "answer": true, "target": "understanding", "explanation": "True. Understanding is knowing how something works. The picture helped Anna know the rule."},
    {"type": "tf", "prompt": "Education is the name for a place where people buy food.", "answer": false, "target": "education", "explanation": "False. Education is the learning and teaching that happens at school. Food is bought in a shop."}
  ],
  "A2|vocabulary|7|tf|hard": [
    {"type": "tf", "prompt": "A police officer can identify a man in a photo by saying his name.", "answer": true, "target": "identify", "targetType": "verb", "explanation": "True. To identify someone is to say who they are. You can do it with a photo."},
    {"type": "tf", "prompt": "A red heart on a card is a symbol of money.", "answer": false, "target": "symbol", "explanation": "False. A symbol is a sign that stands for an idea. A heart on a card stands for love, not money."},
    {"type": "tf", "prompt": "The structure of a good essay has an introduction, a middle and an end.", "answer": true, "target": "structure", "explanation": "True. Structure is the way the parts of something are put together."},
    {"type": "tf", "prompt": "You can achieve a big goal on the first day if you sleep all morning.", "answer": false, "target": "achieve", "targetType": "verb", "explanation": "False. To achieve something is to do it after trying hard. Sleeping is not trying."},
    {"type": "tf", "prompt": "A method is a way of doing something, like a way to learn words.", "answer": true, "target": "method", "explanation": "True. A method is a way of doing something."},
    {"type": "tf", "prompt": "A lecture is a short chat between two friends in a cafe.", "answer": false, "target": "lecture", "targetType": "noun", "explanation": "False. A lecture is a long talk to a class about a subject, not a chat in a cafe."},
    {"type": "tf", "prompt": "Mia found an error in her homework, so she fixed the wrong number.", "answer": true, "target": "error", "explanation": "True. An error is a mistake. A wrong number in homework is an error."},
    {"type": "tf", "prompt": "A speaker is a person who sits at the back of a room and listens.", "answer": false, "target": "speaker", "explanation": "False. A speaker is a person who gives a talk to a group of people."}
  ],
  "A2|vocabulary|7|tf|veryhard": [
    {"type": "tf", "prompt": "An instructor can teach you how to drive a car or how to swim.", "answer": true, "target": "instructor", "explanation": "True. An instructor is a person who teaches a skill, such as driving or swimming."},
    {"type": "tf", "prompt": "To pronounce a word is to write it down with a pen.", "answer": false, "target": "pronounce", "targetType": "verb", "explanation": "False. To pronounce a word is to say it with the right sounds. Writing is not pronouncing."},
    {"type": "tf", "prompt": "In biology class, students can learn about the cells of plants and animals.", "answer": true, "target": "biology", "explanation": "True. Biology is the subject about living things, such as plants and animals."},
    {"type": "tf", "prompt": "In a survey, the teacher asks only one student a single question.", "answer": false, "target": "survey", "targetType": "noun", "explanation": "False. A survey is a list of questions that you ask many people. It is not for one student."},
    {"type": "tf", "prompt": "The words around a new word are its context. They help you guess its meaning.", "answer": true, "target": "context", "explanation": "True. Context is the words around a word. They show what the word means."},
    {"type": "tf", "prompt": "An essay is a school paper with only numbers and pictures.", "answer": false, "target": "essay", "explanation": "False. An essay is a short piece of writing about one subject. It has words, not only numbers."},
    {"type": "tf", "prompt": "Students use mathematics when they add numbers or look at the shape of a box.", "answer": true, "target": "mathematics", "explanation": "True. Mathematics is the subject about numbers and shapes."},
    {"type": "tf", "prompt": "To analyze a problem is to run away without looking at it.", "answer": false, "target": "analyze", "targetType": "verb", "explanation": "False. To analyze something is to look at it very carefully to understand it."}
  ],
  "A2|vocabulary|7|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "thought", "right": "an idea that comes into your head", "type": "noun"},
      {"left": "pass", "right": "to do well enough in a test to go on to the next class", "type": "verb"},
      {"left": "mark", "right": "the number or letter a teacher gives for your work", "type": "noun"},
      {"left": "professor", "right": "a teacher at a university"}
    ], "explanation": "A thought is an idea in your head. To pass is to do well in a test, a mark is the number a teacher gives, and a professor teaches at a university." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "thinking", "right": "the work your mind does when you look for an answer"},
      {"left": "board", "right": "the big thing on a classroom wall where the teacher writes", "type": "noun"},
      {"left": "lab", "right": "a room where people do science work"},
      {"left": "math", "right": "the school subject about numbers and shapes"}
    ], "explanation": "Thinking is the work of your mind. A board is for writing on a wall, a lab is a science room, and math is about numbers." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "memory", "right": "the power to remember things"},
      {"left": "copy", "right": "a page that looks exactly like another page", "type": "noun"},
      {"left": "fail", "right": "to not do well enough in a test", "type": "verb"},
      {"left": "solve", "right": "to find the answer to a problem"}
    ], "explanation": "Memory helps you remember. A copy looks like another page, to fail is to not do well in a test, and to solve is to find an answer." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "speech", "right": "a talk that a person gives to a group of people"},
      {"left": "attention", "right": "watching or listening to something with care"},
      {"left": "count", "right": "to say numbers in order, one, two, three", "type": "verb"},
      {"left": "ancient", "right": "very, very old, from a time long ago", "type": "adjective"}
    ], "explanation": "A speech is a talk to a group. Attention is careful listening, to count is to say numbers in order, and ancient means very old." }
  ],
  "A2|vocabulary|7|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "realize", "right": "to understand something suddenly", "type": "verb"},
      {"left": "level", "right": "a step in how easy or hard something is", "type": "noun"},
      {"left": "research", "right": "the work of looking for facts about a subject", "type": "noun"},
      {"left": "teaching", "right": "the work of a teacher: helping people learn"}
    ], "explanation": "To realize is to understand suddenly. A level is a step in how hard something is, research looks for facts, and teaching helps people learn." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "recognize", "right": "to know who someone is when you see them again"},
      {"left": "unit", "right": "one part of a book or a course"},
      {"left": "solution", "right": "an answer to a problem"},
      {"left": "learning", "right": "getting a new skill or new facts"}
    ], "explanation": "To recognize is to know a person again. A unit is a part of a book, a solution is an answer, and learning is getting new facts." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "knowledge", "right": "what you know about a subject"},
      {"left": "source", "right": "the book or place where you found a fact", "type": "noun"},
      {"left": "progress", "right": "a change to a better skill over time", "type": "noun"},
      {"left": "education", "right": "the learning and teaching at schools and universities"}
    ], "explanation": "Knowledge is what you know. A source is where you found a fact, progress is getting better, and education happens at schools." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "understanding", "right": "knowing how something works"},
      {"left": "explanation", "right": "words that make a hard thing clear"},
      {"left": "evidence", "right": "facts or signs that show something is true"},
      {"left": "present", "right": "to show or tell something to a group of people", "type": "verb"}
    ], "explanation": "Understanding is knowing how something works. An explanation makes a thing clear, evidence shows what is true, and to present is to tell a group." }
  ],
  "A2|vocabulary|7|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "term", "right": "one of the parts of the school year", "type": "noun"},
      {"left": "experiment", "right": "a test that you do to learn something new"},
      {"left": "attend", "right": "to go to a school, a class or an event"},
      {"left": "degree", "right": "a paper from a university that shows you finished your studies", "type": "noun"}
    ], "explanation": "A term is part of the school year. An experiment is a test to learn something, to attend is to go to a class, and a degree is from a university." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "identify", "right": "to say who a person is or what a thing is"},
      {"left": "symbol", "right": "a sign that stands for an idea"},
      {"left": "structure", "right": "the way the parts of something are put together"},
      {"left": "achieve", "right": "to do something good after trying hard"}
    ], "explanation": "To identify is to say who or what. A symbol stands for an idea, structure is how parts fit together, and to achieve is to do well after hard work." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "method", "right": "a way of doing something"},
      {"left": "lecture", "right": "a long talk to a class about a subject", "type": "noun"},
      {"left": "error", "right": "a mistake"},
      {"left": "speaker", "right": "a person who gives a talk to a group of people"}
    ], "explanation": "A method is a way of doing something. A lecture is a long talk, an error is a mistake, and a speaker gives a talk." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "campus", "right": "the land and the buildings of a university"},
      {"left": "physics", "right": "the subject about light, sound and how things move"},
      {"left": "author", "right": "a person who writes a book or a story"},
      {"left": "column", "right": "one of the long parts of a page, with a line of words going down it", "type": "noun"}
    ], "explanation": "A campus is a university's land and buildings. Physics is about light and sound, an author writes books, and a column is a long part of a page." }
  ],
  "A2|vocabulary|7|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "chemistry", "right": "the subject about water, air and other things, and how they change when you put them together"},
      {"left": "refer", "right": "to talk about a person or a thing"},
      {"left": "predict", "right": "to say what will happen before it happens"},
      {"left": "instructor", "right": "a person who teaches a skill, such as swimming"}
    ], "explanation": "Chemistry is about how things change when put together. To refer is to talk about something, to predict is to say what will happen, and an instructor teaches a skill." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "pronounce", "right": "to say a word with the right sounds"},
      {"left": "biology", "right": "the subject about plants, animals and other living things"},
      {"left": "survey", "right": "a list of questions that you ask many people", "type": "noun"},
      {"left": "essay", "right": "a short piece of writing about one subject for school"}
    ], "explanation": "To pronounce is to say a word well. Biology is about living things, a survey asks many people, and an essay is school writing." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "instruction", "right": "words that tell you how to do something"},
      {"left": "researcher", "right": "a person whose job is to find new facts"},
      {"left": "number", "right": "to put 1, 2, 3 on each thing in a list", "type": "verb"},
      {"left": "question", "right": "to ask a person many things to find facts", "type": "verb"}
    ], "explanation": "An instruction tells you how to do something. A researcher finds new facts, to number is to put 1, 2, 3 on things, and to question is to ask many things." }
  ]
});
