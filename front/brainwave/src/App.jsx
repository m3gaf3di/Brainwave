import React from 'react';
import brainwavelogo from './brainwavelogo.jpg';
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={brainwavelogo} style={{ width: '100px', height: '100px' }} alt="Brainwave Logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;