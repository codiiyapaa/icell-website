import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Navbar from "../components/Navbar";

class NotFound extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Redirect to="/comingsoon" />
        Contact Us
      </div>
    );
  }
}

export default NotFound;
