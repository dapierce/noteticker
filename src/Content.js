import React, { Component } from 'react';
import ContentItem from './ContentItem.js';
import ContentInput from './ContentInput.js';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-items">
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
        <ContentInput />
      </div>
    );
  }
}

export default Content;
