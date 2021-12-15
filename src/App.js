import React, {
 useEffect, useState
} from 'react'
import Input from "./input";
import Classement from "./classement";
import Word from "./word";
import axios from 'axios';
import { map } from 'lodash';
/// import { API_URL } from '../settings';

function App() {
  return(
    <div className="App">
      <h1>Pendu</h1>
        <React.Fragment>
          <Word/>
          <Input/>
          <Classement/>
      </React.Fragment>
    </div>
  )
}

export default App;
