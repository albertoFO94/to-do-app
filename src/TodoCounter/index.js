import React from "react";
import "./TodoCounter.css";

/* const styles = {
  color: 'red',
  backgroundColor: 'yellow',
}; */

function TodoCounter({ total, completed}) {
  return (
    <h2 className="TodoCounter">{completed} of {total} TODOs has been completed</h2>
  );
}

export { TodoCounter };