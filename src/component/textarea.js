import React from "react";
import Report from "../modules/Report";

class WriteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "WRITE CONTENT",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    //alert("An text was submitted: " + this.state.value);

    event.preventDefault();
  }

  handleClick(event) {
    this.props.report.content = this.state.value;
    this.props.report.saveReport();
    event.preventDefault();
  }

  render() {
    return (
      <form action="#" onSubmit={this.handleClick}>
        <label>
          Report:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" />
      </form>
    );
  }
}

export default WriteForm;
