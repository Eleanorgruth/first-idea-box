import React, { Component } from "react";
import './IdeaContainer.css'
import IdeaCard from "../Card/IdeaCard";
import Masonry from '@mui/lab/Masonry';
import Container from '@mui/material/Container'

//functional component
const IdeaContainer = ({ideas, deleteIdea}) => {
  const ideaCards = ideas.map((idea, i) => {
    return (
      <IdeaCard
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
      <Container>

        <Masonry columns={4} spacing={2} sx={{mt:3}} >
          {ideaCards}
        </Masonry>
        </Container>
    )
}

export default IdeaContainer