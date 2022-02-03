import './App.css';
import WordleGrid from './components/WordleGrid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Rewordle
        </p>
      </header>
      <body className="App-body">
        <div id='main-container'>
          <WordleGrid id='WordleGridComponent' />
        </div>
      </body>
    </div>
  );
}

export default App;
