import React from 'react'

import { Footer, Recipes, Possibility, Features, WhatPickle, Header } from './containers';
import { CTA, Navbar } from './components';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      {/* <Brand /> */}
      <WhatPickle />
      <Features />
      <Possibility />
      <CTA />
      <Recipes />
      <Footer />
    </div>
  )
}

export default App
