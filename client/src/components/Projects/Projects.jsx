import React, { Component } from "react";
import "./Projects.css";

class Projects extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row h-50">
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
          <div className="col-md-4">
            <img
              className="dragon"
              src="/imgs/dragon-wallpapers.jpg"
              alt="dragon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="profile-card">
              <img
                className="img-responsive img-thumbnail"
                src="https://qph.fs.quoracdn.net/main-qimg-dc28fe9cd60445b0a40c82173618cbeb-c"
                alt="bounce"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
