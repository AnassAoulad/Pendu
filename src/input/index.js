// eslint-disable-next-line
import React from "react";
import './index.css'

function Input() {

  function handleChange(event) {
    console.log(event.target.value);
  }

  return (
    <div className="SearchBar">
      <input type="text" minlength="0" maxlength="1" name="search" onChange={handleChange} className="Input"/>
    </div>
  );
}
export default Input;
