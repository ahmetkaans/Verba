/* Questions: A1 Vocabulary, theme 12 Travel and the World (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|12|mc|easy": [
    { "type": "mc", "prompt": "The train stops at the ___, and people get on.", "options": ["station", "bank", "school", "kitchen"], "explanation": "A station is a place where trains and buses stop. People wait there and get on." },
    { "type": "mc", "prompt": "France, Italy and Japan are all ___.", "options": ["countries", "bananas", "doors", "shirts"], "target": "country", "explanation": "France, Italy and Japan are countries. Each country has its own name and its own people." },
    { "type": "mc", "prompt": "Ali has no car, so he takes a ___ to the airport.", "options": ["taxi", "chair", "shoe", "bag"], "explanation": "A taxi is a car with a driver. You pay him for the trip." },
    { "type": "mc", "prompt": "A ___ is long, and it goes from station to station.", "options": ["train", "hat", "bag", "door"], "explanation": "A train is long, and it carries many people from town to town." },
    { "type": "mc", "prompt": "My dad drives a red ___ to work.", "options": ["car", "door", "hat", "cup"], "explanation": "A car is a thing that people drive on the road. Dad drives his car to work." },
    { "type": "mc", "prompt": "We go across the water in a small ___.", "options": ["boat", "chair", "shoe", "door"], "explanation": "A boat carries people on the water." },
    { "type": "mc", "prompt": "A ___ takes people from one country to another in a few hours.", "options": ["plane", "chair", "shoe", "table"], "explanation": "A plane flies in the air and carries many people. It is fast." },
    { "type": "mc", "prompt": "Cars and buses drive on the ___ in front of our house.", "options": ["road", "table", "bed", "cup"], "explanation": "A road is a long way for cars and buses." }
  ],
  "A1|vocabulary|12|mc|medium": [
    { "type": "mc", "prompt": "At the movie theater, we buy a ___ before we go in.", "options": ["ticket", "table", "bed", "door"], "explanation": "A ticket is a small paper that you buy. It lets you go in or get on." },
    { "type": "mc", "prompt": "Anna likes to ___ to new countries by plane.", "options": ["travel", "sing", "cook", "wait"], "targetType": "verb", "explanation": "To travel means to go from one place to another, often far." },
    { "type": "mc", "prompt": "We have a ___ to the mountains on Saturday and come back on Sunday.", "options": ["trip", "cup", "shoe", "door"], "explanation": "A trip is when you go to a place and then come back." },
    { "type": "mc", "prompt": "Ken sits in the sun on the ___ and reads a book.", "options": ["beach", "bank", "school", "kitchen"], "explanation": "A beach is land next to the water. People sit in the sun there." },
    { "type": "mc", "prompt": "The ___ of the bus stops at every station.", "options": ["driver", "teacher", "doctor", "singer"], "explanation": "A driver is a person who drives a bus, a car or a taxi." },
    { "type": "mc", "prompt": "Ben and his wife stay in a hotel on the ___ in Greece.", "options": ["island", "bus", "tree", "hat"], "explanation": "An island is land with water all around it. Many people go to an island on vacation." },
    { "type": "mc", "prompt": "Ali learns to ___ a car with his father.", "options": ["drive", "sing", "cook", "wait"], "explanation": "To drive means to make a car or a bus go." },
    { "type": "mc", "prompt": "The ___ from Paris to Rome takes two hours by plane.", "options": ["flight", "kitchen", "shoe", "hat"], "explanation": "A flight is a trip by plane." }
  ],
  "A1|vocabulary|12|mc|hard": [
    { "type": "mc", "prompt": "Ali gets to the station at 9:05, but the train leaves at 9:00. He will ___ it.", "options": ["miss", "wash", "cook", "carry"], "explanation": "To miss a train means to come too late for it." },
    { "type": "mc", "prompt": "The sun comes up in the ___ in the morning.", "options": ["east", "west", "north", "south"], "targetType": "noun", "explanation": "The sun comes up in the east and goes down in the west." },
    { "type": "mc", "prompt": "On a map, up is north and down is ___.", "options": ["south", "east", "west", "right"], "targetType": "noun", "explanation": "On a map, up is north and down is south." },
    { "type": "mc", "prompt": "Anna writes with her ___ hand, but her brother uses his left hand.", "options": ["right", "quick", "slow", "east"], "targetType": "adjective", "explanation": "Most people write with their right hand. Her brother uses the other hand, the left hand." },
    { "type": "mc", "prompt": "Tom and Anna ___ their vacation. They want to go to Italy.", "options": ["plan", "carry", "follow", "miss"], "targetType": "verb", "explanation": "To plan means to think about what you will do and decide." },
    { "type": "mc", "prompt": "Can you ___ my bag, please? It is very big.", "options": ["carry", "sing", "cook", "miss"], "explanation": "To carry means to take something with you in your hands." },
    { "type": "mc", "prompt": "Canada is in the ___ of America, above the USA.", "options": ["north", "east", "west", "right"], "targetType": "noun", "explanation": "Canada is above the USA on a map. It is in the north." },
    { "type": "mc", "prompt": "Walk behind me and ___ me to the station.", "options": ["follow", "plan", "wash", "cook"], "explanation": "To follow means to go behind someone." }
  ],
  "A1|vocabulary|12|mc|veryhard": [
    { "type": "mc", "prompt": "Anna speaks three ___: English, Spanish and French.", "options": ["languages", "countries", "cities", "trips"], "target": "language", "explanation": "English, Spanish and French are languages. A language is the words that people in a country speak and write." },
    { "type": "mc", "prompt": "The hotel has many ___ who take photos of the city.", "options": ["tourists", "taxis", "tickets", "airports"], "target": "tourist", "explanation": "Tourists are people who visit a place on vacation. They often take photos." },
    { "type": "mc", "prompt": "We stay in Rome for a week, and then we ___ to London.", "options": ["return", "cook", "sing", "sleep"], "targetType": "verb", "explanation": "To return means to go back to a place." },
    { "type": "mc", "prompt": "Food, music and clothes are part of the ___ of a country.", "options": ["culture", "weather", "ocean", "flight"], "explanation": "The culture of a country is its food, its music and its way of life." },
    { "type": "mc", "prompt": "Two ___ are at our door: they want to see my mother.", "options": ["visitors", "trucks", "trains", "tickets"], "target": "visitor", "explanation": "A visitor is a person who comes to see you." },
    { "type": "mc", "prompt": "Our train leaves at nine, and it ___ in Paris at 12:00.", "options": ["arrives", "sings", "cooks", "sleeps"], "target": "arrive", "explanation": "To arrive means to get to a place. The train gets to Paris at noon." },
    { "type": "mc", "prompt": "You must show your ___ at the airport when you go to another country.", "options": ["passport", "map", "bicycle", "plane"], "explanation": "A passport is a small book with your photo. You show it when you go to another country." },
    { "type": "mc", "prompt": "In July, Ben has two weeks of ___ at the beach.", "options": ["vacation", "hotel", "flight", "bicycle"], "explanation": "A vacation is a time when you do not work or go to school. Many people go to a beach." }
  ],
  "A1|vocabulary|12|fill|easy": [
    { "type": "fill", "before": "Many people wait at the", "after": "for the next train.", "answer": "station", "bank": ["station", "pen", "bed"], "explanation": "A station is a place where trains and buses stop." },
    { "type": "fill", "before": "Planes go up and come down at the", "after": ".", "answer": "airport", "bank": ["airport", "school", "bank"], "explanation": "An airport is a place where planes go up and come down." },
    { "type": "fill", "before": "A", "after": "has a driver, and you pay him at the end.", "answer": "taxi", "bank": ["taxi", "hat", "bag"], "explanation": "A taxi is a car with a driver. You pay for the trip." },
    { "type": "fill", "before": "Many children go to school by", "after": ".", "answer": "bus", "bank": ["bus", "door", "cup"], "explanation": "A bus is a big car for many people. Many children take it to school." },
    { "type": "fill", "before": "We sleep in a", "after": "when we visit a new city.", "answer": "hotel", "bank": ["hotel", "river", "pen"], "explanation": "A hotel is a building where people sleep when they travel." },
    { "type": "fill", "before": "London, Paris and Tokyo are big", "after": "with many people.", "answer": "cities", "bank": ["cities", "doors", "cups"], "target": "city", "explanation": "A city is a very big town. London, Paris and Tokyo are cities." },
    { "type": "fill", "before": "A", "after": "flies from one country to another.", "answer": "plane", "bank": ["plane", "bus", "car"], "explanation": "A plane flies in the air. A bus and a car go on the road." },
    { "type": "fill", "before": "There are many countries in the", "after": ".", "answer": "world", "bank": ["world", "cup", "hotel"], "explanation": "The world is all the countries and all the people." }
  ],
  "A1|vocabulary|12|fill|medium": [
    { "type": "fill", "before": "I need a", "after": "to get on the train.", "answer": "ticket", "bank": ["ticket", "river", "key"], "explanation": "A ticket is a small paper that you buy. You need it to get on a train." },
    { "type": "fill", "before": "I want to", "after": "my grandmother this weekend.", "answer": "visit", "bank": ["visit", "sing", "wait"], "targetType": "verb", "explanation": "To visit means to go to see a person for a short time." },
    { "type": "fill", "before": "We have a long", "after": "to the mountains: five hours by car.", "answer": "trip", "bank": ["trip", "soup", "apple"], "explanation": "A trip is when you go to a place and then come back." },
    { "type": "fill", "before": "We", "after": "in a small hotel for two nights.", "answer": "stay", "bank": ["stay", "drive", "ride"], "targetType": "verb", "explanation": "To stay in a hotel means to sleep there for some nights." },
    { "type": "fill", "before": "Dad can", "after": "the car near the hotel, and then we go in.", "answer": "park", "bank": ["park", "wait", "sleep"], "targetType": "verb", "explanation": "To park a car means to put it in a place and leave it." },
    { "type": "fill", "before": "A big", "after": "brings food to the supermarket every morning.", "answer": "truck", "bank": ["truck", "pen", "bed"], "explanation": "A truck is a very big car that carries things." },
    { "type": "fill", "before": "Anna's father", "after": "a big bus in the city every day.", "answer": "drives", "bank": ["drives", "sings", "cooks"], "target": "drive", "explanation": "To drive a bus means to make it go. It is his job." },
    { "type": "fill", "before": "Ken likes to", "after": "his bike in the park on Sunday.", "answer": "ride", "bank": ["ride", "drink", "sleep"], "explanation": "To ride a bike means to sit on it and go." }
  ],
  "A1|vocabulary|12|fill|hard": [
    { "type": "fill", "before": "Quick! We cannot", "after": "the last bus.", "answer": "miss", "bank": ["miss", "eat", "wash", "sing"], "explanation": "To miss a bus means to come too late for it." },
    { "type": "fill", "before": "We look at the", "after": "to find the street.", "answer": "map", "bank": ["map", "ticket", "passport", "flight"], "explanation": "A map is a drawing of streets, cities or countries. It helps us find a place." },
    { "type": "fill", "before": "Most people write with their right hand. The other hand is the", "after": "hand.", "answer": "left", "bank": ["left", "quick", "slow", "high"], "targetType": "adjective", "explanation": "The right hand is the one that most people write with. The other hand is the left hand." },
    { "type": "fill", "before": "Put your bag in your left hand and your phone in your", "after": "hand.", "answer": "right", "bank": ["right", "quick", "new", "east"], "targetType": "adjective", "explanation": "Your bag is in your left hand, so your phone goes in the other hand, the right hand." },
    { "type": "fill", "before": "The bus goes down the road and then", "after": "at the bank.", "answer": "turns", "bank": ["turns", "sings", "cooks", "sleeps"], "target": "turn", "targetType": "verb", "explanation": "To turn means to go in a new direction." },
    { "type": "fill", "before": "Anna and Tom make a", "after": "for their vacation: first Rome, then Venice.", "answer": "plan", "bank": ["plan", "ticket", "passport", "bicycle"], "targetType": "noun", "explanation": "A plan is an idea of what you will do." },
    { "type": "fill", "before": "On a map, up is", "after": "and down is south.", "answer": "north", "bank": ["north", "east", "west", "left"], "targetType": "noun", "explanation": "On a map, up is north and down is south." },
    { "type": "fill", "before": "The sun goes down in the", "after": "in the evening.", "answer": "west", "bank": ["west", "north", "south", "right"], "targetType": "noun", "explanation": "The sun goes down in the west and comes up in the east." }
  ],
  "A1|vocabulary|12|fill|veryhard": [
    { "type": "fill", "before": "People in Brazil and Portugal speak the same", "after": ".", "answer": "language", "bank": ["language", "traffic", "bicycle", "capital"], "explanation": "A language is the words that people in a country speak and write." },
    { "type": "fill", "before": "Amy runs very", "after": ", and she is first.", "answer": "quickly", "bank": ["quickly", "again", "soon", "together"], "explanation": "Quickly means in a fast way. Amy is fast, so she is first." },
    { "type": "fill", "before": "We go to the beach and", "after": "to the hotel at night.", "answer": "return", "bank": ["return", "paint", "wait", "drink"], "targetType": "verb", "explanation": "To return means to go back to a place." },
    { "type": "fill", "before": "Children learn about the", "after": "of their country at school: stories, songs and food.", "answer": "culture", "bank": ["culture", "traffic", "bicycle", "passport"], "explanation": "The culture of a country is its stories, songs, food and way of life." },
    { "type": "fill", "before": "The plane from Paris", "after": "at the airport at ten.", "answer": "arrives", "bank": ["arrives", "follows", "turns", "rides"], "target": "arrive", "explanation": "To arrive means to get to a place. The plane gets to the airport at ten." },
    { "type": "fill", "before": "There is a lot of", "after": "on the road, and the cars are slow.", "answer": "traffic", "bank": ["traffic", "language", "culture", "vacation"], "explanation": "Traffic is all the cars and buses on a road." },
    { "type": "fill", "before": "Paris is the", "after": "of France.", "answer": "capital", "bank": ["capital", "passport", "bicycle", "vacation"], "targetType": "noun", "explanation": "The capital of a country is its most important city." },
    { "type": "fill", "before": "Tom rides his", "after": "to school every day.", "answer": "bicycle", "bank": ["bicycle", "language", "culture", "capital"], "explanation": "A bicycle is a thing that you ride and move with your feet." }
  ],
  "A1|vocabulary|12|tf|easy": [
    { "type": "tf", "prompt": "Planes go up and come down at an airport.", "answer": true, "target": "airport", "explanation": "Yes. An airport is a place where planes go up and come down." },
    { "type": "tf", "prompt": "Paris is a country.", "answer": false, "target": "country", "explanation": "No. Paris is a city. France is a country." },
    { "type": "tf", "prompt": "A train goes from station to station.", "answer": true, "target": "train", "explanation": "Yes. A train stops at many stations." },
    { "type": "tf", "prompt": "A bus can fly from one country to another.", "answer": false, "target": "bus", "explanation": "No. A bus goes on the road. A plane flies from one country to another." },
    { "type": "tf", "prompt": "A car is a thing that flies in the air.", "answer": false, "target": "car", "explanation": "No. A car goes on the road. A plane flies in the air." },
    { "type": "tf", "prompt": "People sleep in a hotel when they travel.", "answer": true, "target": "hotel", "explanation": "Yes. A hotel is a building where people sleep when they travel." },
    { "type": "tf", "prompt": "A bike is bigger than a bus.", "answer": false, "target": "bike", "explanation": "No. A bike is much smaller than a bus." },
    { "type": "tf", "prompt": "Cars and buses go on a road.", "answer": true, "target": "road", "explanation": "Yes. A road is a long way for cars and buses." }
  ],
  "A1|vocabulary|12|tf|medium": [
    { "type": "tf", "prompt": "People often visit their grandparents on the weekend.", "answer": true, "target": "visit", "targetType": "verb", "explanation": "Yes. To visit means to go and see a person." },
    { "type": "tf", "prompt": "People who travel stay in one place all year.", "answer": false, "target": "travel", "targetType": "verb", "explanation": "No. People who travel go to new places." },
    { "type": "tf", "prompt": "People often sit in the sun on a beach.", "answer": true, "target": "beach", "explanation": "Yes. A beach is land next to the water, and it is nice in the sun." },
    { "type": "tf", "prompt": "If you stay in a hotel, you sleep there.", "answer": true, "target": "stay", "targetType": "verb", "explanation": "Yes. To stay in a hotel means to sleep there for some nights." },
    { "type": "tf", "prompt": "A bus driver teaches children in a school.", "answer": false, "target": "driver", "explanation": "No. A bus driver drives a bus. A teacher works in a school." },
    { "type": "tf", "prompt": "When you park a car, you drive it very fast.", "answer": false, "target": "park", "targetType": "verb", "explanation": "No. To park a car means to put it in a place and leave it." },
    { "type": "tf", "prompt": "You fly to another country by train.", "answer": false, "target": "fly", "explanation": "No. You fly by plane. A train goes from station to station." },
    { "type": "tf", "prompt": "A flight to another country can take many hours.", "answer": true, "target": "flight", "explanation": "Yes. A flight is a trip by plane, and a long flight can take many hours." }
  ],
  "A1|vocabulary|12|tf|hard": [
    { "type": "tf", "prompt": "The sun comes up in the east.", "answer": true, "target": "east", "targetType": "noun", "explanation": "Yes. The sun comes up in the east in the morning." },
    { "type": "tf", "prompt": "A map can show you the way to a hotel.", "answer": true, "target": "map", "explanation": "Yes. A map shows streets and places, so it helps you find a hotel." },
    { "type": "tf", "prompt": "On most maps, south is at the top.", "answer": false, "target": "south", "targetType": "noun", "explanation": "No. On most maps, up is north and down is south." },
    { "type": "tf", "prompt": "Most people write with their left hand.", "answer": false, "target": "left", "targetType": "adjective", "explanation": "No. Most people write with their right hand." },
    { "type": "tf", "prompt": "When a car turns, it goes in a new direction.", "answer": true, "target": "turn", "targetType": "verb", "explanation": "Yes. To turn means to go in a new direction." },
    { "type": "tf", "prompt": "A slow person walks very fast.", "answer": false, "target": "slow", "explanation": "No. A slow person does not walk fast." },
    { "type": "tf", "prompt": "A quick bus takes a very long time.", "answer": false, "target": "quick", "explanation": "No. A quick bus takes a short time." },
    { "type": "tf", "prompt": "The sun goes down in the west.", "answer": true, "target": "west", "targetType": "noun", "explanation": "Yes. The sun goes down in the west in the evening." }
  ],
  "A1|vocabulary|12|tf|veryhard": [
    { "type": "tf", "prompt": "If you walk quickly, you take a very long time.", "answer": false, "target": "quickly", "explanation": "No. If you walk quickly, you get there fast." },
    { "type": "tf", "prompt": "Many tourists take photos in a new city.", "answer": true, "target": "tourist", "explanation": "Yes. A tourist visits a new place on vacation and often takes photos." },
    { "type": "tf", "prompt": "When you return to a place, you go there for the first time.", "answer": false, "target": "return", "targetType": "verb", "explanation": "No. To return means to go back to a place that you know." },
    { "type": "tf", "prompt": "A visitor is a person who lives in your house all year.", "answer": false, "target": "visitor", "explanation": "No. A visitor comes to see you for a short time." },
    { "type": "tf", "prompt": "A plane arrives at an airport.", "answer": true, "target": "arrive", "explanation": "Yes. To arrive means to get to a place, and a plane gets to an airport." },
    { "type": "tf", "prompt": "There is often a lot of traffic in big cities in the morning.", "answer": true, "target": "traffic", "explanation": "Yes. Many people drive to work in the morning, so there are many cars on the road." },
    { "type": "tf", "prompt": "London is the capital of England.", "answer": true, "target": "capital", "targetType": "noun", "explanation": "Yes. London is the most important city of England." },
    { "type": "tf", "prompt": "On a vacation, you work in an office every day.", "answer": false, "target": "vacation", "explanation": "No. On a vacation, you do not work or go to school." }
  ],
  "A1|vocabulary|12|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "station", "right": "a place where people wait and buy a ticket" },
      { "left": "country", "right": "France, Italy and Japan are each one of these" },
      { "left": "taxi", "right": "a car with a driver; you pay him for the trip" },
      { "left": "train", "right": "it is long, and many people sit in it when they go from town to town" }
    ], "explanation": "People wait and buy a ticket at a station. France is a country. You pay a taxi driver, and many people go from town to town by train." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "airport", "right": "a place where planes go up and come down" },
      { "left": "bus", "right": "you wait for it in the street, and it stops at many places" },
      { "left": "car", "right": "most families have one, and they drive it to work" },
      { "left": "city", "right": "a very big town with many people" }
    ], "explanation": "Planes go up and come down at an airport. A bus stops at many places. Many families drive a car to work, and a city is a very big town." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "hotel", "right": "a place where you sleep when you travel" },
      { "left": "boat", "right": "you use it to go on the water" },
      { "left": "bike", "right": "you sit on it and ride, and you move it with your feet" },
      { "left": "world", "right": "all the countries and all the people" }
    ], "explanation": "You sleep in a hotel and go on the water by boat. You ride a bike with your feet, and the world is all the countries and all the people." }
  ],
  "A1|vocabulary|12|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "ticket", "right": "you buy it, and then you can get on a bus or a train" },
      { "left": "visit", "right": "to go and see a friend for a short time, and then go home", "type": "verb" },
      { "left": "beach", "right": "land next to the water where people sit in the sun" },
      { "left": "stay", "right": "to sleep in a hotel for some nights", "type": "verb" }
    ], "explanation": "You buy a ticket to get on a bus or a train. You visit a friend for a short time, but you stay for some nights. A beach is next to the water." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "travel", "right": "to go from one place to another, often far", "type": "verb" },
      { "left": "driver", "right": "a person who drives a bus or a taxi as a job" },
      { "left": "park", "right": "to put a car in a place and leave it", "type": "verb" },
      { "left": "truck", "right": "a very big car that carries things from town to town" }
    ], "explanation": "To travel is to go far, and a driver drives a bus or a taxi. To park is to leave a car in a place, and a truck carries things." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "trip", "right": "when you go to a place and then come back, for a day or a few days" },
      { "left": "island", "right": "land with water all around it" },
      { "left": "fly", "right": "to go in the air, like a bird or a plane" },
      { "left": "ride", "right": "to sit on a horse or a bike and go" }
    ], "explanation": "A trip is when you go and come back. An island has water all around it. You fly in the air, and you ride a horse or a bike." }
  ],
  "A1|vocabulary|12|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "miss", "right": "to come too late for a bus or a train" },
      { "left": "east", "right": "the way where the sun comes up", "type": "noun" },
      { "left": "left", "right": "the hand that most people do not write with", "type": "adjective" },
      { "left": "carry", "right": "to take something with you in your hands, like a bag" }
    ], "explanation": "You miss a bus when you are too late, and you carry a bag in your hands. The sun comes up in the east. Most people do not write with their left hand." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "map", "right": "a drawing of streets, cities or countries" },
      { "left": "right", "right": "the hand that most people write with", "type": "adjective" },
      { "left": "slow", "right": "not fast" },
      { "left": "follow", "right": "to go behind someone" }
    ], "explanation": "A map is a drawing of streets and cities. Most people write with the right hand. Slow is not fast, and to follow is to go behind someone." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "south", "right": "the way that is down on a map", "type": "noun" },
      { "left": "turn", "right": "to go in a new way, like a bus in a street", "type": "verb" },
      { "left": "plan", "right": "to think about what you will do and then decide", "type": "verb" },
      { "left": "quick", "right": "taking a very short time" }
    ], "explanation": "South is down on a map. To turn is to go in a new way, and to plan is to think and decide. Quick means taking a short time." }
  ],
  "A1|vocabulary|12|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "language", "right": "English, Spanish and French are three of these" },
      { "left": "quickly", "right": "in a fast way, with no waiting" },
      { "left": "tourist", "right": "a person who visits a new place on vacation and takes photos" },
      { "left": "traffic", "right": "all the cars and buses on a road at the same time" }
    ], "explanation": "English is a language. Quickly means fast. A tourist visits a new place on vacation, and traffic is all the cars on a road." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "culture", "right": "the food, the music and the way of life of a country" },
      { "left": "visitor", "right": "a person who comes to see you at your house or in your town" },
      { "left": "passport", "right": "a small book with your photo that you show at the airport" },
      { "left": "bicycle", "right": "something that you sit on and ride; you move it with your feet" }
    ], "explanation": "Culture is the food and music of a country. A visitor comes to see you. You show a passport at the airport, and you ride a bicycle with your feet." }
  ]
});
