import React, { useState } from "react";
import { Task3 } from "../components/Task3";
import utils from "../libs/utils";

export const ContainerTask3 = (props) => {
  const [position, setPosition] = useState(0);

  const calculateGlobalRankPosition = () => {
    let arrayScores = utils.instance.calculateScoreGlobal(props.data,props.user,()=>true)
    arrayScores.forEach((element,index) => {
      if (element.userId === props.user.userId) {
        setPosition(
          index
        );
      }
    });
  };
  return (
    <div className="container-component">
      <Task3 calculateGlobalRankPosition={calculateGlobalRankPosition} position={position} user={props.user}/>
    </div>
  );
};
