import React, { Component } from "react";
import PhotoActions from "./presenter";

class Container extends Component {
  render() {
    return <PhotoActions {...this.props} />;
  }
}

export default Container;
