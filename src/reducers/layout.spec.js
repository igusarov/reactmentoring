import {SELECTED_CATEGORY_CONTENT_SHOWN, OPEN_TODO_EDITOR, CLOSE_TODO_EDITOR, SEARCH_CONTENT_SHOWN} from '../actions';
import layout from './layout';

describe('layout reducer', () => {

  it('should handle initial state', () => {
    expect(layout(undefined, {})).toEqual({})
  });

  it('should handle SELECTED_CATEGORY_CONTENT_SHOWN', () => {
    const categoryId = 1;
    const initialState = undefined;
    const newState = {
      selectedCategory: {
        id: categoryId
      }
    };
    expect(layout(initialState, {
      type: SELECTED_CATEGORY_CONTENT_SHOWN,
      categoryId
    })).toEqual(newState)
  });

  it('should handle OPEN_TODO_EDITOR', () => {
    const todo = {a: "a"};
    const initialState = undefined;
    const newState = {
      selectedTodo: todo
    };
    expect(layout(initialState, {
      type: OPEN_TODO_EDITOR,
      todo
    })).toEqual(newState)
  });

  it('should handle CLOSE_TODO_EDITOR', () => {
    const initialState = {
      selectedTodo: {}
    };
    const newState = {};
    expect(layout(initialState, {
      type: CLOSE_TODO_EDITOR
    })).toEqual(newState)
  });

  it('should handle SEARCH_CONTENT_SHOWN', () => {
    const initialState = {
      selectedCategory: {}
    };
    const newState = {};
    expect(layout(initialState, {
      type: SEARCH_CONTENT_SHOWN
    })).toEqual(newState)
  });
});