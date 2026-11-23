/* Questions: A2 Vocabulary, theme 4 Shopping and Money (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|4|mc|easy": [
    { "type": "mc", "prompt": "It is Lisa's birthday. Her friends give her a birthday ___.", "options": ["gift", "advertising", "owner", "bag"], "explanation": "A gift is something nice that you give to a person. Friends often give gifts on a birthday." },
    { "type": "mc", "prompt": "This yellow watch costs a lot of money. It is real ___.", "options": ["gold", "gift", "change", "salary"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. People make watches and other nice things from it." },
    { "type": "mc", "prompt": "Rich people sometimes have forks and spoons of ___, a gray metal.", "options": ["silver", "penny", "dollar", "salary"], "targetType": "noun", "explanation": "Silver is a gray metal that costs a lot. Rich people sometimes have forks and spoons of silver." },
    { "type": "mc", "prompt": "Sam finds one cent on the street. We call it one ___.", "options": ["penny", "silver", "dollar", "owner"], "explanation": "A penny is one cent. One hundred pennies are one dollar." },
    { "type": "mc", "prompt": "Lisa has no credit card, so she pays in ___.", "options": ["cash", "advertising", "clerk", "shop"], "explanation": "Cash is money that you have in your hand, not on a card. Lisa gives the money to the clerk." },
    { "type": "mc", "prompt": "All the shoes in this shop are cheaper this week. There is a big ___.", "options": ["sale", "store", "clerk", "silver"], "explanation": "A sale is a time when a shop sells things for less money. This week the shoes cost less." },
    { "type": "mc", "prompt": "Anna works at a cafe on weekends to ___ some money.", "options": ["earn", "deal", "sell", "double"], "explanation": "To earn money is to get it for your work. Anna gets money when she works at the cafe." },
    { "type": "mc", "prompt": "The clerk will ___ you a better price if you buy two.", "options": ["offer", "complain", "advertise", "buy"], "targetType": "verb", "explanation": "To offer is to say that you will give something to a person. The clerk says that he will give you a better price." }
  ],
  "A2|vocabulary|4|mc|medium": [
    { "type": "mc", "prompt": "Ali has a small ___ near the station. People buy fruit, vegetables and rice there.", "options": ["grocery", "department", "charity", "bank"], "explanation": "A grocery is a store that sells food and other things for the home. Ali sells food in it." },
    { "type": "mc", "prompt": "After dinner, Dad put extra money on the table for the waiter. It was the ___.", "options": ["tip", "advertising", "bank", "pay"], "explanation": "A tip is extra money that you give to a waiter to say thank you. Dad left it on the table." },
    { "type": "mc", "prompt": "The shop is clean and the prices are good. We also like the ___ here, because it is fast and kind.", "options": ["service", "sale", "advertisement", "clerk"], "explanation": "Service is the help that people give you in a store or a restaurant. Here the help is fast and kind." },
    { "type": "mc", "prompt": "Ben wants to buy a toy. He goes to the toy ___ on the second floor of the big store.", "options": ["department", "salary", "market", "charity"], "explanation": "A department is a part of a big store. The toy department is the place for toys." },
    { "type": "mc", "prompt": "Leo sells shoes in a store. The store belongs to his uncle, so Leo is only its ___.", "options": ["clerk", "driver", "waiter", "owner"], "explanation": "A clerk is a person who works in a store and helps customers. Leo is a clerk, because the store is not his." },
    { "type": "mc", "prompt": "Ken has no money in his hand today. He buys a new phone on ___ and pays next month.", "options": ["credit", "euro", "cash", "check"], "explanation": "Credit is a way to buy now and pay later. Ken takes the phone today and pays next month." },
    { "type": "mc", "prompt": "Please put a small ___ of sugar in my tea.", "options": ["amount", "advertisement", "number", "price"], "explanation": "An amount is how much of something there is. We say a small amount of sugar, but a small number of cups." },
    { "type": "mc", "prompt": "The soup is cold, so Dad wants to ___ to the manager.", "options": ["complain", "deal", "advertise", "tell"], "explanation": "To complain is to say that you are not happy about something. Dad is not happy with the cold soup." }
  ],
  "A2|vocabulary|4|mc|hard": [
    { "type": "mc", "prompt": "Anna gives her old clothes to a ___ that helps people with no money.", "options": ["charity", "bank", "department", "grocery"], "explanation": "A charity is a group that helps people who need help. Many people give money or clothes to a charity." },
    { "type": "mc", "prompt": "The list has five ___: milk, bread, eggs, rice and sugar.", "options": ["items", "gifts", "quantities", "qualities"], "target": "item", "explanation": "An item is one thing in a list or in a shop. Milk, bread, eggs, rice and sugar are five items." },
    { "type": "mc", "prompt": "The shop takes ten ___ off the price of every shirt.", "options": ["percent", "amount", "item", "cost"], "targetType": "noun", "explanation": "Percent means 'out of 100'. Ten percent off means that you pay ten dollars less for every hundred dollars that something costs." },
    { "type": "mc", "prompt": "The hotel has a nice room at a low ___ of $60 a night.", "options": ["rate", "percent", "quality", "item"], "explanation": "A rate is the price for one hour, one night or one unit. Here the rate is $60 for one night." },
    { "type": "mc", "prompt": "The red shoes are not ___ in your size today, but we can order them.", "options": ["available", "ready", "gold", "double"], "explanation": "Available means that you can buy it or use it. The shop does not have the shoes in your size today." },
    { "type": "mc", "prompt": "Children under five can go in the museum ___, so their parents pay nothing for them.", "options": ["free", "early", "carefully", "exactly"], "explanation": "Free means without paying. Children under five go in and pay nothing." },
    { "type": "mc", "prompt": "Ken wants more coffee, so his coffee is ___. It is twice as big as a small one.", "options": ["double", "included", "extra", "gold"], "targetType": "adjective", "explanation": "Double means twice as much or twice as big. A double coffee is two times bigger." },
    { "type": "mc", "prompt": "Ali is a clerk. He has to ___ with many customers every day.", "options": ["deal", "complain", "advertise", "try"], "explanation": "To deal with a person is to take care of them. We say deal with a person or a problem." }
  ],
  "A2|vocabulary|4|mc|veryhard": [
    { "type": "mc", "prompt": "Sam's job is hard, but the ___ is good. He gets $20 every hour.", "options": ["pay", "credit", "cash", "bill"], "targetType": "noun", "explanation": "Pay is the money that you get for your work. Sam gets $20 for every hour of work." },
    { "type": "mc", "prompt": "After dinner, the waiter brings a small paper with the price of the food. It is the ___.", "options": ["check", "credit", "pay", "card"], "targetType": "noun", "explanation": "A check is the paper that shows how much you must pay in a restaurant. The waiter brings it at the end of the dinner." },
    { "type": "mc", "prompt": "This bag is not cheap, but it is very good ___. It will last for many years.", "options": ["quality", "amount", "rate", "price"], "explanation": "Quality is how good something is. A bag of good quality lasts for many years." },
    { "type": "mc", "prompt": "The shop has a large ___ of rice. It can sell rice to hundreds of people.", "options": ["quantity", "rate", "percent", "price"], "explanation": "A quantity is how much or how many of something there is. A large quantity of rice is a lot of rice." },
    { "type": "mc", "prompt": "We say one ___ for 1,000,000,000.", "options": ["billion", "zero", "million", "thousand"], "explanation": "A billion is a thousand million. It is a very big number." },
    { "type": "mc", "prompt": "The room costs $80 and breakfast is ___. You do not pay more for it.", "options": ["included", "open", "busy", "silver"], "explanation": "Included means that it is part of the price. You do not pay extra for the breakfast." },
    { "type": "mc", "prompt": "Big companies spend a lot of money on TV ___ to sell their products.", "options": ["advertising", "grocery", "service", "sale"], "explanation": "Advertising is telling people about a product so that they want to buy it. Companies show it on TV." },
    { "type": "mc", "prompt": "Ali sees a big ___ for a new phone on the side of the bus. It is a picture with words.", "options": ["advertisement", "tip", "service", "offer"], "explanation": "An advertisement is a picture or a text that tells people about a product. This one is on the side of the bus." }
  ],
  "A2|vocabulary|4|fill|easy": [
    { "type": "fill", "before": "The old king sits on a chair of yellow", "after": ".", "answer": "gold", "bank": ["gold", "penny", "tip"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. Only a rich king has a chair of gold." },
    { "type": "fill", "before": "Gold is yellow, and", "after": "is gray. Both are expensive metals.", "answer": "silver", "bank": ["silver", "penny", "salary"], "targetType": "noun", "explanation": "Silver is a gray metal that costs a lot. It is not yellow like gold." },
    { "type": "fill", "before": "Anna has only one", "after": "in her bag, so she cannot buy candy.", "answer": "penny", "bank": ["penny", "gift", "pay"], "explanation": "A penny is one cent. One cent is too little money to buy candy." },
    { "type": "fill", "before": "Ali does not like cards. He keeps", "after": "in his bag to pay for lunch.", "answer": "cash", "bank": ["cash", "credit", "gift"], "explanation": "Cash is money that you have in your hand, not on a card. Ali does not like cards, so he uses cash." },
    { "type": "fill", "before": "I bought these shoes in the winter", "after": ", so they were cheap.", "answer": "sale", "bank": ["sale", "quantity", "charity"], "explanation": "A sale is a time when a shop sells things for less money. That is why the shoes were cheap." },
    { "type": "fill", "before": "Tom's father has a small shop. He pays the people who work in it, so he is the", "after": ".", "answer": "owner", "bank": ["owner", "clerk", "department"], "explanation": "An owner is the person that a shop belongs to. Tom's father pays the people who work there, so he is the owner." },
    { "type": "fill", "before": "Ali washes cars on Saturdays. He gets five dollars for every car, so he can", "after": "money for a new phone.", "answer": "earn", "bank": ["earn", "complain", "offer"], "explanation": "To earn money is to get it for your work. Ali gets five dollars for every car that he washes." },
    { "type": "fill", "before": "This week the shop has a special", "after": ": buy one shirt and get one free.", "answer": "offer", "bank": ["offer", "advertising", "department"], "targetType": "noun", "explanation": "An offer is a special price or deal in a shop. Here you buy one shirt and get another one free." }
  ],
  "A2|vocabulary|4|fill|medium": [
    { "type": "fill", "before": "The waiter was very kind, so Lisa left him a small", "after": "to say thank you.", "answer": "tip", "bank": ["tip", "advertisement", "check"], "explanation": "A tip is extra money that you give to a waiter to say thank you. Lisa leaves a small one." },
    { "type": "fill", "before": "This hotel is expensive, but the", "after": "is very good. The workers help us quickly.", "answer": "service", "bank": ["service", "sale", "advertisement"], "explanation": "Service is the help that people give you in a hotel, a store or a restaurant. The workers here help quickly." },
    { "type": "fill", "before": "Mia looks for a warm coat in the", "after": "for women.", "answer": "department", "bank": ["department", "charity", "grocery"], "explanation": "A department is a part of a big store. The department for women sells clothes for women." },
    { "type": "fill", "before": "Ben asks about the price of a jacket. He talks to the", "after": "at the desk, not to the owner.", "answer": "clerk", "bank": ["clerk", "owner", "farmer"], "explanation": "A clerk is a person who works in a store and helps customers. Ben asks the clerk at the desk, not the owner." },
    { "type": "fill", "before": "Ken has a good job. His", "after": "is more than $40,000 a year.", "answer": "salary", "bank": ["salary", "check", "gold"], "explanation": "A salary is the money that a person gets every year or month for a job. Ken gets more than $40,000 a year." },
    { "type": "fill", "before": "Mia wants a bed. She gets it on", "after": "and pays a little each month.", "answer": "credit", "bank": ["credit", "cash", "check"], "explanation": "Credit is a way to buy now and pay later. Mia pays a little money each month." },
    { "type": "fill", "before": "The big glass holds a large", "after": "of water.", "answer": "amount", "bank": ["amount", "rate", "number"], "explanation": "An amount is how much of something there is. We say a large amount of water." },
    { "type": "fill", "before": "The hotel room is dirty and the bed is hard. Ben wants to", "after": "about the room.", "answer": "complain", "bank": ["complain", "deal", "advertise"], "explanation": "To complain is to say that you are not happy about something. Ben is not happy about the dirty room." }
  ],
  "A2|vocabulary|4|fill|hard": [
    { "type": "fill", "before": "Milk is the first", "after": "on Mia's shopping list.", "answer": "item", "bank": ["item", "quantity", "quality", "rate"], "explanation": "An item is one thing in a list or in a shop. Milk is one item on Mia's list." },
    { "type": "fill", "before": "Ben got 90", "after": "in the test. That means 90 out of 100.", "answer": "percent", "bank": ["percent", "quality", "quantity", "quarter"], "targetType": "noun", "explanation": "Percent means 'out of 100'. Ben got 90 out of 100 questions right." },
    { "type": "fill", "before": "Mia looks after children. She asks for eight dollars for every hour. That is her", "after": ".", "answer": "rate", "bank": ["rate", "service", "amount", "percent"], "explanation": "A rate is the price for one hour, one night or one unit. Here the unit is one hour." },
    { "type": "fill", "before": "The new phone is not", "after": "in the shops yet. You cannot buy it now.", "answer": "available", "bank": ["available", "open", "gold", "double"], "explanation": "Available means that you can buy it or use it. The phone is not in the shops yet." },
    { "type": "fill", "before": "The park concert is on Sunday. Everyone gets in", "after": ", so you do not need a ticket.", "answer": "free", "bank": ["free", "together", "slowly", "completely"], "explanation": "Free means without paying. Everyone gets in free, so nobody needs a ticket." },
    { "type": "fill", "before": "Last year the price was five dollars. This year it is ten, so the price is", "after": ".", "answer": "double", "bank": ["double", "available", "open", "silver"], "targetType": "adjective", "explanation": "Double means twice as much. Ten dollars is two times five dollars." },
    { "type": "fill", "before": "The classroom is empty. There are", "after": "students in it.", "answer": "zero", "bank": ["zero", "billion", "thousand", "hundred"], "explanation": "Zero is the number 0. An empty room has zero students in it." },
    { "type": "fill", "before": "The mayor must", "after": "with big problems in the city.", "answer": "deal", "bank": ["deal", "earn", "complain", "try"], "explanation": "To deal with a problem is to take care of it. The mayor must take care of the big problems in the city." }
  ],
  "A2|vocabulary|4|fill|veryhard": [
    { "type": "fill", "before": "Maria works at a bank, and she gets her", "after": "at the end of every month.", "answer": "pay", "bank": ["pay", "card", "penny", "tip"], "targetType": "noun", "explanation": "Pay is the money that you get for your work. Maria gets her pay at the end of every month." },
    { "type": "fill", "before": "At the cafe, Lisa wants to leave, so she asks the waiter for the", "after": ".", "answer": "check", "bank": ["check", "credit", "cash", "pay"], "targetType": "noun", "explanation": "A check is the paper that shows how much you must pay in a restaurant. Lisa asks for it before she leaves." },
    { "type": "fill", "before": "These shoes are cheap, but the", "after": "is bad: they broke after one week.", "answer": "quality", "bank": ["quality", "item", "amount", "price"], "explanation": "Quality is how good something is. The shoes broke after one week, so their quality is bad." },
    { "type": "fill", "before": "The school kitchen bought a big", "after": "of apples, more than 500 of them.", "answer": "quantity", "bank": ["quantity", "item", "percent", "offer"], "explanation": "A quantity is how much or how many of something there is. The kitchen bought a big quantity of apples." },
    { "type": "fill", "before": "Tea and coffee are", "after": "in the price of the train ticket.", "answer": "included", "bank": ["included", "open", "busy", "double"], "explanation": "Included means that it is part of the price. You do not pay extra for tea and coffee." },
    { "type": "fill", "before": "Companies pay for", "after": "at the football game, so that people see their products.", "answer": "advertising", "bank": ["advertising", "grocery", "website", "service"], "explanation": "Advertising is telling people about a product so that they want to buy it. Companies pay for it, for example at a football game." },
    { "type": "fill", "before": "Between the songs, the radio plays many", "after": "for new bikes.", "answer": "advertisements", "bank": ["advertisements", "tips", "magazines", "sales"], "target": "advertisement", "explanation": "An advertisement is a picture or a text that tells people about a product. The radio plays many of them between the songs." },
    { "type": "fill", "before": "The new shop wants to", "after": "on the internet, so more people know about it.", "answer": "advertise", "bank": ["advertise", "earn", "give", "offer"], "explanation": "To advertise is to tell people about a product so that they want to buy it. The shop does this on the internet." }
  ],
  "A2|vocabulary|4|tf|easy": [
    { "type": "tf", "prompt": "You can give your friend a gift on her birthday.", "answer": true, "target": "gift", "explanation": "True. A gift is something nice that you give to a person, for example on a birthday." },
    { "type": "tf", "prompt": "A gold watch is a cheap watch.", "answer": false, "target": "gold", "targetType": "noun", "explanation": "False. Gold costs a lot of money, so a gold watch is expensive." },
    { "type": "tf", "prompt": "One hundred pennies are one dollar.", "answer": true, "target": "penny", "explanation": "True. A penny is one cent, and one hundred cents are one dollar." },
    { "type": "tf", "prompt": "Cash is money that you keep inside your credit card.", "answer": false, "target": "cash", "explanation": "False. Cash is money that you have in your hand, not on a card." },
    { "type": "tf", "prompt": "Shoes are cheaper than usual when a shop has a sale.", "answer": true, "target": "sale", "explanation": "True. A sale is a time when a shop sells things for less money." },
    { "type": "tf", "prompt": "A shop belongs to its customers, so they are the owners.", "answer": false, "target": "owner", "explanation": "False. The owner is the person that the shop belongs to. The customers only buy things there." },
    { "type": "tf", "prompt": "Doctors earn money by helping sick people.", "answer": true, "target": "earn", "explanation": "True. To earn money is to get it for your work, and a doctor works by helping sick people." },
    { "type": "tf", "prompt": "To offer a person a chair is to take the chair away from them.", "answer": false, "target": "offer", "targetType": "verb", "explanation": "False. To offer something is to say that you will give it to a person." }
  ],
  "A2|vocabulary|4|tf|medium": [
    { "type": "tf", "prompt": "You can buy bread and milk at a grocery.", "answer": true, "target": "grocery", "explanation": "True. A grocery is a store that sells food like bread and milk." },
    { "type": "tf", "prompt": "A tip is money that a waiter gives to the customers.", "answer": false, "target": "tip", "explanation": "False. A tip is extra money that a customer gives to a waiter." },
    { "type": "tf", "prompt": "Good service in a restaurant means that the workers are kind and help you quickly.", "answer": true, "target": "service", "explanation": "True. Service is the help that people give you in a restaurant, a hotel or a store." },
    { "type": "tf", "prompt": "A department is a person who helps you in a store.", "answer": false, "target": "department", "explanation": "False. A department is a part of a big store, like the toy department. A person who helps you is a clerk." },
    { "type": "tf", "prompt": "A clerk in a shoe store helps people to find the right size.", "answer": true, "target": "clerk", "explanation": "True. A clerk is a person who works in a store and helps customers." },
    { "type": "tf", "prompt": "A salary is the money that you give to a waiter after dinner.", "answer": false, "target": "salary", "explanation": "False. A salary is the money that a person gets for a job. The extra money for a waiter is a tip." },
    { "type": "tf", "prompt": "A big amount of water is heavier than a small amount of water.", "answer": true, "target": "amount", "targetType": "noun", "explanation": "True. An amount is how much of something there is, and more water is heavier." },
    { "type": "tf", "prompt": "When you complain, you say that you are very happy about something.", "answer": false, "target": "complain", "explanation": "False. To complain is to say that you are not happy about something." }
  ],
  "A2|vocabulary|4|tf|hard": [
    { "type": "tf", "prompt": "People often give money to a charity to help others.", "answer": true, "target": "charity", "explanation": "True. A charity is a group that helps people who need help, and many people give money to it." },
    { "type": "tf", "prompt": "Fifty percent of a pizza is the whole pizza.", "answer": false, "target": "percent", "targetType": "noun", "explanation": "False. Fifty percent is fifty out of a hundred, so it is only half of the pizza." },
    { "type": "tf", "prompt": "A hotel room can have a rate of $80 for one night.", "answer": true, "target": "rate", "targetType": "noun", "explanation": "True. A rate is the price for one hour, one night or one unit." },
    { "type": "tf", "prompt": "A phone that is still in the factory is available in the shop.", "answer": false, "target": "available", "explanation": "False. Available means that you can buy it or use it. A phone in the factory is not in the shop yet." },
    { "type": "tf", "prompt": "At some museums, children get in free.", "answer": true, "target": "free", "explanation": "True. Free means without paying, so these children pay nothing." },
    { "type": "tf", "prompt": "A double sandwich is smaller than a single sandwich.", "answer": false, "target": "double", "targetType": "adjective", "explanation": "False. Double means twice as much, so a double sandwich is bigger than a single one." },
    { "type": "tf", "prompt": "If you have zero dollars, you have no money.", "answer": true, "target": "zero", "explanation": "True. Zero is the number 0, so zero dollars is no money." },
    { "type": "tf", "prompt": "To deal with a problem is to run away from it.", "answer": false, "target": "deal", "explanation": "False. To deal with a problem is to take care of it." }
  ],
  "A2|vocabulary|4|tf|veryhard": [
    { "type": "tf", "prompt": "A job with good pay gives you a lot of money for your work.", "answer": true, "target": "pay", "targetType": "noun", "explanation": "True. Pay is the money that you get for your work." },
    { "type": "tf", "prompt": "A cheap bag that breaks in one week is a bag of good quality.", "answer": false, "target": "quality", "explanation": "False. Quality is how good something is. A bag that breaks in one week has bad quality." },
    { "type": "tf", "prompt": "A shop with a large quantity of apples has a lot of apples.", "answer": true, "target": "quantity", "explanation": "True. A quantity is how much or how many of something there is." },
    { "type": "tf", "prompt": "A billion is smaller than a million.", "answer": false, "target": "billion", "explanation": "False. A billion is a thousand million, so it is much bigger than a million." },
    { "type": "tf", "prompt": "If dinner is included in a hotel price, you pay nothing more for it.", "answer": true, "target": "included", "explanation": "True. Included means that it is part of the price, so you pay nothing extra." },
    { "type": "tf", "prompt": "Advertising is telling people about a product so that they stop buying it.", "answer": false, "target": "advertising", "explanation": "False. Advertising is telling people about a product so that they want to buy it." },
    { "type": "tf", "prompt": "Many companies put an advertisement for their new phone in the newspaper.", "answer": true, "target": "advertisement", "explanation": "True. An advertisement is a picture or a text that tells people about a product." },
    { "type": "tf", "prompt": "A shop can advertise a new phone by hiding it from the customers.", "answer": false, "target": "advertise", "explanation": "False. To advertise is to tell people about a product. Hiding the phone does the opposite." }
  ],
  "A2|vocabulary|4|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "gift", "right": "something nice that a friend gives you on your birthday" },
      { "left": "silver", "right": "a gray metal that costs a lot", "type": "noun" },
      { "left": "earn", "right": "to get money for the work that you do" },
      { "left": "sale", "right": "a time when the shop has lower prices" }
    ], "explanation": "A friend gives you a gift. Silver is a gray metal, and you earn money when you work. A sale is a time with lower prices." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "gold", "right": "a yellow metal that costs a lot", "type": "noun" },
      { "left": "cash", "right": "money in your hand, not on a card" },
      { "left": "owner", "right": "the person that a shop belongs to" },
      { "left": "offer", "right": "a special price, like buy one and get one free", "type": "noun" }
    ], "explanation": "Gold is a yellow metal and cash is money in your hand. The owner is the person that a shop belongs to, and an offer is a special price." }
  ],
  "A2|vocabulary|4|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "grocery", "right": "a store where you buy food like milk and rice" },
      { "left": "clerk", "right": "a person who sells things to customers in a store" },
      { "left": "salary", "right": "the money that you get every month for your job" },
      { "left": "amount", "right": "how much of something there is", "type": "noun" }
    ], "explanation": "You buy food at a grocery, and a clerk sells things in a store. A salary is the money from a job, and an amount tells how much there is." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "tip", "right": "extra money that you give to a waiter" },
      { "left": "service", "right": "the help that workers give you in a hotel or a restaurant" },
      { "left": "department", "right": "one part of a big store" },
      { "left": "credit", "right": "a way to buy something now and pay for it later" }
    ], "explanation": "A tip is extra money for a waiter, and service is the help that workers give. A department is a part of a big store, and credit lets you pay later." }
  ],
  "A2|vocabulary|4|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "charity", "right": "a group that helps people who have no money" },
      { "left": "rate", "right": "the price for one hour or one night", "type": "noun" },
      { "left": "free", "right": "without paying anything" },
      { "left": "deal", "right": "to take care of a problem or a person", "type": "verb" }
    ], "explanation": "A charity helps people with no money. A rate is the price for one night, free means without paying, and to deal with a problem is to take care of it." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "item", "right": "one thing in a shop or on a list" },
      { "left": "percent", "right": "a number out of 100, like 10 out of 100", "type": "noun" },
      { "left": "available", "right": "you can buy it or use it now", "type": "adjective" },
      { "left": "zero", "right": "the number 0, which means nothing" }
    ], "explanation": "An item is one thing on a list. Percent means out of 100, available means that you can have it now, and zero is the number 0." }
  ],
  "A2|vocabulary|4|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "pay", "right": "the money that you get for your work", "type": "noun" },
      { "left": "quality", "right": "how good a thing is" },
      { "left": "billion", "right": "one thousand million" },
      { "left": "advertise", "right": "to tell people about a product so that they want to buy it", "type": "verb" }
    ], "explanation": "Pay is the money from your work, and quality is how good a thing is. A billion is a thousand million, and to advertise is to tell people about a product." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "check", "right": "the paper that shows the price at the end of a meal", "type": "noun" },
      { "left": "quantity", "right": "how many or how much of something there is" },
      { "left": "included", "right": "part of the price, so you do not pay more", "type": "adjective" },
      { "left": "advertising", "right": "telling people about products on TV or the radio" }
    ], "explanation": "The check shows the price of a meal, and a quantity tells how much there is. Included means part of the price, and advertising tells people about products." }
  ]
});
