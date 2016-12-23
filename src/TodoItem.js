import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

  onEdit(){
    this.props.onTodoEdit(this.props.item);
  }

  onChange() {
    this.props.onChecked(this.props.item);
  }

  render() {
    return (
      <div className="TodoItem">
        <div className="TodoItem__col">
          <input type="checkbox" defaultChecked={this.props.item.done} onChange={this.onChange.bind(this)}/>
            <div className="TodoItem__name">{this.props.item.name}</div>
        </div>
        <div className="TodoItem__col">
            <div className="TodoItem__button TodoItem__button--edit" onClick={this.onEdit.bind(this)}>
            </div>
        </div>
      </div>
    );
  }
}

export default TodoItem;
