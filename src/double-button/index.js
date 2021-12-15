import React from "react";
import './index.css'

function Text(props) {
  return <p>{props.name}</p>;
}

function Button() {
  function handleClick(e) {
    e.preventDefault();
    console.log('Le lien a été cliqué.');
  }
  return (
    <div className="Button">
    <React.Fragment>
      <a href="#" onClick={handleClick}>
        <Text name="Gmail" />
      </a>
      <a href="#" onClick={handleClick}>
        <Text name="Image" />
      </a>
    </React.Fragment>
    </div>

  );
}

export default Button;
