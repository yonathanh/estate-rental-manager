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

    const style = {
      width: "100%"
    };

    console.log("ppppppppppppppthis.state", this.state);

    return (
      <div className="container" onClick={this.handelClick}>
        <h1>Property Page</h1>
        <div className="row">
          <div className="col-12 col-sm-6 section-property">
            <img style={style} src={this.state.imageUrl} alt="Background" />
            <h2>{this.state.address}</h2>
          </div>
          <div className="col-12 col-sm-6 section-property">
            <GoogleMapsReact
              // bootstrapURLKeys={{ key: "AIzaSyCByLBJSe7XjwUosOuW8xah1Bn - rP23i2A" }}
              center={center}
              defaultZoom={12}
            >
              <Marker price={this.state.price} />
            </GoogleMapsReact>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 section-property">
            <PropertyDetails theProperty={this.state} />
          </div>
          <div className="col-12 col-sm-6 section-property">
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
