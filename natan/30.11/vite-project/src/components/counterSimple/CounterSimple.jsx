import { Component } from "react";
import CounterMessage from "./CounterMessage";
import CounterButton from "./CounterButton";

export default class CounterSimple extends Component {
  state = {
    counter: 0,
  };
  render() {
    const { counter } = this.state;

    const saveCounter = () => {
      this.setState({ counter: counter + 1 });
    };
    return (
      <>
        <h1>counter Simple</h1>
        <CounterButton saveCounter={saveCounter} />
        <CounterMessage counter={counter} />
      </>
    );
  }
}
