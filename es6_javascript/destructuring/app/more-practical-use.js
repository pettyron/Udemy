// When to use destructuring | More on array destructuring

// data structuring from an api

// This is the data structure returned from the api
const points = [
  [4, 5],
  [10, 1],
  [0, 40]
];

// The problem is the graphing library did not want to see data in an array of arrays

// The graphing library wanted to see data like this
/*
  [
    { x: 4, y: 5 },
    { x: 10, y: 1 },
    { x: 0, y: 40 }
  ]
*/

// To transform this data we will map over element and destructure off an x and y value. Then we will use improved object literal syntax return x and y values

points.map(([ x, y ]) => {
  return { x, y };
});
