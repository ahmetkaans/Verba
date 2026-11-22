/* Questions: A1 Vocabulary, theme 14 Learning and Ideas (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|14|mc|easy": [
    { "type": "mc", "prompt": "Before you give me your test, please ___ all your answers again.", "options": ["check", "swim", "paint", "climb"], "explanation": "When you check your answers, you look at them again to see if they are good. Do it before you give your test to the teacher." },
    { "type": "mc", "prompt": "Ali: \"Let's make a cake for Maria!\"\nAnna: \"That is a good ___!\"", "options": ["idea", "shoe", "bus", "chair"], "explanation": "An idea is something new that you think of. Ali thinks of a cake for Maria, and Anna says it is a good idea." },
    { "type": "mc", "prompt": "The teacher asks the class a ___. Maria knows the answer.", "options": ["question", "banana", "shirt", "river"], "explanation": "You ask a question when you want to know something. The teacher asks one, and Maria knows the answer." },
    { "type": "mc", "prompt": "Mia: \"What is five and five?\"\nKen: \"Ten. That is my ___!\"", "options": ["answer", "bag", "hat", "train"], "targetType": "noun", "explanation": "Mia asks a question, and Ken says ten. What Ken says is his answer." },
    { "type": "mc", "prompt": "\"The sun is cold\" is a ___ sentence.", "options": ["false", "tall", "happy", "red"], "explanation": "False means not true. The sun is hot, so the sentence is false." },
    { "type": "mc", "prompt": "Anna: \"What does 'bye' ___?\"\nTom: \"You say it when you go away.\"", "options": ["mean", "eat", "open", "climb"], "explanation": "We say \"What does this word mean?\" when we do not know a word. Tom tells Anna what \"bye\" means." },
    { "type": "mc", "prompt": "Ben writes \"gril\" for \"girl\". That is a spelling ___.", "options": ["mistake", "hotel", "jacket", "carrot"], "explanation": "Ben writes the letters in the wrong way, because the word is \"girl\". That is a spelling mistake." },
    { "type": "mc", "prompt": "Emma: \"A week has seven days.\"\nTom: \"Yes, that is ___.\"", "options": ["true", "hot", "big", "red"], "explanation": "Something is true when it is like that in real life. A week has seven days, so what Emma says is true." }
  ],
  "A1|vocabulary|14|mc|medium": [
    { "type": "mc", "prompt": "Maria is not in class today. Her ___ is that she is sick.", "options": ["reason", "age", "bag", "class"], "explanation": "A reason tells you why. Maria is sick, and that is why she is not in class." },
    { "type": "mc", "prompt": "I do not know the answer to this question, but I can ___. I think it is \"blue\".", "options": ["guess", "wait", "sit", "cook"], "targetType": "verb", "explanation": "To guess is to say an answer when you are not sure. Here the answer is \"blue\", but the person does not know." },
    { "type": "mc", "prompt": "Maria has two shirts, a red one and a blue one. She thinks and thinks, but she cannot ___.", "options": ["decide", "dance", "swim", "climb"], "explanation": "Maria thinks about two shirts, but she cannot say which one she wants. She cannot decide." },
    { "type": "mc", "prompt": "The menu has soup, salad and pizza. Please ___ one, and the waiter will bring it.", "options": ["choose", "dance", "sleep", "sing"], "explanation": "From the menu, you take one food and tell the waiter. You choose it." },
    { "type": "mc", "prompt": "Please ___ the glass with water.", "options": ["fill", "cut", "open", "close"], "explanation": "When you fill a glass, you put water in it until it is full." },
    { "type": "mc", "prompt": "Many people wait in a ___ at the bank.", "options": ["line", "kitchen", "park", "museum"], "explanation": "A line is people who stand one behind the other. In a bank, people wait in a line." },
    { "type": "mc", "prompt": "There are two ___ of tea: black and green.", "options": ["types", "shoes", "hats", "doors"], "target": "type", "explanation": "A type is a group of things that are the same in some way. Black tea and green tea are two types of tea." },
    { "type": "mc", "prompt": "The first ___ of the book is easy, but the end is hard.", "options": ["part", "hotel", "shirt", "river"], "explanation": "A part is one piece of something bigger. The first part of a book is not all of the book." }
  ],
  "A1|vocabulary|14|mc|hard": [
    { "type": "mc", "prompt": "Mia has a spelling test on Friday. She does spelling ___ every day.", "options": ["practice", "cheese", "music", "soup"], "targetType": "noun", "explanation": "Practice is time that you use to get better at something. Mia does spelling practice every day before her test." },
    { "type": "mc", "prompt": "Tom's answer is ___, so the teacher gives him ten points.", "options": ["correct", "cheap", "busy", "tired"], "targetType": "adjective", "explanation": "Correct means right, with no mistakes. Tom's answer has no mistakes, so the teacher gives him ten points." },
    { "type": "mc", "prompt": "You draw a line from each word to its picture. You ___ them.", "options": ["match", "sing", "visit", "carry"], "targetType": "verb", "explanation": "When you match a word with its picture, you put the two together because they go together." },
    { "type": "mc", "prompt": "Ben is a very ___ name. Many boys have it.", "options": ["common", "cheap", "quiet", "busy"], "explanation": "Common means that you see or hear it in many places. Many boys have the name Ben, so it is common." },
    { "type": "mc", "prompt": "Please ___ the sentences with words from the box.", "options": ["complete", "eat", "drive", "visit"], "targetType": "verb", "explanation": "When you complete a sentence, you add the words that it needs." },
    { "type": "mc", "prompt": "Tom: \"This movie is boring.\"\nAli: \"That is only your ___. I think it is great.\"", "options": ["opinion", "bag", "hair", "dollar"], "explanation": "An opinion is what you think about something. Tom thinks the movie is boring, and Ali thinks it is great." },
    { "type": "mc", "prompt": "Emma and her sister look very ___. They have the same hair and eyes.", "options": ["similar", "cheap", "fast", "thirsty"], "explanation": "Similar means the same in many ways. Emma and her sister have the same hair and eyes, so they look similar." },
    { "type": "mc", "prompt": "What is the ___ between a cat and a dog? A cat is small, and a dog can be big.", "options": ["difference", "price", "time", "age"], "explanation": "A cat is small, and a dog can be big. That is one way they are not the same, so it is a difference." }
  ],
  "A1|vocabulary|14|mc|veryhard": [
    { "type": "mc", "prompt": "Look in a dictionary to find the ___ of a new word.", "options": ["meaning", "topic", "problem", "reason"], "explanation": "The meaning of a word is what it says. A dictionary tells you the meaning of new words." },
    { "type": "mc", "prompt": "\"The sun is a star\" is a ___ about the sun. It says something that is true.", "options": ["statement", "picture", "letter", "number"], "explanation": "\"The sun is a star\" tells us a fact about the sun. A sentence like that is a statement." },
    { "type": "mc", "prompt": "Ken studies every day. The ___ is good: he gets ten out of ten on his test.", "options": ["result", "weather", "food", "money"], "explanation": "Ken studies, and then he gets ten out of ten. What you get at the end is the result." },
    { "type": "mc", "prompt": "Police: \"Can you give us a ___ of the man?\"\nAli: \"Yes. He is tall and has brown hair.\"", "options": ["description", "ticket", "number", "meal"], "explanation": "Tall and brown hair tell the police what the man looks like. That is a description." },
    { "type": "mc", "prompt": "The teacher says, \"Please ___ your best friend. What does he or she look like?\"", "options": ["describe", "dance", "sing", "forget"], "explanation": "The teacher wants to know what your friend looks like. When you say it, you describe your friend." },
    { "type": "mc", "prompt": "Close your eyes and ___ a big blue beach. What do you see?", "options": ["imagine", "clean", "sell", "buy"], "explanation": "You close your eyes and see a beach in your head, but it is not there. That is what imagine means." },
    { "type": "mc", "prompt": "Tom plays the piano every day, so he can ___ his playing.", "options": ["improve", "break", "forget", "lose"], "explanation": "To improve is to get better, or to make something better. Tom plays every day, so his playing gets better." },
    { "type": "mc", "prompt": "A ball, a pen and a cup are all ___. You can see them and take them in your hand.", "options": ["objects", "ideas", "words", "numbers"], "target": "object", "explanation": "An object is a thing that you can see and take in your hand. A ball, a pen and a cup are objects, but an idea is not." }
  ],
  "A1|vocabulary|14|fill|easy": [
    { "type": "fill", "before": "Ben is not sure he closed the door. He goes back to", "after": "it.", "answer": "check", "bank": ["check", "sell", "paint"], "explanation": "To check is to look again to see if something is good. Ben looks at the door again." },
    { "type": "fill", "before": "Four and four is eight. Your answer is", "after": ", Mia!", "answer": "right", "bank": ["right", "tall", "hot"], "targetType": "adjective", "explanation": "Right means good, with no mistakes. Four and four is eight, so Mia's answer is right." },
    { "type": "fill", "before": "Can I ask a", "after": "? I do not know this word.", "answer": "question", "bank": ["question", "door", "coat"], "explanation": "A question is something you ask when you want to know something. Here the person asks about a word." },
    { "type": "fill", "before": "Write the new words in your book, or you will", "after": "them.", "answer": "forget", "bank": ["forget", "open", "buy"], "explanation": "To forget is to not remember something. If you do not write the words, you will not have them in your head later." },
    { "type": "fill", "before": "Ali says, \"I have a", "after": "with my phone. It does not work.\"", "answer": "problem", "bank": ["problem", "doctor", "window"], "explanation": "A problem is something difficult that you do not want. A phone that does not work is a problem." },
    { "type": "fill", "before": "The teacher says, \"Look at this", "after": ". It shows you how to do it.\"", "answer": "example", "bank": ["example", "cheese", "door"], "explanation": "An example is one thing that shows you how to do something." },
    { "type": "fill", "before": "Tom says, \"Sorry, I took your pen. It was my", "after": ".\"", "answer": "mistake", "bank": ["mistake", "table", "shirt"], "explanation": "A mistake is something that you do in the wrong way. Tom takes the wrong pen, so he says it is his mistake." },
    { "type": "fill", "before": "Maria says, \"I can", "after": "my phone number. It has ten numbers.\"", "answer": "remember", "bank": ["remember", "carry", "cut"], "explanation": "To remember is to have something in your head from before. Maria has her phone number in her head." }
  ],
  "A1|vocabulary|14|fill|medium": [
    { "type": "fill", "before": "Ali: \"Why are you late?\"\nTom: \"My bus did not come. That is the", "after": ".\"", "answer": "reason", "bank": ["reason", "museum", "hotel"], "explanation": "Tom says why he is late: his bus did not come. That is the reason." },
    { "type": "fill", "before": "It is a", "after": "that the sun comes up in the east.", "answer": "fact", "bank": ["fact", "game", "shop"], "explanation": "A fact is something that is true. The sun really does come up in the east." },
    { "type": "fill", "before": "I cannot", "after": "now. Can I tell you tomorrow?", "answer": "decide", "bank": ["decide", "swim", "climb"], "explanation": "To decide is to think and then say what you will do. This person is not ready to say it today." },
    { "type": "fill", "before": "Emma: \"The soup is very good.\"\nKen: \"I", "after": ". I like it too.\"", "answer": "agree", "bank": ["agree", "sleep", "sit"], "explanation": "When you agree, you have the same idea as another person. Ken thinks the soup is good too." },
    { "type": "fill", "before": "A banana is a", "after": "of fruit.", "answer": "kind", "bank": ["kind", "bag", "box"], "explanation": "A kind of fruit is one group of fruit. A banana is one of them." },
    { "type": "fill", "before": "Can you", "after": "your name, please?", "answer": "spell", "bank": ["spell", "carry", "dance"], "explanation": "To spell a word is to say its letters one by one." },
    { "type": "fill", "before": "What", "after": "of food do you like? Do you like fish or chicken?", "answer": "type", "bank": ["type", "day", "room"], "explanation": "A type of food is one group of food. Fish and chicken are two types." },
    { "type": "fill", "before": "I did not hear you. Please", "after": "the question.", "answer": "repeat", "bank": ["repeat", "close", "visit"], "explanation": "To repeat is to say something again. The person did not hear it the first time." }
  ],
  "A1|vocabulary|14|fill|hard": [
    { "type": "fill", "before": "You must", "after": "your spelling every day to get better.", "answer": "practice", "bank": ["practice", "carry", "close", "clean"], "targetType": "verb", "explanation": "To practice is to do something again and again to get better at it." },
    { "type": "fill", "before": "It is", "after": "to learn ten words in a day. Many students do it.", "answer": "possible", "bank": ["possible", "hungry", "famous", "sick"], "explanation": "Possible means that you can do it. Many students learn ten words in a day, so it can be done." },
    { "type": "fill", "before": "Please", "after": "each question with its answer.", "answer": "match", "bank": ["match", "sit", "clean", "cook"], "targetType": "verb", "explanation": "To match is to put two things together because they go together, like a question and its answer." },
    { "type": "fill", "before": "Anna and Ken have a long", "after": "about their weekend.", "answer": "conversation", "bank": ["conversation", "window", "hotel", "tomato"], "explanation": "A conversation is a talk between two or more people. Anna and Ken talk about their weekend." },
    { "type": "fill", "before": "Please", "after": "a line at the door. We go in one by one.", "answer": "form", "bank": ["form", "break", "drive", "wait"], "targetType": "verb", "explanation": "To form a line is to make a line. People stand one behind the other." },
    { "type": "fill", "before": "Let's", "after": "the problem in class and find an idea together.", "answer": "discuss", "bank": ["discuss", "buy", "cut", "drive"], "explanation": "To discuss something is to talk about it with other people." },
    { "type": "fill", "before": "Mia's phone and my phone look", "after": ": both are black and small.", "answer": "similar", "bank": ["similar", "tired", "thirsty", "young"], "explanation": "Similar means the same in many ways. Both phones are black and small." },
    { "type": "fill", "before": "It is raining, and Tom has no umbrella. He is in a bad", "after": ".", "answer": "situation", "bank": ["situation", "shirt", "tomato", "jacket"], "explanation": "A situation is what is happening at one time in one place. Tom is in the rain with no umbrella, and that is a bad situation." }
  ],
  "A1|vocabulary|14|fill|veryhard": [
    { "type": "fill", "before": "Ben: \"What is the", "after": "of 'sunny'?\"\nKen: \"It is a day with sun.\"", "answer": "meaning", "bank": ["meaning", "name", "number", "price"], "explanation": "The meaning of a word is what it tells you. Ken tells Ben what \"sunny\" is." },
    { "type": "fill", "before": "The game ends. The", "after": "is three to two, and our team wins.", "answer": "result", "bank": ["result", "color", "price", "hour"], "explanation": "A result is what you get at the end of something. Here it is the end of a game." },
    { "type": "fill", "before": "Mia looks at two phones to see which one is better. She wants to", "after": "them.", "answer": "compare", "bank": ["compare", "close", "forget", "break"], "explanation": "To compare is to look at two things and see how they are the same and how they are different." },
    { "type": "fill", "before": "The teacher says, \"Write a short", "after": "of your room.\" Ken writes about his bed and his desk.", "answer": "description", "bank": ["description", "address", "number", "price"], "explanation": "A description tells people what something is like. Ken tells what is in his room." },
    { "type": "fill", "before": "\"Terrible\" is a", "after": "word, and \"wonderful\" is a good word.", "answer": "negative", "bank": ["negative", "hungry", "quiet", "cheap"], "explanation": "A negative word is a bad word. \"Terrible\" is bad, and \"wonderful\" is good." },
    { "type": "fill", "before": "Today's", "after": "in our English class is shopping. We learn words like price and cheap.", "answer": "topic", "bank": ["topic", "island", "tomato", "beach"], "explanation": "A topic is what a lesson is about. This lesson is about shopping." },
    { "type": "fill", "before": "Emma tells us every", "after": "of her trip: the day and the place.", "answer": "detail", "bank": ["detail", "dollar", "jacket", "banana"], "explanation": "A detail is one small fact about something. The day and the place are details of a trip." },
    { "type": "fill", "before": "A pen is not a person or an animal. It is an", "after": ".", "answer": "object", "bank": ["object", "uncle", "island", "apple"], "explanation": "An object is a thing that you can see and take in your hand. A pen is an object." }
  ],
  "A1|vocabulary|14|tf|easy": [
    { "type": "tf", "prompt": "Four and four is nine. That is the right answer.", "answer": false, "target": "right", "targetType": "adjective", "explanation": "No. Four and four is eight. Nine is a wrong answer." },
    { "type": "tf", "prompt": "Anna says, \"Let's go to the park!\" That is an idea.", "answer": true, "target": "idea", "explanation": "Yes. An idea is something that you think of. Anna thinks of going to the park." },
    { "type": "tf", "prompt": "When the teacher asks you a question, you can answer it.", "answer": true, "target": "answer", "targetType": "verb", "explanation": "Yes. To answer is to say something when someone asks you." },
    { "type": "tf", "prompt": "Ken forgets his pen. He has no pen in class.", "answer": true, "target": "forget", "explanation": "Yes. To forget is to not remember something. Ken does not remember his pen, so he has no pen in class." },
    { "type": "tf", "prompt": "\"Two and two is four\" is a false sentence.", "answer": false, "target": "false", "explanation": "No. Two and two is four, so the sentence is true, not false." },
    { "type": "tf", "prompt": "Your phone does not work. That is a problem.", "answer": true, "target": "problem", "explanation": "Yes. A problem is something difficult that you do not want." },
    { "type": "tf", "prompt": "When your answer is good, the teacher says it is wrong.", "answer": false, "target": "wrong", "explanation": "No. A good answer is right. The teacher says wrong when there is a mistake." },
    { "type": "tf", "prompt": "\"Ice is hot\" is a true sentence.", "answer": false, "target": "true", "explanation": "No. Ice is cold, so the sentence is false." }
  ],
  "A1|vocabulary|14|tf|medium": [
    { "type": "tf", "prompt": "It is a fact that a year has twelve months.", "answer": true, "target": "fact", "explanation": "Yes. A fact is something that is true. A year really has twelve months." },
    { "type": "tf", "prompt": "Ben is not sure about the answer. He says a word. That is a guess.", "answer": true, "target": "guess", "targetType": "noun", "explanation": "Yes. A guess is an answer that you say when you are not sure." },
    { "type": "tf", "prompt": "In a shop, Maria looks at three hats. She takes the red one. She chooses it.", "answer": true, "target": "choose", "explanation": "Yes. To choose is to take one thing from a few things." },
    { "type": "tf", "prompt": "A teacher can explain a new word to the class.", "answer": true, "target": "explain", "explanation": "Yes. To explain is to say something so that other people understand it." },
    { "type": "tf", "prompt": "Anna: \"The test is easy.\"\nTom: \"I agree. The test is hard.\"", "answer": false, "target": "agree", "explanation": "No. When you agree, you have the same idea. Tom must say that the test is easy too." },
    { "type": "tf", "prompt": "You fill a cup when you take all the water out.", "answer": false, "target": "fill", "explanation": "No. To fill a cup is to put water in it until it is full." },
    { "type": "tf", "prompt": "Pizza is a kind of drink.", "answer": false, "target": "kind", "explanation": "No. Pizza is a kind of food, not a drink." },
    { "type": "tf", "prompt": "A door is a part of a table.", "answer": false, "target": "part", "explanation": "No. A door is a part of a room or a house. A leg is a part of a table." }
  ],
  "A1|vocabulary|14|tf|hard": [
    { "type": "tf", "prompt": "It is possible to learn English with a good teacher.", "answer": true, "target": "possible", "explanation": "Yes. Possible means that you can do it. Many students learn English." },
    { "type": "tf", "prompt": "Your teacher can correct the mistakes in your homework.", "answer": true, "target": "correct", "targetType": "verb", "explanation": "Yes. To correct a mistake is to change it so that it is right." },
    { "type": "tf", "prompt": "In New York, snow is common in summer.", "answer": false, "target": "common", "explanation": "No. Common means that you see it often. Snow is common in winter, not in summer." },
    { "type": "tf", "prompt": "Two friends talk on the phone for an hour. That is a conversation.", "answer": true, "target": "conversation", "explanation": "Yes. A conversation is a talk between two or more people." },
    { "type": "tf", "prompt": "A complete class list has only half of the names.", "answer": false, "target": "complete", "targetType": "adjective", "explanation": "No. A complete list has all the names." },
    { "type": "tf", "prompt": "When students form a line, they all sit in different rooms.", "answer": false, "target": "form", "targetType": "verb", "explanation": "No. When students form a line, they stand one behind the other." },
    { "type": "tf", "prompt": "A perfect answer has two mistakes.", "answer": false, "target": "perfect", "explanation": "No. A perfect answer is the best answer. It has no mistakes." },
    { "type": "tf", "prompt": "Ken's shirt is red, and Emma's shirt is blue. The color is one difference.", "answer": true, "target": "difference", "explanation": "Yes. A difference is a way that two things are not the same." }
  ],
  "A1|vocabulary|14|tf|veryhard": [
    { "type": "tf", "prompt": "The word \"big\" has the same meaning as the word \"large\".", "answer": true, "target": "meaning", "explanation": "Yes. Big and large tell you the same thing, so they have the same meaning." },
    { "type": "tf", "prompt": "\"What is your name?\" is a statement.", "answer": false, "target": "statement", "explanation": "No. A statement says something. This sentence asks something." },
    { "type": "tf", "prompt": "When you compare two phones, you only look at one phone.", "answer": false, "target": "compare", "explanation": "No. To compare is to look at two things and see how they are the same and how they are different." },
    { "type": "tf", "prompt": "When you describe a dog, you only say its name.", "answer": false, "target": "describe", "explanation": "No. To describe a dog is to say what it is like, for example big and brown." },
    { "type": "tf", "prompt": "\"Wonderful\" is a negative word.", "answer": false, "target": "negative", "explanation": "No. \"Wonderful\" is a good word, and a negative word is a bad word." },
    { "type": "tf", "prompt": "A blog about football has football as its topic.", "answer": true, "target": "topic", "explanation": "Yes. A topic is what a text is about. The blog is about football." },
    { "type": "tf", "prompt": "Your name and your age are two details about you.", "answer": true, "target": "detail", "explanation": "Yes. A detail is one small fact. Your name and your age are small facts about you." },
    { "type": "tf", "prompt": "\"Great\" is a positive word.", "answer": true, "target": "positive", "explanation": "Yes. A positive word is a good word, and \"great\" is a good word." }
  ],
  "A1|vocabulary|14|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "check", "right": "to look at your work again to see if it is OK" },
      { "left": "right", "right": "like the answer \"eight\" for \"four and four\"", "type": "adjective" },
      { "left": "idea", "right": "a new thing that you think of, like a plan for a party" },
      { "left": "question", "right": "words that you say when you want to know something" }
    ], "explanation": "To check is to look again. Right means good, with no mistakes. An idea is something new in your head, and a question is what you say to know something." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "answer", "right": "what you say when a teacher asks you something", "type": "noun" },
      { "left": "forget", "right": "to not have a name or a word in your head any more" },
      { "left": "false", "right": "not true, like \"a week has ten days\"" },
      { "left": "problem", "right": "something difficult that you do not want, like no money for the bus" }
    ], "explanation": "An answer is what you say to a teacher. To forget is to lose something from your head. False is not true, and a problem is something difficult." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "mean", "right": "to say the same as another word, like \"hi\" and \"hello\"" },
      { "left": "example", "right": "one thing that shows what you talk about, like a banana for fruit" },
      { "left": "wrong", "right": "not good because there is a mistake in it, like an answer" },
      { "left": "remember", "right": "to have something from before in your head, like a friend's phone number" }
    ], "explanation": "\"Hi\" and \"hello\" mean the same. A banana is an example of fruit. A wrong answer has a mistake, and to remember is to keep something in your head." }
  ],
  "A1|vocabulary|14|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "reason", "right": "the answer to the question \"Why?\"" },
      { "left": "fact", "right": "something that is true in real life, like \"A dog has four legs\"" },
      { "left": "guess", "right": "to say what you think the answer is, but you do not know it", "type": "verb" },
      { "left": "agree", "right": "to think the same as another person" }
    ], "explanation": "A reason tells you why. A fact is true in real life. To guess is to say an answer that you do not know, and to agree is to think the same." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "decide", "right": "to think about a few things and then say which one you will take" },
      { "left": "fill", "right": "to put something in a cup or a box until it is full" },
      { "left": "kind", "right": "a group of things, like \"fruit\" or \"soup\" on a menu" },
      { "left": "spell", "right": "to say the letters of the word \"cat\" one by one" }
    ], "explanation": "To decide is to say what you will take. To fill is to put in until it is full. A kind is a group of things, and to spell is to say the letters." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "choose", "right": "to take the one that you want from a few things" },
      { "left": "line", "right": "people who stand one behind the other and wait at a bank or a shop" },
      { "left": "explain", "right": "to tell something in a way that people understand" },
      { "left": "repeat", "right": "to say or do the same thing one more time" }
    ], "explanation": "To choose is to take the one you want. A line is people who wait one behind the other. To explain is to help people understand, and to repeat is to do it again." }
  ],
  "A1|vocabulary|14|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "practice", "right": "the time you work again and again to get better, for example at spelling", "type": "noun" },
      { "left": "possible", "right": "can happen, or you can do it" },
      { "left": "correct", "right": "with no mistakes, like a good answer", "type": "adjective" },
      { "left": "match", "right": "to put two things together because they go together, like a word and a picture", "type": "verb" }
    ], "explanation": "Practice is time that helps you get better. Possible means that you can do it. Correct means no mistakes, and to match is to put two things together." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "common", "right": "you see it or hear it in many places, like a name that many people have" },
      { "left": "conversation", "right": "when two people talk to each other" },
      { "left": "complete", "right": "with all its parts there, like a game with all its pieces", "type": "adjective" },
      { "left": "form", "right": "to make a group or a line with other people", "type": "verb" }
    ], "explanation": "A common name is in many places. A conversation is a talk. A complete game has all its pieces, and to form a line is to make a line." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "opinion", "right": "what you think about something, for example if a movie is good" },
      { "left": "discuss", "right": "to talk about something with other people and say your ideas" },
      { "left": "perfect", "right": "as good as it can be" },
      { "left": "situation", "right": "everything that is happening around a person at one time" }
    ], "explanation": "An opinion is what you think. To discuss is to talk with other people. Perfect is as good as it can be, and a situation is what is happening around you." }
  ],
  "A1|vocabulary|14|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "statement", "right": "one sentence that says something, like \"Today is Monday.\"" },
      { "left": "result", "right": "what you get at the end, for example after a test or a game" },
      { "left": "compare", "right": "to look at two things to see which one is better, or how they are different" },
      { "left": "description", "right": "words that tell people what someone or something looks like" }
    ], "explanation": "A statement is one sentence that says something. A result comes at the end. To compare is to look at two things, and a description tells people what something looks like." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "describe", "right": "to tell people what someone or something looks like" },
      { "left": "imagine", "right": "to see something in your head when it is not there" },
      { "left": "improve", "right": "to become better, or to make something better" },
      { "left": "positive", "right": "good, like a happy word or a nice idea", "type": "adjective" }
    ], "explanation": "To describe is to tell what something looks like. To imagine is to see it in your head. To improve is to get better, and positive means good." }
  ]
});
