import { combineReducers } from 'redux'
import categories from './categories'

const todoApp = combineReducers({
  categories
});

export default todoApp