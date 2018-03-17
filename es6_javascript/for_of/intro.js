// For Of loops are for iterating over collections of data
const colors = ['red', 'green', 'blue'];

for (let color of colors) {
  console.log(color);
}

// anther example
const numbers = [1, 2, 3, 4];

let total = 0;
for (let number of numbers) {
  total += number;
}

// The reason that the for of loop is good to review is there is a tie in to es6 generators
