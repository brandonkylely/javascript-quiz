// set variables
var time = 0;
var gameRunning = false;

// set functions for query selection and create element
// function el(element) {
//     document.createElement(element);
// };
// function qs(element) {
//     document.querySelector(element);
// }

// create homepage
function home() {    
    var homepage = document.createElement("p")
    document.body.appendChild(homepage);
    homepage.textContent = "Welcome to the quiz!";

    var startQ = document.createElement("button");
    document.body.appendChild(startQ);
    startQ.textContent = "Start Quiz";

    startQ.addEventListener("click", question1)
}

// need to change content of homepage, not just add to it
function question1() {
    var ask1 = document.createElement("p")
    document.body.appendChild(ask1);
    ask1.textContent = "first question";
}


// use function to switch to next question
// use key value pairs to store answers and true/false-ness
// use setInterval to time
// use if time=0 to end game
// use gamerunning variable with boolean value
// use local storage to set leaderboard

home()