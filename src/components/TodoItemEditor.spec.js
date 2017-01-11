import React from 'react'
import { mount } from 'enzyme'
import TodoItemEditor from './TodoItemEditor'

const setup = () => {
  const actions = {
    onSave: jest.fn(),
    onCancel: jest.fn()
  };

  const item = {};

  const component = mount(
      <TodoItemEditor {...actions} item={item}/>
  );

  return {
    actions: actions,
    saveButton: component.find('input[type="submit"]'),
    cancelButton: component.find('button'),
    component: component
  }
};

describe('TodoItemEditor component', () => {
  it('should call onSave on save button click', () => {
    const { saveButton, component, actions } = setup();
    saveButton.simulate('click');
    component.ref('name').get(0).value = '';
    component.ref('description').get(0).value = '';
    component.ref('done').get(0).value = '';
    expect(actions.onSave).toBeCalled();
  })

  it('should call onCancel on cancel button click', () => {
    const { cancelButton, actions } = setup();
    cancelButton.simulate('click');
    expect(actions.onCancel).toBeCalled();
  })
});

