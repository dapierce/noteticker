import React, { Component } from 'react';
import NotebookList from './NotebookList.js';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <NotebookList/>
      </div>
    );
  }
}

export default Nav;
