import "./App.css";
import Home from "./pages/Home";
import Persons from "./pages/Persons";
import AddPersons from "./pages/AddPersons";
import Details from "./pages/Details";
import { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default class App extends Component {
  persons = [
    { name: "avi", age: 30, biography: "i love to dance" },
    { name: "yosi", age: 70, biography: "i eat falafel every day" },
  ];

  currentName = "";
  currentAge = "";
  currentBiography = "";

  addPersons = (name, age, biography) => {
    this.persons.push({ name, age, biography });
    console.log(this.persons);
    // this.setState((state) => ({ ...state, persons: newPersons }));
  };

  setCurrentPerson = (currentPerson) => {
    console.log(currentPerson);
    this.currentName = currentPerson.name;
    this.currentAge = currentPerson.age;
    this.currentBiography = currentPerson.biography;
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Link to="/">Home</Link> <Link to="/Persons">Persons</Link>
          <hr />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              exact
              path="/Persons"
              render={() => (
                <Persons
                  setCurrentPerson={this.setCurrentPerson}
                  persons={this.persons}
                />
              )}
            />
            <Route
              exact
              path="/AddPersons"
              render={() => <AddPersons addPersons={this.addPersons} />}
            />
            <Route
              exact
              path={"/Details"}
              render={() => (
                <Details
                  name={this.currentName}
                  age={this.currentAge}
                  biography={this.currentBiography}
                />
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
