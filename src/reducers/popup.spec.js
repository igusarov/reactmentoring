import { BEFORE_TO_ADD_CATEGORY, BEFORE_TO_UPDATE_CATEGORY, AFTER_SAVING_CATEGORY } from '../actions';
import popup from './popup';

describe('popup reducer', () => {
  it('should handle initial state', () => {
    expect(popup(undefined, {})).toEqual({})
  });

  it('should handle BEFORE_TO_ADD_CATEGORY', () => {
    const event = {
      clientX : 1,
      clientY : 2
    };
    const parentCategory = {};
    const initialState = undefined;
    const newState = {
      saveCategory: {
        posX: event.clientX,
        posY: event.clientY,
        parentCategory: parentCategory,
        initialName: ''
      }
    };
    expect(popup(initialState, {
      type : BEFORE_TO_ADD_CATEGORY,
      event,
      parentCategory
    })).toEqual(newState)
  });

  it('should handle BEFORE_TO_UPDATE_CATEGORY', () => {
    const event = {
      clientX : 1,
      clientY : 2
    };
    const category = {
      name : 'name'
    };
    const initialState = undefined;
    const newState = {
      saveCategory: {
        posX: event.clientX,
        posY: event.clientY,
        category: category,
        initialName: category.name
      }
    };
    expect(popup(initialState, {
      type : BEFORE_TO_UPDATE_CATEGORY,
      event,
      category
    })).toEqual(newState)
  });

  it('should handle AFTER_SAVING_CATEGORY', () => {
    const initialState = {a : "a"};
    const newState = {};
    expect(popup(initialState, {
      type : AFTER_SAVING_CATEGORY,
    })).toEqual(newState)
  });

});