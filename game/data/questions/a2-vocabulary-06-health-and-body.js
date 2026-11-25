/* Questions: A2 Vocabulary, theme 6 Health and Body (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|6|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|6|mc|easy": [
    {"type": "mc", "prompt": "After the race, my ___ was going very fast.", "options": ["heart", "finger", "knee", "stomach"], "explanation": "The heart is the part inside your body that pushes blood around it. It goes faster after a race."},
    {"type": "mc", "prompt": "Anna wears a gold ring on her ___.", "options": ["finger", "cell", "bone", "brain"], "explanation": "A finger is one of the five parts at the end of your hand. A ring goes on it."},
    {"type": "mc", "prompt": "For work, Dad wears a blue tie around his ___.", "options": ["neck", "ankle", "heart", "skin"], "explanation": "The neck is the part of the body between the head and the shoulders. A tie goes around it."},
    {"type": "mc", "prompt": "Tom has very white ___, so he puts on sun cream every day at the beach.", "options": ["skin", "neck", "foot", "blood"], "explanation": "Skin is the outside of your body. White skin can burn easily in the sun."},
    {"type": "mc", "prompt": "Tom stayed at home yesterday because he was ___ and had a high fever.", "options": ["ill", "physical", "old", "good"], "explanation": "Ill means not well. A person with a fever is ill."},
    {"type": "mc", "prompt": "Be careful with that hot water! It can ___ you badly.", "options": ["hurt", "care", "rest", "shake"], "targetType": "verb", "explanation": "To hurt someone is to give them pain. Hot water can hurt your hand."},
    {"type": "mc", "prompt": "The leaves on the ground are ___, so they are brown and dry.", "options": ["dead", "weak", "local", "light"], "targetType": "adjective", "explanation": "Dead means not alive. Brown, dry leaves are dead."},
    {"type": "mc", "prompt": "I took some medicine because I had a bad ___ in my back.", "options": ["pain", "smoking", "disease", "fever"], "targetType": "noun", "explanation": "Pain is the bad feeling you have when a part of your body hurts."}
  ],
  "A2|vocabulary|6|mc|medium": [
    {"type": "mc", "prompt": "Please take ___ of my cat while I am on vacation.", "options": ["care", "death", "weight", "routine"], "targetType": "noun", "explanation": "To take care of something is to look after it. A cat needs food and water every day."},
    {"type": "mc", "prompt": "A car hit a bus on Main Street, but nobody was hurt in the ___.", "options": ["accident", "drug", "virus", "illness"], "explanation": "An accident is something bad that happens by chance, for example when two cars hit each other."},
    {"type": "mc", "prompt": "We use our ___ when we think or learn something new.", "options": ["brain", "ankle", "heart", "bone"], "explanation": "The brain is the part inside your head that thinks and remembers."},
    {"type": "mc", "prompt": "These flowers ___ really nice! What are they?", "options": ["smell", "stress", "smoke", "touch"], "targetType": "verb", "explanation": "To smell is to give a nice or a bad feeling to your nose. Flowers smell nice."},
    {"type": "mc", "prompt": "Carry the heavy bag on your ___, not in your hand.", "options": ["shoulder", "skin", "knee", "stomach"], "explanation": "The shoulder is the part of the body where the arm joins the body. You can carry a bag on it."},
    {"type": "mc", "prompt": "After two weeks in bed, my grandfather felt very ___ and could not walk far.", "options": ["weak", "active", "dead", "hurt"], "explanation": "Weak means not strong. After a long time in bed, a person is weak."},
    {"type": "mc", "prompt": "You can get ___ help at the hospital any time of the day or night.", "options": ["medical", "weak", "alive", "hurt"], "explanation": "Medical means about doctors and the care of ill people. A hospital gives medical help."},
    {"type": "mc", "prompt": "The doctor gave me some ___ for my bad cold.", "options": ["medicine", "flu", "pain", "cigarette"], "targetType": "noun", "explanation": "Medicine is something you take to feel better when you are ill."}
  ],
  "A2|vocabulary|6|mc|hard": [
    {"type": "mc", "prompt": "Some people think the old tree is dead, but it is still ___.", "options": ["alive", "active", "weak", "medical"], "explanation": "Alive means not dead. A tree that grows new leaves is still alive."},
    {"type": "mc", "prompt": "Everybody was sad about the ___ of the famous singer last week.", "options": ["death", "movement", "birth", "rest"], "explanation": "Death is the end of a life. People are sad when a person they love dies."},
    {"type": "mc", "prompt": "A person who is in the hospital because he is ill is called a ___.", "options": ["patient", "waiter", "dentist", "doctor"], "targetType": "noun", "explanation": "A patient is a person that a doctor looks after."},
    {"type": "mc", "prompt": "Your body has many very small ___ inside it, and each one is alive.", "options": ["cell", "skin", "heart", "bone"], "explanation": "A cell is a very small living part. Every person, animal and plant has cells."},
    {"type": "mc", "prompt": "Tom fell off his bike, and now the ___ in his arm is broken.", "options": ["bone", "stomach", "cell", "blood"], "explanation": "A bone is one of the hard parts inside your body. It can break in a fall."},
    {"type": "mc", "prompt": "I ate too much pizza, and now my ___ feels very full.", "options": ["stomach", "ankle", "brain", "skin"], "explanation": "The stomach is the part inside your body where food goes after you eat."},
    {"type": "mc", "prompt": "The doctor gives me a new ___ to help me sleep.", "options": ["drug", "stress", "headache", "cigarette"], "targetType": "noun", "explanation": "A drug is a medicine that a doctor gives you."},
    {"type": "mc", "prompt": "I have a bad tooth, so tomorrow I will go to the ___ with my mother.", "options": ["dentist", "waiter", "nurse", "patient"], "explanation": "A dentist is a doctor for teeth."}
  ],
  "A2|vocabulary|6|mc|veryhard": [
    {"type": "mc", "prompt": "He wants to lose ___, so he eats less and walks more.", "options": ["weight", "age", "price", "death"], "targetType": "noun", "explanation": "Weight is how heavy a body is. People who want to lose weight eat less."},
    {"type": "mc", "prompt": "Running and swimming are good ___ exercise.", "options": ["physical", "alive", "medical", "ill"], "targetType": "adjective", "explanation": "Physical means about the body, not the mind. Running is physical exercise."},
    {"type": "mc", "prompt": "Many people with heart ___ take medicine every day.", "options": ["disease", "accident", "injury", "flu"], "explanation": "A disease is a serious illness that lasts a long time. Heart disease needs medicine."},
    {"type": "mc", "prompt": "He fell off his bike and got a small ___ on his leg.", "options": ["injury", "disease", "virus", "smoking"], "explanation": "An injury is a part of the body that is hurt in an accident, for example a cut on the leg."},
    {"type": "mc", "prompt": "Dancing needs a lot of ___ of the arms and legs.", "options": ["movement", "birth", "rest", "care"], "explanation": "Movement is the act of moving. Dancing is full of movement."},
    {"type": "mc", "prompt": "Go outside, because ___ is not allowed here and the smoke hurts children.", "options": ["smoking", "stress", "drug", "cigarette"], "explanation": "Smoking is taking smoke from a cigarette into your body. It is not allowed in many places."},
    {"type": "mc", "prompt": "Each ___ is very small, and you need a special machine to see it.", "options": ["virus", "illness", "fever", "headache"], "explanation": "A virus is a very small living thing that can make people ill, for example with the flu."},
    {"type": "mc", "prompt": "He wears a boot that covers his foot and his ___.", "options": ["ankle", "shoulder", "neck", "finger"], "explanation": "The ankle is the part of the leg just above the foot."}
  ],
  "A2|vocabulary|6|fill|easy": [
    {"type": "fill", "before": "The nurse took a little", "after": "from my arm for the test.", "answer": "blood", "bank": ["blood", "finger", "bone"], "explanation": "Blood is the red thing inside your body. A nurse can take a little for a test."},
    {"type": "fill", "before": "Sam shut his", "after": "in the car door, so he cannot hold his pen.", "answer": "finger", "bank": ["finger", "knee", "brain"], "explanation": "A finger is one of the long parts at the end of your hand. You need it to hold a pen."},
    {"type": "fill", "before": "You use your", "after": "in the middle of your leg when you go up the stairs.", "answer": "knee", "bank": ["knee", "blood", "shoulder"], "explanation": "The knee is the part in the middle of your leg. You use it on the stairs."},
    {"type": "fill", "before": "I have a", "after": "because the music in the club is so loud.", "answer": "headache", "bank": ["headache", "drug", "smell"], "explanation": "A headache is a pain in your head. Loud music can give you one."},
    {"type": "fill", "before": "Please stay away from Anna. She is", "after": "and she may give you her cold.", "answer": "ill", "bank": ["ill", "physical", "hurt"], "targetType": "adjective", "explanation": "Ill means not well. A person with a cold is ill."},
    {"type": "fill", "before": "Be careful on the ice, or you will fall and", "after": "your leg.", "answer": "hurt", "bank": ["hurt", "sleep", "wash"], "targetType": "verb", "explanation": "To hurt a part of your body is to give it pain. A fall on the ice can do that."},
    {"type": "fill", "before": "Don't water that plant. It is", "after": "and will not grow again.", "answer": "dead", "bank": ["dead", "active", "hurt"], "targetType": "adjective", "explanation": "Dead means not living any more. A dead plant will not grow again."},
    {"type": "fill", "before": "My grandmother has a lot of", "after": "in her knees when it is cold.", "answer": "pain", "bank": ["pain", "accident", "cigarette"], "targetType": "noun", "explanation": "Pain is the bad feeling in your body when something hurts."}
  ],
  "A2|vocabulary|6|fill|medium": [
    {"type": "fill", "before": "You worked all day. Take a", "after": "and sit on a chair.", "answer": "rest", "bank": ["rest", "movement", "height"], "targetType": "noun", "explanation": "A rest is a time when you stop work and do nothing. After a long day, you need one."},
    {"type": "fill", "before": "The road was closed for two hours because of the", "after": "near the bridge.", "answer": "accident", "bank": ["accident", "medicine", "virus"], "explanation": "An accident is something bad that happens by chance. Roads often close after one."},
    {"type": "fill", "before": "In this building, people who want to", "after": "must go outside.", "answer": "smoke", "bank": ["smoke", "smell", "hit"], "targetType": "verb", "explanation": "To smoke is to take the smoke of a cigarette into your mouth. Many buildings do not allow it."},
    {"type": "fill", "before": "A bird sat on the old man's", "after": "and looked around.", "answer": "shoulder", "bank": ["shoulder", "heart", "stomach"], "explanation": "The shoulder is the part of the body where the arm joins the body. A small bird can sit on it."},
    {"type": "fill", "before": "The doctor says my temperature is 39 degrees, so I have a high", "after": ".", "answer": "fever", "bank": ["fever", "headache", "flu"], "explanation": "A fever is a high temperature of the body when you are ill. A high number shows it."},
    {"type": "fill", "before": "After the long illness, he was too", "after": "to carry his bag.", "answer": "weak", "bank": ["weak", "physical", "alive"], "explanation": "Weak means not strong. After a long illness, a person can be too weak to carry a bag."},
    {"type": "fill", "before": "Ben wants to be a doctor, so he is studying at", "after": "school.", "answer": "medical", "bank": ["medical", "active", "alive"], "explanation": "Medical means about doctors and ill people. A doctor learns at medical school."},
    {"type": "fill", "before": "Take this", "after": "twice a day, after breakfast.", "answer": "medicine", "bank": ["medicine", "fever", "disease"], "targetType": "noun", "explanation": "Medicine is something you take to feel better when you are ill."}
  ],
  "A2|vocabulary|6|fill|hard": [
    {"type": "fill", "before": "The fire was big, but everybody in the house is still", "after": ".", "answer": "alive", "bank": ["alive", "physical", "ill", "light"], "explanation": "Alive means living, not dead. Everybody in the house is still living."},
    {"type": "fill", "before": "Her grandfather's", "after": "made the whole family very sad.", "answer": "death", "bank": ["death", "birth", "movement", "stress"], "explanation": "Death is the end of a life. A family is sad when it loses a person it loves."},
    {"type": "fill", "before": "The doctor says the", "after": "in room 5 can go home tomorrow, because he is better.", "answer": "patient", "bank": ["patient", "driver", "dentist", "doctor"], "targetType": "noun", "explanation": "A patient is a person that a doctor or a hospital looks after."},
    {"type": "fill", "before": "The dog ran away with a big", "after": "in its mouth.", "answer": "bone", "bank": ["bone", "knee", "cell", "blood"], "explanation": "A bone is a hard white part. Dogs love to eat big bones."},
    {"type": "fill", "before": "Everybody was happy about the", "after": "of Anna's son, so we sent a card and flowers.", "answer": "birth", "bank": ["birth", "death", "care", "rest"], "explanation": "Birth is the time when a baby comes out of its mother and starts to live."},
    {"type": "fill", "before": "Take this", "after": "after lunch, and keep it away from children.", "answer": "drug", "bank": ["drug", "pain", "fever", "smoking"], "targetType": "noun", "explanation": "A drug is a medicine that a doctor gives you. Keep it away from children."},
    {"type": "fill", "before": "Exams give many students a lot of", "after": "and worry.", "answer": "stress", "bank": ["stress", "disease", "medicine", "birth"], "targetType": "noun", "explanation": "Stress is a worried and tired feeling when you have too much to do. Exams can cause it."},
    {"type": "fill", "before": "Many people get the", "after": "in winter, and they stay in bed with a fever.", "answer": "flu", "bank": ["flu", "illness", "accident", "injury"], "explanation": "The flu is an illness like a bad cold, with a fever and pain in the body."}
  ],
  "A2|vocabulary|6|fill|veryhard": [
    {"type": "fill", "before": "Anna eats well and does sport to keep her", "after": "low.", "answer": "weight", "bank": ["weight", "price", "age", "care"], "targetType": "noun", "explanation": "Weight is how heavy a body is. Some people eat well and play sport to keep it low."},
    {"type": "fill", "before": "The nurse checked how tall the child is, so she wrote down his", "after": ".", "answer": "height", "bank": ["height", "price", "age", "movement"], "explanation": "Height is how tall a person is. A nurse checks it and writes it down."},
    {"type": "fill", "before": "Moving heavy boxes is hard", "after": "work.", "answer": "physical", "bank": ["physical", "dead", "weak", "medical"], "targetType": "adjective", "explanation": "Physical means about the body, not the mind. Moving boxes is physical work."},
    {"type": "fill", "before": "She missed school for a week because of a long", "after": ".", "answer": "illness", "bank": ["illness", "virus", "accident", "medicine"], "explanation": "An illness is a time when a person is ill. A long one keeps a child out of school."},
    {"type": "fill", "before": "He fell off a horse, but the", "after": "was small, just a cut on his hand.", "answer": "injury", "bank": ["injury", "illness", "flu", "pain"], "explanation": "An injury is a part of the body that is hurt in an accident, for example a cut on the hand."},
    {"type": "fill", "before": "The man put out his", "after": "before he went into the hospital.", "answer": "cigarette", "bank": ["cigarette", "injury", "smoking", "drug"], "explanation": "A cigarette is a thin white thing that people smoke. Smoking is not allowed in a hospital."},
    {"type": "fill", "before": "My grandmother is 80, but she is very", "after": "and walks every morning.", "answer": "active", "bank": ["active", "ill", "medical", "tired"], "targetType": "adjective", "explanation": "Active means doing many things and full of energy. An active person walks a lot."},
    {"type": "fill", "before": "The dancer wears a thin gold band around her", "after": ", just above the shoe.", "answer": "ankle", "bank": ["ankle", "brain", "finger", "shoulder"], "explanation": "The ankle is the part of the leg just above the foot, so a band can go there."}
  ],
  "A2|vocabulary|6|tf|easy": [
    {"type": "tf", "prompt": "When you run fast, your heart goes faster too.", "answer": true, "target": "heart", "explanation": "True. The heart pushes blood around your body, and it goes faster when you run."},
    {"type": "tf", "prompt": "Blood is the hard white thing inside your arm.", "answer": false, "target": "blood", "explanation": "False. Blood is the red thing that goes around inside your body. The hard white thing is a bone."},
    {"type": "tf", "prompt": "Dad wears a tie around his neck, and it goes over his shirt.", "answer": true, "target": "neck", "explanation": "True. A tie goes around the neck. The neck is between the head and the shoulders."},
    {"type": "tf", "prompt": "People think and learn with their skin.", "answer": false, "target": "skin", "explanation": "False. Skin is the outside of your body. People think and learn with the brain."},
    {"type": "tf", "prompt": "Your knee is in the middle of your leg.", "answer": true, "target": "knee", "explanation": "True. The knee is the part in the middle of your leg."},
    {"type": "tf", "prompt": "A headache is a pain in your foot.", "answer": false, "target": "headache", "explanation": "False. A headache is a pain in your head."},
    {"type": "tf", "prompt": "Tom is ill, so the doctor tells him to stay in bed.", "answer": true, "target": "ill", "explanation": "True. Ill means not well. A doctor often tells an ill person to rest."},
    {"type": "tf", "prompt": "Anna's dead plant has green leaves and grows fast.", "answer": false, "target": "dead", "targetType": "adjective", "explanation": "False. A dead plant is not living, so it does not grow."}
  ],
  "A2|vocabulary|6|tf|medium": [
    {"type": "tf", "prompt": "A good nurse takes care of ill people.", "answer": true, "target": "care", "targetType": "noun", "explanation": "True. To take care of people is to look after them so that they stay well."},
    {"type": "tf", "prompt": "After a long walk, a rest means that you must walk faster.", "answer": false, "target": "rest", "targetType": "noun", "explanation": "False. A rest is a time when you stop and do nothing. It does not mean more work."},
    {"type": "tf", "prompt": "Your brain helps you remember a phone number.", "answer": true, "target": "brain", "explanation": "True. The brain is the part in your head that you use to think and remember."},
    {"type": "tf", "prompt": "You smell a flower with your ears.", "answer": false, "target": "smell", "targetType": "verb", "explanation": "False. You smell with your nose, not with your ears."},
    {"type": "tf", "prompt": "Doctors say that it is bad for your body to smoke.", "answer": true, "target": "smoke", "targetType": "verb", "explanation": "True. To smoke is to take the gray air of a cigarette into your mouth. Doctors say it is bad for you."},
    {"type": "tf", "prompt": "A fever means that your temperature is too low.", "answer": false, "target": "fever", "explanation": "False. A fever is a high temperature of the body when you are ill."},
    {"type": "tf", "prompt": "A person who is very weak after an illness cannot carry heavy bags.", "answer": true, "target": "weak", "explanation": "True. Weak means not strong, so a heavy bag is too hard to carry."},
    {"type": "tf", "prompt": "A medical center is a place where people play football.", "answer": false, "target": "medical", "explanation": "False. Medical means about doctors and ill people. A medical center is a place for doctors."}
  ],
  "A2|vocabulary|6|tf|hard": [
    {"type": "tf", "prompt": "A fish that swims in the water is alive.", "answer": true, "target": "alive", "explanation": "True. Alive means living. A fish that swims is living."},
    {"type": "tf", "prompt": "Death is the beginning of a person's life.", "answer": false, "target": "death", "explanation": "False. Death is the end of a life. The beginning of a life is a birth."},
    {"type": "tf", "prompt": "You need a special machine to see one cell, because it is very small.", "answer": true, "target": "cell", "explanation": "True. A cell is a very small living part of a person, an animal or a plant."},
    {"type": "tf", "prompt": "The stomach is the part of the body where we think.", "answer": false, "target": "stomach", "explanation": "False. The stomach is the part where food goes. We think with the brain."},
    {"type": "tf", "prompt": "People send cards and flowers after the birth of a baby.", "answer": true, "target": "birth", "explanation": "True. Birth is the time when a baby comes out of its mother. Families are happy and send cards."},
    {"type": "tf", "prompt": "Stress is a happy feeling when you have a lot of free time.", "answer": false, "target": "stress", "targetType": "noun", "explanation": "False. Stress is a worried and tired feeling when you have too much to do."},
    {"type": "tf", "prompt": "Doctors say you should stay at home when you have the flu.", "answer": true, "target": "flu", "explanation": "True. The flu is an illness with a fever, and you can give it to other people."},
    {"type": "tf", "prompt": "A dentist looks at your stomach when you have a bad tooth.", "answer": false, "target": "dentist", "explanation": "False. A dentist is a doctor who looks after your teeth, not your stomach."}
  ],
  "A2|vocabulary|6|tf|veryhard": [
    {"type": "tf", "prompt": "Doctors say that eating a lot of sugar can make your weight go up.", "answer": true, "target": "weight", "targetType": "noun", "explanation": "True. Weight is how heavy a body is. Too much sugar can make it go up."},
    {"type": "tf", "prompt": "Your height tells you how heavy you are.", "answer": false, "target": "height", "explanation": "False. Height is how tall a person is. Weight tells you how heavy you are."},
    {"type": "tf", "prompt": "Heart disease is a serious problem for many older people.", "answer": true, "target": "disease", "explanation": "True. A disease is a serious illness that lasts a long time, and heart disease is one of them."},
    {"type": "tf", "prompt": "An illness is a building where doctors work.", "answer": false, "target": "illness", "explanation": "False. An illness is a time when a person is ill. A building for doctors is a hospital."},
    {"type": "tf", "prompt": "Walking and dancing are two kinds of movement.", "answer": true, "target": "movement", "explanation": "True. Movement is the act of moving from one place or position to another."},
    {"type": "tf", "prompt": "A cigarette is a kind of medicine for a headache.", "answer": false, "target": "cigarette", "explanation": "False. A cigarette is a thin white thing that people smoke. It is not a medicine."},
    {"type": "tf", "prompt": "A virus can make you ill, but you cannot see it without a special machine.", "answer": true, "target": "virus", "explanation": "True. A virus is a very small living thing that can make people ill."},
    {"type": "tf", "prompt": "An active person sits in the same chair all day.", "answer": false, "target": "active", "targetType": "adjective", "explanation": "False. Active means doing many things and full of energy."}
  ],
  "A2|vocabulary|6|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "heart", "right": "the part inside your body that pushes blood around it"},
      {"left": "finger", "right": "one of the long parts at the end of your hand"},
      {"left": "hurt", "right": "to make a part of your body feel bad", "type": "verb"},
      {"left": "headache", "right": "a pain in your head"}
    ], "explanation": "The heart pushes blood around the body. A finger is at the end of your hand, to hurt is to give pain, and a headache is a pain in the head." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "blood", "right": "the red thing that comes out when you cut your finger"},
      {"left": "knee", "right": "the part in the middle of your leg"},
      {"left": "skin", "right": "the outside of your body"},
      {"left": "pain", "right": "the bad feeling in your body when something hurts", "type": "noun"}
    ], "explanation": "Blood is the red thing in your body. The knee is in the middle of your leg, skin is on the outside, and pain is a bad feeling." }
  ],
  "A2|vocabulary|6|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "care", "right": "the work of looking after a person so that they stay well", "type": "noun"},
      {"left": "accident", "right": "something bad that happens by chance, for example when two cars hit each other"},
      {"left": "smell", "right": "to notice something with your nose", "type": "verb"},
      {"left": "shoulder", "right": "the part of the body where your arm joins it"}
    ], "explanation": "Care is looking after a person. An accident happens by chance, to smell is to notice with the nose, and the shoulder is where the arm joins the body." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "rest", "right": "a time when you stop work and do nothing", "type": "noun"},
      {"left": "brain", "right": "the part in your head that you use to think"},
      {"left": "smoke", "right": "to take the gray air of a cigarette into your mouth", "type": "verb"},
      {"left": "fever", "right": "a high temperature of the body when you are ill"}
    ], "explanation": "A rest is a time with no work. The brain is for thinking, to smoke is to take the air of a cigarette in, and a fever is a body that is too hot." }
  ],
  "A2|vocabulary|6|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "patient", "right": "a person that a doctor looks after", "type": "noun"},
      {"left": "cell", "right": "a very small living part of a person or a plant"},
      {"left": "birth", "right": "the time when a baby comes out of its mother"},
      {"left": "stress", "right": "a worried feeling when you have too much to do", "type": "noun"}
    ], "explanation": "A patient is a person that a doctor looks after. A cell is very small, birth is the time a baby comes, and stress is a worried feeling." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "bone", "right": "one of the hard white parts inside your body"},
      {"left": "stomach", "right": "the part where food goes after you eat"},
      {"left": "drug", "right": "a medicine that a doctor gives you", "type": "noun"},
      {"left": "flu", "right": "an illness like a bad cold, with a fever"}
    ], "explanation": "A bone is hard and white. The stomach is where food goes, a drug is a medicine from a doctor, and the flu is like a bad cold." }
  ],
  "A2|vocabulary|6|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "physical", "right": "about the body, not the mind", "type": "adjective"},
      {"left": "disease", "right": "a serious illness that lasts a long time"},
      {"left": "smoking", "right": "taking the gray air of a cigarette into your mouth"},
      {"left": "ankle", "right": "the part of the leg just above the foot"}
    ], "explanation": "Physical is about the body. A disease is a long, serious illness, smoking is taking the air of a cigarette in, and the ankle is above the foot." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "injury", "right": "a part of the body that is hurt in an accident, for example a cut"},
      {"left": "cigarette", "right": "a thin white thing that people smoke"},
      {"left": "virus", "right": "a very small living thing that can make people ill"},
      {"left": "active", "right": "doing many things and full of energy", "type": "adjective"}
    ], "explanation": "An injury is a hurt from an accident. A cigarette is a thin white thing, a virus is very small, and an active person is full of energy." }
  ]
});
