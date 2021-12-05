import React from "react";
import { User } from "./User";

export const Task1 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Level Up</div>
      <input
        type="button"
        onClick={() => props.levelUp("bec6ea91-9bd8-471c-a19f-a53cefe2a9b3")}
        value="calcular"
      />
      <br />
      <span>User:</span>
      <User user={props.user} />
      <span>User Level UP:</span>
      <User user={props.userLevelUp} />
    </div>
  );
};
