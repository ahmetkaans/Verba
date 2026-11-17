/* Questions: A1 Vocabulary, theme 10 Body and Health (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|10|mc|easy": [
    { "type": "mc", "prompt": "Tom has long black hair on his ___.", "options": ["head", "table", "door", "bus"], "explanation": "Your head is the part of your body with your face and hair. Your hair grows on it." },
    { "type": "mc", "prompt": "Mia is very happy, and you can see it on her ___.", "options": ["face", "shoe", "key", "chair"], "explanation": "Your face is the front part of your head. People see how you feel on your face." },
    { "type": "mc", "prompt": "Ken sees a small bird with his ___.", "options": ["eyes", "hats", "doors", "trees"], "target": "eye", "explanation": "You see with your eyes. Ken looks at the bird with them." },
    { "type": "mc", "prompt": "The doctor looks into Ali's ___ with a small light.", "options": ["ears", "shoes", "desks", "windows"], "target": "ear", "explanation": "You hear with your ears. A doctor can look into them with a small light." },
    { "type": "mc", "prompt": "Your ___ is between your eyes and your mouth.", "options": ["nose", "hat", "table", "door"], "explanation": "Your nose is the part of your face above your mouth." },
    { "type": "mc", "prompt": "You eat and talk with your ___.", "options": ["mouth", "bag", "chair", "tree"], "explanation": "Your mouth is the part of your face that you eat and talk with." },
    { "type": "mc", "prompt": "Ali writes with a pen in his right ___.", "options": ["hand", "window", "desk", "key"], "explanation": "Your hand is at the end of your arm. You write with it." },
    { "type": "mc", "prompt": "You wear a shoe on your ___.", "options": ["foot", "table", "bus", "chair"], "explanation": "Your foot is at the end of your leg. You put a shoe on it." }
  ],
  "A1|vocabulary|10|mc|medium": [
    { "type": "mc", "prompt": "Lisa carries the baby in both ___.", "options": ["arms", "legs", "ears", "eyes"], "target": "arm", "explanation": "Your arms are the long parts of your body with your hands at the end. You carry a baby in them." },
    { "type": "mc", "prompt": "A dog has four ___.", "options": ["legs", "doors", "hats", "books"], "target": "leg", "explanation": "A dog walks and runs on four legs, and a person walks on two." },
    { "type": "mc", "prompt": "Ben's ___ is too long: it is in his eyes.", "options": ["hair", "bag", "shoe", "desk"], "explanation": "Hair grows on your head. When it is too long, it can be in your eyes." },
    { "type": "mc", "prompt": "A baby has two small white ___ in her mouth.", "options": ["teeth", "books", "shoes", "chairs"], "target": "tooth", "explanation": "Teeth are the small hard white things in your mouth." },
    { "type": "mc", "prompt": "Lisa carries her school bag on her ___.", "options": ["back", "nose", "ear", "mouth"], "targetType": "noun", "explanation": "Your back is the part of your body behind you. A school bag goes on it." },
    { "type": "mc", "prompt": "Your head, arms and legs are parts of your ___.", "options": ["body", "shirt", "house", "school"], "explanation": "Your body is all of you, from your head to your feet." },
    { "type": "mc", "prompt": "Leo did not eat lunch, so he is very ___ now.", "options": ["hungry", "tall", "young", "quiet"], "explanation": "When you are hungry, you want to eat. Leo had no lunch." },
    { "type": "mc", "prompt": "Anna ran in the sun and has no water, so she is ___.", "options": ["thirsty", "old", "short", "tall"], "explanation": "When you are thirsty, you want to drink. Anna has no water." }
  ],
  "A1|vocabulary|10|mc|hard": [
    { "type": "mc", "prompt": "Anna ran for two hours, so she is ___ and sits down.", "options": ["tired", "tall", "young", "old"], "explanation": "When you are tired, you want to sleep or sit down. Anna ran for two hours." },
    { "type": "mc", "prompt": "Ben is not at school today because he is ___.", "options": ["sick", "tall", "short", "quiet"], "explanation": "A sick person is not well. Ben stays home." },
    { "type": "mc", "prompt": "The doctor says, \"You are ___. You can go to school.\"", "options": ["fine", "tall", "young", "quiet"], "explanation": "Fine means well. A person who is fine is not sick." },
    { "type": "mc", "prompt": "A person who helps sick people is a ___.", "options": ["doctor", "teacher", "farmer", "singer"], "explanation": "A doctor helps sick people to get well." },
    { "type": "mc", "prompt": "Tom's father is a ___. He works with doctors in a hospital.", "options": ["nurse", "farmer", "singer", "teacher"], "explanation": "A nurse works with doctors and helps sick people. A nurse can be a man or a woman." },
    { "type": "mc", "prompt": "My mother is a doctor. She works at a big ___ in our city.", "options": ["hospital", "bank", "library", "park"], "explanation": "A hospital is a big building where doctors and nurses help sick people." },
    { "type": "mc", "prompt": "It is raining, and Sam's shoes are very dirty. He will ___ them.", "options": ["wash", "drink", "sleep", "build"], "explanation": "To wash is to clean something with water. Sam will clean his shoes." },
    { "type": "mc", "prompt": "After the game, Sam is hot and takes a cold ___.", "options": ["shower", "chair", "window", "key"], "explanation": "A shower is a way to wash with water that falls on you. A cold one is nice when you are hot." }
  ],
  "A1|vocabulary|10|mc|veryhard": [
    { "type": "mc", "prompt": "Good food and sleep are important for your ___.", "options": ["health", "shoes", "windows", "doors"], "explanation": "Your health is how well your body is. Food and sleep help it." },
    { "type": "mc", "prompt": "Fruit and vegetables are ___ food.", "options": ["healthy", "tall", "young", "quiet"], "explanation": "Healthy food is good for your body." },
    { "type": "mc", "prompt": "Please speak again. I cannot ___ you.", "options": ["hear", "wash", "cook", "build"], "explanation": "To hear is to know about a sound with your ears. The person cannot hear you well." },
    { "type": "mc", "prompt": "My doctor gives me good ___: eat well and sleep.", "options": ["advice", "shoes", "chairs", "doors"], "explanation": "Advice is a good idea that a person tells you. The doctor says to eat well and sleep." },
    { "type": "mc", "prompt": "A good ___ has fruit and vegetables, not only chocolate.", "options": ["diet", "door", "desk", "shoe"], "explanation": "Your diet is the food and drink that you usually have." },
    { "type": "mc", "prompt": "To get strong, you should ___ three times a week.", "options": ["exercise", "cook", "read", "wash"], "targetType": "verb", "explanation": "To exercise is to run, swim or play sports to be strong." },
    { "type": "mc", "prompt": "People who play a ___ every week are often strong.", "options": ["sport", "shoe", "door", "tree"], "explanation": "A sport is a game like tennis. Playing one often helps you to be strong." },
    { "type": "mc", "prompt": "Dad is tired after work, so he wants to ___ and do nothing.", "options": ["relax", "cook", "wash", "build"], "explanation": "To relax is to feel good and not work. Dad is tired, so he wants to stop working." }
  ],
  "A1|vocabulary|10|fill|easy": [
    { "type": "fill", "before": "Anna wears a red hat on her", "after": ".", "answer": "head", "bank": ["head", "door", "desk"], "explanation": "Your head is the part of your body with your face and hair. A hat goes on it." },
    { "type": "fill", "before": "Anna puts cold water on her", "after": "in the morning.", "answer": "face", "bank": ["face", "bus", "bag"], "explanation": "Your face is the front part of your head. Many people wash it in the morning." },
    { "type": "fill", "before": "Please close your", "after": "and go to sleep.", "answer": "eyes", "bank": ["eyes", "hats", "shoes"], "target": "eye", "explanation": "You see with your eyes. You close them when you go to sleep." },
    { "type": "fill", "before": "An elephant has two big", "after": ".", "answer": "ears", "bank": ["ears", "doors", "shoes"], "target": "ear", "explanation": "Ears are the parts of the head that you hear with. An elephant has two big ones." },
    { "type": "fill", "before": "A cat has a small pink", "after": ".", "answer": "nose", "bank": ["nose", "door", "bus"], "explanation": "A nose is the part of the face above the mouth. People and animals have one." },
    { "type": "fill", "before": "The doctor says, \"Please open your", "after": ".\"", "answer": "mouth", "bank": ["mouth", "shoe", "tree"], "explanation": "Your mouth is the part of your face that you eat and talk with. The doctor wants to look at your teeth." },
    { "type": "fill", "before": "Please give me your", "after": ", and I will help you.", "answer": "hand", "bank": ["hand", "window", "tree"], "explanation": "Your hand is at the end of your arm. A friend can take it to help you." },
    { "type": "fill", "before": "Ali can stand on one", "after": ".", "answer": "foot", "bank": ["foot", "bag", "tree"], "explanation": "Your foot is at the end of your leg. You stand on your feet." }
  ],
  "A1|vocabulary|10|fill|medium": [
    { "type": "fill", "before": "Mia has a small bag on her left", "after": ".", "answer": "arm", "bank": ["arm", "chair", "table"], "explanation": "Your arm is the long part of your body with your hand at the end. Mia carries a bag on it." },
    { "type": "fill", "before": "Ali runs very fast because he has long", "after": ".", "answer": "legs", "bank": ["legs", "ears", "books"], "target": "leg", "explanation": "You run with your legs. Long legs help Ali to run fast." },
    { "type": "fill", "before": "My sister has short black", "after": "and a small nose.", "answer": "hair", "bank": ["hair", "shoes", "books"], "explanation": "Hair grows on your head. It can be short or long." },
    { "type": "fill", "before": "Emma eats an apple with her", "after": ".", "answer": "teeth", "bank": ["teeth", "shoes", "books"], "target": "tooth", "explanation": "Teeth are in your mouth. You eat an apple with them." },
    { "type": "fill", "before": "Please stand up and turn around so I can see your", "after": ".", "answer": "back", "bank": ["back", "door", "tree"], "targetType": "noun", "explanation": "Your back is the part of your body behind you. When you turn around, a person can see it." },
    { "type": "fill", "before": "Swimming is good for your", "after": ".", "answer": "body", "bank": ["body", "door", "shirt"], "explanation": "Your body is all of you, from your head to your feet. Swimming helps it to be strong." },
    { "type": "fill", "before": "Ken eats three sandwiches because he is very", "after": ".", "answer": "hungry", "bank": ["hungry", "tall", "quiet"], "explanation": "When you are hungry, you want to eat. Ken eats a lot because he wants food." },
    { "type": "fill", "before": "After the run, Tom is very", "after": ", so he drinks juice.", "answer": "thirsty", "bank": ["thirsty", "tall", "quiet"], "explanation": "When you are thirsty, you want to drink. Tom drinks juice for that." }
  ],
  "A1|vocabulary|10|fill|hard": [
    { "type": "fill", "before": "Dad goes to bed at eight because he is very", "after": ".", "answer": "tired", "bank": ["tired", "tall", "young", "quiet"], "explanation": "When you are tired, you want to sleep. Dad goes to bed early because he is tired." },
    { "type": "fill", "before": "The doctor says, \"You are", "after": ", so please stay in bed.\"", "answer": "sick", "bank": ["sick", "tall", "young", "quiet"], "explanation": "A sick person is not well. The doctor says to stay in bed." },
    { "type": "fill", "before": "Ali was sick on Monday, but today he is", "after": "again.", "answer": "fine", "bank": ["fine", "tall", "young", "old"], "explanation": "Fine means well. Ali is not sick today." },
    { "type": "fill", "before": "Mia is sick, so she goes to see the", "after": ".", "answer": "doctor", "bank": ["doctor", "bank", "library", "hotel"], "explanation": "A doctor helps sick people to get well. Mia goes to see one." },
    { "type": "fill", "before": "At the hospital, a", "after": "gives Anna a glass of water.", "answer": "nurse", "bank": ["nurse", "farmer", "singer", "teacher"], "explanation": "A nurse works with doctors and helps sick people in a hospital." },
    { "type": "fill", "before": "Sick people stay in a", "after": "and doctors help them.", "answer": "hospital", "bank": ["hospital", "bank", "library", "gym"], "explanation": "A hospital is a big building where doctors and nurses help sick people." },
    { "type": "fill", "before": "Mom says, \"Please", "after": "your hands before you eat.\"", "answer": "wash", "bank": ["wash", "drink", "sleep", "cook"], "explanation": "To wash is to clean something with water. We wash our hands before we eat." },
    { "type": "fill", "before": "Anna takes a hot", "after": "every morning.", "answer": "shower", "bank": ["shower", "bus", "key", "desk"], "explanation": "A shower is a way to wash with water that falls on you." }
  ],
  "A1|vocabulary|10|fill|veryhard": [
    { "type": "fill", "before": "Thank you for asking about my", "after": ". I am fine now.", "answer": "health", "bank": ["health", "shoes", "doors", "trees"], "explanation": "Your health is how well your body is. The person says she is well now." },
    { "type": "fill", "before": "Ben eats well and sleeps well, so he is", "after": ".", "answer": "healthy", "bank": ["healthy", "tall", "young", "quiet"], "explanation": "Healthy means good for your body, or not sick. Good food and good sleep help you to be healthy." },
    { "type": "fill", "before": "Do you", "after": "the music from the next room?", "answer": "hear", "bank": ["hear", "wash", "cook", "build"], "explanation": "To hear is to know about a sound with your ears." },
    { "type": "fill", "before": "Anna asks her teacher for", "after": "about her homework.", "answer": "advice", "bank": ["advice", "windows", "chairs", "tables"], "explanation": "Advice is a good idea that a person tells you. Anna wants her teacher's help with homework." },
    { "type": "fill", "before": "Ali's", "after": "is rice, fish and fruit.", "answer": "diet", "bank": ["diet", "door", "desk", "shoe"], "explanation": "Your diet is the food and drink that you usually have." },
    { "type": "fill", "before": "Walking to school every day is good", "after": ".", "answer": "exercise", "bank": ["exercise", "rice", "milk", "tea"], "targetType": "noun", "explanation": "Exercise is moving your body to stay strong. Walking every day is good exercise." },
    { "type": "fill", "before": "My brother plays a", "after": "at school: basketball.", "answer": "sport", "bank": ["sport", "shoe", "door", "tree"], "explanation": "A sport is a game like tennis. Basketball is a sport." },
    { "type": "fill", "before": "Please sit down and", "after": ". You work too much.", "answer": "relax", "bank": ["relax", "cook", "wash", "build"], "explanation": "To relax is to feel good and not work. This person works too much and needs to stop working." }
  ],
  "A1|vocabulary|10|tf|easy": [
    { "type": "tf", "prompt": "Your head is bigger than your hand.", "answer": true, "target": "head", "explanation": "Yes. Your head is the part of your body with your face and hair, and it is bigger than your hand." },
    { "type": "tf", "prompt": "Your eyes, nose and mouth are on your face.", "answer": true, "target": "face", "explanation": "Yes. Your face is the front part of your head, with your eyes, nose and mouth." },
    { "type": "tf", "prompt": "You hear music with your eyes.", "answer": false, "target": "eye", "explanation": "No. You hear with your ears. You see with your eyes." },
    { "type": "tf", "prompt": "You hear with your ears.", "answer": true, "target": "ear", "explanation": "Yes. Your ears are the parts of your head that you hear with." },
    { "type": "tf", "prompt": "You eat food with your nose.", "answer": false, "target": "nose", "explanation": "No. You eat with your mouth. Your nose is above your mouth." },
    { "type": "tf", "prompt": "You have ten hands.", "answer": false, "target": "hand", "explanation": "No. You have two hands, one at the end of each arm." },
    { "type": "tf", "prompt": "Your teeth are in your mouth.", "answer": true, "target": "mouth", "explanation": "Yes. Your mouth is the part of your face with your teeth in it." },
    { "type": "tf", "prompt": "You wear a hat on your foot.", "answer": false, "target": "foot", "explanation": "No. You wear a hat on your head. Your foot is at the end of your leg." }
  ],
  "A1|vocabulary|10|tf|medium": [
    { "type": "tf", "prompt": "You have a hand at the end of each arm.", "answer": true, "target": "arm", "explanation": "Yes. Your arm is the long part of your body with your hand at the end." },
    { "type": "tf", "prompt": "You walk and run with your legs.", "answer": true, "target": "leg", "explanation": "Yes. Your legs are the long parts of your body that you walk with." },
    { "type": "tf", "prompt": "Hair is something you eat.", "answer": false, "target": "hair", "explanation": "No. Hair grows on your head. You eat food." },
    { "type": "tf", "prompt": "Teeth are hard.", "answer": true, "target": "tooth", "explanation": "Yes. A tooth is a small hard thing, and you have many teeth." },
    { "type": "tf", "prompt": "Coming back home means leaving home for the first time.", "answer": false, "target": "back", "targetType": "adverb", "explanation": "No. To come back is to return to a place where you were before." },
    { "type": "tf", "prompt": "Your body has four arms and one leg.", "answer": false, "target": "body", "explanation": "No. A body has two arms and two legs." },
    { "type": "tf", "prompt": "When you are hungry, you want to eat.", "answer": true, "target": "hungry", "explanation": "Yes. When you are hungry, you want food." },
    { "type": "tf", "prompt": "When you are thirsty, you want to eat a sandwich.", "answer": false, "target": "thirsty", "explanation": "No. When you are thirsty, you want to drink. You eat a sandwich when you are hungry." }
  ],
  "A1|vocabulary|10|tf|hard": [
    { "type": "tf", "prompt": "When you are tired, you want to sleep.", "answer": true, "target": "tired", "explanation": "Yes. When you are tired, you want to sleep or sit down." },
    { "type": "tf", "prompt": "If a doctor says, \"You are fine,\" you are not sick.", "answer": true, "target": "fine", "explanation": "Yes. Fine means well. You are not sick." },
    { "type": "tf", "prompt": "When you are sick, you feel very good.", "answer": false, "target": "sick", "explanation": "No. When you are sick, you do not feel well." },
    { "type": "tf", "prompt": "A doctor is a person who sells shoes.", "answer": false, "target": "doctor", "explanation": "No. A doctor helps sick people to get well." },
    { "type": "tf", "prompt": "A nurse can be a man or a woman.", "answer": true, "target": "nurse", "explanation": "Yes. A nurse is a person who helps sick people. Men and women are nurses." },
    { "type": "tf", "prompt": "A hospital is a place where people buy clothes.", "answer": false, "target": "hospital", "explanation": "No. Doctors and nurses help sick people in a hospital. You buy clothes in a store." },
    { "type": "tf", "prompt": "People wash dirty clothes with water.", "answer": true, "target": "wash", "explanation": "Yes. To wash is to clean something with water." },
    { "type": "tf", "prompt": "You take a shower to get dirty.", "answer": false, "target": "shower", "explanation": "No. You take a shower to wash and get clean." }
  ],
  "A1|vocabulary|10|tf|veryhard": [
    { "type": "tf", "prompt": "You can ask a doctor about your health.", "answer": true, "target": "health", "explanation": "Yes. Your health is how well your body is. A doctor can tell you." },
    { "type": "tf", "prompt": "You can hear a bird in a tree.", "answer": true, "target": "hear", "explanation": "Yes. To hear is to know about a sound with your ears. A bird makes a sound in a tree." },
    { "type": "tf", "prompt": "A person who eats only chocolate is very healthy.", "answer": false, "target": "healthy", "explanation": "No. Healthy food is good for your body. A person needs fruit, vegetables and other food too." },
    { "type": "tf", "prompt": "Advice is a good idea that a person tells you.", "answer": true, "target": "advice", "explanation": "Yes. A doctor or a teacher can give you advice." },
    { "type": "tf", "prompt": "When you exercise, you sleep in bed.", "answer": false, "target": "exercise", "targetType": "verb", "explanation": "No. To exercise is to run, swim or play sports to be strong." },
    { "type": "tf", "prompt": "A doctor can give you advice about your diet.", "answer": true, "target": "diet", "explanation": "Yes. Your diet is the food and drink that you usually have. A doctor can say what is good." },
    { "type": "tf", "prompt": "A sport is something you eat for dinner.", "answer": false, "target": "sport", "explanation": "No. A sport is a game like tennis or swimming. You eat food for dinner." },
    { "type": "tf", "prompt": "When you relax, you work very hard.", "answer": false, "target": "relax", "explanation": "No. To relax is to feel good and not work." }
  ],
  "A1|vocabulary|10|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "hand", "right": "you use it to open a door or to carry a bag" },
      { "left": "eye", "right": "it helps you to see colors and people" },
      { "left": "face", "right": "people look at it when you talk to them" },
      { "left": "nose", "right": "dogs and cats have one, above their mouths" }
    ], "explanation": "You open a door with your hand and see with your eye. People look at your face when you talk, and dogs and cats have a nose." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "head", "right": "you move it when you say yes or no" },
      { "left": "ear", "right": "you have two, and they help you listen to music" },
      { "left": "mouth", "right": "you put food and drink into it" },
      { "left": "foot", "right": "you stand on it, and a person has two" }
    ], "explanation": "You move your head to say yes or no. Your ears help you listen, and you put food and drink into your mouth. You stand on your feet." }
  ],
  "A1|vocabulary|10|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "hungry", "right": "how you feel before dinner when you need food" },
      { "left": "hair", "right": "it grows on your head, and you can wash it and cut it" },
      { "left": "leg", "right": "the long part of your body that goes down to your foot" },
      { "left": "back", "right": "returning to the place where you were before", "type": "adverb" }
    ], "explanation": "You are hungry when you need food. You wash and cut your hair, and your leg goes down to your foot. To come back is to return to a place." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "arm", "right": "you have two of them, and each one ends with a hand" },
      { "left": "tooth", "right": "you have many of them, and you use them to eat" },
      { "left": "body", "right": "you have only one, and good food and sleep are good for it" },
      { "left": "thirsty", "right": "how you feel when you need a drink" }
    ], "explanation": "Your arm ends with a hand. You eat with your teeth. Food and sleep are good for your body, and you are thirsty when you need a drink." }
  ],
  "A1|vocabulary|10|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "wash", "right": "to make something clean with water" },
      { "left": "fine", "right": "how you feel when nothing is wrong with your health" },
      { "left": "nurse", "right": "a person who works next to the doctor and helps people who are not well" },
      { "left": "hospital", "right": "a big building where sick people go to get help" }
    ], "explanation": "To wash is to make something clean. When you are fine, nothing is wrong. A nurse works next to the doctor, and people who are not well go to a hospital for help." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "tired", "right": "how you feel after a long day of work" },
      { "left": "sick", "right": "not well, and your body does not feel good" },
      { "left": "doctor", "right": "a person who looks at you and says what is wrong with your body" },
      { "left": "shower", "right": "you stand under water to clean your body" }
    ], "explanation": "You are tired after a long day. A sick person does not feel good. A doctor says what is wrong, and you stand under water in a shower." }
  ],
  "A1|vocabulary|10|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "sport", "right": "tennis, swimming and football are all this" },
      { "left": "hear", "right": "what you do with your ears when someone talks to you" },
      { "left": "healthy", "right": "strong and well, like a person who is not sick" },
      { "left": "diet", "right": "the food that a person eats day after day" }
    ], "explanation": "Tennis and swimming are sports. You hear with your ears. A healthy person is strong and well, and your diet is the food you eat day after day." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "health", "right": "what a doctor asks about when you feel well or not well" },
      { "left": "advice", "right": "what a person tells you about what is good to do" },
      { "left": "exercise", "right": "what you do at a gym to be strong, like running or swimming", "type": "noun" },
      { "left": "relax", "right": "what a person does on a Sunday afternoon with a book or music" }
    ], "explanation": "A doctor asks about your health. Advice tells you what is good to do. Running at a gym is exercise, and a person relaxes with a book or music." }
  ]
});
