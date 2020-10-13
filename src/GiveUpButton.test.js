import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../test/testUtils';
import GiveUpButton from './GiveUpButton';
import App, { UnConnectedApp } from './App';
import NewWord from './NewWord';

const defaultProps = { success: false, gaveUp: false };

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<GiveUpButton {...setupProps} />);
  return wrapper;
};

test("renders 'Give up' button until guess is successful", () => {
  const wrapper = setup({ success: false, gaveUp: false });
  const giveUpButton = findByTestAttr(wrapper, 'component-give-up');
  expect(giveUpButton.text().length).not.toBe(0);
});

test("shows 'new word' button when 'Give up' button is clicked", () => {
  const secretWord = 'party';
  const wrapper = setup({ success: false, secretWord });
  const gaveUpMessage = findByTestAttr(wrapper, 'component-give-up');
  const newWordComponent = shallow(<NewWord />);
  const newWordButton = findByTestAttr(newWordComponent, 'component-new-word');
  gaveUpMessage.simulate('click');
  expect(newWordButton.text()).not.toBe(0);
});
