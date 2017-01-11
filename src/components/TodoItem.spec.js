import React from 'react'
import { mount } from 'enzyme'
import TodoItem from './TodoItem'

const setup = (addProps = {}) => {
  const actions = {
    onTodoEdit: jest.fn(),
    onChecked: jest.fn(),
  };

  const item = {};

  const component = mount(
      <TodoItem {...actions} item={item} {...addProps}/>
  );

  return {
    actions: actions,
    editButton: component.find('.TodoItem__button--edit'),
    checkbox: component.find('input[type="checkbox"]'),
    component: component
  }
};

describe('TodoItem component', () => {

  it('should call onAdd on add button click', () => {
    const { editButton, actions } = setup();
    editButton.simulate('click');
    expect(actions.onTodoEdit).toBeCalled();
  });

  it('should call onChecked on change checkbox', () => {
    const { checkbox, actions } = setup();
    checkbox.simulate('change');
    expect(actions.onChecked).toBeCalled();
  });
});


