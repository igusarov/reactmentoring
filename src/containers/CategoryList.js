import React, { Component } from 'react';
import {Link} from 'react-router';
import { connect } from 'react-redux';
import CategoryItem from '../components/CategoryItem';
import classNames from 'classnames';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import './CategoryList.css';

class CategoryList extends Component {

  constructor(){
    super();
    this.state = {
      expandedItems : []
    };
  }

  onAdd(event, parentCategory) {
    this.props.actions.beforeToAddCategory({event, parentCategory});
  }

  onEdit(event, category) {
    this.props.actions.beforeToUpdateCategory({event, category});
  }

  deleteCategory(category, parentCategory) {
    if(!confirm('Delete the category?')){
      return;
    }
    if(parentCategory){
      this.props.actions.deleteCategory({category, parentCategory});
    }else{
      this.props.actions.deleteCategory({category});
    }
  }

  onMoveTo(category) {
    this.props.actions.closeTodoEditor();
    this.props.actions.moveTodoToCategory(this.props.selectedTodo, category);
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
    return this.itemIsExpandable(item) && this.state.expandedItems.indexOf(item) > -1;
  }

  itemIsExpandable(item) {
    return this.props.allCategories[item.id] ? true : false;
  }

  ascId(a, b) {
    return a.id < b.id;
  }


  render() {

    return (
      <ul className="CategoryList">
        {this.props.categories.sort(this.ascId.bind(this)).map((item) => (
          <li key={item.id} className="CategoryList__item-wrap">
            <Link to={'/category/' + item.id}>
            <div className={classNames({
              'CategoryList__item': true,
              'CategoryList__item--selected': item.id === this.props.selectedCategoryId
            })}>
                <CategoryItem
                  parent={this.props.parent}
                  item={item}
                  expanded={this.itemIsExpanded(item)}
                  expandable={this.itemIsExpandable(item)}
                  onAdd={this.onAdd.bind(this)}
                  onDeleteCategory={this.deleteCategory.bind(this)}
                  onExpandCollapse={this.onExpandCollapse.bind(this)}
                  onEdit={this.onEdit.bind(this)}
                  onSave={this.props.onSaveCategory}
                  showMoveButton={this.props.showMoveButton}
                  onMoveTo={this.onMoveTo.bind(this)}
                />
            </div>
            </Link>
            { this.itemIsExpanded(item)?
              <div className="CategoryList__item-subcategory">
                <ConnnectedCategoryList parent={item}/>
              </div> : null}
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const parentId = ownProps.parent ? ownProps.parent.id : 'root';
  return {
    selectedCategoryId: state.layout.selectedCategory ? parseInt(state.layout.selectedCategory.id) : null,
    selectedTodo: state.layout.selectedTodo,
    showMoveButton: state.layout.selectedTodo ? true : false,
    categories: state.categories[parentId],
    allCategories: state.categories
  }
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

const ConnnectedCategoryList = connect(mapStateToProps,mapDispatchToProps)(CategoryList);

export default ConnnectedCategoryList;
