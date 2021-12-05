import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Task1 } from "../components/Task1";
import http from "../libs/http";

export const ContainerTask1 = (props) => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({});
  const [userLevelUp, setLevelUp] = useState({});

  const getData = async () => {
    const res = await http.instance.get("../data/users.data.json");
    console.log("res", JSON.parse(res));
    setData(JSON.parse(res));
  };

  useEffect(() => {
    getData();
  }, []);

  const levelUp = (userId) => {
    console.log("data", data);
    const time8hours = 28800;
    data.forEach((element) => {
      if (element.userId === userId) {
        setUser(element);
        const level =
          parseInt(element.time) > time8hours
            ? parseInt(element.time) / time8hours
            : parseInt(element.level);
        const time = parseInt(element.time) - time8hours * Math.round(level);
        let newUser = {
          userId: element.userId,
          name: element.name,
          level: parseInt(element.level) + Math.round(level),
          coins: element.coins,
          time: time,
          country: element.country,
          friends: element.friends,
        };
        setLevelUp(newUser);
      }
    });
  };
  
  return (
    <div className="container-component">
      <Task1 levelUp={levelUp} user={user} userLevelUp={userLevelUp} />
    </div>
  );
};
