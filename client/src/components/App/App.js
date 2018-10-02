import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import MyNavBar from "../NavBar/MyNavBar";
import AuthService from "../Auth/Auth-service";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Projects from "../Projects/Projects";
import Manage from "../Manage/Manage";
import Properties from "../Properties/Properties";
import PropertyDetails from "../Properties/PropertyDetails/PropertyDetails";

import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  getTheUser = userObj => {
    this.setState({
      loggedInUser: userObj
    });
  };

  fetchUser() {
    if (this.state.loggedInUser === null) {
      this.service
        .loggedin()
        .then(response => {
          this.setState({
            loggedInUser: response
          });
        })
        .catch(err => {
          this.setState({
            loggedInUser: false
          });
        });
    }
  }

  render() {
    this.fetchUser();

    return (
      <div className="App">
        <MyNavBar
          userInSession={this.state.loggedInUser}
          setTheUserInTheAppComponent={this.getTheUser}
        />
        <img src={logo} className="App-logo alwaysTop" alt="logo" />
        <Switch>
          <Route
            exact
            path="/login"
            render={props => (
              <div>
                <Login
                  {...props}
                  setTheUserInTheAppComponent={this.getTheUser}
                />
              </div>
            )}
          />
          <Route
            exact
            path="/signup"
            render={props => (
              <Signup
                {...props}
                setTheUserInTheAppComponent={this.getTheUser}
              />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/Manage" component={Manage} />
          <Route exact path="/Properties" component={Properties} />
          <Route exact path="/Properties/:id" component={PropertyDetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
