import React from 'react'
import { mount } from 'enzyme'
import SaveItem from './SaveItem'

const setup = () => {
  const actions = {
    onSave: jest.fn()
  };

  const component = mount(
      <SaveItem {...actions} />
  );

  return {
    actions: actions,
    button: component.find('.SaveItem__button--save'),
    component: component
  }
};

describe('SaveItem component', () => {
  it('should NOT call onSave on button click when text input empty', () => {
    const { button, actions } = setup();
    button.simulate('click');
    expect(actions.onSave).not.toBeCalled();
  })

  it('should call onSave on button click', () => {
    const { button, component, actions } = setup();
    component.ref('input').get(0).value = 'text';
    button.simulate('click');
    expect(actions.onSave).toBeCalled();
  })
});
