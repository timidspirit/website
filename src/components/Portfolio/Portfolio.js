import React from 'react';
import './Portfolio.css';

const Portfolio = () => (
  <section id="portfolio" className="my-8">
    <h2 className="text-3xl text-center mb-4">Portfolio</h2>
    <div className="skills-section">
      <div className="skill-card">
        <h3 className="text-xl text-center mb-2">Project 1</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div className="skill-card">
        <h3 className="text-xl text-center mb-2">Project 2</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
      <div className="skill-card">
        <h3 className="text-xl text-center mb-2">Project 3</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Feature 1</li>
          <li>Feature 2</li>
          <li>Feature 3</li>
        </ul>
      </div>
    </div>
  </section>
);

export default Portfolio;
