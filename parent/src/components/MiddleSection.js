import React from 'react';
import './MiddleSection.css';

const MiddleSection = () => {
  return (
    <section className="middle-section" id="projects">
      <h2>Upcoming Projects</h2>
      <div className="projects">
        <div className="project-card">
          <img src={`${process.env.PUBLIC_URL}/economist-splash.png`} alt="Economist App" />
          <h3>Economist App</h3>
          <p>Personal finance and credit card optimization platform.</p>
          <a
            href="https://srirams-mac-mini.tail14d518.ts.net/api/api/home/hello"
            target="_blank"
            rel="noopener noreferrer"
          >
            Test our API (for now)
          </a>
        </div>

        <div className="project-card">
          <img src={`${process.env.PUBLIC_URL}/mythri-mandirs-logo.png`} alt="Mythri Mandirs" />
          <h3>Mythri Mandirs</h3>
          <p>Crafting Bespoke Wooden Mandirams</p>
          <a
            href="https://mythri-mandirs.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit us Now!
          </a>
        </div>


        <div className="project-card">
          <h3>Mythri Property Management</h3>
          <p>Simplified and intuitive platform for both landlords and tenants</p>
          <a
            href="https://www.asrtech.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Coming soon!
          </a>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
