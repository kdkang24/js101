//Q1
let advice = "Few things in life are as important as house training your pet dinosaur.";

advice.replaceAll('important', 'urgent');

//Q2
//let numbers = [1, 2, 3, 4, 5];
//numbers.reverse();
//console.log(numbers.slice().reverse()); // [ 5, 4, 3, 2, 1 ]
//console.log(numbers);

//numbers.sort((num1, num2) => num2 - num1);
//console.log(numbers.slice().sort((num1, num2) => num2 - num1));
//console.log(numbers); // [ 5, 4, 3, 2, 1 ]

//Q3
//let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

//console.log(numbers.includes(number1));
//console.log(numbers.includes(number2));

//Q4
let famousWords = "seven years ago...";
famousWords = "Four score and " + famousWords;

//Q5
let arr = [1, 2, 3, 4, 5];
arr.splice(2, 1);

//Q6
//let flintstones = ["Fred", "Wilma"];
//flintstones.push(["Barney", "Betty"]);
//flintstones.push(["Bambam", "Pebbles"]);

//flintstones = [].concat(...flintstones);

//Q7
//let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

//let barney = [Object.keys(flintstones)[2], flintstones.Barney];
//console.log(barney);
//console.log(Object.entries(flintstones)[2]);

//Q10
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(char => char === 't').length);
console.log(statement2.split('').filter(char => char === 't').length);