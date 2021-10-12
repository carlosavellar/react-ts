/** @format */

import React, { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodoContext } from "./../store/TodoContext";

const Todos: React.FC = () => {
  const context = useContext(TodoContext);
  return (
    <div>
      <ul>
        {context.items.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              text={todo.text}
              onRemoveTodo={context.removeTodo.bind(null, todo.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;
