import React from 'react';
import { Buffer } from 'buffer';

class WordleInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {guesses: [], textboxEntry: '', submitted: false, link: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitAll = this.handleSubmitAll.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    handleChange(e) {
        if (e.target.value.length <= 5) {
            this.setState({guesses: this.state.guesses, textboxEntry: e.target.value, link: '', submitted:false});
        } else {
            this.setState({guesses: this.state.guesses, textboxEntry: this.state.textboxEntry,
                           link: '', submitted:false});
        }
    }

    handleSubmit() {
        if (this.state.guesses.length < 6 && this.state.textboxEntry.length === 5) {
            let newGuesses = this.state.guesses;
            newGuesses.push(this.state.textboxEntry.toUpperCase());
            this.setState({guesses: newGuesses, textboxEntry: '',
            link: '', submitted:false});
        }
    }

    handleSubmitAll() {
        if (this.state.guesses.length < 2) {
            alert("Please enter at least 2 guesses");
        } else {
            console.log(this.state.guesses);
            let guessString = '';
            for (let i = 0; i < this.state.guesses.length-1; i++) {
                guessString += this.state.guesses[i]+',';
            }
            guessString += this.state.guesses[this.state.guesses.length-1];
            let base64Val = Buffer.from(guessString).toString('base64');
            // console.log(base64Val);
            // let decodedVal = Buffer.from(base64Val, 'base64').toString('ascii');
            // console.log(decodedVal);
            let linkStr = base64Val;
            this.setState({guesses: this.state.guesses, textboxEntry: this.state.textboxEntry, submitted: true, link: linkStr});
        }
    }

    handleDone() {
        this.props.updateParent();
    }

    render() {
        // If submitted
        if (this.state.submitted === true) {
            return (<div id='WordleLinkComponent'>
            <p id='RewordleCodeComponent'>Here's your rewordle code: {this.state.link} </p>
            <button id='goToHomePageButton' onClick={ this.handleDone }> Back to home </button>
            </div>);
        }
        
        let pastGuessTable = [];
        for (let i = 0; i < this.state.guesses.length; i++) {
            let tableEntry = <tr> <td> Guess #{i+1}: {this.state.guesses[i]} </td> </tr>;
            pastGuessTable.push(tableEntry);
        }
        
        if (this.state.guesses.length >= 2 && this.state.guesses.length < 6) {
            return (<div id='WordleInputComponent'>
                <p id='enterGuessBox'> Enter your guesses on today's Wordle </p>
                <table id='pastGuessTable'> { pastGuessTable } </table>
                <p id='inputPrompt'> Enter guess # {this.state.guesses.length+1}: </p>
                <input id='inputBox' type='text' 
                value={ this.state.textboxEntry } onChange={ this.handleChange } />
                <button id='inputSubmitButton' onClick={ this.handleSubmit }>
                    Submit word
                </button>
                <button id='inputSubmitAllButton' onClick={ this.handleSubmitAll }>
                    Submit Wordle    
                </button>
            </div>);
        } else if (this.state.guesses.length === 6) {
            return (<div id='WordleInputComponent'>
                <p id='enterGuessBox'> Enter your guesses on today's Wordle </p>
                <table id='pastGuessTable'> { pastGuessTable } </table>
                <button id='inputSubmitAllButton' onClick={ this.handleSubmitAll }>
                    Submit Wordle    
                </button>
            </div>);
        }
        
        return (<div id='WordleInputComponent'>
                    <p id='enterGuessBox'> Enter your guesses on today's Wordle </p>
                    <table id='pastGuessTable'> { pastGuessTable } </table>
                    <p id='inputPrompt'> Enter guess # {this.state.guesses.length + 1}: </p>
                    <input id='inputBox' type='text' 
                    value={ this.state.textboxEntry } onChange={ this.handleChange } />
                    <button id='inputSubmitButton' onClick={ this.handleSubmit }>
                        Submit word
                    </button>
                </div>);
    }
}

export default WordleInput;