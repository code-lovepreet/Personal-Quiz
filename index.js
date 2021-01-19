console.log("Welcome to my first CLI app \n")
score=0
var readlineSync = require("readline-sync")

var username = readlineSync.question("Your name is ")
console.log("\nWelcome "+ username + " Let's start the quiz\n")

function quiz(question, answer)
{
  var uanswer = readlineSync.question(question)
  if (uanswer == answer)
  {
    console.log("Your are right")
    score= score+1
    console.log(score + "\n")
  }
  else
  {
     console.log("You are wrong\n")
  }
}

//Objects ka array

var quizquestion =
[
  {
    question: "Where do i live ", 
    answer: "delhi"
  }, 
  {
    question: "What is my age ", 
    answer: "25"
  }
];

// console.log(quizquestion[1])

for (i=0; i<quizquestion.length; i++)

//  console.log(quizquestion[i])

{
  // var currentquestion = quizquestion[i]
  quiz(quizquestion[i].question, quizquestion[i].answer)
}
// console.log(quiz("where do i live ","delhi"))
// console.log(quiz("what is my age", "25"))

console.log("Your Final score is " + score +"\n")

var highscorer=["love 2", "sukhwinder 1"]
console.log("Highest scorer are ")
for (i=0; i<highscorer.length; i++)
{
  console.log(highscorer[i])
}

console.log("\nIf you score higher than them please take a screeshot and send it to me.")
 