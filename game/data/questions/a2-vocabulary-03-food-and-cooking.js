/* Questions: A2 Vocabulary, theme 3 Food and Cooking (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|3|mc|easy": [
    { "type": "mc", "prompt": "Please give me the ___ to cut my bread.", "options": ["knife", "chef", "recipe", "soup"], "explanation": "A knife is a tool for cutting. You use it to cut bread, meat and fruit." },
    { "type": "mc", "prompt": "Anna puts the sandwich on a ___ and takes it to the table.", "options": ["plate", "corn", "bottle", "stove"], "explanation": "A plate is a dish for food. You put your sandwich on it." },
    { "type": "mc", "prompt": "Tom eats his soup from a ___.", "options": ["bowl", "fat", "knife", "pizza"], "explanation": "A bowl is a dish for soup or rice. You can eat from it." },
    { "type": "mc", "prompt": "Sam puts sugar in his coffee, so it is very ___.", "options": ["sweet", "fresh", "hot", "cold"], "explanation": "Sugar makes food and drinks sweet. Sweet things taste like sugar." },
    { "type": "mc", "prompt": "Ben made this bread an hour ago, so it is ___.", "options": ["fresh", "sweet", "cold", "old"], "explanation": "Fresh food is new. This bread is new because Ben made it an hour ago." },
    { "type": "mc", "prompt": "I love the ___ of fresh bread.", "options": ["taste", "beef", "glass", "cheese"], "targetType": "noun", "explanation": "Taste is what you feel in your mouth when you eat. Fresh bread has a very good taste." },
    { "type": "mc", "prompt": "My dad is a very good ___. He makes dinner every day.", "options": ["cook", "recipe", "spoon", "egg"], "explanation": "A cook is a person who makes food. Dad makes dinner, so he is a cook." },
    { "type": "mc", "prompt": "Dad cooks the potatoes with a little ___.", "options": ["oil", "candy", "plate", "bottle"], "explanation": "We use oil for cooking. Dad puts a little oil with the potatoes." }
  ],
  "A2|vocabulary|3|mc|medium": [
    { "type": "mc", "prompt": "Lisa eats her soup with a ___.", "options": ["spoon", "bowl", "plate", "banana"], "explanation": "A spoon is a small tool for eating soup. The soup is in the bowl, but Lisa eats it with the spoon." },
    { "type": "mc", "prompt": "Ken cuts the meat with a knife and eats it with a ___.", "options": ["fork", "can", "plate", "cup"], "explanation": "A fork has small points. You use it to eat meat, and a knife helps you to cut it." },
    { "type": "mc", "prompt": "Carlos puts a lot of red ___ on his rice.", "options": ["sauce", "candy", "corn", "bread"], "explanation": "Sauce is something you put on food to make it taste better. Red sauce is good on rice." },
    { "type": "mc", "prompt": "Sam puts a piece of ___ in his water. It is yellow.", "options": ["lemon", "sauce", "spoon", "rice"], "explanation": "A lemon is a yellow fruit. It makes water taste fresh." },
    { "type": "mc", "prompt": "Mia has a ___ and a glass of milk after school.", "options": ["cookie", "lemon", "bean", "chicken"], "explanation": "A cookie is a small, sweet food. Many children eat cookies with milk." },
    { "type": "mc", "prompt": "Ahmet cooks ___ and potatoes for dinner.", "options": ["beef", "dessert", "nut", "milk"], "explanation": "Beef is meat from a cow. It is a common food for dinner." },
    { "type": "mc", "prompt": "The farmer grows ___. The plants are very tall.", "options": ["corn", "lemon", "apple", "chip"], "explanation": "Corn is a tall plant with yellow food on it. Farmers grow corn on big farms." },
    { "type": "mc", "prompt": "My uncle is a ___ in a big restaurant. He cooks for many people.", "options": ["chef", "sauce", "stove", "cup"], "explanation": "A chef is a person who cooks in a restaurant. Many people eat the food that he makes." }
  ],
  "A2|vocabulary|3|mc|hard": [
    { "type": "mc", "prompt": "Sara puts ___ on her bread. It is sweet and made from fruit.", "options": ["jam", "bean", "dessert", "pizza"], "explanation": "Jam is a sweet food made from fruit and sugar. You put it on bread." },
    { "type": "mc", "prompt": "You break the hard outside of a ___ to eat the inside.", "options": ["nut", "chip", "fat", "milk"], "explanation": "A nut has a hard outside. You break it and eat the small food inside." },
    { "type": "mc", "prompt": "Leo makes a soup with rice and green ___.", "options": ["bean", "candy", "nut", "cake"], "explanation": "A bean is a small, green or brown food that grows in a plant. It is good in soup." },
    { "type": "mc", "prompt": "At the movies, Ali takes the last ___. It is a thin piece of potato.", "options": ["chip", "cookie", "oil", "soup"], "explanation": "A chip is a thin piece of potato. People eat chips from a bag." },
    { "type": "mc", "prompt": "After dinner, we had ice cream for ___.", "options": ["dessert", "beef", "jam", "bread"], "explanation": "Dessert is the sweet food that you eat after dinner. Ice cream is a common dessert." },
    { "type": "mc", "prompt": "Maria follows the ___ to make her birthday cake.", "options": ["recipe", "oven", "plate", "box"], "explanation": "A recipe tells you what to use and what to do. Maria reads it to make the cake." },
    { "type": "mc", "prompt": "The waiter will ___ our food in a few minutes.", "options": ["serve", "boil", "taste", "eat"], "explanation": "To serve food is to bring it to people at the table. A waiter does this in a restaurant." },
    { "type": "mc", "prompt": "Ken leaves a ___ for the waiter because the food was good.", "options": ["tip", "grocery", "service", "price"], "explanation": "A tip is extra money for a waiter. People give it when they are happy with the food." }
  ],
  "A2|vocabulary|3|mc|veryhard": [
    { "type": "mc", "prompt": "Everything in this store is cheaper this week. There is a big ___.", "options": ["sale", "cash", "service", "bank"], "explanation": "A sale is a time when a store sells things for less money." },
    { "type": "mc", "prompt": "Lisa has no card, so she pays in ___.", "options": ["cash", "grocery", "service", "shop"], "explanation": "Cash is money that you have in your hand, not on a card. You can pay with it when you have no card." },
    { "type": "mc", "prompt": "We waited one hour for our food. The ___ in this restaurant is bad.", "options": ["service", "sale", "tip", "shop"], "explanation": "Service is the help that a waiter gives you in a restaurant. Waiting one hour is bad service." },
    { "type": "mc", "prompt": "Ken uses a special tool to open a ___ of beans.", "options": ["can", "bowl", "fork", "glass"], "explanation": "A can is a metal container for food. You need a tool to open it." },
    { "type": "mc", "prompt": "Butter and oil have a lot of ___, so we eat them in small amounts.", "options": ["fat", "jam", "sauce", "apple"], "explanation": "Fat is the soft part of food, like in butter. Butter and oil have a lot of it." },
    { "type": "mc", "prompt": "Tom's hobby is going to the river to catch fish. His hobby is ___.", "options": ["fishing", "farming", "cooking", "reading"], "explanation": "Fishing is catching fish. Tom does it at the river, so his hobby is fishing." },
    { "type": "mc", "prompt": "I buy milk and bread at the ___ near my house.", "options": ["grocery", "cash", "chef", "bank"], "explanation": "A grocery is a store that sells food like milk and bread. It is a small store near many homes." },
    { "type": "mc", "prompt": "When you heat water a lot, it starts to ___.", "options": ["boil", "serve", "taste", "buy"], "explanation": "Water boils when it is very hot. You can see it move a lot." }
  ],
  "A2|vocabulary|3|fill|easy": [
    { "type": "fill", "before": "Lisa cuts the apple with a", "after": ".", "answer": "knife", "bank": ["knife", "can", "dessert"], "explanation": "You cut an apple with a knife. A knife is a tool for cutting." },
    { "type": "fill", "before": "The waiter brings my dinner on a big white", "after": ".", "answer": "plate", "bank": ["plate", "cookie", "spoon"], "explanation": "A plate is a dish that you put your food on. My dinner is on the plate." },
    { "type": "fill", "before": "Ali puts the fruit in a", "after": "on the table.", "answer": "bowl", "bank": ["bowl", "beef", "recipe"], "explanation": "A bowl is a dish for fruit, soup or rice. Ali puts the fruit in it." },
    { "type": "fill", "before": "This tea has no sugar, so it is not", "after": ".", "answer": "sweet", "bank": ["sweet", "fresh", "open"], "targetType": "adjective", "explanation": "Sweet means with the taste of sugar. This tea has no sugar, so it is not sweet." },
    { "type": "fill", "before": "These vegetables came from the farm today, so they are very", "after": ".", "answer": "fresh", "bank": ["fresh", "sweet", "old"], "explanation": "Fresh means new, not old. The vegetables came from the farm today." },
    { "type": "fill", "before": "Can I", "after": "your soup? I want to know if it is good.", "answer": "taste", "bank": ["taste", "serve", "wash"], "targetType": "verb", "explanation": "To taste is to put a little food in your mouth. Then you know what it is like." },
    { "type": "fill", "before": "Ali wants to be a", "after": "because he loves to make food for people.", "answer": "cook", "bank": ["cook", "fat", "knife"], "explanation": "A cook is a person who makes food. Ali loves to make food, so he wants to be a cook." },
    { "type": "fill", "before": "At the party, the children get a bag of", "after": "with many colors.", "answer": "candy", "bank": ["candy", "corn", "fish"], "explanation": "Candy is a small, sweet thing that you eat. It comes in many colors." }
  ],
  "A2|vocabulary|3|fill|medium": [
    { "type": "fill", "before": "Anna puts sugar in her tea and moves it with a", "after": ".", "answer": "spoon", "bank": ["spoon", "chef", "recipe"], "explanation": "A spoon is a small tool. You can use it to move the sugar in your tea." },
    { "type": "fill", "before": "Anna eats her cake with her", "after": ".", "answer": "fork", "bank": ["fork", "bowl", "oven"], "explanation": "A fork is a tool with small points. Anna uses it to eat her cake." },
    { "type": "fill", "before": "Lisa puts a little hot", "after": "on her meat.", "answer": "sauce", "bank": ["sauce", "corn", "lemon"], "explanation": "Sauce is something you put on food to give it more taste. Hot sauce goes well with meat." },
    { "type": "fill", "before": "My grandmother puts", "after": "in her tea. It is a yellow fruit.", "answer": "lemon", "bank": ["lemon", "bean", "cookie"], "explanation": "A lemon is a yellow fruit. Some people put it in their tea." },
    { "type": "fill", "before": "The girl takes her", "after": "from the box. It is small and sweet.", "answer": "cookie", "bank": ["cookie", "chip", "oil"], "explanation": "A cookie is a small, sweet food. The girl takes one from the box." },
    { "type": "fill", "before": "In summer, we eat sweet yellow", "after": "with butter.", "answer": "corn", "bank": ["corn", "fat", "fish"], "explanation": "Corn is a tall plant with yellow food on it. We can eat it with butter in summer." },
    { "type": "fill", "before": "The", "after": "in this restaurant is a very nice man. He cooks for fifty people.", "answer": "chef", "bank": ["chef", "knife", "oven"], "explanation": "A chef is a person who cooks in a restaurant. The sentence says \"He\", so the answer is a person." },
    { "type": "fill", "before": "Tom puts the cake in the", "after": ".", "answer": "oven", "bank": ["oven", "can", "knife"], "explanation": "An oven is a big metal box in the kitchen. You cook cake and bread in it." }
  ],
  "A2|vocabulary|3|fill|hard": [
    { "type": "fill", "before": "My grandmother makes", "after": "from fruit and sugar every summer.", "answer": "jam", "bank": ["jam", "beef", "oil", "egg"], "explanation": "Jam is a sweet food made from fruit and sugar. People put it on bread." },
    { "type": "fill", "before": "The plant has long green parts and small", "after": "inside.", "answer": "bean", "bank": ["bean", "chip", "lemon", "cheese"], "explanation": "A bean is a small food that grows in a long plant. You find the beans inside the green parts." },
    { "type": "fill", "before": "Emma has a sandwich and one potato", "after": "in her lunch bag.", "answer": "chip", "bank": ["chip", "bean", "nut", "chicken"], "explanation": "A chip is a thin piece of potato. Emma has one in her lunch bag." },
    { "type": "fill", "before": "For", "after": ", we had cake and fruit.", "answer": "dessert", "bank": ["dessert", "jam", "nut", "rice"], "explanation": "Dessert is the sweet food that you eat at the end of a meal. Cake and fruit are good desserts." },
    { "type": "fill", "before": "Dad cannot remember how to make soup, so he reads the", "after": ".", "answer": "recipe", "bank": ["recipe", "cook", "stove", "box"], "explanation": "A recipe is words that tell you how to make a kind of food. Dad reads it to make the soup." },
    { "type": "fill", "before": "Sam turns on the", "after": "to boil water for the eggs.", "answer": "stove", "bank": ["stove", "oven", "fork", "cup"], "explanation": "A stove has hot places on top for cooking. You boil water on it, but you cook a cake in an oven." },
    { "type": "fill", "before": "The restaurant will", "after": "lunch at twelve.", "answer": "serve", "bank": ["serve", "boil", "taste", "eat"], "explanation": "To serve is to bring food to people at a table. The restaurant will start to bring lunch at twelve." },
    { "type": "fill", "before": "In the US, you should give the taxi driver a", "after": ".", "answer": "tip", "bank": ["tip", "grocery", "service", "bank"], "explanation": "A tip is extra money that you give to say thank you. People give a tip to a taxi driver." }
  ],
  "A2|vocabulary|3|fill|veryhard": [
    { "type": "fill", "before": "These shoes were forty dollars, but now they are on", "after": ".", "answer": "sale", "bank": ["sale", "grocery", "tip", "store"], "explanation": "A sale is a time when a store sells things for less money. On sale means cheaper than before." },
    { "type": "fill", "before": "The taxi driver says, \"I only take", "after": ", no cards.\"", "answer": "cash", "bank": ["cash", "sale", "service", "store"], "explanation": "Cash is money that you have in your hand, not on a card. The driver does not take cards." },
    { "type": "fill", "before": "The food was great and the", "after": "was fast.", "answer": "service", "bank": ["service", "cash", "sale", "price"], "explanation": "Service is the help that people give you in a restaurant. Fast service means the waiter helps you quickly." },
    { "type": "fill", "before": "The fish is in a metal", "after": ". Mia needs a tool to open it.", "answer": "can", "bank": ["can", "bowl", "stove", "bottle"], "explanation": "A can is a metal container for food. You need a tool to open it." },
    { "type": "fill", "before": "Ben cuts the", "after": "from his meat and eats only the red part.", "answer": "fat", "bank": ["fat", "candy", "jam", "sauce"], "explanation": "Fat is the white part of meat that is not red meat. Ben does not eat it." },
    { "type": "fill", "before": "My uncle grows corn and keeps cows. His work is", "after": ".", "answer": "farming", "bank": ["farming", "fishing", "cooking", "painting"], "explanation": "Farming is the work of growing food or keeping animals. Growing corn and keeping cows is farming." },
    { "type": "fill", "before": "Dad goes to the", "after": "to buy eggs, milk and rice.", "answer": "grocery", "bank": ["grocery", "sale", "cash", "bank"], "explanation": "A grocery is a store for food and things for the home. Dad buys his eggs, milk and rice there." },
    { "type": "fill", "before": "My mom puts eggs in water and lets it", "after": "for ten minutes.", "answer": "boil", "bank": ["boil", "serve", "taste", "drink"], "explanation": "Water boils when it is very hot and starts to move. Mom lets the eggs cook in it." }
  ],
  "A2|vocabulary|3|tf|easy": [
    { "type": "tf", "prompt": "You can use a knife to cut bread.", "answer": true, "target": "knife", "explanation": "True. A knife is a tool for cutting, and bread is easy to cut with it." },
    { "type": "tf", "prompt": "People put food on a plate.", "answer": true, "target": "plate", "explanation": "True. A plate is a dish that you put your food on." },
    { "type": "tf", "prompt": "Sugar makes tea sweet.", "answer": true, "target": "sweet", "targetType": "adjective", "explanation": "True. Sweet means with the taste of sugar, so tea with sugar is sweet." },
    { "type": "tf", "prompt": "The taste of sugar is sweet.", "answer": true, "target": "taste", "targetType": "noun", "explanation": "True. Taste is how food is in your mouth, and sugar always tastes sweet." },
    { "type": "tf", "prompt": "Bread from last week is fresh bread.", "answer": false, "target": "fresh", "targetType": "adjective", "explanation": "False. Fresh bread is new. Bread from last week is old." },
    { "type": "tf", "prompt": "A cook is a person who teaches children at a school.", "answer": false, "target": "cook", "explanation": "False. A cook is a person who makes food. A person who teaches children is a teacher." },
    { "type": "tf", "prompt": "You can use oil to cut bread.", "answer": false, "target": "oil", "explanation": "False. You use oil when you cook, for example with potatoes. You cut bread with a knife." },
    { "type": "tf", "prompt": "Candy is a kind of meat.", "answer": false, "target": "candy", "explanation": "False. Candy is a small, sweet thing that you eat. It is made with sugar." }
  ],
  "A2|vocabulary|3|tf|medium": [
    { "type": "tf", "prompt": "You can use a fork to eat meat.", "answer": true, "target": "fork", "explanation": "True. A fork has small points. You can use it to eat meat and many other foods." },
    { "type": "tf", "prompt": "Hot sauce is something that people put on food.", "answer": true, "target": "sauce", "explanation": "True. People put sauce on food to give it more taste." },
    { "type": "tf", "prompt": "A chef cooks food in a restaurant.", "answer": true, "target": "chef", "explanation": "True. A chef is a person who cooks in a restaurant." },
    { "type": "tf", "prompt": "People cook cake in an oven.", "answer": true, "target": "oven", "explanation": "True. An oven is a big metal box in the kitchen. You cook cake and bread in it." },
    { "type": "tf", "prompt": "A lemon is a red fruit.", "answer": false, "target": "lemon", "explanation": "False. A lemon is a yellow fruit. Some people put it in their water or tea." },
    { "type": "tf", "prompt": "A cookie is a hot drink.", "answer": false, "target": "cookie", "explanation": "False. A cookie is a small, sweet food. People eat it with milk or tea." },
    { "type": "tf", "prompt": "Beef is meat from a chicken.", "answer": false, "target": "beef", "explanation": "False. Beef is meat from a cow. Meat from a chicken is chicken." },
    { "type": "tf", "prompt": "Corn is a small animal that lives on a farm.", "answer": false, "target": "corn", "explanation": "False. Corn is a tall plant with yellow food on it. A farmer grows it." }
  ],
  "A2|vocabulary|3|tf|hard": [
    { "type": "tf", "prompt": "A bean is a small food that grows inside a long plant.", "answer": true, "target": "bean", "explanation": "True. Beans grow in long plants, and people eat them in soup or with rice." },
    { "type": "tf", "prompt": "People usually eat dessert at the end of a meal.", "answer": true, "target": "dessert", "explanation": "True. Dessert is the sweet food that comes after the main part of a meal." },
    { "type": "tf", "prompt": "A waiter can serve food to the people at a table.", "answer": true, "target": "serve", "explanation": "True. To serve food is to bring it to people at a table." },
    { "type": "tf", "prompt": "People can give a tip to the waiter when the service is good.", "answer": true, "target": "tip", "explanation": "True. A tip is extra money that you give to say thank you." },
    { "type": "tf", "prompt": "The outside of a nut is soft, so you can eat it all.", "answer": false, "target": "nut", "explanation": "False. A nut has a hard outside. You break it to eat the small part inside." },
    { "type": "tf", "prompt": "A chip is a thick piece of meat.", "answer": false, "target": "chip", "explanation": "False. A chip is a thin piece of potato. It is not meat." },
    { "type": "tf", "prompt": "A recipe is a small tool that you use to cut food.", "answer": false, "target": "recipe", "explanation": "False. A recipe is words that tell you how to make food. You use a knife to cut food." },
    { "type": "tf", "prompt": "A stove is a cold machine that keeps food fresh.", "answer": false, "target": "stove", "explanation": "False. A stove has hot places on top for cooking. It does not keep food cold." }
  ],
  "A2|vocabulary|3|tf|veryhard": [
    { "type": "tf", "prompt": "In a sale, the prices in a store are lower than before.", "answer": true, "target": "sale", "explanation": "True. A sale is a time when a store sells things for less money." },
    { "type": "tf", "prompt": "Good service in a restaurant means that the waiter helps you quickly.", "answer": true, "target": "service", "explanation": "True. Service is the help that people give you in a restaurant or a store." },
    { "type": "tf", "prompt": "Farming is the work of growing food or keeping animals.", "answer": true, "target": "farming", "explanation": "True. A farmer does this work on a farm." },
    { "type": "tf", "prompt": "Water starts to boil when it is very hot.", "answer": true, "target": "boil", "explanation": "True. Water boils when you heat it a lot and it starts to move." },
    { "type": "tf", "prompt": "Cash is money that you pay with a card.", "answer": false, "target": "cash", "explanation": "False. Cash is money that you have in your hand, not on a card." },
    { "type": "tf", "prompt": "Fat is the red part of meat.", "answer": false, "target": "fat", "explanation": "False. Fat is the white part of meat. The red part is the meat itself." },
    { "type": "tf", "prompt": "Fishing is the work of growing corn on a farm.", "answer": false, "target": "fishing", "explanation": "False. Fishing is catching fish. Growing corn on a farm is farming." },
    { "type": "tf", "prompt": "A can is a glass container for food.", "answer": false, "target": "can", "explanation": "False. A can is a metal container. You need a tool to open it." }
  ],
  "A2|vocabulary|3|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "knife", "right": "you hold it to cut an apple or meat" },
      { "left": "bowl", "right": "you put soup or fruit in it" },
      { "left": "sweet", "right": "tea with sugar tastes like this", "type": "adjective" },
      { "left": "oil", "right": "something yellow in a bottle that you use for cooking potatoes" }
    ], "explanation": "A knife is for cutting and a bowl holds soup or fruit. Sweet means with the taste of sugar, and oil is used for cooking." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "plate", "right": "a dish on the table where you put your dinner" },
      { "left": "fresh", "right": "bread that someone made today is like this", "type": "adjective" },
      { "left": "taste", "right": "to try a little food to find out if it is good", "type": "verb" },
      { "left": "candy", "right": "children get this in a bag at a party" }
    ], "explanation": "Your dinner goes on a plate. Fresh means new, and to taste is to try a little food. Candy is the sweet thing in a party bag." }
  ],
  "A2|vocabulary|3|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "spoon", "right": "you eat soup with this small tool" },
      { "left": "cookie", "right": "a sweet food from a box that is good with milk" },
      { "left": "corn", "right": "yellow food that you eat with butter in summer" },
      { "left": "chef", "right": "a person who cooks in a big restaurant" }
    ], "explanation": "You eat soup with a spoon. A cookie is good with milk, corn is a yellow food, and a chef is a person who cooks in a restaurant." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "fork", "right": "a tool with small points that you use to eat food" },
      { "left": "sauce", "right": "red or hot food that goes on rice" },
      { "left": "beef", "right": "meat from a cow that people eat for dinner" },
      { "left": "oven", "right": "the big metal box where Dad cooks bread" }
    ], "explanation": "A fork has small points. Sauce goes on food, beef is meat from a cow, and an oven is the metal box for cooking bread." }
  ],
  "A2|vocabulary|3|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "jam", "right": "a sweet fruit food that you put on your bread" },
      { "left": "nut", "right": "a food with a hard outside that you break" },
      { "left": "recipe", "right": "the words that tell you how to make a cake" },
      { "left": "serve", "right": "to bring food to the people at a table" }
    ], "explanation": "Jam goes on bread, and a nut has a hard outside. A recipe tells you how to make food, and to serve is to bring food to people." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "bean", "right": "a small green or brown food from a long plant" },
      { "left": "dessert", "right": "the sweet part of a meal after the main food" },
      { "left": "stove", "right": "the kitchen machine where you boil water" },
      { "left": "tip", "right": "extra money for a waiter" }
    ], "explanation": "A bean grows in a long plant. Dessert comes after the main food, a stove is for boiling water, and a tip is extra money for a waiter." }
  ],
  "A2|vocabulary|3|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "sale", "right": "a time when things in a store cost less" },
      { "left": "cash", "right": "money in your hand, not on a card" },
      { "left": "fishing", "right": "sitting by a river to catch fish" },
      { "left": "boil", "right": "what very hot water does when it starts to move" }
    ], "explanation": "In a sale, things cost less. Cash is money in your hand. Fishing is catching fish, and water boils when it is very hot." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "service", "right": "the help that a waiter gives you at the table" },
      { "left": "grocery", "right": "a store where you buy milk, eggs and bread" },
      { "left": "farming", "right": "the work of growing food on a farm" },
      { "left": "fat", "right": "the white part of meat" }
    ], "explanation": "Service is help from a waiter. A grocery is a store for food, farming is growing food on a farm, and fat is the white part of meat." }
  ]
});
