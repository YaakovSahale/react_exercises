import { Redirect } from "react-router-dom";
import { Component } from "react";

export default class AddPersons extends Component {
  state = {
    isRedirect: false,
  };
  personName = "";
  age = 0;
  biography = "";



  render() {
    if (this.state.isRedirect) {
      return <Redirect to="/Persons" />;
    }

    return (
      <div>
        <h1>Add Person page</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            this.props.addPersons(this.personName, this.age, this.biography);
            this.setState({ isRedirect: true });
            // return <Redirect to="/AddPersons" />;
          }}
        >
          <label>name: </label>
          <input
            type="text"
            onChange={(e) => (this.personName = e.target.value)}
          />

          <br />
          <label>age: </label>
          <input
            type="number"
            onChange={(e) => (this.age = e.target.value)}
          />
          <br />
          <label>biography: </label>
          <textarea
            cols="20"
            rows="5"
            onChange={(e) => (this.biography = e.target.value)}
          ></textarea>
          <br />
          <br />
          <input type="submit" value={"Add Person"} />
        </form>
      </div>
    );
  }
}
