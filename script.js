//SEMI-FUNCTIONAL...COUNTS TIES AS LOSSES. SHOULD BE BEST OUT OF 5...

//Create a variable to store computerSelection.
let computerSelection; //This generated one random value without chaging to a new random.
//Create a variable to store userSelection.
//Get input from user to store in usersPlay via prompt.
let userSelection;
function userPlay() {
   return prompt("Choose your tool! Rock, Paper, or Scissors?").toLowerCase()
}
//Create variable for roundNumber [].
//    - initVal = 1

//Create variable to store number of rounds won.
let roundsWon = 0;
let roundsLost = 0;
let roundsTied = 0;
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
//Compare computersPlay to usersPlay.
//    - convert usersPlay toLowerCase.
//    - rock > scissors
//    - scissors > paper
//    - paper > rock
//    - If userWon ? true : false
function playRound(userSelection, computerSelection) {
    if (userSelection == computerSelection) {
        return roundsTied = roundsTied + 1;
    } else if (userSelection == 'rock' && computerSelection == 'scissors') {
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'rock' && computerSelection == 'paper') {
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'paper') {
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'rock') {
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'paper' && computerSelection == 'rock') {
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'paper' && computerSelection == 'scissors') {
        return roundsLost = roundsLost + 1;
    }
}

//Tell user usersPlay, computersPlay, and rounds won/lost/tied via alert.



function playGame() {
    for (i = 1; i <= 5; i++) {
        //If round n <= 5, move to next round and store round n outcome (userWon) to roundNumber variable.
        userSelection = userPlay();
        computerSelection = computerPlay();
        playRound(userSelection, computerSelection);
        console.log(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        /*if (roundNumber[i - 1] === true) {
            roundsWon = roundsWon + 1;
        }*/
    }
    //Else tell user the outcome of the game.
    //    - If user wins/loses 3 rounds, tell user rounds won, and you won/lost game via alert.
    if (roundsWon > roundsLost) {
        console.log(`Congratulations! You won!!!! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        alert(`Congratulations! You won!!! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
    } else if (roundsLost > roundsWon) {
        console.log(`Too bad. You lost! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        alert(`Too bad. You lost! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`)
    } else if (roundsWon == roundsLost) {
        console.log(`You tied! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        alert(`You tied! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
    }
}

playGame();



/*
playGame() calls playRound().  playRound() gets userPlay and calls computerPlay().
*/


//Create a variable to store computerSelection.
//let computerSelection = computerPlay(); //This generated one random value without chaging to a new random.
//Create a variable to store userSelection.
//Get input from user to store in usersPlay via prompt.
//let userSelection = userPlay();
//Create variable for roundNumber [].
//    - initVal = 1
//Generate a random play from computer to store in computerSelection.
//    - Math.floor(Math.random() * 3) to get random number.
//    - assign random number to rock, paper, scissors
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
//    -

/*
playGame() calls playRound() if rounds <= 5.  else it returns the winner.  playRound() calls userPlay() and computerPlay() and returns values to variables. 
userWon() compares outcomes and returns boolean.
*/