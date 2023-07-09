document.addEventListener("DOMContentLoaded", function () {
    // Variables
    var quizIntro = document.getElementById("quiz-intro");
    var quizPlay = document.getElementById("quiz");
    var gameOver = document.getElementById("game-over");
    var startButton = document.getElementById("start-btn");
    var questionElement = document.getElementById("questions");
    var optionsElement = document.getElementById("options");
    var timerElement = document.getElementById("timer");
    var scoreElement = document.getElementById("score");
    var initialsElement = document.getElementById("initials");
    var submitButton = document.getElementById("submit-btn");
    var highScoresElement = document.getElementById("high-scores");
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
  
    // Start Quiz
    function startQuiz() {
      quizIntro.style.display = "none";
      quizPlay.style.display = "block";
      startTimer();
      showQuestion();
    }
  
    // Timer Start
    function startTimer() {
      timerInterval = setInterval(function () {
        timeLeft--;
        timerElement.textContent = formatTime(timeLeft);
  
        if (timeLeft <= 0) {
          endQuiz();
        }
      }, 1000);
    }
  
    // Display Question & Options
function showQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
  var currentOptions = options[currentQuestionIndex];

  questionElement.textContent = currentQuestion;

  optionsElement.innerHTML = ''; // Clear previous options

  var optionsList = document.createElement('ul');
  optionsList.setAttribute('class', 'options-list');

  for (var i = 0; i < currentOptions.length; i++) {
    var optionItem = document.createElement('li');
    var optionButton = document.createElement('button');
    optionButton.setAttribute('class', 'option');
    optionButton.textContent = currentOptions[i];

    optionItem.appendChild(optionButton);
    optionsList.appendChild(optionItem);
  }

  optionsElement.appendChild(optionsList);
}
  
    // Answer Check
    function checkAnswer(event) {
      var selectedOption = event.target;
      var selectedAnswer = selectedOption.textContent;
  
      if (selectedAnswer === answers[currentQuestionIndex]) {
        score += 20;
      } else {
        timeLeft -= 10;
        if (timeLeft < 0) {
          timeLeft = 0;
        }
      }
  
      currentQuestionIndex++;
  
      if (currentQuestionIndex === questions.length) {
        endQuiz();
      } else {
        showQuestion();
      }
    }
  
    // Quiz End
    function endQuiz() {
      clearInterval(timerInterval);
      quizPlay.style.display = "none";
      gameOver.style.display = "block";
      scoreElement.textContent = "Score: " + score;
    }
  
    // High Score Submission
    function saveHighScore(event) {
      event.preventDefault();
  
      var initials = initialsElement.value.trim();
  
      if (initials !== "") {
        var highScores =
          JSON.parse(localStorage.getItem("highScores")) || [];
  
        var newScore = {
          initials: initials,
          score: score,
        };
  
        highScores.push(newScore);
  
        localStorage.setItem("highScores", JSON.stringify(highScores));
  
        displayHighScores();
      }
    }
  
    // High Score Board
    function displayHighScores() {
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
      
        highScoresElement.innerHTML = "";
      
        for (var i = 0; i < highScores.length; i++) {
          var scoreItem = document.createElement("li");
          scoreItem.textContent =
            highScores[i].initials + " - " + highScores[i].score;
          highScoresElement.appendChild(scoreItem);
        }
      }
  
    // Event listeners
    startButton.addEventListener("click", startQuiz);
    optionsElement.addEventListener("click", checkAnswer);
    submitButton.addEventListener("click", saveHighScore);
});
  