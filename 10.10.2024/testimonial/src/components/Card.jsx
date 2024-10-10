import React from 'react'

function Card({data}) {
  
  return (
    <div className='flex flex-col gap-4 justify-center items-center py-8'>
      <div className='size-40 border-2 border-black rounded-full'>
      <img src={data.profile} alt="image" className='size-full rounded-full object-fill object-center' />
      </div>
      <p className='text-center'>{data.name}</p>
      <p>{data.profession}</p>
      <p className='text-center'>{data.about}</p> 
    </div>
  )
}

export default Card
