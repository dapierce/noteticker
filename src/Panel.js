import React, { Component } from 'react';
import Search from './Search.js';
import NotebookList from './NotebookList.js';

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <h1 className="header">Noteticker</h1>
        <Search />
        <NotebookList/>
        <button className="button-new">+</button>
      </div>
    );
  }
}

export default Panel;
