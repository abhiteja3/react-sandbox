import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  state = {
    userName: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data);
        this.setState({ userName: "" });
      });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={e => this.setState({ userName: e.target.value })}
          type="text"
          placeholder="username"
        />
        <button type="submit">Add Card</button>
      </form>
    );
  }
}

export default Form;
