import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
        this.props.items.length > 0 ?
          <ul className="TodoList">
            {this.props.items.map((item)=><li className="TodoList__item" key={item.id}><TodoItem onChecked={this.props.onTodoChecked} onTodoEdit={this.props.onTodoEdit} item={item}/></li>)}
          </ul> : <div>List is empty</div>
    );
  }
}

export default TodoList;
