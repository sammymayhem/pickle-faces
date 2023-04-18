import React from 'react';
import './article.css';

const Article = ({ imgUrl, description, title, link }) => {
  return (
    <div className='pickle__recipes-container_article'>
      <div className='pickle__recipes-container_article-image'>
        <img src={imgUrl} alt='recipes' />
      </div>
      <div className='pickle__recipes-container_article-content'>
        <div>
          <h3>{title}</h3>
          <h5>{description}</h5>
        </div>
        <p><a href={link}>Check Out the Recipe</a></p>
      </div>
    </div>
  )
}

export default Article
