import React from 'react'
import { useState } from 'react'
import { TodoContext } from './store/AppContext'
import Header from './Component/Header'
import AddTodo from './Component/AddTodo'
import Welcome from './Component/Welcome'
import TodoItems from './Component/TodoItems'

function App() {
  const[todo,newTodo] = useState([]);

  function newTodoSetHandler(name,dueDate){
   const newItem = [...todo,{todo:name,dueDate:dueDate}]
   newTodo(newItem)
  }
  function handleDeleteTodo(todoName){
    const newData = todo.filter((item)=>item.todo !== todoName)
    newTodo(newData)
  }

  return (
    <TodoContext.Provider>

    <div>
      <Header/>
      <AddTodo method={newTodoSetHandler}/>
      <Welcome todo={todo}/>
      <TodoItems todo={todo} handleDeleteTodo={handleDeleteTodo}/>
    </div>
    </TodoContext.Provider>
  )
}

export default App
