//Code reviewed? No

//Ask the user for the loan amount
//Ask the user for the annual percentage rate (APR)
//Ask the user for the loan duration in months

const readline = require('readline-sync');

function calculateMonthlyPayment() {
  //User inputs
  let loanAmount = Number(readline.question("What is the amount you want to borrow? "));
  let APR = parseFloat(readline.question("What is the annual percentage rate (APR)? "));
  let loanDurationInMonths = Number(readline.question("What is the loan duration in months? "));

  //Convert APR to monthly interest rate
  let monthlyInterestRate = (APR / 100) / 12;

  //Calculate monthly payment
  //If interest rate is 0
  let monthlyPayment;
  if (monthlyInterestRate === 0) {
    monthlyPayment = loanAmount / loanDurationInMonths;
    console.log(`Your monthly payment will be $${(monthlyPayment).toFixed(2)}.`);
  } else {
    //If interest rate is non-zero
    monthlyPayment = loanAmount * (monthlyInterestRate / (1 - Math.pow((1 + monthlyInterestRate), (-loanDurationInMonths))));
    console.log(`Your monthly payment will be $${(monthlyPayment).toFixed(2)}.`);
  }
  return monthlyPayment;
}

calculateMonthlyPayment();