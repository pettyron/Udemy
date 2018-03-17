// Classes | Classes help to set up a level of inheritance but are not an absolute solution as under the hood JavaScript is always prototypal inheritance.

// The es5 way to link up inheritance | This is just a verbose boilerplate that becomes inconvenient and confused.
/*

function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return 'vroom';
}

function Toyota(options) {
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function () {
  return 'beep';
}

const toyota = new Toyota({ color: 'red', title: 'Daily Driver' });

toyota;
toyota.drive();
toyota.honk();

*/

// Refactor this Car constructor to utilize a class
class Car { // to add method inside a class we use enhanced object literals
  constructor({ title }) {
    this.title = title;
  } // <- do not use commas to separate inside a class

  drive() {
    return 'vroom';
  }
}

class Toyota extends Car {
  constructor(options) {
    super(options); // Think of super() as the same as calling Car.constructor | Whenever you call super you must pass the arguments from the parent constructor
    // Usually don't want to use destructuring because you want to access the parent options
    this.color = options.color;
  }

  honk() {
    return 'beep';
  }
}

const toyota = new Toyota({ color: 'red' });

toyota.honk();
toyota;
