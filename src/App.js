import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this._id = 0;
    this.state = {
      categories : []
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

  saveCategory(category, newName) {
    category.name = newName;
    this.setState({categories: this.state.categories})
  }

  createCategory(name) {
    return {
      id : this.generateUniqueId(),
      name : name,
      categories : []
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
            onAddCategory={this.addCategory}
          />
        </div>
        <div className="App__content">
          <Content
            editor={true}
            categories={this.state.categories}
            onAddSubCategory={this.addCategory}
            onDeleteCategory={this.deleteCategory.bind(this)}
            onSaveCategory={this.saveCategory.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
