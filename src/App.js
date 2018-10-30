import React, { Component } from 'react'
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex';

import 'react-reflex/styles.css'

import './App.css';
import Panel from './Panel.js';
import Content from './Content.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleNotebook = this.handleNotebook.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTasks = this.handleTasks.bind(this);
    this.handleAddNotebook = this.handleAddNotebook.bind(this);
    this.state = {
      search: '',
      selectedNotebook: '',
      onTasks: false
    }
  }

  handleNotebook(notebook) {
    return notebook;
  }

  handleSearch(search) {
    return search;
  }

  handleTasks() {
    return true;
  }

  handleAddNotebook(name) {
    return name;
  }

  render() {
    var {search, selectedNotebook} = this.state;
    return (
      <div className="App">
        <ReflexContainer orientation="vertical">

          <ReflexElement className="left-panel" size="250" minSize="175" maxSize="600">
            <Panel selectNotebook={this.handleNotebook} onSearch={this.handleSearch}/>
          </ReflexElement>

          <ReflexSplitter propagate={true}/>

          <ReflexElement className="right-pane">
            <Content notebook={selectedNotebook} searchResults={search}/>
          </ReflexElement>

        </ReflexContainer>
      </div>
    );
  }
}

export default App;
