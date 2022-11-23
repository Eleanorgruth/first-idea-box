import React, { Component } from "react";
import './Form.css'

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
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Movie'
          name='movie'
          value={this.state.movie}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Quote'
          name='quote'
          value={this.state.quote}
          onChange={(event) => this.handleChange(event)}
        />
        <input
          type='text'
          placeholder='Character'
          name='character'
          value={this.state.character}
          onChange={(event) => this.handleChange(event)}
        />
        <button
          onClick={(event) => this.submitIdea(event)}
        >
          Submit
        </button>
      </form>
    )
  }
}

export default Form