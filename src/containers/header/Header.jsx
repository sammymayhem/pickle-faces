import React from 'react';
import './header.css';
import pickleH from '../../assets/disney-pickle-dog.png';



const Header = () => {
  return (
    <div className='pickle__header section__padding' id='home'>
      <div className='pickle__header-content'>
        <h1 className='gradient__text'>The many faces of pickles!</h1>
        <p>From a snack item straight from the jar to delicious condiment addition to any food, the pickle has many faces and uses. Join us as we dive in to just a few of the amazing ways pickles have shaped our lives!</p>

        <div className='pickle__header-content__input'>
          <input type='email' placeholder='Your Email Address'></input>
          <button type='button'>Get Started</button>
        </div>

      </div>
      <div className='pickle__header-image'>
        <img src={pickleH} alt='pickle' />
      </div>
    </div>
  )
}

export default Header