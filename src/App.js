import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/main.css";
import http from "./libs/http";
import { ContainerTask1 } from "./container/ContainerTask1";
import { ContainerTask2 } from "./container/ContainerTask2";
import { ContainerTask3 } from "./container/ContainerTask3";
import { ContainerTask4 } from "./container/ContainerTask4";
import { ContrainerTask5 } from "./container/ContrainerTask5";

const userId = "bec6ea91-9bd8-471c-a19f-a53cefe2a9b3";

function App() {
  const [menu, setmenu] = useState(0);
  const [user, setUser] = useState({});
  const [data, setData] = useState([]);

  const getData = async () => {
    const res = await http.instance.get("../data/users.data.json");

    setData(JSON.parse(res));

    JSON.parse(res).forEach((element) => {
      if (element.userId === userId) {
        console.log("USER", element);
        setUser(element);
        return;
      }
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const navigation = (key) => {
    setmenu(key);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span className="title-menu">TiveLabs Code Challenge</span>
          <img src={logo} className="logo-menu App-logo" alt="logo" />
        </div>
        <div>
          <input
            type="button"
            value="Sub Task A"
            onClick={() => navigation(0)}
          />
          <input
            type="button"
            value="Sub Task B"
            onClick={() => navigation(1)}
          />
          <input
            type="button"
            value="Sub Task C"
            onClick={() => navigation(2)}
          />
          <input
            type="button"
            value="Sub Task D"
            onClick={() => navigation(3)}
          />
          <input
            type="button"
            value="Sub Task E"
            onClick={() => navigation(4)}
          />
        </div>
      </header>
      <div className="container">
        {menu === 0 && <ContainerTask1 data={data} user={user} />}
        {menu === 1 && <ContainerTask2 data={data} user={user} />}
        {menu === 2 && <ContainerTask3 data={data} user={user} />}
        {menu === 3 && <ContainerTask4 data={data} user={user} />}
        {menu === 4 && <ContrainerTask5 data={data} user={user} />}
      </div>
    </div>
  );
}

export default App;
