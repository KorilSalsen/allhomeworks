import React, { Component } from 'react';

import './Modal.css';
import Modal from './Modal';

class ModalButton extends Component {
  state = {
    isModalShow: false
  };

  showModal = () => {
    this.setState({
      isModalShow: true
    });
  };

  hideModal = () => {
    this.setState({
      isModalShow: false
    });
  };

  render() {
    return (
      <div>
        <button className="modal__btn" onClick={this.showModal}>Modal</button>
        {
          this.state.isModalShow ?
            <Modal hideModal={this.hideModal} /> :
            null
        }
      </div>
    );
  }
}

export default ModalButton;
