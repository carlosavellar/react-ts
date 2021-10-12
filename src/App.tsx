/** @format */

import React, { useState, useEffect } from "react";
import Todos from "./Components/Todos";
import Todo from "./models/todo";
import NewTodo from "./Components/NewTodo";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todosDummy = [
    new Todo("Ser disciplinado"),
    new Todo("Dive in to the change"),
  ];

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div>
      <div className="App">
        <Todos todos={todos} removeTodo={removeTodoHandler} />
        {/* <Shows items={shows} /> */}
        <NewTodo addTodo={addTodoHandler} />
      </div>
    </div>
  );
};

export default App;
