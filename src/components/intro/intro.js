import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Button, Link } from 'react-scroll';
import buttonImage from '../../assets/hireme.png';

const Intro = () => {
  const handleScrollToAbout = () => {
    // Implement scrolling to the "About Me" section
    // You can use the react-scroll library or any other method you prefer
    console.log('Scroll to About Me');
  };
  return (
    <section id='intro' className=''>
        <div className='introContent'>
            <span className='introText'><span className='introName'>Javier Donado</span><br/>Systems Engineering <span className='introName'>Student</span></span>
            <p className='introPara'>Software and Systems Engineering student aspiring to<br/>become a Software Developer</p>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
        <div className="floatingButton" onClick={handleScrollToAbout}>
          About me ▼
        </div>
    </section>
  );
};

export default Intro