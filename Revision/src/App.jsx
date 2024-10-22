import React, {useReducer } from 'react'

const reducer = (prevState,action)=>{
  console.log(prevState)
  switch(action.type){
    case 'INCREMENT':
      return {...prevState,count:prevState.count + 1}
    case 'DECREMENT':
      return {...prevState,count:prevState.count - 1}
    case 'TOGGLE':
      return{...prevState,toggle:!prevState.toggle}
  }
}

function App() {
 
  const[state,dispatch] = useReducer(reducer,{count:0,toggle:false})
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='flex flex-col gap-2 items-center'>
        <div className='h-6 mb-4'>
        <p className={`${state.toggle?'hidden':'block'} text-3xl`} >{state.count}</p>
        </div>
        <div className='flex gap-2'>
        <button className='btn' onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
        <button className='btn bg-red-500' onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        <button className='btn bg-purple-500' onClick={()=>dispatch({type:'TOGGLE'})}>Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default App
