// set variables
var time = 0;
var gameRunning = false;
var quiz = document.querySelector("#quiz");

// set functions for query selection and create element
// function el(element) {
//     document.createElement(element);
// };
// function qs(element) {
//     document.querySelector(element);
// }

// create homepage
function home() {    
    quiz.innerHTML =`
    <p>
    "Welcome to the quiz!"
    <p>

    <button> Start Quiz </button>
    `
    document.querySelector("button")
    .addEventListener("click", question1)
}

// need to change content of homepage, not just add to it
function question1() {
    quiz.innerHTML =`
    <p>
    "First Question"
    <p>

    <button id="answer1"> 1 </button>
    <button id="answer2"> 2 </button>
    <button id="answer3"> 3 </button>
    `

    document.querySelector("button")
    .addEventListener("click", question2)
}

function question2() {
    quiz.innerHTML =`
    <p>
    "Second Question"
    <p>

    <button id="answer1"> 1 </button>
    <button id="answer2"> 2 </button>
    <button id="answer3"> 3 </button>
    `
    document.querySelector("button")
    .addEventListener("click", question3)
}



// use function to switch to next question
// use key value pairs to store answers and true/false-ness
// use setInterval to time
// use if time=0 to end game
// use gamerunning variable with boolean value
// use local storage to set leaderboard

home()