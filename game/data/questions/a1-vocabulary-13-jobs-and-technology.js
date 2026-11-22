/* Questions: A1 Vocabulary, theme 13 Jobs and Technology (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|13|mc|easy": [
    { "type": "mc", "prompt": "A ___ works on a farm with animals and plants.", "options": ["farmer", "chair", "shoe", "cup"], "explanation": "A farmer is a person who works on a farm." },
    { "type": "mc", "prompt": "Ben and Mia paint beautiful pictures. They are famous ___.", "options": ["artists", "shoes", "buses", "hats"], "target": "artist", "explanation": "An artist is a person who makes pictures. Ben and Mia paint, so they are artists." },
    { "type": "mc", "prompt": "When you are sick, you go to the ___.", "options": ["doctor", "bank", "bus", "apple"], "explanation": "A doctor helps sick people to get well." },
    { "type": "mc", "prompt": "The ___ at our school helps us learn English.", "options": ["teacher", "bed", "door", "bus"], "explanation": "A teacher helps students learn at a school." },
    { "type": "mc", "prompt": "Call the ___ if you see a bad thing in the street.", "options": ["police", "key", "door", "soup"], "explanation": "The police help people and stop bad things in the street." },
    { "type": "mc", "prompt": "My father is a taxi ___. He works at night.", "options": ["driver", "soup", "cup", "hat"], "explanation": "A taxi driver drives a taxi. It is his job." },
    { "type": "mc", "prompt": "A ___ sings songs at a concert.", "options": ["singer", "chair", "window", "shoe"], "explanation": "A singer is a person who sings, for example at a concert." },
    { "type": "mc", "prompt": "Anna and Maria are ___. They work in movies.", "options": ["actresses", "chairs", "desks", "doors"], "target": "actress", "explanation": "An actress is a woman who plays a person in a movie." }
  ],
  "A1|vocabulary|13|mc|medium": [
    { "type": "mc", "prompt": "Maria writes ___ to her friends on her computer.", "options": ["emails", "hats", "cups", "doors"], "target": "email", "targetType": "noun", "explanation": "An email is a message that you send on a computer." },
    { "type": "mc", "prompt": "My dad buys a ___ and reads it with his coffee.", "options": ["newspaper", "hat", "shoe", "door"], "explanation": "A newspaper is a big paper with the news. Many people read it every morning." },
    { "type": "mc", "prompt": "We watch a short ___ on the internet.", "options": ["video", "door", "shoe", "soup"], "explanation": "A video is a short movie that you watch." },
    { "type": "mc", "prompt": "Tom's family watches a movie on the ___ in the evening.", "options": ["TV", "newspaper", "magazine", "letter"], "explanation": "A TV shows movies and the news. Tom's family watches it at home." },
    { "type": "mc", "prompt": "Ben works on his ___ and sends emails.", "options": ["computer", "newspaper", "radio", "magazine"], "explanation": "A computer is a machine that you use to write, play and look for things." },
    { "type": "mc", "prompt": "Anna watches the ___ on TV every evening to know about the world.", "options": ["news", "camera", "letter", "photo"], "explanation": "The news tells you what is happening in the world." },
    { "type": "mc", "prompt": "You move a ___ on a desk to use a computer.", "options": ["mouse", "radio", "camera", "letter"], "explanation": "A computer mouse is a small thing that you move with your hand." },
    { "type": "mc", "prompt": "Maria reads a ___ with pictures and stories every month.", "options": ["magazine", "phone", "radio", "camera"], "explanation": "A magazine is a small book with pictures and stories that comes out every month." }
  ],
  "A1|vocabulary|13|mc|hard": [
    { "type": "mc", "prompt": "Anna uses a new ___ on her computer to write letters.", "options": ["program", "meeting", "business", "company"], "explanation": "A program is a thing that you use on a computer." },
    { "type": "mc", "prompt": "Please ___ me an email about the meeting.", "options": ["send", "cook", "sing", "carry"], "explanation": "To send means to make something go to a person." },
    { "type": "mc", "prompt": "Tom has ___ English lessons on his computer.", "options": ["online", "warm", "sunny", "natural"], "targetType": "adjective", "explanation": "Online means on the internet. Tom learns with his computer." },
    { "type": "mc", "prompt": "My mother works for a big ___ in London.", "options": ["company", "career", "machine", "skill"], "explanation": "A company is a group of people who work together to make or sell things." },
    { "type": "mc", "prompt": "Anna has a small ___. She sells bread and cakes.", "options": ["business", "meeting", "program", "machine"], "explanation": "A business is the work of buying and selling things." },
    { "type": "mc", "prompt": "A washing ___ cleans our clothes.", "options": ["machine", "meeting", "career", "skill"], "explanation": "A machine is a thing that does work for you." },
    { "type": "mc", "prompt": "The ___ is at ten: the teachers talk about the new students.", "options": ["meeting", "machine", "career", "business"], "explanation": "A meeting is a time when people come together to talk." },
    { "type": "mc", "prompt": "Ali's ___ is long: he was a teacher, then a writer, and now an artist.", "options": ["career", "company", "business", "program"], "explanation": "A career is all the jobs that a person has in his or her life." }
  ],
  "A1|vocabulary|13|mc|veryhard": [
    { "type": "mc", "prompt": "Speaking English well is a useful ___ for many jobs.", "options": ["skill", "program", "machine", "meeting"], "explanation": "A skill is something that you can do well because you learned it." },
    { "type": "mc", "prompt": "My grandfather watches the news on the ___ every day.", "options": ["television", "newspaper", "magazine", "letter"], "explanation": "Television shows pictures and sound. You watch the news on it." },
    { "type": "mc", "prompt": "Anna wants to ___ a new program for her computer.", "options": ["create", "follow", "return", "ride"], "explanation": "To create means to make something new." },
    { "type": "mc", "prompt": "The company asks Ben some questions at the ___ for the new job.", "options": ["interview", "program", "machine", "skill"], "targetType": "noun", "explanation": "An interview is a meeting where someone asks you questions. Many people have one before a new job." },
    { "type": "mc", "prompt": "Maria writes about her day in her ___ on the internet, and many people read it.", "options": ["blog", "camera", "career", "meeting"], "explanation": "A blog is a place on the internet where a person writes about his or her life." },
    { "type": "mc", "prompt": "A ___ studies animals, plants and the world to learn new things.", "options": ["scientist", "singer", "waiter", "dancer"], "explanation": "A scientist works to learn new things about animals, plants and the world." },
    { "type": "mc", "prompt": "Ali's school project was a big ___: everybody liked it.", "options": ["success", "meeting", "camera", "blog"], "explanation": "A success is when something goes very well." },
    { "type": "mc", "prompt": "Anna's new phone is a different ___ from her old phone.", "options": ["model", "interview", "skill", "success"], "explanation": "A model is a type of a thing that a company makes, like a phone." }
  ],
  "A1|vocabulary|13|fill|easy": [
    { "type": "fill", "before": "The", "after": "paints pictures, and many people look at them.", "answer": "artist", "bank": ["artist", "kitchen", "bank"], "explanation": "An artist is a person who makes pictures." },
    { "type": "fill", "before": "The", "after": "in our office go home at five.", "answer": "workers", "bank": ["workers", "doors", "chairs"], "target": "worker", "explanation": "A worker is a person who has a job. These workers go home at five." },
    { "type": "fill", "before": "When Tom is sick, the", "after": "helps him to get well.", "answer": "doctor", "bank": ["doctor", "bus", "shoe"], "explanation": "A doctor helps sick people to get well." },
    { "type": "fill", "before": "The", "after": "moves with the music, and everybody watches her.", "answer": "dancer", "bank": ["dancer", "desk", "hat"], "explanation": "A dancer is a person who moves to music so that people can watch." },
    { "type": "fill", "before": "Amy's", "after": "is to teach children at a school.", "answer": "job", "bank": ["job", "door", "cup"], "explanation": "A job is the work that a person does to get money." },
    { "type": "fill", "before": "Tom and Ken work in movies. They are famous", "after": ".", "answer": "actors", "bank": ["actors", "keys", "cups"], "target": "actor", "explanation": "An actor is a person who plays someone in a movie." },
    { "type": "fill", "before": "My mom is a", "after": "and writes books for children.", "answer": "writer", "bank": ["writer", "window", "bag"], "explanation": "A writer is a person who writes books or stories." },
    { "type": "fill", "before": "The", "after": "in this movie is Maria. She is very good.", "answer": "actress", "bank": ["actress", "garden", "table"], "explanation": "An actress is a woman who plays a person in a movie." }
  ],
  "A1|vocabulary|13|fill|medium": [
    { "type": "fill", "before": "Ali sends Emma a", "after": "on his phone: \"See you at six.\"", "answer": "message", "bank": ["message", "window", "hat"], "explanation": "A message is words that you send to a person." },
    { "type": "fill", "before": "The", "after": "has news about sports, the weather and people.", "answer": "newspaper", "bank": ["newspaper", "garden", "bed"], "explanation": "A newspaper is a big paper with the news." },
    { "type": "fill", "before": "We listen to music on the", "after": "in the car.", "answer": "radio", "bank": ["radio", "table", "key"], "explanation": "A radio is a thing that you listen to music and the news on." },
    { "type": "fill", "before": "Dad watches football on the", "after": ".", "answer": "TV", "bank": ["TV", "desk", "bag"], "explanation": "A TV shows movies, football and the news." },
    { "type": "fill", "before": "Maria looks for a hotel on the", "after": ".", "answer": "internet", "bank": ["internet", "kitchen", "cup"], "explanation": "The internet is all the computers in the world that work together. You can look for things on it." },
    { "type": "fill", "before": "Tom's grandmother writes a", "after": "on paper and sends it to Tom by post.", "answer": "letter", "bank": ["letter", "shoe", "bus"], "targetType": "noun", "explanation": "A letter is a paper message that you send in the post." },
    { "type": "fill", "before": "Ben uses a", "after": "to open the program on his computer.", "answer": "mouse", "bank": ["mouse", "bed", "chair"], "explanation": "A computer mouse is a small thing that you move with your hand." },
    { "type": "fill", "before": "Elif takes a", "after": "of her family with her phone.", "answer": "photo", "bank": ["photo", "soup", "door"], "explanation": "A photo is a picture that you take with a camera or a phone." }
  ],
  "A1|vocabulary|13|fill|hard": [
    { "type": "fill", "before": "A map is very", "after": "when you are in a new city.", "answer": "useful", "bank": ["useful", "sunny", "natural", "warm"], "explanation": "Useful means good to use. A map helps you find places." },
    { "type": "fill", "before": "I want to", "after": "a letter to my grandmother.", "answer": "send", "bank": ["send", "cook", "eat", "drink"], "explanation": "To send a letter means to make it go to a person." },
    { "type": "fill", "before": "The", "after": "brings letters to our house every morning.", "answer": "post", "bank": ["post", "radio", "television", "computer"], "targetType": "noun", "explanation": "The post is the letters and small boxes that come to your house." },
    { "type": "fill", "before": "The", "after": "has two hundred workers and makes cars.", "answer": "company", "bank": ["company", "internet", "program", "machine"], "explanation": "A company is a group of people who work together to make or sell things." },
    { "type": "fill", "before": "Tom works at a desk in the", "after": "with five other people.", "answer": "office", "bank": ["office", "garden", "beach", "farm"], "explanation": "An office is a place where people work at desks." },
    { "type": "fill", "before": "Kate sends a", "after": "to her friend on her phone: \"I am late.\"", "answer": "text", "bank": ["text", "bag", "hat", "cup"], "targetType": "noun", "explanation": "A text is a short message that you send from a phone." },
    { "type": "fill", "before": "We have a", "after": "at work on Monday to talk about the new plan.", "answer": "meeting", "bank": ["meeting", "career", "skill", "success"], "explanation": "A meeting is a time when people come together to talk." },
    { "type": "fill", "before": "A", "after": "in a shop asks the worker about the price.", "answer": "customer", "bank": ["customer", "radio", "video", "program"], "explanation": "A customer is a person who buys things in a store." }
  ],
  "A1|vocabulary|13|fill|veryhard": [
    { "type": "fill", "before": "Cooking well is a great", "after": ", and you learn it from your mother.", "answer": "skill", "bank": ["skill", "message", "blog", "company"], "explanation": "A skill is something that you can do well because you learned it." },
    { "type": "fill", "before": "You can find the opening time on the hotel's", "after": ".", "answer": "website", "bank": ["website", "kitchen", "garden", "bed"], "explanation": "A website is a place on the internet with pages about a hotel or a company." },
    { "type": "fill", "before": "Artists", "after": "beautiful pictures.", "answer": "create", "bank": ["create", "follow", "ride", "sleep"], "explanation": "To create means to make something new, like a picture." },
    { "type": "fill", "before": "People use a", "after": "to talk to a friend far away.", "answer": "telephone", "bank": ["telephone", "television", "radio", "newspaper"], "targetType": "noun", "explanation": "A telephone lets you talk to a person far away." },
    { "type": "fill", "before": "Ken's", "after": "has many photos and stories about his trips.", "answer": "blog", "bank": ["blog", "television", "business", "newspaper"], "explanation": "A blog is a place on the internet where a person writes about his or her life." },
    { "type": "fill", "before": "I need more", "after": "about the hotel: the price and the address.", "answer": "information", "bank": ["information", "music", "bread", "shirt"], "explanation": "Information is facts that you learn about something." },
    { "type": "fill", "before": "The new movie is a big", "after": ": many people see it.", "answer": "success", "bank": ["success", "skill", "career", "company"], "explanation": "A success is when something goes very well." },
    { "type": "fill", "before": "Fatima reads a long", "after": "in the newspaper about the weather.", "answer": "article", "bank": ["article", "video", "job", "television"], "explanation": "An article is a text in a newspaper or a magazine." }
  ],
  "A1|vocabulary|13|tf|easy": [
    { "type": "tf", "prompt": "Many farmers get up very early in the morning.", "answer": true, "target": "farmer", "explanation": "Yes. A farmer has a lot of work with animals and plants, so many farmers get up early." },
    { "type": "tf", "prompt": "A worker is a person who is always on vacation.", "answer": false, "target": "worker", "explanation": "No. A worker has a job and works." },
    { "type": "tf", "prompt": "A dancer sits at a desk all day and writes emails.", "answer": false, "target": "dancer", "explanation": "No. A dancer moves to music." },
    { "type": "tf", "prompt": "A teacher often works in a school.", "answer": true, "target": "teacher", "explanation": "Yes. A teacher helps students learn, often in a school." },
    { "type": "tf", "prompt": "A nurse often works in a hospital.", "answer": true, "target": "nurse", "explanation": "Yes. A nurse helps sick people and often works in a hospital." },
    { "type": "tf", "prompt": "A taxi driver works in a kitchen and cooks meals.", "answer": false, "target": "driver", "explanation": "No. A taxi driver drives a taxi." },
    { "type": "tf", "prompt": "A singer works on a farm with cows.", "answer": false, "target": "singer", "explanation": "No. A singer sings songs. A farmer works on a farm." },
    { "type": "tf", "prompt": "A waiter often works in a restaurant.", "answer": true, "target": "waiter", "explanation": "Yes. A waiter brings food to the table in a restaurant." }
  ],
  "A1|vocabulary|13|tf|medium": [
    { "type": "tf", "prompt": "You can send an email with a computer or a phone.", "answer": true, "target": "email", "targetType": "noun", "explanation": "Yes. An email is a message that you send on a computer or a phone." },
    { "type": "tf", "prompt": "A message is a big building with many rooms.", "answer": false, "target": "message", "explanation": "No. A message is words that you send to a person." },
    { "type": "tf", "prompt": "People often watch a video on a phone or a computer.", "answer": true, "target": "video", "explanation": "Yes. A video is a short movie that you can watch on a phone or a computer." },
    { "type": "tf", "prompt": "Many people listen to music and the news on the radio.", "answer": true, "target": "radio", "explanation": "Yes. A radio is a thing that you listen to." },
    { "type": "tf", "prompt": "You wash your hands with a phone.", "answer": false, "target": "phone", "targetType": "noun", "explanation": "No. You use a phone to call people." },
    { "type": "tf", "prompt": "The news is a thing that you wear.", "answer": false, "target": "news", "explanation": "No. News tells you what is happening in the world." },
    { "type": "tf", "prompt": "Many phones have a camera.", "answer": true, "target": "camera", "explanation": "Yes. You can take photos with the camera in a phone." },
    { "type": "tf", "prompt": "A photo is a thing that you hear.", "answer": false, "target": "photo", "explanation": "No. A photo is a picture. You look at it." }
  ],
  "A1|vocabulary|13|tf|hard": [
    { "type": "tf", "prompt": "You can use a program on a computer to write letters.", "answer": true, "target": "program", "explanation": "Yes. A program is a thing that you use on a computer." },
    { "type": "tf", "prompt": "A useful thing is a thing that is bad to use.", "answer": false, "target": "useful", "explanation": "No. A useful thing is good to use. It helps you." },
    { "type": "tf", "prompt": "If you work online, you work on a computer with the internet.", "answer": true, "target": "online", "targetType": "adverb", "explanation": "Yes. Online means on the internet." },
    { "type": "tf", "prompt": "When you post a letter, you keep it at home.", "answer": false, "target": "post", "targetType": "verb", "explanation": "No. When you post a letter, you send it to a person." },
    { "type": "tf", "prompt": "Many people work at a desk in an office.", "answer": true, "target": "office", "explanation": "Yes. An office is a place where people work at desks." },
    { "type": "tf", "prompt": "A business is a person who buys things in a store.", "answer": false, "target": "business", "explanation": "No. A person who buys things in a store is a customer. A business is the work of buying and selling things." },
    { "type": "tf", "prompt": "A baby can become a child, and a child can become an adult.", "answer": true, "target": "become", "explanation": "Yes. To become means to start to be something new." },
    { "type": "tf", "prompt": "A customer is a person who works in a store and sells things.", "answer": false, "target": "customer", "explanation": "No. A customer buys things in a store. The worker sells them." }
  ],
  "A1|vocabulary|13|tf|veryhard": [
    { "type": "tf", "prompt": "People watch movies and the news on television.", "answer": true, "target": "television", "explanation": "Yes. Television shows pictures and sound at home." },
    { "type": "tf", "prompt": "A website is a place on the internet.", "answer": true, "target": "website", "explanation": "Yes. A website has pages about a hotel, a company or a person." },
    { "type": "tf", "prompt": "When you create a picture, you only look at a picture.", "answer": false, "target": "create", "explanation": "No. To create a picture is to make a new picture." },
    { "type": "tf", "prompt": "People talk to friends far away by telephone.", "answer": true, "target": "telephone", "targetType": "noun", "explanation": "Yes. A telephone lets you talk to a person far away." },
    { "type": "tf", "prompt": "You go to an interview to buy shoes.", "answer": false, "target": "interview", "targetType": "noun", "explanation": "No. You go to an interview to answer questions, for example for a new job." },
    { "type": "tf", "prompt": "Information is a place where you sleep.", "answer": false, "target": "information", "explanation": "No. Information is facts that you learn about something." },
    { "type": "tf", "prompt": "A reader is a person who sells bread in a store.", "answer": false, "target": "reader", "explanation": "No. A reader is a person who reads." },
    { "type": "tf", "prompt": "A magazine often has an article about the weather.", "answer": true, "target": "article", "explanation": "Yes. An article is a text in a newspaper or a magazine." }
  ],
  "A1|vocabulary|13|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "farmer", "right": "a person who works on a farm" },
      { "left": "artist", "right": "a person who paints pictures" },
      { "left": "worker", "right": "a person who works in an office or a shop and gets money every month" },
      { "left": "doctor", "right": "a person who helps sick people to get well" }
    ], "explanation": "A farmer works on a farm, and an artist paints. A worker works in an office or a shop, and a doctor helps sick people." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "dancer", "right": "a person who moves to music so that people can watch" },
      { "left": "teacher", "right": "a person who helps students learn at a school" },
      { "left": "nurse", "right": "a person who helps sick people in a hospital" },
      { "left": "police", "right": "people who stop bad things in the street" }
    ], "explanation": "A dancer moves to music, and a teacher helps students learn. A nurse helps sick people in a hospital, and the police stop bad things." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "job", "right": "the work that a person does to get money" },
      { "left": "actor", "right": "a man who plays a person in a movie" },
      { "left": "writer", "right": "a person who writes books or stories" },
      { "left": "waiter", "right": "a person who brings food to the table in a restaurant" }
    ], "explanation": "A job is work for money. An actor plays a person in a movie, and a writer writes books. A waiter brings food to the table." }
  ],
  "A1|vocabulary|13|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "email", "right": "a message that you send on a computer", "type": "noun" },
      { "left": "newspaper", "right": "a big paper with the news that comes out every day" },
      { "left": "video", "right": "a short movie that you watch" },
      { "left": "phone", "right": "you use it to call people and talk to them", "type": "noun" }
    ], "explanation": "You send an email on a computer. A newspaper has the news every day. You watch a video, and you call people on a phone." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "message", "right": "words that you send to a person, on paper or on a phone" },
      { "left": "radio", "right": "you listen to music and the news on it" },
      { "left": "internet", "right": "all the computers in the world that work together, where you look for things" },
      { "left": "camera", "right": "you use it to take photos" }
    ], "explanation": "A message is words that you send. You listen to a radio, and you look for things on the internet. You take photos with a camera." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "TV", "right": "a big thing with pictures and sound that many families watch together in the evening" },
      { "left": "computer", "right": "you use it to write, play games and look for things" },
      { "left": "letter", "right": "a paper message that you send in the post", "type": "noun" },
      { "left": "magazine", "right": "a small book with pictures and stories that comes out every month" }
    ], "explanation": "Many families watch a TV in the evening, and you write on a computer. A letter goes in the post. A magazine comes out every month." }
  ],
  "A1|vocabulary|13|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "program", "right": "a thing that you use on a computer, for example to write letters" },
      { "left": "useful", "right": "good to use, because it helps you" },
      { "left": "send", "right": "to make a letter or a message go to a person" },
      { "left": "company", "right": "a group of people who work together to make or sell things" }
    ], "explanation": "You use a program on a computer. A useful thing helps you. You send a message to a person, and a company is a group of workers." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "online", "right": "on the internet", "type": "adjective" },
      { "left": "post", "right": "to put a letter in a box so that it goes to a person", "type": "verb" },
      { "left": "office", "right": "a room or a building where people work at desks" },
      { "left": "become", "right": "to change and start to be something new" }
    ], "explanation": "Online means on the internet, and you post a letter to send it. People work at desks in an office, and to become is to start to be something new." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "business", "right": "the work of buying and selling things" },
      { "left": "machine", "right": "a thing that does work for you, like one that washes clothes" },
      { "left": "text", "right": "a short message that you send from a phone", "type": "noun" },
      { "left": "career", "right": "all the jobs that a person has in his or her life" }
    ], "explanation": "A business buys and sells things. A machine does work for you. A text is a short message from a phone, and a career is all your jobs." }
  ],
  "A1|vocabulary|13|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "skill", "right": "something that you can do well because you learned it" },
      { "left": "television", "right": "pictures and sound at home that show movies and the news" },
      { "left": "website", "right": "a place on the internet with pages about a company or a person" },
      { "left": "telephone", "right": "you use it to call and talk to a person far away", "type": "noun" }
    ], "explanation": "A skill is something you learned to do well. Television shows movies, and a website is on the internet. A telephone lets you talk to a person far away." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "interview", "right": "a meeting where someone asks you questions, for example for a new job", "type": "noun" },
      { "left": "scientist", "right": "a person who works to learn new things about animals, plants and the world" },
      { "left": "reader", "right": "a person who reads a book, a blog or a newspaper" },
      { "left": "model", "right": "a type of a thing that a company makes, like a phone or a car" }
    ], "explanation": "In an interview, someone asks you questions. A scientist learns about the world, and a reader reads. A model is a type of a phone or a car." }
  ]
});
