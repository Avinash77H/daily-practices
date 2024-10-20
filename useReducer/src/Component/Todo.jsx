import React, { useContext } from 'react'
import { TodoContext } from '../store/AppContext'
function Todo({todo,dueDate}) {
  const{handleDeleteTodo} = useContext(TodoContext)
  
  return (
    <div className='flex justify-between items-center mx-20 mt-8 bg-yellow-50 px-4 py-1'>
      <p>{todo}</p>
      <p>{dueDate}</p>
      <button onClick={()=>handleDeleteTodo(todo)} className='bg-red-500 text-white px-2 py-1 rounded-md'>Remove</button>
    </div>
  )
}

export default Todo
