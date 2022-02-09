import './App.css';
import React from 'react';
import HomePage from './components/HomePage';

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <HomePage mode='choose' />
        </div>
      );
    }
}

export default App;
