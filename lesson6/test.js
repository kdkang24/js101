/* eslint-disable max-len */
//joinOr

function joinOr(numArray, delimiter = ', ', joiner = 'or' ) {
  let answer = '';
  if (numArray.length > 2) {
    for (let index = 0; index < numArray.length - 1; index++) {
      answer += numArray[index] + delimiter;
    }
    answer += `${joiner} ${numArray[numArray.length - 1]}`;
  } else {
    answer = numArray.join(` ${joiner} `);
  }
  console.log(answer);
  return answer;
}

//Test Cases
// joinOr([1, 2, 3]);               // => "1, 2, or 3"
// joinOr([1, 2, 3], '; ');         // => "1; 2; or 3"
// joinOr([1, 2, 3], ', ', 'and');  // => "1, 2, and 3"
// joinOr([]);                      // => ""
// joinOr([5]);                     // => "5"
// joinOr([1, 2]);                  // => "1 or 2"

function joinOrLaunchSchool(arr, delimiter = ', ', word = 'or') {
  switch (arr.length) {
    case 0:
      return '';
    case 1:
      return `${arr[0]}`;
    case 2:
      return arr.join(` ${word} `);
    default:
      return arr.slice(0, arr.length - 1).join(delimiter) +
             `${delimiter}${word} ${arr[arr.length - 1]}`;
  }
}

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

// console.log(calculateHandValue([ { 'Jack of Spades': 10 }, { 'Ace of Hearts': 11 }, { 'Ace of Spades': 11 }, { 'Ace of Clubs': 11 }, { 'Ace of Diamonds': 11 } ]));
let cards = [ { 'Jack of Spades': 10 }, { 'Ace of Hearts': 11 } ];
console.log(Object.keys(cards[0]));