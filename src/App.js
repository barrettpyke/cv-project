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
    <div id="container">
      <div id="header">
        <h1 id="heading">CV Generator</h1>
        <button type="button" id="printButton" className="btn btn-success">Print to PDF</button>
      </div>
        <General />
        <Education />
        <Experience />
        <div id="footer">
          <div id="footerText">Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </div>
    </div>
  );
}
}

export default App;
