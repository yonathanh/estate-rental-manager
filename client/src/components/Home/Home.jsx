import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="home">
        <div className="container-fluid">
          <div className="fb-profile">
            <img
              align="left"
              className="mb-4 fb-image-lg"
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
              <div className="main-wrap">
                <img
                  class="main-gif"
                  src="/imgs/walking-house-gif.gif"
                  alt="main-gif"
                />
                <h1 className="main-header">estate-rental-manager</h1>
              </div>

              <h3>Management app</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
