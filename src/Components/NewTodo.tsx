/** @format */

import { useRef } from "react";

import classes from "./NewTodo.module.css";

const NewTodo: React.FC<{
  addTodo: (text: string) => void;
}> = (props) => {
  const inputTodoRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = inputTodoRef.current!.value;
    // if We do know that the default returneed value is a null we can use a exclamation mark instead

    if (enteredText.trim().length === 0) {
      return;
    }
    props.addTodo(enteredText);
  };

  return (
    <div>
      <form onSubmit={submitHandler} className={classes.form}>
        app
        <label htmlFor="text">Todo</label>
        <input type="text" id="text" ref={inputTodoRef} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTodo;
