import React, { useContext } from 'react'
import Todo from './Todo'
import { TodoContext } from '../store/AppContext'

function TodoItems() {
  const {todo,handleDeleteTodo} = useContext(TodoContext)
  return (
    <div>
      {todo.map((item,index)=><Todo key={index} todo={item.todo} dueDate={item.dueDate}/>)}
    </div>
  )
}

export default TodoItems
