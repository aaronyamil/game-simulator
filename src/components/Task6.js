import React from "react";
import { UserCache } from "./UserCache";

export const Task6 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Calculate Ranks</div>
      <input
        type="button"
        onClick={() => props.CalculateCache()}
        value="calcular"
      />
      <br />
      <span>User Ranks:</span>
      <UserCache
        userId={props.user.userId}
        global={props.global}
        national={props.national}
        friends={props.friends}
        score={props.score}
        level={props.level}
        time={props.time}
      />
    </div>
  );
};
