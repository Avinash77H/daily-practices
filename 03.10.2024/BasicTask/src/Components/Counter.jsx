import React from 'react'
import { useState } from 'react'
const total = []
function Counter() {
  const [count,setCount] = useState(0)

  function increase(){
    total.push(count)
    setCount(count + 1)
    
  }
  function decrease(){
    total.push(count)
    setCount(count - 1)
    
  }
 const answer = total.reduce((accumulator,currentValue)=>{
  return accumulator + currentValue
 },0)

  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center '>
      <div className='border-2 border-black flex px-4 py-4 gap-2'>
        <button onClick={increase} className='px-4 py-2 bg-green-500 rounded'>+</button>
        <p className='px-4 py-2 border'>{count}</p>
        <button onClick={decrease} className='px-4 py-2 bg-red-500 rounded'>-</button>
      </div>
      <div className='mt-4 text-xl'>
        Total : {answer}
      </div>
    </div>
  )
}

export default Counter
