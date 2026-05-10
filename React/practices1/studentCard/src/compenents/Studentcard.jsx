import React from 'react'

export default function Studentcard({ name, age, branch, isPlaced }) {
    if (isPlaced == true) {
        return (
            <p>My name is {name}, I am {age} year old, my branch is {branch}, i am placed</p>
        )
    }
  
    if (isPlaced == false) {
        return (
             <p>My name is {name}, I am {age} year old, my branch is {branch}, i am not placed</p>
        )
    }
       
}       
             
          
          
    
 
