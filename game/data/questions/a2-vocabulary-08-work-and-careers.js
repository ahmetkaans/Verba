/* Questions: A2 Vocabulary, theme 8 Work and Careers (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|8|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|8|mc|easy": [
    {"type": "mc", "prompt": "My ___ is angry because I came late to work again.", "options": ["boss", "detective", "businessman", "painter"], "explanation": "A boss is the person who tells workers what to do. A boss can be angry when a worker comes late."},
    {"type": "mc", "prompt": "The ___ cooks the soup and the fish in the hotel kitchen.", "options": ["chef", "director", "secretary", "coach"], "explanation": "A chef is a person who cooks meals as a job. You find a chef in a restaurant or hotel kitchen."},
    {"type": "mc", "prompt": "Our basketball ___ makes us run for ten minutes before every game.", "options": ["coach", "pilot", "lawyer", "painter"], "targetType": "noun", "explanation": "A coach trains a sports team. Running before a game is part of the training."},
    {"type": "mc", "prompt": "My tooth hurts, so I'm going to the ___ at four o'clock.", "options": ["dentist", "boss", "officer", "engineer"], "explanation": "A dentist is a doctor for your teeth. You visit one when a tooth hurts."},
    {"type": "mc", "prompt": "My uncle is a ___ and helps people with problems about the law.", "options": ["lawyer", "leader", "designer", "dentist"], "explanation": "A lawyer gives advice about the law and helps people who have a problem with it."},
    {"type": "mc", "prompt": "The ___ said, \"Welcome to the plane. We will fly for two hours.\"", "options": ["pilot", "director", "detective", "dentist"], "explanation": "A pilot flies a plane. The pilot talks to the passengers before the flight."},
    {"type": "mc", "prompt": "The hotel ___ checks the work of the cooks and talks to the guests.", "options": ["manager", "clerk", "expert", "officer"], "explanation": "A manager looks after a hotel, a shop or a team. The manager checks that everything is fine."},
    {"type": "mc", "prompt": "Hundreds of workers make cars in the ___ outside the town.", "options": ["factory", "department", "target", "role"], "explanation": "A factory is a big building where workers use machines to make things, such as cars."}
  ],
  "A2|vocabulary|8|mc|medium": [
    {"type": "mc", "prompt": "The doctor has a young ___ who answers the phone and helps with the papers.", "options": ["assistant", "designer", "journalist", "engineer"], "targetType": "noun", "explanation": "An assistant helps another person at work. This assistant answers the phone and helps with papers."},
    {"type": "mc", "prompt": "Tom: \"Is that man your friend?\"\nPia: \"No, he's just a ___. We work in the same office.\"", "options": ["colleague", "dentist", "designer", "painter"], "explanation": "A colleague is a person who works with you. Pia and the man work in the same office."},
    {"type": "mc", "prompt": "Please go to the sales ___ on the third floor and ask about the prices.", "options": ["department", "factory", "strategy", "material"], "explanation": "A department is a part of a big company where people do one kind of work, such as sales."},
    {"type": "mc", "prompt": "The ___ checked the new bridge and said that it was safe.", "options": ["engineer", "coach", "lawyer", "secretary"], "explanation": "An engineer plans and checks things like machines, roads and bridges."},
    {"type": "mc", "prompt": "I want to ___ for a job at the new hospital. I'm writing my letter now.", "options": ["apply", "succeed", "manage", "fire"], "targetType": "verb", "explanation": "To apply for a job is to ask for it, often in a letter. Writing a letter is the first step."},
    {"type": "mc", "prompt": "She can ___ the shop alone when the owner is away.", "options": ["manage", "achieve", "apply", "employ"], "targetType": "verb", "explanation": "To manage a shop is to look after it and its work. She can do this alone."},
    {"type": "mc", "prompt": "This farm can ___ enough milk for the whole town.", "options": ["produce", "manage", "achieve", "attend"], "targetType": "verb", "explanation": "To produce something is to make it. A farm produces milk, eggs and vegetables."},
    {"type": "mc", "prompt": "Our company earned more money than ever, so it was a very ___ year.", "options": ["successful", "professional", "working", "small"], "explanation": "Successful means getting a good result. Earning more money than ever is a good result."}
  ],
  "A2|vocabulary|8|mc|hard": [
    {"type": "mc", "prompt": "The ___ drew plans for a new school with a big garden.", "options": ["architect", "employee", "painter", "chef"], "explanation": "An architect draws plans for houses and other buildings before the workers start."},
    {"type": "mc", "prompt": "Mr. Park owns three shops and sells goods to other companies. He is a rich ___.", "options": ["businessman", "journalist", "lawyer", "coach"], "targetType": "noun", "explanation": "A businessman is a man whose work is business, such as buying and selling. Mr. Park owns shops and sells goods."},
    {"type": "mc", "prompt": "The two-day ___ about new phones has many talks, a big hall and a lunch.", "options": ["conference", "organization", "industry", "reception"], "explanation": "A conference is a big meeting where many people talk about one subject, for example new phones."},
    {"type": "mc", "prompt": "The ___ asked the neighbors who saw the thief and tried to find him.", "options": ["detective", "employer", "leader", "lawyer"], "explanation": "A detective is a person whose job is to find out who did a crime. Asking the neighbors helps to find the thief."},
    {"type": "mc", "prompt": "Her ___ pays her every month and gives her ten days of vacation.", "options": ["employer", "instructor", "colleague", "officer"], "explanation": "An employer is a person or a company that pays people to work for them."},
    {"type": "mc", "prompt": "The gym needs new ___, such as running machines and heavy weights.", "options": ["equipment", "experience", "power", "material"], "explanation": "Equipment means the machines and tools that you need for a job or a sport."},
    {"type": "mc", "prompt": "Do you have any ___ of working in a hotel? Have you done it before?", "options": ["experience", "conference", "tool", "salary"], "targetType": "noun", "explanation": "Experience is what you learn from doing a job. A hotel asks if you did the work before."},
    {"type": "mc", "prompt": "She is the computer ___ of our company and knows everything about it.", "options": ["expert", "boss", "pilot", "businessman"], "targetType": "noun", "explanation": "An expert knows a lot about one subject. Here the expert knows everything about computers."}
  ],
  "A2|vocabulary|8|mc|veryhard": [
    {"type": "mc", "prompt": "If you work hard every day, you can ___ your dream of owning a shop.", "options": ["achieve", "manage", "attend", "produce"], "targetType": "verb", "explanation": "To achieve something is to get it after trying hard. A dream of owning a shop needs hard work."},
    {"type": "mc", "prompt": "All workers must ___ the important meeting on Monday morning at nine.", "options": ["attend", "achieve", "apply", "earn"], "targetType": "verb", "explanation": "To attend a meeting is to go to it. Workers must be in the room at nine."},
    {"type": "mc", "prompt": "The new restaurant will ___ ten people: cooks, waiters and drivers.", "options": ["employ", "succeed", "earn", "apply"], "targetType": "verb", "explanation": "To employ people is to pay them to work for you. A new restaurant employs cooks and waiters."},
    {"type": "mc", "prompt": "Money is an important ___ when you choose a job, but not the only one.", "options": ["factor", "role", "process", "purpose"], "explanation": "A factor is one of the things that help you to decide something, such as money when you choose a job."},
    {"type": "mc", "prompt": "The best ___ of this job is that I can work at home two days.", "options": ["feature", "target", "task", "strategy"], "targetType": "noun", "explanation": "A feature is a special or important part of something. Working at home is a good feature of a job."},
    {"type": "mc", "prompt": "A driving ___ sat next to me and said, \"Slow down at the corner.\"", "options": ["instructor", "pilot", "journalist", "chef"], "explanation": "An instructor teaches you a skill, such as driving or swimming."},
    {"type": "mc", "prompt": "A big machine uses the wind to make electric ___ for the lights of the village.", "options": ["power", "training", "material", "strategy"], "targetType": "noun", "explanation": "Power here means the energy, such as electricity, that makes things work."},
    {"type": "mc", "prompt": "First you cut the wood, then you paint it. It is a simple ___.", "options": ["process", "tool", "feature", "purpose"], "targetType": "noun", "explanation": "A process is a number of steps that you follow to make or do something."}
  ],
  "A2|vocabulary|8|fill|easy": [
    {"type": "fill", "before": "Use the right", "after": "for each job: a knife for bread and a brush for paint.", "answer": "tool", "bank": ["tool", "opportunity", "factor"], "targetType": "noun", "explanation": "A tool is something you hold in your hand to do a job. A knife and a brush are tools."},
    {"type": "fill", "before": "Cleaning the kitchen is my first", "after": "of the day.", "answer": "task", "bank": ["task", "equipment", "feature"], "explanation": "A task is a piece of work that you have to do. Cleaning the kitchen is one task."},
    {"type": "fill", "before": "If the company has no money, the boss may have to", "after": "some workers.", "answer": "fire", "bank": ["fire", "succeed", "earn"], "targetType": "verb", "explanation": "To fire a worker is to tell that person to leave the job. A company with no money may have to do this."},
    {"type": "fill", "before": "A teacher can", "after": "about 3,000 dollars a month in this town.", "answer": "earn", "bank": ["earn", "employ", "organize"], "targetType": "verb", "explanation": "To earn money is to get it for your work. A teacher gets money every month."},
    {"type": "fill", "before": "Tom likes his job, but his", "after": "is low, so he wants more money.", "answer": "salary", "bank": ["salary", "conference", "training"], "explanation": "A salary is the money you get from your job every month. A low salary means little money."},
    {"type": "fill", "before": "Saturday and Sunday are free days, and Monday to Friday are", "after": "days.", "answer": "working", "bank": ["working", "successful", "professional"], "targetType": "adjective", "explanation": "Working days are the days when you go to work. Saturday and Sunday are not working days."},
    {"type": "fill", "before": "The team", "after": ", Mia, decides who does each job and helps us all.", "answer": "leader", "bank": ["leader", "secretary", "employer"], "explanation": "A leader is in front of a group and shows the others what to do. Mia decides who does each job."},
    {"type": "fill", "before": "Ali: \"Why so happy?\"\nSara: \"My", "after": "says I can work at home on Fridays!\"", "answer": "boss", "bank": ["boss", "architect", "employee"], "explanation": "A boss tells workers what to do. Only a boss can say that you may work at home."}
  ],
  "A2|vocabulary|8|fill|medium": [
    {"type": "fill", "before": "The bank", "after": "counted my money and gave me a paper to sign.", "answer": "clerk", "bank": ["clerk", "chef", "dentist"], "explanation": "A clerk works in an office or a bank and does jobs such as counting and writing papers."},
    {"type": "fill", "before": "The", "after": "drew a new picture and chose bright colors for our company's bags.", "answer": "designer", "bank": ["designer", "clerk", "chef"], "explanation": "A designer plans how things will look. Drawing a picture and choosing colors is design work."},
    {"type": "fill", "before": "The film", "after": "told the actors where to stand and then said, \"Action!\"", "answer": "director", "bank": ["director", "secretary", "officer"], "explanation": "A film director tells the actors what to do. The director says, \"Action!\" when the film starts."},
    {"type": "fill", "before": "The boss and every other", "after": "in the factory must wear a yellow coat.", "answer": "employee", "bank": ["employee", "department", "task"], "explanation": "An employee works for a company. Here the boss and all the other workers must wear a yellow coat."},
    {"type": "fill", "before": "The", "after": "painted our kitchen walls yellow in two days.", "answer": "painter", "bank": ["painter", "engineer", "expert"], "explanation": "A painter paints walls and houses as a job. This painter finished the kitchen in two days."},
    {"type": "fill", "before": "The police", "after": "stopped our car and asked where we were going.", "answer": "officer", "bank": ["officer", "assistant", "engineer"], "explanation": "A police officer works for the police. Officers stop cars and ask questions."},
    {"type": "fill", "before": "The", "after": "answers the phone, writes the letters and keeps the boss's papers in order.", "answer": "secretary", "bank": ["secretary", "journalist", "leader"], "explanation": "A secretary helps a boss with phone calls, letters and papers."},
    {"type": "fill", "before": "Nina is not my boss. She is my", "after": ": we do the same job in the same team.", "answer": "colleague", "bank": ["colleague", "pilot", "clerk"], "explanation": "A colleague is a person who works with you. Nina does the same job in the same team."}
  ],
  "A2|vocabulary|8|fill|hard": [
    {"type": "fill", "before": "Many people in this region work in the car", "after": ", and there are ten big factories.", "answer": "industry", "bank": ["industry", "reception", "training", "conference"], "explanation": "An industry is the companies that make one kind of thing. The car industry makes cars."},
    {"type": "fill", "before": "The", "after": "asked the mayor three questions and wrote an article for the newspaper.", "answer": "journalist", "bank": ["journalist", "designer", "detective", "businessman"], "explanation": "A journalist writes news stories for a newspaper. Asking the mayor questions is part of that work."},
    {"type": "fill", "before": "Wood is a strong", "after": "for building houses.", "answer": "material", "bank": ["material", "experience", "tool", "power"], "targetType": "noun", "explanation": "A material is what you use to make something. Wood, stone and paper are materials."},
    {"type": "fill", "before": "She works for a big", "after": "that helps children in poor countries.", "answer": "organization", "bank": ["organization", "factory", "equipment", "opportunity"], "explanation": "An organization is a big group of people who work together, such as a company or a school. Here it helps children."},
    {"type": "fill", "before": "Can you help me", "after": "the party for the new employees on Friday?", "answer": "organize", "bank": ["organize", "apply", "employ", "produce"], "targetType": "verb", "explanation": "To organize a party is to plan it and get everything ready."},
    {"type": "fill", "before": "New workers get two weeks of", "after": "before they start on their own.", "answer": "training", "bank": ["training", "reception", "equipment", "factor"], "explanation": "Training is lessons that teach you how to do a job. New workers need it before they work alone."},
    {"type": "fill", "before": "This job in another country is a great", "after": "for me to learn a new language.", "answer": "opportunity", "bank": ["opportunity", "task", "salary", "department"], "explanation": "An opportunity is a chance to do something good. A job in another country is a chance to learn a language."},
    {"type": "fill", "before": "Dr. Kim gave a short talk at the sales", "after": "about our new coffee machines.", "answer": "conference", "bank": ["conference", "industry", "organization", "process"], "explanation": "A conference is a big meeting where people give talks. Dr. Kim gave one there."}
  ],
  "A2|vocabulary|8|fill|veryhard": [
    {"type": "fill", "before": "Nina plays for fun. Her brother is a", "after": "player and gets money for it.", "answer": "professional", "bank": ["professional", "working", "busy", "small"], "targetType": "adjective", "explanation": "Professional means doing something for money, not just for fun. Her brother gets money for playing."},
    {"type": "fill", "before": "What is the", "after": "of this meeting? I do not see why we are here.", "answer": "purpose", "bank": ["purpose", "organization", "factor", "role"], "explanation": "The purpose of something is the reason for it. The speaker does not know why they are at the meeting."},
    {"type": "fill", "before": "Our new office has a big", "after": "with comfortable chairs where visitors wait for the boss.", "answer": "reception", "bank": ["reception", "industry", "experience", "salary"], "explanation": "A reception is the place in an office or hotel where visitors say who they are and wait."},
    {"type": "fill", "before": "My", "after": "in the team is to check every report before it goes to the boss.", "answer": "role", "bank": ["role", "factory", "factor", "process"], "explanation": "A role is the job that a person has in a team. Checking reports is this person's role."},
    {"type": "fill", "before": "Our new sales", "after": "is to sell fewer things but make them better.", "answer": "strategy", "bank": ["strategy", "opportunity", "department", "feature"], "explanation": "A strategy is a plan to get something that you want. Here the plan is to sell fewer, better things."},
    {"type": "fill", "before": "If you work hard and never stop, you will", "after": "in your new job.", "answer": "succeed", "bank": ["succeed", "fire", "earn", "organize"], "targetType": "verb", "explanation": "To succeed is to do what you tried to do. Hard work helps you succeed in a new job."},
    {"type": "fill", "before": "The sales team sold 500 phones and reached its", "after": "for the month.", "answer": "target", "bank": ["target", "power", "process", "role"], "targetType": "noun", "explanation": "A target is a number that you want to reach. The team sold 500 phones and reached the number it wanted."},
    {"type": "fill", "before": "This phone has a special", "after": ": it takes pictures in the dark.", "answer": "feature", "bank": ["feature", "conference", "strategy", "salary"], "targetType": "noun", "explanation": "A feature is a special part of something. Taking pictures in the dark is a feature of this phone."}
  ],
  "A2|vocabulary|8|tf|easy": [
    {"type": "tf", "prompt": "In a restaurant kitchen, the chef cooks the meals for the customers.", "answer": true, "target": "chef", "explanation": "True. A chef is a person whose job is to cook. Restaurant chefs cook the meals."},
    {"type": "tf", "prompt": "A pilot's job is to drive buses through the city.", "answer": false, "target": "pilot", "explanation": "False. A pilot flies a plane. A person who drives a bus is a bus driver."},
    {"type": "tf", "prompt": "If your tooth hurts, a dentist can look at it and help you.", "answer": true, "target": "dentist", "explanation": "True. A dentist is a doctor for your teeth, so she can look at a tooth that hurts."},
    {"type": "tf", "prompt": "A factory is a quiet place where people only read books.", "answer": false, "target": "factory", "explanation": "False. A factory is a big building where workers use machines to make things. It is not quiet."},
    {"type": "tf", "prompt": "A pen is a tool that you hold in your hand to write.", "answer": true, "target": "tool", "targetType": "noun", "explanation": "True. A tool is something you hold in your hand to do a job. You hold a pen in your hand to write."},
    {"type": "tf", "prompt": "A task is a person who pays you for your work.", "answer": false, "target": "task", "explanation": "False. A task is a piece of work that you have to do. A person who pays you is an employer."},
    {"type": "tf", "prompt": "Your salary is the money that you get from your job each month.", "answer": true, "target": "salary", "explanation": "True. A salary is the money that you get from your job every month."},
    {"type": "tf", "prompt": "The leader of a team always follows the others and does what they say.", "answer": false, "target": "leader", "explanation": "False. A leader is in front of a group and shows the others what to do."}
  ],
  "A2|vocabulary|8|tf|medium": [
    {"type": "tf", "prompt": "A big company can have a sales department and a computer department.", "answer": true, "target": "department", "explanation": "True. A department is one part of a big company. Sales and computers are two common departments."},
    {"type": "tf", "prompt": "An engineer teaches children to read and write in a school.", "answer": false, "target": "engineer", "explanation": "False. An engineer plans and checks machines, roads and bridges. A teacher teaches children."},
    {"type": "tf", "prompt": "A painter can paint the outside walls of a house.", "answer": true, "target": "painter", "explanation": "True. A painter paints walls and houses as a job, including the outside walls."},
    {"type": "tf", "prompt": "A police officer takes care of sick people in a hospital.", "answer": false, "target": "officer", "explanation": "False. A police officer has an important job in the police. Sick people go to a doctor or a nurse."},
    {"type": "tf", "prompt": "A secretary can book rooms for meetings and tell the boss about visitors.", "answer": true, "target": "secretary", "explanation": "True. A secretary helps a boss with papers, phone calls and visitors."},
    {"type": "tf", "prompt": "A farm can produce cars and phones for the whole town.", "answer": false, "target": "produce", "targetType": "verb", "explanation": "False. To produce something is to make it. Farms produce milk, eggs and vegetables, not cars."},
    {"type": "tf", "prompt": "Tom's shop is full every day and earns a lot, so it is successful.", "answer": true, "target": "successful", "explanation": "True. Successful means getting the good result that you wanted. A full shop that earns a lot is successful."},
    {"type": "tf", "prompt": "An employee is a person who gives workers their jobs and pays them.", "answer": false, "target": "employee", "explanation": "False. An employee is a person who works for a company. The person who pays workers is the employer."}
  ],
  "A2|vocabulary|8|tf|hard": [
    {"type": "tf", "prompt": "An architect draws plans for houses and offices before the workers build.", "answer": true, "target": "architect", "explanation": "True. An architect draws plans for buildings, and the workers use the plans to build."},
    {"type": "tf", "prompt": "A detective fixes broken computers in a small shop.", "answer": false, "target": "detective", "explanation": "False. A detective finds out who did a crime. A person who fixes computers is a repair worker."},
    {"type": "tf", "prompt": "A journalist may travel to another country to write about a big storm.", "answer": true, "target": "journalist", "explanation": "True. A journalist writes news stories, and sometimes goes to the place where the news happens."},
    {"type": "tf", "prompt": "A material is a person who builds houses for a living.", "answer": false, "target": "material", "targetType": "noun", "explanation": "False. A material is what you use to make something, such as wood or stone. A person who builds is a builder."},
    {"type": "tf", "prompt": "When you organize your desk, you put your papers and pens in the right places.", "answer": true, "target": "organize", "explanation": "True. To organize is to put things in order. Papers and pens in the right places mean the desk is organized."},
    {"type": "tf", "prompt": "The car industry is a small shop where one person sells a single car.", "answer": false, "target": "industry", "explanation": "False. An industry is the companies that make or sell one kind of thing. The car industry is very big."},
    {"type": "tf", "prompt": "An expert on trains knows many facts because she studied them for years.", "answer": true, "target": "expert", "targetType": "noun", "explanation": "True. An expert knows a lot about one subject, often after years of study."},
    {"type": "tf", "prompt": "An opportunity is a bad accident that stops you from working.", "answer": false, "target": "opportunity", "explanation": "False. An opportunity is a chance to do something good, such as a new job."}
  ],
  "A2|vocabulary|8|tf|veryhard": [
    {"type": "tf", "prompt": "Mia attended the sales meeting on Monday, so she was there.", "answer": true, "target": "attend", "explanation": "True. To attend a meeting is to go to it. Mia attended, so she was there."},
    {"type": "tf", "prompt": "A swimming instructor teaches you how to drive a car on the road.", "answer": false, "target": "instructor", "explanation": "False. An instructor teaches a skill. A swimming instructor teaches you how to swim."},
    {"type": "tf", "prompt": "A factory needs electric power to run its big machines.", "answer": true, "target": "power", "targetType": "noun", "explanation": "True. Power here means energy, such as electricity, that makes machines work."},
    {"type": "tf", "prompt": "A process is a single thing, like a cup, that you hold in your hand.", "answer": false, "target": "process", "targetType": "noun", "explanation": "False. A process is a number of steps that you follow to make or do something."},
    {"type": "tf", "prompt": "Mia kept trying and finally succeeded in getting the job.", "answer": true, "target": "succeed", "explanation": "True. To succeed is to do what you tried to do. Mia wanted the job and got it."},
    {"type": "tf", "prompt": "A professional player is a beginner who plays for fun with friends.", "answer": false, "target": "professional", "explanation": "False. Professional means doing something for money, not just for fun. Professional players get money."},
    {"type": "tf", "prompt": "At a hotel, guests ask for their room keys at the reception.", "answer": true, "target": "reception", "explanation": "True. The reception is the place in a hotel or an office where visitors say who they are and ask for help."},
    {"type": "tf", "prompt": "A role is a machine that makes the products in a factory.", "answer": false, "target": "role", "explanation": "False. A role is the job or the part that a person has in a team or a company."}
  ],
  "A2|vocabulary|8|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "manager", "right": "a person who looks after a shop, a hotel or a team"},
      {"left": "dentist", "right": "a doctor for your teeth"},
      {"left": "tool", "right": "something you hold in your hand to do a job, such as a knife or a brush"},
      {"left": "fire", "right": "to tell a worker that he or she must leave the job", "type": "verb"}
    ], "explanation": "Manager means a person who looks after a shop, a hotel or a team; dentist means a doctor for your teeth. Tool means something you hold in your hand to do a job, such as a knife or a brush; fire means to tell a worker that he or she must leave the job." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "leader", "right": "a person who is in front of a group and shows the others what to do"},
      {"left": "pilot", "right": "a person who flies a plane"},
      {"left": "task", "right": "a piece of work that you have to do"},
      {"left": "salary", "right": "the money that you get from your job every month"}
    ], "explanation": "Leader means a person who is in front of a group and shows the others what to do; pilot means a person who flies a plane. Task means a piece of work that you have to do; salary means the money that you get from your job every month." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "coach", "right": "a person who trains a sports player or a team", "type": "noun"},
      {"left": "lawyer", "right": "a person whose job is to give advice about the law"},
      {"left": "working", "right": "to do with your job, for example the days or the hours when you work", "type": "adjective"},
      {"left": "earn", "right": "to get money for the work that you do", "type": "verb"}
    ], "explanation": "Coach means a person who trains a sports player or a team; lawyer means a person whose job is to give advice about the law. Working means to do with your job, for example the days or the hours when you work; earn means to get money for the work that you do." }
  ],
  "A2|vocabulary|8|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "assistant", "right": "a person whose job is to help another person at work", "type": "noun"},
      {"left": "department", "right": "one part of a big company where people do one kind of work"},
      {"left": "painter", "right": "a person whose job is to paint walls, houses or pictures"},
      {"left": "apply", "right": "to ask for a job in a letter or on a form", "type": "verb"}
    ], "explanation": "Assistant means a person whose job is to help another person at work; department means one part of a big company where people do one kind of work. Painter means a person whose job is to paint walls, houses or pictures; apply means to ask for a job in a letter or on a form." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "clerk", "right": "a person who works in an office or a bank and does jobs such as writing papers"},
      {"left": "designer", "right": "a person whose job is to plan how things will look, such as clothes or chairs"},
      {"left": "manage", "right": "to look after a shop, a team or a company", "type": "verb"},
      {"left": "successful", "right": "getting the good result that you wanted, or making a lot of money", "type": "adjective"}
    ], "explanation": "Clerk means a person who works in an office or a bank and does jobs such as writing papers; designer means a person whose job is to plan how things will look, such as clothes or chairs. Manage means to look after a shop, a team or a company; successful means getting the good result that you wanted, or making a lot of money." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "secretary", "right": "a person who writes letters, answers the phone and keeps the papers for a boss"},
      {"left": "director", "right": "a person who tells the actors what to do in a film, or who leads a big company"},
      {"left": "employee", "right": "a person who has a job and is paid to work for someone"},
      {"left": "officer", "right": "a person who has an important job in the police or the army"}
    ], "explanation": "Secretary means a person who writes letters, answers the phone and keeps the papers for a boss; director means a person who tells the actors what to do in a film, or who leads a big company. Employee means a person who has a job and is paid to work for someone; officer means a person who has an important job in the police or the army." }
  ],
  "A2|vocabulary|8|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "businessman", "right": "a man whose work is business, for example buying and selling things"},
      {"left": "conference", "right": "a big meeting where many people talk about one subject"},
      {"left": "employer", "right": "a person or a company that pays people to work for them"},
      {"left": "training", "right": "lessons that teach you how to do a job well"}
    ], "explanation": "Businessman means a man whose work is business, for example buying and selling things; conference means a big meeting where many people talk about one subject. Employer means a person or a company that pays people to work for them; training means lessons that teach you how to do a job well." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "equipment", "right": "the machines and tools that you need for a job or a sport"},
      {"left": "expert", "right": "a person who knows a lot about one subject", "type": "noun"},
      {"left": "industry", "right": "the companies that make or sell one kind of thing, such as cars"},
      {"left": "opportunity", "right": "a chance to do something good, such as a new job"}
    ], "explanation": "Equipment means the machines and tools that you need for a job or a sport; expert means a person who knows a lot about one subject. Industry means the companies that make or sell one kind of thing, such as cars; opportunity means a chance to do something good, such as a new job." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "experience", "right": "what you learn from doing a job for some time"},
      {"left": "journalist", "right": "a person who writes news stories for a newspaper or a website"},
      {"left": "material", "right": "what you use to make something, such as wood, stone or paper"},
      {"left": "organization", "right": "a big group of people who work together, such as a company or a school"}
    ], "explanation": "Experience means what you learn from doing a job for some time; journalist means a person who writes news stories for a newspaper or a website. Material means what you use to make something, such as wood, stone or paper; organization means a big group of people who work together, such as a company or a school." }
  ],
  "A2|vocabulary|8|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "achieve", "right": "to do or get something good after trying hard", "type": "verb"},
      {"left": "factor", "right": "one of the things that help you to decide something"},
      {"left": "reception", "right": "the place in a hotel or an office where visitors say who they are and ask for help"},
      {"left": "role", "right": "the job or the part that a person has in a team or a company"}
    ], "explanation": "Achieve means to do or get something good after trying hard; factor means one of the things that help you to decide something. Reception means the place in a hotel or an office where visitors say who they are and ask for help; role means the job or the part that a person has in a team or a company." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "employ", "right": "to pay a person to work for you", "type": "verb"},
      {"left": "power", "right": "the energy, such as electricity, that makes machines work"},
      {"left": "strategy", "right": "a plan to get something that you want"},
      {"left": "target", "right": "a number or an amount that you want to reach"}
    ], "explanation": "Employ means to pay a person to work for you; power means the energy, such as electricity, that makes machines work. Strategy means a plan to get something that you want; target means a number or an amount that you want to reach." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "process", "right": "a number of steps that you follow to make or do something"},
      {"left": "purpose", "right": "the reason why you do something"},
      {"left": "succeed", "right": "to do what you tried to do", "type": "verb"},
      {"left": "professional", "right": "doing a job for money, and not just for fun", "type": "adjective"}
    ], "explanation": "Process means a number of steps that you follow to make or do something; purpose means the reason why you do something. Succeed means to do what you tried to do; professional means doing a job for money, and not just for fun." }
  ]
});
