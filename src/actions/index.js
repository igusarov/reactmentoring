export const ADD_CATEGORY = 'ADD_CATEGORY';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';

export const addCategory = ({category, parentCategory}) => ({
  type: ADD_CATEGORY,
  category,
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
