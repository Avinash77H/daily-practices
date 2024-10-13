import React from 'react'
import { useNavigate } from 'react-router-dom'

function Shop() {
  const navigate = useNavigate();
  function clickHandler(){
    navigate("/about")
  }
  return (
    <div className='text-center'>
      <h1 className='head'>this is Shop page</h1>
      <button onClick={clickHandler} className='bg-green-500 text-white text-center rounded-md px-2 py-1'>move to About page</button>
    </div>
  )
}

export default Shop
