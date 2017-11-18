import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Navigation.css";

class Navigation extends Component {
  render() {
    return (
      <div className="header">
        <div className="container">
          <ul className="menu">
            <li>
              <NavLink
                to="/"
                exact
                className="menu-link"
                activeClassName="active"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/auth"
                className="menu-link"
                activeClassName="active"
              >
                Auth
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/private"
                className="menu-link"
                activeClassName="active"
              >
                Private
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/public"
                className="menu-link"
                activeClassName="active"
              >
                Public
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
