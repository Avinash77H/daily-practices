import React from 'react'
import { FcLikePlaceholder } from "react-icons/fc";

function Card({item}) {
 
  return (
    <div className='border-2 border-black'>
     <div className='relative'>
      <img src={item.image} alt="" className='w-[200px]'/>
      <div className='bg-yellow-200 size-10  rounded-full grid place-items-center absolute bottom-2 right-1'>
     <FcLikePlaceholder className='size-8'/>
     </div>
     </div>

     <div>
      
     </div>
    
    </div>
  )
}

export default Card
