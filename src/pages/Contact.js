import React, { Component } from "react";
import "../styles/Contact.css";

class Contact extends Component {
  state = {
    value: "",
  };

  changeValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div className="contact">
        <form action="" onSubmit={this.handleSubmit}>
          <h3>Napisz do nas</h3>
          <textarea
            onChange={this.changeValue}
            value={this.state.value}
            placeholder="wpisz wiadomość"
          ></textarea>
          <button>Wyślij</button>
        </form>
      </div>
    );
  }
}

export default Contact;
