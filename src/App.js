import './App.css';
import WordleGrid from './components/WordleGrid';
import RewordleGame from './RewordleGame';

function App() {
  let dummy_guesses = ["ROUSE", "STAIR", "SCARY", "SHARK", "SHARP", "SHARD"];
  let game = new RewordleGame(dummy_guesses);
  console.log(game.states);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rewordle
        </p>
      </header>
      <body className="App-body">
        <div id='main-container'>
          <WordleGrid id='WordleGridComponent' states={ game.states } texts={ game.texts } />
        </div>
      </body>
    </div>
  );
}

export default App;
