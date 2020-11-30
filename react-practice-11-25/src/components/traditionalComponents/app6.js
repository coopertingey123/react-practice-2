import React, { Component } from 'react';


export default class Clock extends Component {
  constructor() {
    super();

    this.state = {
        time: new Date()
    }
    this.setInterval
    }
    
    componentDidMount() {
        this.intervalID = setInterval(() => this.setState({ time: new Date() }), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    render() {
        return (
            <div className="wrapper">
                <h1>{`${this.state.time.getHours()}:${this.state.time.getMinutes()}:${this.state.time.getSeconds()}`}</h1>
            </div>
        )
    }
}
