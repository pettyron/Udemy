// Generators are the most brain bending part of es6

// What is a generator?
// A function that can be entered and exited multiple times
function* numbers() { // <-- a generator has the asterisk either on the end of the function keyword or prepended to the function name
  yield; // yield is a keyword in es6
}

const gen = numbers();
gen.next(); // called this object and returned false
gen.next(); // called this object and returned true the yield clearly impacts these gen.next calls

// What does a generator do?

// Iteration with generators

// Generator delegation

// Generators with Symbol.iterator

// ---------------------------------------------
function* shopping() {
  // stuff on the sidewalk

  // walking down the sidewalk

  // go into the store with cash (this is the transition from the sidewalk into the store with our cash, we are pausing execution here)
  const stuffFromStore = yield 'cash';
  // walking to the laundromat (can call yield multiple times)
  const cleanClothes = yield 'laundry';

  // walking back home
  return [ stuffFromStore, cleanClothes ];
}

// stuff in the store
// actually calling this function doesn't invoke anything
const gen = shopping();

// leaving our house with cash (it isn't until we call this first next we invoke the code)
gen.next();

// Walked in to the store, walking up the aisles and purchase our stuff
// leaving the store with groceries (we re-enter the generator right at the yield)
// for every yield we need a next
gen.next('groceries');
gen.next('clean clothes');
