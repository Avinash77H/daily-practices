import React, { useState } from 'react'

function Form() {
 const[name,setName]=useState("")
 const[age,setAge] = useState("")
 const[date,setDate] = useState("")
 const[showDetail,setShowDetail] = useState(false)
 function showData(){
  setShowDetail(true)
 }
  return (
    <div className='w-screen h-screen flex justify-center items-center '>
     <div className='border-2 border-black bg-sky-300 p-8'>
     <form action="">
        <label htmlFor="">First Name:</label><br />
        <input type="text" className='border-2 border-black' onChange={(event)=>{
          setName(event.target.value)
        }}/>
        <br />
        <label htmlFor="">Age:</label>
        <br />
        <input type="number" className='border-2 border-black' onChange={(event)=>{
          setAge(event.target.value)
        }}/>
        <br />
        <label htmlFor="">Birth Date:</label>
        <br />
        <input type="date" className='border-2 border-black' onChange={(event)=>{
          setDate(event.target.value)
        }}/>
        <br />
        <button className='border-2 border-black py-2 px-2 rounded-xl bg-green-500 text-white font-bold mt-4' onClick={(e)=>{
          e.preventDefault()
          showData()
         
        }}>Show Detail</button>
      </form>

      <div>
        {showDetail && <div className='bg-sky-400 text-black p-8 text-2xl mt-4'>
      <p>Name:{name}</p>
      <p>Age:{age}</p>
      <p>Date:{date}</p>
    </div>}
      </div>
     </div>
    </div>
  )
}

export default Form
