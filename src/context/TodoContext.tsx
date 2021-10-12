/** @format */

import React from "react";
import Todo from "./../models/todo";

const TodoContext = {
  items: [],
  addTodo: () => {},
  removeTodo: () => {},
};

const TodoContextProvider: React.FC = () => {
  return <TodoContext.Provider>{props.children}</TodoContext.Provider>;
};
