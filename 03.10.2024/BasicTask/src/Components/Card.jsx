import React from 'react'

function Card({name,age}) {
  return (
    <div className='flex h-[200px]  flex-col justify-between items-start border-2 border-black py-8'>
      <h2 className='ml-8'>person detail</h2>
      <div className='px-2'>
        <p> Name:{name}</p>
        <p> Age:{age}</p>
      </div>

    </div>
  )
}

export default Card
