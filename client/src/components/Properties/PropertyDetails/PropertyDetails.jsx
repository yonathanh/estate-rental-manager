import React, { Component } from "react";

class PropertyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const theProperty = this.props.theProperty;
    //console.log("theProperty.manager", theProperty.manager);

    let manager = "John";
    if (this.props.theProperty.manager) {
      manager = this.props.theProperty.manager;
    }

    return (
      <div>
        <div id="customform" className="property-details">
          <li>
            <div className="top-header" />
            <label className="fieldlabel">Property: {manager.name}</label>
          </li>
          <div className="form-row">
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Type</label>
              <select name="typeField" className="form-control">
                <option>{theProperty.type}</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Beds</label>
              <select name="bedsField" className="form-control">
                <option>{theProperty.beds}</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label htmlFor="inputState">Baths</label>
              <select name="bathsField" className="form-control">
                <option>{theProperty.baths}</option>
              </select>
            </div>
            <div className="form-group col-md-3">
              <label>Square Feet</label>
              <div name="squareFeetField" className="form-control input">
                {theProperty.squareFeet}
              </div>
            </div>
            <div className="form-group col-md-3">
              <label>Price $</label>
              <div className="form-control input">{theProperty.price}</div>
            </div>
          </div>
          <div className="form-group">
            <label>Address</label>
            <div className="input form-control">{theProperty.address}</div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>City</label>
              <div className="input form-control">{theProperty.city}</div>
            </div>
            <div className="form-group col-md-3">
              <label>State</label>
              <div className="input form-control">{theProperty.city}</div>
            </div>
            <div className="form-group col-md-3">
              <label>Zip</label>
              <div className="input form-control">{theProperty.zip}</div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Pets</label>
              <select name="petsField" className="form-control">
                <option>{theProperty.pets}</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Smoking</label>
              <select name="smokingField" className="form-control">
                <option>{theProperty.smoking}</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputState">Parking</label>
              <select name="parkingField" className="form-control">
                <option>{theProperty.parking}</option>
              </select>
            </div>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">lat</label>
                <div className="form-control input"> {theProperty.lat}</div>

                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">lng</label>
                <div className="form-control input"> {theProperty.lng} </div>

                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Down Payment $</label>
                <div className="input form-control">
                  {theProperty.downPayment}
                </div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Extra Fees $</label>
                <div className="input form-control">{theProperty.fees}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
          </div>
          <li>
            <div className="top-header" />
          </li>
        </div>
      </div>
    );
  }
}

export default PropertyDetails;
