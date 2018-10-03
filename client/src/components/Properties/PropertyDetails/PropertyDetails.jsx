import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import GoogleMapsReact from "google-map-react";
import Marker from "../Marker/Marker";
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
        // console.log("responseFromApi.data", responseFromApi.data);
        const theProperty = responseFromApi.data;
        this.setState(theProperty);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleProperty();
  }

  render() {
    let center = {
      lat: this.state.lat,
      lng: this.state.lng
    };
    // console.log("this.state", this.state.theProperty);
    return (
      <div className="container property" onClick={this.handelClick}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h1>Hello Details</h1>
            <h2>{this.state.address}</h2>
            <img
              className="property-poster"
              src={this.state.imageUrl}
              alt="Background"
            />
            <div>
              <button className="btn-info">
                <Link
                  property={this.state}
                  to={`/properties/lease/${this.state._id}`}
                >
                  File Application
                </Link>
              </button>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <GoogleMapsReact
              // bootstrapURLKeys={{ key: "AIzaSyCByLBJSe7XjwUosOuW8xah1Bn - rP23i2A" }}
              center={center}
              defaultZoom={12}
            >
              <Marker price={this.state.estimatePrice} />
            </GoogleMapsReact>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h2>{this.state.address}</h2>
            <h2>{this.state.propertyDetails}</h2>
            <h2>{this.state.estimatePrice}</h2>
            <h2>{this.state.lat}</h2>
            <h2>{this.state.lng}</h2>
            <h2>{this.state.leaseID}</h2>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            2 of 3
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
