import React from 'react'
import Studentcard from './compenents/Studentcard'
import Header from './compenents/Header'

export default function App() {
  return (
    <div>
      <Header/>
      <Studentcard name="shantanu" age="22" branch="cse" isPlaced={true}/>
      <Studentcard name="shantanu" age="22" branch="cse" isPlaced={true} />
      <Studentcard name="shantanu" age="22" branch="cse" isPlaced={false} />
    </div>
  )
}
