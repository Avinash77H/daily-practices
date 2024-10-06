import React from 'react'

function Spinner() {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
      <div className='spinner'></div>
        <p>Loading...</p>
    </div>
  )
}

export default Spinner
