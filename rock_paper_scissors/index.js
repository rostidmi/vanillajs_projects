const gameArr = ["Rock!", "Paper!", "Scissors!"];
const message = document.querySelector('#message');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let playerScore = document.querySelector('#player-score')
let computerScore = document.querySelector('#computer-score')

let score = [0, 0]


rock?.addEventListener('click', () => {
    let playerGuess = "Rock!";
    let output;
    let computer = Math.floor(Math.random() * 3)
    let computerGuess = (gameArr[computer])
    console.log(computerGuess)
    if (playerGuess === computerGuess) {
        output = "Tie! "

    }
    if (computerGuess == "Paper!") {

        output = "Computer Wins!"
        score[1]++
        computerScore.innerHTML = score[1]
    }
    else {
        output = "Player Wins!"
        score[0]++
        playerScore.innerHTML = score[0]
    }
    message.innerHTML = `${output} </br> Player toss: ${playerGuess} Computer toss: ${computerGuess}`
});
paper?.addEventListener('click', () => {
    let playerGuess = "Paper!";
    let output;
    let computer = Math.floor(Math.random() * 3)
    let computerGuess = (gameArr[computer])
    console.log(computerGuess)
    if (playerGuess === computerGuess) {
        output = "Tie! "

    }
    if (computerGuess == "Scissors!") {

        output = "Computer Wins!"
        score[1]++
        computerScore.innerHTML = score[1]
    }
    else {
        output = "Player Wins!"
        score[0]++
        playerScore.innerHTML = score[0]
    }
    message.innerHTML = `${output} </br> Player toss: ${playerGuess} Computer toss: ${computerGuess}`
});
scissors?.addEventListener('click', () => {
    let playerGuess = "Scissors!";
    let output;
    let computer = Math.floor(Math.random() * 3)
    let computerGuess = (gameArr[computer])
    console.log(computerGuess)
    if (playerGuess === computerGuess) {
        output = "Tie! "

    }
    if (computerGuess == "Rock!") {

        output = "Computer Wins!"
        score[1]++
        computerScore.innerHTML = score[1]
    }
    else {
        output = "Player Wins!"
        score[0]++
        playerScore.innerHTML = score[0]
    }
    message.innerHTML = `${output} </br> Player toss: ${playerGuess} Computer toss: ${computerGuess}`
});