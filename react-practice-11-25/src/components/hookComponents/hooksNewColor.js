import React, { useState } from 'react'

export default function colorChange(props) {

    const [color, setColor] = useState("red")
    const [colorInput, setColorInput] = useState("red")
    const [text, setText] = useState("Hello")
    const [textInput, setInput] = useState("Hello")

    changeColor() {

    }

    handleSubmit() {
        
    }

    return (
        <div className='color-wrapper'>
            <h1>text</h1>
            <input type="text"/>
            <input type="text"/>
            <button>submit</button>
        </div>
    )
}