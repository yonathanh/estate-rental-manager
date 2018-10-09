import React, { Component } from "react";
import axios from "axios";

import "./AddProperty.css";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typeField: "",
      bedsField: "",
      bathsField: "",
      squareFeetField: "",
      priceField: "",
      addressField: "",
      cityField: "",
      stateField: "",
      zipField: "",
      petsField: "",
      smokingField: "",
      parkingField: "",
      downPaymentField: "",
      feesField: "",
      latField: "",
      lngField: "",
      imageUrlField: "",
      imageFileField: ""
    };
  }

  handleFormSubmit = event => {
    // console.log("============== this.state ===", this.state);
    event.preventDefault();

    const propertyObject = {
      type: this.state.typeField,
      beds: this.state.bedsField,
      baths: this.state.bathsField,
      squareFeet: this.state.squareFeetField,
      price: this.state.priceField,
      address: this.state.addressField,
      city: this.state.cityField,
      state: this.state.stateField,
      zip: this.state.zipField,
      pets: this.state.petsField,
      smoking: this.state.smokingField,
      parking: this.state.parkingField,
      downPayment: this.state.downPaymentField,
      fees: this.state.feesField,
      lat: this.state.latField,
      lng: this.state.lngField,
      imageUrl: this.state.imageUrlField,
      imgPath: this.state.imgPath
    };

    axios
      .post(`${process.env.REACT_APP_BASE_URL}/properties`, propertyObject, {
        withCredentials: true
      })
      .then(() => {
        this.props.addNew(); // toggle form and display on window updated
        this.props.toggleForm();
        this.setState({
          typeField: "",
          bedsField: "",
          bathsField: "",
          squareFeetField: "",
          priceField: "",
          addressField: "",
          cityField: "",
          stateField: "",
          zipField: "",
          petsField: "",
          smokingField: "",
          parkingField: "",
          downPaymentField: "",
          feesField: "",
          latField: "",
          lngField: "",
          imageUrlField: "",
          imageFileField: ""
        });
      })
      .catch(error => console.log(error));
  };

  fieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div id="customform" className="customform">
        <li>
          <div className="top-header" />
        </li>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Type</label>
              <select
                name="typeField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="House">House</option>
                <option value="Apt">Apt</option>
                <option value="Condo">Condo</option>
                <option value="Town House">Town House</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Beds</label>
              <select
                name="bedsField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Baths</label>
              <select
                name="bathsField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Square Feet</label>
              <input
                name="squareFeetField"
                className="form-control input"
                type="number"
                onChange={e => this.fieldChange(e)}
                value={this.state.squareFeetField}
                placeholder="1300"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Price $</label>
              <input
                name="priceField"
                className="form-control input"
                type="number"
                onChange={e => this.fieldChange(e)}
                value={this.state.priceField}
                placeholder="567"
              />
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              name="addressField"
              className="input form-control"
              type="text"
              onChange={e => this.fieldChange(e)}
              value={this.state.addressField}
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <input
                name="cityField"
                className="input form-control"
                type="text"
                onChange={e => this.fieldChange(e)}
                value={this.state.cityField}
                placeholder="Miami"
              />
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <input
                name="stateField"
                className="input form-control"
                type="text"
                onChange={e => this.fieldChange(e)}
                value={this.state.stateField}
                placeholder="FL"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Zip</label>
              <input
                name="zipField"
                className="form-control input"
                type="number"
                onChange={e => this.fieldChange(e)}
                value={this.state.zipField}
                placeholder="33156"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Pets?</label>
              <select
                name="petsField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Smoking?</label>
              <select
                name="smokingField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Parking?</label>
              <select
                name="parkingField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option>Select</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
              </select>
            </div>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <label className="my-sm-0">ImageUrl</label>
              <input
                name="imageUrlField"
                className="form-control input"
                type="text"
                onChange={e => this.fieldChange(e)}
                value={this.state.imageUrlField}
                placeholder="ImageUrl"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="field">
            <p className="control has-icons-left">
              <label className="my-sm-0">Image file</label>
              <input
                name="imageFileField"
                className="form-control input"
                type="file"
                onChange={e => this.fieldChange(e)}
                value={this.state.imageFileField}
                placeholder="Image file"
              />
              <span className="icon is-small is-left">
                <i className="fas fa-lock" />
              </span>
            </p>
          </div>
          <div className="row">
            <a
              className="field col-md-12"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.latlong.net/"
            >
              <h6>Get Latitude and Longitude click here</h6>
            </a>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">lat</label>
                <input
                  name="latField"
                  className="form-control input"
                  type="text"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.latField}
                  placeholder="40.7128"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">lng</label>
                <input
                  name="lngField"
                  className="form-control input"
                  type="text"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.lngField}
                  placeholder="74.0060"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">Down Payment $</label>
                <input
                  name="downPaymentField"
                  className="form-control input"
                  type="number"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.downPaymentField}
                  placeholder="2000"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">Extra Fees $</label>
                <input
                  name="feesField"
                  className="form-control input"
                  type="number"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.feesField}
                  placeholder="400"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
          </div>
          <div className="field">
            <p className="control">
              <button className="button is-success">Submit</button>
            </p>
          </div>
        </form>
        <li>
          <div className="top-header" />
        </li>
      </div>
    );
  }
}

export default AddProperty;
