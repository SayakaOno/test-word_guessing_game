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
        <button
          data-test="new-word-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={props.getSecretWord}
        >
          New Word
        </button>
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
