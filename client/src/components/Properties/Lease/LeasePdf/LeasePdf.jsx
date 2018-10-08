import React, { Component } from "react";
import axios from "axios";

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
    return <div>lskjglksarjrgl</div>;
  }
}

export default LeasePdf;
