export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const BEFORE_TO_ADD_CATEGORY = 'BEFORE_TO_ADD_CATEGORY';
export const BEFORE_TO_UPDATE_CATEGORY = 'BEFORE_TO_UPDATE_CATEGORY';
export const AFTER_SAVING_CATEGORY = 'AFTER_SAVING_CATEGORY';
export const SELECTED_CATEGORY_CONTENT_SHOWN = 'SELECTED_CATEGORY_CONTENT_SHOWN';
export const ADD_TODO = 'ADD_TODO';

export const addCategory = ({name, parentCategory}) => ({
  type: ADD_CATEGORY,
  name,
  parentCategory
});

export const deleteCategory = ({category, parentCategory}) => ({
  type: DELETE_CATEGORY,
  category,
  parentCategory
});

export const updateCategory = ({category, newCategory}) => ({
  type: UPDATE_CATEGORY,
  category,
  newCategory
});

export const beforeToAddCategory = ({event, parentCategory}) => ({
  type: BEFORE_TO_ADD_CATEGORY,
  event,
  parentCategory
});

export const beforeToUpdateCategory = ({event, category}) => ({
  type: BEFORE_TO_UPDATE_CATEGORY,
  event,
  category
});

export const afterSavingCategory = () => ({
  type: AFTER_SAVING_CATEGORY
});

export const selectedCategoryContentShown = (categoryId) => ({
  type: SELECTED_CATEGORY_CONTENT_SHOWN,
  categoryId
});

export const addTodo = (name, categoryId) => ({
  type: ADD_TODO,
  name,
  categoryId
});
