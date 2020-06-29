import React from 'react';
import './App.css';
import { IMAGE_URL } from './constants';

const logo = IMAGE_URL + 'icon.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello
        </p>
      </header>
    </div>
  );
}

export default App;
