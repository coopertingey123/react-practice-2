// import React, { Component } from 'react';


// export default class ShowHide extends Component {
//   constructor() {
//     super();
//     this.state = {
//       showButton: true,
//       showText: true
//     }
//     this.toggleHide = this.toggleHide.bind(this)
//   }

//   toggleHide() {
//     this.setState({
//       showButton: true,
//       showText: false
//     })
//     return (
//       <div className="screen">
//         <h1></h1>
//         <button onClick={() => this.toggleShow()}>HIDE</button>
//       </div>
//     )
//   }

//   toggleShow() {
//     this.setState({
//       showButton: true,
//       showText: true
//     })
//     return (
//       <div className="screen">
//         <h1></h1>
//         <button onClick={() => this.toggleShow()}>HIDE</button>
//       </div>
//     )
//   }
  
//   render() {
//     if (this.state.showText) {
//       return (
//         <div className="screen">
//           <h1>Hide me!</h1>
//           <button onClick={() => this.toggleHide()}>HIDE</button>
//         </div>
//       )}
//     return (
//       <div className="screen">
//         <h1></h1>
//         <button onClick={() => this.toggleShow()}>HIDE</button>
//       </div>
//     )
    
//   }}

