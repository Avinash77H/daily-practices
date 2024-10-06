import React from 'react'

function Filter({filterData}) {
  return (
    <div className='flex justify-between px-20 mt-8'>
      {filterData.map((item)=>{
        return <button key={item.id} className='px-2 py-1 border-2 border-purple-500'>{item.title}</button>
      })}
    </div>
  )
}

export default Filter
