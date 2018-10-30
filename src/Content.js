import React, { Component } from 'react';
import uuid from 'uuid/v1';

import ContentItem from './ContentItem.js';
import ContentInput from './ContentInput.js';

class Content extends Component {
  constructor(props) {
    super(props);
    this.handleAddContent = this.handleAddContent.bind(this);
  }

  handleAddContent(contentText, isTodo) {
    // this.setState({
    //   notebook: [
    //     ...this.state.notebook,
    //     {
    //       id: uuid(),
    //       text: contentText,
    //       timestamp: Date.now,
    //       isTask: false,
    //       isComplete: false,
    //       taskCompleteTimestamp: undefined
    //     }
    //   ]
    // });
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
