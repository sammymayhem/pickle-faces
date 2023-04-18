import React from 'react';
import './features.css';
import { Feature } from '../../components';

const featuresData = [
  {
    title: 'Improving your sandwich or burger',
    text: 'If you enjoy a vinegary, dill floavor with a hint of garlic, throw some of those pickles on your sandwich or burger! You will thank me later!'
  },
  {
    title: 'Add something extra to your drink',
    text: 'Whether its a bloody mary, red snapper or following a shot with picke juice, you can improve your drinks with a little bit of pickle.'
  },
  {
    title: 'Deep fry those pickles',
    text: 'You know what makes everything better? Deep frying! Not that you needed pickles to get even better, but after a deep fry...be ready for your mind to be blown!'
  },
  {
    title: 'Dill Pickle Dip',
    text: 'Just when you thought it could not get any better. BOOM! Make a pickle dip and watch as your friends melt into happiness as your dip keeps them hooked to the bottom of the bowl.'
  },
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'>
        <h1 className='gradient__text'>The Future is Now and You Just Need To a Pickle to Start. Step into Briny Future Today & Make it Pickled.</h1>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features