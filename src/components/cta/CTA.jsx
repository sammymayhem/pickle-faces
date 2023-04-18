import React from 'react';
import './cta.css';

const CTA = () => {
  return (
    <div className='pickle__cta'>
      <div className='pickle__cta-content'>
        <p>Would you like to learn more about pickles?</p>
        <h3>Sign up for our pickle newsletter & start exploring the endless possiblities.</h3>
      </div>
      <div className='pickle__cta-btn'>
        <button type='button'>Get Started</button>
      </div>
    </div>
  )
}

export default CTA