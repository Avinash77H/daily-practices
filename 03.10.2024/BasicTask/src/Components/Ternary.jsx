import React from 'react'

function Valid(){
  return (
    <p className='text-center text-3xl text-white bg-green-500 p-4 mt-8'>you are valid person for vote</p>
  )
}
function NonValid(){
  return (
    <p className='text-center text-3xl text-white bg-red-500 p-4 mt-8'>you are Non-valid person for vote</p>
  )
}
function Ternary({age}) {
  return(
    <>
      {age >= 18 ? <Valid/>: <NonValid/>}
    </>
  )
  
}

export default Ternary
