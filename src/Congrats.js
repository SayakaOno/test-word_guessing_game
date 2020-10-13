import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSecretWord } from './actions';

export const UnconnectedCongrats = props => {
  if (props.success) {
    return (
      <>
        <div data-test="component-congrats" className="alert alert-success">
          <span data-test="congrats-message">
            Congratulations! You guessed the word!
          </span>
        </div>
      </>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

UnconnectedCongrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default connect(
  null,
  { getSecretWord }
)(UnconnectedCongrats);
