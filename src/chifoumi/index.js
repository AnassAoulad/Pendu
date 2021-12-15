import React, { useState } from "react";
import Button from "../button"
import './index.css'
import map from "lodash"

const main = ['feuille', 'pierre', 'ciseaux']

export default function Chifoumi () {
  function clique() {
    console.log("clique")
  }
  return (
    map(element => {
      return (
      <React.Element>
        <Button value={element} onClick={clique}>{element}</Button>
      </React.Element>
      )
    })
  )
}
