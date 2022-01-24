// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

const readline = require('readline-sync');
const MESSAGES = require('./calculator_messages.json');
const LANGUAGE = 'en';

function prompt(message) {
  let key = MESSAGES[LANGUAGE];
  console.log(`=> ${key[message]}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//function to do more calcs if desired
function newCalc() {
  prompt("newCalculationMessage");
  let answer = readline.question();
  while (!['y', 'n'].includes(answer)) {
    prompt("invalidResponse");
    answer = readline.question();
  }
  if (answer === 'y') {
    return true;
  } else {
    return false;
  }
}

//Start program
prompt("welcomeMessage");

do {
  prompt("firstNumber");
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt("invalidNumber");
    number1 = readline.question();
  }

  prompt("secondNumber");
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt("invalidNumber");
    number2 = readline.question();
  }

  let operation;

  prompt("chooseOperation");
  operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("operationErrorMessage");
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case '1':
      output = Number(number1) + Number(number2);
      break;
    case '2':
      output = Number(number1) - Number(number2);
      break;
    case '3':
      output = Number(number1) * Number(number2);
      break;
    case '4':
      output = Number(number1) / Number(number2);
      break;
  }

  console.log(`=> The result is: ${output}`);


} while (newCalc() === true);
