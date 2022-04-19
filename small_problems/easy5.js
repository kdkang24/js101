//Cute Angles
// console.log('\u00b0'); //degree symbol
// 1 degree = 60 minutes
// 1 minutes = 60 seconds

function dms(float) {
  let degrees = Math.floor(float);
  let degreesRemainder = float - Math.floor(float);
  if (degreesRemainder === 0) {
    return `${degrees}\u00b000'00"`;
  }
  let minutes = Math.floor(degreesRemainder * 60);
  let minutesRemainder = (degreesRemainder * 60) - minutes;
  let seconds = Math.floor(minutesRemainder * 60);
  let answer = `${degrees}\u00b0${String(minutes).padStart(2, '0')}'${String(seconds).padStart(2, '0')}"`;
  return answer;
}

//Test Cases
// dms(30);           // 30°00'00"
// dms(76.73);        // 76°43'48"
// dms(254.6);        // 254°35'59"
// dms(93.034773);    // 93°02'05"
// dms(0);            // 0°00'00"
// dms(360);          // 360°00'00" or 0°00'00"

//Combining Arrays
function union(array1, array2) {
  let combined = array1.concat(array2);
  combined = new Set(combined);
  let result = [];
  combined.forEach(value => result.push(value));
  return result;
}

//Test Cases
// union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

//Halvsies
function halvsies(array) {
  let result = [];
  let first = [];
  let second = [];
  let length = array.length;
  let midpoint = Math.floor(length / 2);
  if (length === 0) {
    result.push(first, second);
    return result;
  } else {
  //first half
    for (let i = 0; i <= midpoint; i++) {
      first.push(array[i]);
    }
    //second half
    for (let i = midpoint + 1; i < length; i++) {
      second.push(array[i]);
    }
    result.push(first, second);
    return result;
  }
}

function halvsiesSolution(array) {
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  return [firstHalf, secondHalf];
}

//Test Cases
// halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
// halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
// halvsies([5]);                // [[5], []]
// halvsies([]);                 // [[], []]

//Find the Duplicate
function findDup(array) {
  let sortedArray = array.slice().sort();
  let result = sortedArray.filter((number, index) => {
    return number === sortedArray[index + 1];
  });
  return result[0];
}

//Test Cases
// findDup([1, 5, 3, 1]);                                // 1
// findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
//          38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
//          14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
//          78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
//          89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
//          41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
//          55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
//          85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
//          40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
//           7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73
// console.log(findDup([1, 2, 3]));

//Combine Two Lists (Alternating)
function interleave(array1, array2) {
  let result = [];
  for (let i = 0; i < array1.length; i++) {
    result.push(array1[i], array2[i]);
  }
  return result;
}

//Test Cases
// console.log(interleave([1, 2, 3], ['a', 'b', 'c']));    // [1, "a", 2, "b", 3, "c"]

//Multiplicative Average
function multiplicativeAverage(integerArray) {
  const initialValue = 1;
  let sum = integerArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue, initialValue
  );
  let avg = (sum / integerArray.length).toFixed(3);
  return avg;
}

//Test Cases
// multiplicativeAverage([3, 5]);                   // "7.500"
// multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

//Multiply Lists
function multiplyList(array1, array2) {
  let result = [];
  array1.forEach((element, index) => result.push(element * array2[index]));
  return result;
}
//Test Cases
// multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

//List of Digits
function digitList(number) {
  let newArray = String(number).split('');
  let result = newArray.map(element => Number(element));
  return result;
}
//Test Cases
// digitList(12345);       // [1, 2, 3, 4, 5]
// digitList(7);           // [7]
// digitList(375290);      // [3, 7, 5, 2, 9, 0]
// digitList(444);         // [4, 4, 4]

//How Many?
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(array) {
  let result = {};
  array.forEach(elem => {
    if (result[elem]) {
      result[elem] += 1;
    } else result[elem] = 1;
  });
  for (let elem in result) {
    console.log(`${elem} => ${result[elem]}`);
  }
}

// countOccurrences(vehicles);

//Array Average
function average(intArray) {
  let sum = intArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue, 0
  );
  return Math.floor(sum / intArray.length);
}

//Test Cases
// average([1, 5, 87, 45, 8, 8]);       // 25
// average([9, 47, 23, 95, 16, 52]);    // 40

//After Midnight (part 1)
function timeOfDay(integer) {
  let minutes = integer % 60;
  let hours = Math.floor(integer / 60) % 24;
  if (minutes < 0) {
    minutes = 60 + minutes;
  }
  if (hours < 0) {
    hours = 24 + hours;
  }
  let result = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`;
  return result;
}

//Test Cases
// console.log(timeOfDay(0) === "00:00");
// console.log(timeOfDay(-3) === "23:57");
// console.log(timeOfDay(35) === "00:35");
// console.log(timeOfDay(-1437) === "00:03");
// console.log(timeOfDay(3000) === "02:00");
// console.log(timeOfDay(800) === "13:20");
// console.log(timeOfDay(-4231) === "01:29");

//After Midnight (part 2)
function afterMidnight(timeString) {
  let [hours, minutes] = timeString.split(":");
  hours %= 24;
  minutes = Number(minutes);
  return (hours * 60) + minutes;
}

function beforeMidnight(timeString) {
  let [hours, minutes] = timeString.split(":");
  hours %= 24;
  if (hours > 0) {
    hours = 24 - hours;
  }
  minutes = Number(minutes);
  return (hours * 60) - minutes;
}

//Test Cases
// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
// console.log(afterMidnight("12:34") === 754);
// console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);

// afterMidnight("00:00");
// afterMidnight("12:34");
// afterMidnight("24:00");
// beforeMidnight("00:00");  // 0
// beforeMidnight("12:34");  // 686
// beforeMidnight("24:00");  // 0
// beforeMidnight("23:57");  // 3
// beforeMidnight("22:00");  // 120
// beforeMidnight("02:00");  // 1320


