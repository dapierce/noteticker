import React, { Component } from 'react';

class ContentInput extends Component {
  constructor (props) {
    super(props);
    this.state = {todo: ''};

    this.handleEntry = this.handleEntry.bind(this);
    this.handleAddEntry = this.handleAddEntry.bind(this);
  }

  handleEntry (event) {
    this.setState({item: event.target.value});
  }

  handleAddEntry (event) {

  }

  render() {
    return (
      <form className="content-input" onSubmit={this.handleAddEntry}>
        <textarea className="content-input-textarea"
          onChange={this.handleEntry}
          spellcheck autoFocus placeholder="Type in a new thought..."
        />
        <button className="content-input-button">Add</button>
      </form>
    );
  }
}

export default ContentInput;
