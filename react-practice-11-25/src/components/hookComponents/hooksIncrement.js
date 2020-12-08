import React, { useState } from 'react'

export default function increment(props) {

    const [integer, setInteger] = useState(0)

    function handleInteger(incrementor) {
        setInteger(integer + incrementor)
    }

    return (
        <div className='increment-wrapper'>
            <button onClick={() => handleInteger(1)}>Add 1</button>
            <h1>{integer}</h1>
            <button onClick={() => handleInteger(-1)}>Subtract 1</button>
        </div>
    )
}