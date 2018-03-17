// When to use Classes

// React is one of those places where classes are frequently used

// Old way of dealing with prototypal inheritance in React
React.createClass({
  doSomething() {
    // Something...
  },
  doSomethingElse() {
    // Something else...
  }
});

// Now React uses built in es6 Classes
class MyComponent extends Component {
  doSomething() {
    // Something...
  }
  doSomethingElse() {
    // Something else...
  }
}
