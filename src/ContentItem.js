import React, { Component } from 'react';

class ContentItem extends Component {
  render() {
    return (
      <div className="content-item">
        <div className="timestamp">1/11/2018</div>
        <div className="content-text">This is content!</div>
      </div>
    );
  }
}

export default ContentItem;
