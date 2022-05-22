//Easy 2 - End is Near but not Here
function penultimate(words) {
  let wordArray = words.split(" ");
  return wordArray[wordArray.length - 2];
}

//Easy 2 - Exclusive Or
function xor(arg1, arg2) {
  if ((arg1 || arg2 ) || (arg1 && arg2 === false)) {
    return true;
  } else {
    return false;
  }
}

//Test cases
// console.log(xor(5, 0) === true);
// console.log(xor(false, true) === true);
// console.log(xor(1, 1) === false);
// console.log(xor(true, true) === false);

//Easy 2 - Odd Lists
function oddities(arr) {
  let oddIndexesOnly = [];
  for (let counter = 0; counter < arr.length; counter += 2) {
    oddIndexesOnly.push(arr[counter]);
  }
  return oddIndexesOnly;
}

function odditiesFilter(arr) {
  let oddIndexes = arr.filter((elem, idx) => idx % 2 === 0);
  return oddIndexes;
}
//Test cases
// console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
// console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
// console.log(oddities(["abc", "def"])); // logs ['abc']
// console.log(oddities([123])); // logs [123]
// console.log(oddities([])); // logs []

//Easy 2 - Convert String to Number
function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

//Easy 2 - Convert String to a Signed Number
// eslint-disable-next-line max-lines-per-function
function stringToSignedInteger(string) {
  const DIGITS = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "-": "-",
    "+": "+"
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  if (arrayOfDigits[0] === "-") {
    for (let index = 1; index < arrayOfDigits.length; index++) {
      value = (10 * value) + arrayOfDigits[index];
      return value * -1;
    }
  } else if (arrayOfDigits[0] === "+") {
    for (let index = 1; index < arrayOfDigits.length; index++) {
      value = (10 * value) + arrayOfDigits[index];
      return value;
    }
  } else {
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  }
}

//Test Cases
// console.log(stringToSignedInteger("4321") === 4321); // logs true
// console.log(stringToSignedInteger("-570") === -570); // logs true
// console.log(stringToSignedInteger("+100") === 100); // logs true

//Convert a Number to a String
//Input - positive integer
//Output - string representation of that integer
//Explicit reqs
  //Cannot use String(), toString(), or an expression like '' + number
//Implicit reqs
//Questions
  //What to return if the input is empty or negative?
  //What to return if input is not a number?

//Algo


//Code
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

//Test Cases
integerToString(4321);        // "4321"
integerToString(0);           // "0"
integerToString(5000);        // "5000"
integerToString(1234567890);  // "1234567890"