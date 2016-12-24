import _ from 'lodash';
import { SELECTED_CATEGORY_CONTENT_SHOWN, OPEN_TODO_EDITOR, CLOSE_TODO_EDITOR, SEARCH_CONTENT_SHOWN} from '../actions';

export default (state = {}, action) => {
  let cloneState;

  switch (action.type) {
    case SELECTED_CATEGORY_CONTENT_SHOWN:
      return {
        selectedCategory: {
          id : action.categoryId
        }
      };
    case OPEN_TODO_EDITOR:
      return {
        ...state,
        selectedTodo: action.todo
      };
    case CLOSE_TODO_EDITOR:
      cloneState = {...state};
      delete cloneState.selectedTodo;
      return cloneState;
    case SEARCH_CONTENT_SHOWN:
      cloneState = {...state};
      delete cloneState.selectedCategory;
      return cloneState;
    default:
      return state
  }
}

