document.addEventListener("DOMContentLoaded", function () {
    // Variables
    var quizIntro = document.getElementById("quiz-intro");
    var quizPlay = document.getElementById("quiz");
    var gameOver = document.getElementById("game-over");
    var startButton = document.getElementById("start-btn");
    var questions = document.getElementById("questions");
    var options = document.getElementById("options");
    var timer = document.getElementById("timer");
    var score = document.getElementById("score");
    var initials = document.getElementById("initials");
    var submitButton = document.getElementById("submit-btn");
    var highScores = document.getElementById("high-scores");
    //   Variables - Int
    var currentQuestionIndex = 0;
    var timeLeft = 60;
    var score = 0;
    var timerInterval;
  
    // Quiz Questions
    var questions = [
      "Which of the following is a proper example of a data type?",
      "What is a collection of data elements called?",
      "A For-Loop is used to run a piece of code more than once.",
      "What does API stand for?",
      "Select the correct git command to create a new empty file.",
    ];
  
    // Quiz Options
    var options = [
      ["Boolean", "String", "Integer", "All of the above"],
      ["A Collection", "An Array", "A Variable", "A For-Loop"],
      ["True", "False"],
      [
        "Artificial Programming Intelligence",
        "Apples Pineapples & Insects",
        "Application Programming Interface",
        "Application Pogging Interweb",
      ],
      ["cd", "mkdir", "touch", "ls"],
    ];
  
    // Correct Quiz Answers
    var answers = [
      "All of the above",
      "An Array",
      "True",
      "Application Programming Interface",
      "touch",
    ];
  });
  