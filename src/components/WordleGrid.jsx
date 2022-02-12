import React from 'react';
import WordleTile from './WordleTile';
import styled from 'styled-components';

const GRID_SIZE = [6, 5];
const UnselectedRow = styled.button`background-color: #282c34;`;
const SelectedRow = styled.button`background-color: #1273de;`;
const CompletedRow = styled.button`background-color: #13cb16;`;
const DeadRow = styled.button`background-color: #fb5a1a;`;
const InvisibleRow = styled.button`background-color: #282c34; border: 0px;`;

class WordleGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {guessRow: Math.max(0, this.props.game.guesses.length-2)};
        console.log("guess row: " + this.state.guessRow);
        this.updateGuessRow = this.updateGuessRow.bind(this);
        this.checkRowComplete = this.checkRowComplete.bind(this);
        this.checkGameComplete = this.checkGameComplete.bind(this);
        this.chooseNewRow = this.chooseNewRow.bind(this);
    }

    updateGuessRow(row) {
        this.setState({guessRow: row})
        console.log("updating WG.guessRow to: " + row);
        this.props.updateParent(row);
    }

    checkRowComplete(row) {
        for (let i = 0; i < this.props.game.texts[row].length; i++) {
            if (this.props.game.texts[row][i] === '') {
                return false;
            }
        }
        return true;
    }

    checkGameComplete() {
        for (let j = 0; j < this.props.game.texts.length; j++) {
            for (let i = 0; i < this.props.game.texts[j].length; i++) {
                if (this.props.game.texts[j][i] === '') {
                    return false;
                }
            }
        }
        return true;
    }

    chooseNewRow() {
        let candidateRow = Math.max(this.state.guessRow-1, 0);
        while (true) {
            let candComplete = true;
            for (let j = 0; j < this.props.game.texts[candidateRow].length; j++) {
                if (this.props.game.texts[candidateRow][j] === '') {
                    candComplete = false;
                    break;
                }
            }
            if (candComplete === false) {
                this.updateGuessRow(candidateRow);
                break;
            } else {
                candidateRow--;
            }
            if (candidateRow < 0) {
                break;
            }
        }
    }

    render() {
        let tileRows = [];
        for (let i = 0; i < GRID_SIZE[0]; i++) {
            let tileRow = [];
            for (let j = 0; j < GRID_SIZE[1] + 1; j++) {
                // Do the row selector
                if (j === 0) {
                    let button = null;
                    let gameDone = this.checkGameComplete();
                    let rowDone = this.checkRowComplete(i);
                    let button_id = 'rowSelectButton_' + i;
                    // If the game is done always just render the strikes
                    if (i === GRID_SIZE[0] - 1) {
                        button = <td>
                            <InvisibleRow id={ button_id } className='rowSelectButton' disabled={ true } /> 
                            </td>;
                    } else if (gameDone === true || (rowDone && this.state.guessRow !== i)) {
                        if (this.props.game.strikes[i] >= 5) {
                            button = <td> <DeadRow id={ button_id } className='rowSelectButton' disabled={ true }> 
                            { this.props.game.strikes[i] }
                            </DeadRow> </td>;
                        } else {
                            button = <td> <CompletedRow id={ button_id } className='rowSelectButton' disabled={ true }> 
                            { this.props.game.strikes[i] }
                            </CompletedRow> </td>
                        }
                    } else if (rowDone === false && this.state.guessRow === i) {
                        button = <td> <SelectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }> 
                            { "➔" }
                            </SelectedRow> </td>;
                    } else if (rowDone === false && this.state.guessRow !== i) {
                        button = <td><UnselectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }>
                        { this.props.game.strikes[i] }
                         </UnselectedRow> </td>;
                    } else if (this.state.guessRow === i && rowDone === true) {
                        this.chooseNewRow();
                        continue;
                    }
                    console.log(tileRow);
                    tileRow.push(button);
                    continue;
                }
                if (i >= this.props.game.states.length) {
                    tileRow.push(<td>
                        <WordleTile text='' row={i} col={j-1} state={ 0 } />
                        </td>)    
                } else {
                    let ijState = this.props.game.states[i][j-1];
                    let ijText = this.props.game.texts[i][j-1];
                    tileRow.push(<td>
                    <WordleTile text={ ijText } row={i} col={j-1} state={ ijState } />
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