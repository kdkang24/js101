/* eslint-disable max-lines-per-function */
//PROBLEM 1

// Given an array of numbers, for each number, find out how
// many numbers in the array are smaller than it. When
// counting numbers, only count unique values. That is, if a
// given number occurs multiple times in the array, it
// should only be counted once.

//Notes
//Input - array of numbers
//Output - array of numbers

//Algo
//Iterate through each number in the input array
//Initialize a counter
//For each number, compare it to every other number in the array
//If the target number is greater than the compared number, increment the counter by 1
//If the number has already been seen, skip over it
//Add counter to a result array

//Code
function smallerNumbersThanCurrent(numArray) {
  let result = [];
  numArray.forEach(num => {
    let smallerNumbers = [];
    for (let idx = 0; idx < numArray.length; idx++) {
      if (num > numArray[idx]) {
        smallerNumbers.push(numArray[idx]);
      }
    }
    smallerNumbers = new Set(smallerNumbers);
    result.push(smallerNumbers.size);
  });

  return result;
}

// Examples:

// console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [3, 0, 1, 1, 2]
// console.log(smallerNumbersThanCurrent(
//   [1, 4, 6, 8, 13, 2, 4, 5, 4])); // [0, 2, 4, 5, 6, 1, 2, 3, 2]
// console.log(smallerNumbersThanCurrent([7, 7, 7, 7])); // [0,0,0,0]
// console.log(smallerNumbersThanCurrent([6, 5, 4, 8])); // [2, 1, 0, 3]
// console.log(smallerNumbersThanCurrent([1])); // [0]




// PROBLEM 2
// Write a function that takes one argument, an array of
// integers. The function should return minimum sum of 5
// consecutive numbers in the array. If the array contains
// less than 5 elements, the function should return null.

//Input - array of integers
//Output - lowest sum of 5 consecutive integers in array / If array is less then 5 elements, return null

//Algo
//Check if array has at least five elements, if not, return null
//Get the sum of the first five values in the array
//Set as the lowest sum
//Get the sum of the next five values
//Compare with the lowest sum, replace if needed
//Iterate through all available 5 consecutive value chunks

//Code
function minimumSum(intArray) {
  //Guard clause for arrays with less than 5 elements
  if (intArray.length < 5) {
    return null;
  }

  let lowest = intArray.slice(0, 5).reduce((a, b) => a + b, 0);
  for (let i = 0; i < intArray.length - 4; i++) {
    let sum = intArray.slice(i, i + 5).reduce((a, b) => a + b, 0);
    if (sum < lowest) {
      lowest = sum;
    }
  }
  return lowest;
}

// Examples:

// console.log(minimumSum([1, 2, 3, 4]) === null);
// console.log(minimumSum([1, 2, 3, 4, 5, -5]) === 9);
// console.log(minimumSum([1, 2, 3, 4, 5, 6]) === 15);
// console.log(minimumSum([55, 2, 6, 5, 1, 2, 9, 3, 5, 100]) === 16);
// console.log(minimumSum([-1, -5, -3, 0, -1, 2, -4]) === -10);

// The tests above should each log "true".


//PROBLEM 3

// Write a function named toWeirdCase that accepts a string,
// and returns the same sequence of characters with every
// 4th character in every second word converted to
// uppercase. Other characters should remain the same.

//Input - text string
//Output - modified string (every 4th character in every second word is uppercased)

//Algo
//Split the text into an array of words
//Initialize a new empty string
//Iterate through the word array
//Every second word should have additional logic applied
  //Every fourth char is uppercased
//Add each word back to the new empty string
//Code
function toWeirdCase(text) {
  let words = text.split(' ');
  let result = [];
  words.forEach((word, index) => {
    if (index % 2 === 0) {
      result.push(word);
    } else {
      let weird = '';
      let counter = 1;
      for (let i = 0; i < word.length; i++) {
        if (counter % 4 === 0) {
          weird += word[i].toUpperCase();
          counter++;
        } else {
          weird += word[i];
          counter++;
        }
      }
      result.push(weird);
    }
  });
  return result.join(' ');
}
// Examples:

