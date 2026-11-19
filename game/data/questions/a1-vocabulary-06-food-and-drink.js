/* Questions: A1 Vocabulary, theme 06 Food and Drink (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|6|mc|easy": [
    { "type": "mc", "prompt": "Mom makes soup and bread for ___ today.", "options": ["lunch", "bed", "shirt", "bus"], "explanation": "Lunch is the meal between breakfast and dinner. Mom makes soup and bread for it." },
    { "type": "mc", "prompt": "In many countries, people eat chicken and ___ for dinner.", "options": ["rice", "desk", "door", "bus"], "explanation": "Rice is a food. Many people eat it with chicken." },
    { "type": "mc", "prompt": "Dad drinks a cup of hot ___ in the morning.", "options": ["coffee", "bed", "shoe", "tree"], "explanation": "Coffee is a hot drink. Many people drink it in the morning." },
    { "type": "mc", "prompt": "Anna cuts the ___ and makes a sandwich.", "options": ["bread", "chair", "hat", "bus"], "explanation": "Bread is a food that people cut and eat every day. Anna cuts it for her sandwich." },
    { "type": "mc", "prompt": "Ben is thirsty. He drinks a glass of ___.", "options": ["water", "bed", "hat", "tree"], "explanation": "Water is a drink with no color. Ben drinks it because he is thirsty." },
    { "type": "mc", "prompt": "Leo eats a red ___ after lunch.", "options": ["apple", "shoe", "desk", "window"], "explanation": "An apple is a fruit. It can be red or green." },
    { "type": "mc", "prompt": "Tom has some ___ and bread for breakfast.", "options": ["eggs", "shoes", "hats", "trees"], "target": "egg", "explanation": "An egg is a food that comes from a chicken. Tom eats eggs and bread in the morning." },
    { "type": "mc", "prompt": "Anna drinks hot ___ with milk.", "options": ["tea", "shirt", "hat", "shoe"], "explanation": "Tea is a hot drink. Some people drink it with milk." }
  ],
  "A1|vocabulary|6|mc|medium": [
    { "type": "mc", "prompt": "On a hot day, Leo eats a cold ___ in the park.", "options": ["ice cream", "shoe", "hat", "desk"], "explanation": "Ice cream is a cold food. People like to eat it on a hot day." },
    { "type": "mc", "prompt": "Mom cooks a big ___ and eats it with butter.", "options": ["potato", "shirt", "bag", "bus"], "explanation": "A potato is a vegetable. We can cook it and eat it with butter." },
    { "type": "mc", "prompt": "It is cold today, so Dad makes hot ___ for dinner.", "options": ["soup", "chair", "bag", "bus"], "explanation": "Soup is a hot food that is like a drink. Dad makes it when it is cold." },
    { "type": "mc", "prompt": "A ___ lives in the water, and many people eat it.", "options": ["fish", "dog", "cat", "horse"], "explanation": "A fish is an animal that lives in water. Many people eat fish." },
    { "type": "mc", "prompt": "Apples and bananas are ___.", "options": ["fruit", "shoes", "hats", "chairs"], "explanation": "Fruit is food that grows on plants and trees. An apple and a banana are fruit." },
    { "type": "mc", "prompt": "Mia drinks ___ juice every morning.", "options": ["orange", "chair", "pen", "book"], "targetType": "noun", "explanation": "An orange is a fruit that gives juice. Orange juice is a drink from this fruit." },
    { "type": "mc", "prompt": "Dad cooks ___ with rice for dinner.", "options": ["chicken", "desk", "hat", "window"], "explanation": "Chicken is a meat that comes from a bird. Dad cooks it with rice." },
    { "type": "mc", "prompt": "On Friday, the family eats a big hot ___ at home.", "options": ["pizza", "door", "bus", "bed"], "explanation": "Pizza is a food with cheese on it. The family eats a hot pizza." }
  ],
  "A1|vocabulary|6|mc|hard": [
    { "type": "mc", "prompt": "A ___ is a long orange vegetable.", "options": ["carrot", "potato", "bread", "soup"], "explanation": "A carrot is a long orange vegetable. A potato is brown." },
    { "type": "mc", "prompt": "Rice with chicken is my favorite ___.", "options": ["dish", "drink", "cup", "bottle"], "explanation": "A dish is food that you cook in a special way. Rice with chicken is a dish." },
    { "type": "mc", "prompt": "Mom puts salt and ___ on the egg.", "options": ["pepper", "juice", "coffee", "tea"], "explanation": "Pepper is something we put on food. We often use it with salt." },
    { "type": "mc", "prompt": "Breakfast, lunch and dinner are three ___ of the day.", "options": ["meals", "cups", "glasses", "days"], "target": "meal", "explanation": "A meal is food that you eat at one time. We have three meals a day." },
    { "type": "mc", "prompt": "Dad drinks his coffee from a big ___.", "options": ["cup", "pizza", "egg", "bread"], "explanation": "A cup is something you drink hot drinks from. Dad drinks his coffee from a cup." },
    { "type": "mc", "prompt": "Dad has a cold ___ with his friends at the restaurant.", "options": ["beer", "menu", "waiter", "bill"], "explanation": "Beer is a drink for adults. Dad has a cold one with his friends." },
    { "type": "mc", "prompt": "Potatoes and onions are ___.", "options": ["vegetables", "eggs", "drinks", "cakes"], "target": "vegetable", "explanation": "A vegetable is a plant that we eat. A potato and an onion are vegetables." },
    { "type": "mc", "prompt": "Anna puts a red ___ in her salad.", "options": ["tomato", "cup", "bottle", "glass"], "explanation": "A tomato is a red vegetable. Many people put tomatoes in a salad." }
  ],
  "A1|vocabulary|6|mc|veryhard": [
    { "type": "mc", "prompt": "Mia wants a ___ of cake.", "options": ["piece", "glass", "cup", "bottle"], "explanation": "A piece is one part of something. Mia wants one part of the cake." },
    { "type": "mc", "prompt": "Mom will ___ dinner in the kitchen.", "options": ["prepare", "drink", "add", "wash"], "explanation": "To prepare is to make something ready. Mom makes dinner ready in the kitchen." },
    { "type": "mc", "prompt": "Dad loves ___. He makes soup, pizza and cake at home.", "options": ["cooking", "window", "desk", "shoes"], "explanation": "Cooking is making food. Dad likes to make food at home." },
    { "type": "mc", "prompt": "Anna wants to ___ soup for the family tonight.", "options": ["cook", "drink", "cut", "wash"], "explanation": "To cook is to make food hot so you can eat it. Anna makes soup for the family." },
    { "type": "mc", "prompt": "Ali and his family eat dinner at a ___ on Saturday.", "options": ["restaurant", "bank", "museum", "waiter"], "explanation": "A restaurant is a place where you buy and eat a meal. Ali's family eats dinner there." },
    { "type": "mc", "prompt": "Fruit and vegetables are good for you. They are ___ food.", "options": ["healthy", "dirty", "busy", "quiet"], "explanation": "Healthy food is good for your body. Fruit and vegetables are healthy." },
    { "type": "mc", "prompt": "Doctors say a good ___ has a lot of fruit and vegetables.", "options": ["diet", "waiter", "bottle", "glass"], "explanation": "A diet is the food and drink that a person usually has. A good diet has fruit and vegetables." },
    { "type": "mc", "prompt": "Mom's soup is ___. Everybody wants more.", "options": ["delicious", "full", "dirty", "young"], "explanation": "Delicious means very good to eat. Everybody wants more of Mom's soup." }
  ],
  "A1|vocabulary|6|fill|easy": [
    { "type": "fill", "before": "Anna eats a big sandwich for", "after": "at school.", "answer": "lunch", "bank": ["lunch", "bed", "bus"], "explanation": "Lunch is the meal between breakfast and dinner. Anna eats it at school." },
    { "type": "fill", "before": "Grandmother comes, and we all eat", "after": "together tonight.", "answer": "dinner", "bank": ["dinner", "shoe", "hat"], "explanation": "Dinner is the main meal of the day. The family eats it together in the evening." },
    { "type": "fill", "before": "At the cafe, Ken orders", "after": "with milk and sugar.", "answer": "coffee", "bank": ["coffee", "desk", "door"], "explanation": "Coffee is a hot brown drink. Ken orders it with milk and sugar." },
    { "type": "fill", "before": "A baby drinks", "after": "from a bottle.", "answer": "milk", "bank": ["milk", "bed", "shoe"], "explanation": "Milk is a white drink from a cow. Babies drink milk." },
    { "type": "fill", "before": "Leo eats eggs and bread for", "after": "every day.", "answer": "breakfast", "bank": ["breakfast", "tree", "shirt"], "explanation": "Breakfast is the first meal of the day. Leo eats eggs and bread then." },
    { "type": "fill", "before": "Mia drinks apple", "after": "with her sandwich.", "answer": "juice", "bank": ["juice", "bed", "door"], "explanation": "Juice is a drink from fruit. Apple juice is a drink from apples." },
    { "type": "fill", "before": "A chicken makes", "after": "for us to eat.", "answer": "eggs", "bank": ["eggs", "shoes", "hats"], "target": "egg", "explanation": "An egg is a food that comes from a chicken. A chicken makes eggs." },
    { "type": "fill", "before": "Leo's friends bring a big", "after": "for his birthday.", "answer": "cake", "bank": ["cake", "bus", "desk"], "explanation": "A cake is a food that people eat on a birthday. His friends bring a big one." }
  ],
  "A1|vocabulary|6|fill|medium": [
    { "type": "fill", "before": "Pizza, rice and bread are all", "after": ".", "answer": "food", "bank": ["food", "desk", "bus"], "explanation": "Food is what people eat. Pizza, rice and bread are all food." },
    { "type": "fill", "before": "Ben's lunch is chicken, rice and a", "after": ".", "answer": "potato", "bank": ["potato", "hat", "desk"], "explanation": "A potato is a vegetable. Ben eats it with chicken and rice." },
    { "type": "fill", "before": "Anna is sick, so her mom makes", "after": "for her.", "answer": "soup", "bank": ["soup", "bag", "chair"], "explanation": "Soup is a hot food that is like a drink. Many people eat it when they are sick." },
    { "type": "fill", "before": "Mia puts", "after": "on her bread.", "answer": "butter", "bank": ["butter", "shoe", "hat"], "explanation": "Butter is a yellow food. People put it on bread." },
    { "type": "fill", "before": "Anna eats a lot of", "after": "like apples and oranges.", "answer": "fruit", "bank": ["fruit", "desks", "hats"], "explanation": "Fruit is food that grows on plants and trees. Apples and oranges are fruit." },
    { "type": "fill", "before": "Tom does not eat", "after": ". He eats only vegetables.", "answer": "meat", "bank": ["meat", "bus", "window"], "explanation": "Meat is the part of an animal that people eat. Tom eats only vegetables." },
    { "type": "fill", "before": "A sandwich with", "after": "and cheese is good for lunch.", "answer": "chicken", "bank": ["chicken", "door", "bed"], "explanation": "Chicken is the meat of a bird. It is good in a sandwich with cheese." },
    { "type": "fill", "before": "Mia is hungry, so she calls the restaurant and buys a", "after": ".", "answer": "pizza", "bank": ["pizza", "shirt", "bag"], "explanation": "Pizza is a food with cheese on it. Mia orders one from the restaurant." }
  ],
  "A1|vocabulary|6|fill|hard": [
    { "type": "fill", "before": "Ben buys a", "after": "of water at the shop.", "answer": "bottle", "bank": ["bottle", "piece", "menu", "meal"], "explanation": "A bottle is a tall thing for water or other drinks. Ben buys one at the shop." },
    { "type": "fill", "before": "Anna wants to try a new", "after": "at the restaurant. She looks at the menu.", "answer": "dish", "bank": ["dish", "waiter", "bottle", "key"], "explanation": "A dish is food that you cook in a special way. Anna looks at the menu to find a new one." },
    { "type": "fill", "before": "The salt and the", "after": "are on the table. You can put them on your food.", "answer": "pepper", "bank": ["pepper", "cup", "glass", "bottle"], "explanation": "Pepper is something we put on food, like salt." },
    { "type": "fill", "before": "Dad cuts two", "after": "and some carrots for the soup.", "answer": "onions", "bank": ["onions", "bottles", "cups", "glasses"], "target": "onion", "explanation": "An onion is a vegetable that people put in many dishes. Dad cuts two for the soup." },
    { "type": "fill", "before": "Mom and Dad have a glass of red", "after": "with dinner.", "answer": "wine", "bank": ["wine", "milk", "water", "coffee"], "explanation": "Wine is a drink for adults. It is often red or white." },
    { "type": "fill", "before": "Mia drinks a", "after": "of milk before bed.", "answer": "glass", "bank": ["glass", "piece", "pair", "waiter"], "explanation": "A glass is something you drink water or milk from." },
    { "type": "fill", "before": "Ken eats fruit and", "after": "every day for his health.", "answer": "vegetables", "bank": ["vegetables", "cups", "glasses", "bottles"], "target": "vegetable", "explanation": "A vegetable is a plant that people eat. Ken eats vegetables every day." },
    { "type": "fill", "before": "Anna puts some", "after": "in her coffee.", "answer": "sugar", "bank": ["sugar", "rice", "onion", "fish"], "explanation": "Sugar is something that we put in coffee or tea." }
  ],
  "A1|vocabulary|6|fill|veryhard": [
    { "type": "fill", "before": "Can I have one more", "after": "of pizza, please?", "answer": "piece", "bank": ["piece", "glass", "cup", "bottle"], "explanation": "A piece is one part of something. The speaker wants one more part of the pizza." },
    { "type": "fill", "before": "Anna puts milk and", "after": "in her coffee.", "answer": "cream", "bank": ["cream", "rice", "meat", "pizza"], "explanation": "Cream is a white food from milk. People often put it in coffee." },
    { "type": "fill", "before": "Ken is good at", "after": ". His pizza is delicious.", "answer": "cooking", "bank": ["cooking", "desk", "window", "key"], "explanation": "Cooking is making food ready to eat. Ken makes very good pizza." },
    { "type": "fill", "before": "At the restaurant, Ali wants to", "after": "a pizza.", "answer": "order", "bank": ["order", "drink", "add", "wake"], "targetType": "verb", "explanation": "To order is to ask for food in a restaurant. Ali wants to ask for a pizza." },
    { "type": "fill", "before": "The meal was big. Now Ben cannot eat more because he is", "after": ".", "answer": "full", "bank": ["full", "hungry", "delicious", "dirty"], "explanation": "Full means you cannot eat any more. Ben had a big meal." },
    { "type": "fill", "before": "The", "after": "brings the food to our table.", "answer": "waiter", "bank": ["waiter", "menu", "dish", "bottle"], "explanation": "A waiter is a person who brings food to your table in a restaurant." },
    { "type": "fill", "before": "Mia eats a lot of fruit and fish every day. This is her", "after": ".", "answer": "diet", "bank": ["diet", "cup", "bottle", "waiter"], "explanation": "A diet is the food and drink that a person usually has. Mia eats fruit and fish every day." },
    { "type": "fill", "before": "Ben wants to", "after": "some sugar to his coffee.", "answer": "add", "bank": ["add", "cut", "drink", "cook"], "explanation": "To add is to put one thing into another thing. Ben puts sugar into his coffee." }
  ],
  "A1|vocabulary|6|tf|easy": [
    { "type": "tf", "prompt": "Dinner is a meal that many people eat in the evening.", "answer": true, "target": "dinner", "explanation": "Yes. Dinner is the main meal of the day, and many people eat it in the evening." },
    { "type": "tf", "prompt": "People often eat bread with butter.", "answer": true, "target": "bread", "explanation": "Yes. Many people put butter on their bread." },
    { "type": "tf", "prompt": "Rice is a drink.", "answer": false, "target": "rice", "explanation": "No. Rice is a food. Water, milk and tea are drinks." },
    { "type": "tf", "prompt": "People need water to live.", "answer": true, "target": "water", "explanation": "Yes. Every person needs water." },
    { "type": "tf", "prompt": "Milk comes from a chicken.", "answer": false, "target": "milk", "explanation": "No. Milk comes from a cow. Eggs come from a chicken." },
    { "type": "tf", "prompt": "A banana is a blue fruit.", "answer": false, "target": "banana", "explanation": "No. A banana is a long yellow fruit." },
    { "type": "tf", "prompt": "Tea is a drink, and many people have it in the afternoon.", "answer": true, "target": "tea", "explanation": "Yes. Many people have a cup of tea in the afternoon." },
    { "type": "tf", "prompt": "Breakfast is the last meal of the day.", "answer": false, "target": "breakfast", "explanation": "No. Breakfast is the first meal of the day. Dinner is often the last meal." }
  ],
  "A1|vocabulary|6|tf|medium": [
    { "type": "tf", "prompt": "People and animals need food.", "answer": true, "target": "food", "explanation": "Yes. Food is what people and animals eat." },
    { "type": "tf", "prompt": "A sandwich has bread in it.", "answer": true, "target": "sandwich", "explanation": "Yes. A sandwich is two pieces of bread with food between them." },
    { "type": "tf", "prompt": "Ice cream is a hot food.", "answer": false, "target": "ice cream", "explanation": "No. Ice cream is a cold food." },
    { "type": "tf", "prompt": "Butter is a drink.", "answer": false, "target": "butter", "explanation": "No. Butter is a yellow food. People put it on bread." },
    { "type": "tf", "prompt": "Chocolate is a food that many people like.", "answer": true, "target": "chocolate", "explanation": "Yes. Many children and adults like chocolate." },
    { "type": "tf", "prompt": "A fish can walk on the road.", "answer": false, "target": "fish", "explanation": "No. A fish lives and swims in water." },
    { "type": "tf", "prompt": "Cheese comes from milk.", "answer": true, "target": "cheese", "explanation": "Yes. People make cheese from milk." },
    { "type": "tf", "prompt": "A salad is a hot drink.", "answer": false, "target": "salad", "explanation": "No. A salad is a cold food with vegetables." }
  ],
  "A1|vocabulary|6|tf|hard": [
    { "type": "tf", "prompt": "People can drink juice from a bottle.", "answer": true, "target": "bottle", "explanation": "Yes. A bottle is a tall thing for juice, water or milk." },
    { "type": "tf", "prompt": "People put onions in many dishes.", "answer": true, "target": "onion", "explanation": "Yes. An onion is a vegetable that cooks use a lot." },
    { "type": "tf", "prompt": "A carrot is a fruit.", "answer": false, "target": "carrot", "explanation": "No. A carrot is a vegetable. An apple is a fruit." },
    { "type": "tf", "prompt": "A meal is a place where you buy food.", "answer": false, "target": "meal", "explanation": "No. A meal is the food you eat at one time. A restaurant is a place where you buy food." },
    { "type": "tf", "prompt": "A menu is a list of the food at a restaurant.", "answer": true, "target": "menu", "explanation": "Yes. You read the menu before you order." },
    { "type": "tf", "prompt": "A glass is something you eat with.", "answer": false, "target": "glass", "explanation": "No. You drink from a glass." },
    { "type": "tf", "prompt": "Many people put salt on food.", "answer": true, "target": "salt", "explanation": "Yes. Many people put salt and pepper on food." },
    { "type": "tf", "prompt": "A tomato is blue.", "answer": false, "target": "tomato", "explanation": "No. A tomato is a red vegetable." }
  ],
  "A1|vocabulary|6|tf|veryhard": [
    { "type": "tf", "prompt": "Cream is a white food from milk.", "answer": true, "target": "cream", "explanation": "Yes. People put cream on cake or in coffee." },
    { "type": "tf", "prompt": "To prepare a salad is to make it ready.", "answer": true, "target": "prepare", "explanation": "Yes. To prepare is to make something ready." },
    { "type": "tf", "prompt": "You cook food to make it cold.", "answer": false, "target": "cook", "explanation": "No. You cook food to make it hot." },
    { "type": "tf", "prompt": "A restaurant is a room in your house where you sleep.", "answer": false, "target": "restaurant", "explanation": "No. A restaurant is a place where you buy and eat a meal. You sleep in a bedroom." },
    { "type": "tf", "prompt": "Delicious food is very good to eat.", "answer": true, "target": "delicious", "explanation": "Yes. Delicious means very good to eat." },
    { "type": "tf", "prompt": "When you are full, you want to eat more.", "answer": false, "target": "full", "explanation": "No. When you are full, you cannot eat any more." },
    { "type": "tf", "prompt": "In a restaurant, your order is the food you ask for.", "answer": true, "target": "order", "targetType": "noun", "explanation": "Yes. An order is the food or drink that a person asks for." },
    { "type": "tf", "prompt": "You cut bread to make it bigger.", "answer": false, "target": "cut", "explanation": "No. To cut is to make something into pieces. The pieces are smaller." }
  ],
  "A1|vocabulary|6|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "lunch", "right": "the meal many people eat at twelve or one o'clock" },
      { "left": "rice", "right": "small white food that people eat with chicken or fish" },
      { "left": "coffee", "right": "a hot drink that helps you wake up" },
      { "left": "milk", "right": "you can put it in tea, and people make butter and cheese from it" }
    ], "explanation": "Lunch is the meal many people eat at twelve or one o'clock. People eat rice with chicken, and coffee helps you wake up. You can put milk in tea, and people make butter and cheese from it." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dinner", "right": "the meal many people eat in the evening" },
      { "left": "bread", "right": "people eat it at breakfast, and it can be white or brown" },
      { "left": "water", "right": "you drink it, and it comes from the rain and from rivers" },
      { "left": "apple", "right": "a fruit that grows on a tree; you can make juice from it" }
    ], "explanation": "Dinner is the evening meal. People eat bread at breakfast, and you drink water. An apple grows on a tree." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "breakfast", "right": "you eat it when you wake up, before school or work" },
      { "left": "juice", "right": "you make it from apples or oranges, and you drink it" },
      { "left": "banana", "right": "a long fruit that is green at first and then yellow" },
      { "left": "cake", "right": "you make it with eggs and sugar" }
    ], "explanation": "You eat breakfast after you wake up. You make juice from fruit, and a banana is a long fruit. You make a cake with eggs and sugar." }
  ],
  "A1|vocabulary|6|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "ice cream", "right": "a cold food that children like in summer" },
      { "left": "potato", "right": "a vegetable that is brown, and you can cook it in many ways" },
      { "left": "soup", "right": "a hot food with a lot of water in it" },
      { "left": "butter", "right": "it comes from milk, and it is yellow" }
    ], "explanation": "Ice cream is a cold food. A potato is a brown vegetable, and soup is hot with a lot of water. Butter comes from milk." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "fish", "right": "an animal that swims in a river or in the ocean" },
      { "left": "fruit", "right": "food that grows on trees and plants, and you can make juice from it" },
      { "left": "chocolate", "right": "a brown food that many children like" },
      { "left": "meat", "right": "the part of an animal that people cook and eat, like chicken" }
    ], "explanation": "A fish swims in water. Fruit grows on trees and plants. Many children like chocolate, and meat comes from animals." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "orange", "right": "a fruit, and its color has the same name", "type": "noun" },
      { "left": "sandwich", "right": "a food for lunch: bread with meat or egg between two pieces" },
      { "left": "cheese", "right": "a yellow or white food that people put on pizza" },
      { "left": "salad", "right": "a cold food with tomatoes and other vegetables" }
    ], "explanation": "An orange is a fruit, and its color has the same name. A sandwich has meat or egg between two pieces of bread, and people put cheese on pizza. A salad is cold, with vegetables." }
  ],
  "A1|vocabulary|6|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "bottle", "right": "a tall thing for milk, juice or other drinks" },
      { "left": "carrot", "right": "an orange vegetable that people eat in a salad or soup" },
      { "left": "dish", "right": "what a restaurant has on its menu, for example pizza" },
      { "left": "pepper", "right": "it is black or white, and people put it on soup" }
    ], "explanation": "A bottle is a tall thing for drinks. A carrot is an orange vegetable, and a restaurant has many dishes on its menu. People put pepper on soup." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "meal", "right": "food that people eat at one time, often at the table with family" },
      { "left": "onion", "right": "a vegetable that can be white, yellow or red" },
      { "left": "wine", "right": "a red or white drink that adults have" },
      { "left": "salt", "right": "something white in a small bottle on the table" }
    ], "explanation": "A meal is the food that people eat at one time. An onion can be white, yellow or red. Wine is a red or white drink for adults, and people put salt on food." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "menu", "right": "you read it before you order food" },
      { "left": "cup", "right": "a small thing that you drink from, often with tea in it" },
      { "left": "beer", "right": "a cold yellow drink that some adults like" },
      { "left": "sugar", "right": "people eat too much of it, and it is in cake and ice cream" }
    ], "explanation": "You read a menu before you order. You drink from a cup. Beer is a cold drink for adults, and sugar is in cake and ice cream." }
  ],
  "A1|vocabulary|6|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "piece", "right": "a part that you cut or take from something bigger" },
      { "left": "cream", "right": "a food from milk that you can put in coffee" },
      { "left": "prepare", "right": "to get everything ready for a meal" },
      { "left": "order", "right": "to tell a waiter what food you want", "type": "verb" }
    ], "explanation": "A piece is a part that you cut from something bigger. Cream comes from milk. To prepare is to get ready, and to order is to tell a waiter what you want." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "cooking", "right": "making food in the kitchen, a hobby for many people" },
      { "left": "restaurant", "right": "a place outside your home where you pay for a meal" },
      { "left": "full", "right": "after a lot of food, you feel like this" },
      { "left": "healthy", "right": "food like fruit and vegetables is this" }
    ], "explanation": "Cooking is making food. A restaurant is a place to eat out. After a lot of food you feel full, and fruit and vegetables are healthy." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "cook", "right": "to make food hot in the kitchen" },
      { "left": "waiter", "right": "the person who brings your food in a restaurant" },
      { "left": "cut", "right": "to make bread or pizza into pieces" },
      { "left": "add", "right": "to put sugar into coffee" }
    ], "explanation": "You cook food in the kitchen. A waiter brings your food. To cut is to make something into pieces, and to add is to put one thing into another." }
  ]
});
