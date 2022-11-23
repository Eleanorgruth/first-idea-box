import React from "react";
import './Card.css';

const Card = ({ movie, quote, character, id }) => {
  return (
    <article>
      <h2>{movie}</h2>
      <p>{quote}</p>
      <h4>{character}</h4>
    </article>
  )
}

export default Card