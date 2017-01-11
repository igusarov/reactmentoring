import React from 'react'
import { mount } from 'enzyme'
import AddItem from './AddItem'

const setup = () => {
  const actions = {
    onAdd: jest.fn()
  };

  const component = mount(
      <AddItem {...actions} />
  );

  return {
    actions: actions,
    inputField: component.find('.AddItem__input'),
    button: component.find('input[type="button"]'),
    component: component
  }
};

describe('CategoryItem component', () => {
  it('should NOT call onAdd on button click when text input empty', () => {
    const { button, actions } = setup();
    button.simulate('click');
    expect(actions.onAdd).not.toBeCalled();
  })

  it('should call onAdd on button click', () => {
    const { button, component, actions } = setup();
    component.ref('input').get(0).value = 'text';
    button.simulate('click');
    expect(actions.onAdd).toBeCalled();
  })
});
