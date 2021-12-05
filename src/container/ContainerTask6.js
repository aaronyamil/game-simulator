import React, { useState } from "react";
import { Task6 } from "../components/Task6";
import utils from "../libs/utils";

export const ContrainerTask6 = (props) => {
  const [global, setGlobal] = useState(0);
  const [national, setNational] = useState(0);
  const [friends, setFriends] = useState(0);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0);
  const CalculateCache = () => {
    // score
    setScore(
      utils.instance.calculateScore(
        props.user.level,
        props.user.coins,
        props.user.time
      )
    );
    //Global
    let arrayScores = utils.instance.calculateScoreGlobal(
      props.data,
      props.user,
      () => true
    );
    arrayScores.forEach((element, index) => {
      if (element.userId === props.user.userId) {
        setGlobal(index);
      }
    });
    // national
    const nationalCondition = (data, user) => {
      return data.country === user.country;
    };
    let arrayScores2 = utils.instance.calculateScoreGlobal(
      props.data,
      props.user,
      nationalCondition
    );
    arrayScores2.forEach((element, index) => {
      if (element.userId === props.user.userId) {
        setNational(index);
      }
    });

    // friends
    const friendCondition = (data, user) => {
      return user.friends == data.userId;
    };
    let arrayScores3 = utils.instance.calculateScoreGlobal(
      props.data,
      props.user,
      friendCondition
    );
    arrayScores3.forEach((element) => {
      if (element.score > score) {
        setFriends(2);
      } else setFriends(1);
    });
    // Level
    const time8hours = 28800;
    const newLevel = Math.round(
      parseInt(props.user.time) > time8hours
        ? parseInt(props.user.time) / time8hours
        : parseInt(props.user.level)
    );
    setLevel(parseInt(props.user.level) + newLevel);
    // time
    setTime(parseInt(props.user.time) - time8hours * Math.round(newLevel));
  };

  return (
    <div className="container-component">
      <Task6
        user={props.user}
        CalculateCache={CalculateCache}
        global={global}
        national={national}
        friends={friends}
        score={score}
        level={level}
        time={time}
      />
    </div>
  );
};
