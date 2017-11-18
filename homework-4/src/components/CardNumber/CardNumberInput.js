import React, { Component } from "react";
import PropTypes from "prop-types";

class CardNumberInput extends Component {
  state = {
    number: ""
  };

  static propTyes = {
    cardNumber: PropTypes.string.isRequired
  };

  static defaultProps = {
    cardNumber: ""
  };

  componentDidMount() {
    this.setState({
      number: this.format(this.props.cardNumber)
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      number: this.format(nextProps.cardNumber)
    });
  }

  handleChange = e => {
    const { value } = e.target;
    const { onChange } = this.props;

    this.setState({
      number: this.format(value)
    });

    onChange(this.normalize(value));
  };

  format(number) {
    if (number !== null) {
      return number
        .toString()
        .replace(/[^\d]/g, "")
        .replace(/(\d{4})(?=(\d{1,4})+([^\d]|$))/g, "$1 ");
    }

    return "";
  }

  normalize(str) {
    return str.replace(/[^\d]/g, "");
  }

  render() {
    return (
      <input
        type="text"
        placeholder="0000 0000 0000 0000"
        value={this.state.number}
        onChange={this.handleChange}
        maxLength="19"
      />
    );
  }
}

export default CardNumberInput;
