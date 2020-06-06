import React from "react";
import Report from "../modules/Report";

class ButtonComponenet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Send",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log(this.props.report);
    event.preventDefault();
  }

  render() {
    return <button onClick={this.handleClick}>Send</button>;
  }
}

export default ButtonComponenet;
