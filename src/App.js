import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users};
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // componentDidMount() {
  //   async function getMonsters() {
  //     const apiUrl = ('https://jsonplaceholder.typicode.com/users')
  //     try {
  //       const response = await fetch(apiUrl);
  //       (response) => {

  //       }
  //     } catch (error) {
  //       // alert(error);
  //     }
  //   }
  // }


  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
