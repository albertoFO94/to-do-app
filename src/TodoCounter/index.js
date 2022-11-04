import React from "react";
import "./TodoCounter.css";

function TodoCounter({ totalTodos, completedTodos, loading }) {
  return (
    <h2
      className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
    >
      {completedTodos} of {totalTodos} TODOs has been completed
    </h2>
  );
}

export { TodoCounter };