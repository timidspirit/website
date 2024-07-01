import React from 'react';
import { ReactTyped as Typed } from 'react-typed';
import topMyPhoto from '../../images/top-my-photo.jpg';
import './About.css';

const About = () => (
  <section className="text-center" id="about">
    <div className="octagon">
      <img src={topMyPhoto} alt="Your" />
    </div>
    <h1 className="text-4xl my-4">Hi, I am Ryan Koechel Jr.</h1>
    <h2 className="text-2xl mb-4">
      I am a <Typed
        strings={['Full Stack Developer?', 'System Administrator?', 'Software Engineer?']}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </h2>
    <p className="text-lg">
      A dedicated and tech-focused professional seeking new challenges and opportunities for growth in IT support and development roles. Actively learning Dart for the Flutter framework to expand technical skill set and contribute to innovative projects within a forward-thinking company. In my free time, I enjoy motorcycles, chess, e-sports, car maintenance, anime, cooking, personal home server, and Flutter/Dart development.
    </p>
    <a href="/objects/Resume.pdf" target="_blank" className="mt-4 login-button text-white py-2 px-4 rounded">View My Resume</a>
  </section>
);

export default About;
