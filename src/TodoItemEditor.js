import React, { Component } from 'react';
import './TodoItemEditor.css';

class TodoItemEditor extends Component {
  render() {
    return (
      <div className="TodoItemEditor">
        <div className="TodoItemEditor__buttons">
          <button className="TodoItemEditor__button TodoItemEditor__button&#45;&#45;save">Save</button>
          <button className="TodoItemEditor__button TodoItemEditor__button&#45;&#45;cancel">Cancel</button>
        </div>
        <input type="text" className="TodoItemEditor__name"/>
        <label className="TodoItemEditor__done-tick">
          <input type="checkbox"/>
            Done
        </label>
        <textarea className="TodoItemEditor__description"></textarea>
      </div>
    );
  }
}

export default TodoItemEditor;
