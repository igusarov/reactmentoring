import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
  render() {
    return (
      <div className="AddItem">
        <form className="AddItem__form">
          <input type="text" className="AddItem__input"/>
          <input type="button" className="AddItem__button" value="Add"/>
        </form>
      </div>
    );
  }
}

export default AddItem;
