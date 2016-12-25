import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux'
import App from './containers/App';
import reducer from './reducers';
import EmptyContent from './containers/EmptyContent';
import SelectedCategoryContent from './containers/SelectedCategoryContent';
import SearchContent from './containers/SearchContent';
import './index.css';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={EmptyContent}/>
          <Route path="category/:categoryId" component={SelectedCategoryContent} />
          <Route path="search/:done/(:textQuery)" component={SearchContent} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root')
);

