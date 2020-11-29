import React, { Component } from 'react';


export default class UpDown extends Component {
  constructor() {
    super();
    this.state = {
      number: 1
    }
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
}

  addOne(numberAdded) {
    this.setState({ number: this.state.number + numberAdded })
  }
  subtractOne(numberSubtracted) {
    this.setState({ number: this.state.number - numberSubtracted })
  }

  render() {
    return (
      <div className="screen">
        <button onClick={() => this.subtractOne(1)}>DOWN 1</button>
        <h1> {this.state.number} </h1>
        <button onClick={() => this.addOne(1)}>UP 1</button>
      </div>
    )}
    }