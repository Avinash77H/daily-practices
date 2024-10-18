import React, { useState } from "react";

function AddTodo({ method }) {
  const [todo, setTodo] = useState();
  const [dueDate, setDueDate] = useState();

  function todoChangeHandler(event) {
    setTodo(event.target.value);
    
  }
  function dueDateChangeHandler(event) {
    setDueDate(event.target.value);
    }

  function addHandler(){
    method(todo,dueDate)
    setTodo("")
    setDueDate("")

  }

  return (
    <div className="flex justify-between mx-20 mt-8">
      <input
        type="text"
        onChange={todoChangeHandler}
        placeholder="Enter Your Task"
        className="border border-black"
      />
      <input
        type="date"
        onChange={dueDateChangeHandler}
        placeholder="Select Date"
        className="border border-black"
      />
      <button
        onClick={addHandler}
        className="bg-green-500 text-white px-2 py-1 rounded-md"
      >
        Add
      </button>
    </div>
  );
}

export default AddTodo;
