import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./PropertyDetails.css";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleProperty = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/properties/${params.id}`)
      .then(responseFromApi => {
        console.log("responseFromApi.data", responseFromApi.data);
        const theProperty = responseFromApi.data;
        this.setState({
          theProperty
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleProperty();
  }

  render() {
    console.log("this.state", this.state.theProperty);
    return (
      <div className="property" onClick={this.handelClick}>
        <h1>{this.state.address}</h1>
        <h1>Hello Details</h1>
        <img
          className="property-poster"
          src={this.state.imageUrl}
          alt="Background"
        />
      </div>
    );
  }
}

export default PropertyDetails;
