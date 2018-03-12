function getMessage() {
  return `The year is ${new Date().getFullYear()}`; // returns the current year
}

getMessage();

// A more complex example
const device_id = 4;
const guid = 20;
const username = "hello";

const data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;

function doubleMessage(number) {
  return `Your number doubled is ${(2 * number)}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`; // When doing a params based concat like this they must be in their own interpolation
}
