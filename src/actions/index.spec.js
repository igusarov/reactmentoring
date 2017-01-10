import * as actions from './index';

describe('category actions', () => {
  it('addCategory should create ADD_CATEGORY action', () => {
    const name = 'category name';
    const parentCategory = {};
    expect(actions.addCategory({name, parentCategory})).toEqual({
      type: actions.ADD_CATEGORY,
      name,
      parentCategory
    })
  })

  it('deleteCategory should create DELETE_CATEGORY action', () => {
    const category = {a : "a"};
    const parentCategory = {b : "b"};
    expect(actions.deleteCategory({category, parentCategory})).toEqual({
      type: actions.DELETE_CATEGORY,
      category,
      parentCategory
    })
  })

  it('updateCategory should create UPDATE_CATEGORY action', () => {
    const category = {a : "a"};
    const newCategory = {b : "b"};
    expect(actions.updateCategory({category, newCategory})).toEqual({
      type: actions.UPDATE_CATEGORY,
      category,
      newCategory
    })
  })

  it('beforeToAddCategory should create BEFORE_TO_ADD_CATEGORY action', () => {
    const event = {a : "a"};
    const parentCategory = {b : "b"};
    expect(actions.beforeToAddCategory({event, parentCategory})).toEqual({
      type: actions.BEFORE_TO_ADD_CATEGORY,
      event,
      parentCategory
    })
  })

  it('beforeToUpdateCategory should create BEFORE_TO_UPDATE_CATEGORY action', () => {
    const event = {a : "a"};
    const category = {b : "b"};
    expect(actions.beforeToUpdateCategory({event, category})).toEqual({
      type: actions.BEFORE_TO_UPDATE_CATEGORY,
      event,
      category
    })
  })

  it('afterSavingCategory should create AFTER_SAVING_CATEGORY action', () => {
    expect(actions.afterSavingCategory()).toEqual({
      type: actions.AFTER_SAVING_CATEGORY,
    })
  })

})

describe('layout actions', () => {
  it('selectedCategoryContentShown should create SELECTED_CATEGORY_CONTENT_SHOWN action', () => {
    const categoryId = 1;
    expect(actions.selectedCategoryContentShown(categoryId)).toEqual({
      type: actions.SELECTED_CATEGORY_CONTENT_SHOWN,
      categoryId
    })
  })

  it('searchContentShown should create SEARCH_CONTENT_SHOWN action', () => {
    expect(actions.searchContentShown()).toEqual({
      type: actions.SEARCH_CONTENT_SHOWN
    })
  })
})

describe('todo actions', () => {
  it('addTodo should create ADD_TODO action', () => {
    const name = 'todo name';
    const categoryId = 1;
    expect(actions.addTodo(name, categoryId)).toEqual({
      type: actions.ADD_TODO,
      name,
      categoryId
    })
  })

  it('updateTodo should create UPDATE_TODO action', () => {
    const todo = {a : "a"};
    const newTodo = {b : "b"};
    expect(actions.updateTodo(todo, newTodo)).toEqual({
      type: actions.UPDATE_TODO,
      todo,
      newTodo
    })
  })


  it('openTodoEditor should create OPEN_TODO_EDITOR action', () => {
    const todo = {a : "a"};
    expect(actions.openTodoEditor(todo)).toEqual({
      type: actions.OPEN_TODO_EDITOR,
      todo
    })
  })

  it('closeTodoEditor should create CLOSE_TODO_EDITOR action', () => {
    expect(actions.closeTodoEditor()).toEqual({
      type: actions.CLOSE_TODO_EDITOR
    })
  })

  it('moveTodoToCategory should create MOVE_TODO_TO_CATEGORY action', () => {
    const todo = {a : "a"};
    const toCategory = {b : "b"};
    expect(actions.moveTodoToCategory(todo, toCategory)).toEqual({
      type: actions.MOVE_TODO_TO_CATEGORY,
      todo,
      toCategory
    })
  })

})