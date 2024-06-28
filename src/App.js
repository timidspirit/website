import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { ReactTyped as Typed } from 'react-typed';
import Skills from './Skills';
import yourPhoto from './images/your-photo.jpg';
import girlfriendPhoto from './images/girlfriend-photo.jpg';
import motorcyclePhoto from './images/motorcycle-photo.jpg';
import catPhoto from './images/cat-photo.jpg';
import topMyPhoto from './images/top-my-photo.jpg';
import './App.css';

Modal.setAppElement('#root');

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSent, setShowSent] = useState(false);
  const [rippleTimeout, setRippleTimeout] = useState(null);

  useEffect(() => {
    const rippleContainer = document.getElementById('ripple-container');
    rippleContainer.style.position = 'relative';
    rippleContainer.style.overflow = 'hidden';
  }, []);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleSendEmail = () => {
    setShowSent(true);
    setTimeout(() => {
      setShowSent(false);
      closeModal();
    }, 1000);
  };

  const createRipple = (event) => {
    if (rippleTimeout) return;

    const rippleContainer = document.getElementById('ripple-container');
    const circle = document.createElement('div');
    const diameter = Math.min(rippleContainer.clientWidth, rippleContainer.clientHeight, 200);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - radius}px`;
    circle.style.top = `${event.clientY - radius}px`;
    circle.classList.add('ripple');

    const ripple = rippleContainer.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    rippleContainer.appendChild(circle);

    setRippleTimeout(setTimeout(() => {
      setRippleTimeout(null);
    }, 700));
  };

  return (
    <div className="App" id="ripple-container" onClick={createRipple}>
      <header className="bg-gray-800 p-4 flex justify-between items-center">
        <nav className="container mx-auto flex justify-center space-x-4">
          <a href="#about" className="text-white hover:text-gray-400">About Me</a>
          <a href="#skills" className="text-white hover:text-gray-400">Skills</a>
          <a href="#portfolio" className="text-white hover:text-gray-400">Portfolio</a>
          <a href="#photos" className="text-white hover:text-gray-400">Photos</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </nav>
        <a href="#" className="ml-4 login-button">Login</a>
      </header>

      <div className="container mx-auto p-4">
        <section className="text-center" id="about">
          <div className="octagon">
            <img src={topMyPhoto} alt="Your" />
          </div>
          <h1 className="text-4xl my-4">Hi, I am Ryan Koechel Jr.</h1>
          <h2 className="text-2xl mb-4">
            I am a <Typed
              strings={['Full Stack Developer', 'UI/UX Designer', 'Software Engineer']}
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

        <Skills />

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

        <section id="photos" className="my-8">
          <h2 className="text-3xl text-center mb-4">Photos</h2>
          <div className="flex flex-wrap justify-center">
            <img src={yourPhoto} alt="Your" className="small-photo" />
            <img src={girlfriendPhoto} alt="Girlfriend" className="small-photo" />
            <img src={catPhoto} alt="Cat" className="small-photo" />
            <img src={motorcyclePhoto} alt="Motorcycle" className="small-photo" />
          </div>
        </section>

        <section id="contact" className="my-8 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl mb-4">Contact Me</h2>
          <button onClick={openModal} className="mt-4 login-button text-white py-2 px-4 rounded">Email Me</button>
        </section>
      </div>

      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2024 Ryan Koechel Jr. All rights reserved.</p>
      </footer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Email Form"
        className="modal"
        overlayClassName="overlay"
      >
        <h2 className="text-2xl mb-4">Send me an email</h2>
        <form>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-2 p-2 w-full"
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mb-2 p-2 w-full"
          />
          <button type="button" onClick={handleSendEmail} className="login-button text-white py-2 px-4 rounded">Send</button>
        </form>
        {showSent && <div className="mt-4 text-green-500">Sent!</div>}
      </Modal>
    </div>
  );
};

export default App;
