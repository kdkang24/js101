//Problem 8
let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrayToObject(arr) {
  let indexedObject = {};
  flintstones.forEach((person, idx) => {
    indexedObject[person] = idx;
  });
  return indexedObject;
}

//console.log(arrayToObject(flinstones));

//Expected output
//{ Fred: 0, Barney: 1, Wilma: 2, Betty: 3, Pebbles: 4, Bambam: 5 }


//Problem 9
let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function addAges(obj) {
  let ages = Object.values(obj);
  let total = 0;
  for (let counter = 0; counter < ages.length; counter++) {
    total += ages[counter];
  }
  return total;
}

function addAges2(obj) {
  let totalAge = 0;
  Object.values(obj).forEach(age => totalAge += age);
  return totalAge;
}

//Problem 10
function getMinimumAge(obj) {
  let minAge = Math.min(...Object.values(obj));
  return minAge;
}


//Problem 11
let statement = "The Flintstones Rock";

function frequencyCounter(str) {
  let chars = statement.split('').filter(char => char !== ' ');
  let result = {};

  chars.forEach(char => {
    if (Object.keys(result).includes(char)) {
      result[char] += 1;
    } else {
      result[char] = 1;
    }
  });
  return result;
}

console.log(frequencyCounter(statement));