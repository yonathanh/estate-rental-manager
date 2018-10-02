import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Property.css";

class Property extends Component {
  handelClick = () => {
    this.props.selectProperty(this.props.Property);
  };
  render() {
    const title = `${this.props.Property.price}${
      this.props.Property.priceCurrency
    }-${this.props.Property.address}`;

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
          onClick={() => this.props.deleteClickHandler(this.props.Property._id)}
        >
          Delete
        </button>
        <button className="btn-info">
          <Link to={`/Properties/${this.props.Property._id}`}>Details</Link>
        </button>
        {/* <button
          className="btn-info"
          onClick={() =>
            this.props.detailsClickHandler(this.props.Property._id)
          }
        >
          Details
        </button> */}
      </div>
    );
  }
}

export default Property;
