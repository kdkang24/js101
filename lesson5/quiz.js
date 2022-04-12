const ARR = [
  { one: '1', two: 2 },
  [ { four: 5, three: 6 }, 'three' ],
  'three',
  { '2': 'two', '3': 'three' }
];

// console.log(ARR[2]);
// console.log(ARR[1][1]);
// console.log(ARR[3]['3']);
// console.log(ARR[3][3]);

let todoLists = [ //array
  { //object
    id: 1, //key
    listName: 'Groceries', //key
    todos: [  //key => array => subobjects
      { id: 1, name: 'Bread', completed: false },
      { id: 2, name: 'Milk', completed: false },
      { id: 3, name: 'Apple Juice', completed: false }
    ]
  }
];

console.log(todoLists.todos);