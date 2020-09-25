import React, { Component } from "react";
import Hello from "./Hello";

export default class App extends Component {
  render() {
    const stud = ["santosh", "princy", "nagaraj", "sweta", "ganesh"];
    return (
      <div className="App">
        {stud.map((name, index) => (
          <Hello name={name} index={index} />
        ))}
      </div>
    );
  }
}
