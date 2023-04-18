import React from 'react';
import './whatPickle.css';
import { Feature } from '../../components';

// const factsData = [
//   {
//     title: 'What is a pickle?',
//     text: 'What most Americans simply call pickles are pickled cucumbers. Most people recognize pickles as the deliciously sweet and sour green food we eat with our sandwiches, on top of burgers or as a tasty snack. However, many don’t realize that pickles are made from cucumbers and that other vegetables, fruits and other foods can also be pickled.'
//   },
//   {
//     title: 'Taming Tummy Troubles',
//     text: 'Thanks to the fact that some pickles are fermented, they can be a source of probiotics. Eating foods that contain probiotics like sour pickles can help restore balance and keep tummy woes at bay.'
//   },
//   {
//     title: 'Strengthens Bones',
//     text: 'Pickles are an excellent source of vitamin K, a nutrient needed to make a protein called osteocalcin, a building block of bones.'
//   },
//   {
//     title: 'Balances Blood Sugar',
//     text: 'Pickles may be a good snack for people with diabetes since many varieties (such as sour, kosher and dill as opposed to sweet or bread and butter styles) contain little to no carbohydrates. That means pickles won’t make blood glucose rise the way other quick eats (such as cookies or potato chips) do.'
//   }

// ]

const WhatPickle = () => {
  return (
    <div className='pickle__whatPickle section__margin' id='whatpickle'>
      <div className='pickle__whatPickle-feature'>
        <Feature title='What is a pickle?' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.' />
      </div>
      <div className='pickle__whatPickle-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
      </div>
      <div className='pickle__whatPickle-container'>
        <Feature title='Taming Tummy Troubles' text='Thanks to the fact that some pickles are fermented, they can be a source of probiotics. Eating foods that contain probiotics like sour pickles can help restore balance and keep tummy woes at bay.' />
        <Feature title='Strengthens Bones' text='Pickles are an excellent source of vitamin K, a nutrient needed to make a protein called osteocalcin, a building block of bones.' />
        <Feature title='Balances Blood Sugar' text='Pickles may be a good snack for people with diabetes since many varieties (such as sour, kosher and dill as opposed to sweet or bread and butter styles) contain little to no carbohydrates. That means pickles wont make blood glucose rise the way other quick eats (such as cookies or potato chips) do.' />
      </div>
    </div>
  )
}

export default WhatPickle