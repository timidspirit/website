import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import Header from './components/Header/Header';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Portfolio from './components/Portfolio/Portfolio';
import Photos from './components/Photos/Photos';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
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
      <Header />
      <div className="container mx-auto p-4">
        <About />
        <Skills />
        <Portfolio />
        <Photos />
        <Contact openModal={openModal} />
      </div>
      <Footer />
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
