"use strict"


//Create a variable to store computerSelection.
//let computerSelection = computerPlay(); This generated one random value without chaging to a new random.
//Create a variable to store userSelection.
let userPlay = prompt("Choose your tool! Rock, Paper, or Scissors?").toLowerCase();
//let userSelection = userPlay; This w
//Create variable for roundNumber [].
//    - initVal = 1
let roundNumber = [];
//Generate a random play from computer to store in computerSelection.
//    - Math.floor(Math.random() * 3) to get random number.
//    - assign random number to rock, paper, scissors
function computerPlay() {
    let n = Math.floor(Math.random() * 3);
        switch (n) {
            case 0:
            return "rock";
            break;
            case 1:
            return "paper";
            break;
            case 2:
            return "scissors";
            break;
        }
}
//Get input from user to store in usersPlay via prompt.

//Compare computersPlay to usersPlay.
//    - convert usersPlay toLowerCase.
//    - rock > scissors
//    - scissors > paper
//    - paper > rock
//    - If userWon ? true : false
//Store round n outcome (userWon) to roundNumber variable.
//Tell user usersPlay, computersPlay, and rounds won/lost/tied via alert.
//If round n <= 5, move to next round.
//Else tell user the outcome of the game.
//    - If user wins/loses 3 rounds, tell user rounds won, and you won/lost game via alert.
