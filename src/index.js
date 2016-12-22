import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import App from './App';
import reducer from './reducers';
import EmptyContent from './containers/EmptyContent';
import SelectedCategoryContent from './containers/SelectedCategoryContent';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={EmptyContent}/>
          <Route path="category/:categoryId" component={SelectedCategoryContent} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);

