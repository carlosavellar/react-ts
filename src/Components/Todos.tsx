/** @format */

import React from "react";
import Todo from "./../models/todo";
import TodoItem from "./TodoItem";

const Todos: React.FC<{ todos: Todo[]; removeTodo: (todoId: string) => void }> =
  (props) => {
    return (
      <div>
        <ul>
          {props.todos.map((todo) => {
            return (
              <TodoItem
                key={todo.id}
                text={todo.text}
                onRemoveTodo={props.removeTodo.bind(null, todo.id)}
              />
            );
          })}
        </ul>
      </div>
    );
  };

export default Todos;
