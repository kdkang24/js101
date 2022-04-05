//Sort by word length (ascending order)
let words = ['go', 'ahead', 'and', 'jump'];

let sortedByLength = words.sort((a, b) => a.length - b.length);

//sort in descending order
let arr = ['10', '11', '9', '7', '8'];
let sortedDescending = arr.sort((a, b) => Number(b) - Number(a));

//Sort by publication year
let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

let sortByPublishYear = books.sort((a, b) => Number(a.published) - Number(b.published));

// //Access the letter 'g'
// let arr1 = ['a', 'b', ['c', ['d', 'e', 'f', 'g']]];
// // console.log(arr1[2][1][3]);

// let arr2 = [{ first: ['a', 'b', 'c'], second: ['d', 'e', 'f'] }, { third: ['g', 'h', 'i'] }];
// // console.log(arr2[1].third[0]);

// let arr3 = [['abc'], ['def'], { third: ['ghi'] }];
// // console.log(arr3[2].third[0][0]);

// let obj1 = { a: ['d', 'e'], b: ['f', 'g'], c: ['h', 'i'] };
// // console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 }}
// // console.log(Object.keys(obj2["third"])[0]);

// Practice Problem 4
// let arr1 = [1, [2, 3], 4];
// arr1[1][1] = 4;
// console.log(arr1);

// let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
// arr2[2] = 4;
// console.log(arr2);

// let obj1 = { first: [1, 2, [3]] };
// obj1["first"][2][0] = 4;
// console.log(obj1);

// let obj2 = { a: { a: ['1', 'two', 3], b: 4 }, b: 5 };
// obj2["a"]["a"][2] = 4;
// console.log(obj2);

//Practice Problem 5
let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

// console.log(Object.entries(munsters));

function calculateTotalMaleAge(obj) {
  let totalMaleAge = 0;
  //iterate through each member
  for (let member in obj) {
    if (obj[member]['gender'] === 'male') {
      totalMaleAge += obj[member]['age'];
    }
  }
  return totalMaleAge;
}

// console.log(calculateTotalMaleAge(munsters));

//Practice Problem 6
function listMemberAges(obj) {
  for (let member in obj) {
    let name = member;
    let age = obj[member]['age'];
    let gender = obj[member]['gender'];
    console.log(`${name} is a ${age}-year-old ${gender}.`);
  }
}

// listMemberAges(munsters);

//Practice Problem 8
let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

function logAllVowels(obj) {
  let vowels = "aeiou";
  let wordArray = Object.values(obj);
  wordArray.forEach(elem => {
    elem.forEach(word => {
      let chars = word.split('');
      chars.forEach(char => {
        if (vowels.includes(char)) {
          console.log(char);
        }
      });
    });
  });
}

// logAllVowels(obj);

//Practice Problem 9
let arr9 = [['b', 'c', 'a'], [2, 11, -3], ['blue', 'black', 'green']];

function orderedSubArrays(arr) {
  let result = arr.map(subarray => {
    if (typeof subarray[0] === 'string') {
      return subarray.slice().sort();
    } else {
      return subarray.slice().sort((a,b) => a - b);
    }
  });
  return result;
}

//Expected result = [['a', 'b', 'c'], [-3, 2, 11], ['black', 'blue', 'green']];
// console.log(orderedSubArrays(arr9));

//Practice Problem 10
// function descOrderedSubArrays(arr) {
//   let result = arr.map(subarray => {
//     if (typeof subarray[0] === 'string') {
//       return subarray.slice().sort((a, b) => charCodeAt(b) - charCodeAt(a));
//     } else {
//       return subarray.slice().sort((a,b) => b - a);
//     }
//   });
//   return result;
// }

// console.log(descOrderedSubArrays(arr9));

//Practice Problem 11
let arr11 = [{ a: 1 }, { b: 2, c: 3 }, { d: 4, e: 5, f: 6 }];

function addOne(arr) {
  let result = arr.map(obj => {
    let incrementedObj = {};

    for (let key in obj) {
      incrementedObj[key] = obj[key] + 1;
    }

    return incrementedObj;
  });
  return result;
}

// console.log(addOne(arr11));
// console.log(arr11);

//Practice Problem 12
let arr12 = [[2], [3, 5, 7], [9], [11, 15, 18]];

function removeMultiples(arr) {
  let newArray = arr.map(subArr => subArr.filter(num => num % 3 === 0));
  return newArray;
}

// console.log(removeMultiples(arr12));

//Practice Problem 13
let arr13 = [[1, 6, 7], [1, 5, 3], [1, 8, 3]];

function sumOfOdds(arr) {
  let sum = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 1) {
      sum += arr[index];
    }
  }
  return sum;
}

function orderBySumOfOdds(arr) {
  return arr.sort((a, b) => sumOfOdds(a) - sumOfOdds(b));
}

// console.log(orderBySumOfOdds(arr13));

//Practice Problem 14
let obj14 = {
  grape: { type: 'fruit', colors: ['red', 'green'], size: 'small' },
  carrot: { type: 'vegetable', colors: ['orange'], size: 'medium' },
  apple: { type: 'fruit', colors: ['red', 'green'], size: 'medium' },
  apricot: { type: 'fruit', colors: ['orange'], size: 'medium' },
  marrow: { type: 'vegetable', colors: ['green'], size: 'large' },
};

function fruitColorsAndVegSizes(obj) {
  let result = [];
  for (let key in obj) {
    if (obj[key]['type'] === 'fruit') {
      result.push(obj[key]['colors'].map(color => color.toUpperCase()));
    } else {
      let size = obj[key]['size'];
      let capitalizedSize = size[0].toUpperCase() + size.substring(1);
      result.push(capitalizedSize);
    }
  }
  return result;
}

// console.log(fruitColorsAndVegSizes(obj14));

//Practice Problem 15
let arr15 = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], c: [3, 6], d: [4] },
  { e: [8], f: [6, 10] },
];

function containsOnlyEvens(obj) {
  let values = Object.values(obj);
  let onlyEvens = true;
  for (let index = 0; index < values.length; index++) {
    if (values[index].every(elem => elem % 2 === 0) === false) {
      onlyEvens = false;
    }
  }
  return onlyEvens;
}

function filterEvenArrays(arr) {
  return arr.filter(subobj => containsOnlyEvens(subobj));
}

// console.log(filterEvenArrays(arr15));

//Practice Problem 16
let arr16 = [['a', 1], ['b', 'two'], ['sea', {'c': 3}], ['D', ['a', 'b', 'c']]];

function arrayToObject(arr) {
  let newObject = {};
  arr.forEach(subarray => {
    newObject[subarray[0]] = subarray[1];
  });
  return newObject;
}

console.log(arrayToObject(arr16));
// expected return value of function call
// { a: 1, b: 'two', sea: { c: 3 }, D: [ 'a', 'b', 'c' ] }


//Practice Problem 17
let UUIDChars = '0123456789abcdef';
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function createUUID() {
  let UUID = "";
  for (let counter = 0; counter < 32; counter++) {
    UUID += UUIDChars[getRandomInt(16)];
    if ([8, 13, 18, 23].includes(UUID.length)) {
      UUID += "-";
    }
  }
  return UUID;
}

// console.log(createUUID());
// console.log(createUUID().length);

// (UUID.length === 8 || UUID.length === 13 || UUID.length === 18 || UUID.length === 23)