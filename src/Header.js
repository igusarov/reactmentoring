import React, { Component } from 'react';
import Search from './Search';
import ProgressBar from './ProgressBar';
import AddItem from './AddItem';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__row">
          <div className="Header__action-name">TODO list</div>
          <div className="Header__search">
            <Search/>
          </div>
        </div>
        <div className="Header__row">
          <div className="Header__progress">
            <ProgressBar/>
          </div>
        </div>
        <div className="Header__row">
          <div className="Header__add-item Header__add-item--left">
            <AddItem/>
          </div>
          <div className="Header__add-item Header__add-item--right">
            <AddItem/>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
