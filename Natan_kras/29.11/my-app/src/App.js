import { Component } from "react";
import GetPostById from "./components/GetPostById";
import "./App.css";

class App extends Component {
  state = {
    input: 1,
  };
  getInput = (e) => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="App">
        {/* <Persons /> */}
        <label>enter post id: </label>
        <input onChange={this.getInput} type="text" />
        <br />
        <GetPostById id={this.state.input} />
      </div>
    );
  }
}

export default App;
