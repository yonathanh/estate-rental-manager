import React, { Component } from "react";
import AuthService from "./Auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      phone: "",
      address: "",
      imageUrl: "",
      imgPath: ""
    };
    this.service = new AuthService();
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const userObjct = {
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      imageUrl: this.state.imageUrl,
      imgPath: this.state.imgPath
    };

    this.service
      .signup(userObjct)
      .then(theUserObject => {
        this.setState({
          username: "",
          password: "",
          name: "",
          email: "",
          phone: "",
          address: "",
          imageUrl: "",
          imgPath: ""
        });
        this.props.setTheUserInTheAppComponent(theUserObject);
        this.props.history.push("/");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div>
        {/* <!-- Singup  --> */}
        <form onSubmit={this.handleFormSubmit} />
        <h1>Sign Up</h1> <span className="caret" />
        <div className="row">
          <div className="col-md-4" />
          <div className="col-md-4">
            <div className="col-md-12">
              <div className="location-center">
                <form id="signup-form" onSubmit={this.handleFormSubmit}>
                  <label className="my-sm-0" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={e => this.handleChange(e)}
                    placeholder="User Name"
                  />
                  <label className="my-sm-0" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    placeholder="Password"
                  />
                  <label className="my-sm-0" htmlFor="name">
                    name
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}
                    placeholder="Name"
                  />
                  <label className="my-sm-0" htmlFor="email">
                    email
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={e => this.handleChange(e)}
                    placeholder="email"
                  />
                  <label className="my-sm-0" htmlFor="phone">
                    phone
                  </label>
                  <input
                    className="form-control"
                    type="number"
                    name="phone"
                    value={this.state.phone}
                    onChange={e => this.handleChange(e)}
                    placeholder="phone"
                  />
                  <label className="my-sm-0" htmlFor="address">
                    address
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={e => this.handleChange(e)}
                    placeholder="address"
                  />
                  <label className="my-sm-0" htmlFor="imageUrl">
                    imageUrl
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    name="imageUrl"
                    value={this.state.imageUrl}
                    onChange={e => this.handleChange(e)}
                    placeholder="imageUrl"
                  />
                  <label className="my-sm-0" htmlFor="imgPath">
                    imgPath
                  </label>
                  <input
                    className="form-control"
                    type="file"
                    name="imgPath"
                    value={this.state.imgPath}
                    onChange={e => this.handleChange(e)}
                    placeholder="imgPath"
                  />
                  <button
                    type="submit"
                    value="Signup"
                    className="btn btn-info my-2 my-sm-2"
                  >
                    Signup
                  </button>
                </form>
              </div>
              <p>
                Already have account?
                <Link to={"/login"}> Login</Link>
              </p>
            </div>
          </div>
        </div>
        {/* End Signup  */}
      </div>
    );
  }
}

export default Signup;
