import React from "react";
import Header from "./Component/Header";
import AddTodo from "./Component/AddTodo";
import Welcome from "./Component/Welcome";
import TodoItems from "./Component/TodoItems";
import TodoItemsContextProvider from "./store/AppContext";
import Counter from "./Component/Counter";


function App() {


  return (
    <Counter/>
    // <TodoItemsContextProvider>
    //   <div>
    //     <Header />
    //     <AddTodo />
    //     <Welcome />
    //     <TodoItems />
    //   </div>
    //   </TodoItemsContextProvider>
  );
}

export default App;
