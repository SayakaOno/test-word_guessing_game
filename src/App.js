import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import GuessedWords from './GueesedWords';
import Congrats from './Congrats';
import Input from './Input';
import { getSecretWord } from './actions';

export class UnConnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords guessedWords={this.props.guessedWords} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};

export default connect(
  mapStateToProps,
  { getSecretWord }
)(UnConnectedApp);
