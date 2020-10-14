import React from 'react';
export class SecretWordForm extends React.Component {
  state = {
    input: ''
  };

  onClick = () => {
    this.props.onSecretWordSubmit(this.state.input);
  };

  render() {
    return (
      <div data-test="component-secret-word-form">
        <p>Enter a secret word for someone else to guess</p>
        <input
          value={this.state.input}
          onChange={e => this.setState({ input: e.target.value })}
        />
        <button
          data-test="secret-word-submit-button"
          className="btn btn-primary mb-2"
          type="submit"
          onClick={this.onClick}
        >
          Submit
        </button>
      </div>
    );
  }
}

export default SecretWordForm;
