import React, { useState } from 'react'
import Card from './Card'

function ObjectState() {
  const[toggle,setToggle]= useState(true)
  const[person,setPerson]= useState({
    name:'avinash rakholiya',
    age:23,
    location:'surat'
  })

  function ChangeLocation(){
    if(toggle){

      setPerson((prevUser)=>{
        return{ ...prevUser,
        location : 'junagadh'}
      })
      setToggle(!toggle)
    }
    else{
      setPerson((prevUser)=>{
        return{...prevUser,
          location:'Surat'
        }
      })
      setToggle(!toggle)
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
     
      <div className='flex flex-col gap-4 p-4 items-start bg-violet-200'>
      <p>Name:{person.name}</p>
      <p>Age:{person.age}</p>
      <p>Location:{person.location}</p>
      <button onClick={ChangeLocation} className='bg-green-500 p-2 text-white rounded-xl'>Change location</button>
      </div>
      
    </div>
  )
}

export default ObjectState
