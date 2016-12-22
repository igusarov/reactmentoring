import { ADD_TODO } from '../actions';

const todo = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, createTodo(action.name)];
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

export default (state = {}, action) => {

  if(![ADD_TODO].includes(action.type)){
    return state;
  }

  const { categoryId } = action;
  return {
    ...state,
    [categoryId]: todo(state[categoryId], action)
  }
}
