/* Questions: A1 Vocabulary, theme 11 Nature and Animals (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|11|mc|easy": [
    { "type": "mc", "prompt": "The ___ is above us in the day and makes the day hot.", "options": ["sun", "chair", "shoe", "bread"], "explanation": "The sun is far above us in the day. It gives us light, and it makes the day hot." },
    { "type": "mc", "prompt": "It is very cold in winter, and a lot of ___ comes down.", "options": ["snow", "desk", "bus", "soup"], "targetType": "noun", "explanation": "Snow is white and cold. It comes down in winter when it is very cold." },
    { "type": "mc", "prompt": "A bird sits in the ___ near our house.", "options": ["tree", "table", "cup", "shirt"], "explanation": "A tree is a tall plant. Birds often sit in a tree." },
    { "type": "mc", "prompt": "Tom takes his umbrella because of the ___.", "options": ["rain", "door", "shirt", "bread"], "targetType": "noun", "explanation": "We use an umbrella when water comes down from above. That water is rain." },
    { "type": "mc", "prompt": "A ___ is big and strong, and it runs very fast.", "options": ["horse", "shirt", "phone", "chair"], "explanation": "A horse is a big, strong animal. It can run fast, and people can ride it." },
    { "type": "mc", "prompt": "Mia walks with her ___ in the park every day.", "options": ["dog", "cup", "hat", "door"], "explanation": "A dog is an animal that many people have at home. They walk with it." },
    { "type": "mc", "prompt": "A dog, a cat and a horse are all ___.", "options": ["animals", "chairs", "shirts", "cups"], "target": "animal", "explanation": "A dog, a cat and a horse are all animals. Chairs, shirts and cups are things." },
    { "type": "mc", "prompt": "Mom puts a red ___ in a glass of water on the table.", "options": ["flower", "bus", "shoe", "coat"], "explanation": "A flower is the pretty red, yellow or white part of a plant. It looks nice in a glass of water." }
  ],
  "A1|vocabulary|11|mc|medium": [
    { "type": "mc", "prompt": "A small gray ___ likes cheese.", "options": ["mouse", "horse", "elephant", "cow"], "explanation": "A mouse is a very small animal. It likes cheese." },
    { "type": "mc", "prompt": "Africa has a very big yellow cat called a ___.", "options": ["lion", "horse", "snake", "chicken"], "explanation": "A lion is a very big, strong cat with yellow hair. It lives in Africa." },
    { "type": "mc", "prompt": "We drink milk that comes from a ___.", "options": ["cow", "pig", "chicken", "snake"], "explanation": "A cow is a big farm animal. We get milk from a cow." },
    { "type": "mc", "prompt": "On a farm, the pink animal with a small nose is the ___.", "options": ["pig", "horse", "chicken", "sheep"], "explanation": "A pig is a pink farm animal with a small nose." },
    { "type": "mc", "prompt": "Cows, pigs and horses live on a ___ in the country.", "options": ["farm", "hotel", "bank", "school"], "explanation": "A farm is a place in the country with animals. A farmer works there." },
    { "type": "mc", "prompt": "A ___ has a long body and no legs.", "options": ["snake", "cow", "lion", "mouse"], "explanation": "A snake has a long body and no legs." },
    { "type": "mc", "prompt": "We get eggs from a farm bird called a ___.", "options": ["chicken", "lion", "mouse", "cow"], "explanation": "A chicken is a farm bird. We get eggs from a chicken." },
    { "type": "mc", "prompt": "Look at that big gray ___ with a very long nose!", "options": ["elephant", "mouse", "pig", "sheep"], "explanation": "An elephant is a very big gray animal. It has a very long nose." }
  ],
  "A1|vocabulary|11|mc|hard": [
    { "type": "mc", "prompt": "We go by boat to the small ___. There is water all around it.", "options": ["island", "river", "tree", "flower"], "explanation": "An island is land with water all around it. You can go there by boat." },
    { "type": "mc", "prompt": "Look at the bird! It is very ___ above the trees.", "options": ["high", "sunny", "natural", "new"], "explanation": "High means far up above something. The bird is far above the trees." },
    { "type": "mc", "prompt": "Many fish live in the ___. It is bigger than any river.", "options": ["ocean", "beach", "farm", "tree"], "explanation": "The ocean is a very big water between countries. Many fish live in it." },
    { "type": "mc", "prompt": "The water in the ___ goes past our town to the ocean.", "options": ["river", "island", "beach", "farm"], "explanation": "A river is water that goes across the land in a long line, often to the ocean." },
    { "type": "mc", "prompt": "The soup is not hot and not cold. It is ___.", "options": ["warm", "sunny", "high", "natural"], "explanation": "Warm means not cold and not hot." },
    { "type": "mc", "prompt": "Maria listens to the ___ on the radio to know about the rain.", "options": ["weather", "ocean", "flower", "star"], "explanation": "The weather is the sun, the rain, the snow and the wind of the day. The radio tells us about it." },
    { "type": "mc", "prompt": "There is snow on the ___ all year, because it is very high.", "options": ["mountain", "beach", "river", "farm"], "explanation": "A mountain is a very, very high place on the land. It often has snow on it." },
    { "type": "mc", "prompt": "People swim and play at the ___ next to the water.", "options": ["beach", "mountain", "tree", "flower"], "explanation": "A beach is land next to the water, where people play and sit in the sun." }
  ],
  "A1|vocabulary|11|mc|veryhard": [
    { "type": "mc", "prompt": "Apples and trees are ___ things, but a phone is not.", "options": ["natural", "dangerous", "sunny", "high"], "explanation": "Trees and apples are natural. People make a phone." },
    { "type": "mc", "prompt": "Flowers need water and sun to ___.", "options": ["grow", "stay", "sleep", "wait"], "explanation": "When a plant grows, it gets bigger. It needs water and sun to do that." },
    { "type": "mc", "prompt": "Do not play with ___: it is very hot.", "options": ["fire", "ice", "snow", "rain"], "explanation": "Fire is very hot and can be dangerous. Ice, snow and rain are cold." },
    { "type": "mc", "prompt": "Do not go near that big river in winter. It is ___.", "options": ["dangerous", "new", "warm", "sunny"], "explanation": "Dangerous means that something very bad can happen to you." },
    { "type": "mc", "prompt": "Anna has a small green ___ in her room. She gives it water every day.", "options": ["plant", "chair", "shoe", "phone"], "explanation": "A plant is a living thing, like a flower. It needs water." },
    { "type": "mc", "prompt": "A bird flies in the ___ above the trees.", "options": ["air", "fire", "ice", "bread"], "explanation": "Air is all around us. Birds fly in the air." },
    { "type": "mc", "prompt": "The sun and all the stars are very far from us, in ___.", "options": ["space", "snow", "rain", "fire"], "explanation": "Space is the very big place with the sun and the stars in it." },
    { "type": "mc", "prompt": "The sun gives us ___ in the day.", "options": ["light", "ice", "rain", "snow"], "targetType": "noun", "explanation": "Light is what lets us see. The sun gives us light in the day." }
  ],
  "A1|vocabulary|11|fill|easy": [
    { "type": "fill", "before": "Look! There is a lot of", "after": "outside, and everything is white.", "answer": "snow", "bank": ["snow", "bread", "music"], "targetType": "noun", "explanation": "Snow is white and cold, and it comes down in winter." },
    { "type": "fill", "before": "Ben has a small black", "after": "with green eyes. It sleeps on his bed.", "answer": "cat", "bank": ["cat", "bus", "key"], "explanation": "A cat is a small animal with four legs. Many cats sleep a lot." },
    { "type": "fill", "before": "Our dog sleeps under the big", "after": "in the garden.", "answer": "tree", "bank": ["tree", "door", "cup"], "explanation": "A tree is a tall plant. A dog can sleep under it in a garden." },
    { "type": "fill", "before": "Maria opens her umbrella when the", "after": "starts.", "answer": "rain", "bank": ["rain", "dog", "shoe"], "targetType": "noun", "explanation": "We open an umbrella when the rain starts. Rain is water that comes down from above." },
    { "type": "fill", "before": "A", "after": "has four legs, and people ride it.", "answer": "horse", "bank": ["horse", "bird", "fish"], "explanation": "A horse is a big animal with four legs. People ride a horse." },
    { "type": "fill", "before": "A", "after": "has two legs, and it can fly.", "answer": "bird", "bank": ["bird", "tree", "chair"], "explanation": "A bird has two legs. Many birds can fly." },
    { "type": "fill", "before": "The", "after": "swims in the water and has no legs.", "answer": "fish", "bank": ["fish", "flower", "cup"], "explanation": "A fish lives in the water. It has no legs." },
    { "type": "fill", "before": "Anna puts a yellow", "after": "in water, and it looks pretty.", "answer": "flower", "bank": ["flower", "shoe", "bus"], "explanation": "A flower is the pretty yellow, red or white part of a plant. It looks nice in water." }
  ],
  "A1|vocabulary|11|fill|medium": [
    { "type": "fill", "before": "The cat runs after a small", "after": "in the kitchen.", "answer": "mouse", "bank": ["mouse", "door", "hat"], "explanation": "A mouse is a very small animal. A cat often runs after a mouse." },
    { "type": "fill", "before": "A", "after": "is very strong, and many people are afraid of it.", "answer": "lion", "bank": ["lion", "chicken", "sheep"], "explanation": "A lion is a very big, strong cat. Many people are afraid of it." },
    { "type": "fill", "before": "A", "after": "has a lot of white hair. People use it for warm clothes.", "answer": "sheep", "bank": ["sheep", "pig", "chicken"], "explanation": "A sheep is a farm animal with a lot of white hair. People use this hair for warm clothes." },
    { "type": "fill", "before": "The farmer has a cow, a horse and a big pink", "after": ".", "answer": "pig", "bank": ["pig", "chicken", "mouse"], "explanation": "A pig is a pink farm animal. A chicken and a mouse are not pink." },
    { "type": "fill", "before": "My uncle works on his", "after": "with his cows and pigs.", "answer": "farm", "bank": ["farm", "school", "hotel"], "explanation": "A farm is a place in the country with animals. A farmer works on it." },
    { "type": "fill", "before": "A", "after": "is a small farm bird that does not fly very high.", "answer": "chicken", "bank": ["chicken", "sheep", "cow"], "explanation": "A chicken is a small farm bird. It does not fly very high." },
    { "type": "fill", "before": "The", "after": "works on a farm and gives food to the cows.", "answer": "farmer", "bank": ["farmer", "waiter", "teacher"], "explanation": "A farmer is a person who works on a farm with animals." },
    { "type": "fill", "before": "The", "after": "is the biggest animal that lives on land.", "answer": "elephant", "bank": ["elephant", "horse", "lion"], "explanation": "An elephant is a very big gray animal. It is bigger than a horse or a lion." }
  ],
  "A1|vocabulary|11|fill|hard": [
    { "type": "fill", "before": "People live on that small", "after": "in the ocean. They go to town by boat.", "answer": "island", "bank": ["island", "river", "beach", "farm"], "explanation": "An island is land with water all around it. People go there by boat." },
    { "type": "fill", "before": "Put some", "after": "in your drink, and it will be very cold.", "answer": "ice", "bank": ["ice", "fire", "bread", "music"], "explanation": "Ice is very, very cold water that is hard. It keeps a drink cold." },
    { "type": "fill", "before": "Big boats go from Europe to America across the", "after": ".", "answer": "ocean", "bank": ["ocean", "river", "island", "mountain"], "explanation": "The ocean is a very big water between countries. Big boats go across it." },
    { "type": "fill", "before": "Today is a", "after": "day. There is no rain, and we see the sun.", "answer": "sunny", "bank": ["sunny", "high", "natural", "quick"], "explanation": "A sunny day is a day with a lot of sun." },
    { "type": "fill", "before": "The water in the pool is not cold. It is", "after": ", and we can swim.", "answer": "warm", "bank": ["warm", "dangerous", "quick", "high"], "explanation": "Warm means not cold and not hot. Warm water is nice for swimming." },
    { "type": "fill", "before": "The", "after": "today is sunny and warm, so let's go out.", "answer": "weather", "bank": ["weather", "flower", "umbrella", "star"], "explanation": "The weather is the sun, the rain, the snow and the wind of the day." },
    { "type": "fill", "before": "Tom opens his", "after": "and walks in the rain.", "answer": "umbrella", "bank": ["umbrella", "flower", "shoe", "tree"], "explanation": "An umbrella keeps the rain off you. You open it when it rains." },
    { "type": "fill", "before": "At night, we see a small light far away. It is a", "after": ".", "answer": "star", "bank": ["star", "flower", "tree", "mouse"], "explanation": "A star is a small light that we see at night. It is very far away." }
  ],
  "A1|vocabulary|11|fill|veryhard": [
    { "type": "fill", "before": "Trees and rivers are", "after": "things, but a phone is not.", "answer": "natural", "bank": ["natural", "quick", "sunny", "warm"], "explanation": "Trees and rivers are natural. People make a phone." },
    { "type": "fill", "before": "Children", "after": "and get bigger every year.", "answer": "grow", "bank": ["grow", "sing", "wait", "carry"], "explanation": "When people or plants grow, they get bigger." },
    { "type": "fill", "before": "Flowers", "after": "when there is no water for a long time.", "answer": "die", "bank": ["die", "grow", "sing", "wait"], "explanation": "When a flower dies, it stops living. It needs water to live." },
    { "type": "fill", "before": "People sit near the", "after": "in winter. It is warm and gives light.", "answer": "fire", "bank": ["fire", "snow", "rain", "bread"], "explanation": "Fire is hot and gives light. It is nice near a fire in winter." },
    { "type": "fill", "before": "A", "after": "needs water, sun and air to live.", "answer": "plant", "bank": ["plant", "phone", "chair", "shoe"], "explanation": "A plant is a living thing. It needs water, sun and air." },
    { "type": "fill", "before": "Fish live in water, and people live on", "after": ".", "answer": "land", "bank": ["land", "ice", "fire", "air"], "explanation": "Land is the part of the world that is not water. People live on land." },
    { "type": "fill", "before": "We cannot see", "after": ", but it is all around us.", "answer": "air", "bank": ["air", "fire", "ice", "snow"], "explanation": "Air is all around us. We cannot see it, but we need it to live." },
    { "type": "fill", "before": "It is dark in the room. Anna opens the door, and the", "after": "comes in from the garden.", "answer": "light", "bank": ["light", "ice", "bread", "soup"], "targetType": "noun", "explanation": "Light lets us see. It comes in through the door from the sun." }
  ],
  "A1|vocabulary|11|tf|easy": [
    { "type": "tf", "prompt": "The sun is above us in the day.", "answer": true, "target": "sun", "explanation": "Yes. We see the sun far above us in the day." },
    { "type": "tf", "prompt": "In winter, snow is very hot.", "answer": false, "target": "snow", "targetType": "noun", "explanation": "No. Snow is white and very cold." },
    { "type": "tf", "prompt": "A cat has four legs.", "answer": true, "target": "cat", "explanation": "Yes. A cat is a small animal with four legs." },
    { "type": "tf", "prompt": "A horse is smaller than a cat.", "answer": false, "target": "horse", "explanation": "No. A horse is much bigger than a cat." },
    { "type": "tf", "prompt": "A bird has two legs.", "answer": true, "target": "bird", "explanation": "Yes. A bird has two legs." },
    { "type": "tf", "prompt": "A dog can read books and write emails.", "answer": false, "target": "dog", "explanation": "No. A dog cannot read or write." },
    { "type": "tf", "prompt": "A fish lives in a tree.", "answer": false, "target": "fish", "explanation": "No. A fish lives in the water." },
    { "type": "tf", "prompt": "A dog, a cat and a bird are animals.", "answer": true, "target": "animal", "explanation": "Yes. Dogs, cats and birds are all animals." }
  ],
  "A1|vocabulary|11|tf|medium": [
    { "type": "tf", "prompt": "A mouse is bigger than a horse.", "answer": false, "target": "mouse", "explanation": "No. A mouse is a very small animal, and a horse is very big." },
    { "type": "tf", "prompt": "A lion is bigger than a chicken.", "answer": true, "target": "lion", "explanation": "Yes. A lion is a very big, strong cat, and a chicken is a small bird." },
    { "type": "tf", "prompt": "Sheep live in the ocean.", "answer": false, "target": "sheep", "explanation": "No. Sheep live on land, often on a farm." },
    { "type": "tf", "prompt": "People get milk from a cow.", "answer": true, "target": "cow", "explanation": "Yes. A cow gives us milk." },
    { "type": "tf", "prompt": "Many farms have pigs.", "answer": true, "target": "farm", "explanation": "Yes. Pigs, cows and chickens often live on a farm." },
    { "type": "tf", "prompt": "A snake has four long legs.", "answer": false, "target": "snake", "explanation": "No. A snake has no legs." },
    { "type": "tf", "prompt": "A farmer works in a hospital with sick people.", "answer": false, "target": "farmer", "explanation": "No. A farmer works on a farm with animals and plants." },
    { "type": "tf", "prompt": "An elephant is bigger than a horse.", "answer": true, "target": "elephant", "explanation": "Yes. An elephant is the biggest animal that lives on land." }
  ],
  "A1|vocabulary|11|tf|hard": [
    { "type": "tf", "prompt": "An island has water all around it.", "answer": true, "target": "island", "explanation": "Yes. An island is land with water all around it." },
    { "type": "tf", "prompt": "Ice is what we get when water is very warm.", "answer": false, "target": "ice", "explanation": "No. We get ice when water is very, very cold." },
    { "type": "tf", "prompt": "A mountain is higher than a house.", "answer": true, "target": "high", "explanation": "Yes. A mountain is much higher than a house." },
    { "type": "tf", "prompt": "On a sunny day, there is a lot of rain and snow.", "answer": false, "target": "sunny", "explanation": "No. On a sunny day, there is a lot of sun." },
    { "type": "tf", "prompt": "Boats can go on a river.", "answer": true, "target": "river", "explanation": "Yes. A river is a long line of water, and boats can go on it." },
    { "type": "tf", "prompt": "The weather tells you the time.", "answer": false, "target": "weather", "explanation": "No. The weather tells you about the sun, the rain and the snow. A clock tells you the time." },
    { "type": "tf", "prompt": "You can carry a mountain in your hands.", "answer": false, "target": "mountain", "explanation": "No. A mountain is very big and very high." },
    { "type": "tf", "prompt": "People swim and play next to the ocean at the beach.", "answer": true, "target": "beach", "explanation": "Yes. A beach is land next to the water, where people play." }
  ],
  "A1|vocabulary|11|tf|veryhard": [
    { "type": "tf", "prompt": "A phone is a natural thing, like a tree or a river.", "answer": false, "target": "natural", "explanation": "No. People make a phone. Trees and rivers are natural." },
    { "type": "tf", "prompt": "When a plant grows, it gets smaller.", "answer": false, "target": "grow", "explanation": "No. When a plant grows, it gets bigger." },
    { "type": "tf", "prompt": "A plant with no water for a long time can die.", "answer": true, "target": "die", "explanation": "Yes. A plant needs water to live." },
    { "type": "tf", "prompt": "Fire is hot and gives light.", "answer": true, "target": "fire", "explanation": "Yes. Fire is very hot, and it gives light." },
    { "type": "tf", "prompt": "Some snakes are dangerous.", "answer": true, "target": "dangerous", "explanation": "Yes. Some snakes are very bad for people, so they are dangerous." },
    { "type": "tf", "prompt": "People swim in the land and walk on the ocean.", "answer": false, "target": "land", "explanation": "No. People walk on land and swim in the ocean." },
    { "type": "tf", "prompt": "We need air to live.", "answer": true, "target": "air", "explanation": "Yes. People and animals need air to live." },
    { "type": "tf", "prompt": "Space is the place under the ocean where fish live.", "answer": false, "target": "space", "explanation": "No. Space is the very big place with the sun and the stars in it." }
  ],
  "A1|vocabulary|11|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "sun", "right": "it is far above us in the day and makes the day hot" },
      { "left": "tree", "right": "it is tall and green, and a bird can sit in it" },
      { "left": "rain", "right": "water that comes down, and you need an umbrella", "type": "noun" },
      { "left": "animal", "right": "a living thing like a dog, a horse or a bird" }
    ], "explanation": "The sun is far above us in the day. A bird can sit in a tree. Rain is water from above, and an animal is a living thing like a dog." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "cat", "right": "a small animal that can climb a tree and likes milk" },
      { "left": "bird", "right": "an animal with two legs that flies" },
      { "left": "dog", "right": "an animal that you walk with in the park" },
      { "left": "fish", "right": "an animal that lives in the water and has no legs" }
    ], "explanation": "A cat can climb a tree. A bird flies, and you walk with a dog. A fish lives in the water." }
  ],
  "A1|vocabulary|11|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "mouse", "right": "a very small gray animal that likes cheese" },
      { "left": "lion", "right": "a very big yellow cat that lives in Africa" },
      { "left": "sheep", "right": "a white farm animal; people use its hair for warm clothes" },
      { "left": "cow", "right": "a big farm animal that gives us milk" }
    ], "explanation": "A mouse is very small, and a lion is a very big cat. People use the hair of a sheep for warm clothes, and a cow gives us milk." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "pig", "right": "a pink animal with a small nose" },
      { "left": "snake", "right": "a long animal with no legs" },
      { "left": "chicken", "right": "a farm bird that gives us eggs" },
      { "left": "farmer", "right": "a person who works with animals on a farm" }
    ], "explanation": "A pig is pink, and a snake has no legs. A chicken gives us eggs, and a farmer works on a farm." }
  ],
  "A1|vocabulary|11|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "ice", "right": "what water becomes when it is very, very cold" },
      { "left": "high", "right": "far up, like a bird above the trees" },
      { "left": "ocean", "right": "a very big water between countries, bigger than a river" },
      { "left": "sunny", "right": "a day with a lot of sun and no rain" }
    ], "explanation": "Water becomes ice when it is very cold. A bird above the trees is high. The ocean is very big, and a sunny day has a lot of sun." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "river", "right": "water that goes across the land in a long line" },
      { "left": "warm", "right": "not cold and not hot" },
      { "left": "umbrella", "right": "you open it over your head when it rains" },
      { "left": "star", "right": "a small light that you see at night, far above us" }
    ], "explanation": "A river goes across the land. Warm is not cold and not hot. You open an umbrella over your head when it rains, and you see a star at night." }
  ],
  "A1|vocabulary|11|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "natural", "right": "like a tree or a river, and not like a phone or a car" },
      { "left": "grow", "right": "to get bigger, like a young tree or a child" },
      { "left": "die", "right": "to stop living, like a flower with no water" },
      { "left": "space", "right": "the place with the sun and the stars, very far from us" }
    ], "explanation": "Trees and rivers are natural. A young tree grows bigger. A flower with no water dies, and the stars are in space." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dangerous", "right": "when something very bad can happen to you" },
      { "left": "plant", "right": "a green living thing that needs water, like a small tree" },
      { "left": "land", "right": "the part of the world that is not water" },
      { "left": "light", "right": "what comes from the sun and lets you see in the day", "type": "noun" }
    ], "explanation": "Dangerous means something very bad can happen to you. A plant needs water. Land is not water, and light lets you see." }
  ]
});
