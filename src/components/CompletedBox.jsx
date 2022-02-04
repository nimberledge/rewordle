import React from 'react';

class CompletedBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: true};
    }

    render() {
        let completedString = "✅ Success!";
        if (this.props.strikes === 0) {
            completedString = "✅ Perfect!"
        } else if (this.props.strikes > 0 && this.props.strikes <= 3) {
            completedString = "✅ Impressive!"
        }
        if (this.state.open) {
            return (<div id='CompletedBox'>
            <p id='CompletedTextBox'> 
                { completedString }
            </p>
            </div> );
        }
        return;
    }
}

export default CompletedBox;