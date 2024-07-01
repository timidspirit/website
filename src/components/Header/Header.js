import React from 'react';
import './Header.css';

const Header = () => (
  <header className="bg-gray-800 p-4 flex justify-between items-center">
    <nav className="container mx-auto flex justify-center space-x-4">
      <a href="#about" className="text-white hover:text-gray-400">About Me</a>
      <a href="#skills" className="text-white hover:text-gray-400">Skills</a>
      <a href="#portfolio" className="text-white hover:text-gray-400">Portfolio</a>
      <a href="#photos" className="text-white hover:text-gray-400">Photos</a>
      <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
    </nav>
    <button className="ml-4 login-button" type="button">Login</button>
  </header>
);

export default Header;
