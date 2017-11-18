import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";
import { addListener, removeListener, isAuthorized } from "../../AuthorizeApi";
import Auth from "../Auth/Auth";
import Home from "../Home/Home";
import Private from "../Private/Private";
import Public from "../Public/Public";
import Navigation from "../Navigation/Navigation";

class App extends Component {
  state = {
    isAuthorized
  };

  componentDidMount() {
    addListener(this.handleAuthorize);
  }

  componentWillUnmount() {
    removeListener(this.handleAuthorize);
  }

  handleAuthorize = isAuthorized => {
    this.setState({ isAuthorized });
  };

  render() {
    const { isAuthorized } = this.state;

    return (
      <div className="app">
        <Navigation />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" component={Auth} />
            {isAuthorized ? (
              <Route path="/private" component={Private} />
            ) : null}
            <Route path="/public" component={Public} />
            <Redirect from="/private" to="/auth" />
            {!isAuthorized ? <Redirect from="*" to="/" /> : null}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
