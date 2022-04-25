/* eslint-disable complexity */

const readline = require('readline-sync');
// Shortened inputs - rock (r), paper (p), scissors (s), lizard (l), spock (k)
const VALID_CHOICES = ['r', 'p', 's', 'l', 'k'];
const VALUES = { r : 'Rock', p : 'Paper', s : 'Scissors', l : 'Lizard', k : 'Spock'};

//Set win counters
let playerWinCount = 0;
let computerWinCount = 0;

function prompt(message) {
  console.log(`=> ${message}`);
}

//Logic for RPSLS
// eslint-disable-next-line complexity
function decideWinner(choice, computerChoice) {
  prompt(`You chose ${VALUES[choice]}, the computer chose ${VALUES[computerChoice]}.`);

  if ((choice === 'r' && (computerChoice === 's' || computerChoice === 'l')) ||
      (choice === 'p' && (computerChoice === 'r' || computerChoice === 'k')) ||
      (choice === 's' && (computerChoice === 'p' || computerChoice === 'l')) ||
      (choice === 'l' && (computerChoice === 'k' || computerChoice === 'p')) ||
      (choice === 'k' && (computerChoice === 's' || computerChoice === 'r'))) {
    return 'player';
  } else if (choice === computerChoice) {
    return 'tie';
  } else {
    return 'computer';
  }
}

//Displays result of decideWinner function and updates the score
function displayWinnerAndUpdateScore(result) {
  if (result === 'player') {
    prompt("You won this round!");
    playerWinCount++;
  } else if (result === 'computer') {
    prompt("The computer won this round!");
    computerWinCount++;
  } else {
    prompt("This round was a tie.");
  }
  prompt(`The current score is Player: ${playerWinCount}, Computer: ${computerWinCount}.`);
}

while (true) {
  prompt("Welcome to Rock, Paper, Scissors, Lizard, Spock! First to 3 wins!");

  while (true) {
    prompt(`Choose one: Rock (r), Paper (p), Scissors (s), Lizard (l), Spock (k)`);
    let choice = readline.question().toLowerCase();

    while (!VALID_CHOICES.includes(choice)) {
      prompt("That's not a valid choice.");
      choice = readline.question();
    }

    let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
    let computerChoice = VALID_CHOICES[randomIndex];

    displayWinnerAndUpdateScore(decideWinner(choice, computerChoice));
    //Break while loop once either side reaches 3 wins
    if (playerWinCount === 3) {
      console.clear();
      prompt("You are the grand winner!");
      break;
    } else if (computerWinCount === 3) {
      console.clear();
      prompt("The computer is the grand winner!");
      break;
    }
  }
  //Reset scores
  playerWinCount = 0;
  computerWinCount = 0;
  prompt('Do you want to play again? [y/n]');
  let answer = readline.question().toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(answer)) {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}

function decideWinner(playerScore, dealerScore) {
  return (playerScore > dealerScore) ? 'Player' : 'Dealer';
}

console.log(decideWinner(21, 10));