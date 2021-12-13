import { Component } from "react";

export default class ToggleColor extends Component {
  state = { textColor: "red" };

  changeColor = () => {
    // if (this.state.textColor === "red") {
    //   return this.setState({ textColor: "green" });
    // }
    // return this.setState({ textColor: "red" });

    this.setState({ textColor: this.state.textColor === "red" ? "green" : "red" })

  };
  render() {
    return (
      <div>
        <p onClick={this.changeColor} style={{ color: this.state.textColor }}>
          {this.props.text}
        </p>
      </div>
    );
  }
}

//ternary :? operator