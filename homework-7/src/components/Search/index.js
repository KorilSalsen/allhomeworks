import React, { Component } from 'react';
import { connect } from 'react-redux';
import nanoid from 'nanoid';
import { Link } from 'react-router-dom';

import './style.css';
import { searchRequest } from '../../actions/search';

class Search extends Component {
  state = {
    query: ''
  };

  handleChange = e => {
    this.setState({
      query: e.target.value
    });
  };

  search = e => {
    e.preventDefault();

    this.props.searchRequest(this.state.query);
  };

  renderResult = () => {
    const { result, isFetched } = this.props;

    if (result.length) {
      const items = result.map(r => (
        <li key={nanoid()} className="list-item">
          <Link className="link" to={`/shows/${r.id}`}>
            {r.name}
          </Link>
        </li>
      ));

      return <ul className="list">{items}</ul>;
    } else if (isFetched) {
      return <h3>No results</h3>;
    }

    return null;
  };

  render() {
    const { isFetching, error } = this.props;

    return (
      <div className="search">
        <h1>Search</h1>
        <div>
          <form className="form" onSubmit={this.search}>
            <input
              className="input"
              type="text"
              value={this.state.query}
              onChange={this.handleChange}
            />
            <button className="btn">Search</button>
            {isFetching && <div className="loading">Loading...</div>}
          </form>
          {error && <div className="error">Connection error</div>}
          {this.renderResult()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.search;
};

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
