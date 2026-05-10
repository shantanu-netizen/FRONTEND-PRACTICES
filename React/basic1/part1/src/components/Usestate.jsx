import React, { useState } from 'react'

export default function Usestate() {
  const [count, setcount] = useState(0)

  const handleClick = () => {
   setcount(count + 1)
    return
  }
  const handleClick1 = () => {
    setcount(count - 1)
    return
  }
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>increment</button>
      <button onClick={handleClick1}>decrement</button>
    </div>
  )
}
