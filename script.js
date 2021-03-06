
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
const playSelections = document.createElement('div');
const start = document.querySelector('#start');

//Keeps score and determines win or lose
const playGame = () => {
    if (roundsWon >= 5) {
        console.log(`Congratulations! You won!!!! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`);
        score.style.color = 'yellow';
        score.style.fontSize = '24px';
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
        score.style.color = 'red';
        score.style.fontSize = '24px';
        score.innerText = `Too bad. You lost! 
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`;
        return;
    } else {
        score.innerText = `First to Five wins...
        Rounds won: ${roundsWon} 
        Rounds lost: ${roundsLost} 
        Rounds tied: ${roundsTied}`;
        game.appendChild(score);
        score.style.textAlign = 'center';
    }
}
//Get input from user to store in userSelection
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
    computerSelection = computerPlay();
    game.appendChild(playSelections);
    if (userSelection == computerSelection) {
        playSelections.innerText = `Tied! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsTied = roundsTied + 1;
    } else if (userSelection == 'rock' && computerSelection == 'scissors') {
        playSelections.innerText = `Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'rock' && computerSelection == 'paper') {
        playSelections.innerText = `Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'paper') {
        playSelections.innerText = `Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'scissors' && computerSelection == 'rock') {
        playSelections.innerText = `Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsLost = roundsLost + 1;
    } else if (userSelection == 'paper' && computerSelection == 'rock') {
        playSelections.innerText = `Winner! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsWon = roundsWon + 1;
    } else if (userSelection == 'paper' && computerSelection == 'scissors') {
        playSelections.innerText = `Loser! You chose ${userSelection}. Computer chose ${computerSelection}.`;
        return roundsLost = roundsLost + 1;
    }
}

//Reset game
function newGame() {
    roundsWon = 0;
    roundsLost = 0;
    roundsTied = 0;
    playSelections.remove();
    score.style.color = 'rgb(225, 225, 225)';
    score.style.fontSize = '16px';
    playGame();
}


