import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {

  constructor(){
    super();
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleAddClick(){
    if (this.refs.input.value) {
      this.props.onAdd(this.refs.input.value);
      this.refs.input.value = '';
    }
  }

  render() {
    return (
      <div className="AddItem">
        <form className="AddItem__form">
          <input type="text" className="AddItem__input" ref="input"/>
          <input type="button" className="AddItem__button" value="Add" onClick={this.handleAddClick}/>
        </form>
      </div>
    );
  }
}

export default AddItem;
