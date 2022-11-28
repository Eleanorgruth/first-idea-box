import React from "react";
import { Stack, Button, Typography, Card, CardActions, CardContent, CardHeader, Avatar, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

const IdeaCard = ({ movie, quote, character, id, deleteIdea }) => {
  return (
    <Card sx={{p:1, m:1, "textAlign":"left"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: '#12a12a' }} aria-label="recipe">
            {character.charAt(0)}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings" onClick={() => {deleteIdea(id)}}>
            <ClearIcon />
          </IconButton>
        }
        title={character}
        subheader={movie}
      />
      <CardContent>
        <Typography variant="h6" component="div">
        {quote}
        </Typography>
     
      </CardContent>
    </Card>
  )
}

export default IdeaCard