import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../Auth/Auth-service";
import Login from "../Auth/Login";
import "./MyNavBar.css";
import "bootstrap/dist/css/bootstrap.css";

class MyNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedInUser: null };
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loggedInUser: nextProps["userInSession"] });
  }
  logout = () => {
    this.service.logout().then(() => {
      this.props.setTheUserInTheAppComponent(null);
    });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <li className="nav-link navbar-brand">
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-link navbar-brand">
              <Link className="link" to="/Manage">
                Manage
              </Link>
            </li>
            <div className="nav-item">
              <li className="nav-link navbar-brand">
                <Link className="link" to="/Projects">
                  Projects
                </Link>
              </li>
            </div>
            {!this.state.loggedInUser && (
              <div className="nav-item">
                <li className="nav-link navbar-brand">
                  <Link className="link" to="/login">
                    Login
                  </Link>
                </li>
              </div>
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">
                  Action
                </a>
                <a className="dropdown-item" href="/">
                  Another action
                </a>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Something else here
                </a>
              </div>
            </li>
            <li className="nav-item" />
          </ul>
          <div className="nav-item">
            <li className="nav-link navbar-brand">
              <Link className="link" to="/Properties">
                Properties
              </Link>
            </li>
          </div>
          {/* <!-- Login Dropdown --> */}

          {!this.state.loggedInUser && (
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Login
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <form className="dropdown-item" id="form">
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    placeholder="User Name"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <button className="btn btn-outline-info my-2 my-sm-0">
                    Login
                  </button>
                </form>
                <span className="m-2"> or Login via</span>
                <div className="dropdown-item">
                  <a
                    href="/auth/google"
                    className="btn btn-outline-danger my-2 my-sm-0"
                  >
                    <i className="fa fa-google" /> Google
                  </a>
                </div>
                <div className="dropdown-divider" />
                <div className="dropdown-item">
                  Don't have an account?
                  <Link to={"/signup"}> Signup</Link>
                </div>
              </div>
            </li>
          )}

          {/* End Login Dropdown  */}
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
          {this.state.loggedInUser && (
            <div className="nav-item">
              <li className="nav-link navbar-brand">
                <Link to="/projects" style={{ textDecoration: "none" }}>
                  {this.state.loggedInUser.username}
                </Link>
                <button
                  className="btn btn-outline-info my-2 my-sm-0"
                  onClick={() => this.logout()}
                >
                  Log Out
                </button>
              </li>
            </div>
          )}
        </div>
      </nav>
    );
  }
}

export default MyNavBar;
