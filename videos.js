/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
//Video 1 - FIRST PROBLEM

//Create a function that takes a positive integer number and returns the next bigger number formed by the same digits
//12 ==> 21
//513 ==> 531
//2017 ==> 2071

//If no bigger number can be composed, then return -1
//9 ==> -1
//111 ==> -1
//531 ==> -1

//Notes
//Input - positive int
//Output - next larger number using the same digits, or else -1

//Algo
//Take the input number and convert it to a string, then split it into individual digits
//Increment input number by 1, then check if it contains the same digits as input
//If it does, then return that result
//Continue incrementing until the number of digits exceeds the number of original digits


//Code
function nextBiggerNum(int) {
  let digits = String(int).split('');
  let target = int + 1;

  while (String(target).length <= digits.length) {
    if (containSameDigits(digits, String(target).split(''))) {
      return target;
    } else {
      target += 1;
    }
  }
  return -1;

  //Helper function to compare values in two arrays
  function containSameDigits(arr1, arr2) {
    let same = true;
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    for (let idx = 0; idx < arr1.length; idx++) {
      if (arr1[idx] !== arr2[idx]) {
        same = false;
      }
    }
    return same;
  }
}


//Test Cases
// console.log(nextBiggerNum(9) === -1);
// console.log(nextBiggerNum(12) === 21);
// console.log(nextBiggerNum(513) === 531);
// console.log(nextBiggerNum(2017) === 2071);
// console.log(nextBiggerNum(111) === -1);
// console.log(nextBiggerNum(531) === -1);
// console.log(nextBiggerNum(123456789) === 123456798);

//All tests above should return true

//=====================================================================
//=====================================================================

//Video 1 - SECOND PROBLEM

//Write function scramble(str1, str2) that returns true if a portion of str1 chars can be rearranged to match str2, otherwise returns false
//Only lowercase letters will be used (a-z). No punctuation or digits.

//Input - two strings as separate arguments
//Output - true or false, can str1 be rearranged to create str2?

//Algo
//Iterate through each character of str2 (the target string)
//Check if the char can be found in str1
//If yes, then remove that char str1 (to remove it from pool of available chars)
//If no, then return false
//If all chars can be found, then return true

//Code
function scramble(str1, str2) {
  let scramble = true;
  let requiredChars = str2.split('');
  let charPool = str1.split('');
  for (let idx = 0; idx < requiredChars.length; idx++) {
    if (charPool.includes(requiredChars[idx])) {
      charPool.splice(charPool.indexOf(requiredChars[idx]), 1);
    } else {
      scramble = false;
      break;
    }
  }
  return scramble;
}

//Test Cases
// console.log(scramble('javaass', 'jjss') === false);
// console.log(scramble('rkqodlw', 'world') === true);
// console.log(scramble('cedewaraaossoqqyt', 'codewars') === true);
// console.log(scramble('katas', 'steak') === false);
// console.log(scramble('scriptjava', 'javascript') === true);
// console.log(scramble('scriptingjava', 'javascript') === true);

//All tests above should return true


//=====================================================================
//=====================================================================

//Video 2 - FIRST PROBLEM

//Given a non-empty string, check if it can be constructed by taking a substring of it and
//appending multiple copies of the substring together. You may assume the given string consists
//of lowercase English letters only

//Input - string
//Output - true or false, can a substring be repeated to create the whole string?
//single chars count as substrings

//Algo
//Create list of all possible substrings
//For each substring, repeat until length matches length of input string
//compare repeated substring to input string
//If equal, return true

//Code
function repeatedSubstringPattern(text) {
  let substrings = [];
  for (let i = 1; i < (text.length / 2) + 1; i++) {
    substrings.push(text.substring(0, i));
  }
  
  //Check each substring
  for (let i = 0; i < substrings.length; i++) {
    let sub = '';
    while (sub.length < text.length) {
      sub += substrings[i];
    }
    if (sub === text) {
      return true;
    }
  }
  return false;
}

