import React from 'react';
import styled from 'styled-components';

const UnselectedRow = styled.button`background-color: #282c34;`;
const SelectedRow = styled.button`background-color: #c9b458;`;

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
        console.log("Row selector guess row: " + this.guessRow);
    }

    render() {
        // Not sure yet
        let row_buttons = [];
        for (let i = 0; i < this.validRows-1; i++) {
            let button_id = 'rowSelectButton_' + i;
            let button = null;
            if (i === this.state.guessRow) {
                //   onClick={ this.updateGuessRow(i) }>
                button = <td> <SelectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }> 
                            { "->" }
                            </SelectedRow> </td>;
            } else {
                button = <td><UnselectedRow id={ button_id } className='rowSelectButton' onClick={ () => this.updateGuessRow(i) }>
                            </UnselectedRow> </td>;
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