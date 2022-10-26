// set variables
var quiz = document.querySelector("#quiz");
var validation = document.querySelector("#validation");
var timer = document.querySelector("#timer");
var time = 1000;
// var endTime = 0;
var gameRunning = false;
var right = 0;
var wrong = 0;
var page=-1;
var userScores = [];
if (localStorage.getItem("userScores")) {
    userScores = JSON.parse(localStorage.getItem("userScores"));
}
var user = {};
var questions = [
    {
        ask: "First Question", 
        answers: [
            {
             answer: "1",
             correct: false   
            },
            {
            answer: "correct",
            correct: true   
            },
            {
            answer: "3",
            correct: false   
            },
        ]
    },
    {
        ask: "Second Question", 
        answers: [
            {
             answer: "correct",
             correct: true   
            },
            {
            answer: "2",
            correct: false   
            },
            {
            answer: "3",
            correct: false   
            },
        ]
    },
    {
        ask: "third Question", 
        answers: [
            {
             answer: "1",
             correct: false   
            },
            {
            answer: "2",
            correct: false   
            },
            {
            answer: "correct",
            correct: true  
            },
        ]
    },           
];

// function checkAnswer(event) {
//     if (event.currentTarget.dataset.correct === true) {
//         right++;
//         console.log(right + " right " + wrong + " wrong.")
//         questionPage;
//     } else {
//         wrong ++;
//         console.log(right + " right " + wrong + " wrong.")
//         questionPage;
//     }
// }

function gameStart() {
    gameRunning = true;
    startTimer();
    right = 0;
    wrong = 0;
}

function startTimer() {
    var timerInterval = setInterval(function() {
      time--;
      timer.textContent = time + " seconds left"
  
      if(time === 0) {
        clearInterval(timerInterval);
        gameOver();
      }

      if(!gameRunning) {
        // endTime = time;
        clearInterval(timerInterval);
        gameOver();
      }
  
    }, 1000);
  }

function homePage() {    
    quiz.innerHTML =`
    <p id="welcome">
    "Welcome to the quiz!"
    <p>
    <div class="home-buttons">
        <button id="start-quiz"> Start Quiz </button>
        <button id="scoreboard"> Scoreboard </button>
    </div>
    `

    document.querySelector("#start-quiz")
    .addEventListener("click", function () {
        questionPage();
        gameStart();
    }
    );

    document.querySelector("#scoreboard")
    .addEventListener("click", scoreboard);
}

// need to change content of homepage, not just add to it
function questionPage() {
    page++;
    if (!!questions[page]) {
        quiz.innerHTML =`
        <p>
            ${questions[page].ask}
        <p>
        <ul>
            <li><button data-correct="${questions[page].answers[0].correct}">${questions[page].answers[0].answer}</button></li>
            <li><button data-correct="${questions[page].answers[1].correct}">${questions[page].answers[1].answer}</button></li>
            <li><button data-correct="${questions[page].answers[2].correct}">${questions[page].answers[2].answer}</button></li>
        <ul>
        `
        // <button data="${questions[page].answers[0].correct}">${questions[page].answers[0].answer}</button>
        // <button data="${questions[page].answers[1].correct}">${questions[page].answers[1].answer}</button>
        // <button data="${questions[page].answers[2].correct}">${questions[page].answers[2].answer}</button>
        // console.log(questions[page].answers[1].correct)

        for (i=0; i < questions[page].answers.length; i++) {
            var button = document.querySelectorAll("button");
            button[i].addEventListener("click", function(event) {
                if (event.currentTarget.dataset.correct === "true") {
                    right++;
                    // console.log(right + " right " + wrong + " wrong.")
                    validation.textContent = "Correct!"
                } else {
                    wrong++;
                    time = time-15;
                    // console.log(right + " right " + wrong + " wrong.")
                    validation.textContent = "Incorrect!"
                }
            });
            button[i].addEventListener("click", questionPage);
        }
        // console.log(questions[page].answers.length)

        // var button = document.querySelectorAll("button");
        // var data = button[0].getAttribute("data");
        // button[0].addEventListener("click", function() { checkAnswer(data)});
        // button[0].addEventListener("click", question);
        // button[1].addEventListener("click", function() { checkAnswer(data)});
        // button[1].addEventListener("click", question);
        // button[2].addEventListener("click", function() { checkAnswer(data)});
        // button[2].addEventListener("click", question);

    } else {
        gameOver();
    }

}

function gameOver() {
    quiz.innerHTML =`
        <p>
            Game over, thanks for playing!
        <p>

        <p id=score><p>
        <form id="submit"> 
        Your Initials: <input id="initials" type="text" name="initials"> 
        <br>
        <input type="submit">
        </form>
        `
        // var user = [];
        // var userScores = [];
        // time = "";
        timer.textContent = "You got " + time + " points!";

        // validation.textContent = "";
        gameRunning = false;
        user.score = time;
        // userScores.push(user);

        // localStorage.setItem("userScores", JSON.stringify(userScores));

        // localStorage.setItem("score", JSON.parse());
        var submit = document.querySelector("#submit");
        var selector = document.querySelector("#initials")
        document.querySelector("#score").innerHTML = "You got " + right + " answers right and " + wrong + " answers wrong.";
        // submit.addEventListener("click", logScore);
        submit.addEventListener("submit", function() {
                user.initials = selector.value
                userScores.push(user);
                localStorage.setItem("userScores", JSON.stringify(userScores));
                scoreboard();
            });
        // submit.addEventListener("submit", scoreboard);
}

// function logScore() {
//     user.push(right);
//     user.push(submit.value);
//     userScores.concat(user);
//     localStorage.setItem("userScores", JSON.stringify(userScores));
// }

function scoreboard() {
    quiz.innerHTML =`
        <p>
            Here are the scores!
        <p>

        <ul id="scores"><ul>
        `
        var scoreList = document.querySelector("#scores");
        userScores = userScores.sort(function(a,b) { 
            return b.score-a.score
            // return b.initials.localeCompare(a.initials)
        })
        
        for (i=0; i < userScores.length; i++) {
            var list = document.createElement("li")
            // var list = document.querySelectorAll("li");
            list.textContent = userScores[i].initials + " - " + userScores[i].score + " points";
            scoreList.appendChild(list);
        };
        // localStorage.setItem("userScores", JSON.stringify(userScores));
        
        // localStorage.getItem("name", JSON.stringify(players));
        // localStorage.getItem(score, JSON.stringify);
}
// use if time=0 to end game
// use local storage to set leaderboard

homePage()