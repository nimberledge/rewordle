import './App.css';
import RewordleGame from './RewordleGame';
import RewordleContainer from './components/RewordleContainer';


function App() {
  let dummy_guesses = ["ROUSE", "STAIR", "SCARY", "SHARK", "SHARP", "SHARD"];
  // let dummy_guesses = ["NASAL", "BANAL", "ALTER"];
  let game = new RewordleGame(dummy_guesses);
  // console.log(game.states);
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
}

export default App;
