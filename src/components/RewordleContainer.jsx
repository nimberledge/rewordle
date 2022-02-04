import React from 'react';
import WordleGrid from './WordleGrid';
import GuessBox from './GuessBox';
import RowSelector from './RowSelector';
import CompletedBox from './CompletedBox';
import StrikesBox from './StrikesBox';

class RewordleContainer extends React.Component {
    game; 
    constructor(props) {
        super(props);
        this.game = props.game;

        this.render = this.render.bind(this);
        let initGuessRow = Math.max(0, this.game.guesses.length - 2);
        this.state = {plsrender: false, guessRow: initGuessRow, done: false};

        this.updateSelf = this.updateSelf.bind(this);
        this.updateGuessRow = this.updateGuessRow.bind(this);
        this.checkComplete = this.checkComplete.bind(this);
    }

    updateSelf(game) {
        if (this.checkComplete()) {
            this.setState({plsrender: true, guessRow: this.state.guessRow, done: true});
        } else {
            this.setState({plsrender: true, guessRow: this.state.guessRow, done: false});
        }
    }

    updateGuessRow(row) {
        this.setState({plsrender: true, guessRow: row});
        console.log("Updated container guess row to: " + row);
    }

    checkComplete() {
        for (let i = 0; i < this.game.texts.length; i++) {
            for (let j = 0; j < this.game.texts[i].length; j++) {
                if (this.game.texts[i][j] === '') {
                    console.log("checkComplete failed at " + i + ", " + j);
                    return false;
                }
            }
        }
        return true;
    }

    render() {

        if (this.state.done === true) {
            let numStrikes = 0;
            for (let i = 0; i < this.game.guesses.length; i++) {
                numStrikes += this.game.strikes[i];
            }
            return (<div id='RewordleContainer' >
                <RowSelector id='RowSelect' validRows={ this.game.guesses.length } updateParent={ this.updateGuessRow } game={ this.game }/>
                <GuessBox guessRow={ this.state.guessRow } game={ this.game } updateParent={ this.updateSelf }/>
                <WordleGrid id='WordleGridComponent' game={ this.game }/>
                <CompletedBox strikes={ numStrikes }/>
            </div>);
        }
        return (<div id='RewordleContainer' >
            <RowSelector id='RowSelect' validRows={ this.game.guesses.length } updateParent={ this.updateGuessRow } game={ this.game }/>
            <GuessBox guessRow={ this.state.guessRow } game={ this.game } updateParent={ this.updateSelf }/>
            <WordleGrid id='WordleGridComponent' game={ this.game } />
            <StrikesBox id='StrikesBoxComponent' strikes={ this.game.strikes[this.state.guessRow]} />
        </div>);
    }
}

export default RewordleContainer;