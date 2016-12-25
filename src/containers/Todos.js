import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoItemEditor from '../components/TodoItemEditor';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Todos extends Component {

  constructor(props) {
    super(props);
  }

  onTodoEdit(todo) {
    this.props.actions.openTodoEditor(todo);
  }

  onTodoEditCancel() {
    this.props.actions.closeTodoEditor();
  }

  onTodoEditSave(todo, newTodo) {
    this.props.actions.updateTodo(todo, newTodo);
    this.props.actions.closeTodoEditor();
  }

  onTodoChecked(todo) {
    let newTodo = {...todo};
    newTodo.done = !newTodo.done;
    this.props.actions.updateTodo(todo, newTodo);
  }

  ascId(a, b) {
    return a.id < b.id;
  }

  render() {
    return (
    !this.props.layout.selectedTodo ? <TodoList onTodoChecked={this.onTodoChecked.bind(this)}
                  onTodoEdit={this.onTodoEdit.bind(this)}
                  items={this.props.items.sort(this.ascId.bind(this))}/> :
            <TodoItemEditor item={this.props.layout.selectedTodo}
                            onCancel={this.onTodoEditCancel.bind(this)}
                            onSave={this.onTodoEditSave.bind(this)}/>
    );
  }
}

const mapStateToProps = state => ({
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Todos);