import React from 'react';
import './SkillPopup.css';

const SkillPopup = ({ skill }) => {
  if (!skill) return null;

  return (
    <div className="skill-popup">
      <h3>{skill.name}</h3>
      <p>{skill.description}</p>
    </div>
  );
};

export default SkillPopup;
