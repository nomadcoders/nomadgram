import React, { Component } from "react";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentDidMount() {
    const { getFeed } = this.props;
    getFeed();
  }
  render() {
    return <Feed {...this.state} />;
  }
}

export default Container;
