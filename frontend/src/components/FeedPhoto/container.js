import React, { Component } from "react";
import FeedPhoto from "./presenter";

class Container extends Component {
  state = {
    seeingLikes: false
  };
  render() {
    return (
      <FeedPhoto
        {...this.props}
        {...this.state}
        openLikes={this._openLikes}
        closeLikes={this._closeLikes}
      />
    );
  }
  _openLikes = () => {
    const { getPhotoLikes, likes } = this.props;
    this.setState({
      seeingLikes: true
    });
    if (!likes) {
      getPhotoLikes();
    }
  };
  _closeLikes = () => {
    this.setState({
      seeingLikes: false
    });
  };
}

export default Container;
