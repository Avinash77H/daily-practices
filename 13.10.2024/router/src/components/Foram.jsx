import React, { useState } from 'react'

function Foram() {
  const[data,setData] = useState({firstName:"",lastName:"",email:"",comment:"",isVisible:true,mode:"",favCar:""});
 function changeHandler(event){
  const{name,value,checked,type} = event.target
    setData((prevData)=>{
      
      return{
        ...prevData,
        [name] : type=== "checkbox" ? checked : value
      }
    })
    
  }

  function submitHandler(event){
    event.preventDefault()
    console.log(data)
  }

  console.log(data)
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
       <div>
       <label htmlFor="firstName">FirstName:</label>
       <input onChange={changeHandler} value={data.firstName} className='border border-black' type="text" name='firstName' /><br /><br />
       </div>

       <div>
       <label htmlFor="lastName">LastName:</label>
       <input onChange={changeHandler} value={data.lastName} className='border border-black' type="text" name='lastName' /><br /><br />
       </div>

       <div>
       <label htmlFor="email">Email:</label>
       <input onChange={changeHandler} value={data.email} className='border border-black' type="email" name='email' /><br /><br />
       </div>

       <div>
        <label htmlFor="comment">About:</label>
        <textarea onChange={changeHandler} value={data.comment} name="comment" id="comment" rows={3} cols={10} className='border border-black'></textarea>
       </div>

       <div>
        <label htmlFor="isVisible">visible</label>
        <input onChange={changeHandler}  checked={data.isVisible} type="checkbox" name='isVisible' id='isVisible'/>
       </div>

       <div>
        <label htmlFor="online-mode">Online Mode</label>
        <input type="radio" onChange={changeHandler} name='mode' id='online-mode' value="online-mode"  checked={data.mode === 'online-mode'}/>

        <label htmlFor="offline-mode">Offline Mode</label>
        <input type="radio" onChange={changeHandler} name='mode' id='offline-mode' value='offline-mode' checked={data.mode === 'offline-mode'}/>
       </div>

       <div>
        <label htmlFor="favCar">Fav Car:</label>
        <select onChange={changeHandler} name="favCar" id="favCar" value={data.favCar} className='border border-black'>
          <option value="Honda">Honda</option>
          <option value="scorpio">scorpio</option>
          <option value="fartuner">fartuner</option>
          <option value="thar">thar</option>
        </select>
       </div>
        <br /><br />
       <button type='submit' className='border border-black'>Submit</button>
      </form>
    </div>
  )
}

export default Foram
