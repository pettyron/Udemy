function makeAjaxRequest(url, method) {
  if (!method) {
    method = 'GET';
  } // making checks everywhere like this gets old fast
  // logic to make the request
}

// Make use of es6 default arguments in functions
function makeAjaxRequest(url, method = 'GET') {
  // setting the default argument above ^^^ will not override an actual assigned value
}

makeAjaxRequest('google.com', null); // if you truly don't know what the value is use null it won't be overridden
makeAjaxRequest('google.com', 'POST'); // Here the method is changed to POST

// Complex use case for default arguments

// Creating a function that makes a user object
function User(id) {
  this.id = id;
}

// Random id generator
function generateId() {
  return Math.random() * 999999;
}

// Concept of an admin user
function createAdminUser(user) {
  user.admin = true;

  return user;
}

// In the current set up we now have an issue where functions begin nesting to generate things
createAdminUser(new User(generateId()));

/*
  This is now a great use case for default function arguments.
  In practice we don't want to have to create a new user from scratch everytime and pass it in. It would be nice to just call the function and go.
*/

// We can simply refactor our code by moving the new User function into the creation function like this.
function User(id) {
  this.id = id;
}

function generateId() {
  return Math.random() * 999999;
}

function createAdminUser(user = new User(generateId())) {
  user.admin = true;

  return user;
}

createAdminUser();
