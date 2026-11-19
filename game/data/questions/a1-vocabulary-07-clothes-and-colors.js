/* Questions: A1 Vocabulary, theme 07 Clothes and Colors (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|7|mc|easy": [
    { "type": "mc", "prompt": "Tom wears a ___ on his head when it is sunny.", "options": ["hat", "bed", "bus", "tree"], "explanation": "A hat is something you wear on your head. Tom wears one when it is sunny." },
    { "type": "mc", "prompt": "A traffic light says go when it is ___.", "options": ["green", "fast", "busy", "quiet"], "targetType": "adjective", "explanation": "Green is the color of the light that means go." },
    { "type": "mc", "prompt": "The ocean is ___ on a sunny day.", "options": ["blue", "young", "quiet", "ready"], "targetType": "adjective", "explanation": "Blue is the color of the ocean on a sunny day." },
    { "type": "mc", "prompt": "Anna has a ___ shirt and a white hat.", "options": ["red", "tall", "quiet", "dirty"], "targetType": "adjective", "explanation": "Red is a color, like blue and green. Anna's shirt is red." },
    { "type": "mc", "prompt": "The letters in a book are ___, and the paper is white.", "options": ["black", "fast", "busy", "young"], "targetType": "adjective", "explanation": "Black is the color of the letters in most books." },
    { "type": "mc", "prompt": "A banana is ___ when it is ready to eat.", "options": ["yellow", "tall", "fast", "dirty"], "targetType": "adjective", "explanation": "Yellow is the color of a banana when it is ready to eat." },
    { "type": "mc", "prompt": "Snow is ___.", "options": ["white", "busy", "young", "ready"], "targetType": "adjective", "explanation": "White is the color of snow." },
    { "type": "mc", "prompt": "Anna wears a ___ with a picture of a dog on it.", "options": ["shirt", "bed", "bus", "door"], "explanation": "A shirt is something you wear on your body. Anna's shirt has a dog on it." }
  ],
  "A1|vocabulary|7|mc|medium": [
    { "type": "mc", "prompt": "Mia has a ___ hat and a green shirt.", "options": ["pink", "tall", "quiet", "ready"], "targetType": "adjective", "explanation": "Pink is the color of a pig. Mia has a pink hat." },
    { "type": "mc", "prompt": "The sun in the evening is ___.", "options": ["orange", "tall", "ready", "dirty"], "targetType": "adjective", "explanation": "Orange is the color of the sun in the evening." },
    { "type": "mc", "prompt": "Chocolate is ___.", "options": ["brown", "tall", "fast", "young"], "targetType": "adjective", "explanation": "Brown is the color of chocolate." },
    { "type": "mc", "prompt": "Anna has a ___ bag and a yellow shirt.", "options": ["purple", "quiet", "fast", "busy"], "targetType": "adjective", "explanation": "Purple is a color between red and blue, like some flowers." },
    { "type": "mc", "prompt": "An elephant is ___.", "options": ["gray", "quiet", "ready", "young"], "targetType": "adjective", "explanation": "Gray is the color of an elephant." },
    { "type": "mc", "prompt": "Mia wears a ___ and shoes to the restaurant.", "options": ["dress", "bed", "bus", "tree"], "targetType": "noun", "explanation": "A dress is something you wear on your body, with a skirt part. Mia wears one with shoes." },
    { "type": "mc", "prompt": "Tom wears ___ on his legs.", "options": ["pants", "hats", "beds", "buses"], "explanation": "Pants are clothes for your legs. Tom wears them on his legs." },
    { "type": "mc", "prompt": "Leo puts on his ___ and goes out.", "options": ["shoes", "beds", "buses", "trees"], "target": "shoe", "explanation": "A shoe is something you wear on your foot. Leo puts on his shoes before he goes out." }
  ],
  "A1|vocabulary|7|mc|hard": [
    { "type": "mc", "prompt": "Mia wears warm ___ on her feet in the snow.", "options": ["boots", "hats", "bags", "shirts"], "target": "boot", "explanation": "A boot is a strong shoe for rain or snow. Mia wears warm boots in the snow." },
    { "type": "mc", "prompt": "Many people wear blue ___ every day.", "options": ["jeans", "desks", "doors", "keys"], "explanation": "Jeans are strong pants, often blue." },
    { "type": "mc", "prompt": "Ben puts on a ___ because it is a little cold.", "options": ["jacket", "table", "pen", "wall"], "explanation": "A jacket is a short coat. Ben puts one on when it is a little cold." },
    { "type": "mc", "prompt": "In winter, Dad wears a long warm ___.", "options": ["coat", "desk", "key", "bed"], "explanation": "A coat is a long warm thing you wear in cold weather." },
    { "type": "mc", "prompt": "Anna wears a warm ___ in the fall, when the weather gets cold.", "options": ["sweater", "door", "window", "bus"], "explanation": "A sweater is a warm shirt for cold weather. Anna wears it in the fall." },
    { "type": "mc", "prompt": "Ali puts his books and his lunch in his ___.", "options": ["bag", "table", "wall", "bed"], "explanation": "A bag is something you carry things in. Ali puts his books in his bag." },
    { "type": "mc", "prompt": "Mia wears a ___ and a shirt. It goes around her body.", "options": ["skirt", "pen", "tree", "chair"], "explanation": "A skirt is something you wear around your body, below your shirt. It has no legs." },
    { "type": "mc", "prompt": "Leo takes his ___ to school because of the rain.", "options": ["umbrella", "table", "pen", "chair"], "explanation": "An umbrella is something you carry when it rains." }
  ],
  "A1|vocabulary|7|mc|veryhard": [
    { "type": "mc", "prompt": "Anna has a new ___ of shoes.", "options": ["pair", "glass", "cup", "bottle"], "explanation": "A pair is two things that go together. Shoes always come in a pair." },
    { "type": "mc", "prompt": "Red, blue and green are ___.", "options": ["colors", "pairs", "styles", "designs"], "target": "color", "explanation": "A color is red, blue, green and so on." },
    { "type": "mc", "prompt": "Shirts, pants and dresses are all ___.", "options": ["clothes", "colors", "shoes", "bags"], "explanation": "Clothes are what people wear. Shirts, pants and dresses are clothes." },
    { "type": "mc", "prompt": "It is cold. Tom likes to ___ a hat and boots.", "options": ["wear", "wash", "drive", "cook"], "explanation": "To wear is to have clothes on your body. Tom has a hat and boots on." },
    { "type": "mc", "prompt": "Mia makes a new ___ for her dress. It has red and blue flowers.", "options": ["design", "key", "desk", "door"], "targetType": "noun", "explanation": "A design is a plan or a picture of how something will look. Mia makes a plan for her dress." },
    { "type": "mc", "prompt": "The room has big windows and white walls. It is very ___.", "options": ["light", "fast", "young", "ready"], "targetType": "adjective", "explanation": "Light means not dark. A room with big windows and white walls is full of light." },
    { "type": "mc", "prompt": "At night, it is ___ outside. We cannot see well.", "options": ["dark", "ready", "young", "dirty"], "explanation": "Dark means with no light, or with very little light. At night we cannot see well." },
    { "type": "mc", "prompt": "Ben likes his new coat. It has a very nice ___.", "options": ["style", "pair", "glass", "cup"], "explanation": "Style is the way something looks. Ben thinks his new coat looks very nice." }
  ],
  "A1|vocabulary|7|fill|easy": [
    { "type": "fill", "before": "It is cold outside. Ali puts on his coat and his", "after": ".", "answer": "hat", "bank": ["hat", "bed", "door"], "explanation": "A hat is something you wear on your head. Ali wears one when it is cold." },
    { "type": "fill", "before": "Many plants and trees are", "after": ".", "answer": "green", "bank": ["green", "quiet", "ready"], "targetType": "adjective", "explanation": "Green is a color. Many plants and trees are green." },
    { "type": "fill", "before": "Mia has a", "after": "pen and a red pen.", "answer": "blue", "bank": ["blue", "fast", "young"], "targetType": "adjective", "explanation": "Blue is a color, like red. Mia has a blue pen and a red pen." },
    { "type": "fill", "before": "Anna puts a", "after": "tomato in her salad.", "answer": "red", "bank": ["red", "fast", "young"], "targetType": "adjective", "explanation": "Red is the color of a tomato. Anna puts a red one in her salad." },
    { "type": "fill", "before": "Tom writes his name with a", "after": "pen on white paper.", "answer": "black", "bank": ["black", "busy", "quiet"], "targetType": "adjective", "explanation": "Black is a color. The letters on white paper are often black." },
    { "type": "fill", "before": "Mia draws the sun with a", "after": "pencil.", "answer": "yellow", "bank": ["yellow", "fast", "busy"], "targetType": "adjective", "explanation": "Yellow is the color of the sun in a drawing." },
    { "type": "fill", "before": "Milk is", "after": ".", "answer": "white", "bank": ["white", "young", "quiet"], "targetType": "adjective", "explanation": "White is the color of milk and snow." },
    { "type": "fill", "before": "Ben wears a", "after": "on his body and pants on his legs.", "answer": "shirt", "bank": ["shirt", "hat", "bus"], "explanation": "A shirt is something you wear on your body. Ben wears pants on his legs." }
  ],
  "A1|vocabulary|7|fill|medium": [
    { "type": "fill", "before": "Tom wears a shirt and", "after": "to school.", "answer": "pants", "bank": ["pants", "desks", "doors"], "explanation": "Pants are clothes for your legs. Tom wears them with a shirt." },
    { "type": "fill", "before": "Mia has two hats. One is green, and one is", "after": ".", "answer": "orange", "bank": ["orange", "fast", "young"], "targetType": "adjective", "explanation": "Orange is a color between red and yellow. Mia's second hat is orange." },
    { "type": "fill", "before": "Many pigs are", "after": ".", "answer": "pink", "bank": ["pink", "tall", "ready"], "targetType": "adjective", "explanation": "Pink is the color of many pigs." },
    { "type": "fill", "before": "Many people have", "after": "hair or black hair.", "answer": "brown", "bank": ["brown", "fast", "busy"], "targetType": "adjective", "explanation": "Brown is a common color for hair." },
    { "type": "fill", "before": "Many flowers in the garden are red, yellow or", "after": ".", "answer": "purple", "bank": ["purple", "fast", "busy"], "targetType": "adjective", "explanation": "Purple is a color between red and blue. Some flowers are purple." },
    { "type": "fill", "before": "A mouse is", "after": ".", "answer": "gray", "bank": ["gray", "tall", "ready"], "targetType": "adjective", "explanation": "Gray is the color of many mice and of an elephant." },
    { "type": "fill", "before": "Mom helps the baby", "after": "every morning.", "answer": "dress", "bank": ["dress", "drive", "cook"], "targetType": "verb", "explanation": "To dress is to put clothes on yourself or on another person. Mom puts clothes on the baby." },
    { "type": "fill", "before": "My old", "after": "are too small. I need new ones for school.", "answer": "shoes", "bank": ["shoes", "desks", "doors"], "target": "shoe", "explanation": "A shoe is something you wear on your foot. The speaker needs new ones for school." }
  ],
  "A1|vocabulary|7|fill|hard": [
    { "type": "fill", "before": "Ali's father wears big", "after": "on the farm.", "answer": "boots", "bank": ["boots", "desks", "keys", "beds"], "target": "boot", "explanation": "A boot is a strong shoe for rain or snow. Ali's father wears big boots on the farm." },
    { "type": "fill", "before": "I need a new pair of", "after": ".", "answer": "jeans", "bank": ["jeans", "walls", "chairs", "beds"], "explanation": "Jeans are strong pants, often blue. The speaker needs a new pair." },
    { "type": "fill", "before": "Today is warm. You do not need a", "after": ".", "answer": "jacket", "bank": ["jacket", "desk", "window", "bus"], "explanation": "A jacket is a short coat. You wear it when it is cold, not when it is warm." },
    { "type": "fill", "before": "It is very cold. Ali's mother gives him a new warm", "after": "for his birthday.", "answer": "coat", "bank": ["coat", "pen", "wall", "tree"], "explanation": "A coat is a long warm thing you wear in cold weather. Ali gets a new one for his birthday." },
    { "type": "fill", "before": "Anna's grandmother makes a warm", "after": "for her.", "answer": "sweater", "bank": ["sweater", "door", "key", "chair"], "explanation": "A sweater is a warm shirt for cold weather. Her grandmother makes one for her." },
    { "type": "fill", "before": "Mom puts the apples and the bread in a", "after": ".", "answer": "bag", "bank": ["bag", "desk", "window", "bed"], "explanation": "A bag is something you carry things in. Mom puts the food in a bag." },
    { "type": "fill", "before": "Leo wears a", "after": "because it is very hot.", "answer": "T-shirt", "bank": ["T-shirt", "pen", "bus", "tree"], "explanation": "A T-shirt is a shirt with short arms, for hot weather. Leo wears one when it is hot." },
    { "type": "fill", "before": "Rain is falling. Ben opens his", "after": ".", "answer": "umbrella", "bank": ["umbrella", "desk", "wall", "key"], "explanation": "An umbrella is something you carry when it rains. Ben opens it." }
  ],
  "A1|vocabulary|7|fill|veryhard": [
    { "type": "fill", "before": "Ben buys a", "after": "of jeans.", "answer": "pair", "bank": ["pair", "desk", "door", "key"], "explanation": "A pair is two things that go together. Jeans have two legs, so we say a pair of jeans." },
    { "type": "fill", "before": "What", "after": "is your hat? It is red.", "answer": "color", "bank": ["color", "wall", "chair", "bed"], "explanation": "A color is red, blue, green and so on. The question asks about the color of the hat." },
    { "type": "fill", "before": "Tom puts his", "after": "in the bag: pants, a shirt and a jacket.", "answer": "clothes", "bank": ["clothes", "desks", "doors", "keys"], "explanation": "Clothes are what people wear. Pants, a shirt and a jacket are clothes." },
    { "type": "fill", "before": "It is cold, so Anna wants to", "after": "her warm coat.", "answer": "wear", "bank": ["wear", "wash", "drive", "cook"], "explanation": "To wear is to have clothes on your body. Anna wants to have her warm coat on." },
    { "type": "fill", "before": "Ken likes to draw. He wants to", "after": "a new hat for school.", "answer": "design", "bank": ["design", "drive", "cook", "wake"], "targetType": "verb", "explanation": "To design is to plan how something will look. Ken draws a plan for a new hat." },
    { "type": "fill", "before": "Mia has two blue coats. One is dark, and one is", "after": ".", "answer": "light", "bank": ["light", "fast", "young", "quiet"], "targetType": "adjective", "explanation": "Light means not dark. Mia has a dark blue coat and a light blue coat." },
    { "type": "fill", "before": "Tom needs a", "after": "bag for his books.", "answer": "large", "bank": ["large", "ready", "young", "busy"], "explanation": "Large means big. Tom needs a big bag for his books." },
    { "type": "fill", "before": "These shoes have a different", "after": "from my old ones.", "answer": "style", "bank": ["style", "pen", "bus", "tree"], "explanation": "Style is the way something looks. These shoes look different from the old ones." }
  ],
  "A1|vocabulary|7|tf|easy": [
    { "type": "tf", "prompt": "You wear a hat on your head.", "answer": true, "target": "hat", "explanation": "Yes. A hat is something you wear on your head." },
    { "type": "tf", "prompt": "A shirt and a hat are both things that you wear.", "answer": true, "target": "shirt", "explanation": "Yes. You wear a shirt on your body and a hat on your head." },
    { "type": "tf", "prompt": "A banana is blue.", "answer": false, "target": "blue", "targetType": "adjective", "explanation": "No. A banana is yellow when it is ready to eat. The ocean is blue." },
    { "type": "tf", "prompt": "Milk is green.", "answer": false, "target": "green", "targetType": "adjective", "explanation": "No. Milk is white. Many plants and trees are green." },
    { "type": "tf", "prompt": "Butter is yellow.", "answer": true, "target": "yellow", "targetType": "adjective", "explanation": "Yes. Butter is a yellow food." },
    { "type": "tf", "prompt": "Snow is red.", "answer": false, "target": "red", "targetType": "adjective", "explanation": "No. Snow is white. A tomato is red." },
    { "type": "tf", "prompt": "A black shirt is dark.", "answer": true, "target": "black", "targetType": "adjective", "explanation": "Yes. Black is a very dark color." },
    { "type": "tf", "prompt": "White and black are the same color.", "answer": false, "target": "white", "targetType": "noun", "explanation": "No. White is the color of snow, and black is the color of the letters in a book." }
  ],
  "A1|vocabulary|7|tf|medium": [
    { "type": "tf", "prompt": "Orange is the color of the fruit with the same name.", "answer": true, "target": "orange", "targetType": "noun", "explanation": "Yes. An orange is a fruit, and its color has the same name." },
    { "type": "tf", "prompt": "Coffee with milk is brown.", "answer": true, "target": "brown", "targetType": "adjective", "explanation": "Yes. Coffee with milk is brown." },
    { "type": "tf", "prompt": "You wear pants on your head.", "answer": false, "target": "pants", "explanation": "No. You wear pants on your legs. You wear a hat on your head." },
    { "type": "tf", "prompt": "Pink is the color of a banana.", "answer": false, "target": "pink", "targetType": "noun", "explanation": "No. A banana is yellow. Pink is the color of a pig." },
    { "type": "tf", "prompt": "Gray is a color, like black and white.", "answer": true, "target": "gray", "targetType": "noun", "explanation": "Yes. Gray is a color between black and white." },
    { "type": "tf", "prompt": "You wear a shoe on your hand.", "answer": false, "target": "shoe", "explanation": "No. You wear a shoe on your foot." },
    { "type": "tf", "prompt": "A dress is one thing you wear, with a skirt part.", "answer": true, "target": "dress", "targetType": "noun", "explanation": "Yes. A dress is one thing you wear on your body, and it has a skirt part." },
    { "type": "tf", "prompt": "Purple and white are the same color.", "answer": false, "target": "purple", "targetType": "noun", "explanation": "No. Purple is a color between red and blue. Snow is white." }
  ],
  "A1|vocabulary|7|tf|hard": [
    { "type": "tf", "prompt": "A boot is a kind of shoe.", "answer": true, "target": "boot", "explanation": "Yes. A boot is a strong shoe for rain or snow." },
    { "type": "tf", "prompt": "A jacket is warmer than a T-shirt.", "answer": true, "target": "jacket", "explanation": "Yes. You wear a jacket outside when it is a little cold." },
    { "type": "tf", "prompt": "You wear jeans on your head.", "answer": false, "target": "jeans", "explanation": "No. You wear jeans on your legs." },
    { "type": "tf", "prompt": "You wear a coat in the summer when it is very hot.", "answer": false, "target": "coat", "explanation": "No. You wear a coat when it is cold." },
    { "type": "tf", "prompt": "People wear a sweater when it is cold.", "answer": true, "target": "sweater", "explanation": "Yes. A sweater is a warm shirt." },
    { "type": "tf", "prompt": "A skirt has two legs.", "answer": false, "target": "skirt", "explanation": "No. A skirt has no legs. Pants have two legs." },
    { "type": "tf", "prompt": "You carry an umbrella when it rains.", "answer": true, "target": "umbrella", "explanation": "Yes. An umbrella is something you carry when it rains." },
    { "type": "tf", "prompt": "A T-shirt is a warm winter coat.", "answer": false, "target": "T-shirt", "explanation": "No. A T-shirt is a shirt with short arms, for hot weather." }
  ],
  "A1|vocabulary|7|tf|veryhard": [
    { "type": "tf", "prompt": "A pair of shoes is two shoes.", "answer": true, "target": "pair", "explanation": "Yes. A pair is two things that go together." },
    { "type": "tf", "prompt": "When you wear a hat, it is on your head.", "answer": true, "target": "wear", "explanation": "Yes. To wear is to have clothes on your body." },
    { "type": "tf", "prompt": "A color is something you eat.", "answer": false, "target": "color", "explanation": "No. A color is red, blue, green and so on." },
    { "type": "tf", "prompt": "Clothes are what people eat.", "answer": false, "target": "clothes", "explanation": "No. Clothes are what people wear." },
    { "type": "tf", "prompt": "A room with no light is dark.", "answer": true, "target": "dark", "explanation": "Yes. Dark means with no light, or with very little light." },
    { "type": "tf", "prompt": "A design is a kind of shoe.", "answer": false, "target": "design", "targetType": "noun", "explanation": "No. A design is a plan or a picture of how something will look." },
    { "type": "tf", "prompt": "Style is the way something looks.", "answer": true, "target": "style", "explanation": "Yes. A style is the way something looks." },
    { "type": "tf", "prompt": "A large bag is a small bag.", "answer": false, "target": "large", "explanation": "No. Large means big. A small bag is not large." }
  ],
  "A1|vocabulary|7|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "hat", "right": "you can put it on before you go out in the sun or in the snow" },
      { "left": "green", "right": "the color between yellow and blue", "type": "noun" },
      { "left": "blue", "right": "the color of many jeans", "type": "noun" },
      { "left": "red", "right": "the color of the light that means stop", "type": "noun" }
    ], "explanation": "You put on a hat before you go out. Green is between yellow and blue. Many jeans are blue, and the light that means stop is red." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "black", "right": "the color of very dark hair", "type": "noun" },
      { "left": "yellow", "right": "the color between orange and green", "type": "noun" },
      { "left": "white", "right": "the color of paper", "type": "noun" },
      { "left": "shirt", "right": "you wear it on your body, and it has arms" }
    ], "explanation": "Very dark hair is black, and yellow is between orange and green. Paper is white. You wear a shirt on your body." }
  ],
  "A1|vocabulary|7|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "pants", "right": "clothes with two legs" },
      { "left": "orange", "right": "the color of a carrot", "type": "noun" },
      { "left": "pink", "right": "a light red color", "type": "noun" },
      { "left": "brown", "right": "the color of a potato", "type": "noun" }
    ], "explanation": "Pants have two legs. A carrot is orange, and pink is a light red. A potato is brown." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "purple", "right": "a color between red and blue", "type": "noun" },
      { "left": "gray", "right": "the color between black and white", "type": "noun" },
      { "left": "dress", "right": "to put your clothes on in the morning", "type": "verb" },
      { "left": "shoe", "right": "you wear it on your foot, and you often wear two" }
    ], "explanation": "Purple is between red and blue, and gray is between black and white. To dress is to put clothes on. You wear a shoe on your foot." }
  ],
  "A1|vocabulary|7|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "boot", "right": "you wear it in the snow or in the rain on your feet" },
      { "left": "jeans", "right": "pants that are often blue, with two legs" },
      { "left": "jacket", "right": "a short coat" },
      { "left": "sweater", "right": "something warm with long arms that you put on over your head" }
    ], "explanation": "You wear boots in the snow. Jeans are often blue pants, and a jacket is a short coat. A sweater is warm, with long arms." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "coat", "right": "you wear it over your clothes in winter, and it is long" },
      { "left": "bag", "right": "you can carry it on your back or in your hand" },
      { "left": "skirt", "right": "you can wear it with a shirt, and it has no legs" },
      { "left": "T-shirt", "right": "you wear it in summer, and it is often white" }
    ], "explanation": "A coat is long and warm. You carry a bag on your back or in your hand. A skirt has no legs, and a T-shirt is for summer." }
  ],
  "A1|vocabulary|7|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "pair", "right": "two shoes or two boots together" },
      { "left": "color", "right": "what is different between a red hat and a blue hat" },
      { "left": "clothes", "right": "things like shirts and pants that you put on your body" },
      { "left": "light", "right": "a color with a lot of white in it", "type": "adjective" }
    ], "explanation": "A pair is two shoes together. Red and blue are colors. Shirts and pants are clothes, and a light color has a lot of white in it." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "wear", "right": "to have a hat or a coat on your body" },
      { "left": "design", "right": "to make a plan or a drawing of how a new dress will look", "type": "verb" },
      { "left": "dark", "right": "what a room is at night when there are no lights" },
      { "left": "large", "right": "not small" }
    ], "explanation": "To wear is to have clothes on. To design is to plan how something will look. A room with no lights is dark, and large means not small." }
  ]
});
