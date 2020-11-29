// import React, { Component } from 'react';

// export default class Alignment extends Component {
//   constructor() {
//     super();
//     this.state = {
//       alignment: "flex-start"
//     }

//     this.handleAlignmentChange = this.handleAlignmentChange.bind(this)

//   }

// //SUPER SUPER IMPORTANT!!!!!

//   handleAlignmentChange(newAlignment) {
//     this.setState({ alignment: newAlignment })
//   }

//   //SOMETHING MUST ALWAYS BE UPDATED IN THE JSX (jsx is the inline styling, such as the h1 styles below
//   //other instances of jsx are components of a class.)

//   render() {
//       return(
//         <div className="alignment-wrapper">
//             <h1 style={{
//               display: "flex",
//               justifyContent: this.state.alignment
//             }}>Align Me!</h1>
//             <button onClick={() => this.handleAlignmentChange("flex-start")}>Left</button>
//             <button onClick={() => this.handleAlignmentChange("center")}>Center</button>
//             <button onClick={() => this.handleAlignmentChange("flex-end")}>Right</button>
//         </div>
//       )
//   }

// }

