// set variables
var quiz = document.querySelector("#quiz");
// var time = 0;
// var gameRunning = false;
var right = 0;
var wrong = 0;
var page=-1;
var players {}
var questions = [
    {
        ask: "First Question", 
        answers: [
            {
             answer: "1",
             correct: false   
            },
            {
            answer: "2",
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
             answer: "1",
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

function checkAnswer(event) {
    if (event === true) {
        right++;
        question;
    } else {
        wrong ++;
        question;
    }
}

function homePage() {    
    quiz.innerHTML =`
    <p>
    "Welcome to the quiz!"
    <p>

    <button> Start Quiz </button>
    `

    document.querySelector("button")
    .addEventListener("click", question)
}

// need to change content of homepage, not just add to it
function question() {
    page++;
    if (!!questions[page]) {
        quiz.innerHTML =`
        <p>
            ${questions[page].ask}
        <p>

        <button data="${questions[page].answers[0].correct}">${questions[page].answers[0].answer}</button>
        <button data="${questions[page].answers[1].correct}">${questions[page].answers[1].answer}</button>
        <button data="${questions[page].answers[2].correct}">${questions[page].answers[2].answer}</button>
        `

        for (i=0; i < 3; i++) {
        var button = document.querySelectorAll("button");
        // button[i].addEventListener("click", checkAnswer(data));
        button[i].addEventListener("click", question);
        }

        console.log(right + " right " + wrong + " wrong.")
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
        var submit = document.querySelector("#submit")
        // preventDefault isnt working
        submit.preventDefault()

        // add score to var userScores

        // localStorage.setItem(initials, JSON.parse())
        // localStorage.setItem(score, JSON.parse())

        document.querySelector("#score").innerHTML = "You got " + right + " answers right and " + wrong + " answers wrong."
        submit.addEventListener("click", scoreboard)
}

function scoreboard() {
    quiz.innerHTML =`
        <p>
            Here are the scores!
        <p>

        <ul id=scores><ul>
        `
        localStorage.getItem(initials, JSON.stringify)
        localStorage.getItem(score, JSON.stringify)
}

// use function to switch to next question
// use key value pairs to store answers and true/false-ness
// use setInterval to time
// use if time=0 to end game
// use local storage to set leaderboard

homePage()