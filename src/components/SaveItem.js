import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './SaveItem.css';

class SaveItem extends Component {

  onSave(e){
    e.preventDefault();
    if (this.refs.input.value) {
      this.props.onSave(this.refs.input.value);
      this.refs.input.value = '';
    }
  }

  componentDidUpdate() {
    this.refs.input.value = this.props.value;
    ReactDOM.findDOMNode(this.refs.input).focus();
  }

  componentDidMount() {
    ReactDOM.findDOMNode(this.refs.input).focus();
  }

  render() {
    return (
      <form onSubmit={this.onSave.bind(this)} className="SaveItem">
        <div className="SaveItem__col">
          <input type="text" defaultValue={this.props.value} ref="input"/>
        </div>
        <div className="SaveItem__col SaveItem__col">
          <div className="SaveItem__button SaveItem__button--save"
               onClick={this.onSave.bind(this)}>
          </div>
        </div>
      </form>
    );
  }
}

export default SaveItem;

