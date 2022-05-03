/* eslint-disable max-lines-per-function */
//Lettercase Percentage Ratio
function letterPercentages(string) {
  const charArray = string.split('');
  const lower = 'abcdefhijklmnoqrstuvwxyz';
  const upper = lower.toUpperCase();
  const totalLength = string.length;

  let percentages = {
    lowercase: 0,
    uppercase: 0,
    neither: 0
  };

  charArray.forEach(char => {
    if (lower.includes(char)) {
      percentages["lowercase"] += 1;
    } else if (upper.includes(char)) {
      percentages["uppercase"] += 1;
    } else {
      percentages["neither"] += 1;
    }
  });

  for (let key in percentages) {
    percentages[key] = (percentages[key] / totalLength * 100).toFixed(2);
  }
  return percentages;
}

function letterPercentagesLS(string) {
  let count = string.length;

  function percentage(regex) {
    let matchingChars = string.match(regex) || [];
    return ((matchingChars.length / count) * 100).toFixed(2);
  }

  return {
    lowercase: percentage(/[a-z]/g),
    uppercase: percentage(/[A-Z]/g),
    neither:   percentage(/[^a-z]/gi),
  };
}

//Test Cases
// letterPercentages('abCdef 123');
// // { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

// letterPercentages('AbCd +Ef');
// // { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

// letterPercentages('123');
// // { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

//Triangle Sides
function triangle(a, b, c) {
  let sortedSides = [a, b, c].sort((a, b) => a - b);
  let triangle = '';
  if (sortedSides.includes(0) ||
  sortedSides[0] + sortedSides[1] < sortedSides[2]) {
    triangle = 'invalid';
  } else if (a === b && b === c) {
    triangle = 'equilateral';
  } else if (sortedSides[0] === sortedSides[1] ||
    sortedSides[1] === sortedSides[2]) {
    triangle = 'isosceles';
  } else {
    triangle = 'scalene';
  }
  console.log(triangle);
}

//Test Cases
// triangle(3, 3, 3);        // "equilateral"
// triangle(3, 3, 1.5);      // "isosceles"
// triangle(3, 4, 5);        // "scalene"
// triangle(0, 3, 3);        // "invalid"
// triangle(3, 1, 1);        // "invalid"

//Tri-Angles
function triangles(a, b, c) {
  let type = '';
  if ([a, b, c].filter(angle => angle < 90).length === 3) {
    type = 'acute';
  } else if ([a, b, c].filter(angle => angle === 90).length === 1) {
    type = 'right';
  } else {
    type = 'obtuse';
  }

  if (a + b + c !== 180 || [a, b, c].filter(angle => angle > 0).length !== 3) {
    type = 'invalid';
  }
  return type;
}
//Test Cases
triangles(60, 70, 50);       // "acute"
triangles(30, 90, 60);       // "right"
triangles(120, 50, 10);      // "obtuse"
triangles(0, 90, 90);        // "invalid"
triangles(50, 50, 50);       // "invalid"

//Unlucky Days
function fridayThe13ths(year) {
  let counter = 0;
  for (let month = 0; month < 12; month++) {
    let date = new Date(year, month, 13);
    //getDay() returns 5 if Friday
    if (date.getDay() === 5) {
      counter += 1;
    }
  }
  console.log(counter);
}

//Test Cases
// fridayThe13ths(1986);      // 1
// fridayThe13ths(2015);      // 3
// fridayThe13ths(2017);      // 2

//Next Featured Number Higher Than a Given Value
//featured number =  ODD number/ multiple of 7 / all digits occur exactly once
function featured(n) {
  let count = n + 1;
  while (!(allDigitsUnique(count) && isOddAndMultipleOfSeven(count))) {
    count += 1;
    if (count > 9876543201) {
      return "There is no possible number that fulfills those requirements.";
    }
  }

  function allDigitsUnique(num) {
    let digits = String(num).split('');
    let uniqueDigits = new Set(digits);
    return digits.length === uniqueDigits.size;
  }

  function isOddAndMultipleOfSeven(num) {
    return (num % 2 === 1 && num % 7 === 0);
  }
  return count;
}

