import React, { Component } from 'react';
import ShowHide from "./traditionalComponents/app1"
import Alignment from "./traditionalComponents/app2"
import UpDown from './traditionalComponents/app3';
import SizeUpDown from './traditionalComponents/app4'
import ColorChange from './traditionalComponents/app5'
import Clock from './traditionalComponents/app6'

import Example from './hookComponents/stateExample'
import HookToggle from "./hookComponents/hooksToggle"
import EffectExample from './hookComponents/effectExample'
import Increment from "./hookComponents/hooksIncrement"
import Resizer from "./hookComponents/hooksSizer"
import NewColor from "./hookComponents/hooksNewColor"

export default class App extends Component {
 

  render() {
    return(
      <div className="screen">
{/* //         <Alignment/>
//         <hr />
//         <ShowHide/>
//         <hr />
//         <UpDown/>
//         <hr />
//         <SizeUpDown/>
//         <hr />
//         <ColorChange/>
//         <hr />
//         <Clock/> */}
        <Example />
        <hr />
        <HookToggle />
        <hr/>
        <EffectExample />
        <hr/>
        <Alignment />
        <hr/>
        <Increment />
        <hr/>
        <Resizer/>
        <hr/>
        <NewColor/>
      </div> 
    )
  }

}