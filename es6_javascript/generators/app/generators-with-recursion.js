// Generators with recursion

// Performing operations over a tree data structure
class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  // create a generator | array helpers and callbacks don't integrate with generators
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment('good comment', []),
  new Comment('bad comment', []),
  new Comment('meh', [])
];

const values = [];

for (let value of tree) {
  values.push(value);
}
