import React from "react";
import { User } from "./User";

export const Task2 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Calculate Score</div>
      <input
        type="button"
        onClick={() =>
          props.calculateScore("bec6ea91-9bd8-471c-a19f-a53cefe2a9b3")
        }
        value="calcular"
      />
      <br />
      <span>User:</span>
      <User user={props.user} />
      <span>User Score: </span>
      <b>{props.userScore}</b>
    </div>
  );
};
