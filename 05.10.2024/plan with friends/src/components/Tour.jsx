import React, { useState } from 'react'
import Header from './Header'
import Card from './Card'


function Tour({data}) {
  const[newData,setNewData]=useState(data)
  function Method(Index){
    let filteredData = newData.filter((item,index)=> index !== Index)
    setNewData(filteredData)
  }
  return (
    <div>
      <Header/>

      {newData.length > 0?<div className='grid grid-cols-2 '>
       {newData.map((item,index)=>{
        return <Card key={item.id} item={item} Method={Method} index = {index}/>
       })}
      </div>:<div><button className='border-2 border-black' onClick={()=>setNewData(data)}>refresh</button></div>}
      

    </div>
  )
}

export default Tour
