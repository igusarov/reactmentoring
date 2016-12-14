import React, { Component } from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';

class TodoList extends Component {
  render() {
    return (
        this.props.items.length > 0 ?
          <ul className="TodoList">
            {this.props.items.map((item)=><li className="TodoList__item" key={item.id}><TodoItem onItemUpdated={this.props.onItemUpdated} onItemEdit={this.props.onItemEdit} item={item}/></li>)}
          </ul> : <div>List is empty</div>
    );
  }
}

export default TodoList;
