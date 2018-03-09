// Find simple example

var users = [
  {name: 'Jill'},
  {name: 'Alex'},
  {name: 'Bill'}
];

users.find(function (user) {
  return user.name === 'Alex';
});

// Another simple example but using a constructor

function Car(model) {
  this.model = model;
}

var cars = [
  new Car('Buick'),
  new Car('Camaro'),
  new Car('Focus')
];

cars.find(function (car) {
  return car.model === 'Focus';
});

// A little more complex example

var posts = [
  {id: 1, title: 'New Post'},
  {id: 2, title: 'Old Post'}
];

var comment = {
  postId: 1,
  content: 'Great Post'
};

function postForComment(posts, comment) {
  return posts.find(function (post) {
    return post.id === comment.postId;
  });
}

postForComment(posts, comment);

// Complex example for find method where object in an array is the search criteria and this function is a shorthand for this

var ladders = [
  { id: 1, height: 20 },
  { id: 3, height: 25 }
];

function findWhere(array, criteria) {
  return array.find(function (arr) {
      var dataKey = Object.keys(criteria);
      return arr[dataKey] === criteria[dataKey];
  });
}

findWhere(ladders, { height: 25 });
