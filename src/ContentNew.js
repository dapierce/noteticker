import React, { Component } from 'react';

class ContentNew extends Component {


  render() {
    return (
      <div className="content-new">
        <textarea className="new-content-input" />
        <button className="new-content-button" onClick={this.handleAddEntry}>Add</button>
      </div>
    );
  }
}

export default ContentNew;
