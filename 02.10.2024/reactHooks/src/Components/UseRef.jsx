// what is useRef hook :- The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.The useRef hook is a new addition in React 16.8. To learn useRef the user should be aware about refs in React. Unlike useState if we change a value in useRef it will not re-render the webpage

// Reasons to use useRef hook :- The main use of useRef hook is to access the DOM elements in a more efficient way as compared to simple refs. Since useRef hooks preserve value across various re-renders and do not cause re-renders whenever a value is changed they make the application faster and helps in caching and storing previous values

import React from 'react'
import { useRef,useState } from 'react'

function UseRef() {
  const[name,setName] = useState("avinash")
  const refElement = useRef(" ");
  console.log(refElement)
  function Reset(){
    setName("")
    refElement.current.focus()
  }
  function handleInput(){
    refElement.current.style.color = "blue"
    refElement.current.value = "jay shree ram"
  }
  return (
    <div>
      <h1>Learning useRef</h1>
      <input ref={refElement} type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
      <button onClick={Reset}>reset</button>
      <button onClick={handleInput}>new button</button>
    </div>
  )
}

export default UseRef
