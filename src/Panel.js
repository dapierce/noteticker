import React, { Component } from 'react';
import Search from './Search.js';
import NotebookList from './NotebookList.js';

class Panel extends Component {
  render() {
    return (
      <div className="panel">
        <div className="panel-heading">
          <h1 className="header">Noteticker</h1>
          <Search />
        </div>
        <div className="panel-notebook-list">
          <NotebookList/>
        </div>
        <div className="panel-buttons">
          <button className="button-new" title="Create a New Notebook">+ New Notebook</button>
          <button className="button-prefs square" title="Preferences">
            <span role="img" aria-label="Wrench">🔧</span>
          </button>
          <button className="button-help square" title="Help">
            <span role="img" aria-label="Question Mark">❔</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Panel;
