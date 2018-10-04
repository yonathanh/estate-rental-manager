import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropertyDetails from "../PropertyDetails/PropertyDetails";
import GoogleMapsReact from "google-map-react";
import Marker from "../Marker/Marker";
import "./PropertyPage.css";

class PropertyPage extends Component {
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
    return (
      <div className="container property" onClick={this.handelClick}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <h1>Property Page</h1>
            <h2>{this.state.address}</h2>
            <img
              className="property-poster"
              src={this.state.imageUrl}
              alt="Background"
            />
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
            <PropertyDetails theProperty={this.state} />
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
            <div className="m-4">
              <button className="btn-info">
                <Link to={`/properties/lease/${this.state._id}`}>
                  File Application
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyPage;
