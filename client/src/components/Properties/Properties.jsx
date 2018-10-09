import React, { Component } from "react";
import axios from "axios";
import Property from "./Property/Property";
import Marker from "./Marker/Marker";
import AddProperty from "./AddProperty/AddProperty";

//import properties from "../../properties.json";
import GoogleMapsReact from "google-map-react";

import "./Properties.css";

class Properties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfProperties: [],
      searchedProperties: [],
      selectedProperty: null,
      toggleAddProperty: false
    };
  }

  getAllProperties = () => {
    axios
      .get(`http://localhost:5000/api/properties`)
      .then(responseFromApi => {
        this.setState({
          listOfProperties: responseFromApi.data,
          searchedProperties: responseFromApi.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getAllProperties();
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
          detailsClickHandler={this.PropertyDetails}
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
    let tempProperties = [...this.state.listOfProperties];
    this.setState({
      searchField: theEventObject.target.value,
      searchedProperties: tempProperties.filter(oneProperty =>
        new RegExp(theEventObject.target.value, "i").exec(
          oneProperty.manager.name
        )
      )
    });
  };

  togglePropertyForm = () => {
    if (this.props.theUser) {
      this.setState({ toggleAddProperty: !this.state.toggleAddProperty });
    } else {
      this.props.history.push("/login");
    }
  };

  deleteProperty = propertyId => {
    const tempProperties = [...this.state.listOfProperties];
    // ========= I dont want to delete for now, uncomment when want to reactivate
    // axios
    //   .delete(`http://localhost:5000/api/properties/${propertyId}`)
    //   .then(responseFromApi => {
    //     this.props.history.push("/properties");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    tempProperties.splice(this.props, 1);

    this.setState({
      listOfProperties: tempProperties,
      searchedProperties: tempProperties
    });
  };

  render() {
    let center = {
      lat: 25.79224,
      lng: -80.13485
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
              placeholder="Search Manger Name"
              aria-label="Search"
              value={this.state.searchField}
              onChange={this.handleSearch}
            />
            <button onClick={this.togglePropertyForm}>Add New</button>
          </div>
          <div className="Properties">{this.showProperties()}</div>
        </div>
        <div className="map">
          <div className="add-new">
            {this.state.toggleAddProperty && (
              <div className="container-fluid h-100">
                <div className="row justify-content-center align-items-center h-100">
                  <div className="col col-md-10">
                    <AddProperty
                      addNew={this.getAllProperties}
                      toggleForm={this.togglePropertyForm}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <GoogleMapsReact
            bootstrapURLKeys={{
              key: "AIzaSyDr1oh3VqAywl1koW4H1h6EKxVr-n9jIbU" //process.env.GOOGLE_MAPS_API_KEY ????
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

export default Properties;
