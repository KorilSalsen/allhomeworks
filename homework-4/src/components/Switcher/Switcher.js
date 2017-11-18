import React, { Component, Children } from 'react';

import './Switcher.css';

// Для работы этой компоненты нужно использовать методы React.Children.toArray
// а так же работать с child.type.name и child.type.displayName

class Switcher extends Component {
  state = {
    selectedChild: 0
  };

  handleChangeChild = (e) => {
    e.preventDefault && e.preventDefault();

    const id = +e.target.getAttribute('data-id');

    this.setState({
      selectedChild: id
    });
  };

  render() {
    const childArray = Children.toArray(this.props.children);
    const { selectedChild } = this.state;
    const names = childArray.map((child, index) => {
      const name = child.type.displayName || child.type.name;

      return <a
        href=""
        className={'component-list__name' + (selectedChild === index ? ' active' : '')}
        data-id={index}
        key={name}
        onClick={this.handleChangeChild}
      >
        {name}
      </a>
    });

    return (
      <div>
        <div className="component-list">
          {names}
        </div>
        <div className="component-wrapper">
          {childArray[selectedChild]}
        </div>
      </div>
    );
  }
}

export default Switcher;
