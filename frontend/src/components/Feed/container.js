import React, { Component } from "react";
import PropTypes from "prop-types";
import Feed from "./presenter";

class Container extends Component {
  state = {
    loading: true
  };
  static propTypes = {
    getFeed: PropTypes.func.isRequired,
    feed: PropTypes.array
  };
  componentDidMount() {
    const { getFeed } = this.props;
    getFeed();
  }
  componentWillReceiveProps = nextProps => {
    if (nextProps.feed) {
      this.setState({
        loading: false,
        feed: nextProps.feed
      });
    }
  };
  render() {
    return <Feed {...this.state} />;
  }
}

export default Container;
