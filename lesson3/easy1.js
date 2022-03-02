//Q3
//let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };
//ages.hasOwnProperty("Spot");

//Q4
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.
let result = munstersDescription[0].toUpperCase() + munstersDescription.slice(1).toLowerCase();

//Q6
let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };
let additionalAges = { Marilyn: 22, Spot: 237 };
Object.assign(ages, additionalAges);

//Q7
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

str1.includes("Dino");
str2.includes("Dino");

//Q10
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '
let idx = advice.indexOf("house");
console.log(advice.slice(0, idx));

