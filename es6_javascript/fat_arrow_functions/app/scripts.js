/* const add = (a, b) => {
  return a + b;
} */

// abbreviate the above even more | whenever there is a single expression we can remove curly braces and remove the return keyword
// We get an implicit return on the single line arrow function
// Only use this when things are concise and easy to read
const add = (a, b) => a + b;

const newSum = add(1, 2);
newSum;

// With arrow functions, if there is only one argument the parenthesis are not needed
// More arguments require the parenthesis
// No arguments or function parameters requires empty parenthesis

const numbers = [1, 2, 3];

numbers.map(number => 2 * number); // much more compact than this below

numbers.map(function (number) {
  return 2 * number;
});

// One more issue arrow functions solve
const team = {
  members: [
    'Jane',
    'Bill'
  ],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map(function (member) {
      return `${member} is on ${this.teamName}`;
    });
  }
}; // This function will return TypeError: Cannot read property 'teamName' of undefined. This is because of keyword this scope
// The function gets passed off somewhere else in the code base and then the value of this is then lost
// Arrow functions give us a lexical this, meaning, the placement of the term depends on how it's interpreted or evaluated
// So we fix the above problem with the arrow function as such
const team2 = {
  members: [
    'Jane',
    'Bill'
  ],
  teamName: 'Super Squad',
  teamSummary: function () {
    return this.members.map((member) => {
      return `${member} is on ${this.teamName}`;
    });
  }
};

team2.teamSummary();

/*
Arrow functions bind the value of 'this' to the surrounding context, and sometimes this isn't the behavior we expect.  The code below has an object that represents a users profile.  The profile has a 'name' currently.  Add another key to this object called 'getName'.  'getName' should be a function that returns the profiles name, using 'this.name'.  Does the solution work with a fat arrow function or will you have to use a function keyword instead?

In this context an arrow function will return an undefined property. Here standard function syntax is proper.
*/

// Like this works
const profile = {
    name: 'Alex',
    getName: function () {
        return this.name
    }
};

profile.getName();

// Like this will not
const profile2 = {
    name: 'Alex',
    getName: () => {
        return this.name
    }
};
