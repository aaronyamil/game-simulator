import React, { useMemo, useState } from "react";
import { Task3 } from "../components/Task3";
import utils from "../libs/utils";

export const ContainerTask3 = (props) => {
  const [position, setPosition] = useState(0);
  const [user, setUser] = useState();

  const calculateGlobalRankPosition = (userId) => {
    let arrayScores = utils.instance.calculateScoreGlobal(props.data)
    arrayScores.forEach((element,index) => {
      if (element.userId === userId) {
        setPosition(
          index
        );
        setUser(userId)
      }
    });
  };
  return (
    <div className="container-component">
      <Task3 calculateGlobalRankPosition={calculateGlobalRankPosition} position={position} user={user}/>
    </div>
  );
};
