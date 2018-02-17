import React, { Component } from 'react';
import './App.css';
import Nav from './Nav.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Nav />
          <Content />
        </div>
      </div>
    );
  }
}

export default App;
