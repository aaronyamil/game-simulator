import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.css";
import { ContainerTask1 } from "./container/ContainerTask1";
import { ContainerTask2 } from "./container/ContainerTask2";

function App() {
  const [menu, setmenu] = useState(0)
  const navigation = (key) => {
    setmenu(key);
  }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span className="title-menu">TiveLabs Code Challenge</span>
          <img src={logo} className="logo-menu App-logo" alt="logo" />
        </div>
        <div>
          <input type='button' value='Sub Task1' onClick={()=>navigation(0)} />
          <input type='button' value='Sub Task2' onClick={()=>navigation(1)} />
        </div>
      </header>
      <div className="container">
        {menu === 0 && (<ContainerTask1 />)}
        {menu === 1 && (<ContainerTask2 />)}
      </div>
    </div>
  );
}

export default App;
