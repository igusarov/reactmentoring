import React, { Component } from 'react';
import Content from './Content';

class ContentTodoList extends Component {

  getCategoryById(categories, id) {

    let foundCategory = categories.find(function (category) {
      return category.id === parseInt(id);
    });

    if(!foundCategory) {
      for(let category in categories){
        let foundCategory = this.getCategoryById(category.categories, id);
        if(foundCategory){
          return foundCategory;
        }
      }
    }else{
      return foundCategory;
    }
  }

  componentWillMount(){
    this.setState({selectedCategory : this.getSelectedCategory()});
  }

  componentWillUpdate(){
    console.log('update');
  }

  getSelectedCategory(){
    return this.getCategoryById(this.props.categories, this.props.routeParams.categoryId);
  }

  render() {
    return (
      <div>
        <Content selectedCategory={this.state.selectedCategory} {...this.props}/>
      </div>
    );
  }
}

export default ContentTodoList;

