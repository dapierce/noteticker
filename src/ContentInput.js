import React, { Component } from 'react';

class ContentInput extends Component {


  render() {
    return (
      <div className="content-input">
        <textarea className="content-input-textarea" />
        <button className="content-input-button" onClick={this.handleAddEntry}>Add</button>
      </div>
    );
  }
}

export default ContentInput;
