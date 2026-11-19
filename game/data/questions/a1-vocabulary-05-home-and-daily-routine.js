/* Questions: A1 Vocabulary, theme 05 Home and Daily Routine (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|5|mc|easy": [
    { "type": "mc", "prompt": "Anna puts a big picture on the ___.", "options": ["wall", "banana", "shoe", "milk"], "explanation": "A wall is one of the parts that stand around a room. Anna puts a picture on the wall." },
    { "type": "mc", "prompt": "The family eats dinner at the ___.", "options": ["table", "hat", "shoe", "bread"], "explanation": "A table is a thing with legs, where you eat or work. The family eats dinner at the table." },
    { "type": "mc", "prompt": "Tom sleeps in his ___ every night.", "options": ["bed", "river", "shoe", "bus"], "explanation": "A bed is something you sleep on. Tom sleeps in his bed every night." },
    { "type": "mc", "prompt": "Anna's ___ is very small. There is only a bed and a desk.", "options": ["room", "banana", "tree", "milk"], "explanation": "A room is a space in a house with walls and a door. Anna's room has only a bed and a desk." },
    { "type": "mc", "prompt": "Open the ___, please. It is hot in here.", "options": ["window", "apple", "milk", "river"], "explanation": "A window is a place in a wall with glass. You can open it when it is hot." },
    { "type": "mc", "prompt": "Mom cooks dinner in the ___.", "options": ["kitchen", "tree", "bus", "apple"], "explanation": "A kitchen is a room where you cook. Mom cooks dinner there." },
    { "type": "mc", "prompt": "Leo sits on a ___ and reads his book.", "options": ["chair", "banana", "hat", "bread"], "explanation": "A chair is something you sit on. Leo sits on a chair and reads." },
    { "type": "mc", "prompt": "In the house, we walk on the ___.", "options": ["floor", "apple", "hat", "bus"], "explanation": "The floor is the part of a room that you walk on." }
  ],
  "A1|vocabulary|5|mc|medium": [
    { "type": "mc", "prompt": "Ali eats his ___ with his friends at school at twelve.", "options": ["lunch", "bed", "shirt", "bus"], "explanation": "Lunch is the meal between breakfast and dinner. Ali eats it at school at twelve." },
    { "type": "mc", "prompt": "Mom cannot talk now. She is very ___ today.", "options": ["busy", "small", "yellow", "young"], "explanation": "Busy means with a lot to do. Mom has no time to talk." },
    { "type": "mc", "prompt": "We eat ___ in the morning before school.", "options": ["breakfast", "homework", "shower", "door"], "explanation": "Breakfast is the first meal of the day. We eat it in the morning." },
    { "type": "mc", "prompt": "The bus is here. Are you ___ to go?", "options": ["ready", "busy", "cold", "young"], "explanation": "Ready means you have everything you need. The bus is here, so it is time to go." },
    { "type": "mc", "prompt": "Please ___ your milk before you go to bed.", "options": ["finish", "drive", "wash", "wake"], "explanation": "To finish is to come to the end of something. You finish your milk when there is no more milk." },
    { "type": "mc", "prompt": "I sleep at night and ___ up in the morning.", "options": ["wake", "drink", "carry", "drive"], "explanation": "To wake up is to stop sleeping. We wake up in the morning." },
    { "type": "mc", "prompt": "Please ___ your hands before you eat.", "options": ["wash", "carry", "cook", "drive"], "explanation": "To wash is to clean with water. We wash our hands before we eat." },
    { "type": "mc", "prompt": "Dad cooks a big ___ every Sunday.", "options": ["dinner", "bed", "key", "bus"], "explanation": "Dinner is the main meal of the day. Dad cooks a big dinner on Sundays." }
  ],
  "A1|vocabulary|5|mc|hard": [
    { "type": "mc", "prompt": "In many bathrooms, there is a bath, a shower and a ___.", "options": ["toilet", "garden", "bedroom", "key"], "explanation": "A toilet is a thing in a bathroom. You use it when you need to go. Many bathrooms have a bath, a shower and a toilet." },
    { "type": "mc", "prompt": "Mia does her homework at her ___ every day.", "options": ["desk", "clock", "shower", "box"], "explanation": "A desk is a table where you work or study. Mia does her homework at her desk." },
    { "type": "mc", "prompt": "Tom plays basketball with his friends in the ___ near his house.", "options": ["garden", "shower", "toilet", "box"], "explanation": "A garden is a place near a house with flowers and plants. Tom plays there with his friends." },
    { "type": "mc", "prompt": "Anna lives in a small ___ on the third floor.", "options": ["apartment", "yard", "bath", "desk"], "explanation": "An apartment is a home in a big building. Anna's apartment is on the third floor." },
    { "type": "mc", "prompt": "The water is warm. Leo takes a ___ before bed.", "options": ["bath", "desk", "key", "clock"], "explanation": "A bath is something you sit in with water to wash your body. Leo takes a bath before bed." },
    { "type": "mc", "prompt": "You need a ___ to open the door of your apartment.", "options": ["key", "shower", "garden", "bed"], "targetType": "noun", "explanation": "A key is a small thing that opens a door. You need it to open your apartment door." },
    { "type": "mc", "prompt": "Ben turns on the water and takes a quick ___ every morning.", "options": ["shower", "desk", "box", "yard"], "explanation": "A shower is a way to wash with water that falls on you. Ben takes one every morning." },
    { "type": "mc", "prompt": "Mom puts the old books in a big ___.", "options": ["box", "light", "garden", "key"], "explanation": "A box is something you put things in and keep them in. Mom puts the books in a box." }
  ],
  "A1|vocabulary|5|mc|veryhard": [
    { "type": "mc", "prompt": "Mia does her ___ after school and before dinner.", "options": ["homework", "shower", "bath", "box"], "explanation": "Homework is work from school that you do at home. Mia does hers after school." },
    { "type": "mc", "prompt": "After she studies for one hour, Mia takes a short ___.", "options": ["break", "routine", "homework", "box"], "targetType": "noun", "explanation": "A break is a short time when you do not work. Mia takes a break after one hour." },
    { "type": "mc", "prompt": "Anna's family wants to ___ to a bigger apartment.", "options": ["move", "wash", "wake", "finish"], "explanation": "To move is to go to a new home or place. Anna's family wants a new home." },
    { "type": "mc", "prompt": "You can ___ this book. I do not need it.", "options": ["keep", "wash", "wake", "cook"], "explanation": "To keep is to have something and not give it back. The speaker does not need the book." },
    { "type": "mc", "prompt": "After work, Dad sits in his chair and likes to ___.", "options": ["relax", "drive", "finish", "bring"], "explanation": "To relax is to feel good and not work. Dad sits in his chair after work." },
    { "type": "mc", "prompt": "Tom plays in the yard all day. His shoes are very ___.", "options": ["dirty", "busy", "ready", "quiet"], "explanation": "Dirty means not clean. Tom's shoes are not clean after he plays in the yard." },
    { "type": "mc", "prompt": "Ben does the same things at the same times every day. It is his ___.", "options": ["routine", "desk", "key", "box"], "explanation": "A routine is what you do every day at the same time." },
    { "type": "mc", "prompt": "Tom is in his bedroom on the second floor. Mom is in the kitchen on the first floor. She is ___.", "options": ["downstairs", "now", "together", "again"], "explanation": "Downstairs means on the floor below you in a house. The kitchen is below Tom's bedroom." }
  ],
  "A1|vocabulary|5|fill|easy": [
    { "type": "fill", "before": "The", "after": "is white, and it has a big window in it.", "answer": "wall", "bank": ["wall", "apple", "shoe"], "explanation": "A wall is one of the parts that stand around a room. This wall is white and has a window in it." },
    { "type": "fill", "before": "Mia goes out of the house and closes the", "after": "behind her.", "answer": "door", "bank": ["door", "apple", "milk"], "explanation": "A door is a thing you open to go into or out of a house. Mia closes it when she goes out." },
    { "type": "fill", "before": "Sam wakes up in his", "after": "at seven.", "answer": "bed", "bank": ["bed", "shoe", "hat"], "explanation": "A bed is something you sleep on. Sam wakes up in his bed." },
    { "type": "fill", "before": "Mia takes a shower in the", "after": ".", "answer": "bathroom", "bank": ["bathroom", "tree", "hat"], "explanation": "A bathroom is a room with a bath or a shower. Mia takes a shower there." },
    { "type": "fill", "before": "Anna looks out of the", "after": "and sees the rain.", "answer": "window", "bank": ["window", "bed", "apple"], "explanation": "A window is a place in a wall with glass. You can look out of it." },
    { "type": "fill", "before": "We have breakfast in the", "after": "every morning.", "answer": "kitchen", "bank": ["kitchen", "tree", "hat"], "explanation": "A kitchen is a room where you cook and eat. We have breakfast there every morning." },
    { "type": "fill", "before": "There is a big bed and a small window in my", "after": ".", "answer": "bedroom", "bank": ["bedroom", "shoe", "tree"], "explanation": "A bedroom is a room where you sleep. It has a bed in it." },
    { "type": "fill", "before": "Every student has a desk and a", "after": "in the classroom.", "answer": "chair", "bank": ["chair", "river", "milk"], "explanation": "A chair is something you sit on. Every student sits on a chair at a desk." }
  ],
  "A1|vocabulary|5|fill|medium": [
    { "type": "fill", "before": "I have a test, homework and a lot to do. I am very", "after": ".", "answer": "busy", "bank": ["busy", "blue", "small"], "explanation": "Busy means with a lot to do. The speaker has a test and homework." },
    { "type": "fill", "before": "Please", "after": "the kitchen after dinner.", "answer": "clean", "bank": ["clean", "drive", "drink"], "targetType": "verb", "explanation": "To clean is to make something not dirty. We clean the kitchen after dinner." },
    { "type": "fill", "before": "Tom drinks milk and eats bread for", "after": "every morning.", "answer": "breakfast", "bank": ["breakfast", "bed", "bus"], "explanation": "Breakfast is the first meal of the day. Tom has milk and bread." },
    { "type": "fill", "before": "Dinner is", "after": "now. Please come to the table.", "answer": "ready", "bank": ["ready", "quiet", "young"], "explanation": "Ready means you can start because everything is OK. Dinner is on the table." },
    { "type": "fill", "before": "Ali wants to play, but first he must", "after": "his homework.", "answer": "finish", "bank": ["finish", "wash", "wake"], "explanation": "To finish is to come to the end of something. Ali must come to the end of his homework." },
    { "type": "fill", "before": "Mom likes to", "after": "in the kitchen on Sundays.", "answer": "cook", "bank": ["cook", "drive", "wake"], "explanation": "To cook is to make a meal. Mom makes meals in the kitchen on Sundays." },
    { "type": "fill", "before": "Please", "after": "your book to class tomorrow.", "answer": "bring", "bank": ["bring", "cook", "drive"], "explanation": "To bring is to take something with you. Please take your book with you to class." },
    { "type": "fill", "before": "We eat", "after": "at seven in the evening.", "answer": "dinner", "bank": ["dinner", "homework", "bath"], "explanation": "Dinner is the main meal of the day. We eat it in the evening." }
  ],
  "A1|vocabulary|5|fill|hard": [
    { "type": "fill", "before": "People sit on the", "after": "in the bathroom.", "answer": "toilet", "bank": ["toilet", "window", "wall", "apartment"], "explanation": "A toilet is a thing in a bathroom. You use it when you need to go." },
    { "type": "fill", "before": "The dog runs and plays in the", "after": "behind our house.", "answer": "yard", "bank": ["yard", "shower", "key", "clock"], "explanation": "A yard is the open place behind or in front of a house. The dog plays there." },
    { "type": "fill", "before": "Anna's grandmother has many flowers and trees in her", "after": ".", "answer": "garden", "bank": ["garden", "shower", "desk", "door"], "explanation": "A garden is a place near a house with flowers and plants." },
    { "type": "fill", "before": "In the morning, the", "after": "from the sun comes in through the window.", "answer": "light", "bank": ["light", "key", "box", "wall"], "targetType": "noun", "explanation": "Light is what lets you see. The sun gives light in the morning." },
    { "type": "fill", "before": "There is warm water in the", "after": ". Mia sits in it and washes.", "answer": "bath", "bank": ["bath", "box", "desk", "floor"], "explanation": "A bath is something you sit in with water to wash your body." },
    { "type": "fill", "before": "Anna cannot find her", "after": ". She cannot go into her house.", "answer": "key", "bank": ["key", "desk", "shower", "window"], "targetType": "noun", "explanation": "A key is a small thing that opens a door. Without it, Anna cannot go into her house." },
    { "type": "fill", "before": "Dad puts the", "after": "next to the bed. He wants to wake up at six.", "answer": "clock", "bank": ["clock", "key", "bath", "chair"], "explanation": "A clock shows you the time. Dad wants to know when it is six." },
    { "type": "fill", "before": "Leo is hot and dirty after the game. He takes a", "after": ".", "answer": "shower", "bank": ["shower", "table", "clock", "chair"], "explanation": "A shower is a way to wash with water that falls on you. Leo is hot and dirty, so he takes one." }
  ],
  "A1|vocabulary|5|fill|veryhard": [
    { "type": "fill", "before": "Ken has a lot of", "after": "today, so he cannot play.", "answer": "homework", "bank": ["homework", "garden", "shower", "apartment"], "explanation": "Homework is work from school that you do at home. Ken must do his homework first." },
    { "type": "fill", "before": "The doctor says, \"Please", "after": "on the bed.\"", "answer": "lie", "bank": ["lie", "wash", "bring", "finish"], "explanation": "To lie is to put your body down on a bed or on the floor. The doctor wants you to put your body down." },
    { "type": "fill", "before": "Please", "after": "this chair. It is in my way.", "answer": "move", "bank": ["move", "wake", "wash", "cook"], "explanation": "To move is to take something to another place. The chair is in the way, so please take it away." },
    { "type": "fill", "before": "Please be", "after": ". The baby is sleeping.", "answer": "quiet", "bank": ["quiet", "busy", "small", "dirty"], "explanation": "Quiet means with very little sound. We are quiet when a baby is sleeping." },
    { "type": "fill", "before": "Anna has no homework today, so she wants to", "after": "in her room.", "answer": "relax", "bank": ["relax", "break", "bring", "finish"], "explanation": "To relax is to feel good and not work. Anna has no work today." },
    { "type": "fill", "before": "Oh no! The floor is", "after": ". Please clean it.", "answer": "dirty", "bank": ["dirty", "quiet", "small", "young"], "explanation": "Dirty means not clean. We clean a floor that is dirty." },
    { "type": "fill", "before": "The bathroom is on the first floor, but the bedrooms are", "after": ".", "answer": "upstairs", "bank": ["upstairs", "now", "again", "maybe"], "explanation": "Upstairs means on the floor above you in a house. The bedrooms are above the bathroom." },
    { "type": "fill", "before": "Every day, Anna wakes up, has breakfast and goes to school. This is her morning", "after": ".", "answer": "routine", "bank": ["routine", "garden", "apartment", "box"], "explanation": "A routine is the things you do every day at the same time. Anna does the same things every morning." }
  ],
  "A1|vocabulary|5|tf|easy": [
    { "type": "tf", "prompt": "A house has walls around its rooms.", "answer": true, "target": "wall", "explanation": "Yes. A wall is one of the parts that stand around a room." },
    { "type": "tf", "prompt": "A door is something you open and close.", "answer": true, "target": "door", "explanation": "Yes. You open a door to go in or out." },
    { "type": "tf", "prompt": "A table is something you sleep on.", "answer": false, "target": "table", "explanation": "No. You sleep on a bed. A table is a thing with legs, where you eat or work." },
    { "type": "tf", "prompt": "You cook dinner in a bathroom.", "answer": false, "target": "bathroom", "explanation": "No. You cook in a kitchen. A bathroom is a room with a bath or a shower." },
    { "type": "tf", "prompt": "A kitchen is a room in a house.", "answer": true, "target": "kitchen", "explanation": "Yes. A kitchen is a room where you cook." },
    { "type": "tf", "prompt": "A room is something that opens and closes.", "answer": false, "target": "room", "explanation": "No. A door opens and closes. A room is a space in a house." },
    { "type": "tf", "prompt": "A bedroom is a room where you sleep.", "answer": true, "target": "bedroom", "explanation": "Yes. A bedroom has a bed in it." },
    { "type": "tf", "prompt": "A chair is a room in a house.", "answer": false, "target": "chair", "explanation": "No. A chair is something you sit on. It is not a room." }
  ],
  "A1|vocabulary|5|tf|medium": [
    { "type": "tf", "prompt": "If you are busy, you have a lot to do.", "answer": true, "target": "busy", "explanation": "Yes. Busy means with a lot to do." },
    { "type": "tf", "prompt": "Lunch is the first meal of the day.", "answer": false, "target": "lunch", "explanation": "No. Breakfast is the first meal. Lunch comes after breakfast and before dinner." },
    { "type": "tf", "prompt": "You finish a movie before you start it.", "answer": false, "target": "finish", "explanation": "No. You start a movie first. You finish it at the end." },
    { "type": "tf", "prompt": "A clean shirt is not dirty.", "answer": true, "target": "clean", "targetType": "adjective", "explanation": "Yes. Clean means not dirty." },
    { "type": "tf", "prompt": "You wake up when you go to sleep.", "answer": false, "target": "wake", "explanation": "No. You wake up when you stop sleeping." },
    { "type": "tf", "prompt": "When you cook, you make food hot.", "answer": true, "target": "cook", "explanation": "Yes. We cook food to make a meal." },
    { "type": "tf", "prompt": "If you bring your lunch to school, you take it with you.", "answer": true, "target": "bring", "explanation": "Yes. To bring is to take something with you." },
    { "type": "tf", "prompt": "You wash a shirt to make it dirty.", "answer": false, "target": "wash", "explanation": "No. You wash a shirt to make it clean." }
  ],
  "A1|vocabulary|5|tf|hard": [
    { "type": "tf", "prompt": "A toilet is something people use every day.", "answer": true, "target": "toilet", "explanation": "Yes. A toilet is something in a bathroom that people use every day." },
    { "type": "tf", "prompt": "A desk is a kind of table.", "answer": true, "target": "desk", "explanation": "Yes. A desk is a table where you work or study." },
    { "type": "tf", "prompt": "A yard is a room in a house.", "answer": false, "target": "yard", "explanation": "No. A yard is the open place behind or in front of a house." },
    { "type": "tf", "prompt": "You use a key to cook dinner.", "answer": false, "target": "key", "targetType": "noun", "explanation": "No. You use a key to open a door." },
    { "type": "tf", "prompt": "Many families live in an apartment in a big city.", "answer": true, "target": "apartment", "explanation": "Yes. An apartment is a home in a big building." },
    { "type": "tf", "prompt": "You take a shower to make your hands dirty.", "answer": false, "target": "shower", "explanation": "No. You take a shower to wash your body." },
    { "type": "tf", "prompt": "You turn on a light to make the room dark.", "answer": false, "target": "light", "targetType": "noun", "explanation": "No. You turn on a light when a room is dark, so that you can see." },
    { "type": "tf", "prompt": "A clock shows you what time it is.", "answer": true, "target": "clock", "explanation": "Yes. A clock tells you the time." }
  ],
  "A1|vocabulary|5|tf|veryhard": [
    { "type": "tf", "prompt": "Students often do homework at home in the evening.", "answer": true, "target": "homework", "explanation": "Yes. Homework is work from school that you do at home." },
    { "type": "tf", "prompt": "A glass can break if it falls on the floor.", "answer": true, "target": "break", "targetType": "verb", "explanation": "Yes. To break is to go into pieces. A glass can break when it falls." },
    { "type": "tf", "prompt": "When you lie down, you are standing.", "answer": false, "target": "lie", "explanation": "No. When you lie down, your body is down. You are not standing." },
    { "type": "tf", "prompt": "A quiet person talks all the time.", "answer": false, "target": "quiet", "explanation": "No. A quiet person talks very little." },
    { "type": "tf", "prompt": "If your shoes are dirty, you can wash them.", "answer": true, "target": "dirty", "explanation": "Yes. Dirty means not clean, so you can wash dirty shoes." },
    { "type": "tf", "prompt": "If you keep something, you give it to another person.", "answer": false, "target": "keep", "explanation": "No. If you keep something, you have it and do not give it to another person." },
    { "type": "tf", "prompt": "If your bedroom is on the second floor, it is upstairs.", "answer": true, "target": "upstairs", "explanation": "Yes. Upstairs means on the floor above you in a house." },
    { "type": "tf", "prompt": "A routine is something that is different every day.", "answer": false, "target": "routine", "explanation": "No. A routine is the same things you do every day at the same time." }
  ],
  "A1|vocabulary|5|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "table", "right": "you put a book or a cup on it" },
      { "left": "door", "right": "you open it to go in or out of a house" },
      { "left": "bed", "right": "you sleep on it at night" },
      { "left": "room", "right": "a space with walls in a house, like the kitchen" }
    ], "explanation": "You put a book on a table and sleep on a bed. You open a door to go in or out. A room is a space with walls in a house." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "bathroom", "right": "the room where you take a shower or a bath" },
      { "left": "window", "right": "a part of a wall that lets light into the room" },
      { "left": "bedroom", "right": "the room where you sleep and keep your clothes" },
      { "left": "floor", "right": "it is under your feet in every room" }
    ], "explanation": "You wash in a bathroom and sleep in a bedroom. A window lets light into the room, and the floor is under your feet." }
  ],
  "A1|vocabulary|5|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "lunch", "right": "the meal you eat after breakfast and before dinner" },
      { "left": "clean", "right": "to make a window or a floor not dirty", "type": "verb" },
      { "left": "ready", "right": "when you can start because everything is done" },
      { "left": "wake", "right": "to stop sleeping" }
    ], "explanation": "Lunch is the meal after breakfast. To clean is to make something not dirty, and ready means you can go. To wake is to stop sleeping." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "breakfast", "right": "the first meal after you wake up" },
      { "left": "cook", "right": "to make food for a meal" },
      { "left": "bring", "right": "to take something with you when you come" },
      { "left": "wash", "right": "to make something clean with water" }
    ], "explanation": "Breakfast is the first meal after you wake up, and you cook food for a meal. You bring something with you, and you wash something with water." }
  ],
  "A1|vocabulary|5|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "desk", "right": "a table where one person works or studies" },
      { "left": "yard", "right": "the open place behind a house where you can play" },
      { "left": "apartment", "right": "a home in a big building, with its own door" },
      { "left": "light", "right": "what lets you see in a room when it is dark", "type": "noun" }
    ], "explanation": "One person works at a desk, and you can play in the yard. An apartment is a home in a big building, and a light lets you see in a room when it is dark." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "garden", "right": "you can grow plants there, near your house" },
      { "left": "bath", "right": "you sit in it with warm water to wash" },
      { "left": "clock", "right": "a thing with numbers and two hands on the wall or on a table" },
      { "left": "box", "right": "a thing for putting things in and keeping them" }
    ], "explanation": "You can grow plants in a garden. You sit in a bath to wash, and a clock has numbers and two hands. A box is for putting things in." }
  ],
  "A1|vocabulary|5|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "break", "right": "a short time when you do not work", "type": "noun" },
      { "left": "lie", "right": "to put your body down on a bed" },
      { "left": "quiet", "right": "with very little sound" },
      { "left": "upstairs", "right": "on the floor above you in a house" }
    ], "explanation": "A break is a short time when you do not work, and to lie is to put your body down on a bed. Quiet means with very little sound, and upstairs is on the floor above." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "move", "right": "to change where you live, or to take something to another place" },
      { "left": "keep", "right": "to have something and not give it away" },
      { "left": "relax", "right": "to feel good and not work" },
      { "left": "downstairs", "right": "on the floor below you in a house" }
    ], "explanation": "To move is to go to a new place, and to keep is to have something and not give it away. To relax is to feel good and not work, and downstairs is on the floor below." }
  ]
});
