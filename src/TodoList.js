import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
      <ul className="TodoList">
        {this.props.items.map((item)=><li className="TodoList__item" key={item.id}><TodoItem onItemEdit={this.props.onItemEdit} item={item}/></li>)}
      </ul>
    );
  }
}

export default TodoList;
