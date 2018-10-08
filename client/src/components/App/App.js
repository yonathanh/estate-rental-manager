import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import MyNavBar from "../NavBar/MyNavBar";
import AuthService from "../Auth/Auth-service";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Portfolio from "../User/Portfolio";
import Projects from "../Projects/Projects";
import Manage from "../Manage/Manage";
import Properties from "../Properties/Properties";
import PropertyPage from "../Properties/PropertyPage/PropertyPage";
import LeaseApplication from "../Properties/Lease/LeaseApplication/LeaseApplication";

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
    console.log("calling the function", userObj);
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
          <Route
            exact
            path="/portfolio"
            render={props => (
              <Portfolio
                {...props}
                fetchUser={() => this.fetchUser}
                setTheUserInTheAppComponent={this.getTheUser}
                theUser={this.state.loggedInUser}
              />
            )}
          />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/manage" component={Manage} />
          <Route
            exact
            path="/properties"
            render={props => (
              <Properties {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/properties/:id"
            render={props => (
              <PropertyPage {...props} theUser={this.state.loggedInUser} />
            )}
          />
          <Route
            exact
            path="/properties/lease/:id"
            component={LeaseApplication}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
