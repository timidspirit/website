import React from 'react';
import './Contact.css';

const Contact = ({ openModal }) => (
  <section id="contact" className="my-8 text-center bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 className="text-3xl mb-4">Contact Me</h2>
    <button onClick={openModal} className="mt-4 login-button text-white py-2 px-4 rounded">Email Me</button>
  </section>
);

export default Contact;
