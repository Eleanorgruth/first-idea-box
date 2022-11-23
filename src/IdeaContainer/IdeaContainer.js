import React, { Component } from "react";
import './IdeaContainer.css'
import Card from "../Card/Card";


//functional component
const IdeaContainer = ({ideas, name}) => {
  const ideaCards = ideas.map((idea) => {
    return (
      <Card
        movie={idea.movie}
        quote={idea.quote}
        character={idea.character}
        id={idea.id}
        key={idea.id}
      />
    )
  })
    return (
      <section className="container">
        <h1>Snowman Idea Container</h1>
        <h1>{name}</h1>
        {ideaCards}
      </section>
    )
}

export default IdeaContainer