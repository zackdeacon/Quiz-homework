var startBtn = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var highscores = document.getElementById("highscores");
var startingContainer = document.getElementById("starting-page");
var quizContainer = document.getElementById("quiz-container");
var finalContainer = document.getElementById("final-container");
var questionTitle = document.getElementById("questiontitle")
var secondsLeft = 75;
var score = 0;
var currentQuestion = 0; 

startBtn.addEventListener("click", function() {
   quizTimer();
    startingContainer.setAttribute("class","container d-none");
    quizContainer.setAttribute("class","container");
})

function endGame() {
    if (secondsLeft <= 0) {
        startingContainer.setAttribute("class","container d-none");
        quizContainer.setAttribute("class","container d-none");
        finalContainer.setAttribute("class","container");
    } else {
        console.log("still playing!")
    }
}
//create start button that initiates quiz (and timer)
function handleAnswerClick(){
    console.log(this.textContent);
    console.log(questions[currentQuestion].answer);
    if(this.textContent===questions[currentQuestion].answer) {
        currentQuestion ++;
        generateQuestion();
    }  else {
            //timer interval needs to decrement by 5 for each wrong answer 
            secondsLeft -= 5; 
            endGame();
            generateQuestion();
    }
}
//create function to display quiz questions 
function generateQuestion() {
    var choicesArr = questions[currentQuestion].choices;
    questionTitle.textContent = questions[currentQuestion].title;
    console.log(questions[currentQuestion].title);
    for (var i = 0; i < choicesArr.length; i++) {
    console.log(choicesArr[i]);
    document.getElementById("btn-" + i).textContent = choicesArr[i]; 
    var currentBtn = document.getElementById("btn-" + i);
    currentBtn.addEventListener("click", handleAnswerClick)
    }
}

//create questions and answers for my quiz
var questions = [
    {
        title: "Which Ballon d'Or-winning footballer had a galaxy named after them in 2015?",
        choices: ["Cristiano Ronaldo", "Lionel Messi", "David Beckham","Zadan Zindane"], 
        answer: "Cristiano Ronaldo"
    },
    {
        title: "Messi wore the No.30 at the start of his Barca career and is now No.10. What other number has he worn for the club?",
        choices: ["3", "7", "19", "23"],
        answer: "19"
    },
    {
        title: "Which club has won the most Champions League titles?",
        choices: ["Barcelona", "Real Madrid", "Liverpool", "Manchester United"],
        answer: "Real Madrid"
    },
    {
        title: "With three titles each, which two teams have won the most European Championships?",
        choices: ["Germany and Spain", "Spain and Portugal", "France and Germany", "England and France"],
        answer: "Germany and Spain"
    },
    {
        title: "Which manager was famously said to have given players 'the Hairdryer Treatment'?",
        choices: ["Jose Mourinho", "Sir Alex Ferguson", "Pep Guardiola", "Jurgen Klopp"],
        answer: "Sir Alex Ferguson"
    },
];
//create a timer interval that counts down when start is clicked 
function quizTimer() {
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        alert("Thank you for playing, better luck next time")
      }
  
    }, 750);
  }
  generateQuestion();
    //timer interval needs to decrement by 5 for each wrong answer 
   // secondsLeft -= 5; 

//when timer hits zero or all questions have been answered the quiz is over 


//when the game is over prompted to enter initials 
    //initials are stored with highscore 
    //highscore can be accessed at any time during game 