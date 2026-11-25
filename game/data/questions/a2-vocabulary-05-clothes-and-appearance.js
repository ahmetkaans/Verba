/* Questions: A2 Vocabulary, theme 5 Clothes and Appearance (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|5|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|5|mc|easy": [
    {"type": "mc", "prompt": "Do you put a warm ___ on each foot before you put on your shoes?", "options": ["sock", "clothing", "pants", "jewelry"], "explanation": "A sock is something soft that you wear on your foot inside a shoe."},
    {"type": "mc", "prompt": "I love my new sweater because it is so ___ on my arms.", "options": ["soft", "formal", "open", "silver"], "targetType": "adjective", "explanation": "Soft means nice to touch, not hard. A soft sweater feels good."},
    {"type": "mc", "prompt": "Dad's pants keep falling down, so he puts on a ___.", "options": ["belt", "brush", "height", "watch"], "explanation": "A belt goes around your middle and keeps your pants up."},
    {"type": "mc", "prompt": "The ring costs a lot because it has real ___ in it.", "options": ["gold", "suit", "brush", "paper"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. Real gold makes a ring expensive."},
    {"type": "mc", "prompt": "I put my phone and my keys in my pants ___.", "options": ["pocket", "fashion", "gold", "shirt"], "explanation": "A pocket is a small bag in your clothes. You can keep a phone or keys in it."},
    {"type": "mc", "prompt": "Can you help me with this bag? It is too ___ for me, and it is full of books.", "options": ["heavy", "good", "comfortable", "thin"], "targetType": "adjective", "explanation": "Heavy means hard to carry. A bag full of books is heavy."},
    {"type": "mc", "prompt": "The top ___ on my coat came off, so it will not close.", "options": ["button", "belt", "jewelry", "uniform"], "explanation": "A button is a small round thing that closes a coat. Without it the coat stays open."},
    {"type": "mc", "prompt": "The winner gets a gold cup, and the second runner gets a ___ cup.", "options": ["silver", "wooden", "married", "busy"], "targetType": "adjective", "explanation": "Silver is a gray metal. Gold is for the first place, and silver is for the second."}
  ],
  "A2|vocabulary|5|mc|medium": [
    {"type": "mc", "prompt": "The shirt is too small. Do you have it in a bigger ___?", "options": ["size", "plan", "appearance", "clothing"], "explanation": "Size tells you how big or small a thing is. Shirts come in small and large sizes."},
    {"type": "mc", "prompt": "This jacket is ___, so it is easy to carry in my bag.", "options": ["light", "open", "full", "bright"], "targetType": "adjective", "explanation": "Light means not heavy. A light jacket is easy to carry."},
    {"type": "mc", "prompt": "Do you wear a ___ around your neck, over your shirt, for work?", "options": ["tie", "button", "sneaker", "uniform"], "targetType": "noun", "explanation": "A tie is a long, thin band. Men wear it around the neck with a shirt."},
    {"type": "mc", "prompt": "I can almost see through this paper because it is very ___.", "options": ["thin", "open", "light", "curly"], "explanation": "Thin means small from one side to the other. Thin paper lets the light through."},
    {"type": "mc", "prompt": "At our school, every student wears the same blue shirt and pants. It is our ___.", "options": ["uniform", "belt", "button", "coat"], "explanation": "A uniform is the same clothes for all people in a school or a job."},
    {"type": "mc", "prompt": "The road is too ___ to cross quickly.", "options": ["wide", "comfortable", "attractive", "good"], "explanation": "Wide means big from one side to the other. A wide road takes a long time to cross."},
    {"type": "mc", "prompt": "My father wears a dark ___ to important meetings.", "options": ["suit", "pocket", "sock", "dress"], "explanation": "A suit is a jacket and pants that go together. Many men wear one at work."},
    {"type": "mc", "prompt": "These shoes are too small and do not ___ me.", "options": ["fit", "brush", "pick", "light"], "targetType": "verb", "explanation": "To fit is to be the right size. These shoes are too small, so they do not fit."}
  ],
  "A2|vocabulary|5|mc|hard": [
    {"type": "mc", "prompt": "Don't buy that book! It is very ___, and it has 800 pages.", "options": ["thick", "comfortable", "plastic", "open"], "explanation": "Thick means big from one side to the other. A book with 800 pages is thick."},
    {"type": "mc", "prompt": "I like your new ___ with the short hair and the dark jacket.", "options": ["look", "pattern", "designer", "height"], "targetType": "noun", "explanation": "A look is the way that a person looks. Here it is the hair and the jacket together."},
    {"type": "mc", "prompt": "My new sneakers are soft inside, so they are very ___.", "options": ["comfortable", "wooden", "thick", "hard"], "explanation": "Comfortable means nice to wear. Soft shoes are comfortable for walking."},
    {"type": "mc", "prompt": "The shirt has a blue and white ___ of small squares.", "options": ["pattern", "hobby", "fashion", "weight"], "explanation": "A pattern is lines, shapes or colors that come back again and again. Squares make a pattern."},
    {"type": "mc", "prompt": "Anna's hair is not straight. It is ___.", "options": ["curly", "light", "wide", "informal"], "explanation": "Curly means with many small circles, not straight."},
    {"type": "mc", "prompt": "My bag is twenty pounds. That is the ___ of my bag.", "options": ["weight", "age", "look", "routine"], "explanation": "Weight tells you how heavy something is. Twenty pounds is the weight of the bag."},
    {"type": "mc", "prompt": "The shop gives free ___ bags, but they are bad for the environment.", "options": ["plastic", "soft", "wooden", "thick"], "targetType": "adjective", "explanation": "Plastic is a light, cheap material. Many shop bags use it."},
    {"type": "mc", "prompt": "Can you tell me the ___ of the tower? It is 100 meters.", "options": ["height", "age", "appearance", "plan"], "explanation": "Height is how tall or how high something is. This tower is 100 meters high."}
  ],
  "A2|vocabulary|5|mc|veryhard": [
    {"type": "mc", "prompt": "Young people like to follow the latest ___ and wear what is new.", "options": ["fashion", "picture", "design", "height"], "explanation": "Fashion is the clothes and styles that many people like at one time."},
    {"type": "mc", "prompt": "We must wear ___ clothes for the interview because jeans are not allowed.", "options": ["formal", "attractive", "bright", "silver"], "explanation": "Formal means right for an important time. Jeans are not formal, so they are not allowed."},
    {"type": "mc", "prompt": "She wears a gold ring and a gold watch, and other expensive ___.", "options": ["jewelry", "tie", "belt", "clothing"], "explanation": "Jewelry is nice things like rings that people wear to look nice."},
    {"type": "mc", "prompt": "The hotel has a very ___ garden, so many tourists take photos there.", "options": ["attractive", "informal", "heavy", "wooden"], "explanation": "Attractive means nice to look at. Tourists take photos of nice gardens."},
    {"type": "mc", "prompt": "This store sells shirts, pants and coats, so it is a ___ store.", "options": ["clothing", "sock", "tie", "sneaker"], "explanation": "Clothing is the things that people wear. A clothing store sells shirts, pants and coats."},
    {"type": "mc", "prompt": "A famous ___ drew this jacket and many other clothes.", "options": ["designer", "fashion", "pattern", "weight"], "explanation": "A designer is a person who draws ideas for new things, for example clothes."},
    {"type": "mc", "prompt": "Can I wear jeans to the party? Yes, it is very ___.", "options": ["informal", "curly", "attractive", "wide"], "explanation": "Informal means relaxed and not serious. Jeans are fine for an informal party."},
    {"type": "mc", "prompt": "In an interview, your ___ is important, so wear clean clothes and smile.", "options": ["appearance", "picture", "color", "number"], "explanation": "Appearance is the way a person looks to others. Clean clothes help it."}
  ],
  "A2|vocabulary|5|fill|easy": [
    {"type": "fill", "before": "Do you like this new towel? It is very", "after": "and feels nice on my face.", "answer": "soft", "bank": ["soft", "formal", "wide"], "targetType": "adjective", "explanation": "Soft means nice to touch, not hard. A soft towel feels good on the face."},
    {"type": "fill", "before": "My brother bought a new black", "after": "to wear with his jeans.", "answer": "belt", "bank": ["belt", "look", "clothing"], "explanation": "A belt goes around your middle and holds your pants. It goes well with jeans."},
    {"type": "fill", "before": "A small piece of", "after": "costs more than a big piece of plastic.", "answer": "gold", "bank": ["gold", "suit", "plastic"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. Even a small piece is expensive."},
    {"type": "fill", "before": "Put your hands in your coat", "after": "if they are cold.", "answer": "pocket", "bank": ["pocket", "button", "suit"], "explanation": "A pocket is a small bag in your clothes. You can warm your hands in it."},
    {"type": "fill", "before": "The table is too", "after": "for one person to carry.", "answer": "heavy", "bank": ["heavy", "informal", "soft"], "targetType": "adjective", "explanation": "Heavy means hard to carry. One person cannot carry it alone."},
    {"type": "fill", "before": "The last", "after": "on my shirt is missing.", "answer": "button", "bank": ["button", "sneaker", "uniform"], "explanation": "A button is a small round thing that closes a shirt. One of them is gone."},
    {"type": "fill", "before": "My grandmother has a", "after": "watch that she got on her wedding day.", "answer": "silver", "bank": ["silver", "married", "fit"], "targetType": "adjective", "explanation": "Silver is a gray metal that costs a lot. Here it describes the watch."},
    {"type": "fill", "before": "I lost one", "after": "on the way home, so I walk with one shoe.", "answer": "sneaker", "bank": ["sneaker", "pocket", "uniform"], "explanation": "A sneaker is a soft shoe for sport or every day. Losing one means you have only one shoe."}
  ],
  "A2|vocabulary|5|fill|medium": [
    {"type": "fill", "before": "My bag is very", "after": "because there is only a book inside.", "answer": "light", "bank": ["light", "wide", "thick"], "targetType": "adjective", "explanation": "Light means not heavy. A bag with only a book is easy to carry."},
    {"type": "fill", "before": "Dad has a new blue", "after": "for his job interview. It goes around his neck.", "answer": "tie", "bank": ["tie", "jewelry", "suit"], "targetType": "noun", "explanation": "A tie is a long, thin band that goes around the neck with a shirt."},
    {"type": "fill", "before": "The ice on the lake is very", "after": ", so do not walk on it.", "answer": "thin", "bank": ["thin", "silver", "heavy"], "explanation": "Thin means small from one side to the other. Thin ice is not safe."},
    {"type": "fill", "before": "Nurses wear a white", "after": "at work.", "answer": "uniform", "bank": ["uniform", "jewelry", "pocket"], "explanation": "A uniform is the same clothes for all people in a job. Nurses often wear white."},
    {"type": "fill", "before": "The door is", "after": "enough for a big table to go through.", "answer": "wide", "bank": ["wide", "heavy", "comfortable"], "explanation": "Wide means big from one side to the other. A wide door lets a big table through."},
    {"type": "fill", "before": "Tom's new", "after": "has a jacket and pants of the same color.", "answer": "suit", "bank": ["suit", "tie", "sock"], "explanation": "A suit is a jacket and pants that go together. Both parts have the same color."},
    {"type": "fill", "before": "The room has big windows, so it is very", "after": "in the morning.", "answer": "bright", "bank": ["bright", "formal", "thin"], "targetType": "adjective", "explanation": "Bright means with a lot of light. Big windows bring the morning light in."},
    {"type": "fill", "before": "Try the red dress. I think it will", "after": "you well.", "answer": "fit", "bank": ["fit", "hold", "brush"], "targetType": "verb", "explanation": "To fit is to be the right size and shape for a person. You try the dress to see if it fits."}
  ],
  "A2|vocabulary|5|fill|hard": [
    {"type": "fill", "before": "That new short hair gives you a young", "after": ".", "answer": "look", "bank": ["look", "rule", "designer", "size"], "targetType": "noun", "explanation": "A look is the way that a person seems to others. New short hair can change it."},
    {"type": "fill", "before": "This bed is soft and warm, so it is very", "after": ".", "answer": "comfortable", "bank": ["comfortable", "plastic", "light", "clean"], "explanation": "Comfortable means nice to lie or sit on. A soft, warm bed is comfortable."},
    {"type": "fill", "before": "My jacket has a", "after": "of red and white lines.", "answer": "pattern", "bank": ["pattern", "routine", "look", "size"], "explanation": "A pattern is lines, shapes or colors that come back again and again."},
    {"type": "fill", "before": "The line on the paper goes round and round, so it is", "after": ".", "answer": "curly", "bank": ["curly", "heavy", "thin", "informal"], "explanation": "Curly means with many small circles, not straight."},
    {"type": "fill", "before": "Before the flight, we check the", "after": "of every bag.", "answer": "weight", "bank": ["weight", "age", "appearance", "list"], "explanation": "Weight tells you how heavy something is. Airlines check it before the flight."},
    {"type": "fill", "before": "The toy is cheap because it is", "after": ".", "answer": "plastic", "bank": ["plastic", "gold", "soft", "thick"], "targetType": "adjective", "explanation": "Plastic is a cheap, light material. Toys made of it do not cost much."},
    {"type": "fill", "before": "Can you check the", "after": "of this door? It is two meters.", "answer": "height", "bank": ["height", "age", "fashion", "rule"], "explanation": "Height is how tall or how high something is. This door is two meters high."},
    {"type": "fill", "before": "These chairs in the garden are", "after": ", so they come from trees.", "answer": "wooden", "bank": ["wooden", "gold", "new", "plastic"], "explanation": "Wooden means made of wood. A chair from a tree is wooden."}
  ],
  "A2|vocabulary|5|fill|veryhard": [
    {"type": "fill", "before": "A", "after": "letter to a boss uses polite words and no jokes.", "answer": "formal", "bank": ["formal", "curly", "bright", "silver"], "explanation": "Formal means right for an important or serious time. A letter to a boss is formal."},
    {"type": "fill", "before": "Anna loves", "after": ", so she has many rings and watches.", "answer": "jewelry", "bank": ["jewelry", "tie", "belt", "pocket"], "explanation": "Jewelry is nice things like rings that people wear to look nice."},
    {"type": "fill", "before": "I think the new library is very", "after": "because it has big windows and flowers.", "answer": "attractive", "bank": ["attractive", "formal", "curly", "soft"], "explanation": "Attractive means nice to look at. Big windows and flowers make a building nice to see."},
    {"type": "fill", "before": "Does the store sell men's", "after": "? Yes, it has shirts, pants and jackets.", "answer": "clothing", "bank": ["clothing", "sock", "sneaker", "button"], "explanation": "Clothing is the things that people wear. This store sells shirts, pants and jackets."},
    {"type": "fill", "before": "My aunt is a", "after": "and she draws new dresses and shoes.", "answer": "designer", "bank": ["designer", "pattern", "look", "size"], "explanation": "A designer draws ideas for new things. My aunt draws dresses and shoes."},
    {"type": "fill", "before": "The dress rules at the beach party are very", "after": ", so shorts and T-shirts are fine.", "answer": "informal", "bank": ["informal", "bright", "attractive", "thin"], "explanation": "Informal means relaxed and not serious. Shorts and T-shirts are fine at a beach party."},
    {"type": "fill", "before": "Nobody likes the", "after": "of that old building, but it is strong.", "answer": "appearance", "bank": ["appearance", "designer", "pattern", "height"], "explanation": "Appearance is the way a thing looks to others. The building looks bad but is strong."},
    {"type": "fill", "before": "Please", "after": "your coat before the meeting because it is dirty.", "answer": "brush", "bank": ["brush", "fit", "pick", "wear"], "targetType": "verb", "explanation": "To brush a coat is to clean it with a special tool. A dirty coat needs it before a meeting."}
  ],
  "A2|vocabulary|5|tf|easy": [
    {"type": "tf", "prompt": "You wear a sock on your foot, inside a shoe.", "answer": true, "target": "sock", "explanation": "True. A sock is something soft that you wear on your foot inside a shoe."},
    {"type": "tf", "prompt": "A big stone is soft.", "answer": false, "target": "soft", "targetType": "adjective", "explanation": "False. A stone is hard. Soft means nice to touch, not hard."},
    {"type": "tf", "prompt": "A belt can keep your pants up.", "answer": true, "target": "belt", "explanation": "True. A belt goes around your middle and holds your pants."},
    {"type": "tf", "prompt": "A gold ring costs very little money.", "answer": false, "target": "gold", "targetType": "noun", "explanation": "False. Gold is a yellow metal that costs a lot, so a gold ring is expensive."},
    {"type": "tf", "prompt": "A big box of books is heavy.", "answer": true, "target": "heavy", "targetType": "adjective", "explanation": "True. Heavy means hard to carry, and books are heavy together."},
    {"type": "tf", "prompt": "Most people put a button on each foot before they put on their shoes.", "answer": false, "target": "button", "explanation": "False. A button is a small round thing that closes a coat or a shirt. It does not go on a foot."},
    {"type": "tf", "prompt": "A silver ring has a gray color.", "answer": true, "target": "silver", "targetType": "adjective", "explanation": "True. Silver is a gray metal, so a silver ring is gray."},
    {"type": "tf", "prompt": "People wear sneakers on their heads when it rains.", "answer": false, "target": "sneaker", "explanation": "False. A sneaker is a soft shoe, so people wear it on their feet."}
  ],
  "A2|vocabulary|5|tf|medium": [
    {"type": "tf", "prompt": "Shoes come in different sizes, so you must find your size.", "answer": true, "target": "size", "explanation": "True. Size tells you how big or small a thing is. Shoes have numbers for it."},
    {"type": "tf", "prompt": "A big metal table is light and easy to carry.", "answer": false, "target": "light", "targetType": "adjective", "explanation": "False. Light means not heavy. A big metal table is heavy."},
    {"type": "tf", "prompt": "A man can wear a tie with a shirt for work.", "answer": true, "target": "tie", "targetType": "noun", "explanation": "True. A tie is a long, thin band that goes around the neck with a shirt."},
    {"type": "tf", "prompt": "A thin book has a thousand pages.", "answer": false, "target": "thin", "explanation": "False. Thin means small from one side to the other. A book with a thousand pages is thick."},
    {"type": "tf", "prompt": "Many nurses and police officers wear a uniform at work.", "answer": true, "target": "uniform", "explanation": "True. A uniform is the same clothes for all people in a job."},
    {"type": "tf", "prompt": "A suit is a jacket and a hat that go together.", "answer": false, "target": "suit", "explanation": "False. A suit is a jacket and pants that go together, not a jacket and a hat."},
    {"type": "tf", "prompt": "A bright color is easy to see from far away.", "answer": true, "target": "bright", "targetType": "adjective", "explanation": "True. Bright means with a strong color or a lot of light. You can see it easily."},
    {"type": "tf", "prompt": "A shoe fits you well when it is two sizes too small.", "answer": false, "target": "fit", "targetType": "verb", "explanation": "False. A shoe fits when it is the right size. Two sizes too small is not right."}
  ],
  "A2|vocabulary|5|tf|hard": [
    {"type": "tf", "prompt": "A thick book has many pages.", "answer": true, "target": "thick", "explanation": "True. Thick means big from one side to the other. A book with many pages is thick."},
    {"type": "tf", "prompt": "Your look is the number of your shoes.", "answer": false, "target": "look", "targetType": "noun", "explanation": "False. A look is the way that a person seems to others. The number of your shoes is your size."},
    {"type": "tf", "prompt": "Soft shoes are usually comfortable for a long walk.", "answer": true, "target": "comfortable", "explanation": "True. Comfortable means nice to wear. Soft shoes are good for a long walk."},
    {"type": "tf", "prompt": "A pattern is a place where you buy clothes.", "answer": false, "target": "pattern", "explanation": "False. A pattern is lines or shapes that come back again and again. A place for clothes is a store."},
    {"type": "tf", "prompt": "A heavy bag has a high weight.", "answer": true, "target": "weight", "explanation": "True. Weight tells you how heavy something is. A heavy bag has a high weight."},
    {"type": "tf", "prompt": "A plastic bag is heavy and costs a lot.", "answer": false, "target": "plastic", "targetType": "adjective", "explanation": "False. Plastic is a light, cheap material. A plastic bag does not cost much."},
    {"type": "tf", "prompt": "A tall tower has a big height.", "answer": true, "target": "height", "explanation": "True. Height is how tall or how high something is. A tall tower is high."},
    {"type": "tf", "prompt": "Wooden things come from metal.", "answer": false, "target": "wooden", "explanation": "False. Wooden means made of wood, and wood comes from trees."}
  ],
  "A2|vocabulary|5|tf|veryhard": [
    {"type": "tf", "prompt": "Fashion changes: people like different clothes every year.", "answer": true, "target": "fashion", "explanation": "True. Fashion is the clothes that many people like at one time, and it changes."},
    {"type": "tf", "prompt": "People usually wear formal clothes to a party at the beach.", "answer": false, "target": "formal", "explanation": "False. Formal clothes are for important times. At a beach party people wear informal clothes."},
    {"type": "tf", "prompt": "A gold ring is jewelry.", "answer": true, "target": "jewelry", "explanation": "True. Jewelry is nice things like rings that people wear to look nice."},
    {"type": "tf", "prompt": "A dirty, broken window is attractive.", "answer": false, "target": "attractive", "explanation": "False. Attractive means nice to look at. A dirty, broken window is not nice to look at."},
    {"type": "tf", "prompt": "A designer can draw ideas for new clothes.", "answer": true, "target": "designer", "explanation": "True. A designer draws ideas for new things, for example clothes."},
    {"type": "tf", "prompt": "A job interview is usually an informal meeting.", "answer": false, "target": "informal", "explanation": "False. An interview is serious. Informal means relaxed and not serious."},
    {"type": "tf", "prompt": "Clean clothes can improve your appearance.", "answer": true, "target": "appearance", "explanation": "True. Appearance is the way you look to others. Clean clothes help it."},
    {"type": "tf", "prompt": "To brush a coat is to cut it into small pieces.", "answer": false, "target": "brush", "targetType": "verb", "explanation": "False. To brush a coat is to clean it with a special tool."}
  ],
  "A2|vocabulary|5|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "sock", "right": "you wear it on your foot inside a shoe"},
      {"left": "soft", "right": "nice to touch, not hard", "type": "adjective"},
      {"left": "gold", "right": "a yellow metal that costs a lot", "type": "noun"},
      {"left": "button", "right": "a small round thing that closes a coat"}
    ], "explanation": "A sock goes inside a shoe. Soft means nice to touch, gold is a yellow metal, and a button closes a coat." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "pocket", "right": "a small bag in your pants where you keep your keys"},
      {"left": "heavy", "right": "hard to carry because it has a lot of weight", "type": "adjective"},
      {"left": "silver", "right": "with the gray color of an expensive metal", "type": "adjective"},
      {"left": "sneaker", "right": "a soft shoe that you wear for sport"}
    ], "explanation": "A pocket holds keys. Heavy means hard to carry, silver is gray, and a sneaker is a shoe for sport." }
  ],
  "A2|vocabulary|5|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "size", "right": "how big or small a thing is, like the number of shoes"},
      {"left": "light", "right": "not heavy, easy to carry", "type": "adjective"},
      {"left": "uniform", "right": "the same clothes that the people in a school or a job wear"},
      {"left": "wide", "right": "big from one side to the other, not narrow", "type": "adjective"}
    ], "explanation": "Size tells how big a thing is. Light means not heavy, a uniform is the same clothes for everybody, and wide is not narrow." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "thin", "right": "small from one side to the other, not thick", "type": "adjective"},
      {"left": "suit", "right": "a jacket and pants that go together"},
      {"left": "bright", "right": "with a lot of light or a strong color", "type": "adjective"},
      {"left": "fit", "right": "to be the right size for you", "type": "verb"}
    ], "explanation": "Thin is the opposite of thick. A suit is a jacket and pants, bright means a lot of light, and to fit is to be the right size." }
  ],
  "A2|vocabulary|5|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "thick", "right": "big from one side to the other, like a book with many pages", "type": "adjective"},
      {"left": "look", "right": "the way a person seems, for example in new clothes", "type": "noun"},
      {"left": "weight", "right": "how heavy something is"},
      {"left": "wooden", "right": "made of wood", "type": "adjective"}
    ], "explanation": "A thick book is big from side to side. A look is the way a person seems, weight is how heavy a thing is, and wooden means made of wood." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "comfortable", "right": "nice to wear or to sit on", "type": "adjective"},
      {"left": "pattern", "right": "lines or shapes that come back again and again"},
      {"left": "curly", "right": "with many small circles, not straight", "type": "adjective"},
      {"left": "height", "right": "how tall or how high something is"}
    ], "explanation": "Comfortable means nice to wear. A pattern comes back again and again, curly is not straight, and height is how tall something is." }
  ],
  "A2|vocabulary|5|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "fashion", "right": "the styles that many people like at one time"},
      {"left": "formal", "right": "right for an important time, like a job interview", "type": "adjective"},
      {"left": "clothing", "right": "the things that people wear"},
      {"left": "brush", "right": "to clean a coat or hair with a special tool", "type": "verb"}
    ], "explanation": "Fashion is the clothes people like now. Formal is for important times, clothing is what people wear, and to brush is to clean with a tool." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "attractive", "right": "nice to look at", "type": "adjective"},
      {"left": "designer", "right": "a person who draws ideas for new clothes"},
      {"left": "informal", "right": "relaxed and not serious", "type": "adjective"},
      {"left": "appearance", "right": "the way a person or a thing looks to others"}
    ], "explanation": "Attractive means nice to look at. A designer draws ideas, informal is relaxed, and appearance is the way something looks." }
  ]
});
