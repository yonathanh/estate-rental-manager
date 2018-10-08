import React, { Component } from "react";
import AuthService from "./Auth-service";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      theUser: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;

    this.service
      .login(username, password)
      .then(response => {
        // console.log("=-=-=-=-=-=-=-=-=-=-=-=-", response);
        this.setState({
          password: "",
          username: "",
          theUser: response.username
        });
        this.props.setTheUserInTheAppComponent(response);
        this.props.history.push("/");
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
        {this.state.theUser && <h1>hello {this.state.theUser}</h1>}
        <h1>Login</h1> <span className="caret" />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="col-md-12">
              <div className="location-center">
                <form id="login-form" onSubmit={this.handleFormSubmit}>
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
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    value="Signup"
                    className="btn btn-info my-2 my-sm-2"
                  >
                    Login
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
                Don't have an account?
                <Link to={"/signup"}> Signup</Link>
              </p>
            </div>
          </div>
        </div>
        {/* End Login  */}
      </div>
    );
  }
}
export default Login;
