import React, { Component } from "react";
import axios from "axios";
import AddLease from "../AddLease/AddLease";
import "./LeaseDetails.css";

class LeaseDetails extends Component {
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
    console.log("this.state", this.state.theProperty);
    return (
      <div className="container-fluid h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col col-sm-6 col-md-6 col-lg-4 col-xl-5">
            <AddLease />
          </div>
        </div>
      </div>
    );
  }
}

export default LeaseDetails;
