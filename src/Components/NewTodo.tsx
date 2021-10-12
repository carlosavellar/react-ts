/** @format */
import React, { useRef, useContext } from "react";
import { TodoContext } from "../store/TodoContext";
import Todo from "./../models/todo";

const NewTodo: React.FunctionComponent = (props) => {
  const context = useContext(TodoContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    context.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <label htmlFor="text">Text</label>
      <input type="text" placeholder={"add a todo"} ref={todoTextInputRef} />
      <button>add</button>
    </form>
  );
};

export default NewTodo;
