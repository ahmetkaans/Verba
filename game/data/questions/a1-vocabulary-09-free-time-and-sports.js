/* Questions: A1 Vocabulary, theme 09 Free Time and Sports (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|9|mc|easy": [
    { "type": "mc", "prompt": "There is a ___ at school on Friday. Everyone comes and listens to the music.", "options": ["dance", "tree", "bag", "key"], "targetType": "noun", "explanation": "A dance is a time when people dance to music. This one is at school on Friday." },
    { "type": "mc", "prompt": "Mia has a pencil and some paper. She likes to ___ flowers.", "options": ["draw", "drink", "sleep", "run"], "explanation": "To draw is to make a picture with a pencil. Mia uses her pencil and paper." },
    { "type": "mc", "prompt": "There is a ___ of a big blue ocean on the wall.", "options": ["picture", "shoe", "bus", "door"], "explanation": "A picture is something you look at, like a drawing. This one is on the wall." },
    { "type": "mc", "prompt": "Everyone laughs at the park because they have a lot of ___.", "options": ["fun", "rice", "bread", "milk"], "explanation": "Fun is a good time. People laugh when they have fun." },
    { "type": "mc", "prompt": "Leo plays for the school ___ on Saturday.", "options": ["team", "book", "bus", "key"], "explanation": "A team is a group of people who play a game together. Leo plays on the school team." },
    { "type": "mc", "prompt": "Anna loves songs, so she likes to ___ with her friends.", "options": ["sing", "wash", "cook", "run"], "explanation": "To sing is to say the words of a song with music. Anna loves songs, so she likes to sing." },
    { "type": "mc", "prompt": "It is Tom's birthday. His friends come to his ___ with a cake.", "options": ["party", "window", "chair", "shoe"], "explanation": "A party is a time when friends come to eat, play and have fun." },
    { "type": "mc", "prompt": "My favorite sport is ___. I go to the pool every week.", "options": ["swimming", "shopping", "cooking", "reading"], "explanation": "Swimming is a sport in the water. You go to a pool to do it." }
  ],
  "A1|vocabulary|9|mc|medium": [
    { "type": "mc", "prompt": "In ___ class, we use colors and paper to make beautiful things.", "options": ["art", "English", "science", "history"], "explanation": "Art is making pictures and other beautiful things. Students use colors and paper in art class." },
    { "type": "mc", "prompt": "The wall is white. Mom wants to ___ it blue.", "options": ["paint", "wash", "open", "close"], "targetType": "verb", "explanation": "To paint is to put color on something. Mom wants to put blue color on the white wall." },
    { "type": "mc", "prompt": "The other team is much better than Tom's team. Tom's team is going to ___.", "options": ["lose", "cook", "wash", "build"], "explanation": "To lose is to not win a game. Tom's team is not as good, so it will not win." },
    { "type": "mc", "prompt": "Mia looks at a beautiful ___ of a woman in the museum.", "options": ["painting", "bus", "table", "door"], "explanation": "A painting is a picture that a person makes with colors. Many paintings are in a museum." },
    { "type": "mc", "prompt": "Anna takes photos of the ocean with her ___.", "options": ["camera", "shoe", "chair", "bus"], "explanation": "A camera is a thing that you use to take photos." },
    { "type": "mc", "prompt": "Dad reads a ___ to the children before bed.", "options": ["story", "shoe", "key", "door"], "explanation": "A story is words that tell about people and what happens to them. Many children like stories before bed." },
    { "type": "mc", "prompt": "Ken has more points than Leo in tennis, so Ken ___ the game.", "options": ["wins", "cooks", "washes", "builds"], "target": "win", "explanation": "To win is to be the best in a game. Ken has more points, so he wins." },
    { "type": "mc", "prompt": "Many people go to the ___ to hear a singer and a band.", "options": ["concert", "bank", "hospital", "bus"], "explanation": "A concert is a time when singers or a band play music for many people." }
  ],
  "A1|vocabulary|9|mc|hard": [
    { "type": "mc", "prompt": "Ken and Mia see a movie at the ___ on Saturday night.", "options": ["theater", "bank", "hospital", "tree"], "explanation": "A theater is a place where you watch a play or a movie." },
    { "type": "mc", "prompt": "The school has a big ___ on Saturday. Parents, children and teachers all come.", "options": ["event", "bank", "road", "shoe"], "explanation": "An event is something special that happens. A big day at school is an event." },
    { "type": "mc", "prompt": "We watch a funny ___ on TV every Sunday.", "options": ["show", "tree", "shoe", "road"], "targetType": "noun", "explanation": "A show is something that you watch on TV or at a theater." },
    { "type": "mc", "prompt": "Leo ___ every day: he runs and plays tennis.", "options": ["exercises", "cooks", "reads", "sleeps"], "target": "exercise", "targetType": "verb", "explanation": "To exercise is to run, swim or play sports to be strong. Leo runs and plays tennis." },
    { "type": "mc", "prompt": "Mom has no time for ___, so she does not visit stores.", "options": ["shopping", "swimming", "dancing", "reading"], "explanation": "Shopping is buying things in stores. Mom does not visit stores, so she has no time for shopping." },
    { "type": "mc", "prompt": "A person who sings songs at a concert is a ___.", "options": ["singer", "doctor", "nurse", "farmer"], "explanation": "A singer is a person who sings, for example at a concert." },
    { "type": "mc", "prompt": "My hobby is ___: I make a new meal every Sunday.", "options": ["cooking", "swimming", "dancing", "reading"], "explanation": "Cooking is making food ready to eat. Making a meal every Sunday is a hobby." },
    { "type": "mc", "prompt": "Every summer, our town has a music ___ in the park. People come from many cities.", "options": ["festival", "bank", "hotel", "road"], "explanation": "A festival is a big event with music, food or other fun things, for many people." }
  ],
  "A1|vocabulary|9|mc|veryhard": [
    { "type": "mc", "prompt": "Mia wants to play the piano well, so she must ___ every day.", "options": ["practice", "cook", "wash", "shop"], "targetType": "verb", "explanation": "To practice is to do something many times to get better. Mia plays the piano every day." },
    { "type": "mc", "prompt": "This old ___ shows my grandmother as a young girl.", "options": ["photograph", "shoe", "key", "door"], "explanation": "A photograph is a picture that a camera makes. Some photographs are kept for many years." },
    { "type": "mc", "prompt": "Our team plays a ___ against the red team on Sunday.", "options": ["match", "bank", "key", "door"], "targetType": "noun", "explanation": "A match is a game between two teams or two players." },
    { "type": "mc", "prompt": "I can hear a ___ in the kitchen.", "options": ["sound", "shoe", "hat", "bag"], "targetType": "noun", "explanation": "A sound is something that you hear." },
    { "type": "mc", "prompt": "The ___ game of the year is on Sunday. It is the last game.", "options": ["final", "hungry", "tired", "angry"], "explanation": "Final means last, at the end. The last game of the year is the final game." },
    { "type": "mc", "prompt": "Everybody likes this singer's songs, so she is very ___.", "options": ["popular", "hungry", "tired", "boring"], "explanation": "Popular means that many people like it or like her." },
    { "type": "mc", "prompt": "The concert was ___! I loved it.", "options": ["fantastic", "terrible", "boring", "hungry"], "explanation": "Fantastic means very, very good. Mia loved the concert, so it was a very good one." },
    { "type": "mc", "prompt": "We had a ___ day at the beach. I want to go again.", "options": ["wonderful", "terrible", "boring", "tired"], "explanation": "Wonderful means very good, and it makes you happy. You want to go again after a wonderful day." }
  ],
  "A1|vocabulary|9|fill|easy": [
    { "type": "fill", "before": "Please", "after": "a house on your paper.", "answer": "draw", "bank": ["draw", "drink", "wash"], "explanation": "To draw is to make a picture with a pencil. You can draw a house on paper." },
    { "type": "fill", "before": "The water is warm today. Let's", "after": "in the ocean.", "answer": "swim", "bank": ["swim", "sleep", "cook"], "explanation": "To swim is to move in water with your arms and legs." },
    { "type": "fill", "before": "Anna puts a", "after": "of her family on her desk.", "answer": "picture", "bank": ["picture", "door", "hat"], "explanation": "A picture is something that you look at, like a drawing or a photo. Anna puts one of her family on her desk." },
    { "type": "fill", "before": "Blue is my", "after": "color. I like it the most.", "answer": "favorite", "bank": ["favorite", "tall", "slow"], "targetType": "adjective", "explanation": "Your favorite color is the one that you like the most." },
    { "type": "fill", "before": "I like to listen to some", "after": "when I walk.", "answer": "music", "bank": ["music", "milk", "rice"], "explanation": "Music is what you hear when people sing or play the guitar." },
    { "type": "fill", "before": "Ben and Mia play a", "after": "on the computer.", "answer": "game", "bank": ["game", "door", "shoe"], "explanation": "A game is something that you play. Ben and Mia play one on the computer." },
    { "type": "fill", "before": "Tennis is a", "after": ". You play it with a ball.", "answer": "sport", "bank": ["sport", "hat", "key"], "explanation": "A sport is a game like tennis that is good for your body." },
    { "type": "fill", "before": "Mom takes a", "after": "of us in front of the house.", "answer": "photo", "bank": ["photo", "door", "chair"], "explanation": "A photo is a picture that you take with a camera." }
  ],
  "A1|vocabulary|9|fill|medium": [
    { "type": "fill", "before": "Ali needs some blue", "after": "for the wall.", "answer": "paint", "bank": ["paint", "milk", "rice"], "targetType": "noun", "explanation": "Paint is something with color that you put on a wall. Ali wants blue paint." },
    { "type": "fill", "before": "My brother is in a", "after": ". They play at parties on Saturday.", "answer": "band", "bank": ["band", "door", "tree"], "explanation": "A band is a group of people who play music together. This band plays at parties." },
    { "type": "fill", "before": "Mia cannot find her keys. She", "after": "them at school.", "answer": "lost", "bank": ["lost", "sang", "slept"], "target": "lose", "explanation": "To lose something is to not know where it is. Mia cannot find her keys." },
    { "type": "fill", "before": "Dad reads a", "after": "about sports on the train.", "answer": "magazine", "bank": ["magazine", "shoe", "door"], "explanation": "A magazine is a book with pictures and stories. A new one comes out every week or month." },
    { "type": "fill", "before": "Ken plays", "after": "with ten friends. There are two teams and one ball.", "answer": "football", "bank": ["football", "piano", "magazine"], "explanation": "Football is a sport with two teams and a ball." },
    { "type": "fill", "before": "Sam is on the school", "after": "team.", "answer": "baseball", "bank": ["baseball", "piano", "door"], "explanation": "Baseball is a sport with a small ball and two teams." },
    { "type": "fill", "before": "Leo plays the", "after": "and sings songs with his band.", "answer": "guitar", "bank": ["guitar", "shoe", "tree"], "explanation": "A guitar is a music thing that many singers and bands play." },
    { "type": "fill", "before": "Anna sits at the", "after": "and plays music with her hands.", "answer": "piano", "bank": ["piano", "band", "magazine"], "explanation": "A piano is a big music thing with black and white keys." }
  ],
  "A1|vocabulary|9|fill|hard": [
    { "type": "fill", "before": "A birthday party is a happy", "after": "for a family.", "answer": "event", "bank": ["event", "road", "shoe", "tree"], "explanation": "An event is something special that happens, like a birthday party." },
    { "type": "fill", "before": "The cat can", "after": "the tree very fast.", "answer": "climb", "bank": ["climb", "drink", "sleep", "cook"], "explanation": "To climb is to go up something, like a mountain or a tree." },
    { "type": "fill", "before": "Please", "after": "me your new camera.", "answer": "show", "bank": ["show", "wash", "drink", "cook"], "targetType": "verb", "explanation": "To show is to let a person see something. I want to see your new camera." },
    { "type": "fill", "before": "Leo does exercise at the", "after": "three times a week.", "answer": "gym", "bank": ["gym", "bank", "library", "office"], "explanation": "A gym is a big room or building where people do exercise and play sports." },
    { "type": "fill", "before": "Tom goes to the book", "after": "on Tuesday. They read and talk.", "answer": "club", "bank": ["club", "door", "tree", "bus"], "explanation": "A club is a group of people who meet to do something together, like reading." },
    { "type": "fill", "before": "Mia loves", "after": "because she likes long stories.", "answer": "reading", "bank": ["reading", "swimming", "dancing", "shopping"], "explanation": "Reading is looking at words and understanding them. Mia likes long stories." },
    { "type": "fill", "before": "The water in the", "after": "is warm, and the children swim all day.", "answer": "pool", "bank": ["pool", "window", "hat", "bus"], "explanation": "A pool is a place with water where people swim." },
    { "type": "fill", "before": "Swimming and dancing are my favorite", "after": "in my free time.", "answer": "activities", "bank": ["activities", "doors", "shoes", "trees"], "target": "activity", "explanation": "An activity is something that you do, like a game or a sport." }
  ],
  "A1|vocabulary|9|fill|veryhard": [
    { "type": "fill", "before": "Tom has a big", "after": "in music.", "answer": "interest", "bank": ["interest", "shoe", "door", "tree"], "targetType": "noun", "explanation": "An interest is when you want to learn or do more of something. Tom wants to know more about music." },
    { "type": "fill", "before": "The", "after": "on my desk shows my family at the beach.", "answer": "photograph", "bank": ["photograph", "window", "hat", "bus"], "explanation": "A photograph is a picture that a camera makes. This one shows a family at the beach." },
    { "type": "fill", "before": "There is one", "after": "in this room: Everyone must be quiet.", "answer": "rule", "bank": ["rule", "shoe", "key", "bag"], "explanation": "A rule says what you can and cannot do. Here it says to be quiet." },
    { "type": "fill", "before": "Your new song", "after": "nice!", "answer": "sounds", "bank": ["sounds", "cooks", "washes", "drinks"], "target": "sound", "targetType": "verb", "explanation": "To sound nice is to be nice when you hear it." },
    { "type": "fill", "before": "Our team has ten", "after": ", and the other team has eight.", "answer": "points", "bank": ["points", "hours", "trees", "doors"], "target": "point", "explanation": "A point is what a team gets when it does well in a game." },
    { "type": "fill", "before": "This is a", "after": "story. It happened to my grandmother.", "answer": "real", "bank": ["real", "hungry", "tired", "young"], "explanation": "Real means true, and not only in a story. This story happened to a person." },
    { "type": "fill", "before": "The food was", "after": ", so we did not eat it.", "answer": "terrible", "bank": ["terrible", "quiet", "slow", "tall"], "explanation": "Terrible means very, very bad. We did not eat the food because it was terrible." },
    { "type": "fill", "before": "I loved the movie! It was", "after": "!", "answer": "awesome", "bank": ["awesome", "tall", "hungry", "young"], "explanation": "Awesome means very, very good. The person loved the movie." }
  ],
  "A1|vocabulary|9|tf|easy": [
    { "type": "tf", "prompt": "People can dance to music at a party.", "answer": true, "target": "dance", "targetType": "verb", "explanation": "Yes. To dance is to move your body to music." },
    { "type": "tf", "prompt": "Fish can swim.", "answer": true, "target": "swim", "explanation": "Yes. To swim is to move through water. Fish live in water." },
    { "type": "tf", "prompt": "When you have fun, you feel bad.", "answer": false, "target": "fun", "explanation": "No. Fun is a good time. When you have fun, you feel good." },
    { "type": "tf", "prompt": "Your favorite is the one you like the most.", "answer": true, "target": "favorite", "targetType": "noun", "explanation": "Yes. A favorite is the thing that you like more than all the others." },
    { "type": "tf", "prompt": "A movie is something you eat.", "answer": false, "target": "movie", "explanation": "No. You watch a movie. You eat food." },
    { "type": "tf", "prompt": "A song is something you wear on your feet.", "answer": false, "target": "song", "explanation": "No. A song is words and music that people sing. You wear shoes on your feet." },
    { "type": "tf", "prompt": "You can play with a ball.", "answer": true, "target": "ball", "explanation": "Yes. A ball is a thing that you use in many sports and games." },
    { "type": "tf", "prompt": "You go swimming on a bike.", "answer": false, "target": "swimming", "explanation": "No. Swimming is moving in water. You ride a bike on the road." }
  ],
  "A1|vocabulary|9|tf|medium": [
    { "type": "tf", "prompt": "You make art when you draw or paint.", "answer": true, "target": "art", "explanation": "Yes. Art is pictures and other beautiful things that people make." },
    { "type": "tf", "prompt": "A band is a group of people who play music together.", "answer": true, "target": "band", "explanation": "Yes. Four friends who play music together are a band." },
    { "type": "tf", "prompt": "A painting is a picture that you make with a camera.", "answer": false, "target": "painting", "explanation": "No. A painting is made with colors. A camera makes a photo." },
    { "type": "tf", "prompt": "A magazine can have many pictures and stories.", "answer": true, "target": "magazine", "explanation": "Yes. A magazine is a book with pictures and stories." },
    { "type": "tf", "prompt": "Basketball is a kind of music.", "answer": false, "target": "basketball", "explanation": "No. Basketball is a sport with a big ball. Two teams play it." },
    { "type": "tf", "prompt": "A player is a person who only watches a game.", "answer": false, "target": "player", "explanation": "No. A player is a person who plays a game or a sport." },
    { "type": "tf", "prompt": "Two people can play tennis.", "answer": true, "target": "tennis", "explanation": "Yes. Tennis is a sport with a small ball. Two or four people play it." },
    { "type": "tf", "prompt": "At a concert, people sleep in their beds.", "answer": false, "target": "concert", "explanation": "No. At a concert, people hear music from a singer or a band." }
  ],
  "A1|vocabulary|9|tf|hard": [
    { "type": "tf", "prompt": "People can watch a play in a theater.", "answer": true, "target": "theater", "explanation": "Yes. A theater is a place where people watch a play or a movie." },
    { "type": "tf", "prompt": "You climb when you go up a mountain.", "answer": true, "target": "climb", "explanation": "Yes. To climb is to go up something, like a mountain or a tree." },
    { "type": "tf", "prompt": "People go to a gym to watch a movie.", "answer": false, "target": "gym", "explanation": "No. People go to a gym to do exercise and play sports. They watch a movie at a theater." },
    { "type": "tf", "prompt": "Exercise is good for your body.", "answer": true, "target": "exercise", "targetType": "noun", "explanation": "Yes. Exercise is moving your body to stay strong." },
    { "type": "tf", "prompt": "When you join a team, you leave it.", "answer": false, "target": "join", "explanation": "No. To join a team is to become a part of it." },
    { "type": "tf", "prompt": "Dancing is moving in water with your arms and legs.", "answer": false, "target": "dancing", "explanation": "No. That is swimming. Dancing is moving your body to music." },
    { "type": "tf", "prompt": "A festival can have music, food and many people.", "answer": true, "target": "festival", "explanation": "Yes. A festival is a big event for many people, often with music and food." },
    { "type": "tf", "prompt": "A hobby is something you must do for your job.", "answer": false, "target": "hobby", "explanation": "No. A hobby is something that you like to do in your free time." }
  ],
  "A1|vocabulary|9|tf|veryhard": [
    { "type": "tf", "prompt": "Students need a lot of practice to get better at English.", "answer": true, "target": "practice", "targetType": "noun", "explanation": "Yes. Practice is time that you use to get better at something." },
    { "type": "tf", "prompt": "A rule tells you what you can do in a game.", "answer": true, "target": "rule", "explanation": "Yes. A rule says what you can and cannot do." },
    { "type": "tf", "prompt": "If a movie interests you, you want to leave.", "answer": false, "target": "interest", "targetType": "verb", "explanation": "No. If a movie interests you, you want to learn more about it or keep watching." },
    { "type": "tf", "prompt": "A match is a place where people buy food.", "answer": false, "target": "match", "targetType": "noun", "explanation": "No. A match is a game between two teams or two players." },
    { "type": "tf", "prompt": "If a movie is amazing, you like it a lot.", "answer": true, "target": "amazing", "explanation": "Yes. Amazing means very, very good." },
    { "type": "tf", "prompt": "If something is cool, you hate it.", "answer": false, "target": "cool", "explanation": "No. Cool means nice, and many people like it." },
    { "type": "tf", "prompt": "An action movie has many exciting things that happen.", "answer": true, "target": "action", "explanation": "Yes. Action is the exciting things that happen quickly in a movie." },
    { "type": "tf", "prompt": "An awesome party is a bad party.", "answer": false, "target": "awesome", "explanation": "No. Awesome means very, very good." }
  ],
  "A1|vocabulary|9|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dance", "right": "to move to music, often with other people at a party", "type": "verb" },
      { "left": "draw", "right": "to make pictures of people or animals with a pencil" },
      { "left": "swim", "right": "to move through water, like a fish does" },
      { "left": "team", "right": "the people who play together against other people in a game" }
    ], "explanation": "People dance to music. You draw with a pencil, and fish swim in water. A team is the people who play together." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "fun", "right": "a good feeling that you get when you do something nice" },
      { "left": "favorite", "right": "liked more than all the others", "type": "adjective" },
      { "left": "picture", "right": "it can be a drawing, a photo or a painting, on a wall or in a book" },
      { "left": "music", "right": "what you hear when someone plays a guitar or sings" }
    ], "explanation": "Fun is a good feeling. Your favorite thing is the one you like most. You look at a picture on a wall and hear music from a guitar." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "ball", "right": "children play with it in the park, and it can be big or small" },
      { "left": "game", "right": "you play it with friends, and one person or team wins" },
      { "left": "sing", "right": "to say the words of a song with music" },
      { "left": "movie", "right": "you go to a theater to watch it, and it has a story" }
    ], "explanation": "Children play with a ball. In a game, one person or team wins. To sing is to say the words of a song, and a movie has a story." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "sport", "right": "tennis and swimming are two examples" },
      { "left": "song", "right": "a piece of music with words, three or four minutes long" },
      { "left": "party", "right": "friends come to a house to eat, talk and dance" },
      { "left": "photo", "right": "a picture of your family that you keep on a phone or in a book" }
    ], "explanation": "Tennis and swimming are sports. People sing a song, and friends eat and dance at a party. You keep a photo of your family." }
  ],
  "A1|vocabulary|9|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "art", "right": "things like pictures that you can see in a museum" },
      { "left": "band", "right": "a group that sings and plays together at concerts" },
      { "left": "lose", "right": "to finish a game without being the best" },
      { "left": "football", "right": "two teams play it with one ball, and many people love to watch it" }
    ], "explanation": "Pictures in a museum are art. A band sings and plays at concerts. To lose is to not be the best in a game, and football has two teams." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "paint", "right": "to use colors on a wall or to make a picture", "type": "verb" },
      { "left": "magazine", "right": "you can buy it at a store and read it, and it has many photos" },
      { "left": "camera", "right": "you carry it on a trip to take photos of places" },
      { "left": "basketball", "right": "a sport that players play in a gym with a big orange ball" }
    ], "explanation": "To paint is to put color on something. A magazine has many photos, and you take photos of places with a camera. Basketball is played with a big orange ball." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "painting", "right": "something beautiful on a wall that a person made with colors" },
      { "left": "baseball", "right": "a sport with a small ball and nine players on each team" },
      { "left": "player", "right": "a person who plays on a team" },
      { "left": "guitar", "right": "a music thing that many singers play when they sing" }
    ], "explanation": "A painting is made with colors. Baseball has nine players on each team. A player plays on a team, and many singers play a guitar." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "story", "right": "something you read or hear about a person or an animal, for example in a book" },
      { "left": "tennis", "right": "you can play this sport with a friend in a park" },
      { "left": "win", "right": "to get more points than the other team" },
      { "left": "piano", "right": "you sit at it and play music with its keys" }
    ], "explanation": "You read a story in a book. You can play tennis with a friend. To win is to get more points, and you play music with the keys of a piano." }
  ],
  "A1|vocabulary|9|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "theater", "right": "a place with many chairs where you sit and watch a story" },
      { "left": "event", "right": "something special that happens at a school or in a town" },
      { "left": "climb", "right": "to use your hands and feet to go up a wall or a high place" },
      { "left": "exercise", "right": "running, swimming and other things you do to be strong", "type": "noun" }
    ], "explanation": "You sit in a theater and watch a story, and an event is something special. You climb with your hands and feet. Running and swimming are exercise." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "show", "right": "what you watch on TV with your family in the evening", "type": "noun" },
      { "left": "gym", "right": "a big room where people do sports every week and get strong" },
      { "left": "shopping", "right": "going to stores to look at things and buy them" },
      { "left": "join", "right": "to go into a team or a club and be with the people there" }
    ], "explanation": "You watch a show on TV. People get strong in a gym. Shopping is going to stores to buy things, and to join is to go into a team and be with the people there." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "club", "right": "a group that you can join at school, for example for music" },
      { "left": "reading", "right": "what you do with a book, in bed or on a bus" },
      { "left": "singer", "right": "a person who sings for other people as a job" },
      { "left": "hobby", "right": "the word for things like swimming, dancing or cooking that you like to do in your free time" }
    ], "explanation": "You can join a club at school. You read a book in bed, and a singer sings for other people. Swimming, dancing and cooking are hobbies." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dancing", "right": "what people do at a party when the music is on" },
      { "left": "pool", "right": "a place where you can swim, at a hotel or at a gym" },
      { "left": "cooking", "right": "what you do in the kitchen to make dinner" },
      { "left": "activity", "right": "the word for things like games, classes and trips" }
    ], "explanation": "People do dancing at a party when the music is on. You swim in a pool. You do cooking in the kitchen, and games, classes and trips are activities." }
  ],
  "A1|vocabulary|9|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "practice", "right": "to do something again and again to get better", "type": "verb" },
      { "left": "interest", "right": "something that you like to learn about or do, like music or sports", "type": "noun" },
      { "left": "rule", "right": "what players must follow in a game" },
      { "left": "amazing", "right": "so good that you cannot believe it" }
    ], "explanation": "You practice to get better. An interest is something you like to learn about. Players follow a rule in a game, and something amazing is so good that you cannot believe it." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "photograph", "right": "a picture of a person or a place that you made with a camera" },
      { "left": "match", "right": "to go well with something, like a blue hat with a blue coat", "type": "verb" },
      { "left": "sound", "right": "what your ears hear", "type": "noun" },
      { "left": "cool", "right": "nice, and many people like it" }
    ], "explanation": "A photograph is made with a camera. A blue hat and a blue coat match. Your ears hear a sound, and something cool is nice and liked by many people." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "final", "right": "the last one in a group of games or events" },
      { "left": "real", "right": "true and not only an idea or a picture" },
      { "left": "popular", "right": "that a lot of people want to hear, see or buy" },
      { "left": "fantastic", "right": "very, very good" }
    ], "explanation": "The final is the last one. A real thing is not only an idea. A lot of people want a popular thing, and something fantastic is very, very good." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "point", "right": "a number that a player gets in a game for doing something well" },
      { "left": "terrible", "right": "very, very bad" },
      { "left": "action", "right": "a kind of movie where things happen very fast and are exciting" },
      { "left": "wonderful", "right": "very good, and it makes you happy" }
    ], "explanation": "A player gets a point for doing well. Terrible is very, very bad. An action movie is fast and exciting, and something wonderful makes you happy." }
  ]
});
