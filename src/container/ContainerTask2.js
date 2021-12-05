import React, { useState } from "react";
import { Task2 } from "../components/Task2";
import utils from "../libs/utils";

export const ContainerTask2 = (props) => {
  const [userScore, setUserScore] = useState(0);

  const calculateScore = () => {
    setUserScore(
      utils.instance.calculateScore(
        props.user.level,
        props.user.coins,
        props.user.time
      )
    );
  };
  return (
    <div className="container-component">
      <Task2
        calculateScore={calculateScore}
        user={props.user}
        userScore={userScore}
      />
    </div>
  );
};
