import React, { Component } from 'react';


export default class ShowHide extends Component {
  constructor() {
    super();
    this.state = {
      visibility: "visible",
      buttonText: "Hide"
    }
    this.toggleHide = this.toggleHide.bind(this)
  }

  toggleHide() {
    this.setState({ 
        visibility: this.state.visibility === "visible" ? "hidden" : "visible",
        buttonText: this.state.buttonText === "Hide" ? "Show" : "Hide"
     })
  }

// you can also delete the above function and set those vairables in the onClick below

  render() {
      return (
        <div className="wrapper">
            <h1 style={{
                visibility: this.state.visibility
            }}>Hide Me!</h1>
            <button onClick={() => this.toggleHide()}>{this.state.buttonText}</button>
        </div>
      )
    }
}
