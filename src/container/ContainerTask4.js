import React, {useState} from "react";
import { Task4 } from "../components/Task4";
import utils from "../libs/utils";

export const ContainerTask4 = (props) => {
  const [position, setPosition] = useState(0);

  const nationalCondition = (data, user) => {
    return data.country === user.country
  }

  const calculateNationalRankPosition = (userId) => {
    let arrayScores = utils.instance.calculateScoreGlobal(props.data,props.user,nationalCondition);
    arrayScores.forEach((element, index) => {
      if (element.userId === userId) {
        setPosition(index);
      }
    });
  };
  return (
    <div>
      <Task4 calculateNationalRankPosition={calculateNationalRankPosition} position={position} user={props.user}/>
    </div>
  );
};
