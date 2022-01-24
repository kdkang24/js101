/* eslint-disable max-lines-per-function */
//Easy 1

//Q1
//return true if absolute value of number is odd
function isOdd(number) {
  return (Math.abs(number) % 2 === 1);
}

//Q2
//log odd numbers from 1 - 99 (inclusive) to console
function logOddNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}

//Q3
//log even numbers from 1 - 99 (inclusive) to console

function logEvenNumbers() {
  for (let i = 1; i <= 99; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

//Q4
//prompt user to enter length and width of room in meters
//logs area of room in BOTH sq ft and sq meters to console
function logRoomArea() {
  const readline = require('readline-sync');

  console.log("Enter the length of the room in meters:");
  let length = Number(readline.prompt());
  
  console.log("Enter the width of the room in meters:");
  let width = Number(readline.prompt());
  
  let areaInMeters = length * width;
  let areaInFeet = areaInMeters * 10.7639;
  console.log(`The area of the room is ${areaInMeters} square meters (${areaInFeet} square feet).`);
}

//Q5
//Prompt for a bill amount and tip rate
//Log both tip amount and total amount to console
function tipCalculator() {
  const readline = require('readline-sync');
  let bill = Number(readline.question("What is the bill? "));
  let tipPercentage = Number(readline.question("What is the tip percentage? "));
  let tip = bill * (tipPercentage / 100);
  console.log('');
  console.log(`The tip is $${tip.toFixed(2)}`);
  console.log(`The total is $${(bill + tip).toFixed(2)} `);
}

//Q6
//Prompt user to enter an integer greater 0
//Ask whether to determine sum or product
//of all numbers between 1 and the input integer, inclusive

// eslint-disable-next-line max-lines-per-function
// eslint-disable-next-line max-statements
function sumOrProduct() {
  let readline = require('readline-sync');
  //Get input
  let prompt = Number(readline.question("Please enter an integer greater than 0: "));
  if (prompt <= 0 || isNaN(prompt) ) {
    console.log("Invalid input.");
  }
  //Select sum or product
  let computation = readline.question('Enter "s" to compute the sum, or "p" to compute the product. ');
  if (!['s', 'p'].includes(computation)) {
    console.log("Invalid operation.");
  }
  //Output sum or product
  if (computation === 's') {
    let sum = 0;
    for (let i = 1; i <= prompt; i++) {
      sum += i;
    }
    console.log(`The sum of the integers between 1 and ${prompt} is ${sum}.`);
  } else if (computation === 'p') {
    let product = 1;
    for (let i = 1; i <= prompt; i++) {
      product *= i;
    }
    console.log(`The product of the integers between 1 and ${prompt} is ${product}.`);
  }
}

sumOrProduct();

