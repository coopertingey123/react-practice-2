import React, { Component } from 'react';
import ShowHide from "./traditionalComponents/app1"
import Alignment from "./traditionalComponents/app2"
import UpDown from './traditionalComponents/app3';
import SizeUpDown from './traditionalComponents/app4'
import ColorChange from './traditionalComponents/app5'
import Clock from './traditionalComponents/app6'

export default class App extends Component {
 

  render() {
    return(
      <div className="screen">
        <Alignment/>
        <hr />
        <ShowHide/>
        <hr />
        <UpDown/>
        <hr />
        <SizeUpDown/>
        <hr />
        <ColorChange/>
        <hr />
        <Clock/>

      </div>
    )
  }

}