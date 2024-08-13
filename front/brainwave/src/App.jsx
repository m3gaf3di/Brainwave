import React from 'react';
import brainwavelogo from './brainwavelogo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={brainwavelogo} className="App-logo" alt="Brainwave Logo" />
        <h1 className="App-title">Brainwave</h1>
        <p className="App-subtitle">Unleashing the Power of Neural Networks</p>
      </header>

      <section className="App-intro">
        <h2>Welcome to Brainwave</h2>
        <p>
          Brainwave is at the forefront of AI innovation, bringing you the most advanced neural networks that push the boundaries of what’s possible. Explore the future with us.
        </p>
        <button className="App-button">Get Started</button>
      </section>

      <section className="App-features">
        <h2>What We Offer</h2>
        <div className="App-features-grid">
          <div className="App-feature-item">
            <h3>🚀 Cutting-Edge AI</h3>
            <p>Experience the latest advancements in neural network technology.</p>
          </div>
          <div className="App-feature-item">
            <h3>⚙️ Real-Time Processing</h3>
            <p>Handle massive datasets with speed and precision.</p>
          </div>
          <div className="App-feature-item">
            <h3>🌐 Scalable Solutions</h3>
            <p>Grow your capabilities seamlessly with our scalable architecture.</p>
          </div>
          <div className="App-feature-item">
            <h3>🎨 Intuitive Design</h3>
            <p>Enjoy a user-friendly interface that makes complex tasks simple.</p>
          </div>
        </div>
      </section>

      <footer className="App-footer">
        <p>Connect with us:</p>
        <a href="https://github.com/m3gaf3di/Brainwave" target="_blank" rel="noopener noreferrer" className="App-link">
          GitHub Repository
        </a>
        <p className="App-contact">info@brainwave.com</p>
      </footer>
    </div>
  );
}

export default App;
