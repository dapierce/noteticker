import React, { Component } from 'react';
import ContentItem from './ContentItem';
import ContentNew from './ContentNew';

class Content extends Component {
  render() {
    return (
      <div className="content">
        <div className="content-items">
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
        <ContentNew />
      </div>
    );
  }
}

export default Content;
