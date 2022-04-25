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

