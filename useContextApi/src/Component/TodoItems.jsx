import React from 'react'
import Todo from './Todo'

function TodoItems({todo,handleDeleteTodo}) {
  return (
    <div>
      {todo.map((item,index)=><Todo key={index} todo={item.todo} dueDate={item.dueDate} handleDeleteTodo={handleDeleteTodo}/>)}
    </div>
  )
}

export default TodoItems
