// let playerOutcome = document.getElementById("player-outcome");
// let computerOutcome = document.getElementById("computer-outcome");
// let outcome = document.getElementById("outcome");
// let choiceBtn = document.getElementsByClassName("choice-btn");
// let result = document.getElementById("result");
// let player;
// let computer;
// let resultOutcome;

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-type");
            alert(`You clicked ${playerChoice}`);

        });
    }
});

// function checkWinner(playerChoice) {
//     console.log("Gbasibe" + userChoice);
// }

// function runGame() {
// choiceBtn[0].addEventListener('click', function(){
//     checkWinner("choice-button[0]");
// })

// choiceBtn[1].addEventListener('click', function () {
//     checkWinner("choice-button[1]");
// })

// choiceBtn[2].addEventListener('click', function () {
//     checkWinner("choice-button[2]");
// })

// }



// function increamentPlayerScore() {

// }

// function increamentComputerScore() {

// }