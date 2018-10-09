import React, { Component } from "react";
import axios from "axios";

class AddLease extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFormSubmit = event => {
    event.preventDefault();

    const LeaseObject = {
      startDate: this.state.startDateField,
      endDate: this.state.endDateField,
      imgPath: this.state.imgPath,
      property: this.props.theProperty._id,
      manager: this.props.theProperty.manager
    };

    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}/lease/${this.props.theProperty._id}`,
        LeaseObject,
        {
          withCredentials: true
        }
      )
      .then(leaseFromDB => {
        // console.log("leaseFromDB", leaseFromDB);
        this.setState({
          startDateField: "",
          endDateField: "",
          imageFileField: ""
        });
        this.props.history.push(`/lease/${leaseFromDB.data._id}`);
      })
      .catch(error => console.log(error));
  };

  fieldChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    //console.log("this.props.history", this.props);
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <h1>Residential Rental Lease</h1>

          <div className="row">
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">Start Date</label>
                <input
                  name="startDateField"
                  className="form-control input"
                  type="date"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.startDateField}
                  placeholder="5/6/2018"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
            <div className="field col-md-6">
              <p className="control has-icons-left">
                <label className="my-sm-0">End Date</label>
                <input
                  name="endDateField"
                  className="form-control input"
                  type="date"
                  onChange={e => this.fieldChange(e)}
                  value={this.state.endDateField}
                  placeholder="5/6/2019"
                />
                <span className="icon is-small is-left">
                  <i className="fas fa-lock" />
                </span>
              </p>
            </div>
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

          <div className="form-group">
            <button className="btn btn-info">Next</button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddLease;
