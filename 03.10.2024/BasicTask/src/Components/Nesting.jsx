import React from 'react'
import Child from './Child'

function Nesting({message}) {
  return (
    <div className='border-2 border-green-500 bg-sky-200 text-center text-purple-500 text-3xl'>
      <h1>I am parent component</h1>
      <Child message={message}/>
    </div>
  )
}

export default Nesting
