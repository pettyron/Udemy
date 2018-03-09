// Simple bool evaluation using every array method | Every uses '&&' logic

var computers = [
  {name: 'Apple', ram: 24},
  {name: 'Compaq', ram: 4},
  {name: 'Asus', ram: 32}
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

computers.every(function (computer) {
  return computer.ram > 16; // returns false because not 'every' computers have more than 16 gigs of RAM
});

// Simple example of some array method | Some uses '||' logic
computers.some(function (computer) {
  return computer.ram > 16; // returns true because 'some' computers do have more than 16 gigs of RAM
});

// Another simple example of the two
var names = [
  "Alexandria",
  "Matthew",
  "Joe"
];

names.every(function (name) {
  return name.length > 4;
});

names.some(function (name) {
  return name.length > 4;
});
