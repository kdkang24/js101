//Uppercase Check
function isUppercase(string) {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  let result = true;
  for (let index = 0; index < string.length; index++) {
    if (alphabet.includes(string[index].toUpperCase()) &&
    string[index] !== string[index].toUpperCase()) {
      result = false;
      break;
    }
  }
  return result;
}

function isUppercaseLS(string) {
  return string.toUpperCase() === string;
}

//Test Cases
// isUppercase('t');               // false
// isUppercase('T');               // true
// isUppercase('Four Score');      // false
// isUppercase('FOUR SCORE');      // true
// isUppercase('4SCORE!');         // true
// isUppercase('');                // true

//Delete Vowels
function removeVowels(stringArray) {
  const vowels = 'aeiou'.split('');
  let result = [];
  stringArray.forEach(elem => {
    let filtered = '';
    for (let idx = 0; idx < elem.length; idx++) {
      if (!vowels.includes(elem[idx].toLowerCase())) {
        filtered += elem[idx];
      }
    }
    result.push(filtered);
  });
  console.log(result);
}

//Regex option
function removeVowelsLS(stringArray) {
  return stringArray.map(str => str.replace(/[aeiou]/gi, ''));
}

//Test Cases
// removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
// removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
// removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

//Lettercase Counter
function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0};
  const alphabet = 'abcdefghijklmnopqrstuvxyz';
  const lower = alphabet.split('');
  const upper = alphabet.toUpperCase().split('');
  for (i = 0; i < string.length; i++) {
    if (lower.includes(string[i])) {
      result['lowercase'] += 1;
    } else if (upper.includes(string[i])) {
      result['uppercase'] += 1;
    } else {
      result['neither'] += 1;
    }
  }
  return result;
}

//Test Cases
// letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
// letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
// letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
// letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }

//Capitalize Words
function wordCap(string) {
  let wordArray = string.split(' ');
  let result = [];
  wordArray.forEach(word => {
    result.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
  });
  return result.join(' ');
}

//Test Cases
// wordCap('four score and seven');       // "Four Score And Seven"
// wordCap('the javaScript language');    // "The Javascript Language"
// wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

//Swap Case
function swapCase(string) {
  const lower = 'abcdefghijklmnopqrstuvwxyz';
  const upper = lower.toUpperCase();
  let result = string.split('')
    .map(char => {
      if (lower.includes(char)) {
        return char.toUpperCase();
      } else if (upper.includes(char)) {
        return char.toLowerCase();
      } else {
        return char;
      }
    });
  return result.join('');
}

//Test Cases
// swapCase('CamelCase');              // "cAMELcASE"
// swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

//Staggered Caps (part 1)
function staggeredCase(string) {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      result += string[i].toUpperCase();
    } else {
      result += string[i].toLowerCase();
    }
  }
  return result;
}

//Test Cases
// staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
// staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
// staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

//Staggered Caps (part 2)
function staggeredCase(string) {
  let result = '';
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let uppercase = true;

  for (let i = 0; i < string.length; i++) {
    if (alphabet.includes(string[i].toLowerCase()) && uppercase === true) {
      result += string[i].toUpperCase();
      uppercase = false;
    } else if (alphabet.includes(string[i].toLowerCase()) && uppercase === false) {
      result += string[i].toLowerCase();
      uppercase = true;
    } else {
      result += string[i];
    }
  }
  return result;
}

//Test Cases
// console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
// console.log(staggeredCase("ALL CAPS") === "AlL cApS");
// console.log(
//   staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
// );

//How long are you?
function wordLengths(string) {
  if (string === undefined || string.length === 0) {
    return [];
  }
  let result = [];
  let wordArray = string.split(' ');
  wordArray.forEach(word => {
    let wordAndLength = [word, word.length];
    result.push(wordAndLength.join(' '));
  })
  return result;
}

//Test Cases
// wordLengths('cow sheep chicken');
// // ["cow 3", "sheep 5", "chicken 7"]

// wordLengths('baseball hot dogs and apple pie');
// // ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

// wordLengths("It ain't easy, is it?");
// // ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

// wordLengths('Supercalifragilisticexpialidocious');
// // ["Supercalifragilisticexpialidocious 34"]

// console.log(wordLengths(''));      // []
// console.log(wordLengths());        // []

//Search Word (part 1)
// function searchWord(word, text) {
//   const regex = new RegExp(word, 'gi');
//   let matches = text.match(regex);
//   // return matches.length;
//   //If no matches are found, null is returned, so we return 0 if no matches
//   return matches ? matches.length : 0;
// }

//Test Cases
// const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

// searchWord('sed', text);      // 3

//Search Word (part 2)
function searchWord(word, text) {
  const regex = new RegExp(`\\b${word}\\b`, 'gi');
  const matchedText = text.replace(regex, `**${word.toUpperCase()}**`);
  // console.log(matchedText);
  return matchedText;
}

//Test Cases
const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?';

searchWord('sed', text);
// returns
// "**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?"

console.log(searchWord('sed', text) === '**SED** ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, **SED** quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, **SED** quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? **SED** quis autem vel est, iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur blasedbla?');