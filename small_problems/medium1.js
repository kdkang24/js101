/* eslint-disable max-lines-per-function */
//Rotation (part 1)
function rotateArray(array) {
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }

  let result = array.slice();
  let rotatedElement = result.shift();
  result.push(rotatedElement);
  return result;
}

//Test Cases
// rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]
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
// rotateArray(array);                    // [2, 3, 4, 1]
// console.log(array);                                 // [1, 2, 3, 4]

//Rotation (part 2)
function rotateRightmostDigits(number, count) {
  let numArray = String(number).split('');
  let rotatedDigit = numArray[numArray.length - count];
  numArray.splice(-count, 1);
  numArray.push(rotatedDigit);
  return Number(numArray.join(''));
  // console.log(Number(numArray.join('')));
}

//Test Cases
// rotateRightmostDigits(735291, 1);      // 735291
// rotateRightmostDigits(735291, 2);      // 735219
// rotateRightmostDigits(735291, 3);      // 735912
// rotateRightmostDigits(735291, 4);      // 732915
// rotateRightmostDigits(735291, 5);      // 752913
// rotateRightmostDigits(735291, 6);      // 352917

//Rotation (part 3)
function maxRotation(number) {
  let count = String(number).length;
  let result = number;
  for (let counter = count; counter > 0; counter--) {
    result = rotateRightmostDigits(result, counter);
  }
  return result;
}

//Test Cases
// maxRotation(735291);          // 321579
// maxRotation(3);               // 3
// maxRotation(35);              // 53
// maxRotation(105);             // 15 -- the leading zero gets dropped
// maxRotation(8703529146);      // 7321609845

//Stack Machine Interpretation
function minilang(commandString) {
  //Create array of commands
  const commands = commandString.split(' ');

  //Initialize stack and register
  let stack = [];
  let register = 0;

  //Iterates through each command using helper functions below
  commands.forEach(command => {
    if (isNumber(command)) {
      register = Number(command);
    } else {
      textCommands(command);
    }
  });

  //Helper function for number inputs
  function isNumber(command) {
    return Number.isInteger(Number(command));
  }

  //Helper function for text inputs
  function textCommands(command) {
    switch (command) {
      case 'PUSH':
        stack.push(register);
        break;
      case 'ADD':
        register += stack.pop();
        break;
      case 'SUB':
        register -= stack.pop();
        break;
      case 'MULT':
        register *= stack.pop();
        break;
      case 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case 'REMAINDER':
        register %= stack.pop();
        break;
      case 'POP':
        register = stack.pop();
        break;
      case 'PRINT':
        console.log(register);
        break;
      default:
        console.log(`Invalid command: ${command}`);
    }
  }
  return register;
}

//Test Cases
// minilang('PRINT');
// // 0

// minilang('5 PUSH 3 MULT PRINT');
// // 15

// minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // 5
// // 3
// // 8

// minilang('5 PUSH POP PRINT');
// // 5

// minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

// minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// // 6

// minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

// minilang('-3 PUSH 5 SUB PRINT');
// // 8

// minilang('6 PUSH');
// // (nothing is printed because the `program` argument has no `PRINT` commands)

//Word to Digit
function wordToDigit(string) {
  const conversion = {
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

  Object.keys(conversion).forEach(word => {
    let regex = new RegExp(`\\b${word}\\b`, 'g');
    string = string.replace(regex, conversion[word]);
  });
  return string;
}

//Test Cases
// wordToDigit('Please call me at five five five one two three four. Thanks.');
// // "Please call me at 5 5 5 1 2 3 4. Thanks."

// wordToDigit('The weight is done.');      // "The weight is done."

//Fibonacci Numbers (Recursion)
function fibonacciRecursion(n) {
  let base = 1;
}

//Test Cases
// fibonacci(1);       // 1
// fibonacci(2);       // 1
// fibonacci(3);       // 2
// fibonacci(4);       // 3
// fibonacci(5);       // 5
// fibonacci(12);      // 144
// fibonacci(20);      // 6765

function fibonacci(n) {

}

//Test Cases
// fibonacci(20);       // 6765
// fibonacci(50);       // 12586269025
// fibonacci(75);       // 2111485077978050