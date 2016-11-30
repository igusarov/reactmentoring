import React, {Component} from 'react';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <div className="Search">
        <form className="Search__form">
          <label className="Search__label-show-down">
            <input type="checkbox"/>Show done
          </label>
          <input className="Search__input-query" type="text" name="query"/>
        </form>
      </div>
    );
  }
}

export default Search;
