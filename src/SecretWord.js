import React from 'react';
import PropTypes from 'prop-types';

export const SecretWord = props => {
  if (props.display) {
    return (
      <>
        <div data-test="component-secret-word">
          <button
            data-test="secret-word-button"
            className="btn btn-primary mb-2"
            type="submit"
            onClick={props.onClick}
          >
            Enter your own secret word
          </button>
        </div>
      </>
    );
  } else {
    return <div data-test="component-secret-word" />;
  }
};

SecretWord.propTypes = {
  display: PropTypes.bool.isRequired,
  onClick: PropTypes.func
};

export default SecretWord;
