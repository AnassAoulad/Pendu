import React from "react";
import "./index.css";

function Button({ onClick: handleClick, value = "anouar" }) {
  return (
    <button className="buttoncss" onClick={handleClick}>
      {value}
    </button>
  );
}

export default Button;
