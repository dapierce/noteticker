import React, { Component } from 'react';
import './App.css';
import Panel from './Panel.js';
import Content from './Content.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Panel />
        <Content />
      </div>
    );
  }
}

export default App;
