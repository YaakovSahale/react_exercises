import { Component } from "react";

export default class Persons extends Component {
  state = {
    arrayPersons: [
      { id: 1, firstName: "avi", lastName: "shalom" },
      { id: 2, firstName: "baruch", lastName: "dego" },
      { id: 3, firstName: "gili", lastName: "nevo" },
    ],
    title: null,
    body: '',
    id: '',
  };

  tempArrayPersons = this.state.arrayPersons;

  deleteBtn = (i) => {
    this.tempArrayPersons.splice(i, 1);
    this.setState({ arrayPersons: this.tempArrayPersons });
  };

  editBtn = (person) => {
    this.setState({ title: person.firstName, body: person.lastName ,editPersonId:person.id});
  };

  saveFirstName = (e) => {
    this.setState({ inputFirst: e.target.value });
  };

  saveLastName = (e) => {
    this.setState({ inputLast: e.target.value });
  };

  formUpdate = (e) => {
    e.preventDefault();
    
    let editPerson = this.tempArrayPersons.find(
      (person) => person.id === this.state.editPersonId
    );
    console.log(editPerson);
    editPerson.firstName = this.state.inputFirst
    editPerson.lastName = this.state.inputLast

    this.setState({ arrayPersons: this.tempArrayPersons });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.formUpdate}>
          <label>first name : </label>
          <input
            onChange={this.saveFirstName}
            type="text"
            name="firstName"
            value={this.state.inputFirst}
          />
          <br />
          <label>last name : </label>
          <input
            onChange={this.saveLastName}
            type="text"
            name="lastName"
            value={this.state.inputLast}
          />
          <br />
          <br />
          <button>Update</button>
        </form>
        {this.state.arrayPersons.map((person, i) => {
          return (
            <div key={person.id}>
              <h3>
                {person.firstName} {person.lastName}
              </h3>
              <button
                onClick={() => {
                  this.deleteBtn(i);
                }}
              >
                Delete
              </button>

              <button
                onClick={() => {
                  this.editBtn(person);
                }}
              >
                Edit
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
