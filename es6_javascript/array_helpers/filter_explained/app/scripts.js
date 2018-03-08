var products = [
  {name: 'cucumber', type: 'vegetable'},
  {name: 'banana', type: 'fruit'},
  {name: 'celery', type: 'vegetable'},
  {name: 'orange', type: 'fruit'}
];

var productContent = document.querySelectorAll('.product span');

var filteredProducts = products.filter(function (product) {
  return product.type === 'fruit';
});

console.log(filteredProducts);

productContent[0].innerHTML = filteredProducts[0].name.charAt(0).toUpperCase() + filteredProducts[0].name.slice(1);
productContent[1].innerHTML = filteredProducts[0].type.charAt(0).toUpperCase() + filteredProducts[0].type.slice(1);

productContent[2].innerHTML = filteredProducts[1].name.charAt(0).toUpperCase() + filteredProducts[1].name.slice(1);
productContent[3].innerHTML = filteredProducts[1].type.charAt(0).toUpperCase() + filteredProducts[1].type.slice(1);

var products2 = [
  {name: 'cucumber', type: 'vegetable', quantity: 0, price: 1},
  {name: 'banana', type: 'fruit', quantity: 10, price: 15},
  {name: 'celery', type: 'vegetable', quantity: 30, price: 9},
  {name: 'orange', type: 'fruit', quantity: 3, price: 5}
];

// Type is vegetable, quantity greater than 0 price is less than 10
var newProductList = products2.filter(function (product) {
  return product.type === 'vegetable'
    && product.quantity > 0
    && product.price < 10
});

console.log(newProductList);
