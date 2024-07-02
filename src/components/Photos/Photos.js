import React from 'react';
import yourPhoto from '../../images/your-photo.jpg';
import girlfriendPhoto from '../../images/girlfriend-photo.jpg';
import motorcyclePhoto from '../../images/motorcycle-photo.jpg';
import catPhoto from '../../images/cat-photo.jpg';
import '../Photos/Photos.css';

const Photos = () => (
  <section id="photos" className="my-8">
    <h2 className="text-3xl text-center mb-4">Photos</h2>
    <div className="flex flex-wrap justify-center">
      <img src={yourPhoto} alt="Your" className="small-photo" />
      <img src={girlfriendPhoto} alt="Girlfriend" className="small-photo" />
      <img src={catPhoto} alt="Cat" className="small-photo" />
      <img src={motorcyclePhoto} alt="Motorcycle" className="small-photo" />
    </div>
  </section>
);

export default Photos;
