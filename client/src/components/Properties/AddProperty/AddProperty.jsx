import React, { Component } from "react";
import axios from "axios";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addressField: "",
      imageUrlField: "",
      imageFileField: "",
      priceField: "",
      latField: "",
      lngField: ""
    };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const propertyObject = {
      address: this.state.addressField,
      imageUrl: this.state.imageUrlField,
      estimatePrice: this.state.priceField,
      lat: this.state.latField,
      lng: this.state.lngField,
      imgPath: this.state.imgPath
    };

    axios
      .post("http://localhost:5000/api/addProperty", propertyObject)
      .then(() => {
        //e => this.props.addNew(e, this.state);
        // this.props.getData(); //if you want to show the new property on window
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
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <label className="my-sm-0">Address</label>
            <input
              name="addressField"
              className="input form-control"
              type="text"
              onChange={e => this.fieldChange(e)}
              value={this.state.addressField}
              placeholder="address"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope" />
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <label className="my-sm-0">ImageUrl</label>
            <input
              name="imageField"
              className="form-control input"
              type="text"
              onChange={e => this.fieldChange(e)}
              value={this.state.imageField}
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
        <div className="field">
          <p className="control has-icons-left">
            <label className="my-sm-0">Price</label>
            <input
              name="priceField"
              className="form-control input"
              type="number"
              onChange={e => this.fieldChange(e)}
              value={this.state.priceField}
              placeholder="567"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <label className="my-sm-0">priceCurrency</label>
            <input
              name="priceCurrencyField"
              className="form-control input"
              type="text"
              onChange={e => this.fieldChange(e)}
              value={this.state.priceCurrencyField}
              placeholder="$"
            />
            <span className="icon is-small is-left">
              <i className="fas fa-lock" />
            </span>
          </p>
        </div>
        <div className="field">
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
        <div className="field">
          <p className="control has-icons-left">
            <label className="my-sm-0">lngFieldChange</label>
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
        <div className="field">
          <p className="control">
            <button className="button is-success">Submit</button>
          </p>
        </div>
      </form>
    );
  }
}

export default AddProperty;
