console.log("Day 07");

/**
 * The Rock 🪨, Paper 🧻, or Scissors ✂️ Game
 * This game will be played between the computer and human. Once Human will select Rock, Paper, or Scissors and in the next turn the computer will select Rock, Paper, or Scissors.
 * The Winner will be selected based on these rules:
 * - Rock can Break Scissors => Rock Wins
 * - Paper can wrap Rock => paper Wins
 * - Scissors can cut Paper => Scissors Wins
 * Ask the input from user and randomly select a computer selection to continue the game.
 */

// Assumptions :
// 1. We have to prompt the user to get their inputs
// 2. The computer's selection will be random
// 3. We have to compare user and computer's choice
// 4. We need to announce the winner.
// 5. After the Winner announcement, we may want to ask the user to play again or quit the game.

function rockPaperScissorsGame() {
    console.log("Getting started with rockpaper scissors Game");
    const userChoicePrompt = prompt("Enter Rock, Paper or Scissors")
    
    // If user selects the cancel it would be null and it would fail
    let userChoice = userChoicePrompt.toLowerCase() 
    // let userChoice = userChoicePrompt ? userChoicePrompt.toLowerCase() : "Thank You"
    const randomNumber =  Math.floor(Math.random(1) * 3)   + 1

    switch (randomNumber) {
        case 1:
            computerChoice = "rock"
            break;
        case 2:
            computerChoice = "paper"
            break;
        case 3:
            computerChoice = "scissors"
    }

    console.log("User selected", userChoice)
    console.log("Computer selected", computerChoice)

    const Boolean1 = userChoice === "rock" && computerChoice === "scissors"
    const Boolean2 = userChoice === "paper" && computerChoice === "rock"
    const Boolean3 = userChoice === "scissors" && computerChoice === "paper"
    
    const userWins = Boolean1 || Boolean2 || Boolean3
    /*
    const rockBeatsScissors = userChoice === "rock" && computerChoice === "scissors";
    const paperBeatsRock = userChoice === "paper" && computerChoice === "rock";
    const scissorsBeatsPaper = userChoice === "scissors" && computerChoice === "paper";

    const userWins = rockBeatsScissors || paperBeatsRock || scissorsBeatsPaper;
    */

    /*
    const rockLosesToPaper = userChoice === "rock" && computerChoice === "paper";
    const paperLosesToScissors = userChoice === "paper" && computerChoice === "scissors";
    const scissorsLosesToRock = userChoice === "scissors" && computerChoice === "rock";

    const computerWins = rockLosesToPaper || paperLosesToScissors || scissorsLosesToRock;
    */
    const Boolean4 = userChoice === "rock" && computerChoice === "paper"
    const Boolean5 = userChoice === "paper" && computerChoice === "scissors"
    const Boolean6 = userChoice === "scissors" && computerChoice === "rock"
    
    const computerWins = Boolean4 || Boolean5 || Boolean6


    if (userWins) {
        console.log("You the User Win, yay!!!");
    } else if (userChoice === computerChoice) {
        console.log("The Game is a Tie")
    } else if (computerWins) {
        console.log("oh Ho... Computer Wins!!!!")
    } else {
        console.log("Pleae check the input we did not understand it");
    }

    const playAgainPrompt = prompt("Do you want to Play Again ? (yes/no)")
    const playAgain = playAgainPrompt ? playAgainPrompt.toLocaleLowerCase() : "no"

    if (playAgain == "Yes") {
        rockPaperScissorsGame() 
    } else {
        console.log("Thanks for playing! See you next time");
    }
}

rockPaperScissorsGame()


// In just we lines of code we can do this game.

/*

const rules = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
};

if (!rules[userChoice] || !rules[computerChoice]) {
  console.log("Please check the input, we didn't understand it.");
} else if (userChoice === computerChoice) {
  console.log("The Game is a Tie");
} else if (rules[userChoice] === computerChoice) {
  console.log("You the User WIN, yay!!!!");
} else {
  console.log("Oh Ho... Computer Wins!!!!");
}

*/