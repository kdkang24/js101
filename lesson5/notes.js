//Sorting

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}); // => [ 1, 2, 4, 9, 11, 21, 107 ]


// If the callback returns a number less than 0, place a before b.
// If the callback returns a number greater than 0 place b before a.
// If the callback returns 0, leave the relative positions of a and b unchanged.

[2, 11, 9, 4, 107, 21, 1].sort((a, b) => a - b);

//Array Destructuring - Read up on this
[a, b] = [b, a] //swap positions?

//Regex
function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}

/[a-z]/g : Checks whether the character is a lowercase letter between 'a' and 'z'.
/[A-Z]/g : Checks whether the character is an uppercase letter between 'A' and 'Z'.
/[^a-z]/gi : Checks whether the character is neither an uppercase nor a lowercase letter.
g : Tells the regex engine to search the entire string.
i : Tells the regex engine to ignore case.
