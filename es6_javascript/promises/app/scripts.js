// ES6 brings with it its own promise standard natively
let promise = new Promise((resolve, reject) => {
});

promise
  .then(() => console.log('Finally finished!'))
  .then(() => console.log('This one also ran'))
  .catch(() => console.log('Something went wrong'))

// practical application of promises

// fetch function
const url = 'https://jsonplaceholder.typicode.com/posts/'

// To actually get data with fetch you have to call a method on it
fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))

  // Fetch is not great and it's recommended to use an ajax library
  /*

  When an error is thrown a 300 status or above is thrown.
  The expectation is that fetch will catch an error and return our error catch case. It returns the appropriate error but will not enter the reject state. The only time it will hit the catch is if the network request flat out fails.

  Stay away from fetch because it does not behave like most ajax libraries or http request libraries

  */
