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
    <div>
      {items.map((item,index)=>{
        return <div key={index }>
          <ul>

          <li>{item}</li>
          <button onClick={Add}>add</button>
          <button onClick={()=> Remove(index)}>remove</button>
          </ul>
        </div>
      })}
    </div>
  )
}

export default ArrayState
