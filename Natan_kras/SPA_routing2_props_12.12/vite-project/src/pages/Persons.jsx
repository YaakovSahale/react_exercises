import { Redirect } from "react-router-dom";
import { Component, Fragment } from "react";

export default class Persons extends Component {
  state = {
    redirectAddPerson: false,
    redirectDetails: false,
  };

  redirectToAddPersons = () => this.setState({ redirectAddPerson: true });

  render() {
    if (this.state.redirectAddPerson) {
      return <Redirect to="/AddPersons" />;
    }

    if (this.state.redirectDetails) {
      return <Redirect to="/Details" />;
    }

    const personsElement = this.props.persons.map((person, i) => (
      <li key={i}>
        {person.name} , {person.age} ,{" "}
        <button
          onClick={() => {
            this.props.setCurrentPerson(person);
            this.setState({ redirectDetails: true });
          }}
        >
          Details
        </button>
      </li>
    ));

    return (
      <div>
        <h1>Persons page</h1>
        <button onClick={this.redirectToAddPersons}>Add Person</button>
        <ul>{personsElement}</ul>
      </div>
    );
  }
}
