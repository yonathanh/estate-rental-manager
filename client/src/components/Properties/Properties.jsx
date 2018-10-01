import React, { Component } from "react";
import Property from "./Property/Property";
import Marker from "./Marker/Marker";
import AddProperty from "./AddProperty/AddProperty";

import properties from "../../properties.json";
import GoogleMapsReact from "google-map-react";

import "./Properties.css";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: properties,
      searchedProperties: properties,
      selectedProperty: null,
      toggleAddProperty: false
    };
  }

  toggleAddProperty = () => {
    this.setState({ toggleAddProperty: !this.state.toggleAddProperty });
  };

  showProperties = () => {
    return this.state.searchedProperties.map((oneProperty, index) => {
      return (
        <Property
          key={index}
          Property={oneProperty}
          selectProperty={this.selectProperty}
          deleteClickHandler={this.deleteProperty}
        />
      );
    });
  };

  showMarkers = () => {
    return this.state.searchedProperties.map((oneProperty, index) => {
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

  selectProperty = Property => {
    this.setState({
      selectedProperty: Property
    });
  };

  handleSearch = theEventObject => {
    let tempProperties = [...this.state.properties];
    this.setState({
      searchField: theEventObject.target.value,
      searchedProperties: tempProperties.filter(oneProperty =>
        new RegExp(theEventObject.target.value, "i").exec(oneProperty.name)
      )
    });
  };

  togglePropertyForm = () => {
    this.setState({ toggleAddProperty: !this.state.toggleAddProperty });
  };

  addNewProperty = (e, newThingToAdd) => {
    e.preventDefault();

    const newProperty = {
      name: newThingToAdd.nameField,
      imageUrl: newThingToAdd.imageField,
      price: newThingToAdd.priceField,
      priceCurrency: newThingToAdd.priceCurrencyField,
      lat: newThingToAdd.latField,
      lng: newThingToAdd.lngField
    };

    const allTheProperties = [...this.state.properties];
    // const allTheproperties = this.state.properties.slice()
    // either of these works, they each simply make a duplicate of this.state.properties

    allTheProperties.unshift(newProperty);

    this.setState({
      properties: allTheProperties,
      searchedProperties: allTheProperties
    });
    this.togglePropertyForm();
  };

  deleteProperty = whichPropertyToDelete => {
    const tempProperties = [...this.state.properties];
    tempProperties.splice(whichPropertyToDelete, 1);

    this.setState({
      properties: tempProperties,
      searchedProperties: tempProperties
    });
  };

  render() {
    let center = {
      lat: 48.8566,
      lng: 2.3522
    };
    if (this.state.selectedProperty) {
      center = {
        lat: this.state.selectedProperty.lat,
        lng: this.state.selectedProperty.lng
      };
    }

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={this.state.searchField}
              onChange={this.handleSearch}
            />
            <button onClick={this.togglePropertyForm}>Add New</button>
          </div>
          <div className="Properies">{this.showProperties()}</div>
        </div>
        <div className="map">
          <div className="add-new">
            {this.state.toggleAddProperty && (
              <AddProperty addNew={this.addNewProperty} />
            )}
          </div>
          <GoogleMapsReact
            // bootstrapURLKeys={{ key: "AIzaSyCByLBJSe7XjwUosOuW8xah1Bn - rP23i2A" }}
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

export default Properties;
