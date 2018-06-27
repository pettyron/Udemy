import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) { // constructor is reserved for implementing set up in a class
    super(props);

    this.state = { term: '' }; // record the change on search term (only inside the constructor is state managed like this)
  }

  render() { // always define a render method and return some JSX
    return (
      <div className="col-12">
        <input
          className="form-control"
          value={ this.state.term }
          onChange={ event => this.onInputChange(event.target.value) } />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

// functional component
// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;

/*
  State: Is a plain JS object that is used to record and react to user events

  Every class based component has its own state object. Conversely, functional components have no state.

  Whenever a component's state is changed the component immediately re-renders and forces all of its children to re-render
*/
