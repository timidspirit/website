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
import ImagePopup from '../ImagePopup/ImagePopup';
import './Skills.css';

const skillsData = [
  { name: 'HTML', logo: htmlLogo, description: 'Markup language for the web', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'Flutter', logo: flutterLogo, description: 'UI toolkit for building natively compiled applications', url: 'https://flutter.dev/' },
  { name: 'CSS', logo: cssLogo, description: 'Style sheet language used for describing the presentation of a document', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Tailwind', logo: tailwindLogo, description: 'Utility-first CSS framework', url: 'https://tailwindcss.com/' },
  { name: 'Python', logo: pythonLogo, description: 'High-level programming language', url: 'https://www.python.org/' },
  { name: 'Dart', logo: dartLogo, description: 'Programming language optimized for building mobile apps', url: 'https://dart.dev/' },
  { name: 'MySQL', logo: mysqlLogo, description: 'Open-source relational database management system', url: 'https://www.mysql.com/' },
  { name: 'PostgreSQL', logo: postgresLogo, description: 'Open-source relational database', url: 'https://www.postgresql.org/' },
  { name: 'GitHub', logo: githubLogo, description: 'Platform for version control and collaboration', url: 'https://github.com/' },
  { name: 'Docker', logo: dockerLogo, description: 'Platform for developing, shipping, and running applications', url: 'https://www.docker.com/' },
  { name: 'VSCode', logo: vscodeLogo, description: 'Source-code editor made by Microsoft', url: 'https://code.visualstudio.com/' },
  { name: 'Postman', logo: postmanLogo, description: 'API development environment', url: 'https://www.postman.com/' },
  { name: 'Node.js', logo: nodejsLogo, description: 'JavaScript runtime built on Chrome\'s V8 engine', url: 'https://nodejs.org/' },
  { name: 'React.js', logo: reactjsLogo, description: 'JavaScript library for building user interfaces', url: 'https://reactjs.org/' },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [imagePopup, setImagePopup] = useState({ isOpen: false, image: null });

  const handleNameClick = (url) => {
    window.open(url, '_blank');
  };

  const handleLogoClick = (image) => {
    setImagePopup({ isOpen: true, image });
  };

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
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="skill-logo" 
                onClick={() => handleLogoClick(skill.logo)}
              />
              <p 
                onClick={() => handleNameClick(skill.url)}
              >
                {skill.name}
              </p>
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
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="skill-logo" 
                onClick={() => handleLogoClick(skill.logo)}
              />
              <p 
                onClick={() => handleNameClick(skill.url)}
              >
                {skill.name}
              </p>
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
              <img 
                src={skill.logo} 
                alt={skill.name} 
                className="skill-logo" 
                onClick={() => handleLogoClick(skill.logo)}
              />
              <p 
                onClick={() => handleNameClick(skill.url)}
              >
                {skill.name}
              </p>
              {hoveredSkill && hoveredSkill.name === skill.name && (
                <SkillPopup skill={hoveredSkill} />
              )}
            </div>
          ))}
        </div>
      </div>
      <ImagePopup 
        isOpen={imagePopup.isOpen} 
        onRequestClose={() => setImagePopup({ isOpen: false, image: null })} 
        image={imagePopup.image} 
      />
    </section>
  );
};

export default Skills;
