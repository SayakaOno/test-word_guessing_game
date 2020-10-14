import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import SecretWord from './SecretWord';

const defaultProps = {
  display: true
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<SecretWord {...setupProps} />);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-secret-word');
  expect(component.length).toBe(1);
});

test("renders button when 'display' prop is true", () => {
  const wrapper = setup({ display: true });
  const button = findByTestAttr(wrapper, 'secret-word-button');
  expect(button.text()).not.toBe('');
});

test("calls 'onClick' prop upon button click", () => {
  const setAddingSecretWordMock = jest.fn();
  const wrapper = setup({ display: true, onClick: setAddingSecretWordMock });
  const button = findByTestAttr(wrapper, 'secret-word-button');
  button.simulate('click');
  const setAddingSecretWordCallCount =
    setAddingSecretWordMock.mock.calls.length;
  expect(setAddingSecretWordCallCount).toBe(1);
});
