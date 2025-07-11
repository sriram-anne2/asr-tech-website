import React from 'react';
import './App.css';
import './LogoText.css';
import './HeroSection.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MiddleSection from './components/MiddleSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" id="top">
      <Navbar />
      <Header />
      <MiddleSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
