import React, { Component } from 'react';
import CategoryList from './CategoryList';
import TodoList from './TodoList';
import TodoItemEditor from './TodoItemEditor';
import './Content.css';

class Content extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  onTodoEdit(todo) {
    this.setState({selectedTodo : todo});
  }

  onTodoEditCancel() {
    this.setState({selectedTodo : null});
  }

  onTodoEditSave() {
    this.props.onTodoUpdated();
    this.setState({selectedTodo : null});
  }

  onMoveTo(category) {
    this.props.onMoveTodoToCategory(this.state.selectedTodo, category);
    this.setState({selectedTodo : null});
  }

  render() {
    return (
      <div className="Content">
        <div className="Content__col Content__col--left">
          <CategoryList
            items={this.props.categories}
            onAddCategory={this.props.onAddSubCategory}
            onDeleteCategory={this.props.onDeleteCategory}
            onSaveCategory={this.props.onSaveCategory}
            onEditCategory={this.props.onEditCategory}
            showMoveButton={this.state.selectedTodo ? true : false}
            onMoveTo={this.onMoveTo.bind(this)}
            selectedCategory={this.props.selectedCategory}
            />
        </div>
        <div className="Content__col Content__col--right">
          {this.props.selectedCategory && !this.state.selectedTodo ?
            <TodoList onItemUpdated={this.props.onTodoUpdated.bind(this)} onItemEdit={this.onTodoEdit.bind(this)} items={this.props.selectedCategory.todos}/> : null}
          {this.props.foundTodos && !this.state.selectedTodo ?
              <TodoList onItemUpdated={this.props.onTodoUpdated.bind(this)} onItemEdit={this.onTodoEdit.bind(this)} items={this.props.foundTodos}/> : null}
          {this.state.selectedTodo ? <TodoItemEditor item={this.state.selectedTodo}
                                                     onCancel={this.onTodoEditCancel.bind(this)}
                                                     onSave={this.onTodoEditSave.bind(this)}
          /> : null}
        </div>
      </div>
    );
  }
}

export default Content;

