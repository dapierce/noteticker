import React, { Component } from 'react';
import ContentItem from './ContentItem.js';
import ContentInput from './ContentInput.js';

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleAddContent = this.handleAddContent.bind(this);
  }

  handleAddContent(contentText, isTodo) {
    // placeholder -- gets input from ContentInput and creates a content item
    // uuid, timestamp, notebook as well as user input
  }

  render() {
    return (
      <div className="content">
        <div className="content-items">
          <ContentItem />
          <ContentItem />
          <ContentItem />
        </div>
        <ContentInput onAddContent={this.handleAddContent}/>
      </div>
    );
  }
}

export default Content;
