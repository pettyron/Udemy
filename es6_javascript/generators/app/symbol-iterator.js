// Symbol.Iterator is a tool that teaches objects how to respond to the for of loop
// It's a weird piece of syntax

// Tell the testing team how to behave when a for of loop operates on it
const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill',
  // The for of loop looks for the Symbol.iterator key and this
  [Symbol.iterator]: function* () { // <-- This is a valid es6 key. This is key interpolation this is not forming an array.
    yield this.lead; // now we can use the this keyword because the function is inside the testingTeam object which this references
    yield this.tester;
  }
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave',
  [Symbol.iterator]: function* () {
    yield this.lead;
    yield this.manager;
    yield this.engineer;
    yield* this.testingTeam;
  }
};

const names = [];
for (let name of engineeringTeam) {
  names.push(name);
}
names;

// For any custom iteration Symbol.iterator will have to be instantiated. Things like arrays already have Symbol.iterator built in.
