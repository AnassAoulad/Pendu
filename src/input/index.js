// eslint-disable-next-line
import React from "react";
import '../input/index.css'

function Input() {

  return (
    <div className="SearchBar">
      <input type="text" minLength="0" maxLength="1" name="search" onChange={handleChange} className="Input"/>
    </div>
  );
}
export default Input;
