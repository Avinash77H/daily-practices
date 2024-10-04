import React, { useState } from 'react'

function Timer(){
    const[count,setCount]= useState(0)
    
    

    const fun= setInterval(()=>{
          setCount(count => count + 1)
      },1000)

    function Start(){
        
    }

    function Stop(){
        clearInterval(fun)
    }

  return (
    <div className='w-screen h-screen flex justify-center items-center '>
      <div className='border-2 border-black bg-green-100 p-8 flex flex-col items-center gap-4'>
        <div>
            <p>{count}</p>
        </div>
        <div className='flex gap-4'>
            <button onClick={Start} className='bg-green-500 px-2 py-1 rounded-xl text-white'>Start</button>
            <button onClick={Stop} className='bg-red-500 px-2 py-1 rounded-xl text-white'>Stop</button>
            <button className='bg-violet-500 px-2 py-1 rounded-xl text-white'>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default Timer
