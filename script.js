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


function getHumanChoice () {
    let userInput =prompt("please enter rock, paper, or scissors:");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice){
        console.log("it's a tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
) {
    humanScore++;
    console.log (`you win! ${humanChoice} beats ${computerChoice}`);
} else {
    computerScore++;
    console. log (`You lose! ${computerChoice} beats ${humanChoice}`);
}
}

function playGame () {
    
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    playRound (getHumanChoice(), getComputerChoice());
    if (humanScore > computerScore) {
        console.log(`Game Over! You won the game! Final Score: ${humanScore} to ${computerScore}`);
        
        } else if (computerScore > humanScore){

    console.log(`Game Over! You lost the game! Final Score: ${humanScore} to ${computerScore}`);
} else {
    console.log(`Game Over! The overall game is a tie! Final Score: ${humanScore} to ${computerScore}`);
}
    
}
playGame();