//Test Cases
// console.log(repeatedSubstringPattern('abab') === true);
// console.log(repeatedSubstringPattern('aba') === false);
// console.log(repeatedSubstringPattern('aabaaba') === false);
// console.log(repeatedSubstringPattern('abaababaab') === true);
// console.log(repeatedSubstringPattern('abcabcabcabc') === true);

//All tests above should return true

//=====================================================================
//=====================================================================

//Video 2 - SECOND PROBLEM

//Given an array of strings made only from lowercase letters, return an array of all
//characters that show up in all strings within the given array (including duplicates).
//For example, if a character occurs 3 times in all strings but not 4 times, you need to
//include that character three times in the final answer


//Code
function commonChars(stringArray) {
  let result = [];
  let chars = stringArray[0].split('');
  for (let idx = 0; idx < chars.length; idx++) {
    if (stringArray.every(elem => elem.includes(chars[idx]))) {
      result.push(chars[idx]);
      stringArray = stringArray.map(str => str.replace(chars[idx], ''));
    }
  }

  return result;
}
//Test Cases
// console.log(commonChars(['a', 'b'])); // []
// console.log(commonChars(['ab', 'bc'])); // ['b']
// console.log(commonChars(['bella', 'label', 'roller'])); //['e', 'l', 'l']
// console.log(commonChars(['cool', 'lock', 'cook'])); // ['c', 'o']
// console.log(commonChars(['hello', 'goodbye', 'booya', 'random'])); // ['o'];
// console.log(commonChars(['aabbaaaa', 'ccdddddd', 'eeffee', 'ggrrrrr', 'yyyzzz'])); // []


//=====================================================================
//=====================================================================

//Video 4 - FIRST PROBLEM

//Given 2 strings, your job is to find out if there is a substring
//that appears in both strings. You will return true if you find a substring
//that appears in both strings, or false if you do not.
//We only care about substrings that are longer than one letter long.

//Input - 
//Code
function commonPrefix(stringArray) {

}

//Test Cases
// console.log(commonPrefix(['flower', 'flow', 'flight']) === 'fl');
// console.log(commonPrefix(['dog', 'racecar', 'car']) === '');
// console.log(commonPrefix(['interspecies', 'interstellar', 'interstate']) === 'inters');
// console.log(commonPrefix(['throne', 'dungeon']) === '');
// console.log(commonPrefix(['throne', 'throne']) === 'throne');

//All tests should return true

//=====================================================================
//=====================================================================

//Video 4 - SECOND PROBLEM
//You are going to be given an array of integers. Your job is to take that array and find index N where the sum
//of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index
//that would make this happen, return -1

//Empty arrays are equal to 0 in this problem. So the index value can be zero (if everything to the right adds up to 0)
//Input - array of integers
//Output - index of the array where the sum of both sides are equal to each other, -1 if not possible

//Algo
//Initialize two variables, left and right
//Start from index 0, sum of left side is 0, sum of right side is sum of all numbers in array
//Compare left to right, if equal, return index
//If not equal, iterate through indexes until last index is reached

//Code
function findEvenIndex(intArray) {
  let evenIndex = -1;
  for (let idx = 0; idx < intArray.length; idx++) {
    let left = intArray.slice(0, idx);
    let right = intArray.slice(idx + 1, intArray.length);
    let leftSum = left.reduce((a, b) => a + b, 0);
    let rightSum = right.reduce((a, b) => a + b, 0);
    if (leftSum === rightSum) {
      evenIndex = idx;
      break;
    }
  }
  return evenIndex;
}

//Test Cases
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]) === 3);
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1]) === 1);
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6]) === -1);
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35]) === 3);
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35]) === 0);
// console.log(findEvenIndex([10, -80, 10, 10, 15, 35, 20]) === 6);
// console.log(findEvenIndex([-1, -2, -3, -4, -3, -2, -1]) === 3);

//All tests above should return true