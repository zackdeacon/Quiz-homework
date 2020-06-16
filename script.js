var startBtn = document.querySelector(".btn-start");
var secondsLeft = 75;
var timer = document.querySelector(".timer");
var highscores = document.querySelector(".highscores");
var score = 0;



startBtn.addEventListener("click", function() {
   quizTimer();

})
//create start button that initiates quiz (and timer)

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
    // Create the countdown timer.
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft + " Untill the quiz is over!";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        
      }
  
    }, 750);
  }
  
    //timer interval needs to decrement by 5 for each wrong answer 
    
//when timer hits zero or all questions have been answered the quiz is over 

//when the game is over prompted to enter initials 
    //initials are stored with highscore 
    //highscore can be accessed at any time during game 