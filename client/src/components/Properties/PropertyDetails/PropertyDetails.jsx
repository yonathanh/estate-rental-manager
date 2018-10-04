import React, { Component } from "react";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    //   componentWillReceiveProps(){
    // this.setState({ this.props.theProperty}) {

    // }
  }

  // fieldChange = event => {
  //   this.setState({ [event.target.name]: event.target.value });
  // };

  render() {
    const theProperty = this.props.theProperty;
    console.log("theProperty", theProperty);
    return (
      <div>
        <p>The Manager: {theProperty.manager}</p>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Type</label>
              <select
                name="typeField"
                className="form-control"
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.type}</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Beds</label>
              <select
                name="bedsField"
                className="form-control"
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.beds}</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Baths</label>
              <select
                name="bathsField"
                className="form-control"
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.baths}</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Square Feet</label>
              <input
                name="squareFeetField"
                className="form-control input"
                type="number"
                // onChange={e => this.fieldChange(e)}
                value={theProperty.squareFeet}
                placeholder="1300"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Price $</label>
              <input
                name="priceField"
                className="form-control input"
                type="number"
                // onChange={e => this.fieldChange(e)}
                value={theProperty.price}
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
              // onChange={e => this.fieldChange(e)}
              value={theProperty.address}
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
                // onChange={e => this.fieldChange(e)}
                value={theProperty.city}
                placeholder="Miami"
              />
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <input
                name="stateField"
                className="input form-control"
                type="text"
                // onChange={e => this.fieldChange(e)}
                value={theProperty.state}
                placeholder="FL"
              />
            </div>
            <div className="form-group col-md-3">
              <label>Zip</label>
              <input
                name="zipField"
                className="form-control input"
                type="number"
                // onChange={e => this.fieldChange(e)}
                value={theProperty.zip}
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
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.pets}</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Smoking?</label>
              <select
                name="smokingField"
                className="form-control"
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.smoking}</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Parking?</label>
              <select
                name="parkingField"
                className="form-control"
                // onChange={e => this.fieldChange(e)}
              >
                <option>{theProperty.parking}</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">lat</label>
                <input
                  name="latField"
                  className="form-control input"
                  type="number"
                  // onChange={e => this.fieldChange(e)}
                  value={theProperty.lat}
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
                  // onChange={e => this.fieldChange(e)}
                  value={theProperty.lng}
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
                  // onChange={e => this.fieldChange(e)}
                  value={theProperty.downPayment}
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
                  // onChange={e => this.fieldChange(e)}
                  value={theProperty.fees}
                  placeholder="400"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PropertyDetails;
