import React from 'react'

function IsTrue(){
  return(
    <>
      <p className='text-center text-3xl text-white bg-black mt-20 p-4'>You can go home now because all your tasks are complete.</p>
    </>
  )
}

function IsFalse(){
  return(
    <>
      <p className='text-center text-3xl text-white bg-black mt-20 p-4'>You can't go home until you finish all your tasks.</p>
    </>
  )
}

function IfElse({answer}) {
    if(answer){
      return <IsTrue/>
    }
    else{
     return <IsFalse/>
    }
}

export default IfElse
