import React, { useState } from 'react'

function Form2() {
  const[data,setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    country:"",
    addresh:"",
    byEmail:[],
    notification:true
  })
  function changeHandler(event){
    const{name,value,checked,type} = event.target
    setData((prevData)=>{
      return {...prevData,   [name] :value }
    })
  }
  console.log(data)
  return (
    <div className='flex justify-center mt-4'>
      <div className=''>
      
      <form action="" className='flex flex-col gap-2'>
      <div>
        <label htmlFor="firstName">First name</label><br />
        <input onChange={changeHandler} type="text" name='firstName' placeholder='enter your first name' className='border border-black'/>
        </div>

        <div>
        <label htmlFor="lastName">Last name</label><br />
        <input onChange={changeHandler}  type="text" name='lastName' placeholder='enter your last name' className='border border-black'/>
        </div>

        <div>
        <label htmlFor="email">Email addresh</label><br />
        <input onChange={changeHandler}  type="email" name='email' placeholder='enter your email addresh' className='border border-black'/>
        </div>

        <div>
        <label htmlFor="country">Country</label><br />
        <select name="country" id="country" className='border border-black'>
          <option value="India">India</option>
          <option value="Pak">Pak</option>
          <option value="USA">USA</option>
        </select>
        </div>

        <div>
        <label htmlFor="addresh">Street addresh</label><br />
        <input onChange={changeHandler}  type="text" name='addresh' placeholder='addresh' className='border border-black'/>
        </div>

        <div>
          <label htmlFor="byEmail">By Email</label>
          <div>
          <input onChange={changeHandler}  type="checkbox" name='byEmail' id='comment'/>
          <label htmlFor="comment">Comments</label>
          </div>
          <div>
          <input onChange={changeHandler}  type="checkbox" name='byEmail' id='candidates'/>
          <label htmlFor="candidates">Candidates</label>
          </div>
          <div>
          <input onChange={changeHandler}  type="checkbox" name='byEmail' id='offers'/>
          <label htmlFor="offers">Offers</label>
          </div>
        </div>

        <div>
          <label htmlFor="notification">Push Notification</label>
          <div>
              <input onChange={changeHandler} value={data.notification}  type="radio" name='notification' id='everything'/>
              <label htmlFor="everything">Everything</label><br />
              <input onChange={changeHandler}  value={data.notification} type="radio" name='notification' id='sameAsEmail'/>
              <label htmlFor="sameAsEmail">Same as Email</label><br />
              <input onChange={changeHandler} value={data.notification}  type="radio" name='notification' id='noPush'/>
              <label htmlFor="noPush">No push notification</label>
            </div>
        </div>

        <button className='place-self-start text-white bg-sky-500 px-2 py-1 rounded-md'>Save</button>
      </form>

    </div>
    </div>
  )
}

export default Form2
