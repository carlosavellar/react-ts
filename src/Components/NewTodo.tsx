/** @format */
import React, { useRef } from "react";

const NewTodo: React.FunctionComponent<{ addTodo: (text: string) => void }> = (
  props
) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitTodoHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    props.addTodo(enteredText);
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
