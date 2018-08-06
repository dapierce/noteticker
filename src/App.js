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
  render() {
    return (
      <div className="App">
        <ReflexContainer orientation="vertical">

          <ReflexElement className="left-panel" size="250" minSize="175" maxSize="600">
            <Panel />
          </ReflexElement>

          <ReflexSplitter propagate={true}/>

          <ReflexElement className="right-pane">
            <Content />
          </ReflexElement>

        </ReflexContainer>
      </div>
    );
  }
}

export default App;
