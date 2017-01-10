import { ADD_CATEGORY, DELETE_CATEGORY,  UPDATE_CATEGORY} from '../actions';
import categories from './categories';

describe('categories reducer', () => {
  it('should handle initial state', () => {
    expect(categories(undefined, {})).toEqual({root : []})
  });

  it('should handle ADD_CATEGORY', () => {
    const name = 'category name';
    expect(categories([], {
      type : ADD_CATEGORY,
      name
    })).toEqual({root: [{id: 0, name, categories: [], todos: []}]})
  });

  it('should handle DELETE_CATEGORY', () => {
    const category = {
      id: 0,
      name: 'name',
      categories: [],
      todos: []
    };

    const state = {root: [category]};

    expect(categories(state, {
      type : DELETE_CATEGORY,
      category
    })).toEqual({root: []});
  });

  it('should handle UPDATE_CATEGORY', () => {
    const category = {
      id: 0,
      name: 'name',
      categories: [],
      todos: []
    };

    let newCategory = {...category};
    newCategory.name = 'new name';

    const state = {root: [category]};
    const newState = {root: [newCategory]};

    expect(categories(state, {
      type : UPDATE_CATEGORY,
      category,
      newCategory
    })).toEqual(newState);
  });

});