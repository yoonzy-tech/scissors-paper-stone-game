// Variables
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()} (you) covers ${computerChoice.toUpperCase()} (com). You win! 👍`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${userChoice.toUpperCase()} (you) covers ${computerChoice.toUpperCase()} (com). You lose... 👎`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${userChoice.toUpperCase()} (you) equals ${computerChoice.toUpperCase()} (com). It's a Draw! 🤝`;
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'), 300);
}

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + ' ' +computerChoice) {
        case 'rock paper':
        case 'paper scissors':
        case 'scissors rock':
            win(userChoice, computerChoice);
            break;

        case 'rock scissors':
        case 'paper rock':
        case 'scissors paper':
            lose(userChoice, computerChoice);
            break;
        
        case 'rock rock':
        case 'paper paper':
        case 'scissors scissors':
            draw(userChoice, computerChoice);
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('rock');
    })
    
    paper_div.addEventListener('click', function() {
        game('paper');
    })
    
    scissors_div.addEventListener('click', function() {
        game('scissors');
    })
}

main();