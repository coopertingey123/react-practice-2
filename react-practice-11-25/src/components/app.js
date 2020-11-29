import React, { Component } from 'react';
import Alignment from "./traditionalComponents/app2"
import UpDown from './traditionalComponents/app3';
import SizeUpDown from './traditionalComponents/app4'
import ColorChange from './traditionalComponents/app5'

export default class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     number: 1
  //   }
  //   this.toggleAlign = this.toggleAlign.bind(this)
  

  render() {
    return(
      <div className="screen">
          <ColorChange/>
      </div>
    )
  }

}