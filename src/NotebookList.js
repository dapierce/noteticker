import React, { Component } from 'react';
import NotebookListItem from './NotebookListItem.js';

class NotebookList extends Component {
  render() {
    return (
      <div className="notebook-list">
        <ul>
          <li>Tasks</li>
        </ul>
        <hr/>
        <ul>
          <NotebookListItem />
          <NotebookListItem />
        </ul>
      </div>
    );
  }
}

export default NotebookList;
