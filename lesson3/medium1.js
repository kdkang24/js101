//Q1
function flintstonesRock() {
  let str = "The Flintstones Rock!";
  for (let counter = 0; counter < 10; counter++) {
    console.log(str);
    str = ' ' + str;
  }
}

//Q2
let munstersDescription = "The Munsters are creepy and spooky.";
function caseSwap(string) {
  let answer = '';
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toLowerCase()) {
      answer += string[i].toUpperCase();
    } else {
      answer += string[i].toLowerCase();
    }
  }
  return answer;
}

//console.log(caseSwap(munstersDescription));

//Q3
function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(-10));

//Q8
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

//function to modify in place the age and gender of each item in object
function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

