import React, { Component } from "react";

class AddProperty extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameField: "",
      imageField: "",
      priceField: "",
      priceCurrencyField: "",
      latField: "",
      lngField: ""
    };
  }
  // "name": "Super 60m2 in trendy neighborhood!",
  // "imageUrl": "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/images/flat3.jpg",
  // "price": 150,
  // "priceCurrency": "EUR",
  // "lat": 48.885312,
  // "lng": 2.341225

  nameFieldChange = theEventObject => {
    this.setState({ nameField: theEventObject.target.value });
  };

  imageFieldChange = theEventObject => {
    this.setState({ imageField: theEventObject.target.value });
  };

  priceFieldhange = theEventObject => {
    this.setState({ priceField: theEventObject.target.value });
  };
  priceCurrencyField = theEventObject => {
    this.setState({ priceCurrencyField: theEventObject.target.value });
  };

  latFieldChange = theEventObject => {
    this.setState({ latField: theEventObject.target.value });
  };

  lngFieldChange = theEventObject => {
    this.setState({ lngField: theEventObject.target.value });
  };

  render() {
    return (
      <form onSubmit={e => this.props.addNew(e, this.state)}>
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <label>Name</label>
            <input
              className="input"
              type="text"
              onChange={e => this.nameFieldChange(e)}
              value={this.state.nameField}
              placeholder="Name"
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
            <label>ImageUrl</label>
            <input
              className="input"
              type="text"
              onChange={e => this.imageFieldChange(e)}
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
            <label>Price</label>
            <input
              className="input"
              type="number"
              onChange={e => this.priceFieldhange(e)}
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
            <label>priceCurrency</label>
            <input
              className="input"
              type="number"
              onChange={e => this.priceCurrencyFieldChange(e)}
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
            <label>lat</label>
            <input
              className="input"
              type="number"
              onChange={e => this.latFieldChange(e)}
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
            <label>lngFieldChange</label>
            <input
              className="input"
              type="number"
              onChange={e => this.lngFieldChange(e)}
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
