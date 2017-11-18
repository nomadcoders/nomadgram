import React, { Component } from "react";
import PropTypes from "prop-types";
import CommentBox from "./presenter";

class Container extends Component {
  state = {
    comment: ""
  };
  static propTypes = {
    photoId: PropTypes.number.isRequired,
    submitComment: PropTypes.func.isRequired
  };
  render() {
    return (
      <CommentBox
        {...this.state}
        handleInputChange={this._handleInputChange}
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
  _handleKeyPress = event => {
    const { submitComment } = this.props;
    const { message } = this.state;
    const { key } = event;
    if (key === "Enter") {
      event.preventDefault();
      submitComment(message);
    }
  };
}

export default Container;
