import React, { Component } from "react";
import General from './components/General';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends Component {
  constructor() {
    super();
  }


render() {
  return (
    <div>
      <div id="header">
        <h1 id="heading">CV Generator</h1>
      </div>
        <General />
        <Education />
        <Experience />
    </div>
  );
}
}

export default App;
