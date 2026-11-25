/* Glossary for the "Words in this game" pop-up and the Word list: the meanings of every tested word, written once per level.
   A word type may have SEVERAL meanings (2026-11-21), each with "for": [quiz-key prefixes after "A2|vocabulary|"]; the pop-up shows the
   meaning of the quiz first, with a *, and the Word list shows every meaning (README "Confirmed decisions"). Shape: { "A2": { "banana": [ { "type": "noun", "meaning": "a long yellow fruit" } ] } }.
   Keys are lower case. The part between "Object.assign(GAME_DATA.glossary, " and the closing ");" must stay valid
   JSON: it is read by .gitignore/tools/check_questions.ps1. One file per level. */
Object.assign(GAME_DATA.glossary, {
  "A2": {
    "advertise": {"type": "verb", "meaning": "to tell people about a product so that they want to buy it"},
    "advertisement": {"type": "noun", "meaning": "a picture or a text that tells people about a product"},
    "advertising": {"type": "noun", "meaning": "the work of telling people about products so that they buy them"},
    "amount": {"type": "noun", "meaning": "how much of something there is"},
    "appearance": {"type": "noun", "meaning": "the way a person or a thing looks to other people"},
    "attractive": {"type": "adjective", "meaning": "nice to look at, like a pretty place or a nice design"},
    "available": {"type": "adjective", "meaning": "that you can buy, get or use"},
    "bean": {"type": "noun", "meaning": "a small green or brown food that grows in a long plant"},
    "beef": {"type": "noun", "meaning": "meat from a cow"},
    "belt": {"type": "noun", "meaning": "a band that you wear around your middle to keep your pants up"},
    "billion": {"type": "number", "meaning": "a thousand million (1,000,000,000)"},
    "boil": {"type": "verb", "meaning": "to heat water until it is very hot and starts to move"},
    "bowl": {"type": "noun", "meaning": "a dish for soup, rice or fruit"},
    "bright": {"type": "adjective", "meaning": "with a strong, clear color or a lot of light"},
    "broken": {"type": "adjective", "meaning": "not working, or in pieces"},
    "brush": [
      {"type": "verb", "meaning": "to clean something with a tool that has thin hairs, for example your hair or your jacket"},
      {"type": "noun", "meaning": "a tool with many thin hairs on it that you use to clean things"}
    ],
    "button": {"type": "noun", "meaning": "a small round thing on a shirt or coat that you push through a hole to close it"},
    "can": {"type": "noun", "meaning": "a metal container for food or drinks"},
    "candy": {"type": "noun", "meaning": "a small, sweet thing that you eat, made with sugar"},
    "carpet": {"type": "noun", "meaning": "a thick, soft cover for a floor"},
    "cash": {"type": "noun", "meaning": "money that you have in your hand, not on a card"},
    "charity": {"type": "noun", "meaning": "a group that helps people who need help, for example with money or food"},
    "check": {"type": "noun", "meaning": "the paper that shows how much you must pay in a restaurant"},
    "chef": {"type": "noun", "meaning": "a person who cooks food in a restaurant"},
    "chip": {"type": "noun", "meaning": "a thin piece of potato that people eat from a bag"},
    "clerk": {"type": "noun", "meaning": "a person who works in a store and helps customers"},
    "closet": {"type": "noun", "meaning": "a place in a wall or room where you keep clothes"},
    "clothing": {"type": "noun", "meaning": "the things that people wear, for example shirts, pants and coats"},
    "comfortable": [
      {"type": "adjective", "meaning": "nice and soft to sit or lie on", "for": ["2"]},
      {"type": "adjective", "meaning": "nice to wear because it is soft and the right size", "for": ["5"]}
    ],
    "complain": {"type": "verb", "meaning": "to say that you are not happy about something"},
    "cook": {"type": "noun", "meaning": "a person who makes food"},
    "cookie": {"type": "noun", "meaning": "a small, sweet food that you eat with milk or tea"},
    "corn": {"type": "noun", "meaning": "a tall plant with yellow food on it, or the yellow food itself"},
    "credit": {"type": "noun", "meaning": "a way to buy something now and pay for it later"},
    "curly": {"type": "adjective", "meaning": "with many small circles, not straight, like some hair"},
    "deal": {"type": "verb", "meaning": "to take care of a problem or a person"},
    "department": {"type": "noun", "meaning": "a part of a big store, for example for toys or clothes"},
    "designer": {"type": "noun", "meaning": "a person who draws ideas for new things, for example clothes or shoes"},
    "dessert": {"type": "noun", "meaning": "sweet food that you eat at the end of a meal"},
    "double": [
      {"type": "adjective", "meaning": "twice as big or twice as much"},
      {"type": "determiner", "meaning": "two times the size or the amount of something"},
      {"type": "pronoun", "meaning": "two times the amount that you have or get"},
      {"type": "verb", "meaning": "to become twice as big or twice as much"}
    ],
    "downstairs": {"type": "adjective", "meaning": "on the lower floor of a house"},
    "dry": [
      {"type": "adjective", "meaning": "not wet"},
      {"type": "verb", "meaning": "to take the water off something, for example with a towel"}
    ],
    "earn": {"type": "verb", "meaning": "to get money for the work that you do"},
    "electric": {"type": "adjective", "meaning": "working with electricity"},
    "electrical": {"type": "adjective", "meaning": "using or about electricity"},
    "electricity": {"type": "noun", "meaning": "the power that makes lights and machines work"},
    "empty": {"type": "adjective", "meaning": "with nothing or nobody inside"},
    "farming": {"type": "noun", "meaning": "the work of growing food or keeping animals on a farm"},
    "fashion": {"type": "noun", "meaning": "the clothes and styles that many people like at one time"},
    "fat": {"type": "noun", "meaning": "the soft part of food, like the white part of meat or butter"},
    "fishing": {"type": "noun", "meaning": "the work or hobby of catching fish"},
    "fit": [
      {"type": "verb", "meaning": "to be the right size and shape for a person or a place"},
      {"type": "adjective", "meaning": "strong and healthy because you do a lot of sport"}
    ],
    "fix": {"type": "verb", "meaning": "to make a broken thing work again"},
    "fork": {"type": "noun", "meaning": "a tool with small points that you use to eat food"},
    "formal": {"type": "adjective", "meaning": "right for an important or serious time, like a job interview"},
    "free": {"type": "adverb", "meaning": "without paying anything"},
    "fresh": {"type": "adjective", "meaning": "new, not old, like bread that someone made today"},
    "furniture": {"type": "noun", "meaning": "tables, chairs, beds and other big things in a home"},
    "garbage": {"type": "noun", "meaning": "things that you do not want and throw away"},
    "gas": {"type": "noun", "meaning": "something that burns in a stove to cook food"},
    "gift": {"type": "noun", "meaning": "something nice that you give to a person"},
    "gold": [
      {"type": "noun", "meaning": "a yellow metal that costs a lot"},
      {"type": "adjective", "meaning": "with the yellow color of an expensive metal"}
    ],
    "grocery": {"type": "noun", "meaning": "a store that sells food and other things for the home"},
    "guest": {"type": "noun", "meaning": "a person who visits or stays at your home"},
    "hall": {"type": "noun", "meaning": "the space just inside the front door of a house"},
    "heavy": {"type": "adjective", "meaning": "hard to carry or to pick up because it has a lot of weight"},
    "height": {"type": "noun", "meaning": "how tall or how high something is"},
    "home": {"type": "adjective", "meaning": "of the place where you live, like your town or your team"},
    "included": {"type": "adjective", "meaning": "part of the price, so that you do not pay more"},
    "informal": {"type": "adjective", "meaning": "relaxed and not serious, like clothes for a party with friends"},
    "item": {"type": "noun", "meaning": "one thing in a shop or on a list"},
    "jam": {"type": "noun", "meaning": "a sweet food made from fruit and sugar that you put on bread"},
    "jewelry": {"type": "noun", "meaning": "nice things like rings that people wear to look nice, often made of gold or silver"},
    "knife": {"type": "noun", "meaning": "a tool that you use to cut food"},
    "knock": {"type": "verb", "meaning": "to hit a door with your hand to make a noise"},
    "lamp": {"type": "noun", "meaning": "a light that you put on a table or a desk"},
    "lemon": {"type": "noun", "meaning": "a yellow fruit that you can put in water or tea"},
    "light": [
      {"type": "verb", "meaning": "to make a fire or a stove start to burn"},
      {"type": "adjective", "meaning": "not heavy, easy to carry or to hold"}
    ],
    "lock": [
      {"type": "verb", "meaning": "to close a door or a bike with a key"},
      {"type": "noun", "meaning": "the thing on a door that you close with a key"}
    ],
    "look": {"type": "noun", "meaning": "how a person or a thing seems to other people, for example in new clothes"},
    "metal": {"type": "noun", "meaning": "a hard material like gold or silver"},
    "mirror": {"type": "noun", "meaning": "a glass in which you can see your face"},
    "nut": {"type": "noun", "meaning": "a hard food that you break to eat the small part inside it"},
    "offer": [
      {"type": "verb", "meaning": "to say that you will give something to a person"},
      {"type": "noun", "meaning": "a special price in a shop, for example buy one and get one free"}
    ],
    "oil": {"type": "noun", "meaning": "something yellow that you use for cooking; it comes in a bottle"},
    "oven": {"type": "noun", "meaning": "a big metal box in the kitchen that you use to cook cake and bread"},
    "owner": {"type": "noun", "meaning": "the person that a shop or a thing belongs to"},
    "pattern": {"type": "noun", "meaning": "lines, shapes or colors that come back again and again on a thing"},
    "pay": {"type": "noun", "meaning": "the money that you get for your work"},
    "penny": {"type": "noun", "meaning": "a small piece of money that is one cent"},
    "percent": [
      {"type": "noun", "meaning": "a part out of 100: 10% is ten out of 100"},
      {"type": "adjective", "meaning": "out of every 100, as in a 10% sale"},
      {"type": "adverb", "meaning": "by a part out of 100, as in 20% cheaper"}
    ],
    "plastic": [
      {"type": "noun", "meaning": "a light, cheap material that is used to make bottles and bags"},
      {"type": "adjective", "meaning": "made of this light, cheap material"}
    ],
    "plate": {"type": "noun", "meaning": "a dish that you put your food on"},
    "pocket": {"type": "noun", "meaning": "a small bag in your clothes where you can put your phone or keys"},
    "poster": {"type": "noun", "meaning": "a big picture that you put on a wall"},
    "quality": {"type": "noun", "meaning": "how good a thing is"},
    "quantity": {"type": "noun", "meaning": "how much or how many of something there is"},
    "rate": {"type": "noun", "meaning": "the price for one hour, one night or one unit"},
    "recipe": {"type": "noun", "meaning": "words that tell you how to make a kind of food"},
    "refrigerator": {"type": "noun", "meaning": "a big box in the kitchen that keeps food cold"},
    "repair": {"type": "verb", "meaning": "to make something that is broken work again"},
    "roof": {"type": "noun", "meaning": "the top of a house"},
    "salary": {"type": "noun", "meaning": "the money that you get every month or year for your job"},
    "sale": {"type": "noun", "meaning": "a time when a store sells things for less money"},
    "sauce": {"type": "noun", "meaning": "something that you put on rice, meat or other food to give it more taste"},
    "serve": {"type": "verb", "meaning": "to bring food or drinks to people at a table"},
    "service": {"type": "noun", "meaning": "the help that people give you in a restaurant or a store"},
    "sheet": {"type": "noun", "meaning": "a big, thin cover for a bed or for furniture"},
    "silver": [
      {"type": "noun", "meaning": "a gray metal that costs a lot"},
      {"type": "adjective", "meaning": "with the gray color of an expensive metal"}
    ],
    "size": {"type": "noun", "meaning": "how big or small something is, for example the number of your shoes"},
    "sneaker": {"type": "noun", "meaning": "a soft shoe that people wear for sport or every day"},
    "soap": {"type": "noun", "meaning": "a thing you use with water to make your hands or body clean"},
    "sock": {"type": "noun", "meaning": "something soft that you wear on your foot inside a shoe"},
    "soft": {"type": "adjective", "meaning": "nice to touch, not hard"},
    "spoon": {"type": "noun", "meaning": "a small tool that you use to eat soup or to put sugar in tea"},
    "stair": {"type": "noun", "meaning": "one step that you climb to go up in a house"},
    "stove": {"type": "noun", "meaning": "a kitchen machine with hot places on top for cooking"},
    "suit": {"type": "noun", "meaning": "a jacket and pants that are made to be worn together"},
    "sweet": {"type": "adjective", "meaning": "with the taste of sugar"},
    "taste": [
      {"type": "noun", "meaning": "the way that food or drink is in your mouth, for example sweet or good"},
      {"type": "verb", "meaning": "to put a little food in your mouth to find out what it is like"}
    ],
    "thick": {"type": "adjective", "meaning": "with a big distance from one side to the other, not thin"},
    "thin": {"type": "adjective", "meaning": "with a small distance from one side to the other, not thick"},
    "tie": [
      {"type": "noun", "meaning": "a long, thin band that a man wears around his neck with a shirt"},
      {"type": "verb", "meaning": "to close or to hold something with a band"}
    ],
    "tip": {"type": "noun", "meaning": "extra money that you give to a waiter to say thank you"},
    "towel": {"type": "noun", "meaning": "a soft cover for drying your body, hair or hands"},
    "trash": {"type": "noun", "meaning": "things that you do not want and throw away"},
    "uniform": {"type": "noun", "meaning": "the same clothes that all people in a school or a job wear"},
    "upstairs": {"type": "adjective", "meaning": "on the higher floor of a house"},
    "washing": {"type": "noun", "meaning": "clothes that you need to wash or that you have washed"},
    "weight": {"type": "noun", "meaning": "how heavy something is"},
    "wide": {"type": "adjective", "meaning": "big from one side to the other, not narrow"},
    "wood": {"type": "noun", "meaning": "the hard material that comes from a tree"},
    "wooden": {"type": "adjective", "meaning": "made of wood"},
    "zero": {"type": "number", "meaning": "the number 0"},
    "accident": {
      "type": "noun",
      "meaning": "something bad that happens by chance, for example when two cars hit each other"
    },
    "active": {
      "type": "adjective",
      "meaning": "doing many things and full of energy"
    },
    "alive": {
      "type": "adjective",
      "meaning": "living, not dead"
    },
    "ankle": {
      "type": "noun",
      "meaning": "the part of the leg just above the foot"
    },
    "birth": {
      "type": "noun",
      "meaning": "the time when a baby comes out of its mother and starts to live"
    },
    "blood": {
      "type": "noun",
      "meaning": "the red thing that goes around inside your body"
    },
    "bone": {
      "type": "noun",
      "meaning": "one of the hard white parts inside your body"
    },
    "brain": {
      "type": "noun",
      "meaning": "the part inside your head that you use to think and remember"
    },
    "care": [
      {
        "type": "noun",
        "meaning": "the work of looking after a person or a thing so that they stay well"
      },
      {
        "type": "verb",
        "meaning": "to think that a person or a thing is important to you"
      }
    ],
    "cell": {
      "type": "noun",
      "meaning": "a very small living part of a person, an animal or a plant"
    },
    "cigarette": {
      "type": "noun",
      "meaning": "a thin white thing that people smoke"
    },
    "dead": {
      "type": "adjective",
      "meaning": "not living any more"
    },
    "death": {
      "type": "noun",
      "meaning": "the end of a life"
    },
    "dentist": {
      "type": "noun",
      "meaning": "a doctor who looks after your teeth"
    },
    "disease": {
      "type": "noun",
      "meaning": "a serious illness that a person can have for a long time"
    },
    "drug": {
      "type": "noun",
      "meaning": "a medicine that a doctor gives you to make you better"
    },
    "fever": {
      "type": "noun",
      "meaning": "a high temperature of the body when you are ill"
    },
    "finger": {
      "type": "noun",
      "meaning": "one of the five long parts at the end of your hand"
    },
    "flu": {
      "type": "noun",
      "meaning": "an illness like a bad cold, with a fever and pain in the body"
    },
    "headache": {
      "type": "noun",
      "meaning": "a pain in your head"
    },
    "heart": {
      "type": "noun",
      "meaning": "the part inside your body that pushes blood around it"
    },
    "hurt": [
      {
        "type": "verb",
        "meaning": "to give someone pain, or to feel pain in a part of the body"
      },
      {
        "type": "adjective",
        "meaning": "sad because of something that another person said or did"
      }
    ],
    "ill": {
      "type": "adjective",
      "meaning": "not well, with a problem in your body"
    },
    "illness": {
      "type": "noun",
      "meaning": "a time when a person is ill, or a problem that makes a person ill"
    },
    "injury": {
      "type": "noun",
      "meaning": "a part of the body that is hurt in an accident, for example by a fall"
    },
    "knee": {
      "type": "noun",
      "meaning": "the part in the middle of your leg"
    },
    "medical": {
      "type": "adjective",
      "meaning": "about doctors and the care of ill people"
    },
    "medicine": {
      "type": "noun",
      "meaning": "something that you take to feel better when you are ill"
    },
    "movement": {
      "type": "noun",
      "meaning": "the act of moving from one place or position to another"
    },
    "neck": {
      "type": "noun",
      "meaning": "the part of the body between the head and the shoulders"
    },
    "pain": {
      "type": "noun",
      "meaning": "the bad feeling in your body when something hurts"
    },
    "patient": {
      "type": "noun",
      "meaning": "a person that a doctor or a hospital looks after"
    },
    "physical": {
      "type": "adjective",
      "meaning": "about the body, not the mind"
    },
    "rest": [
      {
        "type": "noun",
        "meaning": "a time when you stop work or sport and do nothing"
      },
      {
        "type": "verb",
        "meaning": "to stop work or sport and sit or lie down for a time"
      }
    ],
    "shoulder": {
      "type": "noun",
      "meaning": "the part of the body where the arm joins the body"
    },
    "skin": {
      "type": "noun",
      "meaning": "the outside of your body"
    },
    "smell": [
      {
        "type": "verb",
        "meaning": "to give a nice or a bad feeling to your nose, or to notice something with your nose"
      },
      {
        "type": "noun",
        "meaning": "the thing that your nose notices, for example from flowers or food"
      }
    ],
    "smoke": [
      {
        "type": "verb",
        "meaning": "to take the gray air of a cigarette into your mouth and out again"
      },
      {
        "type": "noun",
        "meaning": "the gray air that comes from a fire or a cigarette"
      }
    ],
    "smoking": {
      "type": "noun",
      "meaning": "the act of taking the smoke of a cigarette into your mouth"
    },
    "stomach": {
      "type": "noun",
      "meaning": "the part inside your body where food goes after you eat"
    },
    "stress": [
      {
        "type": "noun",
        "meaning": "a worried and tired feeling that you have when you have too much to do"
      },
      {
        "type": "verb",
        "meaning": "to say that something is very important"
      }
    ],
    "virus": {
      "type": "noun",
      "meaning": "a very small living thing that can make people ill"
    },
    "weak": {
      "type": "adjective",
      "meaning": "not strong"
    }
  }
});
