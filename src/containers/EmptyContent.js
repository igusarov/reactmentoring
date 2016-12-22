import React, { Component } from 'react';
import TodoList from '../TodoList';

class EmptyContent extends Component {
  render() {
    return (
        <TodoList items={[]}/>
    );
  }
}

export default EmptyContent;


