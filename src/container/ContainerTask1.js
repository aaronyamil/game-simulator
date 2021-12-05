import React, { useState } from "react";
import { Task1 } from "../components/Task1";

export const ContainerTask1 = (props) => {
  const [user, setUser] = useState({});
  const [userLevelUp, setLevelUp] = useState({});

  const levelUp = (userId) => {
    const time8hours = 28800;
    props.data.forEach((element) => {
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
