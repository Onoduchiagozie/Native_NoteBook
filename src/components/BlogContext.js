import React, { createContext, useState } from "react";
import axios from "axios";

// Create the context
export const BlogContext = createContext();

// Context provider component
export const BlogProvider = ({ children }) => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Test Task From HardWritten State", completed: false },
  ]);

  const renderMe = () => {
    try {
      axios.get("http://192.168.100.67:3000/todo").then((res) => {
        setTodoList(res.data);
        console.log("Got these ones from DB", res.data);
      });
    } catch (e) {
      console.error(e);
    }
  };

  const addTodo = (newData) => {
    try {
      axios
        .post(`http://192.168.100.67:3000/todo`, {
          id: Math.floor(Math.random() * 9999) + 1,
          title: newData,
          completed: false,
        })
        .then((res) => console.log("Adding Task", res.data));

      setTodoList([...todoList, { title: newData, completed: false }]);
    } catch (e) {
      console.error(e);
    }
  };

  const RemoveTodo = (id) => {
    try {
      axios
        .delete(`http://192.168.100.67:3000/todo/${id}`)
        .then((res) => console.log("Task Deleted from Db", res.data));
    } catch (e) {
      console.error(e);
    }

    const myList = todoList.filter((todo) => todo.id !== id);
    setTodoList(myList);
  };

  return (
    <BlogContext.Provider value={{ todoList, addTodo, RemoveTodo, renderMe }}>
      {children}
    </BlogContext.Provider>
  );
};
