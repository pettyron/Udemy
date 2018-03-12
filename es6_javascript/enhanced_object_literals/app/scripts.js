// Enhanced Object Literals

function createBookShop(inventory) {
  return {
    inventory: inventory,
    inventoryValue: function () {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle: function (title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// We can refactor this code using enhanced object literals
// Whenever you make reference to a key and a value of something with the exact same name it can be just that single statement
// Where there is a key value pair where the value is a function the colon and function keyword can be omitted

function createBookShop(inventory) {
  return {
    inventory,
    inventoryValue() {
      return this.inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title) {
      return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { title: 'Harry Potter', price: 10 },
  { title: 'Eloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// Another example the syntax from the example uses jQuery ajax (which I would never use but I digress)
function saveFile(url, data) {
  $.ajax({ url, data, method: 'POST' }); // enhanced object literals allow condensing url: url and data: data here | es6 convention states to move any single object literals to the left and those with key, value pairs still stay to the right
}

const url = 'http://fileupload.com';
const data = { color: 'red' };

saveFile(url, data);
