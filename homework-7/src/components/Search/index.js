import React, { Component } from 'react';
import { connect } from 'react-redux';

import { searchFetchRequest } from '../../actions/search';

class Search extends Component {
  state = {
    query: ''
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  search = () => {
    this.props.searchFetchRequest(this.state.query);
  };

  render() {
    return (
      <div>
        <h1>Search</h1>
        <div className="form">
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};

const mapDispatchToProps = {
  searchFetchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
