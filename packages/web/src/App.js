import React from 'react';
import { plus } from '@react-nodejs-yarn-workspaces/shared';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          1 + 2 = {plus(1, 2)}
        </a>
      </header>
    </div>
  );
}

export default App;
