import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    // Go fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <div className="col-12 py-3">
        <form
          onSubmit={ this.onFormSubmit }
          className="input-group">
          <div className="input-group">
            <input
              type="search"
              className="form-control"
              placeholder="Get a five-day forecast in your favorite cities"
              value={ this.state.term }
              onChange={ this.onInputChange } />
            <span className="input-group-append">
              <button type="submit" className="btn btn-secondary">Search</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
