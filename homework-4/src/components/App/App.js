import React, {Component} from 'react';

import './App.css';
import Switcher from '../Switcher/Switcher';
import CardNumberHolder from '../CardNumber/CardNumberHolder';
import ModalButton from '../Modal/ModalButton';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switcher>
          <CardNumberHolder />
          <ModalButton />
        </Switcher>
      </div>
    );
  }
}

export default App;
