import React, { Component } from "react";
import axios from "axios";

class EditProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.getSingleProperty();
  }

  getSingleProperty = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/Properties/${params.id}`)
      .then(responseFromApi => {
        const theProperty = responseFromApi.data;
        this.setState(theProperty);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleFormSubmit = event => {
    // console.log("============== this.state ===", this.state);
    event.preventDefault();

    const propertyObject = {
      type: this.state.type,
      beds: this.state.beds,
      baths: this.state.baths,
      squareFeet: this.state.squareFeet,
      price: this.state.price,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      pets: this.state.pets,
      smoking: this.state.smoking,
      parking: this.state.parking,
      downPayment: this.state.downPayment,
      fees: this.state.fees,
      lat: this.state.lat,
      lng: this.state.lng,
      imageUrl: this.state.imageUrl,
      imgPath: this.state.imgPath
    };

    axios
      .put(
        `http://localhost:5000/api/properties/edit/${
          this.props.match.params.id
        }`,
        propertyObject
      )
      .then(() => {
        this.props.history.push("/portfolio");
      })
      .catch(error => console.log(error));
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-3" />
          <div id="customform" className="customform col-sm-6">
            <li>
              <div className="top-header" />
            </li>
            <form onSubmit={this.handleFormSubmit}>
              <div className="form-row">
                <div className="form-group col-md-2">
                  <label htmlFor="inputState">Type</label>
                  <select
                    name="type"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.type}</option>
                    <option value="House">House</option>
                    <option value="Apt">Apt</option>
                    <option value="Condo">Condo</option>
                    <option value="Town House">Town House</option>
                  </select>
                </div>
                <div className="form-group col-md-2">
                  <label htmlFor="inputState">Beds</label>
                  <select
                    name="beds"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.beds}</option>
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
                    name="baths"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.baths}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="form-group col-md-3">
                  <label>Square Feet</label>
                  <input
                    name="squareFeet"
                    className="form-control input"
                    type="number"
                    onChange={e => this.handleChange(e)}
                    value={this.state.squareFeet}
                    placeholder="1300"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Price $</label>
                  <input
                    name="price"
                    className="form-control input"
                    type="number"
                    onChange={e => this.handleChange(e)}
                    value={this.state.price}
                    placeholder="567"
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  name="address"
                  className="input form-control"
                  type="text"
                  onChange={e => this.handleChange(e)}
                  value={this.state.address}
                  placeholder="1234 Main St"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>City</label>
                  <input
                    name="city"
                    className="input form-control"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.city}
                    placeholder="Miami"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>State</label>
                  <input
                    name="state"
                    className="input form-control"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.state}
                    placeholder="FL"
                  />
                </div>
                <div className="form-group col-md-3">
                  <label>Zip</label>
                  <input
                    name="zip"
                    className="form-control input"
                    type="number"
                    onChange={e => this.handleChange(e)}
                    value={this.state.zip}
                    placeholder="33156"
                  />
                </div>
              </div>
              <div className="row">
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Pets?</label>
                  <select
                    name="pets"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.pets}</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Smoking?</label>
                  <select
                    name="smoking"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.smoking}</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </div>
                <div className="form-group col-md-4">
                  <label htmlFor="inputState">Parking?</label>
                  <select
                    name="parking"
                    className="form-control"
                    onChange={e => this.handleChange(e)}
                  >
                    <option>{this.state.parking}</option>
                    <option value="yes">yes</option>
                    <option value="no">no</option>
                  </select>
                </div>
              </div>
              <div className="">
                <p className="control has-icons-left">
                  <label className="my-sm-0">ImageUrl</label>
                  <input
                    name="imageUrl"
                    className="form-control input"
                    type="text"
                    onChange={e => this.handleChange(e)}
                    value={this.state.imageUrl}
                    placeholder="ImageUrl"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="">
                <p className="control has-icons-left">
                  <label className="my-sm-0">Image file</label>
                  <input
                    name="imageFile"
                    className="form-control input"
                    type="file"
                    onChange={e => this.handleChange(e)}
                    value={this.state.imageFile}
                    placeholder="Image file"
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-lock" />
                  </span>
                </p>
              </div>
              <div className="row">
                <a
                  className=" col-md-12"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.latlong.net/"
                >
                  <h6>Get Latitude and Longitude click here</h6>
                </a>
              </div>
              <div className="row">
                <div className=" col-md-6">
                  <p className="control has-icons-left">
                    <label className="my-sm-0">lat</label>
                    <input
                      name="lat"
                      className="form-control input"
                      type="number"
                      onChange={e => this.handleChange(e)}
                      value={this.state.lat}
                      placeholder="40.7128"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                </div>
                <div className=" col-md-6">
                  <p className="control has-icons-left">
                    <label className="my-sm-0">lng</label>
                    <input
                      name="lng"
                      className="form-control input"
                      type="number"
                      onChange={e => this.handleChange(e)}
                      value={this.state.lng}
                      placeholder="74.0060"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="row">
                <div className=" col-md-6">
                  <p className="control has-icons-left">
                    <label className="my-sm-0">Down Payment $</label>
                    <input
                      name="downPayment"
                      className="form-control input"
                      type="number"
                      onChange={e => this.handleChange(e)}
                      value={this.state.downPayment}
                      placeholder="2000"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                </div>
                <div className=" col-md-6">
                  <p className="control has-icons-left">
                    <label className="my-sm-0">Extra Fees $</label>
                    <input
                      name="fees"
                      className="form-control input"
                      type="number"
                      onChange={e => this.handleChange(e)}
                      value={this.state.fees}
                      placeholder="400"
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-lock" />
                    </span>
                  </p>
                </div>
              </div>
              <div className="">
                <p className="control">
                  <button className="button is-success">Submit</button>
                </p>
              </div>
            </form>
            <li>
              <div className="top-header" />
            </li>
          </div>
          <div class="col-sm-3" />
        </div>
      </div>
    );
  }
}

export default EditProperty;
