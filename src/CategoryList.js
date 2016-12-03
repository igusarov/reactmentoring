import React, { Component } from 'react';
import CategoryItem from './CategoryItem';
import './CategoryList.css';

class CategoryList extends Component {

  constructor(){
    super();
    this.state = {
      expandedItems : []
    };
  }

  onAddSubCategory() {
    let item = arguments[1];
    this.props.onAddSubCategory.apply(null, arguments);
    if (!this.itemIsExpanded(item)) {
      this.expandItem(item);
    }
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
            <div className="CategoryList__item">
              <CategoryItem
                parent={this.props.parent}
                item={item}
                expanded={this.itemIsExpanded(item)}
                onAddSubCategory={this.onAddSubCategory.bind(this)}
                onDeleteCategory={this.props.onDeleteCategory}
                onExpandCollapse={this.onExpandCollapse.bind(this)}
                onSave={this.props.onSaveCategory}
              />
            </div>
            { this.itemIsExpanded(item)?
              <div className="CategoryList__item-subcategory">
                <CategoryList
                  parent={item}
                  items={item.categories}
                  onAddSubCategory={this.props.onAddSubCategory}
                  onDeleteCategory={this.props.onDeleteCategory}
                  onSaveCategory={this.props.onSaveCategory}
                  />
              </div> : null}
          </li>
        ))}
      </ul>
    );
  }
}

export default CategoryList;
