/** @format */

import React, { useState, useEffect } from "react";
import Todos from "./Components/Todos";
import Todo from "./models/todo";
import Shows from "./Components/Shows";
import Show from "./models/show";
import NewTodo from "./Components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos((prevState) => {
      // return prevState.concat(newTodo);  // option
      return [...prevState, { ...newTodo }];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  // const todos = [
  //   new Todo("Top React Developer"),
  //   new Todo("Top Typescript Developer"),
  // ];

  // const shows = [
  //   new Show("Iron maiden", "2021/11/11"),
  //   new Show("Metallica", "2022/11/01"),
  // ];

  return (
    <div>
      <div className="App">
        <NewTodo addTodo={addTodoHandler} />
        <Todos items={todos} onRemoveTodo={removeTodoHandler} />
        {/* <Shows items={shows} /> */}
      </div>
    </div>
  );
}

export default App;
