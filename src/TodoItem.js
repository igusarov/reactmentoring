import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render() {
    return (
      <div className="TodoItem">
        <div className="TodoItem__col">
          <input type="checkbox"/>
            <div className="TodoItem__name">todo 1</div>
        </div>
        <div className="TodoItem__col">
          <div className="TodoItem__button TodoItem__button--edit"></div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