// console.log(
//   toWeirdCase('Lorem Ipsum is simply dummy text of the printing world') ===
//               'Lorem IpsUm is simPly dummy texT of the printing worLd');
// console.log(
//   toWeirdCase('It is a long established fact that a reader will be distracted') ===
//               'It is a lonG established facT that a reader wilL be disTracTed');
// console.log(toWeirdCase('aaA bB c') === 'aaA bB c');
// console.log(
//   toWeirdCase('Miss Mary Poppins word is supercalifragilisticexpialidocious') ===
//               'Miss MarY Poppins worD is supErcaLifrAgilIstiCexpIaliDociOus');

// The tests above should print "true".

//PROBLEM 4
// Write a function that takes an array of integers and
// returns the two numbers that are closest together in
// value.

//Input - an array of integers
//Output - an array of two integers
//Explicit requirements
  //Take an array of integers and return an array of the 2
  //integers that are closest in value
//Questions
  //What if input is something other than an array?
  //What if input array has less than 2 values?

//Data structure
//Array

//Algo
//Set new var `first` to `intArray[0]`
//Set new var `second` to `intArray[1]`
//Set new var `smallestDiff` to absolute value of `first` -  `second`
//Create a loop that iterates through each position in the input array
//Create another loop that iterates through every other value in the array
  //And gets abs value of the diff
//If the abs value is lower than `smallestDiff`,
  //Reassign `first` to the outer loop value
  //Reassign `second` to the inner loop value
//After iterating through all combinations, `first` and `second` will contain
  //The values with the lowest diff
//Set new var result to an empty array;
//Push `first` and `second` into `result`
//Return `result` 

//Code
function closestNumbers(intArray) {
  let first = intArray[0];
  let second = intArray[1];
  let smallestDiff = Math.abs(first - second);
  let result = [];

  intArray.forEach((int, idx) => {
    for (let counter = idx + 1; counter < intArray.length; counter++) {
      let diff = Math.abs(int - intArray[counter]);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        first = int;
        second = intArray[counter];
      }
    }
  });

  result.push(first, second);
  return result;
}

// Examples:

console.log(closestNumbers([5, 25, 15, 11, 20]));     // [15, 11]
console.log(closestNumbers([19, 25, 32, 4, 27, 16])); // [25, 27]
console.log(closestNumbers([12, 7, 17]));             // [12, 7]










// only change letters (keep case?)

// prefix indicates 'rotate' or 'shift' with 2 letters, the 1st showing 1st letter (lower case) of unencoded message
// For example if the "rotate" is 2, if the first letter of the uncoded message is 'J' the prefix should be 'jl'.
// message evenly split into 5 strings of equal length (spaces included), if possible
// or, if not 4 strings of equal length with 5th of max possible length
// if 5th part is empty string, don't include in result array

// For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. 
// The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter.
// If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. 
// Parts 1, 2, 3, 4 are evenly split and the fifth part is empty string and hence not included in result array

// Example with shift = 1 :

// message : "I should have known that you would have a perfect answer for me!!!"

// code : => ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

//Input - text string, shift parameter
//Output - an array with length 4 or 5 (strings)

//Create an array of letters
//Create the prefix
//Create an empty string that we'll add to as we encode the text
//Add the prefix to the string, then add each encoded character
//Split the encoded string into 5 parts

// function decode(text, shift) {
//   let alpha = 'abcdefghijklmnoqrstuvwxyz'.split('');
//   let result = '';
//   let prefixFirst = text[0].toLowerCase();
//   let prefixSecond = alpha[alpha.indexOf(prefixFirst) + 1];
//   let prefix = text[0].toLowerCase() + alpha.indexOf(text[0].toLowerCase());
//   //Add prefix to result
//   result += prefix;

//   for (let idx = 0; idx < text.length; idx++) {
//     if (alpha.includes(text[idx].toLowerCase())) {
//       let index = alpha.indexOf(text[idx].toLowerCase());
//       index = (index + shift) % 26;
//       result += alpha[index];
//     } else {
//       result += text[idx];
//     }
//   console.log(result);
//   }

// }


// console.log(JSON.stringify(decode("I should have known that you would have a perfect answer for me!!!", 1))
//   === JSON.stringify(["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]));