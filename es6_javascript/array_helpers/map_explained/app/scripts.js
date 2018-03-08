var cars = [
  {
    model: 'Buick',
    price: 'Cheap'
  },
  {
    model: 'Camaro',
    price: 'expensive'
  }
];

var prices = cars.map(function (car) {
  return car.price;
});

var priceList = document.querySelectorAll('.cars-list p');

priceList[0].innerHTML = prices[0];
priceList[1].innerHTML = prices[1];

var paints = [
    {color: 'red'},
    {color: 'blue'},
    {color: 'green'}
];

var colors = [];

function pluck(array, property) {
    array.map(function (color) {
        colors.push(color[property]);
    });
    return colors;
}

pluck(paints, 'color');

console.log(colors);
