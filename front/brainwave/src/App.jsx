// eslint-disable-next-line no-unused-vars
import React from 'react';
import brainwavelogo from './brainwavelogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brainwavelogo} className="App-logo" alt="Brainwave Logo" />
        <h1>Brainwave</h1>
      </header>

      <section className="App-intro">
        <h2>Welcome to Brainwave</h2>
        <p>
          Brainwave is an innovative project aimed at leveraging advanced neural networks to unlock the full potential of AI. Our mission is to bring cutting-edge technology closer to everyone.
        </p>
      </section>

      <section className="App-features">
        <h2>Key Features</h2>
        <ul>
          <li>State-of-the-art Neural Network Models</li>
          <li>Real-time Data Processing</li>
          <li>Highly Scalable Architecture</li>
          <li>Intuitive User Interface</li>
          <li>Comprehensive Documentation</li>
        </ul>
      </section>

      <footer className="App-footer">
        <p>
          <strong>Contact Us:</strong> info@brainwave.com
        </p>
        <p>
          <a href="https://github.com/m3gaf3di/Brainwave" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
