import React, { Component } from "react";

export default class Login_with_validation extends Component {
  state = {disabled: true ,password:'',name:''};

  printLogin = (e) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log(e.target.password.value);
  };

  onChangeUserName = (e) => {this.setState({ passColor: e.target.value })};

  onChangePassword = (e) => {this.setState({ name: e.target.value })};

  isValidationOk = ()=> this.state.password.length >= 5


  render() {
    // const passColor ={ isValidationOk  ? 'red' : 'black'}
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.printLogin}>
          <label>user name : </label>
          <input
            style={{ color: this.state.passColor }}

            onChange={this.onChangeUserName}
            type="text"
            name="userName"
          ></input>
          <br />
          <label>password : </label>
          <input
            style={{ color: this.state.passColor }}
            onChange={this.onChangePassword}
            type="password"
            name="password"
          ></input>
          <br />
          <br />

          <button disabled={this.state.disabled} 
          >log in</button>
        </form>
      </div>
    );
  }
}
