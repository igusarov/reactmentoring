import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.items.map(()=><li className="TodoList__item"><TodoItem/></li>)}
      </ul>
    );
  }
}

export default TodoList;
