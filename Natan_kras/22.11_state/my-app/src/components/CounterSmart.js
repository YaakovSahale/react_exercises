import React from "react";

export default class CounterSmart extends React.Component {
  state = { counter: this.props.startValue };

  incCounter = () => {
    this.setState({ counter: this.state.counter + 1 }, () => {
      console.log(this.state.counter);
    });
  };

  decCounter = () => {
    this.setState({ counter: this.state.counter - 1 }, () => {
      console.log(this.state.counter);
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button onClick={this.incCounter}>click to inc</button>
        <button onClick={this.decCounter}>click to dec</button>
      </div>
    );
  }
}

// 1) force update
// 2) move new parameters with props
// 3) set state

// React components has a built-in state object.
// The state object is where you store property values that belongs to the component.
// When the state object changes, the component re-renders.
