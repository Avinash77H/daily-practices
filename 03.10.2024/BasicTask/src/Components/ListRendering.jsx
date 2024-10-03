import React from 'react'

function ListRendering({car}) {
  return (
    <div className=' mx-20 mt-20 bg-sky-300'>
     <div className='p-8'>
     <h2 className='font-bold text-2xl'>This is car list</h2>
      <ul className='mt-2'>
       { car.map((item,index)=>{
          return <li key={index}>{index + 1} - {item}</li>
        })}
      </ul>
     </div>
    </div>
  )
}

export default ListRendering
