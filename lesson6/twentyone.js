//Twenty One

//readline-sync module for user input
const readline = require("readline-sync");
//Constant values to create new decks of cards
const CARD_KEYS = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"];
const CARD_VALUES = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10];
const CARD_SUITS = ["Clubs", "Diamonds", "Hearts", "Spades"];
//Constants for player choice to hit or stay
const PLAYER_CHOICES = ['hit', 'stay', 'h', 's'];

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
function logPlayerAndDealerCards(playerHand, dealerHand) {
  console.log('Your cards are:');
  playerHand.forEach(card => console.log(`- ${Object.keys(card)[0]}`));
  console.log(`==> The total of your cards is ${calculateHandValue(playerHand)}.`);
  console.log("\nThe dealer's cards are:");
  console.log(`- ${Object.keys(dealerHand[0])[0]}`);
  console.log('- *HIDDEN CARD*');
}

//Allow player to draw extra cards or stay, returns total score
function playersTurn(playerHand, deck) {
  let decision = 'Would you like to hit or stay [h/s]? ';
  let playerAnswer = readline.question(decision);
  //Basic input validation
  while (!PLAYER_CHOICES.includes(playerAnswer.toLowerCase())) {
    console.log("That's not a valid choice.");
    playerAnswer = readline.question(decision);
  }
  while (playerAnswer[0] !== "s") {
    let newCard = deck.shift();
    console.log(`You drew the ${Object.keys(newCard)[0]}!`);
    playerHand.push(newCard);
    if (busted(playerHand)) {
      console.log(`Your total has exceeded 21. You've busted out!`);
      return 0;
    }
    playerAnswer = readline.question(decision);
  }
  return calculateHandValue(playerHand);
}

function dealersTurn(dealerHand, deck) {

}

function busted(cardArray) {
  return (calculateHandValue(cardArray) > 21);
}

//GAMEPLAY

//Shuffle deck
let newDeck = createFreshDeck();
shuffle(newDeck);
let [newPlayerHand, newDealerHand] = dealInitialCards(newDeck);

logPlayerAndDealerCards(newPlayerHand, newDealerHand);
let playerScore = playersTurn(newPlayerHand, newDeck);


