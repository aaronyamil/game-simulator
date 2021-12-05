import React, { useState } from "react";
import { Task1 } from "../components/Task1";

export const ContainerTask1 = (props) => {
  const [userLevelUp, setLevelUp] = useState({});

  const levelUp = () => {
    const time8hours = 28800;

    const level =
      parseInt(props.user.time) > time8hours
        ? parseInt(props.user.time) / time8hours
        : parseInt(props.user.level);
    const time = parseInt(props.user.time) - time8hours * Math.round(level);
    let newUser = {
      userId: props.user.userId,
      name: props.user.name,
      level: parseInt(props.user.level) + Math.round(level),
      coins: props.user.coins,
      time: time,
      country: props.user.country,
      friends: props.user.friends,
    };
    setLevelUp(newUser);
  };

  return (
    <div className="container-component">
      <Task1 levelUp={levelUp} user={props.user} userLevelUp={userLevelUp} />
    </div>
  );
};
