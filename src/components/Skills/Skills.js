import React, { useState } from 'react';
import htmlLogo from '../../images/html-logo.png';
import flutterLogo from '../../images/flutter-logo.png';
import cssLogo from '../../images/css-logo.png';
import tailwindLogo from '../../images/tailwind-logo.png';
import pythonLogo from '../../images/python-logo.png';
import dartLogo from '../../images/dart-logo.png';
import mysqlLogo from '../../images/mysql-logo.png';
import postgresLogo from '../../images/postgres-logo.png';
import githubLogo from '../../images/github-logo.png';
import dockerLogo from '../../images/docker-logo.png';
import vscodeLogo from '../../images/vscode-logo.png';
import postmanLogo from '../../images/postman-logo.png';
import nodejsLogo from '../../images/nodejs-logo.png';
import reactjsLogo from '../../images/reactjs-logo.png';
import SkillPopup from '../SkillPopup/SkillPopup';
import './Skills.css';

const skillsData = [
  { name: 'HTML', logo: htmlLogo, description: 'Markup language for the web' },
  { name: 'Flutter', logo: flutterLogo, description: 'UI toolkit for building natively compiled applications' },
  { name: 'CSS', logo: cssLogo, description: 'Style sheet language used for describing the presentation of a document' },
  { name: 'Tailwind', logo: tailwindLogo, description: 'Utility-first CSS framework' },
  { name: 'Python', logo: pythonLogo, description: 'High-level programming language' },
  { name: 'Dart', logo: dartLogo, description: 'Programming language optimized for building mobile apps' },
  { name: 'MySQL', logo: mysqlLogo, description: 'Open-source relational database management system' },
  { name: 'PostgreSQL', logo: postgresLogo, description: 'Open-source relational database' },
  { name: 'GitHub', logo: githubLogo, description: 'Platform for version control and collaboration' },
  { name: 'Docker', logo: dockerLogo, description: 'Platform for developing, shipping, and running applications' },
  { name: 'VSCode', logo: vscodeLogo, description: 'Source-code editor made by Microsoft' },
  { name: 'Postman', logo: postmanLogo, description: 'API development environment' },
  { name: 'Node.js', logo: nodejsLogo, description: 'JavaScript runtime built on Chrome\'s V8 engine' },
  { name: 'React.js', logo: reactjsLogo, description: 'JavaScript library for building user interfaces' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="my-8">
      <h2 className="text-3xl text-center mb-4">Skills</h2>
      <div className="skills-container">
        <div className="skills-group">
          <h3 className="skills-group-title">Frontend</h3>
          {skillsData.slice(0, 5).map(skill => (
            <div
              key={skill.name}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
              {hoveredSkill && hoveredSkill.name === skill.name && (
                <SkillPopup skill={hoveredSkill} />
              )}
            </div>
          ))}
        </div>

        <div className="skills-group">
          <h3 className="skills-group-title">Backend</h3>
          {skillsData.slice(5, 10).map(skill => (
            <div
              key={skill.name}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
              {hoveredSkill && hoveredSkill.name === skill.name && (
                <SkillPopup skill={hoveredSkill} />
              )}
            </div>
          ))}
        </div>

        <div className="skills-group">
          <h3 className="skills-group-title">Others</h3>
          {skillsData.slice(10).map(skill => (
            <div
              key={skill.name}
              className="skill-card"
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <img src={skill.logo} alt={skill.name} className="skill-logo" />
              <p>{skill.name}</p>
              {hoveredSkill && hoveredSkill.name === skill.name && (
                <SkillPopup skill={hoveredSkill} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
