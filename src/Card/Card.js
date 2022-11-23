import React from "react";
import './Card.css';

const Card = ({ movie, quote, character, id, deleteIdea }) => {
  return (
    <article>
      <h2>{movie}</h2>
      <p>{quote}</p>
      <h4>{character}</h4>
      <button 
        onClick={() => {deleteIdea(id)}}>
        Delete
      </button>
    </article>
  )
}

export default Card