import React, { useState } from 'react'

export default function sizer(props) {

    const [textSize, setTextSize] = useState(12)
    const [amountToChange, setAmountToChange] = useState(4)

    function handleAmountToChange(event) {
        setAmountToChange(parseInt(event.target.value))
    }

    function handleUpSize() {
        setTextSize(textSize + amountToChange)
    }

    function handleDownSize() {
        setTextSize(textSize - amountToChange)
    }

    

    return (
        <div className='sizer-wrapper'>
            <button onClick={() => `${handleUpSize()}px`}>Up</button>
            <input type="text" onChange= {handleAmountToChange}/>
            <button onClick={() => `${handleDownSize()}px`}>Down</button>
            <h1 style = {{
                fontSize: `${textSize}px`
            }}>{`${textSize}px`}</h1>
        </div>
    )
}