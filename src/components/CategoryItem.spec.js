import React from 'react'
import { mount } from 'enzyme'
import CategoryItem from './CategoryItem'

const setup = (addProps = {}) => {
  const actions = {
    onAdd: jest.fn(),
    onEdit: jest.fn(),
    onDeleteCategory: jest.fn(),
    onMoveTo: jest.fn()
  };

  const item = {};

  const component = mount(
      <CategoryItem {...actions} item={item} {...addProps}/>
  );

  return {
    actions: actions,
    addButton: component.find('.CategoryItem__button--add'),
    deleteButton: component.find('.CategoryItem__button--delete'),
    editButton: component.find('.CategoryItem__button--edit'),
    moveButton: component.find('.CategoryItem__button--move'),
    component: component
  }
};

describe('CategoryItem component', () => {
  it('should call onAdd on add button click', () => {
    const { addButton, actions } = setup();
    addButton.simulate('click');
    expect(actions.onAdd).toBeCalled();
  });

  it('should call onDeleteCategory on delete button click', () => {
    const { deleteButton, actions } = setup();
    deleteButton.simulate('click');
    expect(actions.onDeleteCategory).toBeCalled();
  });

  it('should call onEdit on edit button click', () => {
    const { editButton, actions } = setup();
    editButton.simulate('click');
    expect(actions.onEdit).toBeCalled();
  });

  it('should call onMove on move button click', () => {
    const { moveButton, actions } = setup({showMoveButton : true});
    moveButton.simulate('click');
    expect(actions.onMoveTo).toBeCalled();
  });

});

