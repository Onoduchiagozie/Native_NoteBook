import React, { createContext, useState } from "react";

// Create the context
export const BlogContext = createContext();

// Context provider component
export const BlogProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native", completed: false },
  ]);

  const addTodo = (newData) => {
    setTodoList([
      ...todoList,
      { id: todoList.length + 1, title: newData, completed: false },
    ]);
  };

  const RemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <BlogContext.Provider value={{ todoList, addTodo, RemoveTodo }}>
      {children}
    </BlogContext.Provider>
  );
};
