import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home/Home";
import MyNavBar from "../NavBar/MyNavBar";
import AuthService from "../Auth/Auth-service";
import Signup from "../Auth/Signup";
import Login from "../Auth/Login";
import Portfolio from "../User/Portfolio";
import MyProperties from "../User/MyProperties";
import Projects from "../Projects/Projects";
import Manage from "../Manage/Manage";
import Properties from "../Properties/Properties";
import PropertyPage from "../Properties/PropertyPage/PropertyPage";
import LeaseApplication from "../Properties/Lease/LeaseApplication/LeaseApplication";
import EditProperty from "../Properties/EditProperty/EditProperty";
import LeasePdf from "../Properties/Lease/LeasePdf/LeasePdf";

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
    //console.log("calling the function", userObj);
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
            render={props => {
              if (this.state.loggedInUser) {
                return (
                  <Portfolio
                    {...props}
                    fetchUser={() => this.fetchUser}
                    setTheUserInTheAppComponent={this.getTheUser}
                    theUser={this.state.loggedInUser}
                  />
                );
              } else {
                return (
                  <Login
                    {...props}
                    setTheUserInTheAppComponent={this.getTheUser}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/myProperties"
            render={props => {
              if (this.state.loggedInUser) {
                return (
                  <MyProperties
                    {...props}
                    fetchUser={() => this.fetchUser}
                    setTheUserInTheAppComponent={this.getTheUser}
                    theUser={this.state.loggedInUser}
                  />
                );
              } else {
                return (
                  <Login
                    {...props}
                    setTheUserInTheAppComponent={this.getTheUser}
                  />
                );
              }
            }}
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
            render={props => {
              if (this.state.loggedInUser) {
                return <LeaseApplication {...props} />;
              } else {
                return (
                  <Login
                    {...props}
                    setTheUserInTheAppComponent={this.getTheUser}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/properties/edit/:id"
            render={props => {
              if (this.state.loggedInUser) {
                return <EditProperty {...props} />;
              } else {
                return (
                  <Login
                    {...props}
                    setTheUserInTheAppComponent={this.getTheUser}
                  />
                );
              }
            }}
          />
          <Route
            exact
            path="/lease/:id"
            render={props => {
              if (this.state.loggedInUser) {
                return (
                  <LeasePdf theUser={this.state.loggedInUser} {...props} />
                );
              } else {
                return (
                  <Login
                    {...props}
                    setTheUserInTheAppComponent={this.getTheUser}
                  />
                );
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
