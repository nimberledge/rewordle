import React from 'react';
import styled from 'styled-components';

const GreyTile = styled.button`background-color: #808080;`;
const YellowTile = styled.button`background-color: #c9b458;`;
const GreenTile = styled.button`background-color: #6aaa64;`;

class WordleTile extends React.Component {
    render() {
        let buttonId = `tile_${this.props.row}_${this.props.col}`;
        // let bgColour = '#808080';
        // if (this.props.state === 1) {
        //     bgColour = '#c9b458';
        // } else if (this.props.state === 2) {
        //     bgColour = '#6aaa64';
        // }
        // let styleVal = `color: ${bgColour};`; 
        if (this.props.state === 0) {
            return <GreyTile id={ buttonId } disabled={ true } className='WordleTile' >
                { this.props.text }
            </GreyTile>;
        } else if (this.props.state === 1) {
            return <YellowTile id={ buttonId } disabled={ true } className='WordleTile' >
                { this.props.text }
            </YellowTile>;
        } else if (this.props.state === 2) {
            return <GreenTile id={ buttonId } disabled={ true } className='WordleTile' >
                { this.props.text }
            </GreenTile>;
        } else {
            return <GreyTile id={ buttonId } disabled={ true } className='WordleTile' >
                { this.props.text }
            </GreyTile>;
        }
    }
}

export default WordleTile;