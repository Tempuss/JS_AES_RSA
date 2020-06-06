import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Read, Write } from "./";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/read" component={Read} />
        <Route path="/write" component={Write} />
      </div>
    );
  }
}

export default App;
