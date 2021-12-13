import React, { Component } from "react";

export default class Login extends Component {


  printLogin = (e) => {
    e.preventDefault();
    console.log(e.target.userName.value);
    console.log(e.target.password.value);
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.printLogin}>
          <label>user name : </label>
          <input type="text" name="userName"></input>
          <br />
          <label>password : </label>
          <input type="password" name="password"></input>
          <br />
          <br />

          <button>log in</button>
        </form>
      </div>
    );
  }
}
