"use strict"

/*
Create a variable to store computersPlay.
Create a variable to store usersPlay.
Create variable for roundNumber [].
    - initVal = 1
Generate a random play from computer to store in computersPlay.
    - Math.floor(Math.random() * 3) to get random number.
    - assign random number to rock, paper, scissors
Get input from user to store in usersPlay via prompt.
Compare computersPlay to usersPlay.
    - convert usersPlay toLowerCase.
    - rock > scissors
    - scissors > paper
    - paper > rock
    - If userWon ? true : false
Store round n outcome (userWon) to roundNumber variable.
Tell user usersPlay, computersPlay, and rounds won/lost/tied via alert.
If round n <= 5, move to next round.
Else tell user the outcome of the game.
    - If user wins/loses 3 rounds, tell user rounds won, and you won/lost game via alert.
*/