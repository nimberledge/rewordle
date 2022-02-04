import React from 'react';
import styled from 'styled-components';

const UnselectedRow = styled.button`background-color: #282c34;`;
const SelectedRow = styled.button`background-color: #1273de;`;
const CompletedRow = styled.button`background-color: #13cb16;`;
const DeadRow = styled.button`background-color: #fb5a1a;`;

class RowSelector extends React.Component {
    guessRow;
    constructor(props) {
        super(props);
        this.validRows = this.props.validRows;
        this.state = {guessRow: Math.max(0, this.props.validRows-2)};
        this.updateGuessRow = this.updateGuessRow.bind(this);
    }

    updateGuessRow(i) {
        this.setState({guessRow: i});
        this.guessRow = i;
        this.props.updateParent(this.guessRow);
    }

    render() {
        // Not sure yet
        let row_buttons = [];
        let gameDone = true;
        for (let i = 0; i < this.validRows-1; i++) {
            for (let j = 0; j < this.props.game.guesses[i].length; j++) {
                if (this.props.game.texts[i][j] === '') {
                    gameDone = false;
                    break;
                }
            }
        }
        for (let i = 0; i < this.validRows-1; i++) {
            let button_id = 'rowSelectButton_' + i;
            let button = null;
            let completed = true;
            for (let j = 0; j < this.props.game.guesses[i].length; j++) {
                if (this.props.game.texts[i][j] === '') {
                    completed = false;
                    break;
                }
            }
            if (i === this.state.guessRow && gameDone === false) {
                //   onClick={ this.updateGuessRow(i) }>
                if (this.props.game.strikes[i] >= 3) {
                    button = <td> <DeadRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i)}> 
                            { "➔" }
                            </DeadRow> </td>;    
                } else if (completed) {
                    button = <td> <CompletedRow id={ button_id } className='rowSelectButton' disabled={ true }> 
                            { "➔" }
                            </CompletedRow> </td>;    
                } else {
                    button = <td> <SelectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }> 
                            { "➔" }
                            </SelectedRow> </td>;
                }
            } else {
                if (this.props.game.strikes[i] >= 3) {
                    button = <td> <DeadRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i)}> 
                            { this.props.game.strikes[i] }
                            </DeadRow> </td>;
                } else if (completed === true) {
                    button = <td> <CompletedRow id={ button_id } className='rowSelectButton' disabled={ true }> 
                            { this.props.game.strikes[i] }
                            </CompletedRow> </td>;
                } else {
                    button = <td><UnselectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }>
                           { this.props.game.strikes[i] }
                            </UnselectedRow> </td>;
                }
            }
            row_buttons.push(<tr> { button } </tr>);
        }

        return <div id='RowSelector'>
            <table id='RowSelectorButtonTable'>
                { row_buttons }
            </table>
        </div>
    }
}

export default RowSelector;