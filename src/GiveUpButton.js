import React from 'react';
import GaveUpMessage from './GaveUpMessage';

export const GiveUpButton = props => {
  if (props.gaveUp) {
    return <GaveUpMessage secretWord={props.secretWord} display={true} />;
  } else if (!props.success) {
    return (
      <button
        data-test="component-give-up"
        className="btn btn-primary mb-2"
        type="submit"
        onClick={props.onClick}
      >
        Give up
      </button>
    );
  } else {
    return <div data-test="component-give-up"></div>;
  }
};

export default GiveUpButton;
