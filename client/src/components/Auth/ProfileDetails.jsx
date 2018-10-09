import React, { Component } from "react";
import AuthService from "./Auth-service";

class ProfileDetails extends Component {
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
        {/* <!-- ProfileDetails  --> */}

        <div className="col-md-2" />
        <div className="location-center">
          <div className="row">
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Name</label>
                <div className="form-control input"> {this.state.name}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Email</label>
                <div className="form-control input">{this.state.email}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Phone</label>
                <div className="form-control input"> {this.state.phone}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Address</label>
                <div className="form-control input">{this.state.address}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* End ProfileDetails  */}
      </div>
    );
  }
}

export default ProfileDetails;
