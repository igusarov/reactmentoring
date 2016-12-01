import React, { Component } from 'react';
import './CategoryItem.css';

class App extends Component {
  render() {
    return (
      <div className="CategoryItem">
        <div className="CategoryItem__col">
          <div className="CategoryItem__name">{this.props.item}</div>
          <div className="CategoryItem__button CategoryItem__button--edit"></div>
        </div>
        <div className="CategoryItem__col CategoryItem__col">
          <div className="CategoryItem__button CategoryItem__button--delete"></div>
          <div className="CategoryItem__button CategoryItem__button--add"></div>
        </div>
      </div>
    );
  }
}

export default App;
