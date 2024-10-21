import React, { useReducer } from 'react'

const reducer = (state,action)=>{
  switch(action.type){
    case "INCREMENT":
      return {...state,count:state.count + 1}
    case "DECREMENT":
      return {...state,count:state.count - 1}
    case "TOGGLE":
      return {...state,toggle:!state.toggle}
  }
}

function Counter() {
  

  const[state,dispatch] = useReducer(reducer,{count:0,toggle:false})
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-4'>
        <div className='h-8 text-3xl text-center'><p className={`${state.toggle?'hidden':'block'}`}>{state.count}</p></div>
        <div className='flex gap-2'>
          <button onClick={()=>dispatch({type:'INCREMENT'})} className='btn bg-green-500'>Increment</button>
          <button onClick={()=>dispatch({type:'DECREMENT'})} className='btn bg-red-500'>Decrement</button>
          <button onClick={()=>dispatch({type:'TOGGLE'})} className='btn bg-purple-500'>Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default Counter
