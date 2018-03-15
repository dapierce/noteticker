import React, { Component } from 'react';
import NotebookListItem from './NotebookListItem.js';

class NotebookList extends Component {
  render() {
    return (
      <div className="notebook-list">
        <ul className="list-tasks">
          <li>✅ Tasks</li>
        </ul>
        <hr/>
        <ul className="list-notebooks">
          <NotebookListItem />
          <NotebookListItem />
        </ul>
      </div>
    );
  }
}

export default NotebookList;
