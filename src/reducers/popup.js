import { BEFORE_TO_ADD_CATEGORY, BEFORE_TO_UPDATE_CATEGORY, AFTER_SAVING_CATEGORY } from '../actions';

export default (state = {}, action) => {

  switch (action.type) {
    case BEFORE_TO_ADD_CATEGORY:
      return {
        saveCategory: {
          posX: action.event.clientX,
          posY: action.event.clientY,
          parentCategory: action.parentCategory,
          initialName: ''
        }
      };
    case BEFORE_TO_UPDATE_CATEGORY:
      return {
        saveCategory: {
          posX: action.event.clientX,
          posY: action.event.clientY,
          category: action.category,
          initialName: action.category.name
        }
      };
    case AFTER_SAVING_CATEGORY:
      return {};
    default:
      return state
  }

}
