import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "./Auth.css";
import { isAuthorized, authorizeUser } from "../../AuthorizeApi";

class Auth extends Component {
  state = {
    isAuthorized,
    email: "",
    password: "",
    showError: false
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = () => {
    const { email, password } = this.state;

    const isAuthorized = authorizeUser(email, password);

    this.setState({
      isAuthorized,
      showError: !isAuthorized
    });
  };

  render() {
    const { email, password, showError, isAuthorized } = this.state;

    return (
      <div className="auth">
        <h1>Authorize</h1>
        {showError ? <p className="error">Wrong password/email</p> : null}
        <div className="form">
          <input
            className="field"
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <input
            className="field"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            placeholder="Password"
          />
          <button className="button" onClick={this.handleSubmit}>
            Login
          </button>
        </div>
        {isAuthorized ? <Redirect to="/" /> : null}
      </div>
    );
  }
}

export default Auth;
