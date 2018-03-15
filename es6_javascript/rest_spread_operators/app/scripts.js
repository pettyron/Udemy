// REST SPREAD OPERATORS | Purpose is to write less code

function addNumbers(numbers) {
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers([1, 2, 3, 4, 5]);

// What if we wanted to sum numbers but they're not in an array but instead they're arguments like this
function addNumbers(a, b, c, d, e) {
  const numbers= [a, b, c, d, e];

  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);

// However this above is a lot of syntax and possibly not well placed logic | Rest operator can solve this by capturing lists of arguments
function addNumbers(...numbers) { // This allows us to keep the arguments unspecified
  return numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
}

addNumbers(1, 2, 3, 4, 5);

// The rest operator captures or gather together arguments/variables and the spread operator helps to flatten or spread them out.
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

defaultColors.concat(userFavoriteColors);

// Above refactored to use spread
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
[ ...defaultColors, ...userFavoriteColors ];

/*
  So what exactly is happening here with the spread operator...
  We created a new array, then inside we referenced a current array, then flattened them out with the spread operator and repeated the process.

  So what is the purpose of this?
  - This code is slightly more clear in logic.
  - Another benefit is that adding more records later on becomes less cluttered and approachable.
  - New single elements can be easily added in that are not even part of an array.
*/

// Example of REST and SPREAD together
function validateShoppingList(...items) { // here we use rest to gather arguments
    // Here we will use spread to build and flatten out a list
    if (items.indexOf('milk') < 0) {
      // milk always needs to be in our shopping list
      return [ 'milk', ...items ];
    }
    return items;
}
validateShoppingList('oranges', 'bread', 'eggs');

// real life use case for REST | Authoring a JS library for fancy math calculations
const MathLibrary = {
  calcProduct(a, b) {
    return a * b;
  }
};

// complaints by users is calcProduct is a ridiculous method name. Changing it as is could break a ton of code.
// So now we mitigate the problem we add a new method that does the same thing but named multiply.

const MathLibrary = {
  calcProduct(a, b) {
    return a * b;
  },
  multiply(a, b) {
    return a * b;
  }
};

// unfortunately there is now duplicate logic. we should refactor this even further.
const MathLibrary = {
  calcProduct(...rest) {
    console.log('Please use the multiply method instead');
    return this.multiply(...rest);
  },
  multiply(a, b) {
    return a * b;
  }
};

// The benefit is we get rid of duplicate logic, we have code where we don't limit arguments as many such methods may need to be depricated over time and then the old signatures get passed to the new signature. Once the old signatures have totally passed into the new signature the depricated method can then be safely eliminated.
