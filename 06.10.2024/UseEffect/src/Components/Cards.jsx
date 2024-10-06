import React from 'react'
import Card from './Card';

function Cards(props) {
  let data = props.data;
  console.log(data)
  console.log(typeof data)
  return (
    <div className='grid grid-cols-3 place-items-center border-2 border-red-500 gap-4'> 
      {data.map((item)=>{
       return <Card key={item.id} item={item} />
      })}
    </div>
  )
}

export default Cards
