/* Questions: A1 Vocabulary, theme 03 School (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|3|mc|easy": [
    { "type": "mc", "prompt": "Anna asks her ___ a question about the lesson.", "options": ["teacher", "window", "banana", "hat"], "explanation": "A teacher helps students learn. Anna asks her teacher a question about the lesson." },
    { "type": "mc", "prompt": "Ali is a ___. He goes to school and does his homework.", "options": ["student", "table", "chair", "river"], "explanation": "A student is a person who goes to school to learn. Ali goes to school and does his homework, so he is a student." },
    { "type": "mc", "prompt": "There are twenty students in Lisa's ___.", "options": ["class", "tree", "road", "bed"], "explanation": "A class is a group of students who learn together. Twenty students are in Lisa's class." },
    { "type": "mc", "prompt": "Ben sits at his ___ and reads his book.", "options": ["desk", "tree", "river", "bus"], "explanation": "A desk is a table where you sit to read or write. Ben sits at his desk and reads." },
    { "type": "mc", "prompt": "Emma writes her name with a blue ___.", "options": ["pen", "apple", "shoe", "bread"], "explanation": "A pen is something you write with. Emma writes her name with a blue pen." },
    { "type": "mc", "prompt": "\"Cat\" is a ___ with three letters.", "options": ["word", "tree", "bus", "hat"], "explanation": "A word is a group of letters that has a meaning. \"Cat\" has three letters and means an animal." },
    { "type": "mc", "prompt": "The English ___ starts at nine o'clock.", "options": ["lesson", "apple", "chair", "bed"], "explanation": "A lesson is a time when students learn something with a teacher. The English lesson starts at nine." },
    { "type": "mc", "prompt": "Lisa studies a lot for the English ___ on Friday.", "options": ["test", "banana", "chair", "snow"], "targetType": "noun", "explanation": "A test is a group of questions. It shows what you know. Lisa studies for the English test." }
  ],
  "A1|vocabulary|3|mc|medium": [
    { "type": "mc", "prompt": "Lisa wants to ___ English to small children.", "options": ["teach", "wash", "drive", "paint"], "explanation": "To teach is to help someone learn something. Lisa wants to help small children learn English." },
    { "type": "mc", "prompt": "Anna writes a letter on a piece of ___.", "options": ["paper", "bread", "water", "milk"], "explanation": "Paper is something that you write or draw on. Anna writes her letter on a piece of paper." },
    { "type": "mc", "prompt": "Maria writes a shopping ___: milk, bread and eggs.", "options": ["list", "coat", "road", "bird"], "targetType": "noun", "explanation": "A list is words or things written one under the other. Maria writes what she wants to buy." },
    { "type": "mc", "prompt": "Ali leaves a short ___ for his mom: \"I am at school.\"", "options": ["note", "shirt", "road", "bird"], "explanation": "A note is a short text that you write to tell someone something. Ali tells his mom where he is." },
    { "type": "mc", "prompt": "___ is a good way to learn new words.", "options": ["Reading", "Walking", "Cooking", "Dancing"], "target": "reading", "explanation": "Reading means looking at words and understanding them. When you read, you meet many new words." },
    { "type": "mc", "prompt": "Tom studies how plants and animals live in his ___ lessons.", "options": ["science", "music", "dance", "sports"], "explanation": "Science is the study of plants, animals and the weather. Tom studies plants and animals in his science lessons." },
    { "type": "mc", "prompt": "In ___ class, we learn about people and countries from many years ago.", "options": ["history", "music", "dance", "sports"], "explanation": "History is the study of what happened a long time ago. We learn about people and countries from many years ago." },
    { "type": "mc", "prompt": "Spanish is a ___ that people speak in many countries.", "options": ["language", "country", "city", "food"], "explanation": "A language is the words that people use to talk and write. Spanish is a language." }
  ],
  "A1|vocabulary|3|mc|hard": [
    { "type": "mc", "prompt": "Students take a big ___ at the end of the year.", "options": ["exam", "rule", "college", "desk"], "explanation": "An exam is a big test. Students take it at the end of the year." },
    { "type": "mc", "prompt": "Anna goes to a small ___ after high school to study.", "options": ["college", "bank", "airport", "restaurant"], "explanation": "A college is a school for people who finish high school. Anna studies at one after high school." },
    { "type": "mc", "prompt": "Ali studies for many years at a big ___ to become a doctor.", "options": ["university", "bank", "classroom", "airport"], "explanation": "A university is a big school where adults study for many years. Ali studies there to become a doctor." },
    { "type": "mc", "prompt": "Science, art and music are all school ___.", "options": ["subjects", "teachers", "pencils", "desks"], "target": "subject", "explanation": "A subject is something that you study at school. Science, art and music are subjects." },
    { "type": "mc", "prompt": "Maria's group works for two weeks on a ___ about the sun. Then they show it to the class.", "options": ["project", "rule", "college", "university"], "explanation": "A project is a big piece of work about one subject. Maria's group works on it for two weeks." },
    { "type": "mc", "prompt": "Leo writes a ___ about dogs: three pages with pictures.", "options": ["report", "desk", "college", "rule"], "explanation": "A report is a text that gives information about something. Leo's report gives information about dogs." },
    { "type": "mc", "prompt": "It is very ___ to come to class on time.", "options": ["important", "hungry", "happy", "tired"], "explanation": "Important means you need to think about it and not forget it. Coming to class on time is important." },
    { "type": "mc", "prompt": "Ken does not finish the exam because the questions are very ___.", "options": ["hard", "short", "fast", "happy"], "targetType": "adjective", "explanation": "Hard means difficult, not easy. Ken cannot answer the questions, so they are hard." }
  ],
  "A1|vocabulary|3|mc|veryhard": [
    { "type": "mc", "prompt": "Read this ___ about dogs. It has three paragraphs and no pictures.", "options": ["text", "chart", "dictionary", "title"], "explanation": "A text is the words on a page. This text about dogs has three paragraphs." },
    { "type": "mc", "prompt": "\"I like pizza.\" is a short ___.", "options": ["sentence", "word", "letter", "page"], "explanation": "A sentence is a group of words that says one thing. \"I like pizza\" says one thing." },
    { "type": "mc", "prompt": "This page has four ___, and each one has three sentences.", "options": ["paragraphs", "titles", "charts", "pencils"], "target": "paragraph", "explanation": "A paragraph is a part of a text with a few sentences about one idea. This page has four of them." },
    { "type": "mc", "prompt": "In this ___ between Ali and Sam, they talk about school.", "options": ["dialogue", "title", "chart", "article"], "explanation": "A dialogue is a talk between two people. Ali and Sam talk to each other." },
    { "type": "mc", "prompt": "Ben does not know this word. He looks it up in his ___.", "options": ["dictionary", "window", "title", "pencil"], "explanation": "A dictionary is a book that tells you what words mean. Ben looks up the word in his dictionary." },
    { "type": "mc", "prompt": "The ___ shows how many students are in each class. It has numbers and colors.", "options": ["chart", "dialogue", "paragraph", "sentence"], "explanation": "A chart is a picture with numbers that shows facts. This chart shows how many students are in each class." },
    { "type": "mc", "prompt": "In a newspaper, each ___ has a title and tells about one thing.", "options": ["article", "desk", "pencil", "chair"], "explanation": "An article is a text in a newspaper or a magazine. Each article has its own title." },
    { "type": "mc", "prompt": "The ___ of this book is \"My Dog Sam\".", "options": ["title", "letter", "article", "paragraph"], "explanation": "A title is the name of a book, a movie or a text. \"My Dog Sam\" is the name of this book." }
  ],
  "A1|vocabulary|3|fill|easy": [
    { "type": "fill", "before": "Tom is a", "after": "at a big school. He is ten years old.", "answer": "student", "bank": ["student", "window", "bread"], "explanation": "A student is a person who goes to school to learn. Tom goes to a big school, so he is a student." },
    { "type": "fill", "before": "\"Hello\" is a", "after": "we say when we meet someone.", "answer": "word", "bank": ["word", "shirt", "tree"], "explanation": "A word is a group of letters that has a meaning. \"Hello\" is a word we say when we meet." },
    { "type": "fill", "before": "Maria has a short", "after": "with her teacher about animals.", "answer": "lesson", "bank": ["lesson", "river", "hat"], "explanation": "A lesson is a time when students learn something with a teacher. Maria learns about animals in her lesson." },
    { "type": "fill", "before": "The", "after": "has ten questions. Leo answers them all.", "answer": "test", "bank": ["test", "kitchen", "tree"], "targetType": "noun", "explanation": "A test is a group of questions. It shows what you know. Leo answers all the questions." },
    { "type": "fill", "before": "Mia does her", "after": "at home after school.", "answer": "homework", "bank": ["homework", "shirt", "bread"], "explanation": "Homework is work from school that you do at home. Mia does hers after school." },
    { "type": "fill", "before": "Anna writes with a blue", "after": ".", "answer": "pen", "bank": ["pen", "hat", "tree"], "explanation": "A pen is something you write with. Anna writes with a blue pen." },
    { "type": "fill", "before": "There are twenty desks in the", "after": ".", "answer": "classroom", "bank": ["classroom", "river", "hat"], "explanation": "A classroom is a room in a school where students have lessons. The twenty desks are in the classroom." },
    { "type": "fill", "before": "Ali draws a picture with a", "after": "and some colors.", "answer": "pencil", "bank": ["pencil", "shirt", "bread"], "explanation": "A pencil is something you write or draw with. Ali draws his picture with a pencil." }
  ],
  "A1|vocabulary|3|fill|medium": [
    { "type": "fill", "before": "Ken wants to", "after": "small children to read.", "answer": "teach", "bank": ["teach", "wash", "drive"], "explanation": "To teach is to help someone learn something. Ken wants to help small children learn to read." },
    { "type": "fill", "before": "Mia needs some", "after": "to draw a picture with her pencil.", "answer": "paper", "bank": ["paper", "bread", "milk"], "explanation": "Paper is something that you write or draw on. Mia needs paper to draw her picture." },
    { "type": "fill", "before": "The word \"cat\" has three", "after": ": c, a and t.", "answer": "letters", "bank": ["letters", "pages", "words"], "target": "letter", "explanation": "A letter is a small part of a word that you write, like the first part of \"cat\". \"Cat\" has three letters." },
    { "type": "fill", "before": "Mia writes a short", "after": "for her mom: \"Back at five.\"", "answer": "note", "bank": ["note", "bread", "shirt"], "explanation": "A note is a short text that you write to tell someone something. Mia tells her mom when she will be back." },
    { "type": "fill", "before": "Anna's English", "after": "is very good. She writes good sentences.", "answer": "writing", "bank": ["writing", "music", "sports"], "explanation": "Writing means putting words on paper. Anna puts her words on paper very well." },
    { "type": "fill", "before": "In", "after": "class, Tom studies plants and animals.", "answer": "science", "bank": ["science", "music", "dance"], "explanation": "Science is the study of plants, animals and the weather. Tom studies plants and animals in science class." },
    { "type": "fill", "before": "In", "after": "class, we look at maps and learn about countries.", "answer": "geography", "bank": ["geography", "music", "dance"], "explanation": "Geography is the study of countries, cities, rivers and mountains. We look at maps in geography class." },
    { "type": "fill", "before": "English and Spanish are two different", "after": ".", "answer": "languages", "bank": ["languages", "countries", "cities"], "target": "language", "explanation": "A language is the words that people use to talk and write. English and Spanish are two languages." }
  ],
  "A1|vocabulary|3|fill|hard": [
    { "type": "fill", "before": "At the end of the year, there is one big", "after": ". Students cannot use their books.", "answer": "exam", "bank": ["exam", "lesson", "course", "project"], "explanation": "An exam is a big test. Students cannot use their books in it." },
    { "type": "fill", "before": "Tom finished school last year. Now he studies at a", "after": "with 200 students.", "answer": "college", "bank": ["college", "library", "classroom", "subject"], "explanation": "A college is a school for people who finish high school. Tom studies there now." },
    { "type": "fill", "before": "Maria is taking an English", "after": ": twenty lessons in ten weeks.", "answer": "course", "bank": ["course", "exam", "college", "project"], "explanation": "A course is a group of lessons about one subject. Maria has twenty English lessons in ten weeks." },
    { "type": "fill", "before": "Science is my favorite school", "after": ".", "answer": "subject", "bank": ["subject", "teacher", "desk", "page"], "explanation": "A subject is something that you study at school. Science is a subject." },
    { "type": "fill", "before": "The teacher puts the students in", "after": "of four for the project.", "answer": "groups", "bank": ["groups", "desks", "lessons", "pages"], "target": "group", "explanation": "A group is people or things that are together. The students work together in groups of four." },
    { "type": "fill", "before": "Ken reads his", "after": "to the class. It is about the weather.", "answer": "report", "bank": ["report", "course", "college", "exam"], "explanation": "A report is a text that gives information about something. Ken's report gives information about the weather." },
    { "type": "fill", "before": "\"No phones in class\" is a school", "after": ".", "answer": "rule", "bank": ["rule", "desk", "college", "report"], "explanation": "A rule says what you can and cannot do. \"No phones in class\" says what students cannot do." },
    { "type": "fill", "before": "In class, it is", "after": "to listen to the teacher.", "answer": "important", "bank": ["important", "tall", "pretty", "hungry"], "explanation": "Important means you need to think about it and not forget it. Listening to the teacher is important." }
  ],
  "A1|vocabulary|3|fill|veryhard": [
    { "type": "fill", "before": "The", "after": "has two pages of words and no pictures.", "answer": "text", "bank": ["text", "chart", "title", "desk"], "explanation": "A text is the words on a page. This text has two pages of words." },
    { "type": "fill", "before": "\"I am a student.\" is one", "after": "with four words.", "answer": "sentence", "bank": ["sentence", "paragraph", "letter", "page"], "explanation": "A sentence is a group of words that says one thing. \"I am a student\" says one thing with four words." },
    { "type": "fill", "before": "Anna and Ben talk in the story. Their", "after": "is very funny.", "answer": "dialogue", "accept": ["dialog"], "bank": ["dialogue", "title", "chart", "article"], "explanation": "A dialogue is a talk between two people. Anna and Ben talk to each other in the story." },
    { "type": "fill", "before": "The", "after": "in the newspaper shows the weather for each day.", "answer": "chart", "bank": ["chart", "dialogue", "article", "sentence"], "explanation": "A chart is a picture with numbers that shows facts. This chart shows the weather for each day." },
    { "type": "fill", "before": "Maria reads three", "after": "in the newspaper. Each one has a title and four paragraphs.", "answer": "articles", "bank": ["articles", "dialogues", "desks", "sentences"], "target": "article", "explanation": "An article is a text in a newspaper or a magazine. Each article has its own title." },
    { "type": "fill", "before": "\"Good morning\" is a", "after": "we use to say hello.", "answer": "phrase", "bank": ["phrase", "paragraph", "title", "chart"], "explanation": "A phrase is a few words that go together. \"Good morning\" is a phrase we say when we meet someone." },
    { "type": "fill", "before": "Tom's", "after": "is good: he writes every word with the right letters.", "answer": "spelling", "bank": ["spelling", "dialogue", "phrase", "article"], "explanation": "Spelling is the right letters in a word. Tom writes every word with the right letters." },
    { "type": "fill", "before": "Mom reads the sports", "after": "of the newspaper first.", "answer": "section", "bank": ["section", "desk", "pencil", "shoe"], "explanation": "A section is one part of a book, a text or a newspaper. Mom reads the sports part first." }
  ],
  "A1|vocabulary|3|tf|easy": [
    { "type": "tf", "prompt": "A teacher helps students learn.", "answer": true, "target": "teacher", "explanation": "Yes. A teacher helps students learn." },
    { "type": "tf", "prompt": "A lesson is a room.", "answer": false, "target": "lesson", "explanation": "No. A lesson is a time when students learn. A classroom is a room." },
    { "type": "tf", "prompt": "You can write at a desk.", "answer": true, "target": "desk", "explanation": "Yes. A desk is a table where you can sit and write." },
    { "type": "tf", "prompt": "You can say \"English class\" for an English lesson.", "answer": true, "target": "class", "explanation": "Yes. \"Class\" can mean a group of students or a lesson, like \"English class\"." },
    { "type": "tf", "prompt": "A page is the same as a book.", "answer": false, "target": "page", "explanation": "No. A page is one of the many papers in a book. A book has many pages." },
    { "type": "tf", "prompt": "A test has questions.", "answer": true, "target": "test", "targetType": "noun", "explanation": "Yes. A test is a group of questions." },
    { "type": "tf", "prompt": "Homework is a place at school.", "answer": false, "target": "homework", "explanation": "No. Homework is work from school that you do at home." },
    { "type": "tf", "prompt": "A classroom is a time of the day.", "answer": false, "target": "classroom", "explanation": "No. A classroom is a room in a school. A lesson is a time." }
  ],
  "A1|vocabulary|3|tf|medium": [
    { "type": "tf", "prompt": "A teacher can teach English.", "answer": true, "target": "teach", "explanation": "Yes. To teach is to help someone learn something." },
    { "type": "tf", "prompt": "You can write a list of things to buy.", "answer": true, "target": "list", "targetType": "noun", "explanation": "Yes. A list is words or things written one under the other. You can write one for the shop." },
    { "type": "tf", "prompt": "Reading is the same as swimming.", "answer": false, "target": "reading", "explanation": "No. Reading means looking at words and understanding them. Swimming is something you do in water." },
    { "type": "tf", "prompt": "In science class, we learn how to dance.", "answer": false, "target": "science", "explanation": "No. In science class, we study plants, animals and the weather. We learn to dance in dance class." },
    { "type": "tf", "prompt": "The word \"dog\" has three letters.", "answer": true, "target": "letter", "explanation": "Yes. D, o and g are three letters." },
    { "type": "tf", "prompt": "History is about what will happen next year.", "answer": false, "target": "history", "explanation": "No. History is the study of what happened a long time ago." },
    { "type": "tf", "prompt": "Writing is putting words on paper.", "answer": true, "target": "writing", "explanation": "Yes. When you write, you put words on paper." },
    { "type": "tf", "prompt": "Geography is about how to cook food.", "answer": false, "target": "geography", "explanation": "No. Geography is the study of countries, cities, rivers and mountains." }
  ],
  "A1|vocabulary|3|tf|hard": [
    { "type": "tf", "prompt": "An exam is a big test.", "answer": true, "target": "exam", "explanation": "Yes. An exam is a big test at the end of a course." },
    { "type": "tf", "prompt": "A university is a place for small children.", "answer": false, "target": "university", "explanation": "No. A university is a big school for adults." },
    { "type": "tf", "prompt": "A report is a picture.", "answer": false, "target": "report", "explanation": "No. A report is a text that gives information about something." },
    { "type": "tf", "prompt": "A course can have twenty lessons.", "answer": true, "target": "course", "explanation": "Yes. A course is a group of lessons about one subject. It can have many lessons." },
    { "type": "tf", "prompt": "You can study hard for a test.", "answer": true, "target": "hard", "targetType": "adverb", "explanation": "Yes. To study hard is to study a lot and try very much." },
    { "type": "tf", "prompt": "A project is a place in a school.", "answer": false, "target": "project", "explanation": "No. A project is a big piece of work about one subject." },
    { "type": "tf", "prompt": "A group has more than one person or thing.", "answer": true, "target": "group", "explanation": "Yes. A group is people or things that are together." },
    { "type": "tf", "prompt": "A rule is a person in your class.", "answer": false, "target": "rule", "explanation": "No. A rule says what you can and cannot do." }
  ],
  "A1|vocabulary|3|tf|veryhard": [
    { "type": "tf", "prompt": "A text can be short or long.", "answer": true, "target": "text", "explanation": "Yes. A text is the words on a page. It can have a few words or many." },
    { "type": "tf", "prompt": "A paragraph is smaller than a word.", "answer": false, "target": "paragraph", "explanation": "No. A paragraph has a few sentences, so it is bigger than a word." },
    { "type": "tf", "prompt": "A dialogue has two or more people who talk.", "answer": true, "target": "dialogue", "explanation": "Yes. A dialogue is a talk between people." },
    { "type": "tf", "prompt": "An article is a picture of a dog.", "answer": false, "target": "article", "explanation": "No. An article is a text in a newspaper or a magazine." },
    { "type": "tf", "prompt": "The title of a book is its last page.", "answer": false, "target": "title", "explanation": "No. The title is the name of the book." },
    { "type": "tf", "prompt": "A dictionary tells you what words mean.", "answer": true, "target": "dictionary", "explanation": "Yes. You look up a word in a dictionary." },
    { "type": "tf", "prompt": "Spelling is about the letters in a word.", "answer": true, "target": "spelling", "explanation": "Yes. Spelling is the right letters in a word." },
    { "type": "tf", "prompt": "A phrase is the same as a book.", "answer": false, "target": "phrase", "explanation": "No. A phrase is a few words that go together." }
  ],
  "A1|vocabulary|3|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "teacher", "right": "the person who gives you lessons and asks you questions" },
      { "left": "class", "right": "all the children who learn together in one room" },
      { "left": "pen", "right": "you write with it, and it is often blue or black" },
      { "left": "page", "right": "what you turn when you read a book" }
    ], "explanation": "A teacher gives lessons, and a class is all the children who learn together. You write with a pen, and you turn a page when you read a book." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "student", "right": "a boy or girl who goes to school to learn" },
      { "left": "word", "right": "something you can say or write, like \"hello\" or \"cat\"" },
      { "left": "homework", "right": "work you do at home after school" },
      { "left": "pencil", "right": "you can write with it, and you can also draw pictures with it" }
    ], "explanation": "A student goes to school to learn. A word is something you can say or write, and homework is work you do at home. You can write and draw with a pencil." }
  ],
  "A1|vocabulary|3|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "paper", "right": "a thing you draw pictures on, and you can also write on it" },
      { "left": "reading", "right": "what you do with your eyes when you look at a story and understand it" },
      { "left": "geography", "right": "the lesson where you look at maps of the world" },
      { "left": "list", "right": "what you write before you go to the shop, with one thing under another", "type": "noun" }
    ], "explanation": "You draw and write on paper. Reading is looking at a story and understanding it, and geography is the lesson about maps and the world. A list has one thing under another." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "letter", "right": "the little parts that you put together to make a word" },
      { "left": "writing", "right": "what you do with a pen to make words" },
      { "left": "history", "right": "lessons about people and things from long ago" },
      { "left": "language", "right": "English, Spanish or French" }
    ], "explanation": "Letters are the little parts of a word, and writing is making words with a pen. History is about people and things from long ago, and English, Spanish and French are languages." }
  ],
  "A1|vocabulary|3|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "college", "right": "the place you go to after high school to study for two or four years" },
      { "left": "subject", "right": "what a class is about, like music or science" },
      { "left": "group", "right": "four children who sit together and work together" },
      { "left": "rule", "right": "what a teacher says you must do or must not do" }
    ], "explanation": "You go to college after high school. A subject is what a class is about, a group works together, and a rule says what you must or must not do." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "university", "right": "a big place where adults study for a few years to become a doctor or a teacher" },
      { "left": "course", "right": "ten lessons about one subject, from September to December" },
      { "left": "project", "right": "work that takes many days, and that you show to the class" },
      { "left": "important", "right": "what you say about something that you must not forget" }
    ], "explanation": "Adults study at a university. A course is a group of lessons, and a project is work that takes many days. Something important is something you must not forget." }
  ],
  "A1|vocabulary|3|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "sentence", "right": "words together that tell you something, like \"I like dogs\"" },
      { "left": "dictionary", "right": "the book you open when you do not know a word" },
      { "left": "chart", "right": "a picture of numbers, like how many dogs live in each street" },
      { "left": "spelling", "right": "how you write the letters of a word" }
    ], "explanation": "A sentence tells you something, and you open a dictionary when you do not know a word. A chart is a picture of numbers, and spelling is how you write the letters of a word." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "paragraph", "right": "a part of a text that starts on a new line" },
      { "left": "title", "right": "the name that you read first, before you read a story" },
      { "left": "phrase", "right": "two or three words that people say together, like \"good morning\"" },
      { "left": "section", "right": "one of the parts of a newspaper, like sports or weather" }
    ], "explanation": "A paragraph starts on a new line, and a title is the name you read first. A phrase is a few words that people say together, and a section is one part of a newspaper." }
  ]
});
