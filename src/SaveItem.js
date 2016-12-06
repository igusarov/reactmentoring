import React, { Component } from 'react';
import './SaveItem.css';

class SaveItem extends Component {

  constructor(){
    super();
  }

  onSave(){
    if (this.refs.input.value) {
      this.props.onSave(this.refs.input.value);
      this.refs.input.value = '';
    }
  }

  componentDidUpdate() {
    this.refs.input.value = this.props.value;
  }

  render() {
    return (
      <div className="SaveItem">
        <div className="SaveItem__col">
          <input type="text" defaultValue={this.props.value} ref="input"/>
        </div>
        <div className="SaveItem__col SaveItem__col">
          <div className="SaveItem__button SaveItem__button--save"
               onClick={this.onSave.bind(this)}>
          </div>
        </div>
      </div>
    );
  }
}

export default SaveItem;

