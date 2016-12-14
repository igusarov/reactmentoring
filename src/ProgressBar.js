import React, { Component } from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
  render() {
    return (
      <div className="ProgressBar">
        <div className="ProgressBar__bar" style={{width : this.props.progress * 100 + '%'}}></div>
      </div>
    );
  }
}

export default ProgressBar;
