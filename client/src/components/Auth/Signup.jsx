import React, { Component } from "react";
import AuthService from "./Auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .signup(username, password)
      .then(theUserObject => {
        this.setState({
          username: "",
          password: ""
        });
        this.props.setTheUserInTheAppComponent(theUserObject);
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        {/* <!-- Login  --> */}
        <form onSubmit={this.handleFormSubmit} />
        <h1>Sign Up</h1> <span className="caret" />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="col-md-12">
              <div className="location-center">
                <form id="signup-form" onSubmit={this.handleFormSubmit}>
                  <label htmlFor="username">Username</label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                    placeholder="User Name"
                  />
                  <label htmlFor="password">Password</label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    value="Signup"
                    className="btn btn-outline-info my-2 my-sm-0"
                  >
                    Signup
                  </button>
                  <p>or</p>
                  Login via
                  <div className="social-buttons">
                    <a
                      href="/auth/google"
                      className="btn btn-outline-danger my-2 my-sm-0"
                    >
                      <i className="fa fa-google" /> Google
                    </a>
                  </div>
                </form>
              </div>
              <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
              </p>
            </div>
          </div>
        </div>
        {/* End Login  */}
      </div>
    );
  }
}

export default Signup;
