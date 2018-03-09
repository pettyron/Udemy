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

// Another filter example that matches posts and comments

var post = {id: 4, title: 'New Post'};
var comments = [
  {postId: 4, content: 'awesome post'},
  {postId: 3, content: 'it was ok'},
  {postId: 4, content: 'neat'}
];

function commentsForPost(post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  });
}

commentsForPost(post, comments);

// Another filter that works opposite of filter but uses filter

var numbers = [10, 20, 30, 40];

function reject(array, iteratorFunction) {
  return array.filter(function (arr) {
    return !iteratorFunction(arr);
  });
}

var lessThanFifteen = reject(numbers, function(number) {
  return number > 15;
});

lessThanFifteen;

for (var i = 0; i < array.length; i++) {
  array[i]
}
