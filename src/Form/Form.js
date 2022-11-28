import React, { Component } from "react";
import {TextField, Stack, Button, Container} from '@mui/material';
class Form extends Component {
  constructor(props) {
    super()
    this.state = {
      movie: '', 
      quote: '',
      character: '',
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  submitIdea = (event) => {
    event.preventDefault()
    const newIdea = {
      //...this.state
      movie: this.state.movie,
      quote: this.state.quote,
      character: this.state.character,
      id: Date.now(),
    }
    this.props.addIdea(newIdea)
    this.setState({ 
      movie: '', 
      quote: '',
      character: '',
    })
  }

  render() {
    return (
      <Container sx={{backgroundColor:"#fff", p:2}}>
        <h1>Idea Box</h1>

        <Stack direction="row" justifyContent="center">
        <TextField id="outlined-basic" label="Movie" variant="outlined" 
         type='text'
         name='movie'
         value={this.state.movie}
         onChange={(event) => this.handleChange(event)}
         sx={{m:1}}
        />
        <TextField id="outlined-basic" label="Quote" variant="outlined" 
         type='text'
         name='quote'
         value={this.state.quote}
         onChange={(event) => this.handleChange(event)}
         sx={{m:1}}
        />
        <TextField id="outlined-basic" label="Character" variant="outlined" 
         type='text'
         name='character'
         value={this.state.character}
         onChange={(event) => this.handleChange(event)}
         sx={{m:1}}
        />
   
        <Button
        variant="contained"
        sx={{m:1}}

          onClick={(event) => this.submitIdea(event)}
        >
          Submit
        </Button>
        </Stack>
        </Container>
    )
  }
}

export default Form