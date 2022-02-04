import './App.css';
import React from 'react';
import HomePage from './components/HomePage'

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <body className="App-body">
            <div id='main-container'>
              <HomePage mode='choose' />
            </div>
          </body>
        </div>
      );
    }
}

export default App;
