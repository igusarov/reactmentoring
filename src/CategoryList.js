import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

class CategoryList extends Component {
  render() {
    return (
      <ul className="CategoryList">
        {this.props.items.parent.map(()=><li className="CategoryList__item"><CategoryItem/></li>)}
        {this.props.items.chiled ? <li className="CategoryList__subcategory"><CategoryList items={{parent : this.props.items.chiled}}/></li> : null}
      </ul>
    );
  }
}

export default CategoryList;
