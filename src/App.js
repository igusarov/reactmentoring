import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      categories : []
    };

    this.addCategory = this.addCategory.bind(this);
  }

  addCategory(name) {
    this.state.categories.push(name);
    this.setState({categories: this.state.categories})
  }

  render() {
    return (
      <div className="App">
        <div className="App__header">
          <Header
            onAddCategory={this.addCategory}
          />
        </div>
        <div className="App__content">
          <Content
            editor={false}
            categories={this.state.categories}
          />
        </div>
      </div>
    );
  }
}

export default App;
