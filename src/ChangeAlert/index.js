import React from "react";
import { useStorageListener } from "./useStorageListener";
import './ChangeAlert.css';

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);

  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Are changes</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Reload the page
          </button>
        </div>
      </div>
    );
  }
  else {
    return null;
  }
}

export { ChangeAlert };