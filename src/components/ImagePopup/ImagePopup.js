import React from 'react';
import Modal from 'react-modal';
import './ImagePopup.css';

Modal.setAppElement('#root');

const ImagePopup = ({ isOpen, onRequestClose, image }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Image Full Resolution"
    className="image-modal"
    overlayClassName="overlay"
  >
    <div className="image-container">
      <img src={image} alt="Full Resolution" className="full-image" />
    </div>
  </Modal>
);

export default ImagePopup;
