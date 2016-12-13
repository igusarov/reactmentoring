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
      categories : [this.createCategory('hello')]
    };
    this.addCategory = this.addCategory.bind(this);
  }

  addCategory(name, parentCategory) {
    let newCategory = this.createCategory(name);
    if(parentCategory){
      parentCategory.categories.push(newCategory);
    }else{
      this.state.categories.push(newCategory);
    }
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
    if(parentCategory) {
      parentCategory.categories = parentCategory.categories.filter(item => item !== category);
    }else{
      this.state.categories = this.state.categories.filter(item => item !== category);
    }
    this.setState({categories: this.state.categories})
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
      todos : [this.createTodo('one'), this.createTodo('two'), this.createTodo('threee')]
    }
  }

  createTodo(name){
    return {
      id : this.generateUniqueId(),
      name : name,
      description : 'dfdfgfd',
      done : true
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

  componentDidMount() {
    console.log('mount');
  }

  shouldComponentUpdate() {
    return true;
  }

  componentDidUpdate() {
    if(this.props.routeParams.categoryId){
      let categoryId = parseInt(this.props.routeParams.categoryId);
      if(this.state.selectedCategory && this.state.selectedCategory.id === categoryId){
        return;
      }
      let selectedCategory = this.getCategoryById(this.state.categories, categoryId);
      this.resetState();
      this.setState({selectedCategory : selectedCategory});
    }else if(this.props.routeParams.todoId){
      let todoId = parseInt(this.props.routeParams.todoId);
      if(this.state.selectedTodo && this.state.selectedTodo.id === todoId){
        return;
      }
      let selectedTodo = this.getTodoById(this.state.categories, todoId);
      this.resetState();
      this.setState({selectedTodo : selectedTodo});
    }
  }

  resetState() {
    this.setState({
      selectedCategory : null,
      selectedTodo : null,
      saveCategory : null
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

  getCategoryById(categories, id) {
    let foundCategory = categories.find(function (category) {
      return category.id === id;
    });

    if(!foundCategory) {
      for(let i in categories){
        let foundCategory = this.getCategoryById(categories[i].categories, id);
        if(foundCategory){
          return foundCategory;
        }
      }
    }else{
      return foundCategory;
    }
  }

  getTodoById(categories, id){
    let foundTodo;

    for(let i in categories) {
      foundTodo = categories[i].todos.find(function (todo) {
        return todo.id === id;
      });
    }

    if(!foundTodo) {
      for(let i in categories){
        let foundTodo = this.getTodoById(categories[i].categories, id);
        if(foundTodo){
          return foundTodo;
        }
      }
    }else{
      return foundTodo;
    }
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
            onAddCategory={this.addCategory}
          />
        </div>
        <div className="App__content">
          <Content
            editor={true}
            categories={this.state.categories}
            selectedCategory={this.state.selectedCategory}
            selectedTodo={this.state.selectedTodo}
            onAddSubCategory={this.onAddSubCategory.bind(this)}
            onDeleteCategory={this.deleteCategory.bind(this)}
            onSaveCategory={this.saveCategory.bind(this)}
            onEditCategory={this.onEditCategory.bind(this)}
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
