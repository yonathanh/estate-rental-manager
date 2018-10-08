import React, { Component } from "react";
import axios from "axios";
import AddLease from "../AddLease/AddLease";
import PropertyDetails from "../../PropertyDetails/PropertyDetails";
import "./LeaseApplication.css";

class LeaseApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getSingleProperty = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/properties/${params.id}`)
      .then(responseFromApi => {
        //console.log("responseFromApi.data", responseFromApi.data);
        const theProperty = responseFromApi.data;
        this.setState(theProperty);
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getSingleProperty();
  }

  render() {
    //console.log("this.state", this.state);
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-5">
            <PropertyDetails theProperty={this.state} />
          </div>
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-5">
            <AddLease {...this.props} theProperty={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default LeaseApplication;
