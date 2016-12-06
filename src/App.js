import React, { Component } from 'react';
import Header from './Header';
import Content from './Content';
import SaveItem from './SaveItem';
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
      categories : []
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
