import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="location-center">
        <form id="form" enctype="multipart/form-data">
          <h2>Edit User</h2>

          <label for="username">Username</label>
          <input
            className="form-control"
            type="text"
            name="username"
            value="{{user.username}}"
          />

          {/*   
       <label for="password">New Password</label>
      <input className="form-control" type="password" name="password" value="{{user.password}}"/>
      

      <label for="password">Confirme Password</label>
      <input className="form-control" type="password" name="password" value="{{user.password}}"/> */}

          <label for="email">eMail</label>
          <input
            className="form-control"
            type="text"
            name="email"
            value="{{user.email}}"
          />

          <label for="password">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="DeathStar"
          />

          <label for="imageSrc">image src</label>
          <input
            className="form-control"
            type="text"
            name="image"
            value="{{user.image}}"
          />

          <label for="profileImg">Profile Img</label>
          <input className="form-control" type="file" name="photo" />

          <div className="error-message">{{ errorMessage }}</div>

          <button className="btn btn-dark">Edit account</button>
        </form>
      </div>
    );
  }
}

export default Login;
