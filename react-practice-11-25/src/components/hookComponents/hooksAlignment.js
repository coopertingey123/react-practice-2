import React, { useState } from 'react'

export default function align(props) {

    const [ alignment, setAlignment ] = useState("flex-start")

    function handleAlignment(newAlignment) {
        setAlignment( alignment === newAlignment )
    }

    return (
        <div className='align-wrapper'>
            <h2 style={{
                display: "flex",
                justifyContent: this.state.alignment
            }}>Align me!</h2>
            <button onClick={() => handleAlignment("flex-start")}>Left</button>
            <button onClick={() => handleAlignment("center")}>Center</button>
            <button onClick={() => handleAlignment("flex-end")}>Right</button>
        </div>
    )
}