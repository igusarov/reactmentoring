import React, { Component } from 'react';
import TodoList from '../TodoList';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class SelectedCategoryContent extends Component {

  componentDidMount() {
    this.notify();
  }

  componentDidUpdate() {
    this.notify();
  }

  notify() {
    if(this.props.layout.selectedCategory && this.props.routeParams.categoryId === this.props.layout.selectedCategory.id){
      return;
    }
    this.props.actions.selectedCategoryContentShown(this.props.routeParams.categoryId);
  }

  render() {
    return (
        <TodoList items={[]}/>
    );
  }
}


const mapStateToProps = (state, ownProps) => ({
  todos: state.todos[ownProps.routeParams.categoryId] || [],
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(SelectedCategoryContent);


