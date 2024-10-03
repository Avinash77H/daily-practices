import React from 'react'

function Logical({cars}) {
  return (
    <>
    {cars.length > 0 && <p className='text-3xl text-sky-300 bg-black p-4 mt-8 font-bold text-center'>you have {cars.length} cars in your car collection</p>}
    </>
  )
}

export default Logical
