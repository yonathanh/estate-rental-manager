import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Property.css";

class Property extends Component {
  handelClick = () => {
    this.props.selectProperty(this.props.Property);
  };
  render() {
    const title = `${this.props.Property.address} For ${
      this.props.Property.price
    }$`;

    return (
      <div className="property" onClick={this.handelClick}>
        <img
          className="property-poster"
          src={this.props.Property.imageUrl}
          alt="Background"
        />

        <div className="property-title">{title}</div>
        <div className="btn-block">
          <button
            style={{ backgroundColor: "red", margin: "0 5px" }}
            onClick={() =>
              this.props.deleteClickHandler(this.props.Property._id)
            }
          >
            Delete
          </button>
          <button className="btn-info">
            <Link to={`/properties/${this.props.Property._id}`}>Details</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Property;
