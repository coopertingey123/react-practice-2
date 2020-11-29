import React, { Component } from 'react';


export default class SizeUpDown extends Component {
  constructor() {
    super();
    this.state = {
      textSize: 10
    }
    this.downSize = this.downSize.bind(this)
    this.upSize = this.upSize.bind(this)
}

  downSize() {
    this.setState({ textSize: this.state.textSize - 2 })
  }
  upSize() {
    this.setState({ textSize: this.state.textSize + 2 })
  }

  render() {
    return (
      <div className="screen">
        <div className="plotch">
            <button onClick={() => this.downSize()}>Smaller Font</button>
            <h1 style = {{
                fontSize: `${this.state.textSize}px`
                }}> Hey there! </h1>
            <button onClick={() => this.upSize()}>Bigger Font</button>
        </div>
      </div>
    )}
    }