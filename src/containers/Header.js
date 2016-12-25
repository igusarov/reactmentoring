import React, { Component } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import ProgressBar from '../components/ProgressBar';
import AddItem from '../components/AddItem';
import _ from 'lodash';
import { bindActionCreators } from 'redux'
import * as actions from '../actions';
import './Header.css';

class Header extends Component {

  addCategory(name) {
    this.props.actions.addCategory({name});
  }

  addTodo(name) {
    let categoryId = this.props.layout.selectedCategory.id;
    this.props.actions.addTodo(name, categoryId);
  }

  render() {
    return (
      <div className="Header">
        <div className="Header__row">
          <div className="Header__action-name">TODO list</div>
          <div className="Header__search">
            <Search/>
          </div>
        </div>
        <div className="Header__row">
          <div className="Header__progress">
            <ProgressBar progress={this.props.progress}/>
          </div>
        </div>
        <div className="Header__row">
          <div className="Header__add-item Header__add-item--left">
            <AddItem onAdd={this.addCategory.bind(this)}/>
          </div>
          {this.props.showAddTodo ?
          <div className="Header__add-item Header__add-item--right">
            <AddItem onAdd={this.addTodo.bind(this)}/>
          </div> : null}
        </div>
      </div>
    );
  }
}

const procProgress = (categories, todos) => {
  let all = _(categories).reduce((count, categories) => count + categories.length, 0);
  let completed = _(categories).reduce((count, categories) => {
    return count + categories.reduce((count, category) => {
          return count + ((todos[category.id] || []).find(todo => todo.done === false) ? 0 : 1);
        }, 0)
  }, 0);

  return all > 0 ? completed / all : 0;
};

const mapStateToProps = state => ({
  progress: procProgress(state.categories, state.todos),
  showAddTodo: state.layout.selectedCategory ? true : false,
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

Header = connect(mapStateToProps,mapDispatchToProps)(Header);

export default Header;
