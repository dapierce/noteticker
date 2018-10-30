import React, { Component } from 'react';

class ContentInput extends Component {
  constructor (props) {
    super(props);
    this.state = {entry: ''};

    this.handleEntry = this.handleEntry.bind(this);
    this.handleAddEntry = this.handleAddEntry.bind(this);
  }

  handleEntry (event) {
    this.setState({entry: event.target.value});
  }

  handleAddEntry (event) {
    event.preventDefault();
    var addEntry = this.state.entry;

    if(addEntry.length > 0) {
      this.props.onAddContent(addEntry);
      this.setState({entry: ''});
      this.refs.entryText.value = '';
    }
    
    this.refs.entryText.focus();
  }

  render() {
    return (
      <form className="content-input" onSubmit={this.handleAddEntry}>
        <textarea className="content-input-textarea"
          ref="entryText"
          onChange={this.handleEntry}
          spellCheck autoFocus placeholder="Type in a new thought..."
        />
        <button className="content-input-button">Add</button>
      </form>
    );
  }
}

export default ContentInput;
