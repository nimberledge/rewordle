import './App.css';
import React from 'react';
import RewordleGame from './RewordleGame';
import RewordleContainer from './components/RewordleContainer';
import WordleInput from './components/WordleInput';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {mode: 'choose'};
  }

  render() {
    if (this.state.mode === 'play') {
      let dummy_guesses = ["ROUSE", "STAIR", "SCARY", "SHARK", "SHARP", "SHARD"];
      let game = new RewordleGame(dummy_guesses);
      return (
        <div className="App">
          <header className="App-header">
            <p>
              RE-WORDLE
            </p>
          </header>
          <body className="App-body">
    
            <div id='main-container'>
              <RewordleContainer game={ game }/>
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
                <WordleInput />
              </div>
            </body>
          </div>
        );
    } else {
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
                Click here to make your Rewordle
              </button>
              <button id='PlayChoiceButton' className='ChooseButton' onClick={() => this.setState({mode: 'play'})}>
                Click here to play a fixed Rewordle
              </button>
            </div>
          </body>
        </div>
      );
    }
  }
}

export default App;
