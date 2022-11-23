import React, { Component } from "react";
import './IdeaContainer.css'
import Card from "../Card/Card";


//functional component
const IdeaContainer = ({ideas, deleteIdea}) => {
  const ideaCards = ideas.map((idea, i) => {
    return (
      <Card
        movie={idea.movie}
        quote={idea.quote}
        character={idea.character}
        id={idea.id}
        key={i}
        deleteIdea={deleteIdea}
      />
    )
  })
    return (
      <section className="container">
        <h1>Idea Container</h1>
        <div className="cardDiv">
          {ideaCards}
        </div>
      </section>
    )
}

export default IdeaContainer