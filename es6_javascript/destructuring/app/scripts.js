// Destructuring

// An ES5 example code
// Object that represents an expense
var expense = {
  type: 'Business',
  amount: '$45 USD'
};
// reference the type and amount on the object
// var type = expense.type;
// var amount = expense.amount;
// we have now duplicated several terms just to get our reference

// ES6 will now allow us to cut down this duplication using destructuring
const { type, amount } = expense; // { type, amount } is not creating an object but rather it's a reference similar to expense.type and expense.amount

// The variable in the destructured element must be identical to the type.
// If you reference a var in the destructured element that is non-existant it will return undefined.

// Destructuring Arguments Object

// Pull properties off of objects in functions
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary(file) {
  return `The file ${file.name}.${file.extension} is of size ${file.size}`;
};

fileSummary(savedFile);

// refactor to a destructured form
var savedFile = {
  extension: 'jpg',
  name: 'repost',
  size: 14040
};

function fileSummary({name, extension, size}) {
  return `The file ${name}.${extension} is of size ${size}`;
};

fileSummary(savedFile);

// Destructuring Arrays | We can pull individual elements
const companies = [
  'Google',
  'Facebook',
  'Uber'
];

const [ name ] = companies;
const [ name, name2, name3] = companies; // you can reach outside of the bounds of the array but anything out of bounds will return undefined

// To destructure a property use {}, to destructure an element use []

// The rest operator can help in destructuring as well
const [name, ...rest] = companies // returns ['Facebook', 'Uber']

// Destructuring Arrays and Objects together
const companies = [
  { name: 'Google', location: 'Mountain View' },
  { name: 'Facebook', 'Menlo Park' }.
  { name: 'Uber', location: 'San Francisco'}
];

// Goes from outside in
// 1. reach into the array [] access that
// 2. then reach into the object {} and access the first location value
const [{ location }] = companies; // returns 'Mountain View'

//  A new use case
const Google = {
  locations: ['Mountain View', 'New York', 'London']
};

// 1. look into the object (now we got the array)
// 2. Now we provide to destructuring the directions and pull off the first array reference
const { locations: [ location ] } = Google;
// Something like this isn't common
