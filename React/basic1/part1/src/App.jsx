import React, { useEffect, useLayoutEffect } from 'react'
import Props from './components/Props'
import Usestate from './components/Usestate'

export default function App() {
  useEffect(() => {
    console.log("after shows changes")
  })
  useLayoutEffect(() => {
    console.log("before shows changes")
  })
  return (
    <>
      <div>
        <Props name="golu" />
        <Usestate />
      </div>
    </>
    
    
  )
}
