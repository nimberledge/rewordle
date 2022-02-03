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
        this.render = this.render.bind(this);
        this.state = {plsrender: false};
    }

    updateSelf(game) {
        this.setState({plsrender: true});
    }

    render() {
        return (<div id='WordleContainer' >
            <RowSelector id='RowSelect' />
            <GuessBox guessRow={ 0 } rowSelector={ {"guessRow" : 1} } game={ this.game } updateParent={ this.updateSelf }/>
            <WordleGrid id='WordleGridComponent' game={ this.game } />
        </div>)
    }
}

export default RewordleContainer;