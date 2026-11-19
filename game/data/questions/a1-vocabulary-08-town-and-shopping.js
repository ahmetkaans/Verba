/* Questions: A1 Vocabulary, theme 08 Town and Shopping (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|8|mc|easy": [
    { "type": "mc", "prompt": "Mom buys milk, bread and apples at the ___.", "options": ["supermarket", "bed", "hat", "tree"], "explanation": "A supermarket is a very big store with food. Mom buys milk, bread and apples there." },
    { "type": "mc", "prompt": "Ali has no ___, so he cannot buy a new phone.", "options": ["money", "door", "shoe", "chair"], "explanation": "Money is what you use to pay for things. Without it, Ali cannot buy a phone." },
    { "type": "mc", "prompt": "Anna and her mom sleep in a ___ in London.", "options": ["hotel", "desk", "shirt", "key"], "explanation": "A hotel is a building where people sleep when they travel." },
    { "type": "mc", "prompt": "The children play football in the ___ after school.", "options": ["park", "bag", "door", "bed"], "targetType": "noun", "explanation": "A park is a green place in a town. Children play there." },
    { "type": "mc", "prompt": "Many cars and buses are on the ___ near my house.", "options": ["street", "window", "chair", "tree"], "explanation": "A street is a road in a town, with houses or shops next to it." },
    { "type": "mc", "prompt": "Doctors and nurses work in a ___.", "options": ["hospital", "pen", "table", "hat"], "explanation": "A hospital is a building where doctors and nurses help sick people." },
    { "type": "mc", "prompt": "Dad buys apples and bananas at the ___ on Saturday.", "options": ["market", "door", "shirt", "bus"], "explanation": "At a market, people sell food and other things. Dad buys fruit there." },
    { "type": "mc", "prompt": "Ben goes to the ___ to buy new shoes.", "options": ["store", "tree", "book", "key"], "explanation": "A store is a place where you buy things. Ben buys his shoes there." }
  ],
  "A1|vocabulary|8|mc|medium": [
    { "type": "mc", "prompt": "Mary likes ___ because she loves to buy new clothes.", "options": ["shopping", "cooking", "reading", "swimming"], "explanation": "Shopping is buying things in stores. Mary loves to buy clothes, so she likes it." },
    { "type": "mc", "prompt": "Leo and his friends play basketball in the ___ after school.", "options": ["gym", "bank", "hospital", "library"], "explanation": "A gym is a big room or building for sports. You can play basketball there." },
    { "type": "mc", "prompt": "There are about a hundred stores in the big ___.", "options": ["mall", "museum", "hospital", "hotel"], "explanation": "A mall is a big building with many stores." },
    { "type": "mc", "prompt": "Tom's dad works in the ___. It has many desks and computers.", "options": ["office", "gym", "park", "museum"], "explanation": "An office is a place where people work at desks." },
    { "type": "mc", "prompt": "Anna keeps her money in the ___.", "options": ["bank", "park", "gym", "library"], "explanation": "A bank is a place where people keep their money." },
    { "type": "mc", "prompt": "Ken and Yuki look at very old things in the ___.", "options": ["museum", "hospital", "bank", "mall"], "explanation": "A museum is a building where people look at old and special things." },
    { "type": "mc", "prompt": "Mia takes three books from the ___ and reads them at home.", "options": ["library", "park", "bank", "hotel"], "explanation": "A library is a place where you can read books and take them home." },
    { "type": "mc", "prompt": "Tom lost his bag on the bus. He asks the ___ for help.", "options": ["police", "museum", "hotel", "mall"], "explanation": "The police help people in the street. Tom asks them for help with his bag." }
  ],
  "A1|vocabulary|8|mc|hard": [
    { "type": "mc", "prompt": "Going into the park is ___, so you do not pay.", "options": ["free", "expensive", "big", "old"], "targetType": "adjective", "explanation": "Free means that you do not pay anything. Going into this park costs nothing." },
    { "type": "mc", "prompt": "A cup of coffee ___ three dollars in this cafe.", "options": ["costs", "sells", "builds", "plays"], "target": "cost", "targetType": "verb", "explanation": "To cost means to have a price. The coffee has a price of three dollars." },
    { "type": "mc", "prompt": "Look at the ___ on the book. It says 12 dollars.", "options": ["price", "customer", "change", "hotel"], "explanation": "The price is the money you must pay for something. This book is 12 dollars." },
    { "type": "mc", "prompt": "Ali gives the store 10 dollars for a 7-dollar book. The store gives him 3 dollars back. That money is his ___.", "options": ["change", "customer", "hotel", "library"], "targetType": "noun", "explanation": "Change is the money that a store gives back when you pay too much." },
    { "type": "mc", "prompt": "A bottle of water is two ___ at this store.", "options": ["dollars", "prices", "stores", "days"], "target": "dollar", "explanation": "A dollar is money. We pay for a bottle of water with money." },
    { "type": "mc", "prompt": "A person who sells things works in a store. A person who buys things is the ___.", "options": ["customer", "price", "change", "dollar"], "explanation": "A customer is a person who buys things in a store." },
    { "type": "mc", "prompt": "Ali does not want his old bike. He wants to ___ it for 50 dollars.", "options": ["sell", "pay", "wash", "build"], "explanation": "To sell is to give something to a person who pays for it. Ali wants 50 dollars for his bike." },
    { "type": "mc", "prompt": "The pen is one dollar and fifty ___.", "options": ["cents", "prices", "streets", "years"], "target": "cent", "explanation": "A cent is very little money. One hundred cents make one dollar." }
  ],
  "A1|vocabulary|8|mc|veryhard": [
    { "type": "mc", "prompt": "A store sells many ___, for example shoes, bags and hats.", "options": ["products", "buildings", "streets", "prices"], "target": "product", "explanation": "Products are things that people make or grow and then sell. Shoes, bags and hats are products." },
    { "type": "mc", "prompt": "I live in a quiet ___ with a park and two small shops.", "options": ["area", "hotel", "library", "bank"], "explanation": "An area is a part of a town or a city. This one has a park and two small shops." },
    { "type": "mc", "prompt": "The museum is in the ___ of the city, near all the stores.", "options": ["center", "hotel", "bank", "hospital"], "explanation": "The center is the busy part of a city, with many stores. The museum is there." },
    { "type": "mc", "prompt": "The store brings Mom's ___ to her house: two coats and one hat.", "options": ["order", "area", "euro", "building"], "targetType": "noun", "explanation": "An order is what you ask a store to bring you. Mom asked for two coats and one hat." },
    { "type": "mc", "prompt": "There are many children in my ___. They play on the street after school.", "options": ["neighborhood", "bank", "hotel", "hospital"], "explanation": "A neighborhood is a part of a town where people live near each other." },
    { "type": "mc", "prompt": "A bag in London costs twenty ___, not dollars.", "options": ["pounds", "prices", "streets", "hours"], "target": "pound", "explanation": "People in London use pounds. A pound is the money of that country." },
    { "type": "mc", "prompt": "That building is new, and it looks very ___.", "options": ["modern", "main", "free", "slow"], "explanation": "Modern means new and not old. A new building often looks modern." },
    { "type": "mc", "prompt": "The money in Paris and Berlin is the ___.", "options": ["euro", "library", "street", "window"], "explanation": "The euro is the money that people use in Paris, Berlin and many other cities." }
  ],
  "A1|vocabulary|8|fill|easy": [
    { "type": "fill", "before": "Tokyo is a very big", "after": "with many people.", "answer": "city", "bank": ["city", "window", "shoe"], "explanation": "A city is a very big town. Tokyo has many people." },
    { "type": "fill", "before": "Sam has twenty dollars in his hand. That is his", "after": ".", "answer": "money", "bank": ["money", "shoe", "door"], "explanation": "Money is what you use to pay for things. Twenty dollars is money." },
    { "type": "fill", "before": "Lisa walks with her dog in the", "after": "every morning.", "answer": "park", "bank": ["park", "cafe", "hospital"], "targetType": "noun", "explanation": "A park is a green place in a town. People walk with their dogs there." },
    { "type": "fill", "before": "Our", "after": "is small. There are only two stores and one school.", "answer": "town", "bank": ["town", "desk", "bus"], "explanation": "A town is a place with houses, stores and schools. A small town has only a few." },
    { "type": "fill", "before": "Tom needs a new book. He goes to a", "after": ".", "answer": "shop", "bank": ["shop", "park", "hotel"], "targetType": "noun", "explanation": "A shop is a place where people sell things. Tom can buy a book there." },
    { "type": "fill", "before": "Emma and Mia drink coffee and talk in a", "after": ".", "answer": "cafe", "bank": ["cafe", "window", "door"], "explanation": "A cafe is a small place where you can drink coffee and eat a little." },
    { "type": "fill", "before": "Many people sell food and clothes at the", "after": "on Sunday.", "answer": "market", "bank": ["market", "desk", "chair"], "explanation": "At a market, many people sell food and other things." },
    { "type": "fill", "before": "The car is fast. It goes down the", "after": ".", "answer": "road", "bank": ["road", "tree", "hat"], "explanation": "A road is a long way for cars and buses." }
  ],
  "A1|vocabulary|8|fill|medium": [
    { "type": "fill", "before": "Ben hates", "after": "because he does not like to look at clothes.", "answer": "shopping", "bank": ["shopping", "swimming", "cooking"], "explanation": "Shopping is buying things in stores. Ben does not like to look at clothes, so he hates it." },
    { "type": "fill", "before": "After work, Tom meets his friends at a", "after": "and has a drink.", "answer": "bar", "bank": ["bar", "desk", "door"], "explanation": "A bar is a place where adults have a drink and talk with friends." },
    { "type": "fill", "before": "Emma buys shoes, a bag and a coat in one big", "after": ".", "answer": "mall", "bank": ["mall", "hospital", "library"], "explanation": "A mall is a big building with many stores. Emma buys three things in one place." },
    { "type": "fill", "before": "My school is a big, old", "after": "with a red door.", "answer": "building", "bank": ["building", "road", "town"], "explanation": "A building has walls, windows and doors, like a school or a house." },
    { "type": "fill", "before": "Leo swims in the", "after": "every Saturday.", "answer": "pool", "bank": ["pool", "office", "bank"], "explanation": "A pool is a place with water where people swim." },
    { "type": "fill", "before": "Ali takes the train from the", "after": "in the morning.", "answer": "station", "bank": ["station", "library", "gym"], "explanation": "A station is a place where trains and buses stop." },
    { "type": "fill", "before": "It is very quiet in the", "after": ". Everybody reads.", "answer": "library", "bank": ["library", "mall", "gym"], "explanation": "A library is a quiet place where people read." },
    { "type": "fill", "before": "Ken plays tennis with his friends at the sports", "after": ".", "answer": "club", "bank": ["club", "bank", "library"], "explanation": "A club is a group of people who meet to do a sport together, or the place where they meet." }
  ],
  "A1|vocabulary|8|fill|hard": [
    { "type": "fill", "before": "On Sundays, the museum is", "after": ", so Maria does not pay.", "answer": "free", "bank": ["free", "expensive", "modern", "tall"], "targetType": "adjective", "explanation": "Free means that you do not pay. The museum costs nothing on Sundays." },
    { "type": "fill", "before": "The shoes are only five dollars. They are very", "after": ".", "answer": "cheap", "bank": ["cheap", "expensive", "free", "slow"], "explanation": "Cheap means that something does not cost much. Five dollars for shoes is cheap." },
    { "type": "fill", "before": "What is the", "after": "of this hat? Is it ten dollars?", "answer": "price", "bank": ["price", "street", "town", "market"], "explanation": "The price is how much money you must pay for something." },
    { "type": "fill", "before": "The coat is 500 dollars. That is very", "after": ".", "answer": "expensive", "bank": ["expensive", "cheap", "free", "tall"], "explanation": "Expensive means that you need a lot of money to buy something." },
    { "type": "fill", "before": "At the restaurant, Dad says, \"Can I have the", "after": ", please?\"", "answer": "bill", "bank": ["bill", "street", "town", "shoe"], "explanation": "The bill is a paper that shows how much money you must pay at a restaurant." },
    { "type": "fill", "before": "Ali has no money in his hand, so he pays with his", "after": ".", "answer": "card", "bank": ["card", "market", "shoe", "tree"], "explanation": "A card is a small thing that you can use to pay." },
    { "type": "fill", "before": "That store", "after": "shoes, bags and hats.", "answer": "sells", "bank": ["sells", "builds", "plays", "drinks"], "target": "sell", "targetType": "verb", "explanation": "To sell is to give something to a person who pays for it. That store sells shoes, bags and hats." },
    { "type": "fill", "before": "Anna", "after": "twenty dollars on a new bag.", "answer": "spends", "bank": ["spends", "sells", "costs", "reads"], "target": "spend", "targetType": "verb", "explanation": "To spend is to use your money to buy things. Anna uses twenty dollars for a bag." }
  ],
  "A1|vocabulary|8|fill|veryhard": [
    { "type": "fill", "before": "This", "after": "of the town has a school, a park and two banks.", "answer": "area", "bank": ["area", "hotel", "library", "door"], "explanation": "An area is a part of a town or a city." },
    { "type": "fill", "before": "They want to", "after": "a new school next to the park.", "answer": "build", "bank": ["build", "wash", "drink", "sleep"], "explanation": "To build is to make a house, a school or a road." },
    { "type": "fill", "before": "Many stores and cafes are in the city", "after": ".", "answer": "center", "bank": ["center", "price", "bill", "bus"], "explanation": "The center is the busy part of a city, with many stores and cafes." },
    { "type": "fill", "before": "Mia knows everybody in her", "after": ". They all live near her house.", "answer": "neighborhood", "bank": ["neighborhood", "hotel", "bank", "tree"], "explanation": "A neighborhood is a part of a town where people live near each other." },
    { "type": "fill", "before": "We buy our bread at the", "after": "store near our home.", "answer": "local", "bank": ["local", "tired", "young", "hungry"], "explanation": "Local means from the area near you. The store is near the family's home." },
    { "type": "fill", "before": "The", "after": "street has a bank, a library and many stores.", "answer": "main", "bank": ["main", "slow", "young", "hungry"], "explanation": "Main means the biggest or most important. The main street has the most places." },
    { "type": "fill", "before": "Anna lives in a very", "after": "apartment with big windows.", "answer": "modern", "bank": ["modern", "hungry", "tired", "slow"], "explanation": "Modern means new, not old. Big windows make an apartment look modern." },
    { "type": "fill", "before": "The price of the hotel room", "after": "breakfast.", "answer": "includes", "bank": ["includes", "sells", "plays", "drinks"], "target": "include", "targetType": "verb", "explanation": "To include is to have something as a part. The price has breakfast in it." }
  ],
  "A1|vocabulary|8|tf|easy": [
    { "type": "tf", "prompt": "A supermarket is bigger than a shop with one room.", "answer": true, "target": "supermarket", "explanation": "Yes. A supermarket is a very big store. A shop with one room is much smaller." },
    { "type": "tf", "prompt": "A city has only five houses.", "answer": false, "target": "city", "explanation": "No. A city is very big. It has many houses and many people." },
    { "type": "tf", "prompt": "A town is smaller than a house.", "answer": false, "target": "town", "explanation": "No. A town has many houses, stores and streets." },
    { "type": "tf", "prompt": "A hotel has many rooms for people who travel.", "answer": true, "target": "hotel", "explanation": "Yes. People who travel pay for a room in a hotel." },
    { "type": "tf", "prompt": "When you shop, you buy things.", "answer": true, "target": "shop", "targetType": "verb", "explanation": "Yes. To shop is to buy things in stores." },
    { "type": "tf", "prompt": "You buy shoes in a restaurant.", "answer": false, "target": "restaurant", "explanation": "No. You buy and eat a meal in a restaurant. You buy shoes in a store." },
    { "type": "tf", "prompt": "A store is a place where you sleep at night.", "answer": false, "target": "store", "explanation": "No. A store is a place where you buy things. You sleep in a bed." },
    { "type": "tf", "prompt": "You can see houses and stores on a street.", "answer": true, "target": "street", "explanation": "Yes. A street is a road in a town, with houses or stores next to it." }
  ],
  "A1|vocabulary|8|tf|medium": [
    { "type": "tf", "prompt": "A bar is a place where adults can have a drink.", "answer": true, "target": "bar", "explanation": "Yes. Adults go to a bar to have a drink and talk with friends." },
    { "type": "tf", "prompt": "You can do exercise in a gym.", "answer": true, "target": "gym", "explanation": "Yes. A gym is a big room or building where people do exercise and play sports." },
    { "type": "tf", "prompt": "An office is a place with beds for sleeping.", "answer": false, "target": "office", "explanation": "No. People work at desks in an office. They sleep in beds at home or in a hotel." },
    { "type": "tf", "prompt": "A bank is a place where people buy bread and milk.", "answer": false, "target": "bank", "explanation": "No. A bank is a place where people keep their money. You buy bread and milk in a store." },
    { "type": "tf", "prompt": "A house and a school are both buildings.", "answer": true, "target": "building", "explanation": "Yes. A building has walls, windows and doors, like a house or a school." },
    { "type": "tf", "prompt": "You go to a theater to buy shoes.", "answer": false, "target": "theater", "explanation": "No. In a theater, people watch a play or a movie. You buy shoes in a store." },
    { "type": "tf", "prompt": "You call the police when you are hungry.", "answer": false, "target": "police", "explanation": "No. You call the police when you need help in the street. You eat when you are hungry." },
    { "type": "tf", "prompt": "A pool is a place with water in it.", "answer": true, "target": "pool", "explanation": "Yes. A pool has water in it, and people swim there." }
  ],
  "A1|vocabulary|8|tf|hard": [
    { "type": "tf", "prompt": "A cheap book costs a lot of money.", "answer": false, "target": "cheap", "explanation": "No. A cheap book does not cost much. A book that costs a lot of money is expensive." },
    { "type": "tf", "prompt": "The cost of a bike is the money you pay for it.", "answer": true, "target": "cost", "targetType": "noun", "explanation": "Yes. The cost of something is the money you must pay for it." },
    { "type": "tf", "prompt": "In New York, people use dollars.", "answer": true, "target": "dollar", "explanation": "Yes. A dollar is the money that people use in New York." },
    { "type": "tf", "prompt": "A pen that costs one dollar is very expensive.", "answer": false, "target": "expensive", "explanation": "No. One dollar is not much money for a pen. A pen like that is cheap." },
    { "type": "tf", "prompt": "If you change your shirt, you put on the same shirt.", "answer": false, "target": "change", "targetType": "verb", "explanation": "No. To change your shirt is to put on a different one." },
    { "type": "tf", "prompt": "In a restaurant, the bill shows how much money you pay.", "answer": true, "target": "bill", "explanation": "Yes. The bill is a paper with the money you must pay." },
    { "type": "tf", "prompt": "When you pay, you give money to a store.", "answer": true, "target": "pay", "explanation": "Yes. To pay is to give money when you buy something." },
    { "type": "tf", "prompt": "One cent is more than one dollar.", "answer": false, "target": "cent", "explanation": "No. One hundred cents make one dollar, so one cent is very little money." }
  ],
  "A1|vocabulary|8|tf|veryhard": [
    { "type": "tf", "prompt": "Shoes and bread are products that people sell.", "answer": true, "target": "product", "explanation": "Yes. A product is something that people make or grow and then sell." },
    { "type": "tf", "prompt": "An area is a part of a city or a town.", "answer": true, "target": "area", "explanation": "Yes. An area is a part of a place, like a city or a town." },
    { "type": "tf", "prompt": "To build a house, you only need a pen and a book.", "answer": false, "target": "build", "explanation": "No. To build a house, you need many other things. A pen and a book are not enough." },
    { "type": "tf", "prompt": "A neighborhood is one small room in a house.", "answer": false, "target": "neighborhood", "explanation": "No. A neighborhood is a part of a town where people live near each other." },
    { "type": "tf", "prompt": "If you order a book, a store brings it to you.", "answer": true, "target": "order", "targetType": "verb", "explanation": "Yes. To order something is to ask a store to bring it to you." },
    { "type": "tf", "prompt": "The main street of a town is its smallest street.", "answer": false, "target": "main", "explanation": "No. Main means the biggest or most important. The main street is often big." },
    { "type": "tf", "prompt": "An extra bed in a room is the only bed there.", "answer": false, "target": "extra", "explanation": "No. Extra means one more. An extra bed is one more bed, not the only bed." },
    { "type": "tf", "prompt": "People in Paris and Berlin use the euro.", "answer": true, "target": "euro", "explanation": "Yes. The euro is the money that people use in Paris, Berlin and many other cities." }
  ],
  "A1|vocabulary|8|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "supermarket", "right": "a very big place where you buy food and many other things" },
      { "left": "city", "right": "a very big place where millions of people live and work" },
      { "left": "money", "right": "what you give when you buy something" },
      { "left": "hotel", "right": "a big building with many rooms that you pay for when you travel" }
    ], "explanation": "You buy food in a supermarket. A city is very big. You give money when you buy something, and you sleep in a hotel when you travel." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "park", "right": "to stop your car and leave it, then go to a store", "type": "verb" },
      { "left": "town", "right": "a place where many families live and go to school, smaller than a city", "type": "noun" },
      { "left": "street", "right": "a way where cars drive and people walk, with houses and stores next to it" },
      { "left": "cafe", "right": "you sit there with a friend to have a coffee or a cake" }
    ], "explanation": "To park is to stop your car and leave it. Many families live in a town. A street has houses and stores next to it, and a cafe is a small place for coffee." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "shop", "right": "a small place where you can buy a coat or a pair of shoes", "type": "noun" },
      { "left": "hospital", "right": "a building with many rooms and beds for people who are sick" },
      { "left": "restaurant", "right": "a place where you sit and eat a meal that a person brings you" },
      { "left": "road", "right": "the long way that cars and buses drive on between two places" }
    ], "explanation": "A shop sells things. Doctors and nurses work in a hospital. You eat a meal in a restaurant, and cars and buses go on a road." }
  ],
  "A1|vocabulary|8|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "office", "right": "where people go to do their job at a desk" },
      { "left": "bar", "right": "a place where adults go in the evening to have a beer or a glass of wine" },
      { "left": "gym", "right": "you go there after work or school to get strong with other people" },
      { "left": "mall", "right": "one big place with many stores, where you can also eat and drink" }
    ], "explanation": "People do their job at a desk in an office. Adults have a drink in a bar. People get strong in a gym, and a mall has many stores." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "shopping", "right": "what you do on Saturday when you go to many stores to find a new coat" },
      { "left": "bank", "right": "a place where you can get money with your card" },
      { "left": "pool", "right": "a place at a hotel or a gym with water for swimming" },
      { "left": "museum", "right": "paintings and old things are shown there, and children often visit it with their school" }
    ], "explanation": "Shopping is going to many stores. You can get money at a bank and swim in a pool. A museum shows paintings and old things." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "building", "right": "the word for a house, a school or an office" },
      { "left": "station", "right": "where you wait for a train or a bus" },
      { "left": "theater", "right": "a place where you pay to sit and watch a play or a movie" },
      { "left": "club", "right": "a place where friends meet to do a sport or play music together" }
    ], "explanation": "A house, a school and an office are all buildings. You wait for a train at a station. You pay to sit in a theater and watch a play, and friends meet in a club." }
  ],
  "A1|vocabulary|8|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "customer", "right": "a person that a worker in a store helps" },
      { "left": "cheap", "right": "not asking for much money" },
      { "left": "cost", "right": "the money that you give for a thing", "type": "noun" },
      { "left": "change", "right": "to make something become new or not the same", "type": "verb" }
    ], "explanation": "A customer is helped by a worker in a store. Cheap things do not ask for much money. The cost is the money you give, and to change is to make something not the same." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "price", "right": "the number you see on a thing in a store, like 5 dollars" },
      { "left": "expensive", "right": "it takes a lot of your money to get it" },
      { "left": "bill", "right": "a paper you get at the end of a meal that shows how much money to give" },
      { "left": "pay", "right": "to hand over your money when you finish buying" }
    ], "explanation": "The price is the number on a thing in a store. Expensive things need a lot of money. The bill comes at the end of a meal, and to pay is to give money." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dollar", "right": "what a person in New York pays with, and 100 cents make one" },
      { "left": "free", "right": "you can have it without giving any money" },
      { "left": "card", "right": "a small thing from your bank that you show in a store to pay" },
      { "left": "spend", "right": "to give your money away for things that you buy" }
    ], "explanation": "A person in New York pays with dollars. A free thing needs no money. You show a card in a store, and to spend is to give your money away for things." }
  ],
  "A1|vocabulary|8|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "product", "right": "something a store sells, like shoes or a bag" },
      { "left": "build", "right": "to make a new school or a new house, a little at a time" },
      { "left": "center", "right": "the part of a city where most stores, cafes and offices are" },
      { "left": "order", "right": "the things you ask a store or a restaurant to bring you", "type": "noun" }
    ], "explanation": "A product is something people make and sell. To build is to make a new house. The center is where most stores are, and an order is the food that you ask for." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "local", "right": "of the place where you live, not far away" },
      { "left": "pound", "right": "what a person in London uses to pay in a store" },
      { "left": "extra", "right": "one more of something that you have now" },
      { "left": "include", "right": "to have something as one of its parts" }
    ], "explanation": "Local means of the place where you live. A pound is what people in London pay with. Extra means one more, and to include is to have something as one of its parts." }
  ]
});
