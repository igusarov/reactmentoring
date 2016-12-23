import React, { Component } from 'react';
import Todos from './Todos';

class EmptyContent extends Component {
  render() {
    return (
        <Todos items={[]}/>
    );
  }
}

export default EmptyContent;


