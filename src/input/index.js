// eslint-disable-next-line
import React from "react";
import '../input/index.css'

function Input() {

  function handleChange(event) {
    let enter = event.target.value;
  }

  return (
    <div className="SearchBar">
      <input type="text" minLength="0" maxLength="1" name="search" onChange={handleChange} className="Input"/>
    </div>
  );
}
export default Input;
