import { SELECTED_CATEGORY_CONTENT_SHOWN, OPEN_TODO_EDITOR, CLOSE_TODO_EDITOR} from '../actions';

export default (state = {}, action) => {

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
      let cloneState = {...state};
      delete cloneState.selectedTodo;
      return cloneState;
    default:
      return state
  }

}

