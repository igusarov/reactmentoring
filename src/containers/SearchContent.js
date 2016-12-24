import React, { Component } from 'react';
import Todos from './Todos';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';

class SearchContent extends Component {

  componentDidMount() {
    this.notify();
  }

  notify() {
    this.props.actions.searchContentShown();
  }

  filterHandler(todo) {
    let textQuery = this.props.routeParams.textQuery || '';
    let done = this.props.routeParams.done === 'true';
    return (done ? todo.done === true : true) &&
        todo.name.toLowerCase().search(textQuery.toLowerCase()) > -1;
  }

  render() {
    return (
        <Todos items={this.props.todos.filter(this.filterHandler.bind(this))}/>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  todos: _(state.todos).reduce((acc, todos) => acc.concat(todos), [])
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(SearchContent);