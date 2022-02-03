import React from 'react';
import WordleGrid from './WordleGrid';
import GuessBox from './GuessBox';
import RowSelector from './RowSelector';

class RewordleContainer extends React.Component {
    game; 
    constructor(props) {
        super(props);
        this.game = props.game;

        this.updateSelf = this.updateSelf.bind(this);
        this.updateGuessRow = this.updateGuessRow.bind(this);
        this.render = this.render.bind(this);
        let initGuessRow = Math.max(0, this.game.guesses.length - 2);
        this.state = {plsrender: false, guessRow: initGuessRow};
    }

    updateSelf(game) {
        this.setState({plsrender: true, guessRow: this.state.guessRow});
    }

    updateGuessRow(row) {
        this.setState({plsrender: true, guessRow: row});
        console.log("Updated container guess row to: " + row);
    }

    render() {
        return (<div id='RewordleContainer' >
            <RowSelector id='RowSelect' validRows={ this.game.guesses.length } updateParent={ this.updateGuessRow }/>
            <GuessBox guessRow={ this.state.guessRow } game={ this.game } updateParent={ this.updateSelf }/>
            <WordleGrid id='WordleGridComponent' game={ this.game } />
        </div>)
    }
}

export default RewordleContainer;