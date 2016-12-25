import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import Header from './Header';
import SaveItem from './SaveItem';
import CategoryList from './CategoryList';
import { bindActionCreators } from 'redux'
import * as actions from './actions'
import './App.css';

class App extends Component {

  constructor(){
    super();
    this._id = 0;
    this.state = {
      categories : []
    };
  }

  addCategory(name) {
    this.props.actions.addCategory({name});
  }

  addTodo(name) {
    let categoryId = this.props.layout.selectedCategory.id;
    this.props.actions.addTodo(name, categoryId);
  }

  saveCategory(newName) {
    let category = this.props.popup.saveCategory.category;
    let parentCategory = this.props.popup.saveCategory.parentCategory;
    let name = newName;
    if(parentCategory){
      this.props.actions.addCategory({name, parentCategory});
    }else{
      let newCategory = {...category};
      newCategory.name = newName;
      this.props.actions.updateCategory({category, newCategory});
    }
    this.props.actions.afterSavingCategory();
  }

  createTodo(name){
    return {
      id : this.generateUniqueId(),
      name : name,
      description : '',
      done : false
    }
  }


  findTodos(text, done) {
    let textQuery = text || '';
    return this.getTodoFlatList(this.state.categories).filter((todo) => {
      return (done ? todo.done === true : true) && todo.name.toLowerCase().search(textQuery.toLowerCase()) > -1;
    })
  }

  resetState() {
    this.setState({
      selectedCategory : null,
      saveCategory : null,
      foundTodos : null,
      paramsHash : null
    })
  }

  onEditCategory(event, category){
    this.setState({
      saveCategory: {
        action: 'add',
        posX: event.clientX,
        posY: event.clientY,
        category: category,
        initialName: category.name
      }
    })
  }

  onMoveTodoToCategory(todo, category){
     this.getCategoryFlatList(this.state.categories).forEach((category) => {
       let indexOf = category.todos.indexOf(todo);
       if(indexOf > -1){
         category.todos.splice(indexOf, 1);
       }
     });
     category.todos.push(todo);
  }

  getCategoryById(categories, id) {
    return this.getCategoryFlatList(categories).find(function (category) {
      return category.id === id;
    });
  }

  getCategoryFlatList(categories) {
    let categoryFlatList = [];
    categoryFlatList = categoryFlatList.concat(categories);
    categories.forEach((category) => {
      categoryFlatList = categoryFlatList.concat(this.getCategoryFlatList(category.categories));
    });

    return categoryFlatList;
  }

  getTodoFlatList(categories) {
    let todos = [];
    this.getCategoryFlatList(categories).forEach(category => todos = todos.concat(category.todos))
    return todos;
  }

  generateUniqueId() {
    return this._id++;
  }

  render() {

    const {categories, actions} = this.props;

    return (
      <div className="App">
        <div className="App__header">
          <Header
            onAddTodo={this.addTodo.bind(this)}
            onAddCategory={this.addCategory.bind(this)}
            progress={this.props.progress}
            showAddTodo={this.props.layout.selectedCategory ? true : false}
          />
        </div>
        <div className="App__content">
          <div className="Content">
            <div className="Content__col Content__col--left">
              <CategoryList/>
            </div>
            <div className="Content__col Content__col--right">
              {this.props.children}
            </div>
          </div>
        </div>
        {this.props.popup.saveCategory ?
          <div style={{top: this.props.popup.saveCategory.posY, left: this.props.popup.saveCategory.posX}} className="App__save-item">
            <SaveItem value={this.props.popup.saveCategory.initialName} onSave={this.saveCategory.bind(this)} />
          </div> : null
        }
      </div>
    );
  }
}

const procProgress = (categories, todos) => {
  let all = _(categories).reduce((count, categories) => count + categories.length, 0);
  let completed = _(categories).reduce((count, categories) => {
    console.log(categories);
    return count + categories.reduce((count, category) => {
      return count + ((todos[category.id] || []).find(todo => todo.done === false) ? 0 : 1);
    }, 0)
  }, 0);

  return all > 0 ? completed / all : 0;
};

const mapStateToProps = state => ({
  categories: state.categories,
  progress: procProgress(state.categories, state.todos),
  popup: state.popup,
  layout: state.layout
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

App = connect(mapStateToProps,mapDispatchToProps)(App);

export default App;
