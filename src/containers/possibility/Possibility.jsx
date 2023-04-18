import React from 'react';
import './possibility.css';
import pickleTower from '../../assets/pickle-tower.jpg';

const Possibility = () => {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className='gpt3__possibility-image'>
        <img src={pickleTower} alt='possibility' />
      </div>
      <div className='gpt3__possibility-content'>
        <h1 className='gradient__text'>The possibilities endless and only limited by your imagination</h1>
        <p>Imagine, you're sitting on a tropical beach. Sun shining, soft breeze blowing, and you're starting to feel parched. You look to your left. Sitting on the table next to your beach chair is a pickle mojito. Next to it a BLT with extra pickles. Where am i? Is this heaven? Maybe. Maybe it is. Where will pickles take you?</p>
      </div>
    </div>
  )
}

export default Possibility