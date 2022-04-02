//How Old is Teddy?
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let TeddysAge = () => console.log(`Teddy is ${getRandomIntInclusive(20, 120)} years old!`);

// TeddysAge();

//Searching 101
function search() {
  const readline = require('readline-sync');
  let numbers = [];
  numbers.push(readline.question("Enter the 1st number: "));
  numbers.push(readline.question("Enter the 2nd number: "));
  numbers.push(readline.question("Enter the 3rd number: "));
  numbers.push(readline.question("Enter the 4th number: "));
  numbers.push(readline.question("Enter the 5th number: "));
  let lastNumber = readline.question("Enter the last number: ");
  if (numbers.includes(lastNumber)) {
    console.log(`The number ${lastNumber} appears in ${numbers.toString()}.`);
  } else {
    console.log(`The number ${lastNumber} does not appear in ${numbers.toString()}.`);
  }
}

// search();

//When Will I Retire?

function calculateRetirementYear() {
  const readline = require('readline-sync');
  const date = new Date();
  let currentYear = date.getFullYear();
  let currentAge = readline.question("What is your age? ");
  let retirementAge = readline.question("At what age would you like to retire? ");
  let difference = retirementAge - currentAge;

  console.log('');
  console.log(`It's ${currentYear}. You will retire in ${currentYear + difference}.`);
  console.log(`You have only ${difference} years of work to go!`);
}

// calculateRetirementYear();

//Palindromic Strings 1
// function isPalindrome(str) {
//   let arr = str.split('');
//   let midpoint = Math.floor(arr.length / 2);
//   let firstHalf = arr.slice(0, midpoint);
//   let secondHalf = arr.slice(midpoint, arr.length);
//   //If length of str is odd, then remove first char of second half array
//   if (firstHalf.length !== secondHalf.length) {
//     secondHalf.shift();
//   }
//   return (firstHalf.join('') === secondHalf.reverse().join(''));
// }

function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}

//Test Cases
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

//Palindromic Strings 2

function isRealPalindrome(string) {
  let filteredString = '';
  let alphanum = "abcdefghijklmnopqrstuvwxyz0123456789";
  for (let idx = 0; idx < string.length; idx++) {
    if (alphanum.includes(string[idx].toLowerCase())) {
      filteredString += string[idx].toLowerCase();
    }
  }
  return isPalindrome(filteredString);
}

function isRealPalindrome2(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  return isPalindrome(string);
}

//Test Cases
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//Palindromic Numbers
function isPalindromicNumber(number) {
  return isPalindrome(number.toString());
}

//Running Totals
function runningTotal(arr) {
  let result = [];
  let index = 0;
  let total = 0;
  if (arr.length === 0) {
    return result;
  }
  do {
    result.push(arr[index] + total);
    total += arr[index];
    index++;
  } while (index < arr.length);
  return result;
}

//Test Cases
// runningTotal([2, 5, 13]);             // [2, 7, 20]
// runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
// runningTotal([3]);                    // [3]
// runningTotal([]);                     // []

//Letter Counter Part 1
function wordSizes(sentence) {
  let result = {};
  let wordArray = sentence.split(' ');

  for (let index = 0; index < wordArray.length; index++) {
    let wordLength = wordArray[index].length;
    if (wordLength === 0) {
      continue;
    }

    if (!result[wordLength]) {
      result[wordLength] = 0;
    }
    result[wordLength] += 1;
  }
  return result;
}

// wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
// wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
// wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
// console.log(wordSizes(''));

//Letter Counter Part 2
function wordSizes2(sentence) {
  let filteredSentence = sentence.replace(/[^a-z\s]/gi, '');
  return wordSizes(filteredSentence);
}

// console.log(wordSizes2('Hey diddle diddle, the cat and the fiddle!'));
// console.log(wordSizes2("What's up doc?"));

//Letter Swap
function swap(sentence) {
  let wordArray = sentence.split(' ');
  let result = [];
  wordArray.forEach(word => {
    let swappedWord = "";
    if (word.length === 1) {
      swappedWord = word;
    } else {
      swappedWord = word[word.length - 1] + word.substring(1, word.length - 1) + word[0];
    }
    result.push(swappedWord);
  });
  console.log(result.join(' '));
  return result.join(' ');
}

//Test Cases
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
