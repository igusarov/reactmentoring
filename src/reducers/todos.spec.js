import {ADD_TODO, UPDATE_TODO, MOVE_TODO_TO_CATEGORY} from '../actions';
import todos from './todos';

describe('todos reducer', () => {

  it('should handle initial state', () => {
    expect(todos(undefined, {})).toEqual({})
  });

  it('should handle ADD_TODO', () => {
    const categoryId = 1;
    const name = 'name';
    const todo = {
      id: 0,
      name,
      description: '',
      done: false
    };
    expect(todos(undefined, {
      type: ADD_TODO,
      name,
      categoryId
    })).toEqual({
      "1": [todo]
    })
  });

  it('should handle UPDATE_TODO', () => {
    const todo = {
      id: 0,
      name: 'name',
      description: '',
      done: false
    };
    let newTodo = {...todo};
    newTodo.name = 'new name';

    const initialState = {
      "1": [todo]
    };
    const newState = {
      "1": [newTodo],
    };

    expect(todos(initialState, {
      type: UPDATE_TODO,
      todo,
      newTodo
    })).toEqual(newState)
  });

  it('should handle MOVE_TODO_TO_CATEGORY', () => {
    const todo = {
      id: 0,
      name: 'name',
      description: '',
      done: false
    };
    const toCategory = {id: 2};
    const initialState = {
      "1": [todo]
    };
    const newState = {
      "1": [],
      "2": [todo]
    };

    expect(todos(initialState, {
      type: MOVE_TODO_TO_CATEGORY,
      todo,
      toCategory
    })).toEqual(newState);
  });

});
