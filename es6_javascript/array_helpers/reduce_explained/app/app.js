//  Looking at the reduce method
var numbers = [10, 20, 30];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

"---"

numbers.reduce(function (sum, number) {
  return sum + number;
}, 0); // reduce needs an initial value passed into it

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

// Using previous as the first arg because it's the previous value when we last went through the loop
primaryColors.reduce(function (previous, primaryColor) {
  // reduce is one of the few methods where mutating the original is acceptable
  previous.push(primaryColor.color);

  return previous;
}, []); // We want the string values to be passed to an array so the default value should be an empty array

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce(function (sum, number) {
    return sum + number.distance;
}, 0);

/*
Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  The object returned should have the form '{ sitting: 3, standing: 2 }'.  The initial value has been provided to you.
Hint: Don't forget to return the accumulator object (the first argument to the iterator function)
*/
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(previous, deskType) {
    previous.sitting += deskType.type === 'sitting';
    previous.standing += deskType.type === 'standing';
    return previous;
}, { sitting: 0, standing: 0 });

/*
Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.
*/
var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  var analyze;

  return array.reduce(function (acc, number) {
      analyze = acc.find(function (args) {
          return args === number;
      });
      if (!analyze) {
          acc.push(number);
          return acc;
      }
      return acc;
  }, []);
}

unique(numbers);

// Practical use cases for the reduce method

// Job interview whiteboarding exercise for balanced parens
function balancedParens (string) {
  return !string.split('').reduce(function (previous, char) {
    if (previous < 0) {
      return previous;
    }
    if (char === "(") {
      return ++previous;
    }
    if (char === ")") {
      return --previous;
    }
    return previous;
  }, 0);
}

balancedParens('()');
