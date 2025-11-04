// global display variables
const userDisplay = document.getElementById('userdisplay')
const computerDisplay = document.getElementById('computerdisplay')
const userScoreElement = document.getElementById('userscore');
const computerScoreElement = document.getElementById('computerscore');
const resetButton = document.getElementById('resetscore');

let userScore = 1;
let computerScore = 1;

//global button variables
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const choices = document.querySelectorAll('.choice');

const resultMessage = document.getElementById('resultdisplay');

//event listeners
choices.forEach(choice => choice.addEventListener("click", playGame));
resetButton.addEventListener('click', resetScore);

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
};

function determineWinner(userChoice, computerChoice){
    if (userChoice === computerChoice){
        return "It's a draw!";
    }
    if (userChoice === 'rock' && computerChoice === 'scissors' || 
        userChoice === 'scissors' && computerChoice === 'paper' || 
        userChoice === 'paper' && computerChoice === 'rock'){
            userScoreElement.value = userScore;
            userScore++;
            return 'You won this round!';
        } else {
            computerScoreElement.value = computerScore;
            computerScore++;
            return 'CPU wins this round.';
        }
};

function playGame(event){
    const userChoice = event.target.id;
    const computerChoice = getComputerChoice();
  
    const cpuEmojis = [rock.textContent, paper.textContent, scissors.textContent];
    let index = 0;

    computerDisplay.classList.add('shaking');
    const intervalId = setInterval(() => {
        computerDisplay.value = cpuEmojis[index];
        index = (index + 1) % cpuEmojis.length;
    }, 150);

    userDisplay.value = event.target.textContent;

    setTimeout(() => {
        clearInterval(intervalId);
        computerDisplay.classList.remove('shaking');

        if (computerChoice === 'rock'){
            computerDisplay.value = rock.textContent;
        } else if (computerChoice === 'paper'){
            computerDisplay.value = paper.textContent;
        } else if (computerChoice === 'scissors'){
            computerDisplay.value = scissors.textContent;
        }
        resultMessage.value = determineWinner(userChoice, computerChoice);
    }, 1000)
// append user and computer choice to display
    
}   

function resetScore(){
    userScore = 1;
    userScoreElement.value = 0;
    computerScore = 1;
    computerScoreElement.value = 0;
    resultMessage.value = '';
    userDisplay.value = '';
    computerDisplay.value = '';
}
