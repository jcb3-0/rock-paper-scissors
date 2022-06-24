
//Create variables to store computerSelection, userSelection, and rounds won.
let computerSelection; 
let userSelection;
let roundsWon = 0;
let roundsLost = 0;
let roundsTied = 0;
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const game = document.querySelector('#game');
const score = document.createElement('div');
const start = document.querySelector('#start');

//Keeps score and determines win or lose
const playGame = () => {
    if (roundsWon >= 5) {
        console.log(`Congratulations! You won!!!! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        score.innerText = `Congratulations! You won!!! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`;
        return;
    } else if (roundsLost >= 5) {
        console.log(`Too bad. You lost! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        score.innerText = `Too bad. You lost! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`
        return;
    } else {
        score.innerText = ` First to Five wins...
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`
        game.appendChild(score);
    }
}


//Get input from user to store in usersPlay
rock.addEventListener('click', () => playRound('rock', computerSelection));
rock.addEventListener('click', playGame);
paper.addEventListener('click', () => playRound('paper', computerSelection));
paper.addEventListener('click', playGame);
scissors.addEventListener('click', () => playRound('scissors', computerSelection));
scissors.addEventListener('click', playGame);

start.addEventListener('click', newGame);

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
    //userSelection = userPlay();
    computerSelection = computerPlay();
    if (userSelection == computerSelection) {
        console.log(`Tied! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsTied = roundsTied + 1;
    } else if (userSelection == 'rock' && computerSelection == 'scissors') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'rock' && computerSelection == 'paper') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'paper') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'rock') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'paper' && computerSelection == 'rock') {
        console.log(`Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'paper' && computerSelection == 'scissors') {
        console.log(`Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`);
        return roundsLost = roundsLost + 1;
    }
}


function newGame() {
    roundsWon = 0;
    roundsLost = 0;
    roundsTied = 0;
    playGame();

    
   
    
    

}


