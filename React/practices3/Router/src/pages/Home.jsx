import React, { useState } from 'react'
import Nav from '../components/header/Nav'



export default function Home() {
    const [count, setCount] = useState(0)
    const increse = () => {
        setCount(count+1)
    }
    const decrese = () => {
        setCount(count - 1)
    }
    const reset = () => {
        setCount(0)
    }
    return (
        <div>
            <Nav />
            <div>
                <h1>counter app</h1>
                <h2>{count}</h2>
                <button onClick={increse}>increase</button>
                <button onClick={decrese}>decrese</button>
                <button onClick={reset}>reset</button>
           </div>
        </div>
    )
}
