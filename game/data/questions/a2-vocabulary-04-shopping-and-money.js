/* Questions: A2 Vocabulary, theme 4 Shopping and Money (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A2|vocabulary|4|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.py. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A2|vocabulary|4|mc|easy": [
    {"type": "mc", "prompt": "My uncle always brings a ___ when he visits, for example a toy for my sister.", "options": ["gift", "clerk", "department", "box"], "explanation": "A gift is something nice that you give to a person. My uncle gives my sister a toy."},
    {"type": "mc", "prompt": "The ring costs a lot because it is real ___.", "options": ["gold", "department", "owner", "card"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. A ring of real gold is expensive."},
    {"type": "mc", "prompt": "At the end of the race, the winner gets gold and the second runner gets ___.", "options": ["silver", "owner", "clerk", "bill"], "targetType": "noun", "explanation": "Silver is a gray metal. It is the prize for the second place."},
    {"type": "mc", "prompt": "I found a ___ on the street, so now I have one more cent.", "options": ["penny", "gift", "clerk", "dollar"], "explanation": "A penny is a small piece of money. It is one cent."},
    {"type": "mc", "prompt": "At the market, most people want ___, not cards.", "options": ["cash", "teenager", "photograph", "euro"], "explanation": "Cash is money that you hold in your hand. The market does not use cards."},
    {"type": "mc", "prompt": "I never buy clothes at the full price. I wait for the ___ and pay less.", "options": ["sale", "advertising", "amount", "money"], "explanation": "A sale is a time when a store sells things for less money. Waiting for it saves money."},
    {"type": "mc", "prompt": "Tom has a new job, and he will ___ a lot of money.", "options": ["earn", "deal", "complain", "buy"], "explanation": "To earn money is to get it for your work. Tom works, so he earns money."},
    {"type": "mc", "prompt": "My neighbor will ___ me a ride to school if it rains.", "options": ["offer", "advertise", "change", "earn"], "targetType": "verb", "explanation": "To offer something is to say that you will give it. My neighbor says he will give me a ride."}
  ],
  "A2|vocabulary|4|mc|medium": [
    {"type": "mc", "prompt": "I work at the ___ on the corner. We sell milk, rice and fruit.", "options": ["grocery", "advertising", "cooking", "department"], "explanation": "A grocery is a store that sells food for the home. This one sells milk, rice and fruit."},
    {"type": "mc", "prompt": "The man who carried our bags to the hotel room got a ___ from Dad.", "options": ["tip", "advertisement", "shop", "pay"], "explanation": "A tip is extra money that you give to say thank you. Dad thanked the man with it."},
    {"type": "mc", "prompt": "The shop was nice, but the ___ was slow: nobody helped us for ten minutes.", "options": ["service", "advertisement", "grocery", "amount"], "explanation": "Service is the help that you get in a shop or restaurant. Waiting ten minutes for help is slow service."},
    {"type": "mc", "prompt": "Toys are on the second floor of the big store, in the children's ___.", "options": ["department", "clerk", "mall", "charity"], "explanation": "A department is one part of a big store. The children's department sells toys."},
    {"type": "mc", "prompt": "The ___ at the shoe store helped me, but she is not the boss. She just works there.", "options": ["clerk", "gift", "customer", "owner"], "explanation": "A clerk is a person who works in a store and helps customers. The owner is the boss."},
    {"type": "mc", "prompt": "Mom has no cash, so she buys the TV on ___ and pays later.", "options": ["credit", "penny", "check", "salary"], "explanation": "Credit is a way to buy something now and pay for it later."},
    {"type": "mc", "prompt": "Please write the ___ of money you want on the form: for example, 50 dollars.", "options": ["amount", "item", "rate", "service"], "explanation": "An amount tells you how much of something there is. Here it is how much money."},
    {"type": "mc", "prompt": "Some people ___ to the manager when the food is cold.", "options": ["complain", "earn", "advertise", "ask"], "targetType": "verb", "explanation": "To complain is to say that you are not happy about something. People complain to the manager about cold food."}
  ],
  "A2|vocabulary|4|mc|hard": [
    {"type": "mc", "prompt": "This ___ helps sick children, and people give money to it.", "options": ["charity", "bank", "department", "grocery"], "explanation": "A charity is a group that uses people's money to help others. This one helps sick children."},
    {"type": "mc", "prompt": "Please write the name of each ___ on the list: milk, eggs, bread.", "options": ["item", "gift", "amount", "percent"], "explanation": "An item is one thing in a group or on a list. Milk, eggs and bread are three items."},
    {"type": "mc", "prompt": "The coat costs 50 dollars, but today it is twenty ___ cheaper.", "options": ["percent", "number", "quantity", "price"], "targetType": "noun", "explanation": "Percent means a part out of 100. Twenty percent cheaper means 20 out of every 100."},
    {"type": "mc", "prompt": "The hotel's ___ is 80 dollars for one night.", "options": ["rate", "quality", "number", "item"], "explanation": "A rate is the price for one hour, one night or one unit. Here it is the price for one night."},
    {"type": "mc", "prompt": "I am sorry, that red shirt is not ___ in your size.", "options": ["available", "ready", "gold", "double"], "explanation": "Available means that you can buy it or use it. The store has no red shirt in your size."},
    {"type": "mc", "prompt": "Children under five can go into the museum ___, so they pay nothing.", "options": ["free", "early", "carefully", "exactly"], "targetType": "adverb", "explanation": "Here free means without paying anything. Small children go in free."},
    {"type": "mc", "prompt": "A ___ bed is big enough for two people.", "options": ["double", "married", "available", "silver"], "targetType": "adjective", "explanation": "Double means twice as big. A double bed is the size for two people."},
    {"type": "mc", "prompt": "The clerk has to ___ with many unhappy customers every day.", "options": ["deal", "earn", "complain", "play"], "targetType": "verb", "explanation": "To deal with a person or a problem is to take care of it. The clerk takes care of unhappy customers."}
  ],
  "A2|vocabulary|4|mc|veryhard": [
    {"type": "mc", "prompt": "The work is hard, but the ___ is very good: 25 dollars an hour.", "options": ["pay", "credit", "penny", "sale"], "targetType": "noun", "explanation": "Pay is the money that you get for your work. 25 dollars an hour is good pay."},
    {"type": "mc", "prompt": "We finished dinner, and the waiter brought the ___ so we could pay.", "options": ["check", "credit", "cash", "pay"], "targetType": "noun", "explanation": "In a restaurant, the check is the paper that shows how much you must pay."},
    {"type": "mc", "prompt": "These shoes are cheap, but the ___ is bad: they broke in a week.", "options": ["quality", "quantity", "percent", "item"], "explanation": "Quality is how good a thing is. Shoes that break in a week have bad quality."},
    {"type": "mc", "prompt": "We need a big ___ of rice for the party: thirty bags.", "options": ["quantity", "quality", "rate", "percent"], "explanation": "Quantity is how much or how many of something there is. Thirty bags of rice is a big quantity."},
    {"type": "mc", "prompt": "The world has about eight ___ people.", "options": ["billion", "five", "million", "zero"], "explanation": "A billion is a thousand million. About eight billion people live in the world."},
    {"type": "mc", "prompt": "Breakfast is ___ in the price of the room, so you do not pay extra.", "options": ["included", "busy", "open", "gold"], "targetType": "adjective", "explanation": "Included means part of the price. You do not pay more for it."},
    {"type": "mc", "prompt": "Companies spend a lot of money on ___ on TV and the internet.", "options": ["advertising", "tip", "offer", "service"], "explanation": "Advertising is the work of telling people about things to sell them."},
    {"type": "mc", "prompt": "The ___ on the bus showed a new phone with a big photo.", "options": ["advertisement", "tip", "website", "offer"], "explanation": "An advertisement tells people about something to sell. This one was a picture of a new phone."}
  ],
  "A2|vocabulary|4|fill|easy": [
    {"type": "fill", "before": "In the story, the man finds a box full of heavy yellow", "after": "and becomes rich.", "answer": "gold", "bank": ["gold", "cash", "salary"], "targetType": "noun", "explanation": "Gold is a yellow metal that costs a lot. A box full of it makes a man rich."},
    {"type": "fill", "before": "The old forks cost a lot because they are real", "after": "and not plastic.", "answer": "silver", "bank": ["silver", "salary", "credit"], "targetType": "noun", "explanation": "Silver is a gray metal that costs a lot. These forks are real silver."},
    {"type": "fill", "before": "A", "after": "is one cent, so you need a hundred of them for a dollar.", "answer": "penny", "bank": ["penny", "charity", "silver"], "explanation": "A penny is a small piece of money. A hundred pennies make one dollar."},
    {"type": "fill", "before": "You can use a card, or you can pay in", "after": "at the desk.", "answer": "cash", "bank": ["cash", "advertisement", "pay"], "explanation": "Cash is money that you hold in your hand. You can pay with it instead of a card."},
    {"type": "fill", "before": "There is a", "after": "at the shoe store on Monday: everything costs less.", "answer": "sale", "bank": ["sale", "advertising", "gold"], "explanation": "A sale is a time when a store sells things for less money."},
    {"type": "fill", "before": "The", "after": "of the shop is a woman who lives above it.", "answer": "owner", "bank": ["owner", "charity", "waiter"], "explanation": "The owner is the person that a shop belongs to. This woman owns it and lives upstairs."},
    {"type": "fill", "before": "In this job, you can", "after": "twenty dollars an hour.", "answer": "earn", "bank": ["earn", "complain", "deal"], "explanation": "To earn money is to get it for your work. In this job you get twenty dollars an hour."},
    {"type": "fill", "before": "The man at the shop made me a good", "after": "for the old phone.", "answer": "offer", "bank": ["offer", "advertisement", "gold"], "targetType": "noun", "explanation": "An offer is something that a person says he will give or pay. The man offered me a price for my phone."}
  ],
  "A2|vocabulary|4|fill|medium": [
    {"type": "fill", "before": "Mark leaves a small", "after": "for the waiter because he likes the food.", "answer": "tip", "bank": ["tip", "check", "pay"], "explanation": "A tip is extra money for the waiter. Mark leaves one when he is happy."},
    {"type": "fill", "before": "At the hotel, the room is nice and the", "after": "is very friendly.", "answer": "service", "bank": ["service", "advertising", "tip"], "explanation": "Service is the help that people give you in a hotel. Friendly service is good."},
    {"type": "fill", "before": "You can find the shirts in the men's", "after": "on the third floor.", "answer": "department", "bank": ["department", "charity", "grocery"], "explanation": "A department is one part of a big store. The men's department has shirts."},
    {"type": "fill", "before": "My brother does not own the shoe store; he is only the youngest", "after": "there.", "answer": "clerk", "bank": ["clerk", "owner", "waiter"], "explanation": "A clerk is a person who works in a store. My brother works there, but he does not own it."},
    {"type": "fill", "before": "The", "after": "in this job is good: 2,000 dollars every month and no work on weekends.", "answer": "salary", "bank": ["salary", "check", "penny"], "explanation": "A salary is the money that you get each month for your job. Here it is 2,000 dollars."},
    {"type": "fill", "before": "She has no money now, so she buys the phone on", "after": "and pays next month.", "answer": "credit", "bank": ["credit", "check", "penny"], "explanation": "Credit is a way to buy something now and pay for it later."},
    {"type": "fill", "before": "The", "after": "of sugar in this cake is too big.", "answer": "amount", "bank": ["amount", "number", "sale"], "explanation": "Amount is how much of something there is. We use it with things that we cannot count, like sugar."},
    {"type": "fill", "before": "If the soup is cold, you can", "after": "to the waiter.", "answer": "complain", "bank": ["complain", "advertise", "deal"], "targetType": "verb", "explanation": "To complain is to say that you are not happy. You can complain to the waiter about cold soup."}
  ],
  "A2|vocabulary|4|fill|hard": [
    {"type": "fill", "before": "Each", "after": "in this store has a small paper with its price.", "answer": "item", "bank": ["item", "quantity", "gift", "number"], "explanation": "An item is one thing in a store or on a list. Each item here has a price paper."},
    {"type": "fill", "before": "The store takes ten", "after": "off the price on Mondays.", "answer": "percent", "bank": ["percent", "rate", "amount", "quality"], "targetType": "noun", "explanation": "Percent means a part out of 100. Ten percent off means ten out of every 100."},
    {"type": "fill", "before": "The cheapest", "after": "for a room is 60 dollars a night.", "answer": "rate", "bank": ["rate", "percent", "cup", "sale"], "explanation": "A rate is the price for one night, one hour or one unit."},
    {"type": "fill", "before": "Is the blue jacket still", "after": "in a small size?", "answer": "available", "bank": ["available", "ready", "double", "married"], "explanation": "Available means that you can buy it. You ask if the store still has the jacket in small."},
    {"type": "fill", "before": "This website lets you listen to music", "after": ", so nobody has to pay.", "answer": "free", "bank": ["free", "late", "carefully", "exactly"], "targetType": "adverb", "explanation": "Here free means without paying anything. The music costs nothing."},
    {"type": "fill", "before": "The price is", "after": "now: it was 20 dollars and now it is 40.", "answer": "double", "bank": ["double", "available", "cheap", "silver"], "targetType": "adjective", "explanation": "Double means twice as much. Forty is twice twenty."},
    {"type": "fill", "before": "Water becomes ice when the temperature is", "after": "degrees.", "answer": "zero", "bank": ["zero", "billion", "thirteen", "thousand"], "explanation": "Zero is the number 0. Water becomes ice at zero degrees."},
    {"type": "fill", "before": "Ana does not know how to", "after": "with the problem at her job.", "answer": "deal", "bank": ["deal", "advertise", "complain", "play"], "targetType": "verb", "explanation": "To deal with a problem is to take care of it. Ana does not know what to do."}
  ],
  "A2|vocabulary|4|fill|veryhard": [
    {"type": "fill", "before": "At the end of every month, I get my", "after": "from the company.", "answer": "pay", "bank": ["pay", "credit", "tip", "silver"], "targetType": "noun", "explanation": "Pay is the money that you get for your work. I get mine every month."},
    {"type": "fill", "before": "Please, can we have the", "after": "? We are ready to go.", "answer": "check", "bank": ["check", "match", "cash", "salary"], "targetType": "noun", "explanation": "In a restaurant, you ask for the check when you want to pay."},
    {"type": "fill", "before": "I pay more for these shoes because their", "after": "is very good.", "answer": "quality", "bank": ["quality", "price", "item"], "explanation": "Quality is how good a thing is. People pay more for good quality."},
    {"type": "fill", "before": "What", "after": "of milk do you need for the cake: one cup or two?", "answer": "quantity", "bank": ["quantity", "rate", "service"], "explanation": "Quantity is how much of something there is. The answer is one cup or two."},
    {"type": "fill", "before": "Dinner is", "after": "in the price of the ticket, so you do not pay for it again.", "answer": "included", "bank": ["included", "open", "busy", "double"], "targetType": "adjective", "explanation": "Included means part of the price. The ticket already pays for dinner."},
    {"type": "fill", "before": "My brother works in", "after": "; he makes posters and TV films to sell new phones.", "answer": "advertising", "bank": ["advertising", "cash", "offer", "service"], "explanation": "Advertising is the work of telling people about things to sell them."},
    {"type": "fill", "before": "There was a big", "after": "for a new car; it had a nice photo and short text.", "answer": "advertisement", "bank": ["advertisement", "grocery", "magazine", "sale"], "explanation": "An advertisement tells people about something to sell. This one had a photo and a short text."},
    {"type": "fill", "before": "Companies", "after": "on TV to tell people about new things.", "answer": "advertise", "bank": ["advertise", "deal", "give", "offer"], "targetType": "verb", "explanation": "To advertise is to tell people about a thing to sell it. Companies do it on TV."}
  ],
  "A2|vocabulary|4|tf|easy": [
    {"type": "tf", "prompt": "A gift is something that you give to a person to make them happy.", "answer": true, "target": "gift", "explanation": "True. A gift is something nice that you give to someone."},
    {"type": "tf", "prompt": "Gold is a cheap material like paper.", "answer": false, "target": "gold", "targetType": "noun", "explanation": "False. Gold is a yellow metal that costs a lot."},
    {"type": "tf", "prompt": "A penny is one cent.", "answer": true, "target": "penny", "explanation": "True. A penny is a small piece of money. It is one cent."},
    {"type": "tf", "prompt": "Cash is money that you can only pay with a card.", "answer": false, "target": "cash", "explanation": "False. Cash is money that you hold in your hand. You pay with a card in a different way."},
    {"type": "tf", "prompt": "In a sale, the prices in the store are lower than usual.", "answer": true, "target": "sale", "explanation": "True. A sale is a time when a store sells things for less money."},
    {"type": "tf", "prompt": "The owner of a shop is a customer who buys one thing.", "answer": false, "target": "owner", "explanation": "False. The owner is the person that the shop belongs to."},
    {"type": "tf", "prompt": "You earn money when you work.", "answer": true, "target": "earn", "explanation": "True. To earn money is to get it for your work."},
    {"type": "tf", "prompt": "When you offer a drink to a friend, you take it away.", "answer": false, "target": "offer", "targetType": "verb", "explanation": "False. To offer something is to say that you will give it."}
  ],
  "A2|vocabulary|4|tf|medium": [
    {"type": "tf", "prompt": "A grocery is a store where you can buy milk, rice and fruit.", "answer": true, "target": "grocery", "explanation": "True. A grocery sells food for the home."},
    {"type": "tf", "prompt": "A tip is money that a waiter gives to the customer.", "answer": false, "target": "tip", "explanation": "False. A customer gives a tip to a waiter, not the other way."},
    {"type": "tf", "prompt": "Good service in a shop means that the clerk helps you quickly.", "answer": true, "target": "service", "explanation": "True. Service is the help that you get in a shop."},
    {"type": "tf", "prompt": "The toy department of a big store is where you buy shoes.", "answer": false, "target": "department", "explanation": "False. In the toy department you buy toys. Shoes are in the shoe department."},
    {"type": "tf", "prompt": "A clerk in a store helps customers and takes their money.", "answer": true, "target": "clerk", "explanation": "True. A clerk works in a store, helps customers and takes their money."},
    {"type": "tf", "prompt": "A salary is money that you give to your boss every month.", "answer": false, "target": "salary", "explanation": "False. A salary is money that you get from your boss for your work."},
    {"type": "tf", "prompt": "An amount tells you how much of something there is.", "answer": true, "target": "amount", "explanation": "True. For example, an amount of money can be ten dollars."},
    {"type": "tf", "prompt": "When you complain, you say thank you to the waiter.", "answer": false, "target": "complain", "targetType": "verb", "explanation": "False. To complain is to say that you are not happy."}
  ],
  "A2|vocabulary|4|tf|hard": [
    {"type": "tf", "prompt": "A charity uses money from people to help others.", "answer": true, "target": "charity", "explanation": "True. A charity is a group that helps people with money from others."},
    {"type": "tf", "prompt": "Fifty percent means all of something.", "answer": false, "target": "percent", "targetType": "noun", "explanation": "False. Fifty percent means half. All of something is a hundred percent."},
    {"type": "tf", "prompt": "A hotel rate tells you the price for one night.", "answer": true, "target": "rate", "explanation": "True. A rate is the price for one night, one hour or one unit."},
    {"type": "tf", "prompt": "A shirt is available when the store has none left.", "answer": false, "target": "available", "explanation": "False. Available means that you can buy it. If none is left, it is not available."},
    {"type": "tf", "prompt": "Some museums let children enter free.", "answer": true, "target": "free", "targetType": "adverb", "explanation": "True. Here free means without paying. Children do not pay."},
    {"type": "tf", "prompt": "A double price is half of the usual price.", "answer": false, "target": "double", "targetType": "adjective", "explanation": "False. Double means twice as much, not half."},
    {"type": "tf", "prompt": "Zero comes before one when you count numbers.", "answer": true, "target": "zero", "explanation": "True. Zero is the number 0, and it comes before one."},
    {"type": "tf", "prompt": "To deal with a problem is to leave it alone.", "answer": false, "target": "deal", "targetType": "verb", "explanation": "False. To deal with a problem is to take care of it, not to leave it alone."}
  ],
  "A2|vocabulary|4|tf|veryhard": [
    {"type": "tf", "prompt": "Pay is the money that you get for your work.", "answer": true, "target": "pay", "targetType": "noun", "explanation": "True. Pay is the money you get for a job."},
    {"type": "tf", "prompt": "A thing of good quality is usually bad.", "answer": false, "target": "quality", "explanation": "False. Quality is how good a thing is. Good quality means a good thing."},
    {"type": "tf", "prompt": "A shop has a big quantity of milk if it has a lot of milk.", "answer": true, "target": "quantity", "explanation": "True. Quantity is how much of something there is."},
    {"type": "tf", "prompt": "A billion is a smaller number than one thousand.", "answer": false, "target": "billion", "explanation": "False. A billion is a thousand million. It is much bigger than a thousand."},
    {"type": "tf", "prompt": "If breakfast is included in the price, you do not pay extra for it.", "answer": true, "target": "included", "targetType": "adjective", "explanation": "True. Included means part of the price."},
    {"type": "tf", "prompt": "Advertising is the work of people who clean shops.", "answer": false, "target": "advertising", "explanation": "False. Advertising is the work of telling people about things to sell them."},
    {"type": "tf", "prompt": "You can see an advertisement in a magazine or on TV.", "answer": true, "target": "advertisement", "explanation": "True. An advertisement tells people about something to sell, in magazines, on TV and on the internet."},
    {"type": "tf", "prompt": "Companies advertise to tell people to stop buying their things.", "answer": false, "target": "advertise", "targetType": "verb", "explanation": "False. Companies advertise to tell people about their things and to sell more."}
  ],
  "A2|vocabulary|4|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "gift", "right": "something nice that you give to a person"},
      {"left": "silver", "right": "a gray metal that costs a lot", "type": "noun"},
      {"left": "earn", "right": "to get money for your work", "type": "verb"},
      {"left": "sale", "right": "a time when a store sells things for less money"}
    ], "explanation": "A gift is something you give. Silver is a gray metal, to earn is to get money for work, and a sale has lower prices." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "gold", "right": "a yellow metal that costs a lot", "type": "noun"},
      {"left": "cash", "right": "money that you hold in your hand, not on a card"},
      {"left": "owner", "right": "the person that a shop belongs to"},
      {"left": "offer", "right": "a special price in a shop, for example buy two and pay for one", "type": "noun"}
    ], "explanation": "Gold is a yellow metal. Cash is money in your hand, the owner has the shop, and an offer is a special price." }
  ],
  "A2|vocabulary|4|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "grocery", "right": "a store that sells milk, rice and fruit"},
      {"left": "clerk", "right": "a person who sells you things and helps you at a shop"},
      {"left": "salary", "right": "the money that you get every month for your job"},
      {"left": "amount", "right": "how much of something there is"}
    ], "explanation": "A grocery sells food. A clerk helps you in a shop, a salary is monthly money for a job, and an amount says how much." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "tip", "right": "extra money that you give to a waiter"},
      {"left": "service", "right": "the help that you get in a restaurant or a shop"},
      {"left": "department", "right": "one part of a big store, like toys or clothes"},
      {"left": "credit", "right": "a way to buy now and pay later"}
    ], "explanation": "A tip is extra money and service is help. A department is a part of a big store, and credit lets you pay later." }
  ],
  "A2|vocabulary|4|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "charity", "right": "a group that uses people's money to help others"},
      {"left": "rate", "right": "the price for one night or one hour"},
      {"left": "free", "right": "without paying anything", "type": "adverb"},
      {"left": "deal", "right": "to take care of a problem or a person", "type": "verb"}
    ], "explanation": "A charity helps others with money. A rate is a price for a night, free means without paying, and to deal is to take care." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "item", "right": "one thing in a group or on a list"},
      {"left": "percent", "right": "a part out of 100", "type": "noun"},
      {"left": "available", "right": "ready for you to buy or use", "type": "adjective"},
      {"left": "zero", "right": "the number 0"}
    ], "explanation": "An item is one thing on a list. Percent is a part out of 100, available means you can buy it, and zero is 0." }
  ],
  "A2|vocabulary|4|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "pay", "right": "the money that you get for your work", "type": "noun"},
      {"left": "quality", "right": "how good a thing is"},
      {"left": "billion", "right": "a thousand million"},
      {"left": "advertise", "right": "to tell people about a thing to sell it", "type": "verb"}
    ], "explanation": "Pay is money for work and quality is how good something is. A billion is a thousand million, and to advertise is to tell people about a thing." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      {"left": "check", "right": "the paper that shows how much you must pay in a restaurant", "type": "noun"},
      {"left": "quantity", "right": "how much or how many of something there is"},
      {"left": "included", "right": "part of the price, so that you do not pay more", "type": "adjective"},
      {"left": "advertising", "right": "the work of telling people about things to sell them"}
    ], "explanation": "A check is the restaurant bill and quantity is how much there is. Included means part of the price, and advertising is selling with words and pictures." }
  ]
});
