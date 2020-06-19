var startBtn = document.getElementById("btn-start");
var timer = document.getElementById("timer");
var highscore = document.getElementById("highscores");
var startingContainer = document.getElementById("starting-page");
var quizContainer = document.getElementById("quiz-container");
var finalContainer = document.getElementById("final-container");
var questionTitle = document.getElementById("questiontitle");
var congrats = document.getElementById("right-or-wrong");
var rightCorner = document.getElementById("rightCorner");
var quizScore = document.getElementById("quizScore");
var initialBtn = document.getElementById("initial-submit");
var initials = document.getElementById("initials");
var highScoreContainer = document.getElementById("highscore-container");
var clearHighscoreBtn = document.getElementById("clear-highscore");
var goHomeBtn = document.getElementById("go-back");
var displayedScores = document.getElementById("displayedScores");

var secondsLeft = 75;
var score = 0;
var currentQuestion = 0; 


//create start button that initiates quiz (and timer)
startBtn.addEventListener("click", function() {
   quizTimer();
    startingContainer.setAttribute("class","container d-none");
    quizContainer.setAttribute("class","container");
})
//when timer hits zero or all questions have been answered the quiz is over 

function endGame() {
    if (secondsLeft === 0 || currentQuestion > 4) {
        quizContainer.setAttribute("class","container d-none");
        finalContainer.setAttribute("class","container");
        score = secondsLeft;
        quizScore.textContent = "Your final score is: " + score;
    } else {
        console.log(currentQuestion)
    }
}
//create function that handles question choice by user
function handleAnswerClick(){
    console.log(this.textContent);
    console.log(questions[currentQuestion].answer);
    if(this.textContent===questions[currentQuestion].answer) {
        currentQuestion ++;
        congrats.textContent = "congratulations! That is correct!!"
        endGame();
        generateQuestion();
    }  else {
            //timer interval needs to decrement by 5 for each wrong answer 
            secondsLeft -= 5; 
            congrats.textContent = "Whoops! Thats incorrect, -5 seconds. Try again!"
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
  
      if(secondsLeft === 0 || currentQuestion > 4) {
        clearInterval(timerInterval);
        timer.setAttribute("class","timer d-none");
        // alert("Thank you for playing, better luck next time")
      }
  
    }, 750);
  }
//create/unhide div containing highscores
  //highscore page needs to be updated with local storage
  //highscores! button needs click listener with same effect
  function highscorePage () {
    finalContainer.setAttribute("class","container d-none");
    highScoreContainer.setAttribute("class","container");
    init();
}

goHomeBtn.addEventListener("click", function(){
    highScoreContainer.setAttribute("class","container d-none");
    startingContainer.setAttribute("class","container");
    location.reload();
})

clearHighscoreBtn.addEventListener("click", function(){
    localStorage.clear();
    location.reload();
})

highscore.addEventListener("click", function(){
    startingContainer.setAttribute("class","container d-none");
    quizContainer.setAttribute("class","container d-none");
    finalContainer.setAttribute("class","container d-none");
    highScoreContainer.setAttribute("class","container");
})

//when the game is over prompted to enter initials 
    //initials are stored with highscore 
    //highscore can be accessed at any time during game 

  initialBtn.addEventListener("click", function(){
    var submitInitials = initials.value;

    if (initials.value === "") {
        alert("you need to enter your initials!");
    } else {
        var storedScores = JSON.parse(localStorage.getItem("highScores"));
        console.log(storedScores);
        storedScores[submitInitials] = score;
        localStorage.setItem("highScores", JSON.stringify(storedScores));
            
            highscorePage();
    }
  })

  function init() {
    var dataStored =JSON.parse(localStorage.getItem("highScores"));
    
    
    if(dataStored) {
        console.log(dataStored)
        for (const property in dataStored) {
            console.log(`${property}: ${dataStored[property]}`);
         
        var createLi= document.createElement("li");
        createLi.textContent = property + ": " + dataStored[property];
        displayedScores.appendChild(createLi);
        }
        }
    }

  generateQuestion();
  endGame();
//   init();
