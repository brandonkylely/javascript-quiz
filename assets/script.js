// set variables
var quiz = document.querySelector("#quiz");
// var time = 0;
// var gameRunning = false;
var right = 0;
var wrong = 0;
var page=-1;
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
// set functions for query selection and create element
// function el(element) {
//     document.createElement(element);
// };
// function qs(element) {
//     document.querySelector(element);
// }

// create homepage
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
    quiz.innerHTML =`
    <p>
        ${questions[page].ask}
    <p>

    <button>${questions[page].answers[0].answer}</button>
    <button>${questions[page].answers[1].answer}</button>
    <button>${questions[page].answers[2].answer}</button>
    `
    for (i=0; i < 3; i++) {
    var button = document.querySelectorAll("button")
    button[i].addEventListener("click", question);
    }
}




// use function to switch to next question
// use key value pairs to store answers and true/false-ness
// use setInterval to time
// use if time=0 to end game
// use gamerunning variable with boolean value
// use local storage to set leaderboard

homePage()