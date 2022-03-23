let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  let counter = 0;

  while (counter < numbers.length) {
    let currentNumber = numbers[counter];
    numbers[counter] = currentNumber * 2;

    counter += 1;
  }

  return numbers;
}

function doubleOddIndices(numbers) {
  let doubledOddIndices = [];
  for (let counter = 0; counter < numbers.length; counter++) {
    let currentNumber = numbers[counter];
    if (counter % 2 === 1) {
      doubledOddIndices.push(currentNumber * 2);
    } else {
      doubledOddIndices.push(currentNumber);
    }
  }
  return doubledOddIndices;
}

function multiply(numbers, factor) {
  let multipliedNumbers = [];
  for (let counter = 0; counter < numbers.length; counter++) {
    let currentNumber = numbers[counter];
    multipliedNumbers.push(currentNumber * factor);
  }
  return multipliedNumbers;
}

console.log(multiply(myNumbers, 5));
console.log(myNumbers);