import { ADD_CATEGORY, DELETE_CATEGORY,  UPDATE_CATEGORY} from '../actions';

const categories = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return [...state, createCategory(action.name)];
    case UPDATE_CATEGORY:
      return state.filter(category => category.id !== action.category.id).concat(action.newCategory);
    default:
      return state
  }
};

const getAllincludedCategoryIds = (state, parentId) => (
    state[parentId] ? state[parentId].reduce((acc, category) => (
        [...acc, category.id, ...getAllincludedCategoryIds(state, category.id)]
    ), []) : []
);

const deleteMany = (state, categoryIds) => {
  state = { ...state };
  categoryIds.forEach(id => delete state[id]);
  return state
};

const findParentCategoryId = (state, category) => {
  for(let i in state){
    if(state[i]&& state[i].includes(category)){
      return i;
    }
  }
  return null;
};

let nextId = 0;
const createCategory = (name) => {
  return {
    id : nextId++,
    name : name,
    categories : [],
    todos : []
  }
}

export default (state = {}, action) => {

  if(![ADD_CATEGORY, DELETE_CATEGORY,  UPDATE_CATEGORY].includes(action.type)){
    return state.root ? state : {root : []};
  }

  const { category, parentCategory } = action;
  const parentId = typeof parentCategory !== "undefined" ? parentCategory.id : (findParentCategoryId(state, category) || 'root');

  if (action.type === DELETE_CATEGORY) {
    const includedCategoryIds = getAllincludedCategoryIds(state, category.id);
    let newState = deleteMany(state, [ category.id, ...includedCategoryIds ]);
    newState[parentId] = newState[parentId].filter(item => item !== action.category);
    return newState;
  }

  return {
    ...state,
    [parentId]: categories(state[parentId], action)
  }
}
