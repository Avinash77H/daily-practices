import React, { useState } from 'react'

function FullForm() {
  const [name,setName] = useState("");
  const [number,setNumber] = useState("")
  const [date,setDate] = useState("")
  const [time,setTime] = useState("")
  const [option,setOption] = useState("")
  const [radio,setRadio] = useState("")
  const [submittedData,setSubmittedData] = useState(null);

  function handleSubmit(e){
    e.preventDefault()
    setSubmittedData({name,number,date,time,option,radio})
  }
 
  return (
    <div className='flex justify-center w-screen flex-col items-center'>
      <div className='border-2 border-black w-1/2 p-4'>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Name</label><br />
          <input onChange={(e)=>setName(e.target.value)} type="text" className='border-2 border-gray-500 pl-1 rounded-md'/><br />

          <div className='mt-4'>
          <label htmlFor="">Phone Number</label><br />
          <input onChange={(e)=>setNumber(e.target.value)} type="tel" className='border-2 border-gray-500 pl-1 rounded-md' />
          </div>

          <div className='mt-4'>
            <p className=''>Date</p>
            <input onChange={(e)=>setDate(e.target.value)} type="date" className='border-2 border-gray-500 rounded-md'/>
            <input onChange={(e)=>setTime(e.target.value)} type="time" placeholder='HH:MM' className='border-2 border-gray-500 rounded-md ml-2'/>
            <select name="time" onChange={(e)=>setOption(e.target.value)} id="time" className='border-2 border-gray-500 rounded-md ml-2'>
            <option value="AM">AM</option>
            <option value="PM">PM</option>
            </select>
          </div>

          <div className='mt-4'>
            <p>Please select your Favourite Web Language</p>
            <input type="radio" name="web" value="Html" onChange={(e)=>setRadio(e.target.value)}/>
            <label htmlFor="" className='ml-2'>Html</label><br />
            <input type="radio" name="web" value="Css" onChange={(e)=>setRadio(e.target.value)}/>
            <label htmlFor="" className='ml-2'>Css</label><br />
            <input type="radio" name="web" value="Javascript" onChange={(e)=>setRadio(e.target.value)}/>
            <label htmlFor="" className='ml-2'>Javascript</label>
          </div>

          <button type="submit" className='mt-4 bg-green-500 text-white py-2 px-4 rounded-xl'>Submit</button>
        </form>
        
       
      </div>

      <div>
        
         {submittedData && <div>
         <p>Name: {submittedData.name}</p>
        <p>Phone Number: {submittedData.number}</p>
        <p>Date & Time: {submittedData.date} {submittedData.time}{submittedData.option}</p>
        <p>Favourite Web: {submittedData.radio}</p>
  </div>
  }
          
        </div>

    </div>
  )
}

export default FullForm
