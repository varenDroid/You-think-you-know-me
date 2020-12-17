let readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name:"Shivin",
    score:4
  },
  {
    name:"Amber",
    score: 5
  }
]

// questions
let questionBank = [
  {
    question: "Where do I live? ",
    answer: "Delhi"
  },
  {
    question: "My favourite superhero would be ? ",
    answer: "batman"
  },
  {
    question:"My favourite dish? ",
    answer: "poha"
  },
  {
    question:"Where do I work ?",
    answer: "Principal"
  }

]

// Welcome function
function welcome() {
  let userName = readlineSync.question("Whats your name? ");
  let welcomeMessage = "Welcome " + userName + " to You think you know Varen!"
  console.log(welcomeMessage);
}

// ask the question
function askTheQuestion(question, answer) {
  let userAnswer = readlineSync.question(question);
  if (userAnswer.toLocaleUpperCase() === answer.toLocaleUpperCase()) {
    console.log("You are correct!");
    score = score + 1;
  }
  else {
    console.log("Sorry! Wrong answer");
  }
  console.log("Your score is: " + score);
  console.log("-------");
}

// roll out the question

function game(){
  for(let i =0 ;i < questionBank.length ; i++){
    let currentQuestion = questionBank[i];
    askTheQuestion(currentQuestion.question , currentQuestion.answer);
  }
}

function displayScore(){
  console.log("Yay! you finished the game and you scored "+score);
  console.log("Check out the high scores!");
  highScores.map(record => (console.log(record.name + " : " + record.score)));
}

welcome();
game();
displayScore();