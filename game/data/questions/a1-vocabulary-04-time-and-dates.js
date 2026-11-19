/* Questions: A1 Vocabulary, theme 04 Time and Dates (16 quizzes: 4 types x 4 difficulties). One entry per quiz.
   Key: "level|category|topicIndex|type|difficulty" (e.g. "A1|vocabulary|0|mc|easy"). Value: an array of question
   objects; shapes in README.md "Question types". The correct answer is stored first (options[0], bank[0]); the
   game shuffles. A key that is missing gets lorem ipsum questions.
   The part between "Object.assign(GAME_DATA.questions, " and the closing ");" must stay valid JSON: it is read by
   .gitignore/tools/check_questions.ps1. The file name is level, category, topic number and topic name in lower case. */
Object.assign(GAME_DATA.questions, {
  "A1|vocabulary|4|mc|easy": [
    { "type": "mc", "prompt": "Ben looks at the ___ on the wall to see the time.", "options": ["clock", "chair", "banana", "river"], "explanation": "A clock shows you the time. Ben looks at the clock on the wall." },
    { "type": "mc", "prompt": "Anna has school in the morning and plays basketball in the ___.", "options": ["afternoon", "apple", "bed", "hat"], "explanation": "The afternoon is the time after the morning and before the evening. Anna plays basketball then." },
    { "type": "mc", "prompt": "___ is a sunny day. We play in the park.", "options": ["Today", "Window", "River", "Banana"], "targetType": "noun", "explanation": "Today is the day that is now. We play in the park today because it is sunny." },
    { "type": "mc", "prompt": "Anna was sick ___, but now she is fine.", "options": ["yesterday", "very", "really", "together"], "targetType": "adverb", "explanation": "Yesterday means on the day before today. Anna was sick then, but now she is fine." },
    { "type": "mc", "prompt": "Leo gets a big cake on his ___. He is eight now.", "options": ["birthday", "bus", "tree", "shoe"], "explanation": "Your birthday is the day each year when you were born. Leo is eight years old now." },
    { "type": "mc", "prompt": "We have no school on the ___. We play and relax.", "options": ["weekend", "kitchen", "shoe", "bread"], "explanation": "The weekend is the days at the end of the week. Many people do not go to school or work then." },
    { "type": "mc", "prompt": "There are sixty ___ in one hour.", "options": ["minutes", "windows", "doors", "beds"], "target": "minute", "explanation": "A minute is a short time. Sixty minutes make one hour." },
    { "type": "mc", "prompt": "The movie is one ___ long.", "options": ["hour", "apple", "chair", "river"], "explanation": "An hour is sixty minutes. The movie is sixty minutes long." }
  ],
  "A1|vocabulary|4|mc|medium": [
    { "type": "mc", "prompt": "Ali gets up at five o'clock. That is ___ for school.", "options": ["early", "big", "small", "yellow"], "targetType": "adjective", "explanation": "Early means before the time you need to be there. Five o'clock is early for most people." },
    { "type": "mc", "prompt": "Thursday is the day before ___.", "options": ["Friday", "Sunday", "Tuesday", "Monday"], "explanation": "Friday is the day after Thursday. So Thursday is the day before Friday." },
    { "type": "mc", "prompt": "The school week starts on ___. It is the first school day.", "options": ["Monday", "Friday", "Saturday", "Sunday"], "explanation": "Monday is the first school day of the week. Many students go back to school then." },
    { "type": "mc", "prompt": "After Tuesday and before Thursday comes ___.", "options": ["Wednesday", "Monday", "Friday", "Sunday"], "explanation": "Wednesday is the day between Tuesday and Thursday." },
    { "type": "mc", "prompt": "The class starts at nine, but Mia comes at ten. She is ___ for class.", "options": ["late", "happy", "small", "blue"], "targetType": "adjective", "explanation": "Late means after the time you need to be there. The class starts at nine, so Mia is late." },
    { "type": "mc", "prompt": "It is very hot. Anna eats ice cream every day in the ___.", "options": ["summer", "bread", "hotel", "bag"], "explanation": "Summer is the hot time of the year. Many people eat ice cream in the summer." },
    { "type": "mc", "prompt": "It is very cold, and we have snow. It is ___ now.", "options": ["winter", "bread", "window", "hat"], "explanation": "Winter is the cold time of the year. We often have snow in the winter." },
    { "type": "mc", "prompt": "After summer and before winter comes ___.", "options": ["fall", "window", "hotel", "hat"], "targetType": "noun", "explanation": "Fall is the time of the year between summer and winter." }
  ],
  "A1|vocabulary|4|mc|hard": [
    { "type": "mc", "prompt": "The last month of the year is ___.", "options": ["December", "November", "October", "January"], "explanation": "December is the last month of the year. Then a new year starts in January." },
    { "type": "mc", "prompt": "The month between April and June is ___.", "options": ["May", "March", "July", "August"], "explanation": "May comes after April and before June." },
    { "type": "mc", "prompt": "New Year's Day is on the first day of ___.", "options": ["January", "February", "March", "December"], "explanation": "January is the first month of the year, so New Year's Day is on January 1." },
    { "type": "mc", "prompt": "The third month of the year is ___.", "options": ["March", "April", "May", "June"], "explanation": "March is the third month. January is the first and February is the second." },
    { "type": "mc", "prompt": "There are twelve ___ in a year.", "options": ["months", "weeks", "days", "hours"], "target": "month", "explanation": "A month is one of the twelve parts of a year, like May or June." },
    { "type": "mc", "prompt": "The month after August is ___.", "options": ["September", "April", "June", "November"], "explanation": "September comes right after August." },
    { "type": "mc", "prompt": "December comes right after ___.", "options": ["November", "October", "September", "January"], "explanation": "November is the month before December." },
    { "type": "mc", "prompt": "September is the month before ___.", "options": ["October", "August", "June", "January"], "explanation": "October comes right after September. So September is the month before October." }
  ],
  "A1|vocabulary|4|mc|veryhard": [
    { "type": "mc", "prompt": "Anna wants to be a doctor in the ___.", "options": ["future", "period", "month", "birthday"], "explanation": "The future is the time that comes after now. Anna wants to be a doctor then." },
    { "type": "mc", "prompt": "The clock says 12:00 at night. It is ___.", "options": ["midnight", "afternoon", "hour", "month"], "explanation": "Midnight is 12 o'clock at night. A new day begins then." },
    { "type": "mc", "prompt": "Ben is busy now. He will call you ___.", "options": ["later", "very", "really", "together"], "explanation": "Later means after now. Ben is busy now, so he will call after some time." },
    { "type": "mc", "prompt": "The class will ___ at nine, so please sit down.", "options": ["begin", "drive", "wash", "carry"], "explanation": "To begin is to start. The class starts at nine, so please sit down." },
    { "type": "mc", "prompt": "Please wait a ___. I am coming.", "options": ["moment", "birthday", "weekend", "window"], "explanation": "A moment is a very short time. The person will come very soon." },
    { "type": "mc", "prompt": "A ___ of an hour is 15 minutes.", "options": ["quarter", "half", "minute", "day"], "explanation": "A quarter is one of four parts. Fifteen minutes is one of the four parts of an hour." },
    { "type": "mc", "prompt": "The time that is now is called the ___.", "options": ["present", "future", "period", "midnight"], "targetType": "noun", "explanation": "The present is the time that is now. The future is the time that comes later." },
    { "type": "mc", "prompt": "Tom stays at the hotel for a ___ of two weeks.", "options": ["period", "birthday", "weekend", "morning"], "explanation": "A period is a time that goes on for days, weeks or months. Tom stays at the hotel for two weeks." }
  ],
  "A1|vocabulary|4|fill|easy": [
    { "type": "fill", "before": "Today is Friday, and", "after": "is Saturday.", "answer": "tomorrow", "bank": ["tomorrow", "window", "bus"], "targetType": "noun", "explanation": "Tomorrow is the day after today. Saturday is the day after Friday." },
    { "type": "fill", "before": "Mia drinks coffee with her breakfast in the", "after": ".", "answer": "morning", "bank": ["morning", "tree", "river"], "explanation": "The morning is the first part of the day. Breakfast is the meal we eat then." },
    { "type": "fill", "before": "Anna is excited about", "after": ". There is a big party at her house.", "answer": "tonight", "bank": ["tonight", "shoe", "apple"], "targetType": "noun", "explanation": "Tonight is the evening or night of today. The party is at Anna's house this evening." },
    { "type": "fill", "before": "We go to the park with Mom on the", "after": ". We eat lunch there.", "answer": "weekend", "bank": ["weekend", "kitchen", "pen"], "explanation": "The weekend is the days at the end of the week. Many families go to the park then." },
    { "type": "fill", "before": "Ben has a big test", "after": ", so he is not happy.", "answer": "today", "bank": ["today", "very", "really"], "targetType": "adverb", "explanation": "Today means on this day. The test is on this day, so Ben is not happy." },
    { "type": "fill", "before": "We sleep at", "after": "and wake up in the morning.", "answer": "night", "bank": ["night", "bag", "cat"], "explanation": "Night is the dark time of the day. We sleep at night and wake up in the morning." },
    { "type": "fill", "before": "Dad says, \"Good", "after": ", Mia! Dinner is ready.\"", "answer": "evening", "bank": ["evening", "banana", "desk"], "explanation": "We say \"Good evening\" when we meet someone in the evening. Dinner is a meal we eat then." },
    { "type": "fill", "before": "Wait one", "after": ", please. I am coming.", "answer": "minute", "bank": ["minute", "bed", "pen"], "explanation": "A minute is a short time. We say \"Wait one minute\" when we need a little time." }
  ],
  "A1|vocabulary|4|fill|medium": [
    { "type": "fill", "before": "Wednesday comes right after", "after": ".", "answer": "Tuesday", "bank": ["Tuesday", "Friday", "Saturday"], "explanation": "Tuesday is the day before Wednesday. Tuesday comes first, and then Wednesday." },
    { "type": "fill", "before": "Between Wednesday and Friday comes", "after": ".", "answer": "Thursday", "bank": ["Thursday", "Monday", "Saturday"], "explanation": "Thursday comes after Wednesday and before Friday." },
    { "type": "fill", "before": "Winter is over, but summer is not here. It is", "after": ".", "answer": "spring", "bank": ["spring", "bread", "hat"], "explanation": "Spring is the time of the year after winter and before summer." },
    { "type": "fill", "before": "We swim at the beach in the", "after": "when it is hot.", "answer": "summer", "bank": ["summer", "bag", "window"], "explanation": "Summer is the hot time of the year. Many people swim at the beach then." },
    { "type": "fill", "before": "Right before Tuesday comes", "after": ".", "answer": "Monday", "bank": ["Monday", "Friday", "Saturday"], "explanation": "Monday is the day before Tuesday. Monday comes first, and then Tuesday." },
    { "type": "fill", "before": "Today is Saturday. What is tomorrow? It is", "after": ".", "answer": "Sunday", "bank": ["Sunday", "Tuesday", "Wednesday"], "explanation": "Tomorrow is the day after today. The day after Saturday is Sunday." },
    { "type": "fill", "before": "The day after Friday is", "after": ".", "answer": "Saturday", "bank": ["Saturday", "Monday", "Wednesday"], "explanation": "Saturday comes right after Friday. Friday comes first, and then Saturday." },
    { "type": "fill", "before": "After fall comes", "after": ", the coldest time of the year.", "answer": "winter", "bank": ["winter", "door", "bus"], "explanation": "Winter is the coldest time of the year. It comes after fall." }
  ],
  "A1|vocabulary|4|fill|hard": [
    { "type": "fill", "before": "The shortest month is", "after": ". It has only 28 days in most years.", "answer": "February", "bank": ["February", "March", "July", "November"], "explanation": "February is the shortest month. It has 28 days in most years." },
    { "type": "fill", "before": "Between March and May comes", "after": ".", "answer": "April", "bank": ["April", "June", "August", "October"], "explanation": "April comes after March and before May." },
    { "type": "fill", "before": "Right after July comes", "after": ".", "answer": "August", "bank": ["August", "October", "January", "December"], "explanation": "August is the month after July." },
    { "type": "fill", "before": "The month before October is", "after": ".", "answer": "September", "bank": ["September", "February", "April", "December"], "explanation": "September comes right before October." },
    { "type": "fill", "before": "After December, a new year starts in", "after": ".", "answer": "January", "bank": ["January", "March", "May", "September"], "explanation": "January is the first month of the year. After December, a new year starts in January." },
    { "type": "fill", "before": "Anna's birthday is on the day before August 1. Her birthday is in", "after": ".", "answer": "July", "bank": ["July", "February", "April", "October"], "explanation": "The day before August 1 is July 31. So Anna's birthday is in July." },
    { "type": "fill", "before": "Right before July comes", "after": ".", "answer": "June", "bank": ["June", "September", "November", "January"], "explanation": "June is the month before July." },
    { "type": "fill", "before": "Halloween is on October 31. The day after Halloween is in", "after": ".", "answer": "November", "bank": ["November", "September", "December", "January"], "explanation": "The day after October 31 is November 1. So the day after Halloween is in November." }
  ],
  "A1|vocabulary|4|fill|veryhard": [
    { "type": "fill", "before": "At the", "after": "of the movie, everyone is happy.", "answer": "end", "bank": ["end", "kitchen", "shirt", "month"], "targetType": "noun", "explanation": "The end is the last part of something. The last part of the movie is happy." },
    { "type": "fill", "before": "At the", "after": "of the class, the teacher says hello.", "answer": "beginning", "bank": ["beginning", "window", "mountain", "hotel"], "explanation": "The beginning is the first part of something. The teacher says hello at the first part of the class." },
    { "type": "fill", "before": "The cake has eight pieces. Four pieces are one", "after": "of the cake.", "answer": "half", "bank": ["half", "glass", "month", "hour"], "targetType": "noun", "explanation": "Half is one of two parts that look the same. Four pieces of eight are one half." },
    { "type": "fill", "before": "It is 4:15. Anna says, \"It is a", "after": "after four.\"", "answer": "quarter", "bank": ["quarter", "week", "birthday", "window"], "explanation": "A quarter of an hour is 15 minutes. In the US, we say \"a quarter after four\" for 4:15." },
    { "type": "fill", "before": "Anna says, \"Bye, Tom! See you", "after": "!\"", "answer": "later", "bank": ["later", "very", "really", "even"], "explanation": "We say \"See you later\" when we will meet again after some time." },
    { "type": "fill", "before": "There are 60", "after": "in one minute.", "answer": "seconds", "bank": ["seconds", "weeks", "days", "months"], "target": "second", "targetType": "noun", "explanation": "A second is a very short time. Sixty seconds make one minute." },
    { "type": "fill", "before": "The class starts at nine", "after": ".", "answer": "o'clock", "bank": ["o'clock", "very", "really", "together"], "explanation": "We say \"nine o'clock\" for 9:00, with no extra minutes." },
    { "type": "fill", "before": "In the", "after": ", Leo lives in a small house. In the future, he wants a big house.", "answer": "present", "bank": ["present", "hospital", "mountain", "month"], "targetType": "noun", "explanation": "The present is the time that is now. Leo lives in a small house now." }
  ],
  "A1|vocabulary|4|tf|easy": [
    { "type": "tf", "prompt": "It is dark at night.", "answer": true, "target": "night", "explanation": "Yes. Night is the dark time of the day, and many people sleep then." },
    { "type": "tf", "prompt": "Soon means a long time from now.", "answer": false, "target": "soon", "explanation": "No. Soon means after a short time. We say \"See you soon\" to a friend." },
    { "type": "tf", "prompt": "Tomorrow is the day after today.", "answer": true, "target": "tomorrow", "targetType": "noun", "explanation": "Yes. If today is Monday, tomorrow is Tuesday." },
    { "type": "tf", "prompt": "The evening comes before the afternoon.", "answer": false, "target": "evening", "explanation": "No. The afternoon comes first, and then the evening." },
    { "type": "tf", "prompt": "We say \"yesterday\" for the day after today.", "answer": false, "target": "yesterday", "targetType": "adverb", "explanation": "No. Yesterday is the day before today. The day after today is tomorrow." },
    { "type": "tf", "prompt": "Tonight is the evening or night of today.", "answer": true, "target": "tonight", "targetType": "noun", "explanation": "Yes. Tonight means this evening or this night." },
    { "type": "tf", "prompt": "The morning is the first part of the day.", "answer": true, "target": "morning", "explanation": "Yes. The morning comes first, and then the afternoon and the evening." },
    { "type": "tf", "prompt": "The weekend is Monday and Tuesday.", "answer": false, "target": "weekend", "explanation": "No. The weekend is at the end of the week, not on Monday and Tuesday." }
  ],
  "A1|vocabulary|4|tf|medium": [
    { "type": "tf", "prompt": "Sunday comes right after Saturday.", "answer": true, "target": "Sunday", "explanation": "Yes. Saturday comes first, and then Sunday." },
    { "type": "tf", "prompt": "Next week is the week after this week.", "answer": true, "target": "next", "targetType": "adjective", "explanation": "Yes. Next means coming after this one." },
    { "type": "tf", "prompt": "Tuesday comes before Monday.", "answer": false, "target": "Tuesday", "explanation": "No. Monday comes first, and then Tuesday." },
    { "type": "tf", "prompt": "Saturday is the day after Friday.", "answer": true, "target": "Saturday", "explanation": "Yes. Friday comes first, and then Saturday." },
    { "type": "tf", "prompt": "Wednesday is the first day of the school week.", "answer": false, "target": "Wednesday", "explanation": "No. The school week starts on Monday. Wednesday comes after Tuesday." },
    { "type": "tf", "prompt": "Spring is warmer than winter.", "answer": true, "target": "spring", "explanation": "Yes. Spring comes after the cold winter, and the weather gets warmer." },
    { "type": "tf", "prompt": "Thursday is the day before Wednesday.", "answer": false, "target": "Thursday", "explanation": "No. Thursday is the day after Wednesday. Tuesday is the day before Wednesday." },
    { "type": "tf", "prompt": "Summer is the coldest time of the year.", "answer": false, "target": "summer", "explanation": "No. Summer is the hot time of the year. Winter is the coldest time." }
  ],
  "A1|vocabulary|4|tf|hard": [
    { "type": "tf", "prompt": "July has 31 days.", "answer": true, "target": "July", "explanation": "Yes. July has 31 days, but June has only 30." },
    { "type": "tf", "prompt": "A date tells you the day and the month, like May 5.", "answer": true, "target": "date", "explanation": "Yes. A date is a day of the month, like May 5." },
    { "type": "tf", "prompt": "February is the longest month of the year.", "answer": false, "target": "February", "explanation": "No. February is the shortest month. It has only 28 days in most years." },
    { "type": "tf", "prompt": "June is the month after July.", "answer": false, "target": "June", "explanation": "No. June is the month before July. August is the month after July." },
    { "type": "tf", "prompt": "March comes after February.", "answer": true, "target": "March", "explanation": "Yes. February is the second month, and March is the third month." },
    { "type": "tf", "prompt": "August has 30 days.", "answer": false, "target": "August", "explanation": "No. August has 31 days, like July." },
    { "type": "tf", "prompt": "April Fools' Day is on April 1.", "answer": true, "target": "April", "explanation": "Yes. On April 1, people try to make their friends laugh." },
    { "type": "tf", "prompt": "September is the last month of the year.", "answer": false, "target": "September", "explanation": "No. December is the last month. September comes before October and November." }
  ],
  "A1|vocabulary|4|tf|veryhard": [
    { "type": "tf", "prompt": "A second is shorter than a minute.", "answer": true, "target": "second", "targetType": "noun", "explanation": "Yes. A second is a very short time, and 60 seconds make one minute." },
    { "type": "tf", "prompt": "To begin is to start.", "answer": true, "target": "begin", "explanation": "Yes. Begin and start mean the same." },
    { "type": "tf", "prompt": "A special day is the same as every other day.", "answer": false, "target": "special", "explanation": "No. A special day is different from other days in a good way, like a birthday." },
    { "type": "tf", "prompt": "We say \"five o'clock\" when it is 5:30.", "answer": false, "target": "o'clock", "explanation": "No. \"Five o'clock\" is 5:00. For 5:30 we say \"half past five\"." },
    { "type": "tf", "prompt": "The end of a movie is the last part.", "answer": true, "target": "end", "targetType": "noun", "explanation": "Yes. The end is the last part of something." },
    { "type": "tf", "prompt": "Half of ten is six.", "answer": false, "target": "half", "targetType": "noun", "explanation": "No. Half of ten is five. Half is one of two parts that look the same." },
    { "type": "tf", "prompt": "The beginning of a class is the first part.", "answer": true, "target": "beginning", "explanation": "Yes. The beginning is the first part of something." },
    { "type": "tf", "prompt": "A quarter of a cake is bigger than half of the cake.", "answer": false, "target": "quarter", "explanation": "No. A quarter is one of four parts, and half is one of two parts. So half is bigger." }
  ],
  "A1|vocabulary|4|match|easy": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "soon", "right": "not a long time from now, like in a few minutes or days" },
      { "left": "evening", "right": "the part of the day when many people eat dinner" },
      { "left": "clock", "right": "you look at it to know when to go to school" },
      { "left": "yesterday", "right": "if today is Friday, this day is Thursday", "type": "noun" }
    ], "explanation": "We say soon for a short time from now. The evening is when many people eat dinner, and a clock shows the time. If today is Friday, yesterday is Thursday." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "morning", "right": "the part of the day when you eat breakfast" },
      { "left": "tonight", "right": "later today, when it is dark", "type": "adverb" },
      { "left": "hour", "right": "a day has twenty-four of these" },
      { "left": "birthday", "right": "a day with a party, once a year, when you are one year older" }
    ], "explanation": "You eat breakfast in the morning. Tonight is later today, when it is dark. A day has twenty-four hours, and your birthday is once a year." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "afternoon", "right": "the part of the day after lunch and before dinner" },
      { "left": "night", "right": "the time between going to bed and getting up" },
      { "left": "tomorrow", "right": "if today is Monday, this day is Tuesday", "type": "noun" },
      { "left": "minute", "right": "a short time that you can wait for at a bus stop" }
    ], "explanation": "The afternoon is after lunch, and night is when you sleep. If today is Monday, tomorrow is Tuesday. You can wait a minute at a bus stop." }
  ],
  "A1|vocabulary|4|match|medium": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "winter", "right": "you wear a big coat and boots, and you can play in the snow" },
      { "left": "Thursday", "right": "the day before Friday" },
      { "left": "early", "right": "when you come before the time, for example at eight for a class at nine", "type": "adjective" },
      { "left": "Sunday", "right": "the day before Monday" }
    ], "explanation": "In winter you wear a big coat. Thursday is the day before Friday, and Sunday is the day before Monday. Early means before the time." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "spring", "right": "flowers grow and the weather gets warmer" },
      { "left": "Friday", "right": "the last school day of the week, before the weekend" },
      { "left": "late", "right": "when you come after the time, for example at ten for a class at nine", "type": "adjective" },
      { "left": "Tuesday", "right": "the day after the first school day of the week" }
    ], "explanation": "Flowers grow in spring. Friday is the last school day of the week, and Tuesday comes after the first school day. Late means after the time." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "fall", "right": "the weather gets colder again after summer", "type": "noun" },
      { "left": "Saturday", "right": "the day before Sunday" },
      { "left": "next", "right": "the one that comes right after this one, like the lesson after this lesson", "type": "adjective" },
      { "left": "Wednesday", "right": "the day between Tuesday and Thursday" }
    ], "explanation": "In the fall it gets colder after summer. Saturday is the day before Sunday, and Wednesday is between Tuesday and Thursday. Next means the one after this one." }
  ],
  "A1|vocabulary|4|match|hard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "November", "right": "it comes right before December" },
      { "left": "June", "right": "it comes between May and July" },
      { "left": "month", "right": "one of the twelve parts of a year, like January, March and May" },
      { "left": "February", "right": "it has 28 days in most years" }
    ], "explanation": "November is before December, and June is between May and July. A month is one of the twelve parts of a year. February has 28 days in most years." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "April", "right": "the month after March, with 30 days" },
      { "left": "August", "right": "the month right before September" },
      { "left": "December", "right": "New Year's Day comes one day after the last day of this month" },
      { "left": "date", "right": "the number and the month that tell you which day it is" }
    ], "explanation": "April comes after March, and August is right before September. New Year's Day comes after December. A date tells you which day it is." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "May", "right": "the month right after April" },
      { "left": "July", "right": "the month between June and August" },
      { "left": "October", "right": "the month with 31 days between September and November" },
      { "left": "March", "right": "the month right after February" }
    ], "explanation": "May is right after April. July is between June and August, and October is between September and November. March is right after February." }
  ],
  "A1|vocabulary|4|match|veryhard": [
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "present", "right": "now: not the time before and not the time that comes later", "type": "noun" },
      { "left": "o'clock", "right": "the word you say after nine when it is 9:00" },
      { "left": "special", "right": "a birthday is this kind of day because it is not like other days" },
      { "left": "begin", "right": "to do the first part of something, like a lesson at nine" }
    ], "explanation": "The present is now, and we say o'clock after a number for the hour. A special day is not like other days. To begin is to do the first part of something." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "beginning", "right": "the first part of a story or a movie" },
      { "left": "midnight", "right": "the time at night when most people sleep and a new day begins" },
      { "left": "half", "right": "30 minutes is this part of an hour", "type": "noun" },
      { "left": "moment", "right": "a time shorter than a minute" }
    ], "explanation": "The beginning is the first part of a story, and midnight is when a new day begins. Thirty minutes is half an hour. A moment is shorter than a minute." },
    { "type": "match", "prompt": "Match each word with its meaning.", "pairs": [
      { "left": "end", "right": "the last part of a book or a movie", "type": "noun" },
      { "left": "future", "right": "the time of next year and of the years after it" },
      { "left": "second", "right": "the smallest time you can read on most clocks", "type": "noun" },
      { "left": "period", "right": "the time you stay at a hotel, in days, weeks or months" }
    ], "explanation": "The end is the last part, and the future is next year and the years after it. A second is a very short time. A period is a time that goes on for days or weeks." }
  ]
});
