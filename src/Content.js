import React, { Component } from 'react';
import ContentItem from './ContentItem.js';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <ContentItem />
        <ContentItem />
        <ContentItem />
      </div>
    );
  }
}

export default Content;
