import React, { Component } from 'react';

class NotebookListItem extends Component {
  render() {
    return (
      <li className="notebook-list-item">
        <span role="img" aria-label="Notebook">📓</span> item
      </li>
    );
  }
}

export default NotebookListItem;
