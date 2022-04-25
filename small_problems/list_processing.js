//Sum of Digits
function sum(int) {
  let numArray = String(int).split('');
  let result = numArray.reduce((sum, digit) => Number(sum) + Number(digit), 0);
  return result;
}

//Test Cases
// sum(23);           // 5
// sum(496);          // 19
// sum(123456789);    // 45

//Alphabetical Numbers
function alphabeticNumberSort(numArray) {
  let wordArray = "zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(' ');
  numArray.sort((a, b) => {
    if (wordArray[a] > wordArray[b]) {
      return 1;
    } else if (wordArray[a] < wordArray[b]) {
      return -1;
    } else {
      return 0;
    }
  });
  return numArray;
}

//Test Cases
// alphabeticNumberSort(
//   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// // [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
// alphabeticNumberSort([1, 2, 3]); // [1, 3, 2]

//Multiply All Pairs
function multiplyAllPairs(array1, array2) {
  let result = [];
  array1.forEach(num1 => {
    array2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });
  result.sort((a, b) => a - b);
  return result;
}

//Test Cases
// multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

//Leading Substrings
function leadingSubstrings(string) {
  let result = [];
  for (let i = 1; i <= string.length; i++) {
    result.push(string.slice(0, i));
  }
  return result;
}
//Test Cases
// leadingSubstrings('abc');      // ["a", "ab", "abc"]
// leadingSubstrings('a');        // ["a"]
// leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//All Substrings
function substrings(string) {
  let result = [];
  for (let i = string.length; i > 0; i--) {
    let substring = string.slice(-i);
    result = result.concat(leadingSubstrings(substring));
  }
  return result;
}

//Test Cases
// substrings('abcde');

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]

//Palindromic Substrings
function palindromes(string) {
  let result = substrings(string).filter(isPalindrome);

  //Helper function
  function isPalindrome(string) {
    return string.length > 1 && string === string.split('').reverse().join('');
    // let reversed = string.split('').reverse().join('');
    // if (string.length > 1 && string === reversed) {
    //   return true;
    // } else {
    //   return false;
    // }
  }
  return result;
}

//Test Cases
// palindromes('abcd');       // []
// palindromes('madam');      // [ "madam", "ada" ]

// palindromes('hello-madam-did-madam-goodbye');
// // returns
// // [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
// //   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
// //   "-madam-", "madam", "ada", "oo" ]

// palindromes('knitting cassettes');
// // returns
// // [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

//Sum of Sums
function sumOfSums(numArray) {
  let result = 0;
  for (let i = 1; i <= numArray.length; i++) {
    let subarray = numArray.slice(0, i);
    let sum = subarray.reduce((a, b) => a + b);
    result += sum;
  }
  return result;
}

//Test Cases
// sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
// sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
// sumOfSums([4]);              // 4
// sumOfSums([1, 2, 3, 4, 5]);  // 35

//Grocery List
function buyFruit(nestedFruitArray) {
  let result = [];
  nestedFruitArray.forEach(subarray => {
    let [fruit, count] = [subarray[0], subarray[1]];
    for (let counter = 0; counter < count; counter++) {
      result.push(fruit);
    }
  });
  return result;
}

//Test Cases
// buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// // returns ["apple", "apple", "apple", "orange", "banana", "banana"]

//Inventory Item Transactions
function transactionsFor(itemID, transactionList) {
  let result = transactionList.filter(transaction => transaction['id'] === itemID);
  return result;
}

//Test Cases
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// transactionsFor(101, transactions);
// // returns
// // [ { id: 101, movement: "in",  quantity:  5 },
// //   { id: 101, movement: "in",  quantity: 12 },
// //   { id: 101, movement: "out", quantity: 18 }, ]

//Inventory Item Availability
function isItemAvailable(itemID, transactionList) {
  let itemTransactions = transactionsFor(itemID, transactionList);
  let quantity = 0;
  itemTransactions.forEach(tx => {
    if (tx['movement'] === 'in') {
      quantity += tx['quantity'];
    } else {
      quantity -= tx['quantity'];
    }
  });
  return quantity > 0;
}

//Test Cases
// let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
//                      { id: 105, movement: 'in',  quantity: 10 },
//                      { id: 102, movement: 'out', quantity: 17 },
//                      { id: 101, movement: 'in',  quantity: 12 },
//                      { id: 103, movement: 'out', quantity: 20 },
//                      { id: 102, movement: 'out', quantity: 15 },
//                      { id: 105, movement: 'in',  quantity: 25 },
//                      { id: 101, movement: 'out', quantity: 18 },
//                      { id: 102, movement: 'in',  quantity: 22 },
//                      { id: 103, movement: 'out', quantity: 15 }, ];

// isItemAvailable(101, transactions);     // false
// isItemAvailable(103, transactions);     // false
// isItemAvailable(105, transactions);     // true
