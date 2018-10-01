import React, { Component } from "react";
import "./Property.css";

class Porperty extends Component {
  handelClick = () => {
    this.props.selectProperty(this.props.Property);
  };
  render() {
    const title = `${this.props.Property.price}${
      this.props.Property.priceCurrency
    }-${this.props.Property.name}`;

    const style = {
      BackgroundImage: `url(${this.props.Property.imageUrl})`,
      hight: "200px",
      BackgroundSize: "cover",
      BackgroundPosition: "center"
    };
    return (
      <div className="property" onClick={this.handelClick}>
        <div style={style} />
        <img
          className="property-poster"
          src={this.props.Property.imageUrl}
          alt="Background"
        />
        <div className="property-title">{title}</div>
        <button
          style={{ backgroundColor: "red", margin: "0 5px" }}
          onClick={this.props.deleteClickHandler}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Porperty;
