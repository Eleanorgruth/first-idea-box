import './App.css';
import React, { Component } from 'react';
import IdeaContainer from '../IdeaContainer/IdeaContainer'
import Form from '../Form/Form'
import Container from '@mui/material/Container';

//class component- use when its holding state
class App extends Component {
  constructor() {
    super()
    this.state = {
      ideas: [
        {movie: 'Casablanca', quote: 'Here\'s looking at you, kid!', character: 'Bogart', id: 111111},
        {movie: 'Lord of The Rings', quote: 'Not all who wander are lost', character: 'Gandalf quoting a poem', id: 22222},
        {movie: 'Tombstone', quote: 'I\'m your huckleberry.', character: 'Doc Holiday', id: 33333}
      ]
    }
  }

  addIdea = (newIdea) => {
    this.setState({ideas: [...this.state.ideas, newIdea]})
  }

  deleteIdea = (id) => {
    const filteredIdeas = this.state.ideas.filter((idea) => {
      return idea.id !== id
    })
    this.setState({ideas: filteredIdeas})
  }

  render() {
    return (
      <div className='App'>
        <Form addIdea={this.addIdea}/>
        <IdeaContainer ideas={this.state.ideas} deleteIdea={this.deleteIdea}/>
      </div>
    )
  }
}

export default App;
