import React from 'react';
import htmlLogo from './images/html-logo.png'; // replace with the actual path to your image
import flutterLogo from './images/flutter-logo.png';
import cssLogo from './images/css-logo.png';
import tailwindLogo from './images/tailwind-logo.png';
import pythonLogo from './images/python-logo.png';
import dartLogo from './images/dart-logo.png';
import mysqlLogo from './images/mysql-logo.png';
import postgresLogo from './images/postgres-logo.png';
import githubLogo from './images/github-logo.png';
import dockerLogo from './images/docker-logo.png';
import vscodeLogo from './images/vscode-logo.png';
import postmanLogo from './images/postman-logo.png';
import nodejsLogo from './images/nodejs-logo.png';
import reactjsLogo from './images/reactjs-logo.png';

const Skills = () => {
  return (
    <section id="skills" className="my-8">
      <h2 className="text-3xl text-center mb-4">Skills</h2>
      <div className="skills-section">
        <div className="skill-card">
          <h3 className="text-xl text-center mb-2">Frontend</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><img src={htmlLogo} alt="HTML Logo" className="skill-logo inline mr-2" />HTML</li>
            <li><img src={flutterLogo} alt="Flutter Logo" className="skill-logo inline mr-2" />Flutter</li>
            <li><img src={cssLogo} alt="CSS Logo" className="skill-logo inline mr-2" />CSS</li>
            <li><img src={tailwindLogo} alt="TailwindCSS Logo" className="skill-logo inline mr-2" />TailwindCSS</li>
            <li><img src={reactjsLogo} alt="ReactJS Logo" classname="skill-logo inline mr-2" />ReactJS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="text-xl text-center mb-2">Backend</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><img src={pythonLogo} alt="Python Logo" className="skill-logo inline mr-2" />Python</li>
            <li><img src={dartLogo} alt="Dart Logo" className="skill-logo inline mr-2" />Dart</li>
            <li><img src={mysqlLogo} alt="MySQL Logo" className="skill-logo inline mr-2" />MySQL</li>
            <li><img src={postgresLogo} alt="PostgreSQL Logo" className="skill-logo inline mr-2" />PostgreSQL</li>
            <li><img src={nodejsLogo} alt="NodeJS Logo" className="skill-logo inline mr-2" />NodeJS</li>
          </ul>
        </div>
        <div className="skill-card">
          <h3 className="text-xl text-center mb-2">Others</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><img src={githubLogo} alt="GitHub Logo" className="skill-logo inline mr-2" />GitHub</li>
            <li><img src={dockerLogo} alt="Docker Logo" className="skill-logo inline mr-2" />Docker</li>
            <li><img src={vscodeLogo} alt="VS Code Logo" className="skill-logo inline mr-2" />VS Code</li>
            <li><img src={postmanLogo} alt="Postman Logo" className="skill-logo inline mr-2" />Postman</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
