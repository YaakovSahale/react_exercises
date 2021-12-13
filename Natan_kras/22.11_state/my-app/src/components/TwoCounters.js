import React from "react";

export default class TwoCounters extends React.Component {
  state = { counter1: 0, counter2: 0 };

  incCounter1 = () => {
    this.setState({ counter1: this.state.counter1 + 1 });
  };

  incCounter2 = () => {
    this.setState({ counter2: this.state.counter1 + 1 });
  };

//   decCounter = () => {
//     this.setState({ counter1: this.state.counter1 - 1 });
//   };

  render() {
    return (
      <div>
        <p>counter1 is:{this.state.counter1}</p>
        <p>counter2 is:{this.state.counter2}</p>
        <button onClick={this.incCounter1}>inc counter1</button>
        <button onClick={this.incCounter2}>inc counter2</button>
        {/* <button onClick={this.decCounter}>click to dec</button> */}
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
