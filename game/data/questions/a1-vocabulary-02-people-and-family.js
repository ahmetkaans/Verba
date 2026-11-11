/* Questions: A1 Vocabulary, theme 02 "People and Family" (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|2|mc|easy": [
    { "type": "mc", "prompt": "Tom's ___ is a teacher. She works at a school.", "options": ["mother", "river", "banana", "window"], "explanation": "A mother is a woman with a child. \"She\" tells us it is a woman, so the answer is \"mother\"." },
    { "type": "mc", "prompt": "Ali's ___ is a tall man. He plays tennis with Ali on Sunday.", "options": ["father", "shirt", "pencil", "bread"], "explanation": "A father is a man with a child. Ali's father is a tall man who plays tennis with him." },
    { "type": "mc", "prompt": "Ben has a ___. His name is Sam, and he is nine.", "options": ["brother", "hat", "bed", "road"], "explanation": "A brother is a boy or man with the same mother and father as you. Sam is a boy, so he is Ben's brother." },
    { "type": "mc", "prompt": "Mia is Emma's ___. She and Emma have the same mother and father.", "options": ["sister", "pencil", "kitchen", "snow"], "explanation": "A sister is a girl or woman with the same mother and father as you. \"She\" shows that Mia is a girl, so she is Emma's sister." },
    { "type": "mc", "prompt": "The ___ is only three months old. She cannot walk or talk.", "options": ["baby", "teacher", "table", "apple"], "explanation": "A baby is a very young child. Babies cannot walk or talk when they are three months old." },
    { "type": "mc", "prompt": "Ali has a big ___: mom, dad, two brothers and a sister.", "options": ["family", "hat", "apple", "river"], "targetType": "noun", "explanation": "Your family is people like your mother, father, brothers and sisters. Ali's mom, dad, brothers and sister are his family." },
    { "type": "mc", "prompt": "Maria is Ken's mother. He is her ___.", "options": ["son", "pencil", "school", "bread"], "explanation": "A son is a boy or man who is someone's child. \"He\" is Maria's child, so he is her son." },
    { "type": "mc", "prompt": "Anna: \"What's your ___ number?\" Tom: \"It's 555-0123.\"", "options": ["phone", "apple", "tree", "banana"], "targetType": "noun", "explanation": "A phone number is the number you call to talk to a person. Tom gives Anna his phone number." }
  ],
  "A1|vocabulary|2|mc|medium": [
    { "type": "mc", "prompt": "Anna's father has a brother. He is Anna's ___.", "options": ["uncle", "aunt", "cousin", "grandfather"], "explanation": "An uncle is the brother of your mother or father. Anna's father has a brother, so he is her uncle." },
    { "type": "mc", "prompt": "Lisa's ___ is her mother's sister. Lisa visits her every summer.", "options": ["aunt", "mother", "cousin", "grandmother"], "explanation": "An aunt is the sister of your mother or father. Lisa's aunt is her mother's sister." },
    { "type": "mc", "prompt": "My dad's father is my ___. He is very old.", "options": ["grandfather", "uncle", "brother", "father"], "explanation": "A grandfather is the father of your mother or father. Your dad's father is your grandfather." },
    { "type": "mc", "prompt": "A man and a woman are husband and wife. We say they are ___.", "options": ["married", "funny", "pretty", "strong"], "explanation": "When two people are husband and wife, we say they are married." },
    { "type": "mc", "prompt": "Ali makes everyone laugh. He is so ___.", "options": ["funny", "strong", "tall", "hungry"], "explanation": "A funny person makes people laugh. Ali makes everyone laugh, so he is funny." },
    { "type": "mc", "prompt": "Anna: \"Look at Maria's dress. It's so ___!\" Ken: \"Yes, it's beautiful.\"", "options": ["pretty", "strong", "hungry", "angry"], "targetType": "adjective", "explanation": "Pretty means nice to look at. Ken says the dress is beautiful, so Anna says it is pretty." },
    { "type": "mc", "prompt": "Mia's ___ is long and brown. It goes down to her back.", "options": ["hair", "nose", "face", "mouth"], "explanation": "Hair can be long and brown, and it can go down to your back. A nose, a face or a mouth cannot go down to your back." },
    { "type": "mc", "prompt": "A birthday is the day you were ___.", "options": ["born", "called", "taught", "seen"], "explanation": "You are born on the day your life starts. Each year, that day is your birthday." }
  ],
  "A1|vocabulary|2|mc|hard": [
    { "type": "mc", "prompt": "Tom has very little money. He is ___.", "options": ["poor", "rich", "smart", "friendly"], "explanation": "A poor person has very little money. Tom has very little money, so he is poor." },
    { "type": "mc", "prompt": "\"Do you know that man?\" asks Ali. Ben says, \"Yes. He has a big house and three cars, so he is very ___.\"", "options": ["rich", "poor", "funny", "strong"], "explanation": "A rich person has a lot of money. A big house and three cars cost a lot of money, so the man is rich." },
    { "type": "mc", "prompt": "Lisa is only ten, but she can read big books. She is very ___.", "options": ["smart", "funny", "friendly", "famous"], "explanation": "A smart person learns fast and knows a lot. Lisa is ten and can read big books, so she is smart." },
    { "type": "mc", "prompt": "Ken is Anna's boyfriend. She is his ___.", "options": ["girlfriend", "boyfriend", "sister", "cousin"], "explanation": "Ken is Anna's boyfriend, so Anna is his girlfriend." },
    { "type": "mc", "prompt": "My aunt has a son. He is my ___.", "options": ["cousin", "brother", "uncle", "grandfather"], "explanation": "Your cousin is the child of your aunt or uncle. My aunt's son is my cousin." },
    { "type": "mc", "prompt": "Anna: \"What's your ___, Tom?\" Tom: \"It's 130 Green Street.\"", "options": ["address", "name", "age", "email"], "explanation": "An address tells us where a person lives. Tom lives at 130 Green Street." },
    { "type": "mc", "prompt": "Emma is ___: everyone in the world knows her name.", "options": ["famous", "friendly", "funny", "strong"], "explanation": "Many people know a famous person. Everyone in the world knows Emma's name, so she is famous." },
    { "type": "mc", "prompt": "Sam wants to ___ his sister to his friends. He says, \"This is my sister, Lisa.\"", "options": ["introduce", "teach", "share", "visit"], "explanation": "When you introduce a person, you say who the person is to other people. Sam says who his sister is, so he wants to introduce her." }
  ],
  "A1|vocabulary|2|mc|veryhard": [
    { "type": "mc", "prompt": "Emma's grandmother is 90 years old. She has a long and happy ___.", "options": ["life", "age", "birthday", "name"], "explanation": "Your life is all your years, from the day you are born. We say \"a long and happy life\" for many good years." },
    { "type": "mc", "prompt": "Your mother and your father are your ___.", "options": ["parents", "cousins", "neighbors", "grandparents"], "target": "parent", "targetType": "noun", "explanation": "Parents are a mother and a father. They are the people who have a child." },
    { "type": "mc", "prompt": "Ali's mom has a mother and a father. They are Ali's ___.", "options": ["grandparents", "parents", "cousins", "uncles"], "target": "grandparent", "explanation": "Your grandparents are the parents of your mother or father. Ali's mom has a mother and a father, so they are Ali's grandparents." },
    { "type": "mc", "prompt": "Anna, her mom, her dad and her brother are a family. Anna is a ___ of the family.", "options": ["member", "friend", "neighbor", "teacher"], "explanation": "A member of a family is one person in it. Anna is in the family with her mom, dad and brother, so she is a member." },
    { "type": "mc", "prompt": "The people in the house next to ours are not our family. They are our ___.", "options": ["neighbors", "cousins", "parents", "adults"], "target": "neighbor", "explanation": "Neighbors are people who live near you. The people in the house next to ours are not family, so they are our neighbors." },
    { "type": "mc", "prompt": "Tom is 40, and Anna is 38. They are ___.", "options": ["adults", "teenagers", "children", "babies"], "target": "adult", "explanation": "Adults are people who are not children or teenagers. Tom and Anna are 40 and 38, so they are adults." },
    { "type": "mc", "prompt": "\"Sam is so ___,\" says Emma. \"He says hello to everyone and helps new people.\"", "options": ["friendly", "funny", "strong", "famous"], "explanation": "A friendly person is nice to other people. Sam says hello to everyone and helps new people, so he is friendly." },
    { "type": "mc", "prompt": "Maria reads Ben's ___ on her computer. It says, \"Hi Maria! See you on Sunday.\"", "options": ["email", "address", "name", "birthday"], "targetType": "noun", "explanation": "An email is a message you send and read on a computer. Maria reads Ben's message on her computer, so it is an email." }
  ],
  "A1|vocabulary|2|fill|easy": [
    { "type": "fill", "before": "Lisa is at school, and her", "after": "is at home. She is cooking dinner.", "answer": "mother", "bank": ["mother", "shirt", "bread"], "explanation": "A mother is a woman with a child. Lisa is at school, so the woman who is cooking dinner at home is her mother." },
    { "type": "fill", "before": "Tom's", "after": "plays basketball with him after school. He is older than Tom.", "answer": "brother", "bank": ["brother", "chair", "apple"], "explanation": "A brother is a boy or man with the same mother and father as you. Tom's brother is older than Tom and plays basketball with him." },
    { "type": "fill", "before": "Ben's mother has a new", "after": ". It is very small, and it sleeps a lot.", "answer": "baby", "bank": ["baby", "hat", "river"], "explanation": "A baby is a very young child. A baby is very small and sleeps a lot." },
    { "type": "fill", "before": "Maria loves her", "after": ". They all eat dinner together every night.", "answer": "family", "bank": ["family", "coat", "hat"], "targetType": "noun", "explanation": "Your family is the people close to you at home. Maria loves her family, and they eat dinner together." },
    { "type": "fill", "before": "Maria has a son and a", "after": ". The girl is six.", "answer": "daughter", "bank": ["daughter", "bed", "bag"], "explanation": "A daughter is a girl or woman who is someone's child. Maria has a son and a daughter, and the girl is six." },
    { "type": "fill", "before": "Anna and her", "after": ", Tom, live in a small house.", "answer": "husband", "bank": ["husband", "hat", "table"], "explanation": "A husband is the man a woman is married to. Anna's husband is Tom." },
    { "type": "fill", "before": "Ali's", "after": "drives him to school every morning. He is tall.", "answer": "dad", "bank": ["dad", "bread", "shirt"], "explanation": "Dad is another word for father. Ali's dad drives him to school." },
    { "type": "fill", "before": "Emma calls her", "after": "every day. She likes talking to her.", "answer": "mom", "bank": ["mom", "pen", "bread"], "explanation": "Mom is another word for mother. Emma calls her mom every day." }
  ],
  "A1|vocabulary|2|fill|medium": [
    { "type": "fill", "before": "My", "after": "makes cakes for me. She is the mother of my father.", "answer": "grandmother", "bank": ["grandmother", "aunt", "sister"], "explanation": "A grandmother is the mother of your mother or father. The woman who makes cakes is the mother of my father, so she is my grandmother." },
    { "type": "fill", "before": "My", "after": "and my father are brothers. He lives in London.", "answer": "uncle", "bank": ["uncle", "aunt", "cousin"], "explanation": "An uncle is the brother of your mother or father. He and my father are brothers, so he is my uncle." },
    { "type": "fill", "before": "My", "after": "has two children, my cousins. She is my mother's sister.", "answer": "aunt", "bank": ["aunt", "uncle", "grandmother"], "explanation": "An aunt is the sister of your mother or father. She is my mother's sister, so she is my aunt." },
    { "type": "fill", "before": "Tom can move a big table and does not need help. He is very", "after": ".", "answer": "strong", "bank": ["strong", "funny", "pretty"], "explanation": "A strong person can move big, hard things. Tom can move a big table without help, so he is strong." },
    { "type": "fill", "before": "Anna is 1 meter 20. Her brother is 1 meter 80. He is very", "after": ".", "answer": "tall", "bank": ["tall", "hungry", "pretty"], "explanation": "A tall person is not short. Anna is 1 meter 20, and her brother is 1 meter 80, so he is tall." },
    { "type": "fill", "before": "How old is Lisa? Her", "after": "is ten.", "answer": "age", "bank": ["age", "name", "address"], "explanation": "Your age is how many years old you are. Lisa is ten, so her age is ten." },
    { "type": "fill", "before": "Today is Emma's", "after": ". She is eleven now, and she has a party.", "answer": "birthday", "bank": ["birthday", "dress", "kitchen"], "explanation": "Your birthday is the day each year when you were born. Today Emma is eleven, so it is her birthday." },
    { "type": "fill", "before": "The movie is very", "after": ". We laugh a lot.", "answer": "funny", "bank": ["funny", "hungry", "angry"], "explanation": "A funny movie makes you laugh. We laugh a lot at this movie, so it is funny." }
  ],
  "A1|vocabulary|2|fill|hard": [
    { "type": "fill", "before": "Ali's family cannot buy a car or a new house. They are", "after": ".", "answer": "poor", "bank": ["poor", "rich", "famous", "smart"], "explanation": "A poor person has very little money. Ali's family cannot buy a car or a new house, so they are poor." },
    { "type": "fill", "before": "Mia is 17. She goes to the movies with her", "after": "every Saturday. His name is Tom.", "answer": "boyfriend", "bank": ["boyfriend", "girlfriend", "mother", "sister"], "explanation": "A boyfriend is a man or boy that a person loves and goes out with. Mia goes to the movies with Tom, so he is her boyfriend." },
    { "type": "fill", "before": "My", "after": "and I are the same age. Her mother is my father's sister.", "answer": "cousin", "bank": ["cousin", "aunt", "sister", "grandmother"], "explanation": "Your cousin is the child of your aunt or uncle. Her mother is my father's sister, so she is my cousin." },
    { "type": "fill", "before": "I do not know where Ben lives. What is his", "after": "?", "answer": "address", "bank": ["address", "age", "email", "phone"], "explanation": "An address tells us where a person lives. To find where Ben lives, we need his address." },
    { "type": "fill", "before": "In every city, people know Emma's face. She is", "after": ".", "answer": "famous", "bank": ["famous", "poor", "tall", "funny"], "explanation": "Many people know a famous person. People in every city know Emma's face, so she is famous." },
    { "type": "fill", "before": "At the party, Tom wants to", "after": "Anna to his mother. He says, \"Mom, this is Anna.\"", "answer": "introduce", "bank": ["introduce", "teach", "visit", "help"], "explanation": "When you introduce a person, you say who the person is to other people. Tom says, \"Mom, this is Anna,\" so he introduces Anna to his mother." },
    { "type": "fill", "before": "Ali and Ben have only one pen, so they", "after": "it.", "answer": "share", "bank": ["share", "wash", "draw", "buy"], "explanation": "When two people share something, they both use it. Ali and Ben have only one pen, so they share it." },
    { "type": "fill", "before": "Anna has a work phone and a", "after": "phone. She calls her family with it.", "answer": "personal", "bank": ["personal", "famous", "poor", "friendly"], "explanation": "A personal phone is for one person only, not for work. Anna has a work phone and a personal phone." }
  ],
  "A1|vocabulary|2|fill|veryhard": [
    { "type": "fill", "before": "Tom and Mia are not married. They live together and love each other. Mia is his", "after": ".", "answer": "partner", "bank": ["partner", "neighbor", "member", "adult"], "explanation": "A partner is the person you live with and love, like a husband or wife. Tom and Mia live together and love each other, so Mia is his partner." },
    { "type": "fill", "before": "Maria is a", "after": "of two children. She has a son and a daughter.", "answer": "parent", "bank": ["parent", "member", "neighbor", "teenager"], "explanation": "A parent is a mother or a father. Maria has two children, so she is a parent." },
    { "type": "fill", "before": "Ali is a", "after": "of the football club. He plays every Saturday.", "answer": "member", "bank": ["member", "baby", "parent", "teenager"], "explanation": "A member is a person who is in a group. Ali plays for the club every Saturday, so he is a member of it." },
    { "type": "fill", "before": "Our", "after": "is very nice. He lives on our street.", "answer": "neighbor", "bank": ["neighbor", "adult", "teenager", "partner"], "explanation": "A neighbor is a person who lives near you. He lives on our street, so he is our neighbor." },
    { "type": "fill", "before": "Ken and Sam are 15. They are not children, and they are not adults. They are", "after": ".", "answer": "teenagers", "bank": ["teenagers", "adults", "babies", "children"], "target": "teenager", "explanation": "A teenager is a young person between 13 and 19 years old. Ken and Sam are 15, so they are teenagers." },
    { "type": "fill", "before": "Everyone likes Lisa because she is nice to all people. She is very", "after": ".", "answer": "friendly", "bank": ["friendly", "funny", "smart", "famous"], "explanation": "A friendly person is nice to other people. Lisa is nice to all people, so she is friendly." },
    { "type": "fill", "before": "Ben has dark hair, but his sister has light yellow hair. Her hair is", "after": ".", "answer": "blond", "accept": ["blonde"], "bank": ["blond", "brown", "black", "white"], "explanation": "Blond hair is light yellow. Ben has dark hair, but his sister has light yellow hair, so her hair is blond." },
    { "type": "fill", "before": "The teacher gives Mia a", "after": "with questions about her name and age.", "answer": "form", "bank": ["form", "bag", "pen", "bus"], "targetType": "noun", "explanation": "A form is a paper with questions. The teacher gives Mia a paper with questions about her name and age, so it is a form." }
  ],
  "A1|vocabulary|2|tf|easy": [
    { "type": "tf", "prompt": "A man who has a child is a father.", "answer": true, "target": "father", "explanation": "Yes. A father is a man who has a child." },
    { "type": "tf", "prompt": "A man's wife is a woman.", "answer": true, "target": "wife", "explanation": "Yes. A wife is the woman a man is married to." },
    { "type": "tf", "prompt": "Your sister is a boy.", "answer": false, "target": "sister", "explanation": "No. A sister is a girl or woman. A boy with the same mother and father as you is your brother." },
    { "type": "tf", "prompt": "Dad is another word for father.", "answer": true, "target": "dad", "explanation": "Yes. \"Dad\" and \"father\" mean the same." },
    { "type": "tf", "prompt": "Mom is another word for brother.", "answer": false, "target": "mom", "explanation": "No. \"Mom\" is another word for mother. A brother is a boy or man." },
    { "type": "tf", "prompt": "You can use a phone to talk to a friend.", "answer": true, "target": "phone", "targetType": "noun", "explanation": "Yes. We use a phone to call and talk to people." },
    { "type": "tf", "prompt": "A girl is her mother's son.", "answer": false, "target": "son", "explanation": "No. A girl is her mother's daughter. A son is a boy or man." },
    { "type": "tf", "prompt": "A daughter is older than her mother.", "answer": false, "target": "daughter", "explanation": "No. A mother is older than her daughter." }
  ],
  "A1|vocabulary|2|tf|medium": [
    { "type": "tf", "prompt": "Your father's father is your grandfather.", "answer": true, "target": "grandfather", "explanation": "Yes. A grandfather is the father of your mother or father." },
    { "type": "tf", "prompt": "People are born when they are very old.", "answer": false, "target": "born", "explanation": "No. People are born as babies. Your birthday is the day you were born." },
    { "type": "tf", "prompt": "A strong baby can move a big car.", "answer": false, "target": "strong", "explanation": "No. A baby is very small. A strong person can move big, hard things." },
    { "type": "tf", "prompt": "A man who has a wife is married.", "answer": true, "target": "married", "explanation": "Yes. A man and a woman who are husband and wife are married." },
    { "type": "tf", "prompt": "Your hair can be long or short.", "answer": true, "target": "hair", "explanation": "Yes. Hair is on your head. It can be long or short." },
    { "type": "tf", "prompt": "Your age tells us where you live.", "answer": false, "target": "age", "explanation": "No. Your age is how many years old you are. Your address tells us where you live." },
    { "type": "tf", "prompt": "A pretty flower is nice to look at.", "answer": true, "target": "pretty", "targetType": "adjective", "explanation": "Yes. Pretty means nice to look at." },
    { "type": "tf", "prompt": "A grandmother is the sister of your mother.", "answer": false, "target": "grandmother", "explanation": "No. A grandmother is the mother of your mother or father. The sister of your mother is your aunt." }
  ],
  "A1|vocabulary|2|tf|hard": [
    { "type": "tf", "prompt": "Smart is a word for a person with a lot of money.", "answer": false, "target": "smart", "explanation": "No. A smart person learns fast and knows a lot. A person with a lot of money is rich." },
    { "type": "tf", "prompt": "A fat cat has a big body.", "answer": true, "target": "fat", "explanation": "Yes. Fat means big around the body." },
    { "type": "tf", "prompt": "An address tells us how old a person is.", "answer": false, "target": "address", "explanation": "No. An address tells us where a person lives. Your age tells us how old you are." },
    { "type": "tf", "prompt": "A personal phone is for everyone in the school.", "answer": false, "target": "personal", "explanation": "No. A personal phone is for one person only." },
    { "type": "tf", "prompt": "A rich person has a lot of money.", "answer": true, "target": "rich", "explanation": "Yes. Rich means with a lot of money." },
    { "type": "tf", "prompt": "Your boyfriend is a man or boy that you love.", "answer": true, "target": "boyfriend", "explanation": "Yes. A boyfriend is a man or boy that a person loves and goes out with." },
    { "type": "tf", "prompt": "Your girlfriend is your brother.", "answer": false, "target": "girlfriend", "explanation": "No. A girlfriend is a woman or girl that a person loves. A brother is a boy or man with the same mother and father as you." },
    { "type": "tf", "prompt": "Two friends can share one pen.", "answer": true, "target": "share", "explanation": "Yes. When two people share something, they both use it." }
  ],
  "A1|vocabulary|2|tf|veryhard": [
    { "type": "tf", "prompt": "A child who is ten years old is an adult.", "answer": false, "target": "adult", "explanation": "No. A child of ten is not an adult. An adult is a person who is not a child or a teenager." },
    { "type": "tf", "prompt": "Your life starts on the day you are born.", "answer": true, "target": "life", "explanation": "Yes. Your life is all your years, from the day you are born." },
    { "type": "tf", "prompt": "A person who is 15 is a teenager.", "answer": true, "target": "teenager", "explanation": "Yes. A teenager is a young person between 13 and 19 years old." },
    { "type": "tf", "prompt": "A partner is a very young child.", "answer": false, "target": "partner", "explanation": "No. A partner is the person you live with and love, like a husband or wife." },
    { "type": "tf", "prompt": "An email is a letter on paper.", "answer": false, "target": "email", "targetType": "noun", "explanation": "No. An email is a message on a computer or a phone. A letter is on paper." },
    { "type": "tf", "prompt": "A grandparent is the parent of your parent.", "answer": true, "target": "grandparent", "explanation": "Yes. Your grandparent is the mother or father of your mother or father." },
    { "type": "tf", "prompt": "Blond hair is black.", "answer": false, "target": "blond", "explanation": "No. Blond hair is light yellow. Black hair is dark." },
    { "type": "tf", "prompt": "You can write your name and address on a form.", "answer": true, "target": "form", "targetType": "noun", "explanation": "Yes. A form is a paper with questions. You write your name, address and other facts on it." }
  ],
  "A1|vocabulary|2|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "mother", "right": "the woman who has you as her child" },
      { "left": "baby", "right": "a child who is only a few months old" },
      { "left": "husband", "right": "the man that Anna is married to" },
      { "left": "family", "right": "the people at home who love you", "type": "noun" }
    ], "explanation": "A mother has you as her child, and a baby is only a few months old. Anna's husband is the man she is married to, and your family is the people at home who love you." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "father", "right": "the man who has you as his child" },
      { "left": "brother", "right": "a boy who has the same mom and dad as you" },
      { "left": "sister", "right": "a girl who has the same mom and dad as you" },
      { "left": "wife", "right": "the woman that Tom is married to" }
    ], "explanation": "A father has you as his child. A brother and a sister have the same mom and dad as you, and Tom's wife is the woman he is married to." }
  ],
  "A1|vocabulary|2|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "grandfather", "right": "your dad's dad or your mom's dad" },
      { "left": "aunt", "right": "your mom's sister or your dad's sister" },
      { "left": "tall", "right": "not short, like a basketball player" },
      { "left": "birthday", "right": "the day each year when you are one year older" }
    ], "explanation": "A grandfather is your dad's dad or your mom's dad, and an aunt is a sister of your mom or dad. Tall means not short, and on your birthday you are one year older." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "grandmother", "right": "your dad's mom or your mom's mom" },
      { "left": "uncle", "right": "your mom's brother or your dad's brother" },
      { "left": "strong", "right": "a person who can carry a very big box" },
      { "left": "funny", "right": "like a story that makes you laugh a lot" }
    ], "explanation": "A grandmother is your dad's mom or your mom's mom, and an uncle is a brother of your mom or dad. A strong person can carry very big things, and something funny makes people laugh." }
  ],
  "A1|vocabulary|2|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "poor", "right": "when you have little money and cannot buy many things" },
      { "left": "smart", "right": "a student who always has the best answers in class" },
      { "left": "boyfriend", "right": "the boy or man that Anna goes out with because she loves him" },
      { "left": "cousin", "right": "the child of your mom's sister or your dad's brother" }
    ], "explanation": "Poor means having very little money, and a smart student learns fast. Anna's boyfriend is the boy or man she loves and goes out with. Your cousin is the child of an aunt or an uncle." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "rich", "right": "a person who can buy a lot of things" },
      { "left": "fat", "right": "what a cat can be when it eats too much" },
      { "left": "girlfriend", "right": "the girl or woman that Ken goes out with because he loves her" },
      { "left": "famous", "right": "a person that people in many countries know" }
    ], "explanation": "A rich person has a lot of money, and a cat that eats too much can get fat. Ken's girlfriend is the girl or woman he loves and goes out with, and many people know a famous person." }
  ],
  "A1|vocabulary|2|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "parent", "right": "your mom or your dad" },
      { "left": "grandparent", "right": "the mom or dad of your mom or dad" },
      { "left": "member", "right": "a person in a music club or a book club" },
      { "left": "neighbor", "right": "a person who lives in the house next to yours" }
    ], "explanation": "Your parent is your mom or your dad, and your grandparent is the mom or dad of your parent. A member is in a club, and your neighbor lives in the house next to yours." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "adult", "right": "someone who is 25 or 50 years old" },
      { "left": "teenager", "right": "someone who is 14 or 15 years old" },
      { "left": "friendly", "right": "a person that everybody likes talking to" },
      { "left": "blond", "right": "hair with the color of the sun" }
    ], "explanation": "An adult is not a child or a teenager, for example someone who is 25 or 50, and a teenager is 14 or 15 years old. A friendly person is nice to everybody, and blond hair is yellow like the sun." }
  ]
});
