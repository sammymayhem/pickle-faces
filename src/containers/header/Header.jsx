import React from 'react';
import './header.css';
import pickleH from '../../assets/pickle2.png';



const Header = () => {
  return (
    <div className='pickle__header section__padding' id='home'>
      <div className='pickle__header-content'>
        <h1 className='gradient__text'>Let’s Build Something amazing with GPT-3 OpenAI</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

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