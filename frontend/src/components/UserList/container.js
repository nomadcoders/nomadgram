import React, { Component } from "react";
import UserList from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.userList) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return <UserList {...this.props} {...this.state} />;
  }
}

export default Container;
