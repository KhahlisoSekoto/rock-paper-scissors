const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const resultsDiv = document.querySelector("#results");
rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice ());
});

paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice ());
});

scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice ());
});

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomNumber = Math.random ();
    if ( randomNumber < 0.33) {
        return "rock";
    }else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        resultsDiv,textCONTENT = `It's a tie`;
    
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
) {
    humanScore++;
    resultsDiv.textContent = `You win! ${humanChoice} beats ${computerChoice},`;
    
} else {
    computerScore++;
    resultsDiv,textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    
}
}

