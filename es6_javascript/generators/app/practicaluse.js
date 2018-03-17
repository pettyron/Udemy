// The big reveal on Generators
function* colors() {
  yield 'red';
  yield 'blue';
  yield 'green';
}

// Generators work perfectly with for of loops
const myColors = [];
for (let color of colors()) {
  myColors.push(color);
}
myColors;

/*
Every time we yield a value it creates a single run in the for loop.
We don't need to worry about next the for loop just plain works.

We can use generators to iterate over any kind of data structure not just arrays.
*/

// ------------------------------------- //

const engineeringTeam = {
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// We only want to iterate over the employees

function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
