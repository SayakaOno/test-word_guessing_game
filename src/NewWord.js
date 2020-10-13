import React from 'react';

export const NewWord = props => {
  if (props.display) {
    return (
      <button
        data-test="component-new-word"
        className="btn btn-primary mb-2"
        type="submit"
        onClick={props.onClick}
      >
        New Word
      </button>
    );
  } else {
    return <div data-test="component-new-word"></div>;
  }
};

export default NewWord;
