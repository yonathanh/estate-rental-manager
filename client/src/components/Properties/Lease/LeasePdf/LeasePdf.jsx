import React, { Component } from "react";
import axios from "axios";
import PropertyDetails from "../../PropertyDetails/PropertyDetails";
import ProfileDetails from "../../../Auth/ProfileDetails";

import "./LeasePdf.css";

class LeasePdf extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleLease = () => {
    const { params } = this.props.match;
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/lease/${params.id}`)
      .then(responseFromApi => {
        // console.log("responseFromApi.data", responseFromApi.data); //Need To Display all this details and make pdf for print
        const theLease = responseFromApi.data;
        this.setState(theLease);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleLease();
  }

  approvingStatus = () => {
    if (this.state.manager._id === this.props.theUser._id) {
      // console.log(this.props.theUser._id);
      const { params } = this.props.match;

      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/lease/${params.id}`,
          { status: "Approved" },
          {
            withCredentials: true
          }
        )
        .then(leaseFromDB => {
          this.getSingleLease();
          //  console.log("leaseFromDB", leaseFromDB.data.leaseFromDB.status);
          //this.props.history.push(`/lease/${leaseFromDB.data._id}`);
        })
        .catch(error => console.log(error));
    } else {
      console.log("this.state.manager._id", this.state.manager._id);
      console.log("this.props.theUser._id", this.props.theUser._id);
    }
  };

  render() {
    let theProperty = {};
    let theManager = {};
    let theTenant = {};
    if (this.state.property) {
      theProperty = this.state.property;
      theManager = this.state.manager;
      theTenant = this.state.tenant;
    }
    //console.log(this.props.theUser);
    // console.log("this.state.property", theProperty);
    return (
      <div id="customform" className="customform">
        <li>
          <div className="top-header" />
        </li>
        <li>
          <div className="form-header-group">
            <div>
              <h2 className="form-header">
                residential rental application form
              </h2>
            </div>
          </div>
        </li>
        <li className="formrow clear">
          <div className="section-header">
            <label className="fieldlabel">Property Fields</label>
          </div>
        </li>

        <label>Property Oner</label>
        <ProfileDetails theUser={theManager} />
        <hr />
        <PropertyDetails theProperty={theProperty} />

        <label>Applicant Details</label>
        <ProfileDetails theUser={theTenant} />

        <ul className="field-container">
          <hr />
          <li className="formrow clear">
            <div className="section-header">
              <label className="fieldlabel">Lease Fields</label>
            </div>
          </li>
          <div className="row">
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">Start Date</label>
                <div className="form-control input">{this.state.startDate}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
            <div className="field col-md-6">
              <div className="control has-icons-left">
                <label className="my-sm-0">End Date</label>
                <div className="form-control input">{this.state.endDate}</div>
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </div>
            </div>
          </div>
          <div>
            <div className="wrapper col-8 ml-5">
              <div className="form-group col-12">
                <label>status</label>
                <div className="input form-control">
                  <h3>{this.state.status}</h3>
                </div>
              </div>
              {theManager._id === this.props.theUser._id && (
                <button
                  onClick={this.approvingStatus}
                  className="btn-info mt-3"
                >
                  Approve
                </button>
              )}
            </div>
          </div>
          <hr />

          {/* <!-- File Upload Field --> */}
          <li className="formrow col1">
            <label className="fieldlabel" htmlFor="Upload_Documents">
              Upload Documents <span>(File Upload)</span>
            </label>
            <div className="clear">
              <input type="file" id="Upload_Documents" />
            </div>
          </li>
          {/* <!-- File Download Field --> */}
          {/* <!-- The input type filedownload in the html will be replaced by the eForm mapped file download field. --> */}
          <li className="formrow col1">
            <label className="fieldlabel" htmlFor="Download_Sample">
              Download Sample <span>(File Download)</span>
            </label>
            <div className="clear">
              <input
                type="filedownload"
                id="Download_Sample"
                className="field-textbox field-textbox-large height100"
                placeholder="placeholder for file download control"
              />
            </div>
          </li>

          {/* <!-- Multiple Choice Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Payment_Method">
              Payment Method <span>(Multiple Choice)</span>
            </label>
            <div className="clear">
              <input
                type="radio"
                name="Payment_Method"
                id="rdoPaypal"
                value="PayPal"
              />
              <label htmlFor="rdoPaypal"> PayPal </label>

              <input
                type="radio"
                name="Payment_Method"
                id="rdoDebitCard"
                value="Debit Card"
              />
              <label htmlFor="rdoDebitCard"> Bank </label>

              <input
                type="radio"
                name="Payment_Method"
                id="rdoCreditCard"
                value="Credit Card"
              />
              <label htmlFor="rdoCreditCard"> Credit Card </label>
            </div>
          </li>
          {/* <!-- Signature Field --> */}
          {/* <!-- The input type field in the html will be replaced by the eForm mapped signature field. --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Sign_Here">
              Sign Here <span>(Signature)</span>
            </label>
            <div className="clear">
              <input
                type="signature"
                id="Sign_Here"
                className="field-textbox height100"
                placeholder="placeholder for signature control"
              />
            </div>
          </li>
          <li className="formrow"> </li>
          <button className="btn btn-info my-2">Submit</button>
          <li>
            <div className="top-header clear" />
          </li>
        </ul>
      </div>
    );
  }
}

export default LeasePdf;
