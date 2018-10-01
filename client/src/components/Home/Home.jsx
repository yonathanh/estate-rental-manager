import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="fb-profile">
          <img
            align="left"
            className="fb-image-lg"
            src="/imgs/house-background.jpg"
            alt="Background"
          />

          <img
            align="left"
            className="fb-image-profile thumbnail"
            src="/imgs/for-rent-sign.jpg"
            alt="for rent"
          />
          <div className="fb-profile-text">
            <h1>estate-rental-manager</h1>
            <p>Best rental mangment app</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
