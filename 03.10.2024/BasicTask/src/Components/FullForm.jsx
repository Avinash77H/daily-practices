import React from 'react'

function FullForm() {
  return (
    <div className='flex justify-center w-screen'>
      <div className='border-2 border-black w-1/2 p-4'>
        <form action="">
          <label htmlFor="">Name</label><br />
          <input type="text" className='border-2 border-gray-500'/><br />

          <label htmlFor="">Phone Number</label><br />
          <input type="text" className='border-2 border-gray-500' /><br />
        </form>
      </div>
    </div>
  )
}

export default FullForm
