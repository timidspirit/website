import React from 'react';
import htmlLogo from '../images/html-logo.png';
import flutterLogo from '../images/flutter-logo.png';
import cssLogo from '../images/css-logo.png';
import tailwindLogo from '../images/tailwind-logo.png';
import pythonLogo from '../images/python-logo.png';
import dartLogo from '../images/dart-logo.png';
import mysqlLogo from '../images/mysql-logo.png';
import postgresLogo from '../images/postgres-logo.png';
import githubLogo from '../images/github-logo.png';
import dockerLogo from '../images/docker-logo.png';
import vscodeLogo from '../images/vscode-logo.png';
import postmanLogo from '../images/postman-logo.png';
import nodejsLogo from '../images/nodejs-logo.png';
import reactjsLogo from '../images/reactjs-logo.png';
import './Skills.css';

const Skills = () => (
  <section id="skills" className="my-8">
    <h2 className="text-3xl text-center mb-4">Skills</h2>
    <div className="skills-section">
      <div className="skill-card">
        <img src={htmlLogo} alt="HTML" className="skill-logo" />
        <p>HTML</p>
      </div>
      <div className="skill-card">
        <img src={flutterLogo} alt="Flutter" className="skill-logo" />
        <p>Flutter</p>
      </div>
      <div className="skill-card">
        <img src={cssLogo} alt="CSS" className="skill-logo" />
        <p>CSS</p>
      </div>
      <div className="skill-card">
        <img src={tailwindLogo} alt="Tailwind" className="skill-logo" />
        <p>Tailwind</p>
      </div>
      <div className="skill-card">
        <img src={pythonLogo} alt="Python" className="skill-logo" />
        <p>Python</p>
      </div>
      <div className="skill-card">
        <img src={dartLogo} alt="Dart" className="skill-logo" />
        <p>Dart</p>
      </div>
      <div className="skill-card">
        <img src={mysqlLogo} alt="MySQL" className="skill-logo" />
        <p>MySQL</p>
      </div>
      <div className="skill-card">
        <img src={postgresLogo} alt="PostgreSQL" className="skill-logo" />
        <p>PostgreSQL</p>
      </div>
      <div className="skill-card">
        <img src={githubLogo} alt="GitHub" className="skill-logo" />
        <p>GitHub</p>
      </div>
      <div className="skill-card">
        <img src={dockerLogo} alt="Docker" className="skill-logo" />
        <p>Docker</p>
      </div>
      <div className="skill-card">
        <img src={vscodeLogo} alt="VSCode" className="skill-logo" />
        <p>VSCode</p>
      </div>
      <div className="skill-card">
        <img src={postmanLogo} alt="Postman" className="skill-logo" />
        <p>Postman</p>
      </div>
      <div className="skill-card">
        <img src={nodejsLogo} alt="Node.js" className="skill-logo" />
        <p>Node.js</p>
      </div>
      <div className="skill-card">
        <img src={reactjsLogo} alt="React.js" className="skill-logo" />
        <p>React.js</p>
      </div>
    </div>
  </section>
);

export default Skills;
