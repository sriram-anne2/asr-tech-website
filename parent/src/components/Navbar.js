import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // close on click
  };

  return (
    <nav className="navbar">
      <div className="nav-brand" onClick={() => scrollToSection('top')}>
        ASR Tech
      </div>
      <div className={`nav-links ${open ? 'active' : ''}`}>
        <button onClick={() => scrollToSection('projects')}>Projects</button>
        <button onClick={() => scrollToSection('about')}>About</button>
        <button onClick={() => scrollToSection('contact')}>Contact</button>
      </div>
      <div className={`hamburger ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </div>
    </nav>
  );
};

export default Navbar;
