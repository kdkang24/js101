let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};


function selectFruit(obj) {
  let result = {};
  let produceKeys = Object.keys(obj);
  for (let counter = 0; counter < produceKeys.length; counter++) {
    let currentKey = produceKeys[counter];
    let currentValue = obj[currentKey];

    if (currentValue === "Fruit") {
      result[currentKey] = currentValue;
    }
  }
  return result;
}


//console.log(Object.entries(produce).length);


selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }
console.log(selectFruit(produce));
