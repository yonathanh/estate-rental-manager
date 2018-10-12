import React, { Component } from "react";

import SignaturePad from "signature_pad";

import "./Signature.css";

class Signature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signInput: null,
      buttons: {
        sign: false,
        clear: false,
        revoke: false
      }
    };
    this.ref = React.createRef();
  }
  bindSignature(e) {
    if (this.state.signInput.isEmpty()) return false;
    let image = this.state.signInput.toDataURL(),
      container = document.getElementById("Sign_Here"),
      img = document.createElement("img"),
      onClick = e => {
        container.removeChild(e.target);
      };

    img.src = image;
    img.alt = "Double Click to Remove Signature";
    container.children.length
      ? container.removeChild(container.children[0])
      : null;
    container.appendChild(img);
    img.removeEventListener("dblclick", onClick);
    img.addEventListener("dblclick", onClick);
    this.setState({ buttons: { revoke: true, clear: true, sign: true } });
  }

  // resizeCanvas(e) {
  //   let canvas = this.ref.current;
  //   ratio = Math.max(window.devicePixelRatio || 1, 1);
  //   canvas.width = canvas.offsetWidth * ratio;
  //   canvas.height = canvas.offsetHeight * ratio;
  //   canvas.getContext("2d").scale(ratio, ratio);
  // }
  clearSignature(e) {
    this.state.signInput.clear();
    this.setState({ buttons: { sign: true, clear: true, revoke: false } });
  }
  componentWillUnmount() {
    window.addEventListener("resize", this.resizeCanvas);
  }

  componentDidMount() {
    const that = this;
    let canvas = this.ref.current;
    let widget = new SignaturePad(canvas, {
      minWidth: 1,
      maxWidth: 1,
      onBegin(e) {
        that.setState({
          buttons: { sign: true, clear: true, revoke: false }
        });
      },
      onEnd(e) {}
    });

    this.setState({ signInput: widget });

    //   , () =>
    //   console.log("singiture state=-=-=-===-=-=-=-=-=-", this.state)
    // );

    window.addEventListener("resize", this.resizeCanvas);
  }
  render() {
    return (
      <div className="container signature-container">
        <div className="row">
          <div className="col-md-12">
            <h1> {this.props.title}</h1>
          </div>
          <div className="col-6 can-wrapper">
            <canvas ref={this.ref} className="signature-input" />
          </div>
        </div>

        {/* <div id="Sign_Here" /> */}

        <div className="row" ref="btnWrapper" className="btn-wrapper">
          <div className="col-sm-6">
            <div
              ref="btnSign"
              className="btn  btn-outline-dark"
              onClick={this.bindSignature.bind(this)}
            >
              Sign
            </div>{" "}
            &nbsp;
            <div
              ref="btnClear"
              className="btn btn-outline-danger"
              onClick={this.clearSignature.bind(this)}
            >
              Clear
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signature;
