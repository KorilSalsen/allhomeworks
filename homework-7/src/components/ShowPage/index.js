import React, { Component } from 'react';
import { connect } from 'react-redux';

import './style.css';
import { showRequest } from '../../actions/shows';

class ShowPage extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.showRequest(id);
  }

  onBack = e => {
    e.preventDefault();

    this.props.history.goBack();
  };

  render() {
    const { isFetching, show, error } = this.props;

    return (
      <div className="shows wrapper">
        {isFetching && <div className="loading">Loading...</div>}
        {error && <div className="error">Connection error</div>}
        {show && (
          <div>
            <h1>{show.name}</h1>
            <div className="img-wrapper">
              <img src={show.image.medium} alt={show.name} />
            </div>
            <div
              className="about"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
            <a className="more-link" href={show.url} target="_blank">
              see more
            </a>
          </div>
        )}
        <div>
          <a href="" className="back" onClick={this.onBack}>
            Back
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state.shows;
};

const mapDispatchToProps = {
  showRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);
