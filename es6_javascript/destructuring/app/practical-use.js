// When to use destructuring | What does it do for us?

// Write a function that takes a username and password and save to database
function signup(username, password) {
  // TODO: create new user
}

signup('myname', 'mypassword');

// maybe some time passes and now when a user signs up they need to provide an email, date of birth and city

function signup(username, password, email, dateOfBirth, city) {
  // TODO: create new user
}

signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York');

// updating can be prone to mistakes or errors

// More time passes and code base grows
function signup(username, password, email, dateOfBirth, city) {
  // TODO: create new user
}

// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code
// other code

signup('myname', 'mypassword', 'myemail@example.com', '1/1/1990', 'New York'); // now this becomes more challenging to keep in order with the arguments in the function

// Clean up and refactor using destructuring
// Now the arguments are destructured and now the order in which they are pulled of does not matter.
// In longer or more verbose arguments this is important
function signup({ username, password, email, dateOfBirth, city }) {
  // TODO: create new user
}

const user = {
  username: 'myname',
  password: 'mypassword',
  email: 'myemail@example.com',
  dateOfBirth: '1/1/1990',
  city: 'New York'
}

signup(user);
