import React from 'react';
import './brand.css';
import { vlasic, kaiser  } from './imports';

const Brand = () => {
  return (
    <div className='pickle__brand section__padding'>
      <div>
        <img src={vlasic} alt='vlasic' />
      </div>
      <div>
        <img src={kaiser} alt='kaiser' />
      </div>
    </div>
  )
}

export default Brand