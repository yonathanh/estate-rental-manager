import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Property.css";

class Property extends Component {
  handelClick = () => {
    this.props.selectProperty(this.props.property);
  };
  render() {
    let manager = "John";
    if (this.props.property.manager) {
      manager = this.props.property.manager;
    }
    //console.log("managermanagermanagermanager", manager);
    const title = `${this.props.property.address} For ${
      this.props.property.price
    }$`;

    // logic for not anabeling edit button unless in your own properties
    let editLink = "";
    if (this.props.propertyForEdit._id) {
      editLink = `/properties/edit/${this.props.propertyForEdit._id}`;
    } else {
      editLink = `/myProperties`;
    }

    return (
      <div className="property" onClick={this.handelClick}>
        <img
          className="property-poster"
          src={
            this.props.property.imgPath
              ? this.props.property.imgPath
              : this.props.property.imageUrl
          }
          alt="Background"
        />
        <div className="property-title bold">Manager: {manager.name}</div>
        <div className="property-title">{title}</div>
        <div className="btn-block">
          <button
            style={{ backgroundColor: "red", margin: "0 5px" }}
            onClick={() =>
              this.props.deleteClickHandler(this.props.property._id)
            }
          >
            Delete
          </button>
          <button className="btn-info">
            <Link to={`/properties/${this.props.property._id}`}>Details</Link>
          </button>
          <button
            style={{ backgroundColor: "orange", margin: "0 5px" }}
            onClick={() =>
              this.props.deleteClickHandler(this.props.property._id)
            }
          >
            <Link to={editLink}>Edit</Link>
          </button>
        </div>
      </div>
    );
  }
}

export default Property;
