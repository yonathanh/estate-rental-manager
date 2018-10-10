import React, { Component } from "react";
import axios from "axios";
//import { Link } from "react-router-dom";
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
      .get(`${process.env.REACT_APP_BASE_URL}/properties/${params.id}`)
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

  fileApplication = () => {
    if (this.props.theUser) {
      this.props.history.push(`/properties/lease/${this.state._id}`);
    } else {
      this.props.history.push("/login");
    }
  };

  render() {
    let center = {
      lat: this.state.lat,
      lng: this.state.lng
    };

    //console.log("ppppppppppppppthis.state", this.state);

    return (
      <div className="app">
        <div className="main">
          <h1>Property Page</h1>
          <img className="poster" src={this.state.imageUrl} alt="Background" />
          <p>{this.state.address}</p>
          <button className="btn-danger bouncy" onClick={this.fileApplication}>
            File Application
          </button>
          <PropertyDetails theProperty={this.state} />
        </div>
        <div className="map">
          <GoogleMapsReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            center={center}
            defaultZoom={12}
          >
            <Marker price={this.state.price} />
          </GoogleMapsReact>
        </div>
      </div>
      // <div className="container" onClick={this.handelClick}>
      //   <h1>Property Page</h1>
      //   <div className="row m-4">
      //     <div className="col-12 col-sm-6 section-property">
      //       <img style={style} src={this.state.imageUrl} alt="Background" />
      //       <h2>{this.state.address}</h2>
      //     </div>
      //     <div className="col-12 col-sm-6 section-property">
      //       <GoogleMapsReact
      //         // bootstrapURLKeys={{ key: "AIzaSyCByLBJSe7XjwUosOuW8xah1Bn - rP23i2A" }}
      //         center={center}
      //         defaultZoom={12}
      //       >
      //         <Marker price={this.state.price} />
      //       </GoogleMapsReact>
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-12 col-sm-6 section-property">
      //       <PropertyDetails theProperty={this.state} />
      //     </div>
      //     <div className="col-12 col-sm-6 section-property">
      //       <div className="m-4">
      //         <button className="btn-info" onClick={this.fileApplication}>
      //           File Application
      //         </button>
      //       </div>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default PropertyPage;
