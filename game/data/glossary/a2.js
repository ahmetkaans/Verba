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
    "clerk": [
      {
        "type": "noun",
        "meaning": "a person who works in a store and helps customers",
        "for": [
          "4"
        ]
      },
      {
        "type": "noun",
        "meaning": "a person who works in an office or a bank and does jobs such as writing papers",
        "for": [
          "8"
        ]
      }
    ],
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
    "department": [
      {
        "type": "noun",
        "meaning": "a part of a big store, for example for toys or clothes",
        "for": [
          "4"
        ]
      },
      {
        "type": "noun",
        "meaning": "one part of a big company where people do one kind of work",
        "for": [
          "8"
        ]
      }
    ],
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
    },
    "achieve": {
      "type": "verb",
      "meaning": "to do or get something good after trying hard"
    },
    "analyze": {
      "type": "verb",
      "meaning": "to look at something very carefully to understand it"
    },
    "ancient": {
      "type": "adjective",
      "meaning": "very, very old, from a time long ago"
    },
    "attend": {
      "type": "verb",
      "meaning": "to go to a school, a class or an event"
    },
    "attention": {
      "type": "noun",
      "meaning": "the act of watching or listening with care"
    },
    "author": {
      "type": "noun",
      "meaning": "a person who writes a book or a story"
    },
    "biology": {
      "type": "noun",
      "meaning": "the subject about living things, such as plants and animals"
    },
    "board": {
      "type": "noun",
      "meaning": "a big thing on the wall of a classroom where the teacher writes"
    },
    "campus": {
      "type": "noun",
      "meaning": "the land and the buildings of a university or a school"
    },
    "chemistry": {
      "type": "noun",
      "meaning": "the subject about water, air and other things, and how they change when you put them together"
    },
    "column": {
      "type": "noun",
      "meaning": "one of the long parts of a page, with a line of words going down it"
    },
    "context": {
      "type": "noun",
      "meaning": "the words around a word that help you understand its meaning"
    },
    "copy": [
      {
        "type": "noun",
        "meaning": "a page or a thing that is made to look exactly like another one"
      },
      {
        "type": "verb",
        "meaning": "to make something that is exactly like another thing"
      }
    ],
    "count": {
      "type": "verb",
      "meaning": "to say numbers in order, or to find how many there are"
    },
    "degree": {
      "type": "noun",
      "meaning": "a paper from a university that shows you finished your studies"
    },
    "education": {
      "type": "noun",
      "meaning": "the learning and teaching that happens at school and at university"
    },
    "error": {
      "type": "noun",
      "meaning": "a mistake"
    },
    "essay": {
      "type": "noun",
      "meaning": "a short piece of writing about one subject, written for school"
    },
    "evidence": {
      "type": "noun",
      "meaning": "facts or signs that show that something is true"
    },
    "experiment": {
      "type": "noun",
      "meaning": "a test that you do to learn something new"
    },
    "explanation": {
      "type": "noun",
      "meaning": "words that make something easy to understand"
    },
    "fail": {
      "type": "verb",
      "meaning": "to not pass a test, or to not do something well enough"
    },
    "identify": {
      "type": "verb",
      "meaning": "to say who a person is or what a thing is"
    },
    "instruction": {
      "type": "noun",
      "meaning": "words that tell you how to do something"
    },
    "instructor": {
      "type": "noun",
      "meaning": "a person who teaches a skill, such as swimming or driving"
    },
    "knowledge": {
      "type": "noun",
      "meaning": "what you know about a subject"
    },
    "lab": {
      "type": "noun",
      "meaning": "a room where people do science work"
    },
    "learning": {
      "type": "noun",
      "meaning": "the work of getting new knowledge or a new skill"
    },
    "lecture": [
      {
        "type": "noun",
        "meaning": "a long talk to a class about a subject"
      },
      {
        "type": "verb",
        "meaning": "to give a long talk to a class about a subject"
      }
    ],
    "level": {
      "type": "noun",
      "meaning": "a step in how easy or hard something is"
    },
    "mark": [
      {
        "type": "noun",
        "meaning": "the number or letter a teacher gives for your work"
      },
      {
        "type": "verb",
        "meaning": "to write on something, or to check work and give it a number or letter"
      }
    ],
    "math": {
      "type": "noun",
      "meaning": "the school subject about numbers and shapes"
    },
    "mathematics": {
      "type": "noun",
      "meaning": "the subject about numbers, shapes and how to count them"
    },
    "memory": {
      "type": "noun",
      "meaning": "the power to remember things"
    },
    "method": {
      "type": "noun",
      "meaning": "a way of doing something"
    },
    "number": {
      "type": "verb",
      "meaning": "to put 1, 2, 3 and so on on each thing in a list"
    },
    "pass": {
      "type": "verb",
      "meaning": "to do well enough in a test to move on"
    },
    "physics": {
      "type": "noun",
      "meaning": "the subject about things such as light, sound and how things move"
    },
    "predict": {
      "type": "verb",
      "meaning": "to say what will happen in the future before it happens"
    },
    "present": {
      "type": "verb",
      "meaning": "to show or tell something to a group of people"
    },
    "professor": {
      "type": "noun",
      "meaning": "a teacher at a university"
    },
    "progress": [
      {
        "type": "noun",
        "meaning": "the change to a better skill over time"
      },
      {
        "type": "verb",
        "meaning": "to get better, or to move forward"
      }
    ],
    "pronounce": {
      "type": "verb",
      "meaning": "to say a word with the right sounds"
    },
    "question": {
      "type": "verb",
      "meaning": "to ask a person many things to find facts"
    },
    "realize": {
      "type": "verb",
      "meaning": "to understand something suddenly"
    },
    "recognize": {
      "type": "verb",
      "meaning": "to know who a person is or what a thing is when you see it again"
    },
    "refer": {
      "type": "verb",
      "meaning": "to talk about a person or a thing, or to look at a book for facts"
    },
    "research": [
      {
        "type": "noun",
        "meaning": "the work of looking for facts about a subject"
      },
      {
        "type": "verb",
        "meaning": "to look for facts about a subject"
      }
    ],
    "researcher": {
      "type": "noun",
      "meaning": "a person whose job is to find new facts about a subject"
    },
    "solution": {
      "type": "noun",
      "meaning": "an answer to a problem"
    },
    "solve": {
      "type": "verb",
      "meaning": "to find the answer to a problem"
    },
    "source": {
      "type": "noun",
      "meaning": "the book or place where you found a fact"
    },
    "speaker": {
      "type": "noun",
      "meaning": "a person who gives a talk to a group of people"
    },
    "speech": {
      "type": "noun",
      "meaning": "a talk that a person gives to a group of people"
    },
    "structure": {
      "type": "noun",
      "meaning": "the way the parts of something are put together"
    },
    "survey": {
      "type": "noun",
      "meaning": "a list of questions that you ask many people to learn what they think"
    },
    "symbol": {
      "type": "noun",
      "meaning": "a picture or a sign that stands for an idea"
    },
    "teaching": {
      "type": "noun",
      "meaning": "the work of a teacher: helping people learn"
    },
    "term": {
      "type": "noun",
      "meaning": "one of the parts of the school year"
    },
    "thinking": {
      "type": "noun",
      "meaning": "the work your mind does when you try to find an answer"
    },
    "thought": {
      "type": "noun",
      "meaning": "an idea in your head"
    },
    "understanding": {
      "type": "noun",
      "meaning": "knowing how something works or what it means"
    },
    "unit": {
      "type": "noun",
      "meaning": "one part of a book or a course"
    },
    "apply": {
      "type": "verb",
      "meaning": "to ask for a job in a letter or on a form"
    },
    "architect": {
      "type": "noun",
      "meaning": "a person who draws plans for houses and other buildings"
    },
    "assistant": [
      {
        "type": "noun",
        "meaning": "a person whose job is to help another person at work"
      },
      {
        "type": "adjective",
        "meaning": "helping the main person at work, for example the second manager of a shop"
      }
    ],
    "boss": {
      "type": "noun",
      "meaning": "the person who tells workers what to do and checks their work"
    },
    "businessman": {
      "type": "noun",
      "meaning": "a man whose work is business, for example buying and selling things"
    },
    "coach": [
      {
        "type": "noun",
        "meaning": "a person who trains a sports player or a team"
      },
      {
        "type": "verb",
        "meaning": "to train a sports player or a team"
      }
    ],
    "colleague": {
      "type": "noun",
      "meaning": "a person who works with you in the same place"
    },
    "conference": {
      "type": "noun",
      "meaning": "a big meeting where many people talk about one subject"
    },
    "detective": {
      "type": "noun",
      "meaning": "a person whose job is to find out who did a crime"
    },
    "director": {
      "type": "noun",
      "meaning": "a person who tells the actors what to do in a film, or who leads a big company"
    },
    "employ": {
      "type": "verb",
      "meaning": "to pay a person to work for you"
    },
    "employee": {
      "type": "noun",
      "meaning": "a person who has a job and is paid to work for someone"
    },
    "employer": {
      "type": "noun",
      "meaning": "a person or a company that pays people to work for them"
    },
    "engineer": {
      "type": "noun",
      "meaning": "a person who plans and checks machines, roads or bridges"
    },
    "equipment": {
      "type": "noun",
      "meaning": "the machines and tools that you need for a job or a sport"
    },
    "experience": {
      "type": "noun",
      "meaning": "what you learn from doing a job for some time"
    },
    "expert": [
      {
        "type": "noun",
        "meaning": "a person who knows a lot about one subject"
      },
      {
        "type": "adjective",
        "meaning": "knowing a lot about one subject"
      }
    ],
    "factor": {
      "type": "noun",
      "meaning": "one of the things that help you to decide something"
    },
    "factory": {
      "type": "noun",
      "meaning": "a big building where workers use machines to make things"
    },
    "feature": {
      "type": "noun",
      "meaning": "a special or important part of something"
    },
    "fire": {
      "type": "verb",
      "meaning": "to tell a worker that he or she must leave the job"
    },
    "industry": {
      "type": "noun",
      "meaning": "the companies that make or sell one kind of thing, such as cars"
    },
    "journalist": {
      "type": "noun",
      "meaning": "a person who writes news stories for a newspaper or a website"
    },
    "lawyer": {
      "type": "noun",
      "meaning": "a person whose job is to give advice about the law"
    },
    "leader": {
      "type": "noun",
      "meaning": "a person who is in front of a group and shows the others what to do"
    },
    "manage": {
      "type": "verb",
      "meaning": "to look after a shop, a team or a company"
    },
    "manager": {
      "type": "noun",
      "meaning": "a person who looks after a shop, a hotel or a team"
    },
    "material": {
      "type": "noun",
      "meaning": "what you use to make something, such as wood, stone or paper"
    },
    "officer": {
      "type": "noun",
      "meaning": "a person who has an important job in the police or the army"
    },
    "opportunity": {
      "type": "noun",
      "meaning": "a chance to do something good, such as a new job"
    },
    "organization": {
      "type": "noun",
      "meaning": "a big group of people who work together, such as a company or a school"
    },
    "organize": {
      "type": "verb",
      "meaning": "to plan something and make everything ready"
    },
    "painter": {
      "type": "noun",
      "meaning": "a person whose job is to paint walls, houses or pictures"
    },
    "pilot": {
      "type": "noun",
      "meaning": "a person who flies a plane"
    },
    "power": {
      "type": "noun",
      "meaning": "the energy, such as electricity, that makes machines work"
    },
    "process": {
      "type": "noun",
      "meaning": "a number of steps that you follow to make or do something"
    },
    "produce": {
      "type": "verb",
      "meaning": "to make something, for example food or things in a factory"
    },
    "professional": {
      "type": "adjective",
      "meaning": "doing a job for money, and not just for fun"
    },
    "purpose": {
      "type": "noun",
      "meaning": "the reason why you do something"
    },
    "reception": {
      "type": "noun",
      "meaning": "the place in a hotel or an office where visitors say who they are and ask for help"
    },
    "role": {
      "type": "noun",
      "meaning": "the job or the part that a person has in a team or a company"
    },
    "secretary": {
      "type": "noun",
      "meaning": "a person who writes letters, answers the phone and keeps the papers for a boss"
    },
    "strategy": {
      "type": "noun",
      "meaning": "a plan to get something that you want"
    },
    "succeed": {
      "type": "verb",
      "meaning": "to do what you tried to do"
    },
    "successful": {
      "type": "adjective",
      "meaning": "getting the good result that you wanted, or making a lot of money"
    },
    "target": {
      "type": "noun",
      "meaning": "a number or an amount that you want to reach"
    },
    "task": {
      "type": "noun",
      "meaning": "a piece of work that you have to do"
    },
    "tool": {
      "type": "noun",
      "meaning": "something you hold in your hand to do a job, such as a knife or a brush"
    },
    "training": {
      "type": "noun",
      "meaning": "lessons that teach you how to do a job well"
    },
    "working": {
      "type": "adjective",
      "meaning": "to do with your job, for example the days or the hours when you work"
    }
  }
});
