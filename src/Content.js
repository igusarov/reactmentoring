import React, { Component } from 'react';
import CategoryList from './CategoryList';
import TodoList from './TodoList';
import TodoItemEditor from './TodoItemEditor';
import './Content.css';

class Content extends Component {
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
            />
        </div>
        <div className="Content__col Content__col--right">
          {this.props.editor ? <TodoItemEditor/> : <TodoList items={[1,2,3,4]}/>}
        </div>
      </div>
    );
  }
}

export default Content;

