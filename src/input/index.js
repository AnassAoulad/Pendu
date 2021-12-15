// eslint-disable-next-line
import React from "react";
import './index.css'

function Input() {

  function handleChange(event) {
    let enter = event.target.value;
    console.log(enter)
    let tab= []
    tab += enter
    console.log(tab)
  }

  return (
    <div className="SearchBar">
      <input type="text" minLength="0" maxLength="1" name="search" onChange={handleChange} className="Input"/>
    </div>
  );
}
export default Input;
