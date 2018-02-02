import React, { Component } from 'react';
import Search from './Search.js';

class Toolbar extends Component {
  render() {
    return (
      <div className="App-header">
        <button className="button-new">+</button>
        <Search />
        <h1>Noteticker</h1>
      </div>
    );
  }
}

export default Toolbar;
