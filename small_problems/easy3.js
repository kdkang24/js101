/* eslint-disable max-lines-per-function */
//Daily Double

function crunch(str) {
  let result = '';
  let currentChar;
  if (str === '') {
    return result;
  } else {
    currentChar = str[0];
    result += currentChar;
  }

  for (let index = 1; index < str.length; index++) {
    if (str[index] === currentChar) {
      continue;
    } else {
      currentChar = str[index];
      result += currentChar;
    }
  }
  return result;
}

//Test Cases
// console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
// console.log(crunch('4444abcabccba'));              // "4abcabcba"
// console.log(crunch('ggggggggggggggg'));            // "g"
// console.log(crunch('a'));                          // "a"
// console.log(crunch(''));                           // ""

//Bannerizer
function logInBox(str) {
  let lineLength = str.length + 4;
  console.log("+" + "-".padEnd(lineLength - 2, "-") + "+");
  console.log("|" + " ".padEnd(lineLength - 2, " ") + "|");
  console.log("| " + str + " |");
  console.log("|" + " ".padEnd(lineLength - 2, " ") + "|");
  console.log("+" + "-".padEnd(lineLength - 2, "-") + "+");
}

// Test Cases
// logInBox('To boldly go where no one has gone before.');
// logInBox('');

//Stringy String
function stringy(int) {
  let result = "";
  for (let counter = 1; counter <= int; counter++) {
    if (counter % 2 === 0) {
      result += "0";
    } else {
      result += "1";
    }
  }
  return result;
}

//Test Cases
// stringy(6);    // "101010"
// stringy(9);    // "101010101"
// stringy(4);    // "1010"
// stringy(7);    // "1010101"

//Fibonacci Number Location by Length
function findFibonacciIndexByLength(numberOfDigits) {
  let fibonacci = [1n, 1n];
  let index = 1n;
  while (fibonacci[BigInt(fibonacci.length) - 1n].toString().length < numberOfDigits) {
    fibonacci.push(fibonacci[index] + fibonacci[index - 1n]);
    //console.log(`Fibonacci sequence: ${fibonacci}`);
    index++;
    // console.log(`Index is ${index}`);
  }
  console.log(index + 1n);
  return index + 1n;
}

// findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
// findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
// findFibonacciIndexByLength(10n) === 45n;
// findFibonacciIndexByLength(16n) === 74n;
// findFibonacciIndexByLength(100n) === 476n;
// findFibonacciIndexByLength(1000n) === 4782n;
//findFibonacciIndexByLength(10000n) === 47847n;
// The last example may take a minute or so to run.

//Right Triangles
function triangle(number) {
  let elem = "*";
  for (let counter = 0; counter < number; counter++) {
    console.log(elem.repeat(counter + 1).padStart(number, " "));
  }
}

// triangle(5);
// triangle(9);

//Madlibs
function madlibs() {
  const readline = require('readline-sync');
  let noun = readline.question("Enter a noun: ");
  let verb = readline.question("Enter a verb: ");
  let adjective = readline.question("Enter an adjective: ");
  let adverb = readline.question("Enter an adverb: ");
  
  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adjective} ${noun} ${verb}s ${adverb} over the lazy ${noun}.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`);
}

// madlibs();

//Double Doubles

//Helper function
function isDoubleNumber(num) {
  let stringNum = num.toString();
  let length = stringNum.length;
  let firstHalf = stringNum.substring(0, length / 2);
  let secondHalf = stringNum.substring(length / 2, length);
  if (firstHalf === secondHalf) {
    return true;
  } else {
    return false;
  }
}

// Test Cases
// console.log(isDoubleNumber(37));
// console.log(isDoubleNumber(334433));
// console.log(isDoubleNumber(4444));
// console.log(isDoubleNumber(444));

function twice(num) {
  if (isDoubleNumber(num)) {
    return num;
  } else {
    return num * 2;
  }
}

// Test Cases
// twice(37);          // 74
// twice(44);          // 44
// twice(334433);      // 668866
// twice(444);         // 888
// twice(107);         // 214
// twice(103103);      // 103103
// twice(3333);        // 3333
// twice(7676);        // 7676

//Grade Book
function getGrade(first, second, third) {
  let avg = (first + second + third) / 3;
  switch (true) {
    case avg < 60: return "F";
    case avg < 70: return "D";
    case avg < 80: return "C";
    case avg < 90: return "B";
    default: return "A";
  }
}

// Test Cases
// console.log(getGrade(95, 90, 93));    // "A"
// console.log(getGrade(50, 50, 95));    // "D"

//Clean up the words
function cleanUp(sentence) {
  let result = "";
  let alphabet = "abcdefghijklmnoqrstuvwxyz";
  let alphaArray = alphabet.split("");
  for (let idx = 0; idx < sentence.length; idx++) {
    if (alphaArray.includes(sentence[idx])) {
      result += sentence[idx];
    } else if (result[result.length - 1] !== " ") {
      result += " ";
    }
  }
  return result;
}

//Test Cases
// console.log(cleanUp("---what's my +*& line?"));  // ' what s my line '

//What Century is That?

// 0th, 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th
function century(year) {
  let centuryCounter = 1;
  let result;

  while (year > centuryCounter * 100) {
    centuryCounter += 1;
  }
  result = centuryCounter.toString();
  switch (result[result.length - 1]) {
    case '0':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      result += "th";
      break;
    case '1':
      result += "st";
      break;
    case '2':
      result += "nd";
      break;
    case '3':
      result += 'rd';
      break;
    default:
      console.log(`Last digit of result was ${result[result.length - 1]}`);

  }
  console.log(result);
  return result;
}

//Test Cases
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

