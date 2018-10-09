import React, { Component } from "react";
import AuthService from "./Auth-service";

class ProfileEdit extends Component {
  constructor(props) {
    super(props);
    if (this.props.theUser) {
      this.state = this.props.theUser;
    } else {
      this.state = {};
    }

    this.service = new AuthService();
  }

  componentWillReceiveProps(theProps) {
    this.setState(theProps.theUser);
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const userObject = {
      _id: this.state._id,
      username: this.state.username,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      imageUrl: this.state.imageUrl,
      imgPath: this.state.imgPath
    };

    this.service
      .edit(userObject)
      .then(theUserObject => {
        this.props.setTheUserInTheAppComponent(userObject);
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
        {/* <!-- Profile  --> */}
        <form onSubmit={this.handleFormSubmit} />
        <h1>Edit Profile</h1> <span className="caret" />
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
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
                {/* <label className="my-sm-0" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={e => this.handleChange(e)}
                    placeholder="Password"
                  /> */}
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
                  Edit
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* End Profile  */}
      </div>
    );
  }
}

export default ProfileEdit;
