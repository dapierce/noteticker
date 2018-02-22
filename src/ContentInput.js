import React, { Component } from 'react';

class ContentInput extends Component {


  render() {
    return (
      <div className="content-input">
        <textarea className="new-content-input" />
        <button className="new-content-button" onClick={this.handleAddEntry}>Add</button>
      </div>
    );
  }
}

export default ContentInput;
