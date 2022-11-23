import './App.css';
import React, { Component } from 'react';
import IdeaContainer from '../IdeaContainer/IdeaContainer'


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

  render() {
    return (
      <div className='App'>
        <h1>Idea Box</h1>
        <IdeaContainer ideas={this.state.ideas} name='Jason'/>
      </div>
    )
  }
}

export default App;
