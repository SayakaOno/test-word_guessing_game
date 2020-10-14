import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../test/testUtils';
import SecretWordForm from './SecretWordForm';

const setup = props => {
  const wrapper = shallow(<SecretWordForm {...props} />);
  return wrapper;
};

describe('SecretWordForm', () => {
  it('renders without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-secret-word-form');
    expect(component.length).toBe(1);
  });

  it('setSecretWord is called with inputted word when the button is clicked', () => {
    const secretWordSubmitMock = jest.fn();
    const wrapper = setup({
      onSecretWordSubmit: secretWordSubmitMock
    });
    const input = 'secretword';
    wrapper.setState({ input });
    const button = findByTestAttr(wrapper, 'secret-word-submit-button');
    button.simulate('click');

    const onSubmitArg = secretWordSubmitMock.mock.calls[0][0];
    expect(onSubmitArg).toBe(input);
  });
});
