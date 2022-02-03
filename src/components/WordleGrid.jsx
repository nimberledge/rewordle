import React from 'react';
import WordleTile from './WordleTile';

const GRID_SIZE = [6, 5];

class WordleGrid extends React.Component {
    render() {
        let tileRows = [];
        for (let i = 0; i < GRID_SIZE[0]; i++) {
            let tileRow = [];
            for (let j = 0; j < GRID_SIZE[1]; j++) {
                if (i >= this.props.game.states.length) {
                    tileRow.push(<td>
                        <WordleTile text='' row={i} col={j} state={ 0 } />
                        </td>)    
                } else {
                    let ijState = this.props.game.states[i][j];
                    let ijText = this.props.game.texts[i][j];
                    console.log(i, j, ijState, ijText);
                    tileRow.push(<td>
                    <WordleTile text={ ijText } row={i} col={j} state={ ijState } />
                    </td>)
                }
            }
            tileRows.push(<tr id={ `gridRow[${i}]`}>
                             { tileRow }  
                          </tr>);
        }
        return <table id='WordleGridTable'> {tileRows} </table>;
    }
}

export default WordleGrid;