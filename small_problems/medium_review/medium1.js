/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
//Rotation

//Input - an array
//Output - array
//Explicit Reqs
  //Rotate the input array by moving the first element to the end of the array
  //If the input is not an array, return undefined
  //If the input is an empty array, return an empty array
  //Do not modify the original array
//Implicit Reqs
  //Return value must not be the original array

//Algo
//Check if input is a valid array

//Create a new variable `firstElement`
//Assign the value of the first element of the input array to `firstElement`
//Create a new variable `result`
//Assign to result the subarray of the input array from index 1 to the last index
//Add `firstElement` to the end of the `result` array
//Return `result`

//Code
function rotateArray(arr) {
  //Guard clauses
  if (Array.isArray(arr) === false) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }

  let firstElement = arr[0];
  let result = arr.slice(1);
  result.push(firstElement);
  return result;
}

//Test Cases
// console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
// rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
// rotateArray(['a']);                    // ["a"]
// rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
// rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
// console.log(rotateArray([]));                       // []

// // return `undefined` if the argument is not an array
// console.log(rotateArray());                         // undefined
// console.log(rotateArray(1));                        // undefined


// // the input array is not mutated
// let array = [1, 2, 3, 4];
// console.log(rotateArray(array));                    // [2, 3, 4, 1]
// console.log(array);

//Rotation (part 2)
//Input - two numbers - first arg is the number to be rotated, second arg is the position to rotate
//Output - the rotated number
//Explicit reqs
  //The second arg (count) is the position from the end that will shift to the end
  //The rest of the digits will be shifted to the left
//Implicit reqs
  //Two arguments that are both numbers are provided as inputs
  //The `number` will have at least as many digits as the value of `count`
//Questions
  //What to return if `count` is higher than the number of digits in `number`?

//Algo
//Create new array `digits` that contains all of the digits in `number`
//Create new variable `shiftValue` - set to `digits`.length - count
//Create new variable `rotatedDigit` - set to `digits`[`shiftValue`]
//Remove element at `digits`[`shiftValue`]
//Add `rotatedDigit` to `digits`
//Convert `digits` back to number (join and coerce to number)
//Return number


//Code
function rotateRightmostDigits(number, count) {
  let digits = String(number).split('');
  let shiftValue = digits.length - count;
  let rotatedDigit = digits[shiftValue];
  digits.splice(shiftValue, 1);
  digits.push(rotatedDigit);
  return Number(digits.join(''));
}

//Test Cases
// console.log(rotateRightmostDigits(735291, 1));      // 735291
// console.log(rotateRightmostDigits(735291, 2));      // 735219
// console.log(rotateRightmostDigits(735291, 3));      // 735912
// console.log(rotateRightmostDigits(735291, 4));      // 732915
// console.log(rotateRightmostDigits(735291, 5));      // 752913
// console.log(rotateRightmostDigits(735291, 6));      // 352917

//Rotation (part 3)
//Input - number
//Output - number
//Explicit reqs
  //Rotate the numbers at every position in the input number, starting from highest to lowest
  //Rotated digits should be moved to the end
  //Once rotated, that position does not get rotated again
//Implicit reqs
  //Input will always be a positive number
  //Leading zeroes in the output get dropped

//Algo
//Create new variable `result`
//Create new variable `length`
//Set `length` equal to number of digits of input `number`
//Create for loop starting at value `length` and going down to zero
  //Reuse rotateRightmostDigits function from before
    //`number` arg will be the input `number`
    //`count` arg will be the loop counter
//Return `result`

//Code
function maxRotation(number) {
  let result = number;
  let length = String(number).length;
  for (let counter = length; counter > 0; counter--) {
    result = rotateRightmostDigits(result, counter);
  }
  return result;
}

//Test Cases
// console.log(maxRotation(735291));          // 321579
// console.log(maxRotation(3));               // 3
// console.log(maxRotation(35));              // 53
// console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
// console.log(maxRotation(8703529146));      // 7321609845

//Word to Digit
//Input - text string
//Output - text string
//Explicit reqs
  //Convert any instance of a "number word" to its corresponding digit
//Implicit reqs
  //Return a new string
  //input will always be a text string

//Data Structure
//Object to map "number words" to digits
//Array to split the input string into individual words

//Algo
//Create var `wordArray` that splits the input string into individual words
//Create object `wordDigitMap` that contains "number words" as keys and digits as values
//Iterate over `wordArray` and check if each word exists as a key in `wordDigitMap`
  //If YES, replace the word with the corresponding value
  //If NO, then continue without making any changes
//Create var `result` that will rejoin `wordArray`
//Return `result`

//Code
function wordToDigit(text) {
  let wordArray = text.split(' ');
  let wordDigitMap = {
    zero : 0,
    one : 1,
    two : 2,
    three : 3,
    four : 4,
    five : 5,
    six : 6,
    seven : 7,
    eight : 8,
    nine : 9
  };
  let result = [];

  wordArray.forEach(word => {
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    if (word.match(regex)) {
      result.push(wordDigitMap[word]);
    } else {
      result.push(word);
    }
  });

  console.log(result);

}



//Test Cases
wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."