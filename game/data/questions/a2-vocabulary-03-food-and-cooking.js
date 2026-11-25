/* Questions: A2 Vocabulary, theme 3 Food and Cooking (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|3|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|3|mc|easy": [
    {"type": "mc", "prompt": "Dad uses a ___ to cut the apple into small pieces.", "options": ["knife", "stove", "plate", "fork"], "explanation": "A knife is a tool for cutting. Dad uses it to make small pieces of apple."},
    {"type": "mc", "prompt": "The waiter puts a big pizza on a white ___ in front of me.", "options": ["plate", "farming", "tip", "cup"], "explanation": "A plate is a round dish for your food. The pizza sits on it."},
    {"type": "mc", "prompt": "Mom puts the hot soup in a deep ___ for each child.", "options": ["bowl", "plate", "cook", "oven"], "explanation": "A bowl is a deep dish. Soup stays in it, so it is the right dish for soup."},
    {"type": "mc", "prompt": "There is a lot of sugar in this tea, so it is very ___.", "options": ["sweet", "local", "cold", "fresh"], "targetType": "adjective", "explanation": "Sweet means with the taste of sugar. Tea with a lot of sugar is sweet."},
    {"type": "mc", "prompt": "Tom bought these tomatoes at the market this morning, so they are very ___.", "options": ["fresh", "cheap", "bad", "sweet"], "targetType": "adjective", "explanation": "Fresh food is new and good. Tomatoes from this morning are fresh."},
    {"type": "mc", "prompt": "This soup has a strong ___, so I only eat a little.", "options": ["taste", "carrot", "meat", "cash"], "targetType": "noun", "explanation": "Taste is what you feel in your mouth when you eat. A strong taste is easy to notice."},
    {"type": "mc", "prompt": "My uncle is a ___ in a school kitchen. He makes lunch for 300 children.", "options": ["cook", "career", "farming", "break"], "explanation": "A cook is a person who makes food. My uncle makes lunch, so he is a cook."},
    {"type": "mc", "prompt": "Mom puts a little ___ with the potatoes before she cooks them.", "options": ["oil", "cash", "radio", "light"], "explanation": "Oil is used for cooking. Mom puts a little with the potatoes."}
  ],
  "A2|vocabulary|3|mc|medium": [
    {"type": "mc", "prompt": "Lucy eats her ice cream with a small ___.", "options": ["spoon", "computer", "cook", "knife"], "explanation": "A spoon is a small tool for eating soft food like ice cream."},
    {"type": "mc", "prompt": "Marco holds his meat with a ___ and cuts it with a knife.", "options": ["fork", "box", "stove", "can"], "explanation": "A fork has points. It holds the meat while the knife cuts it."},
    {"type": "mc", "prompt": "Dad takes a bottle of ___ and puts a little on his potatoes.", "options": ["sauce", "beef", "dessert", "fat"], "explanation": "Sauce is something you put on food to give it more taste. It comes from a bottle."},
    {"type": "mc", "prompt": "Put a little juice from this yellow ___ in your tea.", "options": ["lemon", "corn", "bean", "fat"], "explanation": "A lemon is a yellow fruit. People put its juice in tea or water."},
    {"type": "mc", "prompt": "Kim has a small, sweet ___ and a glass of milk after school.", "options": ["cookie", "taste", "chip", "nut"], "explanation": "A cookie is a small, sweet food. Many children eat it with milk."},
    {"type": "mc", "prompt": "Mr. Brown cooks ___ with potatoes and carrots for dinner.", "options": ["beef", "cookie", "chip", "oil"], "explanation": "Beef is meat from a cow. People often cook it with potatoes and carrots."},
    {"type": "mc", "prompt": "Farmers grow tall plants with yellow ___ on them.", "options": ["corn", "onion", "fish", "candy"], "explanation": "Corn is a tall plant with yellow food on it. It grows on farms."},
    {"type": "mc", "prompt": "The ___ in the hotel kitchen makes special dinners for the guests.", "options": ["chef", "fork", "plate", "oven"], "explanation": "A chef is a person who cooks in a hotel or restaurant. Chefs make the meals for guests."}
  ],
  "A2|vocabulary|3|mc|hard": [
    {"type": "mc", "prompt": "Lisa has bread with butter and sweet ___ for breakfast.", "options": ["jam", "oil", "sauce", "candy"], "explanation": "Jam is a sweet food made from fruit and sugar. People put it on bread."},
    {"type": "mc", "prompt": "Be careful with this hard ___. You must break it to eat the part inside.", "options": ["nut", "cookie", "chip", "bean"], "explanation": "A nut is a hard food. You break it to eat the part inside."},
    {"type": "mc", "prompt": "Tom's ___ soup was hot, brown and thick.", "options": ["bean", "dessert", "fat", "lemon"], "explanation": "A bean is a small food from a plant. Bean soup is brown and thick."},
    {"type": "mc", "prompt": "Ben takes a ___ of potato from the bag and eats it.", "options": ["chip", "beef", "candy", "nut"], "explanation": "A chip is a thin piece of potato. People eat chips from a bag."},
    {"type": "mc", "prompt": "After dinner, we had ice cream for ___.", "options": ["dessert", "bean", "corn", "jam"], "explanation": "Dessert is the sweet food at the end of a meal. We had ice cream after dinner."},
    {"type": "mc", "prompt": "My grandmother wrote her soup ___ on paper, so I can cook it too.", "options": ["recipe", "can", "spoon", "stove"], "explanation": "A recipe tells you how to make a kind of food. My grandmother wrote hers on paper."},
    {"type": "mc", "prompt": "The waiter will ___ our dinner in a few minutes.", "options": ["serve", "boil", "finish", "hope"], "targetType": "verb", "explanation": "To serve food is to bring it to people at the table. Waiters serve dinner."},
    {"type": "mc", "prompt": "We liked our waiter, so we left him a ___ of five dollars.", "options": ["tip", "bank", "price", "sale"], "explanation": "A tip is extra money that you give to a waiter to say thank you."}
  ],
  "A2|vocabulary|3|mc|veryhard": [
    {"type": "mc", "prompt": "This shop has a big ___ this week: all the shoes are half price.", "options": ["sale", "grocery", "service", "tip"], "explanation": "A sale is a time when a store sells things for less money. Half price means half the money."},
    {"type": "mc", "prompt": "I have no money on my card, so I will pay with ___.", "options": ["cash", "store", "service", "grocery"], "explanation": "Cash is money that you hold in your hand. You can pay with it when you have no card."},
    {"type": "mc", "prompt": "We waited an hour for water, so the ___ in that restaurant is bad.", "options": ["service", "farming", "cook", "sale"], "explanation": "Service is the help that waiters give you in a restaurant. Waiting an hour for water is bad service."},
    {"type": "mc", "prompt": "Dad opened a ___ of soup with a special tool.", "options": ["can", "glass", "bowl", "spoon"], "explanation": "A can is a metal box for food. You open it with a tool."},
    {"type": "mc", "prompt": "Please take the white ___ off your meat if you do not like it.", "options": ["fat", "lemon", "jam", "sauce"], "explanation": "Fat is the soft white part of meat. Some people cut it off."},
    {"type": "mc", "prompt": "My grandfather goes ___ at the lake every Sunday.", "options": ["fishing", "success", "farming", "cooking"], "explanation": "Fishing is catching fish for work or for fun. My grandfather does it at the lake."},
    {"type": "mc", "prompt": "Mom stopped at the ___ store to buy milk, eggs and bread.", "options": ["grocery", "fishing", "chef", "tip"], "explanation": "A grocery store sells food for the home, like milk, eggs and bread."},
    {"type": "mc", "prompt": "Mom will ___ the potatoes for ten minutes, and then we can eat them.", "options": ["boil", "thank", "serve", "taste"], "targetType": "verb", "explanation": "To boil is to cook something in very hot water. Potatoes need some minutes in it."}
  ],
  "A2|vocabulary|3|fill|easy": [
    {"type": "fill", "before": "Ana holds her meat with a fork and cuts it with a", "after": ".", "answer": "knife", "bank": ["knife", "bowl", "spoon"], "explanation": "A knife is the tool for cutting. Ana holds the meat with the fork and cuts it with the knife."},
    {"type": "fill", "before": "Your rice and chicken are on this big", "after": ".", "answer": "plate", "bank": ["plate", "oven", "recipe"], "explanation": "A plate is a round dish for food. Your dinner is on it."},
    {"type": "fill", "before": "Dad puts the salad in a large, deep", "after": "before dinner.", "answer": "bowl", "bank": ["bowl", "plate", "fork"], "explanation": "A bowl is a deep dish. Salad is easy to carry in a large bowl."},
    {"type": "fill", "before": "This orange juice is too", "after": "for me. I want less sugar.", "answer": "sweet", "bank": ["sweet", "fresh", "good"], "targetType": "adjective", "explanation": "Sweet means with a lot of sugar. This juice has too much sugar for me."},
    {"type": "fill", "before": "The fish at this shop comes from the sea every morning, so it is always", "after": ".", "answer": "fresh", "bank": ["fresh", "old", "sweet"], "targetType": "adjective", "explanation": "Fresh means new, not old. The fish arrives every morning."},
    {"type": "fill", "before": "Can I", "after": "your soup? I want to know if it is good.", "answer": "taste", "bank": ["taste", "boil", "cut"], "targetType": "verb", "explanation": "To taste is to put a little food in your mouth to find out what it is like."},
    {"type": "fill", "before": "My sister wants to be a", "after": ". She loves making dinner for her friends.", "answer": "cook", "bank": ["cook", "light", "fishing"], "explanation": "A cook is a person who makes food. My sister loves making dinner."},
    {"type": "fill", "before": "The little girl got a bag of", "after": "at the party and ate it all.", "answer": "candy", "bank": ["candy", "fire", "fish"], "explanation": "Candy is a small, sweet thing that you eat. Children get it at parties."}
  ],
  "A2|vocabulary|3|fill|medium": [
    {"type": "fill", "before": "Use a big", "after": "to take rice from the dish to each plate.", "answer": "spoon", "bank": ["spoon", "bowl", "chef"], "explanation": "A spoon is a tool for taking soft food. You use it to put rice on a plate."},
    {"type": "fill", "before": "I need a", "after": "to hold my beef and a knife to cut it.", "answer": "fork", "bank": ["fork", "knife", "spoon"], "explanation": "A fork has points that hold the meat. A knife cuts it, so you need both."},
    {"type": "fill", "before": "Please pass me the tomato", "after": "for my rice.", "answer": "sauce", "bank": ["sauce", "dessert", "oil"], "explanation": "Sauce is something you put on food to give it more taste. Tomato sauce goes well with rice."},
    {"type": "fill", "before": "Sara makes cold juice with water, sugar and one", "after": ".", "answer": "lemon", "bank": ["lemon", "corn", "bean"], "explanation": "A lemon is a yellow fruit. Its juice is good in cold drinks."},
    {"type": "fill", "before": "Tom put a big, sweet", "after": "in his bag for lunch.", "answer": "cookie", "bank": ["cookie", "beef", "fish"], "explanation": "A cookie is a small, sweet food. It is easy to carry in a bag."},
    {"type": "fill", "before": "Many people eat yellow", "after": "with butter in summer.", "answer": "corn", "bank": ["corn", "lemon", "cookie"], "explanation": "Corn is a plant with yellow food on it. People eat it with butter."},
    {"type": "fill", "before": "The", "after": "in the restaurant came to our table and asked if we liked the food.", "answer": "chef", "bank": ["chef", "can", "oven"], "explanation": "A chef is the person who cooks in a restaurant. This chef came to talk to the guests."},
    {"type": "fill", "before": "Please turn on the", "after": "so it is hot when we put the cake in.", "answer": "oven", "bank": ["oven", "fork", "recipe"], "explanation": "An oven is a hot box for cooking. It must be hot before you put the cake in."}
  ],
  "A2|vocabulary|3|fill|hard": [
    {"type": "fill", "before": "My grandmother makes", "after": "from the fruit in her garden, and we put it on bread.", "answer": "jam", "bank": ["jam", "fat", "dessert", "sauce"], "explanation": "Jam is a sweet food made from fruit and sugar. People put it on bread."},
    {"type": "fill", "before": "Look at this thin, long green", "after": "on the plant. It is ready to eat.", "answer": "bean", "bank": ["bean", "candy", "corn", "lemon"], "explanation": "A bean is a small food from a plant. Green beans grow in long shapes on the plant."},
    {"type": "fill", "before": "At the movie theater, Lara put a salty potato", "after": "in her mouth.", "answer": "chip", "bank": ["chip", "beef", "cookie", "nut"], "explanation": "A chip is a thin piece of potato. Chips are salty and people eat them from a bag."},
    {"type": "fill", "before": "I eat soup and meat first, and then I have a small", "after": "at the end.", "answer": "dessert", "bank": ["dessert", "chip", "oil", "jam"], "explanation": "Dessert is the sweet food at the end of a meal. I have it last."},
    {"type": "fill", "before": "Maria follows the", "after": "in her book to make the cake.", "answer": "recipe", "bank": ["recipe", "knife", "can", "stove"], "explanation": "A recipe tells you how to make a food, step by step. Maria reads it in her book."},
    {"type": "fill", "before": "The soup is on the", "after": "and it will be ready in ten minutes.", "answer": "stove", "bank": ["stove", "knife", "recipe", "chef"], "explanation": "A stove is the hot top of a cooking machine. The soup cooks on it."},
    {"type": "fill", "before": "This restaurant starts to", "after": "lunch at twelve o'clock.", "answer": "serve", "bank": ["serve", "clean", "boil", "taste"], "targetType": "verb", "explanation": "To serve food is to bring it to people at the table. Lunch starts at twelve."},
    {"type": "fill", "before": "Tom gave the taxi driver a", "after": "because he was friendly.", "answer": "tip", "bank": ["tip", "price", "sale", "grocery"], "explanation": "A tip is extra money that you give to say thank you. Tom was happy with the driver."}
  ],
  "A2|vocabulary|3|fill|veryhard": [
    {"type": "fill", "before": "The shoes were very cheap because the store had a big", "after": "on Friday.", "answer": "sale", "bank": ["sale", "shop", "grocery", "cash"], "explanation": "A sale is a time when a store sells things for less money. That is why the shoes were cheap."},
    {"type": "fill", "before": "The machine at the shop does not take cards, so please pay in", "after": ".", "answer": "cash", "bank": ["cash", "bank", "sale", "service"], "explanation": "Cash is money that you hold in your hand. The machine does not take cards, so you need cash."},
    {"type": "fill", "before": "The waiter brought our food in five minutes, so the", "after": "was very fast.", "answer": "service", "bank": ["service", "fishing", "chef", "tip"], "explanation": "Service is the help that waiters give you. Getting food in five minutes is fast service."},
    {"type": "fill", "before": "You need a special tool to open this metal", "after": "of soup.", "answer": "can", "bank": ["can", "bottle", "bowl", "recipe"], "explanation": "A can is a round metal box for food. You open it with a tool."},
    {"type": "fill", "before": "Butter and oil have a lot of", "after": "in them.", "answer": "fat", "bank": ["fat", "nut", "jam", "sauce"], "explanation": "Fat is part of many foods, like butter and oil. Too much of it is not good for you."},
    {"type": "fill", "before": "In my village,", "after": "is the main work: people grow rice and keep cows.", "answer": "farming", "bank": ["farming", "shopping", "fishing", "cooking"], "explanation": "Farming is the work of growing food or keeping animals on a farm. People in the village do it."},
    {"type": "fill", "before": "Dan buys his fruit and vegetables at the", "after": "on our street.", "answer": "grocery", "bank": ["grocery", "cash", "cook", "service"], "explanation": "A grocery is a store that sells food for the home. Dan buys fruit and vegetables there."},
    {"type": "fill", "before": "To make tea, first", "after": "the water until it is very hot.", "answer": "boil", "bank": ["boil", "welcome", "serve", "taste"], "targetType": "verb", "explanation": "To boil is to heat water until it is very hot and starts to move. You do it before you make tea."}
  ],
  "A2|vocabulary|3|tf|easy": [
    {"type": "tf", "prompt": "Cooks use a knife to cut meat and vegetables.", "answer": true, "target": "knife", "explanation": "True. A knife is a tool for cutting, and cooks use it every day."},
    {"type": "tf", "prompt": "People usually drink tea from a plate.", "answer": false, "target": "plate", "explanation": "False. A plate is a dish for food. You drink tea from a cup."},
    {"type": "tf", "prompt": "Candy is usually sweet.", "answer": true, "target": "sweet", "targetType": "adjective", "explanation": "True. Candy is made with a lot of sugar, so it tastes sweet."},
    {"type": "tf", "prompt": "Milk that is two months old is fresh.", "answer": false, "target": "fresh", "targetType": "adjective", "explanation": "False. Fresh milk is new. Milk that is two months old is not good."},
    {"type": "tf", "prompt": "A lemon and a piece of candy have a different taste.", "answer": true, "target": "taste", "targetType": "noun", "explanation": "True. They taste very different. A lemon is not sweet."},
    {"type": "tf", "prompt": "A cook is a person who sells shoes.", "answer": false, "target": "cook", "explanation": "False. A cook makes food. A person who sells shoes works in a shoe store."},
    {"type": "tf", "prompt": "Many people use oil when they cook potatoes.", "answer": true, "target": "oil", "explanation": "True. Oil is common in cooking, for example with potatoes."},
    {"type": "tf", "prompt": "Candy is made with a lot of salt.", "answer": false, "target": "candy", "explanation": "False. Candy is made with a lot of sugar, and sugar is not salt."}
  ],
  "A2|vocabulary|3|tf|medium": [
    {"type": "tf", "prompt": "You can use a fork to eat meat and rice.", "answer": true, "target": "fork", "explanation": "True. A fork has points, so it holds pieces of food."},
    {"type": "tf", "prompt": "Most people drink sauce from a cup like water.", "answer": false, "target": "sauce", "explanation": "False. Sauce goes on food. People do not drink it like water."},
    {"type": "tf", "prompt": "A lemon is a yellow fruit with a strong taste.", "answer": true, "target": "lemon", "explanation": "True. Lemons are yellow and not sweet at all."},
    {"type": "tf", "prompt": "A cookie is a kind of hot drink.", "answer": false, "target": "cookie", "explanation": "False. A cookie is a small, sweet food. It is not a drink."},
    {"type": "tf", "prompt": "People often cook beef with potatoes and carrots.", "answer": true, "target": "beef", "explanation": "True. Beef is meat from a cow. Many families cook it with potatoes and carrots."},
    {"type": "tf", "prompt": "Corn is a hot drink that people have at breakfast.", "answer": false, "target": "corn", "explanation": "False. Corn is a plant with yellow food on it, not a drink."},
    {"type": "tf", "prompt": "A chef works in a restaurant kitchen and makes meals for guests.", "answer": true, "target": "chef", "explanation": "True. A chef is the person who cooks in a restaurant."},
    {"type": "tf", "prompt": "People use an oven to cut meat.", "answer": false, "target": "oven", "explanation": "False. An oven is for cooking. You cut meat with a knife."}
  ],
  "A2|vocabulary|3|tf|hard": [
    {"type": "tf", "prompt": "You must break a nut before you can eat the part inside it.", "answer": true, "target": "nut", "explanation": "True. A nut is hard on the outside. You break it to eat the part inside."},
    {"type": "tf", "prompt": "A bean is a big animal that lives on a farm.", "answer": false, "target": "bean", "explanation": "False. A bean is a small food from a plant, not an animal."},
    {"type": "tf", "prompt": "You can buy a bag of chips at a movie theater.", "answer": true, "target": "chip", "targetType": "noun", "explanation": "True. Chips are thin pieces of potato in a bag. Many movie theaters sell them."},
    {"type": "tf", "prompt": "Dessert is the food you eat before the main dish.", "answer": false, "target": "dessert", "explanation": "False. Dessert comes at the end of the meal, after the main dish."},
    {"type": "tf", "prompt": "A recipe tells you how to make a kind of food.", "answer": true, "target": "recipe", "explanation": "True. A recipe lists the food and the steps to make a dish."},
    {"type": "tf", "prompt": "Cooks use a stove to keep milk cold.", "answer": false, "target": "stove", "explanation": "False. A stove is hot. You keep milk cold in a refrigerator."},
    {"type": "tf", "prompt": "A waiter's job is to serve food and drinks to people at the table.", "answer": true, "target": "serve", "targetType": "verb", "explanation": "True. To serve is to bring food and drinks to the table."},
    {"type": "tf", "prompt": "A tip is the money you pay for the food on the menu.", "answer": false, "target": "tip", "explanation": "False. The price is the money for the food. A tip is extra money for the waiter."}
  ],
  "A2|vocabulary|3|tf|veryhard": [
    {"type": "tf", "prompt": "Shops often have a sale when they want to sell things for less money.", "answer": true, "target": "sale", "explanation": "True. A sale is a time when prices are lower."},
    {"type": "tf", "prompt": "Cash is money on a plastic card.", "answer": false, "target": "cash", "explanation": "False. Cash is money that you hold in your hand. A card is not cash."},
    {"type": "tf", "prompt": "Good service in a restaurant means the waiter is fast and friendly.", "answer": true, "target": "service", "explanation": "True. Service is the help that waiters give you."},
    {"type": "tf", "prompt": "Fat is the red part of meat.", "answer": false, "target": "fat", "explanation": "False. Fat is the soft white part of meat, not the red part."},
    {"type": "tf", "prompt": "Some people go fishing at a lake on Sundays.", "answer": true, "target": "fishing", "explanation": "True. Fishing is catching fish, and many people do it for fun."},
    {"type": "tf", "prompt": "Farming is the work of people who catch fish in the sea.", "answer": false, "target": "farming", "explanation": "False. Farming is growing food or keeping animals on a farm. Catching fish is fishing."},
    {"type": "tf", "prompt": "Water gets very hot and starts to move when you boil it.", "answer": true, "target": "boil", "targetType": "verb", "explanation": "True. To boil is to heat water until it is very hot and moves."},
    {"type": "tf", "prompt": "A can is a soft paper box.", "answer": false, "target": "can", "explanation": "False. A can is a hard metal box for food or drinks."}
  ],
  "A2|vocabulary|3|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "knife", "right": "you cut an apple or meat with it"},
      {"left": "bowl", "right": "a deep dish for soup or salad"},
      {"left": "sweet", "right": "tea with a lot of sugar tastes like this", "type": "adjective"},
      {"left": "oil", "right": "you put it on food that you cook; it comes in a bottle"}
    ], "explanation": "A knife cuts and a bowl holds soup. Sweet means with the taste of sugar, and oil is for cooking." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "plate", "right": "a round dish where you put your dinner"},
      {"left": "fresh", "right": "made or picked today, not old", "type": "adjective"},
      {"left": "taste", "right": "to try a little food to see if it is good", "type": "verb"},
      {"left": "candy", "right": "a small sweet thing that children get in a bag at a party"}
    ], "explanation": "Your dinner goes on a plate. Fresh means new, and to taste is to try a little food. Candy is the sweet thing in a party bag." }
  ],
  "A2|vocabulary|3|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "spoon", "right": "you eat ice cream or soup with it"},
      {"left": "cookie", "right": "a small sweet food that you eat with milk"},
      {"left": "corn", "right": "a tall plant with yellow food on it"},
      {"left": "chef", "right": "the person who cooks in a restaurant kitchen"}
    ], "explanation": "A spoon is for soft food and a cookie is sweet. Corn is a tall plant, and a chef cooks in a restaurant." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "fork", "right": "a tool with points that holds your meat"},
      {"left": "sauce", "right": "something you put on food to give it more taste"},
      {"left": "beef", "right": "meat from a cow"},
      {"left": "oven", "right": "a hot box in the kitchen where you cook a cake"}
    ], "explanation": "A fork holds meat and sauce gives food taste. Beef is meat from a cow, and an oven is a hot box for cooking." }
  ],
  "A2|vocabulary|3|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "jam", "right": "a sweet food from fruit that you put on bread"},
      {"left": "nut", "right": "a hard food that you must break to eat"},
      {"left": "recipe", "right": "words that tell you how to make a food"},
      {"left": "serve", "right": "to bring food to people at a table", "type": "verb"}
    ], "explanation": "Jam comes from fruit. A nut is hard, a recipe tells you how to cook, and to serve is to bring food to the table." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "bean", "right": "a small food that grows in a long green plant"},
      {"left": "dessert", "right": "the sweet food at the end of a meal"},
      {"left": "stove", "right": "the hot part of a kitchen machine where you cook"},
      {"left": "tip", "right": "extra money that you give to a waiter"}
    ], "explanation": "A bean grows on a plant and dessert comes last. A stove is hot, and a tip is extra money." }
  ],
  "A2|vocabulary|3|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "sale", "right": "a time when a store sells things for less money"},
      {"left": "cash", "right": "money that you hold in your hand, not on a card"},
      {"left": "fishing", "right": "catching fish at a lake, for work or fun"},
      {"left": "boil", "right": "to heat water until it is very hot and moves", "type": "verb"}
    ], "explanation": "A sale has lower prices and cash is money in your hand. Fishing is catching fish, and to boil is to heat water." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "service", "right": "the help that a waiter gives you in a restaurant"},
      {"left": "grocery", "right": "a store that sells food for the home"},
      {"left": "farming", "right": "the work of growing food or keeping animals"},
      {"left": "fat", "right": "the soft white part of meat"}
    ], "explanation": "Service is help in a restaurant and a grocery sells food. Farming is work on a farm, and fat is the white part of meat." }
  ]
});
