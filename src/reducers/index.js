import { combineReducers } from 'redux'
import categories from './categories'
import popup from './popup'
import layout from './layout'
import todos from './todos'

const todoApp = combineReducers({
  categories,
  popup,
  layout,
  todos
});

export default todoApp