// Generator Delegation

// In addition to the engineeringTeam we want a testingTeam

const testingTeam = {
  lead: 'Amanda',
  tester: 'Bill'
};

const engineeringTeam = {
  testingTeam,
  size: 3,
  department: 'Engineering',
  lead: 'Jill',
  manager: 'Alex',
  engineer: 'Dave'
};

// We only want to iterate over the employees

// Step 1 - We first call the iterator function
function* TeamIterator(team) {
  yield team.lead;
  yield team.manager;
  yield team.engineer;
  // We call the testingTeamGenerator and assign to the testingTeam
  // We want the for loop to know that this generator has its own yield statements it has to take into account
  // This is where yield* comes into play. It's almost like a trap door that tricks the for of loop to fall into it
  const testingTeamGenerator = TestingTeamIterator(team.testingTeam);
  // yield*
  yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
  yield team.lead;
  yield team.tester;
}

const names = [];
// how do we combine the two iterators to gather them together?
for (let name of TeamIterator(engineeringTeam)) {
  names.push(name);
}
names;

// ---------------------------- //

// Let's refactor the code above and make it more concise and clean (found in symbol-iterator.js)
