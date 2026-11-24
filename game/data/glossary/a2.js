/* Glossary for the "Words in this game" pop-up and the Word list: the meanings of every tested word, written once per level.
   A word type may have SEVERAL meanings (2026-11-21), each with "for": [quiz-key prefixes after "A2|vocabulary|"]; the pop-up shows the
   meaning of the quiz first, with a *, and the Word list shows every meaning (README "Confirmed decisions"). Shape: { "A2": { "banana": [ { "type": "noun", "meaning": "a long yellow fruit" } ] } }.
   Keys are lower case. The part between "Object.assign(GAME_DATA.glossary, " and the closing ");" must stay valid
   JSON: it is read by .gitignore/tools/check_questions.ps1. One file per level. */
Object.assign(GAME_DATA.glossary, {
  "A2": {
    "bean": { "type": "noun", "meaning": "a small green or brown food that grows in a long plant" },
    "beef": { "type": "noun", "meaning": "meat from a cow" },
    "boil": { "type": "verb", "meaning": "to heat water until it is very hot and starts to move" },
    "bowl": { "type": "noun", "meaning": "a dish for soup, rice or fruit" },
    "can": { "type": "noun", "meaning": "a metal container for food or drinks" },
    "candy": { "type": "noun", "meaning": "a small, sweet thing that you eat, made with sugar" },
    "cash": { "type": "noun", "meaning": "money that you have in your hand, not on a card" },
    "chef": { "type": "noun", "meaning": "a person who cooks food in a restaurant" },
    "chip": { "type": "noun", "meaning": "a thin piece of potato that people eat from a bag" },
    "cook": { "type": "noun", "meaning": "a person who makes food" },
    "cookie": { "type": "noun", "meaning": "a small, sweet food that you eat with milk or tea" },
    "corn": { "type": "noun", "meaning": "a tall plant with yellow food on it, or the yellow food itself" },
    "dessert": { "type": "noun", "meaning": "sweet food that you eat at the end of a meal" },
    "farming": { "type": "noun", "meaning": "the work of growing food or keeping animals on a farm" },
    "fat": { "type": "noun", "meaning": "the soft part of food, like the white part of meat or butter" },
    "fishing": { "type": "noun", "meaning": "the work or hobby of catching fish" },
    "fork": { "type": "noun", "meaning": "a tool with small points that you use to eat food" },
    "fresh": { "type": "adjective", "meaning": "new, not old, like bread that someone made today" },
    "grocery": { "type": "noun", "meaning": "a store that sells food and other things for the home" },
    "jam": { "type": "noun", "meaning": "a sweet food made from fruit and sugar that you put on bread" },
    "knife": { "type": "noun", "meaning": "a tool that you use to cut food" },
    "lemon": { "type": "noun", "meaning": "a yellow fruit that you can put in water or tea" },
    "nut": { "type": "noun", "meaning": "a hard food that you break to eat the small part inside it" },
    "oil": { "type": "noun", "meaning": "something yellow that you use for cooking; it comes in a bottle" },
    "oven": { "type": "noun", "meaning": "a big metal box in the kitchen that you use to cook cake and bread" },
    "plate": { "type": "noun", "meaning": "a dish that you put your food on" },
    "recipe": { "type": "noun", "meaning": "words that tell you how to make a kind of food" },
    "sale": { "type": "noun", "meaning": "a time when a store sells things for less money" },
    "sauce": { "type": "noun", "meaning": "something that you put on rice, meat or other food to give it more taste" },
    "serve": { "type": "verb", "meaning": "to bring food or drinks to people at a table" },
    "service": { "type": "noun", "meaning": "the help that people give you in a restaurant or a store" },
    "spoon": { "type": "noun", "meaning": "a small tool that you use to eat soup or to put sugar in tea" },
    "stove": { "type": "noun", "meaning": "a kitchen machine with hot places on top for cooking" },
    "sweet": { "type": "adjective", "meaning": "with the taste of sugar" },
    "taste": [
      { "type": "noun", "meaning": "the way that food or drink is in your mouth, for example sweet or good" },
      { "type": "verb", "meaning": "to put a little food in your mouth to find out what it is like" }
    ],
    "tip": { "type": "noun", "meaning": "extra money that you give to a waiter to say thank you" },
    "advertise": { "type": "verb", "meaning": "to tell people about a product so that they want to buy it" },
    "advertisement": { "type": "noun", "meaning": "a picture or a text that tells people about a product" },
    "advertising": { "type": "noun", "meaning": "the work of telling people about products so that they buy them" },
    "amount": { "type": "noun", "meaning": "how much of something there is" },
    "available": { "type": "adjective", "meaning": "that you can buy, get or use" },
    "billion": { "type": "number", "meaning": "a thousand million (1,000,000,000)" },
    "charity": { "type": "noun", "meaning": "a group that helps people who need help, for example with money or food" },
    "check": { "type": "noun", "meaning": "the paper that shows how much you must pay in a restaurant" },
    "clerk": { "type": "noun", "meaning": "a person who works in a store and helps customers" },
    "complain": { "type": "verb", "meaning": "to say that you are not happy about something" },
    "credit": { "type": "noun", "meaning": "a way to buy something now and pay for it later" },
    "deal": { "type": "verb", "meaning": "to take care of a problem or a person" },
    "department": { "type": "noun", "meaning": "a part of a big store, for example for toys or clothes" },
    "double": [
      { "type": "adjective", "meaning": "twice as big or twice as much" },
      { "type": "determiner", "meaning": "two times the size or the amount of something" },
      { "type": "pronoun", "meaning": "two times the amount that you have or get" },
      { "type": "verb", "meaning": "to become twice as big or twice as much" }
    ],
    "earn": { "type": "verb", "meaning": "to get money for the work that you do" },
    "free": { "type": "adverb", "meaning": "without paying anything" },
    "gift": { "type": "noun", "meaning": "something nice that you give to a person" },
    "gold": [
      { "type": "noun", "meaning": "a yellow metal that costs a lot" },
      { "type": "adjective", "meaning": "with the yellow color of an expensive metal" }
    ],
    "included": { "type": "adjective", "meaning": "part of the price, so that you do not pay more" },
    "item": { "type": "noun", "meaning": "one thing in a shop or on a list" },
    "offer": [
      { "type": "verb", "meaning": "to say that you will give something to a person" },
      { "type": "noun", "meaning": "a special price in a shop, for example buy one and get one free" }
    ],
    "owner": { "type": "noun", "meaning": "the person that a shop or a thing belongs to" },
    "pay": { "type": "noun", "meaning": "the money that you get for your work" },
    "penny": { "type": "noun", "meaning": "a small piece of money that is one cent" },
    "percent": [
      { "type": "noun", "meaning": "a part out of 100: 10% is ten out of 100" },
      { "type": "adjective", "meaning": "out of every 100, as in a 10% sale" },
      { "type": "adverb", "meaning": "by a part out of 100, as in 20% cheaper" }
    ],
    "quality": { "type": "noun", "meaning": "how good a thing is" },
    "quantity": { "type": "noun", "meaning": "how much or how many of something there is" },
    "rate": { "type": "noun", "meaning": "the price for one hour, one night or one unit" },
    "salary": { "type": "noun", "meaning": "the money that you get every month or year for your job" },
    "silver": [
      { "type": "noun", "meaning": "a gray metal that costs a lot" },
      { "type": "adjective", "meaning": "with the gray color of an expensive metal" }
    ],
    "zero": { "type": "number", "meaning": "the number 0" }
  }
});
