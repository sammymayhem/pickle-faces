import React from 'react';
import './recipes.css';
import { Article } from '../../components';
import { recipe01, recipe02, recipe03, recipe04, recipe05 } from './imports'


const Recipes = () => {
  return (
    <div className='pickle__recipes section__padding' id='recipes'>
      <div className='pickle__recipes-heading'>
        <h1 className='gradient__text'>Here are just a few of the many recipes using pickles.</h1>
      </div>
      <div className='pickle__recipes-container'>
        <div className='pickle__recipes-container_groupA'>
          <Article imgUrl={recipe01} title='Pickle Martini' description='This pickle martini is surprisingly good! The tangy juice of the dill pickle suits the dry flavor of vodka.' link='https://www.allrecipes.com/recipe/230547/dill-pickle-martini/' />
        </div>
        <div className='pickle__recipes-container_groupB'>
          <Article imgUrl={recipe02} title='Pickle Back Shot' description='The pickleback is a very interesting whiskey shot and a drink you have to experience for yourself.' link='https://www.thespruceeats.com/how-to-make-a-pickleback-shot-4156982' />
          <Article imgUrl={recipe03} title='Pickle Red Snapper' description='Gin instead of vodka makes this a Red Snapper and spiced shrimp and smoky pickled okra instead of boring garnishes take this cocktail to the next level.' link='https://mantry.com/blogs/recipes/red-snapper-cocktail-w-shrimp-smokra' />
          <Article imgUrl={recipe04} title='Dill Pickle Dip' description='My love for pickles led me to create this dill pickle dip. Its so easy to whip together. But be warned...its addicting! —April Anderson' link='https://www.tasteofhome.com/recipes/dill-pickle-dip/' />
          <Article imgUrl={recipe05} title='Pickle Bloody Mary' description='With a nice level of pepper, and just enough dill from the pickle, these Bloody Marys are sure to please. To make Contrary Marys simply leave out the vodka. —Jay Ferkovich' link='https://www.tasteofhome.com/recipes/dill-bloody-marys/' />
        </div>
      </div>
    </div>
  )
}

export default Recipes