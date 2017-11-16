import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  render() {
    return <Feed {...this.state} />;
  }
}

export default Container;
