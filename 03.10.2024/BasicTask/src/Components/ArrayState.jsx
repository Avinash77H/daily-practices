import React from 'react'
import { useState } from 'react'

function ArrayState() {
  const[items,setItems]=useState(['item1','item2','item3'])
  function Add(){
    setItems([...items,'new Item'])
  }
  function Remove(index){
   setItems(items.filter((item,i)=> i !== index))
  }
  return (
    <div className='w-screen mt-8 flex flex-col items-center gap-4'>
      {items.map((item,index)=>{
        return <div key={index} className='w-1/2 border-2 border-black'>
          <ul className='flex justify-between items-center px-8 py-4'>

          <li>{item}</li>
          <button onClick={()=> Remove(index)} className='bg-red-500 text-white px-4 py-2 rounded-xl'>remove</button>
          </ul>
        </div>
      })}
      <div className='flex gap-8'>
          <button onClick={Add} className='bg-green-500 text-white px-4 py-2 rounded-xl'>add</button>
          
          </div>
    </div>
  )
}

export default ArrayState
