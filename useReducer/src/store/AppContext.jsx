import { createContext } from "react";
import { useReducer } from "react";

export const TodoContext = createContext();

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { todo: action.payload.name, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.todo !== action.payload.todoName
    );
  }
  return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
  const [todo, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  function newTodoSetHandler(name, dueDate) {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        name,
        dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  }
  function handleDeleteTodo(todoName) {
    const newItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(newItemAction);
  }

  return <TodoContext.Provider value={{ todo, newTodoSetHandler, handleDeleteTodo }}>
    {children}
  </TodoContext.Provider>;
};
export default TodoItemsContextProvider;
