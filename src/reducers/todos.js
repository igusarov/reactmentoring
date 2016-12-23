import { ADD_TODO, UPDATE_TODO, MOVE_TODO_TO_CATEGORY } from '../actions';

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, createTodo(action.name)];
    case UPDATE_TODO:
      return state.filter(todo => todo.id !== action.todo.id).concat(action.newTodo);
    default:
      return state
  }
};

let nextId = 0;
const createTodo = (name) => {
  return {
    id : nextId++,
    name : name,
    description : '',
    done : false
  }
};

const findCategoryId = (state, todo) => {
  for(let i in state){
    if(state[i]&& state[i].includes(todo)){
      return i;
    }
  }
  return null;
};

export default (state = {}, action) => {

  if(![ADD_TODO, UPDATE_TODO, MOVE_TODO_TO_CATEGORY].includes(action.type)){
    return state;
  }

  const categoryId = action.categoryId || findCategoryId(state, action.todo);

  if(action.type === MOVE_TODO_TO_CATEGORY){
    return {
      ...state,
      [categoryId] : state[categoryId].filter(todo => todo.id !== action.todo.id),
      [action.toCategory.id] : (state[action.toCategory.id] ? state[action.toCategory.id] : []).concat(action.todo)
    }
  }

  return {
    ...state,
    [categoryId]: todo(state[categoryId], action)
  }
}
