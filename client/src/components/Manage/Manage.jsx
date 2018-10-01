import React, { Component } from "react";

class Manage extends Component {
  state = {};
  render() {
    return (
      <video
        className="video"
        loop="loop"
        muted=""
        autoplay="autoPlay"
        playsinline="playsInline"
        source
        src="imgs/Background-Animation.mp4"
        type="video/mp4"
      />
    );
  }
}

export default Manage;
