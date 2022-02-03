import React from 'react';
import WordleTile from './WordleTile';

const GRID_SIZE = [6, 6];

class WordleGrid extends React.Component {
    render() {
        let tileRows = [];
        let tempText = 'A';
        for (let i = 0; i < GRID_SIZE[0]; i++) {
            let tileRow = [];
            for (let j = 0; j < GRID_SIZE[1]; j++) {
                // if (i % 3 === 0) {
                //     tempText = 'A';
                // } else if (i % 3 === 1) {
                //     tempText = 'B';
                // } else if (i % 3 === 2) {
                //     tempText = 'C';
                // }
                if (i === j) {
                    tempText = '';
                } else {
                    tempText = 'A';
                }
                tileRow.push(<td>
                <WordleTile text={tempText} row={i} col={j} state={ (i+j) % 3} />
                </td>)
            }
            tileRows.push(<tr id={ `gridRow[${i}]`}>
                             { tileRow }  
                          </tr>);
        }
        return <table id='WordleGridTable'> {tileRows} </table>;
    }
}

export default WordleGrid;