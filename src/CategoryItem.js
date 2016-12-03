import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './CategoryItem.css';

class CategoryItem extends Component {

  constructor(){
    super();
    this.state = {edit : false};
  }

  onEdit() {
    this.setState({edit : true});
  }

  onSave() {
    this.setState({edit : false});
    this.props.onSave(this.props.item, this.refs.input.value);
  }

  componentDidUpdate() {
    if(this.state.edit && !this.refs.input.value) {
      this.refs.input.value = this.props.item.name;
      ReactDOM.findDOMNode(this.refs.input).focus();
    }
  }

  editView() {
    return (
      <div className="CategoryItem">
        <div className="CategoryItem__col">
          <input type="text" ref="input"/>
        </div>
        <div className="CategoryItem__col CategoryItem__col">
          <div className="CategoryItem__button CategoryItem__button--save"
               onClick={this.onSave.bind(this)}>
          </div>
        </div>
      </div>
    )
  }

  view() {
    let expandButtonClasses = classNames({
      'CategoryItem__button': true,
      'CategoryItem__button--expand': !this.props.expanded,
      'CategoryItem__button--collapse': this.props.expanded,
    });

    return (
      <div className="CategoryItem">
        <div className="CategoryItem__col">
          {this.props.item.categories.length ? <div className={expandButtonClasses} onClick={this.props.onExpandCollapse.bind(this, this.props.item)}></div> : null}
          <div className="CategoryItem__name">{this.props.item.name}</div>
          <div className="CategoryItem__button CategoryItem__button--edit" onClick={this.onEdit.bind(this)}></div>
        </div>
        <div className="CategoryItem__col CategoryItem__col">
          <div className="CategoryItem__button CategoryItem__button--delete"
               onClick={this.props.onDeleteCategory.bind(null, this.props.item, this.props.parent)}>
          </div>
          <div className="CategoryItem__button CategoryItem__button--add"
               onClick={this.props.onAddSubCategory.bind(null, 'new category', this.props.item)}>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return this.state.edit ? this.editView() : this.view();
  }
}

export default CategoryItem;
