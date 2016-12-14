import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import Content from './Content';
import ContentTodoList from './ContentTodoList';
import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
    <Route path="/category/:categoryId" component={App}></Route>
    <Route path="/search/:done/(:query)" component={App}></Route>

  </Router>
), document.getElementById('root'));

