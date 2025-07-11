import React from 'react';
import './MiddleSection.css';

const MiddleSection = () => {
  return (
    <section className="middle-section" id="projects">
      <h2>Upcoming Projects</h2>
      <div className="projects">
        <div className="project-card">
          <img src="/economist-splash.png" alt="Economist App" />
          <h3>Economist App</h3>
          <p>Personal finance and credit card optimization platform.</p>
          <a
            href="https://github.com/the-economist-org/website"
            target="_blank"
            rel="noopener noreferrer"
          >
            View GitHub Repo
          </a>
        </div>

        <div className="project-card">
          <h3>Project #2</h3>
          <p>Coming soon...</p>
        </div>
      </div>
    </section>
  );
};

export default MiddleSection;
