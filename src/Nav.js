import React, { Component } from 'react';
import Search from './Search.js';
import NotebookList from './NotebookList.js';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1 className="App-header">Noteticker</h1>
        <Search />
        <NotebookList/>
        <button className="button-new">+</button>
      </div>
    );
  }
}

export default Nav;
