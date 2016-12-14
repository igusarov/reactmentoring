import React, { Component } from 'react';
import {Link} from 'react-router';
import CategoryItem from './CategoryItem';
import classNames from 'classnames';
import './CategoryList.css';

class CategoryList extends Component {

  constructor(){
    super();
    this.state = {
      expandedItems : []
    };
  }

  expandItem(item){
    let expandedItems = this.state.expandedItems;
    expandedItems.push(item);
    this.setState({expandedItems : expandedItems});
  }

  collapseItem(item){
    let expandedItems = this.state.expandedItems;
    expandedItems.splice(expandedItems.indexOf(item), 1);
    this.setState({expandedItems : expandedItems});
  }

  onExpandCollapse(item){
    if(this.itemIsExpanded(item)){
      this.collapseItem(item)
    } else {
      this.expandItem(item)
    }
  }

  itemIsExpanded(item) {
    return item.categories.length && this.state.expandedItems.indexOf(item) > -1
  }

  ascId(a, b) {
    return a.id < b.id;
  }

  render() {
    return (
      <ul className="CategoryList">
        {this.props.items.sort(this.ascId.bind(this)).map((item) => (
          <li key={item.id} className="CategoryList__item-wrap">
            <Link to={'/category/' + item.id}>
            <div className={classNames({
              'CategoryList__item': true,
              'CategoryList__item--selected': item === this.props.selectedCategory
            })}>
                <CategoryItem
                  parent={this.props.parent}
                  item={item}
                  expanded={this.itemIsExpanded(item)}
                  onAdd={this.props.onAddCategory}
                  onDeleteCategory={this.props.onDeleteCategory}
                  onExpandCollapse={this.onExpandCollapse.bind(this)}
                  onEdit={this.props.onEditCategory}
                  onSave={this.props.onSaveCategory}
                  showMoveButton={this.props.showMoveButton}
                  onMoveTo={this.props.onMoveTo}
                  selectedCategory={this.props.selectedCategory}
                />
            </div>
            </Link>
            { this.itemIsExpanded(item)?
              <div className="CategoryList__item-subcategory">
                <CategoryList
                  parent={item}
                  items={item.categories}
                  onAddCategory={this.props.onAddCategory}
                  onDeleteCategory={this.props.onDeleteCategory}
                  onSaveCategory={this.props.onSaveCategory}
                  onEditCategory={this.props.onEditCategory}
                  showMoveButton={this.props.showMoveButton}
                  onMoveTo={this.props.onMoveTo}
                  selectedCategory={this.props.selectedCategory}
                  />
              </div> : null}
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoryList;
