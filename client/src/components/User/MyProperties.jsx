import React, { Component } from "react";
//import axios from "axios";
import Property from "../Properties/Property/Property";
import AddProperty from "../Properties/AddProperty/AddProperty";
import Marker from "../Properties/Marker/Marker";

import GoogleMapsReact from "google-map-react";

class MyProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfProperties: this.props.theUser.properties,
      selectedProperty: null,
      toggleAddProperty: false
    };
  }

  toggleAddProperty = () => {
    this.setState({ toggleAddProperty: !this.state.toggleAddProperty });
  };

  showProperties = () => {
    if (this.props.theUser) {
      // console.log("this.props.theUser.properties",this.props.theUser.properties );
      return this.props.theUser.properties.map((oneProperty, index) => {
        return (
          <Property
            key={index}
            property={oneProperty}
            propertyForEdit={oneProperty}
            selectProperty={this.selectProperty}
            deleteClickHandler={this.deleteProperty}
            detailsClickHandler={this.PropertyDetails}
          />
        );
      });
    }
  };

  selectProperty = Property => {
    this.setState({
      selectedProperty: Property
    });
  };

  showMarkers = () => {
    console.log("this.state.listOfProperties", this.state.listOfProperties);
    return this.state.listOfProperties.map((oneProperty, index) => {
      return (
        <Marker
          key={index}
          lat={oneProperty.lat}
          lng={oneProperty.lng}
          price={oneProperty.price}
          selected={oneProperty === this.state.selectedProperty}
        />
      );
    });
  };

  togglePropertyForm = () => {
    this.setState({ toggleAddProperty: !this.state.toggleAddProperty });
  };

  deleteProperty = propertyId => {
    const tempProperties = [...this.state.listOfProperties];
    //  ========= I dont want to delete for now, uncomment when want to reactivate
    // axios
    //   .delete(`http://localhost:5000/api/properties/${propertyId}`)
    //   .then(responseFromApi => {
    //     this.props.history.push("/portfolio");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    tempProperties.splice(this.props, 1);

    this.setState({});
  };

  componentWillReceiveProps() {
    this.setState({
      listOfProperties: this.props.theUser.properties
    });
  }
  render() {
    let center = {
      lat: 40.712776,
      lng: -74.005974
    };
    if (this.state.selectedProperty) {
      center = {
        lat: this.state.selectedProperty.lat,
        lng: this.state.selectedProperty.lng
      };
    }

    let theUser = "John";
    if (this.props.theUser) {
      theUser = this.props.theUser;
    }

    return (
      <div className="myProperties">
        <div className="main">
          <h1>Welcome: {theUser.name}</h1>
          <h2>List of your properties</h2>
          <button onClick={this.togglePropertyForm}>Add New</button>
          <div className="Properties">{this.showProperties()}</div>
        </div>
        <div className="map">
          <div className="add-new">
            {this.state.toggleAddProperty && (
              <div className="container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col col-md-10">
                    <AddProperty
                      addNew={this.props.fetchUser}
                      toggleForm={this.togglePropertyForm}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <GoogleMapsReact
            bootstrapURLKeys={{
              key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
            }}
            center={center}
            defaultZoom={12}
          >
            {this.showMarkers()}
          </GoogleMapsReact>
        </div>
      </div>
    );
  }
}

export default MyProperties;
