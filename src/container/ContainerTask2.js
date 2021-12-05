import React, { useState } from "react";
import { Task2 } from "../components/Task2";

export const ContainerTask2 = (props) => {
  const [user, setUser] = useState({});
  const [userScore, setUserScore] = useState(0);

  const calculateScore = (userId) => {
    props.data.forEach((element) => {
      if (element.userId === userId) {
        setUser(element);
        console.log('score', (parseInt(element.level) * parseInt(element.coins)) + parseInt(element.time));
        setUserScore((parseInt(element.level)*parseInt(element.coins)) + parseInt(element.time));

      }})
  }
  return (
    <div className="container-component">
      <Task2 calculateScore={calculateScore} user={user} userScore={userScore}/>
    </div>
  );
};
