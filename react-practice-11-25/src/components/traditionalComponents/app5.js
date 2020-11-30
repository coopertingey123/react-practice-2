import React, { Component } from 'react';


export default class ColorChange extends Component {
  constructor() {
    super();
    this.state = {
      color: "black",
      colorInput: "black",
      text: "Color me!",
      textInput: "Color me!"
    }
    this.changeColor = this.changeColor.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

    changeColor(event) {
        this.setState({[event.target.name]: event.target.value })
  }

    handleSubmit() {
        this.setState({
            color: this.state.colorInput,
            text: this.state.textInput
        })
    }

    render() {
        return (
            <div className="wrapper">
                <h1 style = {{ color: this.state.color }} >{this.state.text}</h1>
                <input type="text" name="colorInput" value={this.state.colorInput} onChange={this.changeColor}/>
                <input type="text" name="textInput" value={this.state.textInput} onChange={this.changeColor}/>
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    };

}
    
