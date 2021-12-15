import React, { useContext } from 'react'
import Input from "./input";
import Classement from "./classement";
import Word from "./word";
import { ThemeContext } from "./dark-mode";
import SwitchButton from './button';
import "./App.css"

function App() {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className={`bg ${darkMode ? "bg-dark" : "bg-light"}`}>
      <h1 className={`heading ${darkMode ? "heading-dark" : "heading-light"}`}>Pendu</h1>
        <div className={`para ${darkMode ? "para-dark" : "para-light"}`}>
          <React.Fragment>
            <SwitchButton />
            <Word/>
            <Input/>
            <Classement/>
        </React.Fragment>
      </div>
    </div>
  );
}

export default App;
