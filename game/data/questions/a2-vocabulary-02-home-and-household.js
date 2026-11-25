/* Questions: A2 Vocabulary, theme 2 Home and Household (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|2|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|2|mc|easy": [
    {"type": "mc", "prompt": "Don't sit on that chair. It is ___, and you may fall.", "options": ["broken", "electric", "good", "open"], "explanation": "Something is broken when it does not work or is in pieces. A broken chair is not safe."},
    {"type": "mc", "prompt": "It is dark in my room, so I turn on the ___ next to my bed.", "options": ["lamp", "water", "plate", "electricity"], "explanation": "A lamp gives light. You can put it on a desk or next to a bed."},
    {"type": "mc", "prompt": "Dad can ___ my old bike. Soon it will work again.", "options": ["fix", "break", "lock", "knock"], "explanation": "When you fix something, you make it work again. Dad will fix the bike."},
    {"type": "mc", "prompt": "After swimming, Ben dries his hair with a ___.", "options": ["towel", "bottle", "carpet", "trash"], "explanation": "A towel is something soft for drying your hands, body or hair."},
    {"type": "mc", "prompt": "Please ___ on the door before you come in.", "options": ["knock", "shut", "repair", "lock"], "explanation": "To knock is to hit a door with your hand to say you are there."},
    {"type": "mc", "prompt": "Wash your hands with water and ___ before dinner.", "options": ["soap", "desk", "towel", "garbage"], "explanation": "We use soap with water to make our hands clean."},
    {"type": "mc", "prompt": "I opened the box, but it is ___. My toy is not in it.", "options": ["empty", "dry", "upstairs", "electric"], "explanation": "Empty means there is nothing inside. This box has nothing in it."},
    {"type": "mc", "prompt": "Please write your ___ address on the form.", "options": ["home", "electrical", "empty", "downstairs"], "explanation": "Your home address tells people where you live. Here, home comes before the noun address."}
  ],
  "A2|vocabulary|2|mc|medium": [
    {"type": "mc", "prompt": "Jim puts the pizza on a big ___ and brings it to the table.", "options": ["plate", "bowl", "stove", "knife"], "explanation": "A plate is a dish for food. A pizza sits on it very well."},
    {"type": "mc", "prompt": "Put the wet shirt in the sun. Soon it will be ___.", "options": ["dry", "home", "shut", "upstairs"], "targetType": "adjective", "explanation": "When something is dry, it has no water on it. Sun and wind help a wet shirt to get dry."},
    {"type": "mc", "prompt": "The dog drinks water from a ___ on the kitchen floor.", "options": ["bowl", "stove", "spoon", "plate"], "explanation": "A bowl is a deep dish. It holds water, soup or food."},
    {"type": "mc", "prompt": "Take off your coat in the ___ and then come into the kitchen.", "options": ["hall", "floor", "stair", "roof"], "explanation": "The hall is the space just inside the front door. People often leave coats there."},
    {"type": "mc", "prompt": "Be careful with that ___. It can cut your finger.", "options": ["knife", "bowl", "oven", "fork"], "explanation": "A knife is a tool for cutting. That is why you must be careful with it."},
    {"type": "mc", "prompt": "Rain is falling on the ___ of our house, so it is very loud inside.", "options": ["roof", "kitchen", "stair", "hall"], "explanation": "The roof is the top of a house. Rain hits it first."},
    {"type": "mc", "prompt": "This chair is soft and very ___. I can sit here all day.", "options": ["comfortable", "home", "dry", "broken"], "explanation": "Something comfortable feels good when you sit or lie on it."},
    {"type": "mc", "prompt": "Lara looks at herself in the ___ before she goes out.", "options": ["mirror", "washing", "furniture", "poster"], "explanation": "A mirror shows you your own face and clothes."}
  ],
  "A2|vocabulary|2|mc|hard": [
    {"type": "mc", "prompt": "Mom puts her coats in the ___ near the front door.", "options": ["closet", "trash", "carpet", "furniture"], "explanation": "In American English, a closet is a place in a wall where you keep clothes."},
    {"type": "mc", "prompt": "My phone is broken, but a man at the store can ___ it for me.", "options": ["repair", "clean", "light", "knock"], "explanation": "To repair something is to make a broken thing work again."},
    {"type": "mc", "prompt": "Aunt Rosa is staying at our house for a week. She is our ___.", "options": ["guest", "farmer", "owner", "partner"], "explanation": "A guest is a person who visits or stays in your home."},
    {"type": "mc", "prompt": "My key is ___, so it feels cold in my hand.", "options": ["metal", "paper", "wood", "plastic"], "explanation": "Metal is a hard material, like gold or silver. A metal key feels cold when you touch it."},
    {"type": "mc", "prompt": "Lisa puts a little sugar in her tea with a small ___.", "options": ["spoon", "plate", "oven", "fork"], "explanation": "A spoon has a small round end. You can use it for tea, soup or sugar."},
    {"type": "mc", "prompt": "Our power is out, so Dad will ___ a fire this evening.", "options": ["light", "lock", "shut", "repair"], "targetType": "verb", "explanation": "To light a fire means to make it burn. It is a verb here."},
    {"type": "mc", "prompt": "We bought a new ___ for the floor, so our feet are warm in winter.", "options": ["carpet", "garbage", "closet", "sheet"], "explanation": "A carpet is a thick cover for a floor. It is soft and warm."},
    {"type": "mc", "prompt": "Mom covers the old chair with a big, thin, white ___ when we go away.", "options": ["sheet", "towel", "soap", "carpet"], "explanation": "A sheet is a big, thin cover. People use it on beds, and also over furniture."}
  ],
  "A2|vocabulary|2|mc|veryhard": [
    {"type": "mc", "prompt": "Mom puts the cake in the hot ___ for forty minutes.", "options": ["oven", "spoon", "computer", "refrigerator"], "explanation": "An oven is a hot box in the kitchen for cooking. A cake cooks inside it."},
    {"type": "mc", "prompt": "Many ___ bikes can go up a hill without much work from you.", "options": ["electric", "broken", "new", "wooden"], "explanation": "Electric things use electricity. An electric bike has a small machine that helps you go up a hill."},
    {"type": "mc", "prompt": "Ben puts a big ___ of his favorite band on the wall.", "options": ["poster", "trash", "furniture", "closet"], "explanation": "A poster is a big picture for a wall."},
    {"type": "mc", "prompt": "We bought new ___ for the house: a table, four chairs and a bed.", "options": ["furniture", "washing", "poster", "mirror"], "explanation": "Furniture means things like tables, chairs and beds. We say furniture, not furnitures."},
    {"type": "mc", "prompt": "Careful! The ___ is hot because the soup is on it.", "options": ["stove", "fork", "refrigerator", "lamp"], "explanation": "A stove is the top of a cooker. It gets hot when you cook."},
    {"type": "mc", "prompt": "Dad built this ___ table from a tree.", "options": ["wooden", "downstairs", "electrical", "comfortable"], "explanation": "Wooden means from wood. Dad used a tree to build this table."},
    {"type": "mc", "prompt": "The small child sits on the second ___ and waits for his mom.", "options": ["stair", "bathroom", "roof", "hall"], "explanation": "A stair is one step of the stairs in a house."},
    {"type": "mc", "prompt": "Never touch ___ machines with wet hands, because water and power are dangerous together.", "options": ["electrical", "dry", "old", "wooden"], "explanation": "Electrical means using electricity. Water and electricity together are dangerous."}
  ],
  "A2|vocabulary|2|fill|easy": [
    {"type": "fill", "before": "Leo takes a clean", "after": "from the bathroom after his shower.", "answer": "towel", "bank": ["towel", "washing", "trash"], "explanation": "A towel is for drying your body or hair. Leo takes a clean one after his shower."},
    {"type": "fill", "before": "Our neighbor will", "after": "on the wall if our music is too loud.", "answer": "knock", "bank": ["knock", "lock", "fix"], "explanation": "To knock is to hit something with your hand to make a noise. The neighbor does this to say stop."},
    {"type": "fill", "before": "Mia buys a new bar of", "after": "for the bathroom.", "answer": "soap", "bank": ["soap", "poster", "lamp"], "explanation": "Soap comes in bars. You use it with water to wash your hands."},
    {"type": "fill", "before": "Nobody lives in that house, so all the rooms are", "after": ".", "answer": "empty", "bank": ["empty", "comfortable", "home"], "explanation": "Empty means with nothing or nobody inside. Nobody lives there, so the rooms are empty."},
    {"type": "fill", "before": "Our", "after": "team wears red shirts and plays at our own school.", "answer": "home", "bank": ["home", "broken", "downstairs"], "explanation": "The home team plays at its own place. Here home comes before the noun team."},
    {"type": "fill", "before": "Please", "after": "your bike when you go into the shop, so nobody takes it.", "answer": "lock", "bank": ["lock", "light", "repair"], "targetType": "verb", "explanation": "To lock something is to close it with a key so nobody can take it."},
    {"type": "fill", "before": "We hear a lot of noise from our", "after": "neighbors. They live over our heads.", "answer": "upstairs", "bank": ["upstairs", "cold", "comfortable"], "explanation": "Upstairs means on a higher floor of the house. The noise comes from above us."},
    {"type": "fill", "before": "My aunt sleeps in the", "after": "bedroom, so she does not have to climb the stairs.", "answer": "downstairs", "bank": ["downstairs", "electrical", "empty"], "explanation": "Downstairs means on the lower floor of a house. My aunt can go to bed without stairs."}
  ],
  "A2|vocabulary|2|fill|medium": [
    {"type": "fill", "before": "Our small", "after": "has a table and a place for shoes, next to the front door.", "answer": "hall", "bank": ["hall", "stair", "stove"], "explanation": "The hall is the space inside the front door. People often put shoes and a table there."},
    {"type": "fill", "before": "Ben cuts the cheese with his", "after": "and puts it on his bread.", "answer": "knife", "bank": ["knife", "oven", "spoon"], "explanation": "You cut cheese with a knife. A spoon and an oven cannot cut."},
    {"type": "fill", "before": "The cat climbed onto the", "after": "and sat high above the garden.", "answer": "roof", "bank": ["roof", "hall", "stair"], "explanation": "The roof is the top of a house. A cat can sit there high above the garden."},
    {"type": "fill", "before": "This bed is hard and small, but that one is soft and", "after": ".", "answer": "comfortable", "bank": ["comfortable", "upstairs", "home"], "explanation": "Comfortable means nice to sit or lie on. A soft bed is comfortable."},
    {"type": "fill", "before": "Jack brushes his hair in front of the", "after": ".", "answer": "mirror", "bank": ["mirror", "carpet", "soap"], "explanation": "A mirror shows you your face and your hair. People look in it to get ready."},
    {"type": "fill", "before": "Please put the empty bottles in the", "after": "outside.", "answer": "trash", "bank": ["trash", "sheet", "closet"], "explanation": "Trash is the things you throw away, like empty bottles. In the US, people also say garbage."},
    {"type": "fill", "before": "The trees in the forest give us", "after": "for the fire.", "answer": "wood", "bank": ["wood", "metal", "plastic"], "explanation": "Wood is the hard material from trees. People burn it in a fire."},
    {"type": "fill", "before": "Mom turns on the", "after": "and lights the stove for dinner.", "answer": "gas", "bank": ["gas", "metal", "wood"], "explanation": "Gas is what burns in many kitchen stoves. Mom turns it on to cook dinner."}
  ],
  "A2|vocabulary|2|fill|hard": [
    {"type": "fill", "before": "The tower walls have", "after": "inside because it is strong and does not burn or break.", "answer": "metal", "bank": ["metal", "glass", "plastic", "wood"], "explanation": "Metal is a strong material that does not burn easily. People use it inside walls."},
    {"type": "fill", "before": "Sam eats his soup with a", "after": ".", "answer": "spoon", "bank": ["spoon", "bowl", "knife", "fork"], "explanation": "A spoon is the tool for eating soup. The soup is in a bowl, but Sam uses a spoon."},
    {"type": "fill", "before": "In winter, Mom is the first to", "after": "the stove with a match.", "answer": "light", "bank": ["light", "knock", "shut", "fix"], "targetType": "verb", "explanation": "To light something is to make it burn. Mom lights the stove with a match."},
    {"type": "fill", "before": "Please take off your wet shoes before you walk on the new", "after": ".", "answer": "carpet", "bank": ["carpet", "poster", "soap", "sheet"], "explanation": "A carpet covers a floor. Wet shoes can make a new carpet dirty."},
    {"type": "fill", "before": "Dad is painting the walls, so the furniture is under an old, thin", "after": ".", "answer": "sheet", "bank": ["sheet", "towel", "garbage", "mirror"], "explanation": "A sheet is a big, thin cover. Dad uses it to keep paint off the furniture."},
    {"type": "fill", "before": "Many companies use", "after": "for bottles because it is cheap, light and does not break.", "answer": "plastic", "bank": ["plastic", "paper", "wood", "metal"], "targetType": "noun", "explanation": "Plastic is a cheap, light material. It does not break when it falls."},
    {"type": "fill", "before": "Put the", "after": "on the left of the plate and the knife on the right.", "answer": "fork", "bank": ["fork", "plate", "knife", "spoon"], "explanation": "A fork goes on the left of the plate, and the knife goes on the right."},
    {"type": "fill", "before": "Every Monday, a big truck takes our", "after": "away from the street.", "answer": "garbage", "bank": ["garbage", "box", "mirror", "washing"], "explanation": "Garbage is what you throw away, like old food and paper. A truck takes it away."}
  ],
  "A2|vocabulary|2|fill|veryhard": [
    {"type": "fill", "before": "The new apartment is empty, so we must buy", "after": "for every room.", "answer": "furniture", "bank": ["furniture", "garbage", "closet", "mirror"], "explanation": "Furniture is the big things in a room, like tables and beds. We buy it for a new home."},
    {"type": "fill", "before": "Dad finishes cooking and turns off the", "after": ", but it is still hot.", "answer": "stove", "bank": ["stove", "bowl", "lamp", "refrigerator"], "explanation": "The stove is the top of a kitchen machine. It stays hot after cooking, even when Dad turns it off."},
    {"type": "fill", "before": "Houses with walls of wood are", "after": "houses.", "answer": "wooden", "bank": ["wooden", "empty", "electric", "plastic"], "explanation": "Wooden means made of wood. Houses with walls of wood are wooden houses."},
    {"type": "fill", "before": "Be careful! There is a toy on the top", "after": "and someone may fall.", "answer": "stair", "bank": ["stair", "door", "hall", "roof"], "explanation": "A stair is one step of the stairs. A toy on a stair can make people fall."},
    {"type": "fill", "before": "That", "after": "shop sells lamps, radios and other machines that need power.", "answer": "electrical", "bank": ["electrical", "comfortable", "empty", "wooden"], "explanation": "Electrical means working with electricity. Lamps and radios are electrical things."},
    {"type": "fill", "before": "Put the milk back in the", "after": ", or it will go bad.", "answer": "refrigerator", "bank": ["refrigerator", "knife", "stove", "lamp"], "explanation": "A refrigerator keeps food cold. Milk stays good there."},
    {"type": "fill", "before": "Dad does the", "after": "every Saturday, and Mom does the shopping.", "answer": "washing", "bank": ["washing", "towel", "sheet", "soap"], "explanation": "The washing is the clothes that you clean in water. Dad does it on Saturdays."},
    {"type": "fill", "before": "The lights went out because there was no", "after": "in the house.", "answer": "electricity", "bank": ["electricity", "furniture", "refrigerator", "oven"], "explanation": "Electricity is the power that makes lights work. Without it, the lights go out."}
  ],
  "A2|vocabulary|2|tf|easy": [
    {"type": "tf", "prompt": "A phone that does not turn on is broken.", "answer": true, "target": "broken", "explanation": "True. Broken means it does not work. A phone that does not turn on does not work."},
    {"type": "tf", "prompt": "You use a lamp to cut bread.", "answer": false, "target": "lamp", "explanation": "False. A lamp gives light. You cut bread with a knife."},
    {"type": "tf", "prompt": "When you fix a broken radio, it can work again.", "answer": true, "target": "fix", "explanation": "True. To fix something is to make it work again."},
    {"type": "tf", "prompt": "A glass with water in it is empty.", "answer": false, "target": "empty", "explanation": "False. Empty means there is nothing inside. A glass with water is not empty."},
    {"type": "tf", "prompt": "Your home town is the town where you grew up.", "answer": true, "target": "home", "explanation": "True. Your home town is the place where you lived as a child. Home comes before the noun here."},
    {"type": "tf", "prompt": "You lock a door when you want to keep it open.", "answer": false, "target": "lock", "targetType": "verb", "explanation": "False. When you lock a door, you close it with a key. Then nobody can open it."},
    {"type": "tf", "prompt": "A bedroom on the second floor is an upstairs room.", "answer": true, "target": "upstairs", "explanation": "True. Upstairs means on a higher floor of a house."},
    {"type": "tf", "prompt": "A room on the top floor of a house is a downstairs room.", "answer": false, "target": "downstairs", "explanation": "False. A downstairs room is on a lower floor. The top floor is upstairs."}
  ],
  "A2|vocabulary|2|tf|medium": [
    {"type": "tf", "prompt": "People often eat dinner from a plate.", "answer": true, "target": "plate", "explanation": "True. A plate is a dish for food. Many people eat dinner from one."},
    {"type": "tf", "prompt": "A shirt that stays in the rain is dry.", "answer": false, "target": "dry", "targetType": "adjective", "explanation": "False. In the rain, a shirt gets wet. Dry means with no water on it."},
    {"type": "tf", "prompt": "You can put soup in a bowl.", "answer": true, "target": "bowl", "explanation": "True. A bowl is a deep dish. Soup, rice and fruit go in it."},
    {"type": "tf", "prompt": "A chair with a broken leg is comfortable.", "answer": false, "target": "comfortable", "explanation": "False. Comfortable means nice to sit on. You cannot sit well on a chair with a broken leg."},
    {"type": "tf", "prompt": "You can see your face in a mirror.", "answer": true, "target": "mirror", "explanation": "True. A mirror shows you your face and your clothes."},
    {"type": "tf", "prompt": "Trash is something you want to keep, like a new phone.", "answer": false, "target": "trash", "explanation": "False. Trash is what you throw away. People keep a new phone."},
    {"type": "tf", "prompt": "Trees give us wood.", "answer": true, "target": "wood", "explanation": "True. Wood is the hard material from a tree."},
    {"type": "tf", "prompt": "A gas stove uses water to make fire.", "answer": false, "target": "gas", "explanation": "False. A gas stove burns gas to make fire, not water."}
  ],
  "A2|vocabulary|2|tf|hard": [
    {"type": "tf", "prompt": "People keep clothes in a closet.", "answer": true, "target": "closet", "explanation": "True. A closet is a place in a wall for clothes. People put their shirts and pants there."},
    {"type": "tf", "prompt": "To repair a phone means to break it.", "answer": false, "target": "repair", "explanation": "False. To repair something is to make it work again, not to break it."},
    {"type": "tf", "prompt": "A friend who stays at your house for the night is your guest.", "answer": true, "target": "guest", "explanation": "True. A guest is a person who visits or stays at your home."},
    {"type": "tf", "prompt": "You usually put a carpet on the roof of a house.", "answer": false, "target": "carpet", "explanation": "False. A carpet covers a floor inside a house. It does not go on the roof."},
    {"type": "tf", "prompt": "A big, thin cover for a table or a chair is called a sheet.", "answer": true, "target": "sheet", "explanation": "True. A sheet is a big, thin cover. People use it on beds and over furniture."},
    {"type": "tf", "prompt": "A plastic bottle comes from a tree.", "answer": false, "target": "plastic", "targetType": "noun", "explanation": "False. Wood and paper come from trees. Plastic comes from a factory."},
    {"type": "tf", "prompt": "You can use a fork to pick up pieces of food.", "answer": true, "target": "fork", "explanation": "True. A fork has points that hold food, so you can pick it up."},
    {"type": "tf", "prompt": "Garbage is something that people want to eat.", "answer": false, "target": "garbage", "explanation": "False. Garbage is what you throw away. Nobody wants to eat it."}
  ],
  "A2|vocabulary|2|tf|veryhard": [
    {"type": "tf", "prompt": "A pizza goes into a hot oven to cook.", "answer": true, "target": "oven", "explanation": "True. An oven is a hot box for cooking. Pizza cooks inside it."},
    {"type": "tf", "prompt": "An electric lamp works without any power.", "answer": false, "target": "electric", "explanation": "False. Electric things use electricity. Without power, an electric lamp does not work."},
    {"type": "tf", "prompt": "Shops use a poster in the window to tell people about a sale.", "answer": true, "target": "poster", "explanation": "True. A poster is a big picture. Shops put one in the window to show a sale."},
    {"type": "tf", "prompt": "A stair is a kind of room in a house.", "answer": false, "target": "stair", "explanation": "False. A stair is one step of the stairs. A room is a different thing."},
    {"type": "tf", "prompt": "A radio is an electrical machine.", "answer": true, "target": "electrical", "explanation": "True. Electrical means using electricity. A radio needs electricity to work."},
    {"type": "tf", "prompt": "You use a refrigerator to make food hot.", "answer": false, "target": "refrigerator", "explanation": "False. A refrigerator keeps food cold. You use an oven or a stove to make food hot."},
    {"type": "tf", "prompt": "Dirty shirts and socks that you want to clean are your washing.", "answer": true, "target": "washing", "explanation": "True. The washing is the clothes that you need to clean in water."},
    {"type": "tf", "prompt": "Electricity is a hard material, like metal and wood.", "answer": false, "target": "electricity", "explanation": "False. Electricity is power, not a material. You cannot hold it in your hand."}
  ],
  "A2|vocabulary|2|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "broken", "right": "a cup that fell on the floor is like this", "type": "adjective"},
      {"left": "fix", "right": "to make a broken bike work again", "type": "verb"},
      {"left": "knock", "right": "to hit a door with your hand so people hear you", "type": "verb"},
      {"left": "upstairs", "right": "on the higher floor of a house", "type": "adjective"}
    ], "explanation": "A broken thing does not work. To fix it is to make it work again. You knock on a door, and upstairs is the higher floor." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "lamp", "right": "you turn it on next to your bed when it is dark"},
      {"left": "towel", "right": "you dry your hair with it after you swim"},
      {"left": "soap", "right": "you use it with water to make your hands clean"},
      {"left": "downstairs", "right": "on the lower floor of a house", "type": "adjective"}
    ], "explanation": "A lamp gives light, a towel dries you and soap cleans your hands. Downstairs is the lower floor." }
  ],
  "A2|vocabulary|2|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "plate", "right": "you eat your pizza from this dish"},
      {"left": "dry", "right": "not wet", "type": "adjective"},
      {"left": "knife", "right": "a tool for cutting bread or meat"},
      {"left": "gas", "right": "you burn it in a stove to cook"}
    ], "explanation": "A plate holds your dinner and a knife cuts. Dry means not wet, and gas burns in a stove." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "bowl", "right": "a deep dish for soup"},
      {"left": "hall", "right": "the space just inside the front door of a house"},
      {"left": "roof", "right": "the top of a house, over your head"},
      {"left": "wood", "right": "the hard material that comes from a tree"}
    ], "explanation": "A bowl holds soup. The hall is by the front door and the roof is the top of a house. Wood comes from a tree." }
  ],
  "A2|vocabulary|2|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "closet", "right": "a place in a wall for your clothes"},
      {"left": "guest", "right": "a person who visits and stays at your house"},
      {"left": "spoon", "right": "you eat soup or put sugar in tea with it"},
      {"left": "garbage", "right": "things that you do not want and throw away"}
    ], "explanation": "A closet is for clothes and a guest visits your home. A spoon is a small tool for eating. Garbage is what you throw away." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "repair", "right": "to make something that is broken work again", "type": "verb"},
      {"left": "metal", "right": "a hard material that feels cold, like gold or silver"},
      {"left": "light", "right": "to make a fire start to burn", "type": "verb"},
      {"left": "fork", "right": "a tool with points for eating food"}
    ], "explanation": "To repair is to make a broken thing work again. Metal is hard and cold. To light a fire is to make it burn, and a fork has points." }
  ],
  "A2|vocabulary|2|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "oven", "right": "a hot box in the kitchen where you cook a cake"},
      {"left": "electric", "right": "working with power from the wall", "type": "adjective"},
      {"left": "poster", "right": "a big picture that you put on a wall"},
      {"left": "washing", "right": "dirty shirts and socks that you will clean in water"}
    ], "explanation": "An oven cooks a cake. Electric things work with power. A poster is a big picture, and the washing is dirty clothes." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "stove", "right": "the hot top of the kitchen machine where you put your soup"},
      {"left": "furniture", "right": "tables, chairs and beds in a house"},
      {"left": "wooden", "right": "from a tree", "type": "adjective"},
      {"left": "electricity", "right": "the power that makes lights and machines work"}
    ], "explanation": "You cook on a stove. Furniture is tables, chairs and beds. Wooden means from wood, and electricity is power." }
  ]
});
