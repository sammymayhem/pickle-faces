import React from 'react';
import './footer.css';
import pickle2 from '../../assets/pickle2.png';

const Footer = () => {
  return (
    <div className='pickle__footer section__padding'>
      <div className='pickle__footer-heading'>
        <h1 className='gradient__text'>The future is now and that future is pickles! Click to sign up and learn more!</h1>
      </div>

      <div className='pickle__footer-btn'>
        <p>Request More Info</p>
      </div>

      <div className='pickle__footer-links'>
        <div className='pickle__footer-links_logo'>
          <img src={pickle2} alt='logo' />
          <p>1298 Vlasic Dr, Pickleton</p>
        </div>
        <div className='pickle__footer-links_div'>
          <h4>Links</h4>
          <p>Pickles</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='pickle__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='pickle__footer-links_div'>
          <h4>Get In Touch</h4>
          <p>1298 Vlasic Dr, Pickleton</p>
          <p>555-555-5085</p>
          <p>info@picklefaces.com</p>
        </div>
      </div>

      <div className='pickle__footer-copyright'>
        <p>© 2023 Pickle Faces. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer