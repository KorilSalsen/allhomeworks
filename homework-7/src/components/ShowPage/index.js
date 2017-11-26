import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowPage extends Component {
  render() {
    return <div>ShowPage</div>;
  }
}

const mapStateToProps = state => {
  return state.shows;
};

export default connect(mapStateToProps)(ShowPage);
