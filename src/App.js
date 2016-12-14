import React, { Component } from 'react';
import Header from './Header';
import SaveItem from './SaveItem';
import Content from './Content';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this._id = 0;
    this.state = {
      categories : []
    };
  }

  updateProgressOfCompletedCategories() {
    let allCategories = this.getCategoryFlatList(this.state.categories);
    let completedCategories = allCategories.filter((category) => {
        let completedTodos = category.todos.filter((todo) => {
          return todo.done;
        });
        return completedTodos.length > 0 && completedTodos.length === category.todos.length;
    });
    let progress = allCategories.length > 0 ? completedCategories.length / allCategories.length : 0;
    this.setState({progress: progress});
  }

  addCategory(name, parentCategory) {
    let newCategory = this.createCategory(name);
    if(parentCategory){
      parentCategory.categories.push(newCategory);
    }else{
      this.state.categories.push(newCategory);
    }
    this.updateProgressOfCompletedCategories();
    this.setState({categories: this.state.categories})
  }

  addTodo(name) {
    let newTodo = this.createTodo(name);
    let selectedCategory = this.state.selectedCategory;
    selectedCategory.todos.push(newTodo);
    this.setState({categories: this.state.categories});
  }

  deleteCategory(category, parentCategory) {
    if(!confirm('Delete the category?')){
      return;
    }
    let categories = [];
    if(parentCategory) {
      parentCategory.categories = parentCategory.categories.filter(item => item !== category);
      categories = this.state.categories;
    }else{
      categories = this.state.categories.filter(item => item !== category)
    }
    this.setState({categories: categories});
    this.updateProgressOfCompletedCategories();
  }

  saveExistCategory(category, newName) {
    category.name = newName;
    this.setState({categories: this.state.categories})
  }

  saveCategory(newName) {
    let category = this.state.saveCategory.category;
    if(this.state.saveCategory.action === 'create'){
      this.addCategory(newName, category);
    }else{
      this.saveExistCategory(category, newName);
    }
    this.setState({saveCategory: null, categories: this.state.categories});
  }

  createCategory(name) {
    return {
      id : this.generateUniqueId(),
      name : name,
      categories : [],
      todos : []
    }
  }

  createTodo(name){
    return {
      id : this.generateUniqueId(),
      name : name,
      description : '',
      done : false
    }
  }

  onAddSubCategory(event, category){
    this.setState({
      saveCategory: {
        action: 'create',
        posX: event.clientX,
        posY: event.clientY,
        category: category,
        initialName: ''
      }
    })
  }

  findTodos(text, done) {
    let textQuery = text || '';
    return this.getTodoFlatList(this.state.categories).filter((todo) => {
      return (done ? todo.done === true : true) && todo.name.toLowerCase().search(textQuery.toLowerCase()) > -1;
    })
  }

  componentDidUpdate() {
    if(this.props.routeParams.categoryId){

      let categoryId = parseInt(this.props.routeParams.categoryId, 10);
      if(this.state.selectedCategory && this.state.selectedCategory.id === categoryId){
        return;
      }
      let selectedCategory = this.getCategoryById(this.state.categories, categoryId);
      this.resetState();
      this.setState({selectedCategory : selectedCategory});

    }else if(this.props.routeParams.done){

      let paramsHash = JSON.stringify(this.props.routeParams);
      if(this.state.paramsHash === paramsHash){
        return;
      }
      let query = this.props.routeParams.query;
      let done = this.props.routeParams.done === 'true';
      let todos = this.findTodos(query, done);
      this.resetState();
      this.setState({paramsHash : paramsHash, foundTodos : todos});
    }
  }

  componentDidMount() {
    this.updateProgressOfCompletedCategories();
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
    return (
      <div className="App">
        <div className="App__header">
          <Header
            onAddTodo={this.addTodo.bind(this)}
            onAddCategory={this.addCategory.bind(this)}
            progress={this.state.progress}
            showAddTodo={this.state.selectedCategory ? true : false}
          />
        </div>
        <div className="App__content">
          <Content
            editor={true}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            foundTodos={this.state.foundTodos}
            onAddSubCategory={this.onAddSubCategory.bind(this)}
            onDeleteCategory={this.deleteCategory.bind(this)}
            onSaveCategory={this.saveCategory.bind(this)}
            onEditCategory={this.onEditCategory.bind(this)}
            onTodoUpdated={this.updateProgressOfCompletedCategories.bind(this)}
            onMoveTodoToCategory={this.onMoveTodoToCategory.bind(this)}
          />
        </div>
        {this.state.saveCategory ?
          <div style={{top: this.state.saveCategory.posY, left: this.state.saveCategory.posX}} className="App__save-item">
            <SaveItem value={this.state.saveCategory.initialName} onSave={this.saveCategory.bind(this)} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
