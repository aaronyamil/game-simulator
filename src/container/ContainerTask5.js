import React, { useState } from "react";
import { Task5 } from "../components/Task5";
import utils from "../libs/utils";

export const ContrainerTask5 = (props) => {
  const [position, setPosition] = useState(0);

  const friendCondition = (data, user) => {
    return user.friends == data.userId;
  };

  const calculateFriendsPosition = () => {
    let arrayScores = utils.instance.calculateScoreGlobal(
      props.data,
      props.user,
      friendCondition
    );
    arrayScores.forEach((element) => {
      if (
        element.score >
        utils.instance.calculateScore(
          props.user.level,
          props.user.coins,
          props.user.time
        )
      ) {
        setPosition(2);
      } else setPosition(1);
    });
  };
  return (
    <div className="container-component">
      <Task5
        calculateFriendsPosition={calculateFriendsPosition}
        position={position}
        user={props.user}
      />
    </div>
  );
};
