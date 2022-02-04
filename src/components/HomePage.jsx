import React from 'react';
import RewordleGame from '../RewordleGame';
import RewordleContainer from './RewordleContainer';
import WordleInput from './WordleInput';

import { Buffer } from 'buffer';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {mode: 'choose'};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputDone = this.handleInputDone.bind(this);
    }

    handleChange(e) {
        this.setState({mode: this.state.mode, link: e.target.value});
    }
    
    handleSubmit(e) {
        this.setState({mode: 'play', link: this.state.link});
    }

    handleInputDone () {
        this.setState({mode: 'choose'});
    }

    render() {
        if (this.state.mode === 'play') {
          console.log("Tried to start in play mode");
          let guessStr64 = this.state.link;
          let guessStr = Buffer.from(guessStr64, 'base64').toString('ascii');
          let guesses = guessStr.split(",");
          console.log("guesses: " + guesses);
          let game = new RewordleGame(guesses);
          return (
            <div className="App">
              <header className="App-header">
                <p>
                  RE-WORDLE
                </p>
              </header>
              <body className="App-body">
                <div id='main-container'>
                  <RewordleContainer game={ game } updateParent={ this.handleInputDone }/>
                </div>
              </body>
            </div>
          );
        } else if (this.state.mode === 'input') {
            return (
              <div className="App">
                <header className="App-header">
                  <p>
                    RE-WORDLE
                  </p>
                </header>
                <body className="App-body">
                  <div id='main-container'>
                    <WordleInput updateParent={ this.handleInputDone } />
                  </div>
                </body>
              </div>
            );
        } else if (this.state.mode === 'choose') {
          return (
            <div className="App">
              <header className="App-header">
                <p>
                  RE-WORDLE
                </p>
              </header>
              <body className="App-body">
                <div id='main-container'>
                  <button id='InputChoiceButton' className='ChooseButton' onClick={() => this.setState({mode: 'input'})}>
                    Make your rewordle
                  </button>
                  <button id='PlayChoiceButton' className='ChooseButton' onClick={() => this.setState({mode: 'getLink'})}>
                    Click here to play
                  </button>
                </div>
              </body>
            </div>
          );
        } else if (this.state.mode === 'getLink') {
          return (<div className="App">
              <header className="App-header">
                <p>
                  RE-WORDLE
                </p>
              </header>
              <body className="App-body">
                <div id='main-container'>
                  <p id='linkInputText'>Enter the link reference: </p>
                  <input id='linkInputBox' type='text' 
                    value={ this.state.link } onChange={ this.handleChange } />
                  <button id='openLinkButton' onClick={ this.handleSubmit }>
                    Play
                  </button>
                  <button id='otherGoHomeButton' onClick={ this.handleInputDone }> Back to home </button>
                </div>
              </body>
            </div>);
        }
    }
}

export default HomePage;