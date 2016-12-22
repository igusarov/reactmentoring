import { SELECTED_CATEGORY_CONTENT_SHOWN} from '../actions';

export default (state = {}, action) => {

  switch (action.type) {
    case SELECTED_CATEGORY_CONTENT_SHOWN:
      return {
        selectedCategory: {
          id : action.categoryId
        }
      };

    default:
      return state
  }

}

