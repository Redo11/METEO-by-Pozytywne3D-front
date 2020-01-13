
import React, { Component } from "react";
import Header from "./components/header";

import './css/main.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
          <main className="main">
          </main>
      </div>
      
    );
  }
}

export default App;
