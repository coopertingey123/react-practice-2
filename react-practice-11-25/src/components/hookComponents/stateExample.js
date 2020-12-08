import React, { useState } from 'react'

export default function example(props) {

    const [count, setCount] = useState(0)

    // function handleClick() {
    //     setCount(count + 1)
    // }

    return (
        <div className='example-wrapper'>
            <h3>{count}</h3>
            <button onClick={() => setCount(count + 1)}>Click me!</button>
        </div>
    )
}