import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

const SHOW_TODO_EDITOR = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Header/>
        </div>
        <div className="App__content">
          <Content editor={SHOW_TODO_EDITOR}/>
        </div>
      </div>
    );
  }
}

export default App;
