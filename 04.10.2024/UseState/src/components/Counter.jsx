import React, { useState }  from 'react'

function Counter() {
  const[count,setCount] = useState(0)
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     <div className='flex items-center gap-4'>
      <button onClick={()=>setCount(count + 1)} className='bg-green-500 p-4 '>+</button>
      <div>{count}</div>
      <button onClick={()=>setCount(count - 1)} className='bg-red-500 p-4 '>-</button>
     </div>
    </div>
  )
}

export default Counter
