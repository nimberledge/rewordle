import React from 'react';

class GuessBox extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateGuess = this.validateGuess.bind(this);
        this.guessString = '';
        this.state = {textbox_entry : ''};
    }

    guessString;

    handleSubmit(e) {
        this.guessString = this.state.textbox_entry;
        if (this.validateGuess(this.guessString) === 0) {
            this.props.game.processGuess(this.guessString, this.props.rowSelector.guessRow);
            this.props.updateParent(this.props.game);
            this.setState({textbox_entry: ''});
        } else {
            alert("Invalid guess, please enter a guess with 5 characters");
        }
    }

    handleChange(e) {
        if (e.target.value.length <= 5) {
            this.setState({textbox_entry: e.target.value});
        }
    }

    validateGuess(guess) {
       if (guess.length !== 5) {
           return 1;
       }
       return 0;
    }

    render() {
        return (<div id='GuessBox'>
        <p> Enter Guess here: </p>
        <input id='GuessTextBox'
               type='text'
               value={ this.state.textbox_entry }
               onChange={ this.handleChange }
               />
        <button id='GuessSubmitButton' onClick={ this.handleSubmit }> Submit </button>
        </div>);
    }
}

export default GuessBox;