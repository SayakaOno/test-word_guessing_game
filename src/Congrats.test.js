import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import Congrats, { UnconnectedCongrats } from './Congrats';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const store = storeFactory(defaultProps);
  const wrapper = shallow(
    <UnconnectedCongrats store={store} {...setupProps} />
  );
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

test("renders no text when 'success' prop is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

test("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().lentgh).not.toBe(0);
});

test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

test("renders 'New word' button after successful guess", () => {
  const wrapper = setup({ success: true });
  const newWordButton = findByTestAttr(wrapper, 'new-word-button');
  expect(newWordButton.length).toBe(1);
});

test("renders 'New word' button after successful guess", () => {
  const wrapper = setup({ success: true });
  const newWordButton = findByTestAttr(wrapper, 'new-word-button');
  expect(newWordButton.length).toBe(1);
});

test("calls 'getSecretWord' when 'new word' button is clicked", () => {
  const getSecretWordMock = jest.fn();
  const props = {
    getSecretWord: getSecretWordMock,
    success: true
  };
  const wrapper = setup(props);
  const newWordButton = findByTestAttr(wrapper, 'new-word-button');
  newWordButton.simulate('click');

  const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
  expect(getSecretWordCallCount).toBe(1);
});
