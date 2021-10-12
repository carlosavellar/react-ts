/** @format */

import React from "react";
const TodoItem: React.FC<{
  text: string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li>
      <span>{props.text}</span>
      <span>
        <button onClick={props.onRemoveTodo}>x</button>
      </span>
    </li>
  );
};

export default TodoItem;
