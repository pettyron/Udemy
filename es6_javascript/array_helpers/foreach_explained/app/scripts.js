// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Create a variable to hold the sum
var sum = 0;

function adder(number) {
  sum += number;
}

// Loop over the array, incrementing the sum variable
numbers.forEach(adder);

// Print the sum variable
document.querySelector('.sum').innerHTML = sum;

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];

function calculateImgArea(image) {
    var totalArea = image.height * image.width;
    areas.push(totalArea);
}

images.forEach(calculateImgArea);

console.log(areas);
