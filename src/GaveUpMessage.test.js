import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import GaveUpMessage from './GaveUpMessage';
import App, { UnConnectedApp } from './App';
import NewWord from './NewWord';

const defaultProps = { display: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GaveUpMessage {...setupProps} />);
  return wrapper;
};

test("shows 'secret word' when 'Give up' button is clicked", () => {
  const secretWord = 'party';
  const wrapper = setup({ display: true, secretWord });
  const gaveUpMessage = findByTestAttr(wrapper, 'component-gave-up-message');
  expect(gaveUpMessage.text().includes(secretWord)).toBe(true);
});

test("shows 'better luck' message when 'Give up' button is clicked", () => {
  const wrapper = setup({ display: true });
  const gaveUpMessage = findByTestAttr(wrapper, 'component-gave-up-message');
  expect(gaveUpMessage.text().length).not.toBe(0);
});
