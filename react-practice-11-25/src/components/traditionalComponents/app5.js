import React, { Component } from 'react';


export default class ColorChange extends Component {
  constructor() {
    super();
    this.state = {
      color: "black"
    }
    this.changeColor = this.changeColor.bind(this)
}

    changeColor() {
        newColor = <input></input>
        this.setState({ color: this.state.newColor })
  }

    render() {
        return (
            <div className="screen">
                newColor = <input>{}</input>
                <h1 style = {{color: this.state.color}} >Hello!</h1>
            </div>
        )
    };

}
    

    // <input
    //             type="text"
    //             name="answer1"
    //             id="answer1"
    //             className="answer"
    //             value={this.state.answer1}
    //             onChange={this._handleChange}
    //             />