import React, { Component } from "react";
import axios from "axios";

class AddLease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property: props.property
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const LeaseObject = {
      address: this.state.addressField,
      imageUrl: this.state.imageUrlField,
      estimatePrice: this.state.priceField,
      lat: this.state.latField,
      lng: this.state.lngField,
      imgPath: this.state.imgPath
    };

    axios
      .post("http://localhost:5000/api/addLease", LeaseObject)
      .then(() => {
        //e => this.props.addNew(e, this.state);
        // this.props.getData(); //if you want to show the new Lease on window
        this.setState({
          addressField: "",
          imageUrlField: "",
          imageFileField: "",
          priceField: "",
          latField: "",
          lngField: ""
        });
      })
      .catch(error => console.log(error));
  };

  fieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log("kejrfhkawhefkasjh", this.state.property);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Residential Rental Lease</h1>

          <div className="form-row">
            <div className="form-group col-md-2">
              <label for="inputState">Type</label>
              <select
                name="typeField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option selected>Opt...</option>
                <option value="House">House</option>
                <option value="Apt">Apt</option>
                <option value="Condo">Condo</option>
                <option value="Town House">Town House</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputState">Beds</label>
              <select
                name="bedsField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option selected>Opt...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputState">Baths</label>
              <select
                name="bathsField"
                className="form-control"
                onChange={e => this.fieldChange(e)}
              >
                <option selected>Opt...</option>
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
              <label>Price$</label>
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
          <div class="form-row">
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
            <div class="form-group col-md-3">
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
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">lat</label>
                <input
                  name="latField"
                  className="form-control input"
                  type="number"
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
                  type="number"
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
          <div class="form-row">
            <div class="form-group col-md-2">
              <label for="inputState">Type</label>
              <select id="inputState" class="form-control">
                <option selected>Opt...</option>
                <option>House</option>
                <option>Apt</option>
                <option>Condo</option>
                <option>Town House</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputState">Beds</label>
              <select id="inputState" class="form-control">
                <option selected>Opt...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputState">Baths</label>
              <select id="inputState" class="form-control">
                <option selected>Opt...</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
              </select>
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Square Feet</label>
              <input type="number" class="form-control" id="inputZip" />
            </div>
            <div class="form-group col-md-3">
              <label for="inputZip">Price</label>
              <input type="number" class="form-control" id="inputZip" />
            </div>
          </div>
          <div class="form-group">
            <label for="inputAddress">Address</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div class="form-group">
            <label for="inputAddress2">Address 2</label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div class="form-row">
            <div class="form-group col-md-6">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" id="inputCity" />
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
          </div>

          <div className="row">
            <div class="form-group col-md-4">
              <p>Pets?</p>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="PetsLine1"
                  name="PetsLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="PetsLine1">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="PetsLine2"
                  name="PetsLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="PetsLine2">
                  No
                </label>
              </div>
            </div>
            <div class="form-group col-md-4">
              <p>Smoking? </p>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="SmokingLine1"
                  name="SmokingLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="SmokingLine1">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="SmokingLine2"
                  name="SmokingLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="SmokingLine2">
                  No
                </label>
              </div>
            </div>
            <div class="form-group col-md-4">
              <p>Parking? </p>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="ParkingLine1"
                  name="ParkingLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="ParkingLine1">
                  Yes
                </label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input
                  type="radio"
                  id="ParkingLine2"
                  name="ParkingLine1"
                  class="custom-control-input"
                />
                <label class="custom-control-label" for="ParkingLine2">
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="form-group">
            <button className="btn btn-info">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddLease;
