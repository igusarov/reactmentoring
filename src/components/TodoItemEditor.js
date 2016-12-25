import React, { Component } from 'react';
import './TodoItemEditor.css';

class TodoItemEditor extends Component {

  onSubmit(e) {
    e.preventDefault();
    let item = {...this.props.item};
    item.name = this.refs.name.value;
    item.description = this.refs.description.value;
    item.done = this.refs.done.checked;

    this.props.onSave(this.props.item, item);
  }

  onCancel(e) {
    e.preventDefault();
    this.props.onCancel();
  }

  render() {
    return (
      <div className="TodoItemEditor">
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="TodoItemEditor__buttons">
            <input type="submit" onClick={this.onSubmit.bind(this)} className="TodoItemEditor__button TodoItemEditor__button&#45;&#45;save" value="Save"/>
            <button onClick={this.onCancel.bind(this)} className="TodoItemEditor__button TodoItemEditor__button&#45;&#45;cancel">Cancel</button>
          </div>
          <input ref="name" type="text" defaultValue={this.props.item.name} className="TodoItemEditor__name"/>
          <label className="TodoItemEditor__done-tick">
            <input ref="done" defaultChecked={this.props.item.done} type="checkbox" />
              Done
          </label>
          <textarea ref="description" className="TodoItemEditor__description" defaultValue={this.props.item.description}></textarea>
        </form>
      </div>
    );
  }
}

export default TodoItemEditor;
