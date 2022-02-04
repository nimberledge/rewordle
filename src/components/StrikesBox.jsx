import React from 'react';

class StrikesBox extends React.Component {
    render() {
        let strikesLength = this.props.strikes;
        let strikesString = '';
        for (let i = 0; i < strikesLength; i++) {
            strikesString += '❌';
        }
        return (<div id='StrikesBox'>
            <p>Strikes: { strikesString } / 3</p>
        </div>);
    }
}

export default StrikesBox;