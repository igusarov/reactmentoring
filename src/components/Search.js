import React, {Component} from 'react';
import './Search.css';
import { browserHistory } from 'react-router';

class Search extends Component {

  onSubmit(e) {
    e.preventDefault();
    browserHistory.push('/search/' + (this.refs.done.checked ? 'true' : 'false') + '/' + this.refs.query.value);
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.onSubmit.bind(this)} className="Search__form">
          <label className="Search__label-show-down">
            <input ref="done" type="checkbox"/>Show done
          </label>
          <input ref="query" className="Search__input-query" type="text" name="query"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    );
  }
}

export default Search;
