import React from "react";
import doPost from "../utils/fetch";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClick = (event) => {
    event.preventDefault();
    console.log(event);
    let response = doPost("http://localhost:3000/test");
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onClick}>
          <input type="submit" value="Send Transaction" />
        </form>
      </div>
    );
  }
}
