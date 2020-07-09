import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { checkProps } from '../../test/testUtils';

import { findByTestAttr } from '../../test/testUtils';
import Congrats from './Congrats';

const defaultProps = { success: false };

const setup = props => {
  const setupProps = { ...defaultProps, ...props };
  const wrapper = shallow(<Congrats {...setupProps} />);
  return wrapper;
};

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test("renders no text when 'success' props is false", () => {
  const wrapper = setup({ success: false });
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test("renders non-empty congrats message when 'success' prop is true", () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttr(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
