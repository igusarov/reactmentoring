import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {

  onAddClick(){
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
          <input type="button" className="AddItem__button" value="Add" onClick={this.onAddClick.bind(this)}/>
        </form>
      </div>
    );
  }
}

export default AddItem;
