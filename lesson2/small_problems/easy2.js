//Welcome Stranger
function greetings(nameArray, jobObject) {
  let fullName = nameArray.join(' ');
  let jobDescriptor = `${jobObject.title} ${jobObject.occupation}`;
  let greeting = `Hello, ${fullName}! Nice to have a ${jobDescriptor} around.`;
  return greeting;
}

//Ask for name. If name ends in !, then yell back at user
function greetUser() {
  const readline = require('readline-sync');
  
  let name = readline.question("What is your name? ");
  if (name.endsWith('!')) {
    name = name.slice(0, -1);
    return `HELLO ${name.toUpperCase()}! WHY ARE WE SCREAMING?!`;
  } else {
    return `Hello ${name}.`;
  }
}

//Multiply two numbers
function multiply(number1, number2) {
  return number1 * number2;
}

//Square a number using the multiply function
function square(number) {
  return multiply(number, number);
}

//Arithmetic integer
function simpleCalc() {
  const readline = require('readline-sync');
  let num1;
  let num2;
  
  function prompt(message) {
    console.log(`==> ${message}`);
  }

  prompt('Enter the first number:');
  num1 = Number(readline.question());
  prompt('Enter the second number:');
  num2 = Number(readline.question());

  prompt(`${num1} + ${num2} = ${num1 + num2}`); //addition
  prompt(`${num1} - ${num2} = ${num1 - num2}`); //subtraction
  prompt(`${num1} * ${num2} = ${num1 * num2}`); //product
  prompt(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`); //quotient
  prompt(`${num1} % ${num2} = ${num1 % num2}`); //remainder
  prompt(`${num1} ** ${num2} = ${BigInt(num1 ** num2)}`); //power
}

