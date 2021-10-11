/** @format */

import React from "react";
import Show from "./../models/show";

const Shows: React.FC<{ items: Show[] }> = (props) => {
  return (
    <div>
      <ul>
        {props.items.map((item) => {
          return (
            <li key={item.id}>
              {item.name} {item.date}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Shows;
