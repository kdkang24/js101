/* eslint-disable max-lines-per-function */
/* eslint-disable max-statements */
//Twenty One

//readline-sync module for user input
const readline = require("readline-sync");
//Constant values to create new decks of cards
const CARD_KEYS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const CARD_VALUES = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
//Constants for player choice to hit or stay
const PLAYER_CHOICES = ['hit', 'stay', 'h', 's'];
const PLAYER_VICTORY = '*** CONGRATULATIONS! YOU WON! ***';
const DEALER_VICTORY = '*** Sorry, the dealer won. ***';

//FUNCTIONS

//Create new deck function - COMPLETE
function createFreshDeck() {
  let deck = [];
  CARD_SUITS.forEach(suit => {
    for (let index = 0; index < CARD_KEYS.length; index++) {
      let card = {};
      card[`${CARD_KEYS[index]} of ${suit}`] = CARD_VALUES[index];
      deck.push(card);
    }
  });
  return deck;
}

//Shuffle function - PROVIDED
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index--) {
    let otherIndex = Math.floor(Math.random() * (index + 1)); // 0 to index
    [array[index], array[otherIndex]] = [array[otherIndex], array[index]]; // swap elements
  }
}

//Calculate hand value function - COMPLETE
function calculateHandValue(cardArray) {
  let total = 0;
  let aces = 0;
  cardArray.forEach(card => {
    for (let key in card) {
      total += card[key];
      //Check for Aces
      if (Object.keys(card)[0].includes('Ace')) {
        aces += 1;
      }
    }
  });
  //Modify for Aces
  while (aces > 0) {
    if (total > 21) {
      total -= 10;
    }
    aces -= 1;
  }
  return total;
}

//Deal first two cards for player and dealer - COMPLETE
function dealInitialCards(deck) {
  let playerHand = [];
  let dealerHand = [];
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  playerHand.push(deck.shift());
  dealerHand.push(deck.shift());
  return [playerHand, dealerHand];
}

//Show cards and score for player, and first card for dealer - COMPLETE
function showPlayerAndDealerCards(playerHand, dealerHand) {
  //Dealer cards shown first
  console.log("The dealer's cards are:");
  console.log(`- ${Object.keys(dealerHand[0])[0]}`);
  console.log('- *** HIDDEN CARD ***');
  console.log(' '); 
  //Player cards shown at the bottom
  console.log('Your cards are:');
  playerHand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
  console.log(`==> The total of your cards is ${calculateHandValue(playerHand)}.\n`);
}

//Show all cards and scores at the end of the game
function showAllCards(playerHand, dealerHand) {
  //Dealer cards
  console.log("The dealer's cards are:");
  dealerHand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
  console.log(`==> The total of the dealer's cards is ${calculateHandValue(dealerHand)}.\n`);
  //Player cards
  console.log('Your cards are:');
  playerHand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
  console.log(`==> The total of your cards is ${calculateHandValue(playerHand)}.\n`);
}

//Allow player to draw extra cards or stay, returns total score (0 if bust) - COMPLETE
function playersTurn(playerHand, dealerHand, deck) {
  let decision = 'Would you like to hit or stay [h/s]? ';
  let playerAnswer = readline.question(decision);
  //Basic input validation
  while (!PLAYER_CHOICES.includes(playerAnswer.toLowerCase())) {
    console.log("That's not a valid choice.");
    playerAnswer = readline.question(decision);
  }
  while (playerAnswer[0] !== "s") {
    let newCard = deck.shift();
    console.log(`==> You drew the ${Object.keys(newCard)[0]}!`);
    playerHand.push(newCard);
    showPlayerAndDealerCards(playerHand, dealerHand);
    if (busted(playerHand)) {
      console.log(`==> You went over 21. Your total is ${calculateHandValue(playerHand)}. You've busted out!`);
      console.log(DEALER_VICTORY);
      return 0;
    }
    playerAnswer = readline.question(decision);
  }
  return calculateHandValue(playerHand);
}

//Dealer's turn function - COMPLETE
function dealersTurn(dealerHand, deck) {
  let total = calculateHandValue(dealerHand);
  console.log('===================================');
  console.log(`*****      DEALER'S TURN      *****`);
  console.log('===================================');
  while (total < 17) {
    let newCard = deck.shift();
    console.log(`==> The dealer drew the ${Object.keys(newCard)[0]}!`);
    dealerHand.push(newCard);
    total = calculateHandValue(dealerHand);
    console.log(`The dealer's total is now ${total}.\n`);
    if (busted(dealerHand)) {
      console.log(`==> The dealer went over 21. He's busted out!`);
      console.log(PLAYER_VICTORY);
      return 0;
    }
  }
  return total;
}

//Check to see if hand value exceeds 21 - COMPLETE
function busted(cardArray) {
  return (calculateHandValue(cardArray) > 21);
}

//Compare scores to decide winner if neither player nor dealer busts - COMPLETE
function decideWinner(playerScore, dealerScore) {
  console.log(`Your score is ${playerScore}. The dealer's score is ${dealerScore}.`);
  if (playerScore > dealerScore) {
    console.log(PLAYER_VICTORY);
  } else if (dealerScore > playerScore) {
    console.log(DEALER_VICTORY);
  } else {
    console.log("*** It's a tie! ***");
  }
}

//GAMEPLAY

//Shuffle deck
while (true) {
  console.clear();
  console.log('*** Welcome to the game of Twenty One! ***');
  console.log('==========================================\n');

  let newDeck = createFreshDeck();
  shuffle(newDeck);
  let [newPlayerHand, newDealerHand] = dealInitialCards(newDeck);

  showPlayerAndDealerCards(newPlayerHand, newDealerHand);
  let newPlayerScore = playersTurn(newPlayerHand, newDealerHand, newDeck);

  if (newPlayerScore > 0) {
    showAllCards(newPlayerHand, newDealerHand);
    let newDealerScore = dealersTurn(newDealerHand, newDeck);
    if (newDealerScore > 0) {
      showAllCards(newPlayerHand, newDealerHand);
      decideWinner(newPlayerScore, newDealerScore);
    }
  }

  //Loop to play again
  let playAgain = readline.question('Do you want to play again? [y/n] ').toLowerCase();
  while (!['y', 'yes', 'n', 'no'].includes(playAgain)) {
    prompt('Please enter "y" or "n".');
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] !== 'y') {
    console.log('Thank you for playing Twenty One!');
    break;
  }
}
