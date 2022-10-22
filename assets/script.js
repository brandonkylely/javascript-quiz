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
var userScores = {
    initials: "",
    score: "",
}
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
]

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
}

function startTimer() {
    var timerInterval = setInterval(function() {
      time--;
      timer.textContent = time
  
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
    <p>
    "Welcome to the quiz!"
    <p>

    <button> Start Quiz </button>
    `

    document.querySelector("button")
    .addEventListener("click", questionPage);

    document.querySelector("button")
    .addEventListener("click", gameStart)
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
                    console.log(right + " right " + wrong + " wrong.")
                    validation.textContent = "Correct"
                    questionPage;
                } else {
                    wrong++;
                    console.log(right + " right " + wrong + " wrong.")
                    validation.textContent = "Incorrect"
                    questionPage;
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
        <form> 
        Your Initials: <input type="text" name="initials"> 
        <br>
        <input id=submit type="submit">
        </form>
        `
        validation.textContent = "";
        gameRunning = false;

        var submit = document.querySelector("#submit");
        // preventDefault needed?

        // add score to var userScores
        // var initials = 
        // var score = right * 100

        // localStorage.setItem("score", JSON.parse());

        document.querySelector("#score").innerHTML = "You got " + right + " answers right and " + wrong + " answers wrong.";
        submit.addEventListener("click", scoreboard);
        // submit.addEventListener("click", function() {
        //         userScores.initials.push(submit.value);
        //         userScores.score.push(right.value);
        //         localStorage.setItem("userScores", JSON.parse(userScores));
        //         scoreboard();
        //     }
        // );
}

function scoreboard() {
    quiz.innerHTML =`
        <p>
            Here are the scores!
        <p>

        <ul id=scores><ul>
        `
        time = "";
        localStorage.setItem("userScores", JSON.stringify(userScores));
        
        // localStorage.getItem("name", JSON.stringify(players));
        // localStorage.getItem(score, JSON.stringify);
}
// use if time=0 to end game
// use local storage to set leaderboard

homePage()