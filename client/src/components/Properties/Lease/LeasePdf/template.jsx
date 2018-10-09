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
      .get(`http://localhost:5000/api/lease/${params.id}`)
      .then(responseFromApi => {
        console.log("responseFromApi.data", responseFromApi.data); //Need To Display all this details and make pdf for print
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

  render() {
    let theProperty = {};
    let theManager = {};
    let theTenant = {};
    if (this.state.property) {
      theProperty = this.state.property;
      theManager = this.state.manager;
      theTenant = this.state.tenant;
    }
    console.log("this.state.property", theProperty);
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
          <hr />
          {/* <!-- Single Line Text Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Title">
              Title <span>(Single Line Text)</span>
            </label>
            <div className="clear">
              <input type="text" id="Title" className="field-textbox" />
            </div>
          </li>
          {/* <!-- Number Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Ref_Number">
              Ref. Number <span>(Number)</span>
            </label>
            <div className="clear">
              <input type="number" id="Ref_Number" className="field-textbox" />
            </div>
          </li>

          {/* <!-- Checkbox Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Interested_In">
              Interested in <span>(Checkbox)</span>
            </label>
            <div className="clear">
              <input
                type="checkbox"
                name="Interested_In"
                id="chkAutomobile"
                value="Automobile"
              />
              <label htmlFor="chkAutomobile">Automobile</label>
              <br />
              <input
                type="checkbox"
                name="Interested_In"
                id="chkFinance"
                value="Finance"
              />
              <label htmlFor="chkFinance">Finance</label>
              <br />
              <input
                type="checkbox"
                name="Interested_In"
                id="chkSports"
                value="Sports"
              />
              <label htmlFor="chkSports">Sports</label>
              <br />
              <input
                type="checkbox"
                name="Interested_In"
                id="chkMusic"
                value="Music"
              />
              <label htmlFor="chkMusic">Music</label>
            </div>
          </li>
          {/* <!-- Extensible List Field --> */}
          {/* <!-- Options in the html will be populated from the eForm mapped field. The value attribute of option will be ignored and will be replaced by the option text defined in the eForm mapped field. --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Countries_Visited">
              Countries Visited <span>(Extensible List)</span>
            </label>
            <div className="clear">
              <select
                id="Countries_Visited"
                className="field-textbox"
                multiple="multiple"
                size="5"
              >
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="China">China</option>
                <option value="India">India</option>
              </select>
            </div>
          </li>
          {/* <!-- Dropdown Field --> */}
          {/* <!-- Options in the html will be populated from the eForm mapped field. The value attribute of option will be ignored and will be replaced by the option text defined in the eForm mapped field. --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Citizenship">
              Citizenship <span>(Dropdown)</span>
            </label>
            <div className="clear">
              <select id="Citizenship" className="field-textbox">
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="Mexico">Mexico</option>
                <option value="China">China</option>
                <option value="India">India</option>
              </select>
            </div>
          </li>
          {/* <!-- Address Field --> */}
          <li className="formrow col1">
            <label className="fieldlabel" htmlFor="Address">
              Address
            </label>
            <div className="clear">
              <input
                type="text"
                id="Address"
                className="field-textbox field-textbox-large"
              />
            </div>
          </li>
          {/* <!-- Group Field --> */}
          {/* <!-- Options in the html will be populated from the eForm mapped field. The value attribute of option will be ignored and will be replaced by the option text defined in the eForm mapped field. --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Group">
              Group
            </label>
            <div className="clear">
              <select id="Group" className="field-textbox">
                <option value="(select one)">(select one)</option>
                <option value="Administrator">Administrator</option>
                <option value="Manager">Manager</option>
              </select>
            </div>
          </li>
          {/* <!-- Assignee Field --> */}
          {/* <!-- Options in the html will be populated from the eForm mapped field. The value attribute of option will be ignored and will be replaced by the option text defined in the eForm mapped field. --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Assignee">
              Assignee
            </label>
            <label className="fieldlabel required">*</label>
            <div className="clear">
              <select id="Assignee" className="field-textbox" required="">
                <option value="(select one)">(select one)</option>
                <option value="James">James</option>
                <option value="John">John</option>
                <option value="Robert">Robert</option>
                <option value="Michael">Michael</option>
              </select>
            </div>
          </li>
          {/* <!-- Status Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Status">
              Status
            </label>
            <label className="fieldlabel required">*</label>
            <div className="clear">
              <select id="Status" className="field-textbox" required="">
                <option value="(select one)">(select one)</option>
                <option value="New">New</option>
                <option value="Open">Open</option>
                <option value="Pending">Pending</option>
                <option value="Close">Close</option>
              </select>
            </div>
          </li>
          {/* <!-- Priority Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Priority">
              Priority
            </label>
            <div className="clear">
              <select id="Priority" className="field-textbox">
                <option value="(select one)">(select one)</option>
                <option value="Low">Low</option>
                <option value="Normal">Normal</option>
                <option value="High">High</option>
                <option value="Urgent">Urgent</option>
              </select>
            </div>
          </li>
          {/* <!-- Due Date Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Due_Date">
              Due Date
            </label>
            <div className="clear">
              <input
                type="date"
                id="Due_Date"
                className="field-textbox"
                placeholder="MM/dd/yyyy"
              />
            </div>
          </li>
          <li>
            <div className="sectionbr/eak clear" />
          </li>
          {/* <!-- Scale Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Rate_Us">
              Rate Us <span>(Scale)</span>
            </label>
            <div className="clear">
              <input type="radio" name="Rate_Us" id="scale1" value="1" />
              <label htmlFor="scale1" className="label-multi-input">
                1
              </label>
              <input type="radio" name="Rate_Us" id="scale2" value="2" />
              <label htmlFor="scale2" className="label-multi-input">
                2
              </label>
              <input type="radio" name="Rate_Us" id="scale3" value="3" />
              <label htmlFor="scale3" className="label-multi-input">
                3
              </label>
              <input type="radio" name="Rate_Us" id="scale4" value="4" />
              <label htmlFor="scale4" className="label-multi-input">
                4
              </label>
              <input type="radio" name="Rate_Us" id="scale5" value="5" />
              <label htmlFor="scale5" className="label-multi-input">
                5
              </label>
            </div>
          </li>
          {/* <!-- Yes/No Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Subscribe_Us">
              Subscribe Us <span>(Yes / No)</span>
            </label>
            <div className="clear">
              <input type="radio" name="Subscribe_Us" id="radYes" value="Yes" />
              <label htmlFor="radYes" className="label-multi-input">
                Yes
              </label>
              <input type="radio" name="Subscribe_Us" id="radNo" value="No" />
              <label htmlFor="radNo" className="label-multi-input">
                No
              </label>
              <input
                type="radio"
                name="Subscribe_Us"
                id="radNone"
                value="None"
              />
              <label htmlFor="radNone" className="label-multi-input">
                (None)
              </label>
            </div>
          </li>
          <li>
            <div className="sectionbr/eak clear" />
          </li>
          {/* <!-- Date Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Order_Date">
              Order Date <span>(Date)</span>
            </label>
            <div className="clear">
              <input
                type="date"
                id="Order_Date"
                className="field-textbox"
                placeholder="MM/dd/yyyy"
              />
            </div>
          </li>
          {/* <!-- Time Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Registration_Time">
              Registration Time <span>(Time)</span>
            </label>
            <div className="clear">
              <input
                type="time"
                id="Registration_Time"
                className="field-textbox"
                placeholder="hh:mm:ss tt"
                step="2"
              />
            </div>
          </li>
          {/* <!-- Decimal Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Gross_Total">
              Gross Total <span>(Decimal)</span>
            </label>
            <div className="clear">
              <input type="number" id="Gross_Total" className="field-textbox" />
            </div>
          </li>
          {/* <!-- Name Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Contact_Person">
              Contact Person <span>(Name)</span>
            </label>
            <div className="clear">
              <input
                type="text"
                id="Contact_Person"
                className="field-textbox"
              />
            </div>
          </li>
          {/* <!-- Phone Field --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Contact_Number">
              Contact Number <span>(Phone)</span>
            </label>
            <div className="clear">
              <input
                type="text"
                id="Contact_Number"
                className="field-textbox"
              />
            </div>
          </li>
          {/* <!-- Email Field --> */}
          <li className="formrow formcol col1">
            <label className="fieldlabel" htmlFor="Email_Address">
              Email Address <span>(Email)</span>
            </label>
            <div className="clear">
              <input
                type="email"
                id="Email_Address"
                className="field-textbox"
              />
            </div>
          </li>
          {/* <!-- Users Field --> */}
          {/* <!-- Options in the html will be populated from the eForm mapped field. The value attribute of option will be ignored and will be replaced by the option text defined in the eForm mapped field. --> */}
          <li className="formrow formcol">
            <label className="fieldlabel" htmlFor="Approvers">
              Approvers <span>(Users)</span>
            </label>
            <div className="clear">
              <select id="Approvers" className="field-textbox">
                <option value="(select one)">(select one)</option>
                <option value="James">James</option>
                <option value="John">John</option>
                <option value="Robert">Robert</option>
                <option value="Michael">Michael</option>
              </select>
            </div>
          </li>
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

              <input
                type="radio"
                name="Payment_Method"
                id="rdoCashOnDelivery"
                value="Cash On Delivery"
              />
              <label htmlFor="rdoCashOnDelivery"> Cash </label>
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
          <li>
            <div className="top-header clear" />
          </li>
        </ul>
      </div>
    );
  }
}

export default LeasePdf;
