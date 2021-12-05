import React from "react";
//bec6ea91-9bd8-471c-a19f-a53cefe2a9b3
export const Task3 = (props) => {
  return (
    <div className="container-component">
      <div className="title-component">Calculate Global Position</div>
      <input
        type="button"
        onClick={() =>
          props.calculateGlobalRankPosition()
        }
        value="calcular"
      />
      <br />
      <span>UserId: </span>
      <i>{props.user.userId}</i>
      <br />
      <span>User Position: </span>
      <b>{props.position}</b>
    </div>
  );
};
