//Double Char (part 1)
function repeater(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += string[i] + string[i];
  }
  return result;
}

//Test Cases
// repeater('Hello');        // "HHeelllloo"
// repeater('Good job!');    // "GGoooodd  jjoobb!!"
// repeater('');             // ""

//Double Char (part 2)
//double only consonants
function doubleConsonants(string) {
  const CONSONANTS = 'bcdfghjklmnpqrstvwxyz'.split('');
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      result += string[i] + string[i];
    } else {
      result += string[i];
    }
  }
  return result;
}

//Test Cases
// doubleConsonants('String');          // "SSttrrinngg"
// doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
// doubleConsonants('July 4th');        // "JJullyy 4tthh"
// doubleConsonants('');                // ""

//Reverse Number
function reverseNumber(integer) {
  let intArray = String(integer).split('').reverse();
  let reversed = Number(intArray.join(''));
  return reversed;
}

//Test Cases
// reverseNumber(12345);    // 54321
// reverseNumber(12213);    // 31221
// reverseNumber(456);      // 654
// reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
// reverseNumber(1);        // 1

//Get The Middle Character
// 1 char is odd length, 2 chars if even length
function centerOf(string) {
  let result = '';
  let midpoint = Math.floor(string.length / 2);

  function isOdd(length) {
    if (length % 2 === 1) {
      return true;
    } else return false;
  }

  if (isOdd(string.length)) {
    result += string[midpoint];
  } else {
    result += string[midpoint - 1] + string[midpoint];
  }

  return result;
}

//Test Cases
// centerOf('I Love JavaScript'); // "a"
// centerOf('Launch School');     // " "
// centerOf('Launch');            // "un"
// centerOf('Launchschool');      // "hs"
// centerOf('x');                 // "x"

//Always Return Negative
function negative(number) {
  if (number < 0) {
    return number;
  } else {
    return number * -1;
  }
}

function negativeLS(number) {
  return Math.abs(number) * -1;
}
//Test Cases
// negative(5);     // -5
// negative(-3);    // -3
// negative(0);     // -0

//Counting Up
function sequence(number) {
  let result = [];
  for (let counter = 1; counter <= number; counter++) {
    result.push(counter);
  }
  console.log(result);
}

//Test Cases
// sequence(5);    // [1, 2, 3, 4, 5]
// sequence(3);    // [1, 2, 3]
// sequence(1);    // [1]

//Name Swapping
function swapName(nameString) {
  let [firstName, lastName] = nameString.split(' ');
  return `${lastName}, ${firstName}`;
}
//Test Cases
// swapName('Joe Roberts');    // "Roberts, Joe"

//Further Exploration
function swapNames(nameString) {
  let nameArray = nameString.split(' ');
  return `${nameArray.slice(-1)}, ${nameArray.slice(0, -1 ).join(' ')}`;
}

// swapNames('Karl Oskar Henriksson Ragvals');    // "Ragvals, Karl Oskar Henriksson"

//Sequence Count
function sequence(count, startNumber) {
  let result = [];
  let sum = 0;
  for (let i = 0; i < count; i++) {
    sum += startNumber;
    result.push(sum);
  }
  return result;
}

//Test Cases
// sequence(5, 1);          // [1, 2, 3, 4, 5]
// sequence(4, -7);         // [-7, -14, -21, -28]
// sequence(3, 0);          // [0, 0, 0]
// sequence(0, 1000000);    // []

//Reverse It (part 1)
function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');
}

//Test Cases
// reverseSentence('');                       // ""
// reverseSentence('Hello World');            // "World Hello"
// reverseSentence('Reverse these words');    // "words these Reverse"

//Reverse It (part 2)
function reverseWords(string) {
  let wordArray = string.split(' ');
  let result = [];
  wordArray.forEach(word => {
    if (word.length >= 5) {
      let reversedWord = word.split('').reverse().join('');
      result.push(reversedWord);
    } else {
      result.push(word);
    }
  });
  return result.join(' ');
}

//Test Cases
// reverseWords('Professional');             // "lanoisseforP"
// reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
// reverseWords('Launch School');            // "hcnuaL loohcS"

//Reversed Arrays
function reverse(array) {
  array.sort((a, b) => array.indexOf(b) - array.indexOf(a));
  return array;
}

//Test Cases
// let list = [1, 2, 3, 4];
// let result = reverse(list);
// console.log(result); // logs [4,3,2,1]
// console.log(list === result); // logs true

// let list1 = ["a", "b", "c", "d", "e"];
// let result1 = reverse(list1);
// console.log(result1); // logs  ["e", "d", "c", "b", "a"]
// console.log(list1 === result1); // logs true

// let list2 = ["abc"];
// let result2 = reverse(list2);
// console.log(result2); // logs  ["abc"]
// console.log(list2 === result2); // logs true

// let list3 = [];
// let result3 = reverse(list3);
// console.log(result3); // logs []
// console.log(list3 === result3); // logs true

// let list4 = [1, 2, 3, 4, 1];
// let result4 = reverse(list4);
// console.log(result4); // logs [1, 4, 3, 2, 1]
// console.log(list4 === result4); // logs true

//Matching Parentheses?
function isBalanced(string) {
  let charArray = string.split('');
  let parensArray = [];
  charArray.forEach(char => {
    if (char === '(' || char === ')') {
      parensArray.push(char);
    }
  });
  
  //check for matching pairs
  while (parensArray.length > 1) {
    if (parensArray.includes('(')) {
      parensArray.shift();
      if (parensArray.includes(')')) {
        parensArray.splice(parensArray.indexOf(')'), 1);
      }
    }
  }
  
  if (parensArray.length > 0) {
    return false;
  } else return true;
}

function isBalancedLS(string) {
  let parens = 0;
  for (let idx = 0; idx < string.length; idx++) {
    if (string[idx] === "(") {
      parens += 1;
    } else if (string[idx] === ")") {
      parens -= 1;
    }
    if (parens < 0) return false;
  }
  return parens === 0;
};

//Test Cases
// console.log(isBalanced("What (is) this?") === true);
// console.log(isBalanced("What is) this?") === false);
// console.log(isBalanced("What (is this?") === false);
// console.log(isBalanced("((What) (is this))?") === true);
// console.log(isBalanced("((What)) (is this))?") === false);
// console.log(isBalanced("Hey!") === true);
// console.log(isBalanced(")Hey!(") === false);
// console.log(isBalanced("What ((is))) up(") === false);

// console.log(isBalanced("What (is) this?")); //true
// console.log(isBalanced("((What)) (is this))?")); //false
// console.log(isBalanced(")Hey!(")); //false

