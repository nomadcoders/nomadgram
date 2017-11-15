import React, { Component } from "react";
import SignupForm from "./presenter";

class Container extends Component {
  state = {
    email: "",
    fullName: "",
    username: "",
    password: ""
  };
  render() {
    const { email, fullName, username, password } = this.state;
    return (
      <SignupForm
        emailValue={email}
        fullNameValue={fullName}
        usernameValue={username}
        passwordValue={password}
        handleInputChange={this._handleInputChange}
        handleSubmit={this._handleSubmit}
      />
    );
  }
  _handleInputChange = event => {
    const { target: { value, name } } = event;
    this.setState({
      [name]: value
    });
  };
  _handleSubmit = event => {
    event.preventDefault();
  };
}

export default Container;
