import React from 'react';

export const GiveUpMessage = props => {
  if (props.display) {
    return (
      <div data-test="component-gave-up-message">
        The secret word was "{props.secretWord}"<br />
        Better luck next time!
      </div>
    );
  } else {
    return (
      <div data-test="component-gave-up-message">
        The secret word was "{props.secretWord}"<br />
        Better luck next time!
      </div>
    );
  }
};

export default GiveUpMessage;
