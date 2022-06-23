
//Create variables to store computerSelection, userSelection, and rounds won.
let computerSelection; 
let userSelection;
let roundsWon = 0;
let roundsLost = 0;
let roundsTied = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {return 'rock'});
paper.addEventListener('click', () => {return 'paper'});
scissors.addEventListener('click', () => {return 'scissors'});

//Get input from user to store in usersPlay via prompt and convert toLowerCase.
function userPlay() {
   return prompt("Choose your tool! Rock, Paper, or Scissors?").toLowerCase()
}
//Generate a random play from computer.
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
//    - rock > scissors
//    - scissors > paper
//    - paper > rock
//    - return who won
function playRound(userSelection, computerSelection) {
    userSelection = userPlay();
    computerSelection = computerPlay();
    if (userSelection == computerSelection) {
        console.log(`Tied! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsTied = roundsTied + 1;
    } else if (userSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'rock' && computerSelection == 'paper') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        alert(`You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    }
}

//Tell user usersPlay, computersPlay, and rounds won/lost/tied via alert.


//If round n <= 5, move to next round and store round and display wins/losses.
function playGame() {
    for (i = 1; i <= 5; i++) {
        playRound();
        // alert(`
        // Rounds won: ${roundsWon} 
        // Rounds lost: ${roundsLost} 
        // Rounds tied: ${roundsTied}`);
    } 
//Else tell user the outcome of the game.
//    - If wins > losses, tell user rounds won/lost/tied, and who won/lost game.
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


//playRound();
//playGame();

