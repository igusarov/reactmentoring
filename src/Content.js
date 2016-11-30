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
          <CategoryList items={{parent : [1,2,3,4,5], chiled : [1,2,3]}}/>
        </div>
        <div className="Content__col Content__col--right">
          {this.props.editor ? <TodoItemEditor/> : <TodoList items={[1,2,3,4]}/>}
        </div>
      </div>
    );
  }
}

export default Content;

