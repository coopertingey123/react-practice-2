import React, { Component } from 'react';


export default class SizeUpDown extends Component {
  constructor() {
    super();
    this.state = {
      textSize: 12,
      amountToChangeBy: 1

    }
    this.downSize = this.downSize.bind(this)
    this.upSize = this.upSize.bind(this)
    this.handleChange = this.handleChange.bind(this)
}

  downSize() {
    this.setState({ textSize: this.state.textSize - this.state.amountToChangeBy })
  }
  upSize() {
    this.setState({ textSize: this.state.textSize + this.state.amountToChangeBy })
  }
  handleChange(event) {
    this.setState({ amountToChangeBy: parseInt(event.target.value) })
  }

  render() {
    return (
      <div className="wrapper">
          <button onClick={() => `${this.downSize()}px`}>Smaller Font</button>
          <h1 style = {{
              fontSize: this.state.textSize
              }}> {`${this.state.textSize}px`} </h1>
              <input type="text" onChange= {this.handleChange}/>
          <button onClick={() => `${this.upSize()}px`}>Bigger Font</button>
      </div>
    )}
    }