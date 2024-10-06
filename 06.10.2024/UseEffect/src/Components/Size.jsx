import React from 'react'
import {useState,useEffect} from 'react'

function Size() {
  const[width,setWidth] = useState(window.screen.width)

  function actualWindth(){
   setWidth(window.innerWidth)
  }
 useEffect(()=>{
  console.log('add event')
  window.addEventListener("resize",actualWindth)

  return ()=>{
    console.log('remove event')
    window.removeEventListener("resize",actualWindth);
  }
 })
  return (
    <div className="w-screen h-screen bg-gray-300 flex justify-center items-center">
      <div className='flex flex-col gap-8'>
        <p>The Actual size of the window is:</p>
        <h1 className='text-center'>{width}</h1>
      </div>
    </div>
  )
}

export default Size
