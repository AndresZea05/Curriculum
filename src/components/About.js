import React from 'react';
import PropTypes from 'prop-types';
import Social from './Social';
import foto from './avatar.jpg'
const About = ({avatar, name, profession, bio, address, social}) => {
  return(
    <div className='bio'>
      <div className='avatar'>
        <img src={foto} alt={name} />
      </div>
      <div className='title'>
        <h1>{name}</h1>
        <h2>{profession}</h2>
      </div>
      <div className='desc'>
        <p>{bio}</p>
      </div>
      <div className='address'>
        <p>{address}</p>
      </div>
      <Social social={social} />
    </div>
  );
};

//No me carga la imagen

export default About;
