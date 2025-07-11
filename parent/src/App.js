import React from 'react';
import LogoText from './LogoText';
import './App.css';
import './HeroSection.css'; // We'll create this next

function App() {
  return (
    <div className="App">
      <LogoText />
      <section className="hero">
        <div className="hero-image">
          <img src="/economist-splash.png" alt="Economist Splash" />
        </div>
        <div className="hero-text">
          <h2>What is The Economist?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Quisque feugiat justo nec tellus egestas, non tempus nisl lobortis. 
            Phasellus vel arcu vel lorem fermentum malesuada.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