//Test Cases
// console.log(featured(12));           // 21
// console.log(featured(20));           // 21
// console.log(featured(21));           // 35
// console.log(featured(997));          // 1029
// console.log(featured(1029));         // 1043
// console.log(featured(999999));       // 1023547
// console.log(featured(999999987));    // 1023456987
// console.log(featured(9876543186));   // 9876543201
// console.log(featured(9876543200));   // 9876543201
// console.log(featured(9876543201));   // "There is no possible number that fulfills those requirements."

//Sum Square - Square Sum
function sumSquareDifference(count) {
  let sumSquare = 0;
  let squareSum = 0;
  for (let i = 1; i <= count; i++) {
    sumSquare += i;
    squareSum += i ** 2;
  }
  sumSquare **= 2;
  console.log(sumSquare - squareSum);
}

//Test Cases
// sumSquareDifference(3);      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
// sumSquareDifference(10);     // 2640
// sumSquareDifference(1);      // 0
// sumSquareDifference(100);    // 25164150

//Bubble Sort
function bubbleSort(inputArray) {
  while (sortable(inputArray) === true) {
    sortable(inputArray);
  }

  //Helper function to pass over the array once
  function sortable(array) {
    let swapCounter = 0;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        let greater = array[i];
        let lesser = array[i + 1];
        array.splice(i, 1, lesser);
        array.splice(i + 1, 1, greater);
        swapCounter += 1;
      }
    }
    return swapCounter > 0;
  }
  return inputArray;
}

//Test Cases
// let array1 = [5, 3];
// bubbleSort(array1);
// console.log(array1);    // [3, 5]

// let array2 = [6, 2, 7, 1, 4];
// bubbleSort(array2);
// console.log(array2);    // [1, 2, 4, 6, 7]

// let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
// bubbleSort(array3);
// console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

//Longest Sentence
function longestSentence(text) {
  //Regex for sentence separators (capture group adds separator as new element)
  const regex = new RegExp('([.!?])');
  const sentences = text.split(regex);
  //Add sentence separator back to sentence + trim whitespace
  let fixedSentences = [];
  for (let i = 0; i < sentences.length - 1; i += 2) {
    fixedSentences.push((sentences[i] + sentences[i + 1]).trim());
  }
  //Sort by sentence length
  fixedSentences.sort((sentence1, sentence2) => 
    sentence2.split(' ').length - sentence1.split(' ').length);
  //Print desired output
  let longestSentence = fixedSentences[0];
  console.log(longestSentence + "\n");
  console.log(`The longest sentence has ${longestSentence.split(' ').length} words.`);
}

//Test Cases
let longText =
  'Four score and seven years ago our fathers brought forth on this ' +
  'continent a new nation, conceived in liberty, and dedicated to the ' +
  'proposition that all men are created equal. Now we are engaged in a ' +
  'great civil war, testing whether that nation, or any nation so ' +
  'conceived and so dedicated, can long endure. We are met on a great ' +
  'battlefield of that war. We have come to dedicate a portion of that ' +
  'field, as a final resting place for those who here gave their lives ' +
  'that that nation might live. It is altogether fitting and proper that ' +
  'we should do this.';

let longerText = longText +
  'But, in a larger sense, we can not dedicate, we can not consecrate, ' +
  'we can not hallow this ground. The brave men, living and dead, who ' +
  'struggled here, have consecrated it, far above our poor power to add ' +
  'or detract. The world will little note, nor long remember what we say ' +
  'here but it can never forget what they did here. It is for us the ' +
  'living, rather, to be dedicated here to the unfinished work which ' +
  'they who fought here have thus far so nobly advanced. It is rather ' +
  'for us to be here dedicated to the great task remaining before us -- ' +
  'that from these honored dead we take increased devotion to that ' +
  'cause for which they gave the last full measure of devotion -- that ' +
  'we here highly resolve that these dead shall not have died in vain ' +
  '-- that this nation, under God, shall have a new birth of freedom -- ' +
  'and that government of the people, by the people, for the people, ' +
  'shall not perish from the earth.';

longestSentence(longText);
// Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.
//
// The longest sentence has 30 words.

longestSentence(longerText);
// It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.
//
// The longest sentence has 86 words.

longestSentence("Where do you think you're going? What's up, Doc?");
// Where do you think you're going?
//
// The longest sentence has 6 words.

longestSentence("To be or not to be! Is that the question?");
// To be or not to be!
//
// The longest sentence has 6 words.