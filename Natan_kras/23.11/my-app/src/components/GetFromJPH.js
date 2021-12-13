import axios from "axios";
import { Component } from "react";

export default class GetFromJPHWithForm extends Component {
  state = { urlLength: null, myName: "", test: {n"hello" };
  render() {
    const getUrl = (e) => {
      const url = this.state.url;
      axios
        .get(url)
        .then((res) => {
          this.setState({ urlLength: res.data.length });
        })
        .catch((err) => console.log(err));
    };

    return (
      <div>
        <h1>Json placeholder</h1>
        <input onChange={(e)=>{this.setState({myName: e.target.value})}}name="url" type="text" placeholder="enter URL" />
        <button>Get</button>
        <br />
        <p>{this.state.myName}</p>
        <p>{this.state.test}</p>
      </div>
    );
  }
}
