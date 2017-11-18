import React, { Component } from "react";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  render() {
    return (
      <CommentBox
        {...this.state}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
        handleKeyPress={this._handleKeyPress}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value } } = event;
    this.setState({
      comment: value
    });
  };
  _handleSubmit = () => {
    console.log(this.state);
  };
  _handleKeyPress = event => {
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
    }
  };
}

export default Container;
