import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import NewWord from './NewWord';

const defaultProps = { success: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<NewWord {...setupProps} />);
  return wrapper;
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-new-word');
  expect(component.length).toBe(1);
});

test("renders 'New word' button after successful guess", () => {
  const wrapper = setup({ display: true });
  const newWordButton = findByTestAttr(wrapper, 'component-new-word');
  expect(newWordButton.text().length).not.toBe(0);
});

test("calls 'getSecretWord' when 'new word' button is clicked", () => {
  const onClickMock = jest.fn();
  const props = {
    onClick: onClickMock,
    display: true
  };
  const wrapper = setup(props);
  const newWordButton = findByTestAttr(wrapper, 'component-new-word');
  newWordButton.simulate('click');

  const onClickCallCount = onClickMock.mock.calls.length;
  expect(onClickCallCount).toBe(1);
});
