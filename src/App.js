import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.css";
import http from './libs/http'
import { ContainerTask1 } from "./container/ContainerTask1";
import { ContainerTask2 } from "./container/ContainerTask2";

function App() {
  const [menu, setmenu] = useState(0);
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await http.instance.get("../data/users.data.json");
    console.log("res", JSON.parse(res));
    setData(JSON.parse(res));
  };

  useEffect(() => {
    getData();
  }, []);

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
          <input type='button' value='Sub Task A' onClick={()=>navigation(0)} />
          <input type='button' value='Sub Task B' onClick={()=>navigation(1)} />
        </div>
      </header>
      <div className="container">
        {menu === 0 && (<ContainerTask1 data={data}/>)}
        {menu === 1 && (<ContainerTask2 data={data}/>)}
      </div>
    </div>
  );
}

export default App;
