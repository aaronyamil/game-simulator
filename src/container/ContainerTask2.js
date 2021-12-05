import React, { useState } from "react";
import { Task2 } from "../components/Task2";
import utils from "../libs/utils";

export const ContainerTask2 = (props) => {
  const [user, setUser] = useState({});
  const [userScore, setUserScore] = useState(0);

  const calculateScore = (userId) => {
    props.data.forEach((element) => {
      if (element.userId === userId) {
        setUser(element);
        setUserScore( utils.instance.calculateScore(element.level , element.coins, element.time));
      }})
  }
  return (
    <div className="container-component">
      <Task2 calculateScore={calculateScore} user={user} userScore={userScore}/>
    </div>
  );
};
