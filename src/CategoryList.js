import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

class CategoryList extends Component {
  render() {
    return (
      <ul className="CategoryList">
        {this.props.items.map((item)=><li className="CategoryList__item"><CategoryItem item={item}/></li>)}
      </ul>
    );
  }
}

export default CategoryList;
